import courses from "./Courses";

const CourseCards = ({ addToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">

      {courses.map((course) => (

        <div 
          key={course.id}
          className="border rounded-xl p-4"
        >

          <img
            src={course.image}
            className="w-full h-40 object-cover"
          />

          <h2 className="font-bold text-xl">
            {course.title}
          </h2>

          <p>
            ${course.price}
          </p>


          <button
            onClick={() => addToCart(course)}
            className="bg-blue-600 text-white px-4 py-2 rounded mt-3"
          >
            Add To Cart
          </button>

        </div>

      ))}

    </div>
  );
};

export default CourseCards;