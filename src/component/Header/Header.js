import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContex";

const Header = () => {
  const { currentUser, logOut } = useContext(AuthContext);
  console.log(currentUser?.displayName);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleSignOut = (e) => {
    e.preventDefault();
    console.log("clicked", currentUser?.displayName);
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div className="bg-gray-900 fixed top-0 right-0 left-0 z-50">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full md:max-w-screen-xl md:px-24 md:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white font-bold text-lg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>

            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
              Be A Coder
            </span>
          </Link>
          <ul className="flex items-center hidden space-x-8 md:flex">
            <li>
              <Link
                to="/home"
                aria-label="home"
                title="home"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                aria-label="courses"
                title="courses"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                aria-label="Blogs"
                title="Blogs"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Blogs
              </Link>
            </li>

            {!currentUser ? (
              <>
                <li>
                  <Link
                    to="/signin"
                    aria-label="signin"
                    title="signin"
                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Sign in
                  </Link>
                </li>

                <li>
                  <Link
                    to="/signup"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    Sign up
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    onClick={handleSignOut}
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    Sign Out
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  >
                    {currentUser.displayName}
                  </Link>
                </li>
              </>
            )}
          </ul>
          {/* mobile view */}
          <div className="md:hidden">
            <div className="flex items-center">
              {currentUser && (
                <h1 className="font-bold text-white text-lg">
                  {currentUser.displayName}
                </h1>
              )}
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-white" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
            </div>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 text-black font-bold text-lg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                          />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Be A Coder
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/home"
                          aria-label="Home"
                          title="Home"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/courses"
                          aria-label="Courses"
                          title="Courses"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blogs"
                          aria-label="blogs"
                          title="blogs"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blogs
                        </Link>
                      </li>
                      {!currentUser ? (
                        <li>
                          <Link
                            to="/signin"
                            aria-label="Sign In"
                            title="Sign In"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Sign In
                          </Link>
                        </li>
                      ) : (
                        <li>
                          <Link
                            onClick={handleSignOut}
                            aria-label="Sign Out"
                            title="Sign Out"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Sign Out
                          </Link>
                        </li>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
