import { useNavigate } from "react-router-dom";
import Searchbox from "./Searchbox";
import Profile from "./Profile";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import { TiShoppingCart } from "react-icons/ti";

const Navbar = ({ search, setSearch }) => {
  
  const navigate = useNavigate();
const { cart } = useContext(CartContext);
  return (
    <nav className="flex items-center justify-between p-4 border-b">

      {/* Left */}
      <div className="font-bold">
        EduFlow
      </div>


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


        <Searchbox
          search={search}
          setSearch={setSearch}
        />


      <div className="relative">

  <TiShoppingCart
    onClick={() => navigate("/cart")}
    className="cursor-pointer text-2xl"
  />


  {cart.length > 0 && (
    <span
      className="
        absolute
        -top-2
        -right-2
        bg-red-500
        text-white
        text-xs
        rounded-full
        px-2
      "
    >
      {cart.length}
    </span>
  )}

</div>

        <Profile />

      </div>

    </nav>
  );
};

export default Navbar;