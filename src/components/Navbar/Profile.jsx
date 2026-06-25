import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useNavigate } from "react-router-dom";
import ProfileModal from "./profileModal";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

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
const handleLogout = async () => {
  await supabase.auth.signOut();
  navigate("/login");
};
  return (
    <div className="flex flex-col items-center gap-4 p-6">
      
      {/* Avatar */}
      <div
        onClick={() => setOpenModal(true)}
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

   
<ProfileModal
  isOpen={openModal}
  onClose={() => setOpenModal(false)}
  profile={profile}
  setProfile={setProfile}
  onLogout={handleLogout}
/>
    </div>
  );
};

export default Profile;