import { IoSearch } from "react-icons/io5";
import { useState } from "react";

const Searchbox = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex items-center gap-2 border rounded px-2 py-1">
      <IoSearch className="text-gray-500" />

      <input
        type="text"
        placeholder="Search..."
        className="w-full outline-none text-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Searchbox;