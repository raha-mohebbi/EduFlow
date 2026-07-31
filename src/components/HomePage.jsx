import { useState } from "react";
import TopInstructors from "./TopInstructors";
import Navbar from "./Navbar/Navbar";
import CourseCards from "./DashBoard/CourseCards";

const HomePage = ({ addToCart, cart }) => {

  const [search, setSearch] = useState("");

  return (
    <div>

      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <TopInstructors />

      <CourseCards
        addToCart={addToCart}
        cart={cart}
        search={search}
      />

    </div>
  );
};

export default HomePage;