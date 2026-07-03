const CourseCard = ({
  image,
  title,
  instructor,
  description,
  price,
  rating,
  category,
  students,
  isInCart,
  addToCart,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      {/* Course Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Course Info */}
      <div className="p-4">

        <span className="text-sm text-blue-600 font-semibold">
          {category}
        </span>

        <h2 className="text-xl font-bold mt-2">
          {title}
        </h2>

        <p className="text-gray-600 text-sm mt-2">
          {description}
        </p>

        <p className="text-gray-500 mt-3">
          👨‍🏫 {instructor}
        </p>

        <div className="flex justify-between mt-3 text-sm">
          <span>{rating}</span>
          <span>{students} Students</span>
        </div>

        <div className="flex justify-between items-center mt-5">

          <p className="text-2xl font-bold text-green-600">
            ${price}
          </p>

          <button
            onClick={addToCart}
            className={`px-4 py-2 rounded-lg text-white transition ${
              isInCart
                ? "bg-green-600"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isInCart ? "Added ✓" : "Add to Cart"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default CourseCard;