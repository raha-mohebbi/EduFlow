const InstructorCard = ({ instructor }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center hover:shadow-lg transition">
      
      <img
        src={instructor.avatar}
        alt={instructor.name}
        className="w-20 h-20 rounded-full object-cover"
      />

      <h3 className="mt-3 font-semibold text-gray-800">
        {instructor.name}
      </h3>

      <p className="text-sm text-gray-500">
        {instructor.title}
      </p>

      <span className="text-xs text-blue-500 mt-2">
        {instructor.courses} Courses
      </span>

    </div>
  );
};

export default InstructorCard;