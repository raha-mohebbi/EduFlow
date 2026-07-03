import TopInstructors from "./TopInstructors";
import Login from "./Login";
import Navbar from "../components/Navbar/Navbar";
import CourseCards from "./DashBoard/CourseCards";
const HomePage = () => {
  return (
    <div className="home-page">
    <Navbar />
      <TopInstructors />
      <CourseCards/>
    </div>
  );
};
export default HomePage;
