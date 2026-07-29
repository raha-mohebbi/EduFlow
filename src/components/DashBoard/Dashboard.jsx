import CourseCards from "./CourseCards";

const Dashboard = ({ addToCart }) => {
  return (
    <div className="flex">
      <CourseCards addToCart={addToCart} />
    </div>
  );
};

export default Dashboard;