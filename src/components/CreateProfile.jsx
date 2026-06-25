import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const createProfile = async () => {
    setLoading(true);

    try {
      // 1. validation
      if (!fullName.trim()) {
        alert("اسم نمی‌تواند خالی باشد");
        setLoading(false);
        return;
      }

      // 2. get user
      const { data: userData, error: userError } =
        await supabase.auth.getUser();

      const user = userData?.user;

      if (userError || !user) {
        alert("User not found");
        setLoading(false);
        return;
      }

      // 3. insert / upsert profile
      const { error } = await supabase.from("profiles").upsert(
        {
          id: user.id,
          full_name: fullName,
          avatar: null,
          
        },
        { onConflict: "id" }
      );

      // 4. error handling
      if (error) {
        console.log("Supabase error:", error);
        alert(error.message);
        setLoading(false);
        return;
      }

      // 5. success
      setLoading(false);
      navigate("/home");
    } catch (err) {
      console.log("Unexpected error:", err);
      alert("Something went wrong");
      setLoading(false);
    }
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">

    <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-gray-700/40 rounded-3xl shadow-2xl p-8 flex flex-col gap-6">

      <h2 className="text-2xl font-bold text-white text-center">
        Create Profile
      </h2>

      <input
        type="text"
        placeholder="Full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-gray-600 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all"
      />

      <button
        onClick={createProfile}
        disabled={loading}
        className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/30"
      >
        {loading ? "Creating..." : "Create Profile"}
      </button>

    </div>

  </div>
);
};

export default CreateProfile;