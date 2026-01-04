import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { FormInput, SuccessMessage } from "./FormComponents";
import { FormLoader, ButtonLoader } from "./FormLoader";
import { validateEmail, validatePassword } from "../utils/formValidation";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userSignIn, googleSignIn } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleForgetPassword = (e) => {
    const email = e.target.parentNode.parentNode.parentNode.email.value;
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    navigate("/auth/forgot-password", { state: { email } });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // Validation
    const newErrors = {};
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError) newErrors.email = emailError;
    if (passwordError) newErrors.password = passwordError;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});
    setSuccessMessage("");

    userSignIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccessMessage("Login successful! Redirecting...");
        toast.success("Login Successful");
        form.reset();
        setTimeout(() => {
          navigate(`${location.state ? location.state : "/"}`);
        }, 500);
      })
      .catch((error) => {
        console.log("error:", error.message);
        const errorMessage =
          error.message === "Firebase: Error (auth/user-not-found)."
            ? "No account found with this email"
            : error.message === "Firebase: Error (auth/wrong-password)."
            ? "Incorrect password"
            : error.message === "Firebase: Error (auth/invalid-email)."
            ? "Invalid email format"
            : error.message;
        setErrors({ form: errorMessage });
        toast.error(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  const signInWithGoogle = () => {
    setGoogleLoading(true);
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccessMessage("Google Sign-In successful! Redirecting...");
        toast.success("Google Sign-In Successful");
        setTimeout(() => {
          navigate(`${location.state ? location.state : "/"}`);
        }, 500);
      })
      .catch((error) => {
        console.log("error:", error.message);
        setErrors({ form: error.message });
        toast.error(error.message);
      })
      .finally(() => setGoogleLoading(false));
  };

  return (
    <div className="bg-base-200">
      <FormLoader isLoading={isLoading} message="Signing in..." />
      <div className="hero py-5 md:min-h-[calc(100vh-64px)]">
        <div
          data-aos="zoom-in-up"
          className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
        >
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <h2 className="font-semibold text-2xl text-center mb-3">
                Login to your account
              </h2>
              <hr className="border-base-300" />
              {successMessage && <SuccessMessage message={successMessage} />}
              {errors.form && (
                <div className="alert alert-error gap-2 py-2 px-3">
                  <span className="text-sm">{errors.form}</span>
                </div>
              )}

              <fieldset className="fieldset mt-3 space-y-3">
                {/* Email */}
                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  error={errors.email}
                  required
                  disabled={isLoading}
                />

                {/* Password */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium">
                      Password <span className="text-error">*</span>
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      disabled={isLoading}
                      className={`input input-bordered w-full pr-10 ${
                        errors.password ? "input-error" : ""
                      }`}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="z-50 absolute right-3 top-3 text-xl text-gray-500 hover:text-gray-700"
                      disabled={isLoading}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  {errors.password && (
                    <div className="alert alert-error gap-2 py-2 px-3 mt-1">
                      <span className="text-sm">{errors.password}</span>
                    </div>
                  )}
                </div>

                <div className="mt-2">
                  <a
                    onClick={handleForgetPassword}
                    className="link link-hover text-sm cursor-pointer"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn btn-primary mt-4 w-full"
                >
                  {isLoading ? <ButtonLoader isLoading={true} /> : "Login"}
                </button>
              </fieldset>
            </form>

            {/* Google Sign-In */}
            <button
              onClick={signInWithGoogle}
              disabled={googleLoading || isLoading}
              className="btn mt-3 w-full flex items-center justify-center gap-2"
            >
              {googleLoading ? (
                <ButtonLoader isLoading={true} text="Signing in..." />
              ) : (
                <>
                  <FcGoogle /> Sign in with Google
                </>
              )}
            </button>

            <p className="text-center my-3">
              Don’t have an account?{" "}
              <Link
                to="/auth/register"
                className="font-semibold text-secondary"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
