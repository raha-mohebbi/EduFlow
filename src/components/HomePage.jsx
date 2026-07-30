import TopInstructors from "./TopInstructors";
import Navbar from "./Navbar/Navbar";
import CourseCards from "./DashBoard/CourseCards";

const HomePage = ({addToCart}) => {
  return (
    <div>
      <Navbar />
      <TopInstructors />
      <CourseCards addToCart={addToCart}/>
    </div>
  );
};

export default HomePage;