import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const [fullName, setFullName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getProfile = async () => {
      const { data: userData } = await supabase.auth.getUser();
      const user = userData?.user;

      if (!user) return;

      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (data) {
        setFullName(data.full_name || "");
        setAvatarUrl(data.avatar_url || "");
      }
    };

    getProfile();
  }, []);

  const updateProfile = async () => {
    setLoading(true);

    const { data: userData } = await supabase.auth.getUser();
    const user = userData?.user;

    const { error } = await supabase
      .from("profiles")
      .update({
        full_name: fullName,
        avatar_url: avatarUrl,
      })
      .eq("id", user.id);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    navigate("/profile");
  };

  return (
    <div className="flex flex-col gap-4 p-6">
      <h2 className="text-xl font-bold">Edit Profile</h2>

      <input
        type="text"
        placeholder="Full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="text"
        placeholder="Avatar URL"
        value={avatarUrl}
        onChange={(e) => setAvatarUrl(e.target.value)}
        className="border p-2 rounded"
      />

      <button
        onClick={updateProfile}
        disabled={loading}
        className="bg-green-500 text-white p-2 rounded"
      >
        {loading ? "Updating..." : "Update Profile"}
      </button>
    </div>
  );
};

export default EditProfile;