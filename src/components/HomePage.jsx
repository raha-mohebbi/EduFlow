import TopInstructors from "./TopInstructors";
import Navbar from "./Navbar/Navbar";
import CourseCards from "./DashBoard/CourseCards";

const HomePage = ({addToCart,cart}) => {
  return (
    <div>
      <Navbar />
      <TopInstructors />
      <CourseCards addToCart={addToCart}
      cart={cart} />
    </div>
  );
};

export default HomePage;