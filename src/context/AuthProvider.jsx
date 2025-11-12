import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import axiosInstance from "./Axios";

const AuthProvider = ({ children }) => {
  const [courses, setCourses] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get("/courses").then((res) => {
      setCourses(res.data);
      setLoading(false);
    });
  }, []);

  const authData = { courses, loading, setLoading };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
