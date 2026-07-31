import { IoSearch } from "react-icons/io5";

const Searchbox = ({ search = "", setSearch }) => {

  return (
    <div className="flex items-center gap-2 border rounded px-2 py-1">

      <IoSearch className="text-gray-500" />

      <input
        type="text"
        placeholder="Search courses or instructors..."
        className="w-full outline-none text-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  );
};

export default Searchbox;