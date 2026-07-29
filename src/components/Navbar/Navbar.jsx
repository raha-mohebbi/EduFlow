import { useNavigate } from "react-router-dom";
import Searchbox from "./Searchbox";
import Profile from "./Profile";
import Cart from "../Cart";

import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="flex items-center justify-between p-4 border-b">
        {/* Left */}
        <div className="font-bold">EduFlow</div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/home")}
            className="px-3 py-1 border rounded hover:bg-gray-100"
          >
            Home Page
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="px-3 py-1 border rounded hover:bg-gray-100"
          >
            Dashboard
          </button>

          <Searchbox />
<TiShoppingCart
  onClick={() => navigate("/Cart")}
  className="cursor-pointer text-xl"
/>

          <Profile />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
