import React from "react";
import { BeakerIcon, StarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const EachCourse = ({ eachCourse }) => {
  const {
    name,
    title,
    id,
    rating,
    total_sold,
    price,
    published_date,
    thumbnail_url,
    instructor,
  } = eachCourse;
  return (
    <div className="rounded-md shadow-md sm:w-96 dark:bg-gray-900 dark:text-gray-100 bg-slate-400 shadow-xl m-2 border border-4 border-red-900 col-span-12 lg:col-span-6 2xl:col-span-4 justify-self-center">
      <div className="flex items-center justify-between p-3">
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
      </div>
      <img
        src={thumbnail_url}
        alt=""
        className="object-cover object-center w-full h-72 dark:bg-gray-500"
      />
      <div className="p-3">
        <div className="space-y-3">
          <h2 className="card-title">{name}</h2>
          <p>{title}</p>
          <p>
            Rating: {rating?.number}
            <StarIcon className="h-4 w-4 text-slate-900 inline" />
          </p>
          <p>Student: {total_sold}</p>
          <p>price: ${price}</p>

          <div className="card-actions justify-end">
            <Link
              to={`/courses/selectedcourse/${id}`}
              className="btn btn-primary"
            >
              {" "}
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachCourse;
