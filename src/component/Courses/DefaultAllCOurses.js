import React from "react";
import { useLoaderData } from "react-router-dom";
import EachCourse from "./EachCourse";

const DefaultAllCOurses = () => {
  const eachCourses = useLoaderData();
  return (
    <>
      <h1 className="font-bold py-2 text-center border bg-white text-lg static lg:sticky lg:top-[5rem]">
        All Courses Here:
      </h1>
      <div className="border border-4 border-red-900 grid grid-cols-12 justify-center pb-10">
        {eachCourses.map((eachCourse) => (
          <EachCourse
            eachCourse={eachCourse}
            key={eachCourses.indexOf(eachCourse)}
          />
        ))}
      </div>
    </>
  );
};

export default DefaultAllCOurses;
