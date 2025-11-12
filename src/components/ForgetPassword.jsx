import React, { use } from "react";
import { useLocation } from "react-router";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../context/AuthContext";

const ForgetPassword = () => {
  const { passwordReset } = use(AuthContext);
  const location = useLocation();
  const emailFromState = location.state?.email || "";

  const handleForgetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    passwordReset(email)
      .then(() => {
        toast.success("Password reset email sent!");
        setTimeout(() => {
          window.location.href = "https://mail.google.com/mail/u/0/#inbox";
        }, 3000);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div
      data-aos="zoom-in-up"
      className="card-body max-w-[600px] mx-auto py-20"
    >
      <form onSubmit={handleForgetPassword}>
        <h2 className="font-semibold text-2xl text-center mb-3">
          Forget Your Account
        </h2>
        <hr className="border-base-300" />
        <fieldset className="fieldset mt-3">
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input w-full"
            placeholder="Email"
            defaultValue={emailFromState}
            required
          />

          <button type="submit" className="btn btn-primary mt-4 w-full">
            Forget Now
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default ForgetPassword;
