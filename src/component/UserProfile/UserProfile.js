import React, { useContext } from "react";
import { AuthContext } from "../../contexts/UserContex";

const UserProfile = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="mt-28 h-screen">
      <h1>{currentUser.displayName}</h1>
    </div>
  );
};

export default UserProfile;
