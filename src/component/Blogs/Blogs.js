import React from "react";
import { Outlet } from "react-router-dom";
import BlogSideNav from "./BlogSideNav";

const Blogs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12">
      <div className="md:col-span-2 lg:col-span-3">
        <div className="md:h-full border border-4 border-t-0 border-r-8 border-black p-4 pb-[100px]  md:overflow-y-auto md:right-auto md:w-[25%] lg:w-[16.66666%] md:top-[3.8125rem] md:left-[0px] md:inset-0 md:fixed">
          <BlogSideNav></BlogSideNav>
        </div>
      </div>
      <div className="md:col-span-10 lg:col-span-9">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Blogs;
// md:fixed
// md:inset-0
// md:left-[0px]
// md:top-[3.8125rem]
