import InstructorCard from "./InstructorCard";

const instructors = [
  {
    id: 1,
    name: "John Doe",
    title: "Senior React Developer",
    courses: 12,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Sara Smith",
    title: "UI/UX Designer",
    courses: 8,
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Alex Johnson",
    title: "Full Stack Engineer",
    courses: 15,
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

const TopInstructors = () => {
  return (
    <section className="py-10 px-6">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-6">Top Instructors</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {instructors.map((inst) => (
          <InstructorCard key={inst.id} instructor={inst} />
        ))}
      </div>
    </section>
  );
};

export default TopInstructors;
