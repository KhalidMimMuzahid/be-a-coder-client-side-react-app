import React, { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.init";
import { useEffect } from "react";

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContex = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const signUpWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const updateUserProfileInfo = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  });
  const authValue = {
    signUpWithEmailAndPassword,
    signInWithEmail,
    signInWithGoogle,
    signInWithGithub,
    currentUser,
    logOut,
    updateUserProfileInfo,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default UserContex;
