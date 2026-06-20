import Searchbox from "./Searchbox";
import Profile from "./Profile";
import Notification from "./Notification";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 shadow bg-white">
      {/* Left */}
      <div className="text-xl font-bold">EduFlow</div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <Searchbox />
        <Notification />
        <Profile />
      </div>
    </nav>
  );
};

export default Navbar;
