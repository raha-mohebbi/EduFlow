import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const createProfile = async () => {
    setLoading(true);

    const { data: userData } = await supabase.auth.getUser();
    const user = userData?.user;

    if (!user) return;

    const { error } = await supabase.from("profiles").insert([
      {
        id: user.id,
        full_name: fullName,
        avatar_url: null,
      },
    ]);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    navigate("/home");
  };

  return (
    <div className="flex flex-col gap-4 p-6">
      <h2 className="text-xl font-bold">Create Profile</h2>

      <input
        type="text"
        placeholder="Full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="border p-2 rounded"
      />

      <button
        onClick={createProfile}
        disabled={loading}
        className="bg-blue-500 text-white p-2 rounded"
      >
        {loading ? "Creating..." : "Create Profile"}
      </button>
    </div>
  );
};

export default CreateProfile;