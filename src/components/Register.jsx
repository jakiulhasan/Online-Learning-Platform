import React, { use, useEffect, useState } from "react";
import { Link, Navigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaCheckCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { Helmet } from "react-helmet-async";

const RegexLower = /[a-z]/;
const RegexHigher = /[A-Z]/;
const RegexAll = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

const Register = () => {
  const { createAccount, updateUserProfile, googleSignIn, user, setUser } =
    use(AuthContext);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [hasUpper, setHasUpper] = useState(false);
  const [hasLower, setHasLower] = useState(false);
  const [has6Char, setHas6Char] = useState(false);
  const [allCheck, setAllCheck] = useState(true);

  const handlePasswordVerification = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  useEffect(() => {
    setHasUpper(RegexHigher.test(password));
    setHasLower(RegexLower.test(password));
    setHas6Char(password.length >= 6);
    setAllCheck(!RegexAll.test(password));
  }, [password]);

  const signInWithGoogle = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success("Google Sign-In Successful");
      })
      .catch((error) => {
        console.log("error:", error.message);
        toast.error(error.message);
      });
  };

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    createAccount(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        const profile = { displayName: name, photoURL: image };
        updateUserProfile(profile)
          .then(() => {
            const updatedProfile = {
              ...loggedUser,
              displayName: name,
              photoURL: image,
            };
            setUser(updatedProfile);
            toast.success("Account created successfully!");
            form.reset();
          })
          .catch((error) => toast.error(error.message));
      })
      .catch((error) => toast.error(error.message));
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="hero bg-base-200 py-5 md:min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegistration}>
              <h2 className="font-semibold text-2xl text-center mb-3">
                Register an account
              </h2>
              <hr className="border-base-300" />
              <fieldset className="fieldset mt-3">
                {/* name */}
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input w-full"
                  placeholder="Your Name"
                  required
                />
                {/* image */}
                <label className="label">Image URL</label>
                <input
                  name="image"
                  type="text"
                  className="input w-full"
                  placeholder="Your Image URL"
                  required
                />
                {/* Email */}
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input w-full"
                  placeholder="Your Email"
                  required
                />
                {/* Password */}
                <label className="label">Password</label>
                <div className="relative w-full">
                  <input
                    onChange={handlePasswordVerification}
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="input w-full pr-10"
                    placeholder="********"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="z-50 absolute right-3 top-3 text-xl text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={allCheck}
                  className="btn btn-neutral mt-4"
                >
                  Register
                </button>
              </fieldset>
            </form>

            {/* Password validation messages */}
            {password && (
              <div className="mt-3 space-y-1">
                <p className="flex gap-2 items-center">
                  {has6Char ? (
                    <FaCheckCircle className="text-xl text-green-600" />
                  ) : (
                    <IoMdCloseCircle className="text-xl text-red-600" />
                  )}
                  Must be at least 6 characters
                </p>
                <p className="flex gap-2 items-center">
                  {hasUpper ? (
                    <FaCheckCircle className="text-xl text-green-600" />
                  ) : (
                    <IoMdCloseCircle className="text-xl text-red-600" />
                  )}
                  1 Uppercase Letter
                </p>
                <p className="flex gap-2 items-center">
                  {hasLower ? (
                    <FaCheckCircle className="text-xl text-green-600" />
                  ) : (
                    <IoMdCloseCircle className="text-xl text-red-600" />
                  )}
                  1 Lowercase Letter
                </p>
              </div>
            )}

            <button onClick={signInWithGoogle} className="btn mt-3">
              <FcGoogle /> Sign in with Google
            </button>
            <p className="text-center mt-3">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-red-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
