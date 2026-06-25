import TopInstructors from "./TopInstructors";
import Login from "./Login";
import Navbar from "../components/Navbar/Navbar";
const HomePage = () => {
  return (
    <div className="home-page">
    <Navbar />
      <TopInstructors />
    </div>
  );
};
export default HomePage;
