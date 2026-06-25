import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const getUserAndProfile = async () => {
      setLoading(true);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setLoading(false);
        return;
      }

      setUser(user);

      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      setProfile(data);
      setLoading(false);
    };

    getUserAndProfile();
  }, []);

  const getInitial = () => {
    if (profile?.full_name) return profile.full_name[0].toUpperCase();
    if (user?.email) return user.email[0].toUpperCase();
    return "U";
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-40">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      
      {/* Avatar */}
      <div
        onClick={() => navigate("/edit-profile")}
        className="w-16 h-16 rounded-xl bg-gray-300 flex items-center justify-center text-gray-700 text-xl font-bold cursor-pointer overflow-hidden"
      >
        {profile?.avatar_url ? (
          <img
            src={profile.avatar_url}
            className="w-full h-full object-cover"
          />
        ) : (
          getInitial()
        )}
      </div>

      {/* Info */}
      <div className="text-center">
        <h2 className="text-lg font-bold">
          {profile?.full_name || "No name yet"}
        </h2>

        <p className="text-sm text-gray-500">
          {user?.email}
        </p>
      </div>

      {/* Edit Button */}
      <button
        onClick={() => navigate("/edit-profile")}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Edit Profile
      </button>
      <button
  onClick={async () => {
    await supabase.auth.signOut();
    navigate("/login");
  }}
  className="px-4 py-2 bg-red-500 text-white rounded-lg"
>
  Logout
</button>
    </div>
  );
};

export default Profile;