import { useState } from "react";
import { supabase } from "../../lib/supabase";

const ProfileModal = ({ isOpen, onClose, profile, setProfile, onLogout }) => {
  const [fullName, setFullName] = useState(profile?.full_name || "");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const updateProfile = async () => {
    setLoading(true);

    const { data: userData } = await supabase.auth.getUser();

    const { error } = await supabase
      .from("profiles")
      .update({ full_name: fullName })
      .eq("id", userData.user.id);

    if (!error) {
      setProfile((prev) => ({ ...prev, full_name: fullName }));
      onClose();
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-5 rounded-xl w-80 space-y-4">

        <h2 className="text-lg font-bold">Profile Settings</h2>

        {/* Edit Name */}
        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="Full name"
        />

        <button
          onClick={updateProfile}
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          {loading ? "Saving..." : "Save"}
        </button>

        {/* Logout */}
        <button
          onClick={onLogout}
          className="w-full bg-red-500 text-white py-2 rounded"
        >
          Logout
        </button>

        <button
          onClick={onClose}
          className="w-full text-gray-500"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;