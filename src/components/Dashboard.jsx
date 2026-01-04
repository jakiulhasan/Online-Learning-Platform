import React, { use, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { RxAvatar } from "react-icons/rx";
import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  User as UserIcon,
  LogOut,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Loading from "./Loading";
import MyCourses from "./MyCourses";
import MyEnrollment from "./MyEnrollment";
import { Title } from "react-head";
import AdminDashboard from "./AdminDashboard";

const Dashboard = () => {
  const { user, loading, signOutUser } = use(AuthContext);
  const navigate = useNavigate();

  if (loading) return <Loading />;

  // Admin Check
  if (user?.email === "demoadmin@turitor.com") {
    return <AdminDashboard />;
  }

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        toast.success("Logged Out Successfully");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex h-screen bg-base-200">
      <Title>Dashboard | TURITOR</Title>

      {/* --- Sidebar --- */}
      <aside className="w-64 bg-base-100 border-r border-base-300 hidden lg:flex flex-col">
        <div className="p-6 border-b border-base-300 flex justify-center">
          <h1 className="text-2xl font-bold text-primary">TURITOR</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <p className="text-xs font-semibold text-gray-400 ml-3 mb-2 uppercase tracking-wider">
            Main Menu
          </p>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition ${
                isActive
                  ? "bg-primary text-primary-content"
                  : "hover:bg-base-300"
              }`
            }
          >
            <LayoutDashboard size={20} /> Dashboard Home
          </NavLink>
          <NavLink
            to="/courses/my-courses"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition ${
                isActive
                  ? "bg-primary text-primary-content"
                  : "hover:bg-base-300"
              }`
            }
          >
            <BookOpen size={20} /> My Courses
          </NavLink>
          <NavLink
            to="/certificates"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition ${
                isActive
                  ? "bg-primary text-primary-content"
                  : "hover:bg-base-300"
              }`
            }
          >
            <GraduationCap size={20} /> Certificates
          </NavLink>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* --- Top Navbar (Integrated from your Navbar component) --- */}
        <header className="h-16 bg-base-100 shadow-sm flex items-center justify-between px-8 z-20">
          <div className="flex items-center gap-4">
            <span className="lg:hidden font-bold text-primary text-xl">
              TURITOR
            </span>
            <h2 className="hidden lg:block text-lg font-semibold">
              Student Dashboard
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />

            {/* Profile Dropdown */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="cursor-pointer flex items-center gap-2"
              >
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    className="w-10 h-10 rounded-full object-cover border-2 border-primary"
                    alt="User"
                  />
                ) : (
                  <RxAvatar className="w-10 h-10 text-primary" />
                )}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-4 border border-base-300"
              >
                <li className="menu-title text-center pb-2 border-b border-base-200">
                  {user?.email}
                </li>
                <li>
                  <Link to="/user-profile">
                    <UserIcon size={16} /> Profile
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <LayoutDashboard size={16} /> Back to Home
                  </Link>
                </li>
                <div className="divider my-0"></div>
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-error font-semibold"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* --- Main Dashboard Content --- */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 mb-8 text-primary-content shadow-lg">
            <h1 className="text-3xl font-bold">
              Welcome back, {user?.displayName || "Learner"}! 👋
            </h1>
            <p className="mt-2 opacity-90 max-w-xl">
              Manage your enrolled courses, track your progress, and download
              your hard-earned certificates.
            </p>
          </div>

          <MyEnrollment />
          <div className="mt-8">
            <MyCourses />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
