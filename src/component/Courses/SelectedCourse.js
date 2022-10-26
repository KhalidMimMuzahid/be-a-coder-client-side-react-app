import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { BeakerIcon, StarIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
const SelectedCourse = () => {
  const [selectedCourse] = useLoaderData();
  console.log(selectedCourse);
  const {
    name,
    title,
    id,
    rating,
    total_sold,
    price,
    thumbnail_url,
    published_date,
    instructor,
    details,
    categoryId,
  } = selectedCourse;
  return (
    <div className="flex justify-center items-center mt-2 md:mt-8 mb-16 h-screen mb-20">
      <div className="shadow-slate-700 card card-compact w-96 bg-slate-400 shadow-xl py-2">
        <Link
          className="ml-4 flex"
          to={`/courses/eachcategorycoures/${categoryId}`}
        >
          <ArrowLeftIcon className="h-6 w-6 text-slate-900" />
          <span>Back</span>
        </Link>
        <figure>
          <img src={thumbnail_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          {/* instructor  start*/}
          <div className="flex items-center space-x-2">
            <img
              src={instructor.img}
              alt=""
              className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
            />
            <div className="-space-y-1">
              <h2 className="text-sm font-semibold leading-none">
                {instructor.name}
              </h2>
              <span className="inline-block text-xs leading-none dark:text-gray-400">
                {instructor.address}
              </span>
            </div>
          </div>
          {/* instructor end  */}
          <h2 className="card-title">{name}</h2>
          <p>{title}</p>
          <p>
            <span className="font-bold">OutLine:</span> {details}
          </p>
          <p>
            <span className="font-bold">Rating:</span> {rating?.number}
            <StarIcon className="h-4 w-4 text-slate-900 inline" />
          </p>
          <p>
            {" "}
            <span className="font-bold">Student: </span> {total_sold}
          </p>
          <p>
            <span className="font-bold">price:</span> ${price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectedCourse;
