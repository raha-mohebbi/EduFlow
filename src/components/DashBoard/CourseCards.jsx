import courses from "./Courses";
import CourseCard from "./CourseCard";

const CourseCards = () => {
  return (
    <div className="course-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          image={course.image}
          title={course.title}
          instructor={course.instructor}
          description={course.description}
          price={course.price}
          rating={course.rating}
          category={course.category}
          students={course.students}
          isInCart={course.isInCart}
        />
      ))}
    </div>
  );
};

export default CourseCards;