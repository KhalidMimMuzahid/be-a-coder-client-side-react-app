import React, { useContext } from "react";
import { AuthContext } from "../../contexts/UserContex";

const UserProfile = () => {
  const { currentUser } = useContext(AuthContext);
  const { displayName, email, photoURL, uid } = currentUser;
  return (
    <div className="mt-20 pb-96 pt-4 h-screen flex justify-center bg-slate-500">
      <div className="h-full">
        <div className="w-full h-full p-6 rounded-md shadow-md bg-gray-900 text-white">
          <img
            src={photoURL}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
              Email: {email}
            </span>
            <h2 className="text-xl font-semibold tracking-wide">
              Name: {displayName}
            </h2>
          </div>
          <p className="dark:text-gray-100">User Id: {uid}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
