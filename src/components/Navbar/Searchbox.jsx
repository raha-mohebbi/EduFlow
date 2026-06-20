import { IoSearch } from "react-icons/io5";
import { useState } from "react";
const Searchbox = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex items-center border rounded-lg px-4 py-2 w-full max-w-md bg-white">
      <IoSearch className="text-gray-500 mr-2" size={20} />

      <input
        type="text"
        placeholder="Search..."
        className="w-full outline-none text-sm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Searchbox;
