import courses from "./Courses";
import CourseCard from "./CourseCard";

const CourseCards = ({ addToCart }) => {
  return (
    <div className="course-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          {...course}
          addToCart={() => addToCart(course)}
        />
      ))}
    </div>
  );
};

export default CourseCards;