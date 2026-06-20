import CourseCards from "./DashBoard/CourseCards";

const Sidebar = () => {
  return (
    <>
      <div className="w-64 bg-gray-800 text-white h-screen p-4">
        <h2 className="text-2xl font-bold mb-6">Courses</h2>
        <nav className="flex flex-col gap-4">
          <CourseCards />
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
