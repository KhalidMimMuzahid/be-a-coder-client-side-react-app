import React from "react";
import { useLoaderData } from "react-router-dom";
import EachCourse from "./EachCourse";

const CoursesBody = () => {
  const eachCategoryCourses = useLoaderData();
  return (
    <div className="border border-4 border-red-900 grid grid-cols-12 justify-center pb-10">
      {eachCategoryCourses.map((eachCourse) => (
        <EachCourse
          eachCourse={eachCourse}
          key={eachCategoryCourses.indexOf(eachCourse)}
        />
      ))}
    </div>
  );
};

export default CoursesBody;
// col-span-12 lg:col-span-6
