import React from "react";

const CoursesSideNav = ({ allCourseCategory }) => {
  console.log(allCourseCategory);
  return (
    <div>
      {allCourseCategory.map((courseCategory) => (
        <h1>{courseCategory.name}</h1>
      ))}
    </div>
  );
};

export default CoursesSideNav;
