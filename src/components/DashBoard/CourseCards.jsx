import courses from "./Courses";
import { toast } from "react-toastify";

const CourseCards = ({ addToCart, cart }) => {

  const handleAddToCart = (course) => {

    addToCart(course);

    toast.success(
      `${course.title} added to cart`
    );

  };


  return (
    <div className="
      grid 
      grid-cols-1 
      md:grid-cols-3 
      gap-6 
      p-6
    ">

      {courses.map((course) => {

        const isInCart = cart.some(
          (item) => item.id === course.id
        );


        return (

          <div
            key={course.id}
            className="border rounded-xl p-4 shadow"
          >

            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded"
            />


            <h2 className="font-bold text-xl mt-3">
              {course.title}
            </h2>


            <p>
              ${course.price}
            </p>


            <p className="text-gray-600 mt-2">
              {course.description}
            </p>


            <p className="text-gray-600">
              Instructor: {course.instructor}
            </p>



            {
              isInCart && (

                <p className="
                  text-green-600 
                  mt-3 
                  font-semibold
                ">
                   This course is already in your cart 
                </p>

              )
            }



            <button

              disabled={isInCart}

              onClick={() => handleAddToCart(course)}

              className={`
                px-4 
                py-2 
                rounded 
                mt-3 
                text-white

                ${
                  isInCart
                  ? 
                  "bg-gray-400 cursor-not-allowed"
                  :
                  "bg-blue-600 hover:bg-blue-700"
                }

              `}
            >

              {
                isInCart
                ? "Added "
                : "Add To Cart"
              }

            </button>


          </div>

        );

      })}


    </div>
  );
};


export default CourseCards;