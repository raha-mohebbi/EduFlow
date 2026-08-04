import { useParams } from "react-router";
import courses from "./Courses";

import React from 'react'

const CourseDetails = () => {
  const { id } = useParams();
const course=courses.find(item=>item.id===Number(id))
if(!course){
  return <div>Course not found</div>
}
  return (
    <div className="p-6">


      <img
        src={course.image}
        alt={course.title}
        className="w-full h-80 object-cover rounded"
      />


      <h1 className="text-3xl font-bold mt-5">
        {course.title}
      </h1>


      <p className="mt-3">
        {course.description}
      </p>


      <p className="mt-3">
        Instructor:
        {course.instructor}
      </p>


      <p>
        Rating:
        {course.rating}
      </p>


      <p>
        Students:
        {course.students}
      </p>


      <p className="text-green-600 text-xl font-bold mt-3">
        ${course.price}
      </p>


  


    </div>
  );
};

export default CourseDetails