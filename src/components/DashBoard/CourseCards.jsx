const CourseCards = () => {
  return (
    <div className="course-cards">
      <h2>Featured Courses</h2>
      <div className="cards-container">
        <div className="course-card">
          <h3>Introduction to Programming</h3>
          <p>
            Learn the basics of programming with this beginner-friendly course.
          </p>
        </div>
        <div className="course-card">
          <h3>Data Science Fundamentals</h3>
          <p>
            Explore the world of data science and learn how to analyze and
            visualize data.
          </p>
        </div>
        <div className="course-card">
          <h3>Web Development Bootcamp</h3>
          <p>
            Master the skills needed to build modern web applications from
            scratch.
          </p>
        </div>
      </div>
    </div>
  );
};
export default CourseCards;
