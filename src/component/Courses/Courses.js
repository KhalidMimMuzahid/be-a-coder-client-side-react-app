import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import CoursesSideNav from "./CoursesSideNav";

const Courses = () => {
  const allCourseCategory = useLoaderData();
  // console.log(allCourseCategory);
  return (
    // <div className="grid grid-cols-1 md:grid-cols-12 md:top-[5.3rem]s absolute">
    //   <div className="md:col-span-2 lg:col-span-3">
    //     <div className="md:h-full border border-4 border-black p-4  md:overflow-y-auto ">
    //       {allCourseCategory.map((courseCategory) => (
    //         <CoursesSideNav
    //           courseCategory={courseCategory}
    //           key={allCourseCategory.indexOf(courseCategory)}
    //         />
    //       ))}
    //     </div>
    //   </div>
    //   <div className="md:col-span-10 lg:col-span-9">
    //     <Outlet></Outlet>
    //   </div>
    // </div>

    <div className="grid grid-cols-1 md:grid-cols-12 relative top-[4.5rem] md:static bg-slate-500">
      <div className="md:col-span-3 lg:col-span-2">
        <div className="md:h-full border border-4 border-t-0 border-r-8 border-red-900 p-4  md:overflow-y-auto md:right-auto md:w-[25%] lg:w-[16.666666%] md:top-[5.3rem] md:left-[0px] md:inset-0 md:fixed">
          <div className="">
            {allCourseCategory.map((courseCategory) => (
              <CoursesSideNav
                courseCategory={courseCategory}
                key={allCourseCategory.indexOf(courseCategory)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="md:col-span-9 lg:col-span-10 md:relative md:top-20">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Courses;
// pb-[100px]
// grid grid-cols-12
