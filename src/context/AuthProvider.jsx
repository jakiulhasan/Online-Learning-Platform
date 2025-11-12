import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.config";
import axiosInstance from "./Axios";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get("/courses").then((res) => {
      setCourses(res.data);
      setLoading(false);
    });
  }, []);

  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const GoogleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, GoogleProvider);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    signOutUser,
    googleSignIn,
    userSignIn,
    courses,
    loading,
    setLoading,
    setUser,
    user,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
