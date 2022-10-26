import React from "react";
import { Link } from "react-router-dom";

const CoursesSideNav = ({ courseCategory }) => {
  // console.log(allCourseCategory);
  return (
    <div className="">
      <Link
        className="block hover:bg-gray-500 shadow-slate-900/50 border mb-1 px-2"
        to={`/courses/eachcategorycoures/${courseCategory.id}`}
      >
        {courseCategory.name}
      </Link>
    </div>
  );
};

export default CoursesSideNav;
