import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { RxAvatar } from "react-icons/rx";
import {
  Settings,
  Users,
  FolderPlus,
  BarChart3,
  Home,
  LogOut,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Title } from "react-head";

const AdminDashboard = () => {
  const { user, signOutUser } = use(AuthContext);

  return (
    <div className="flex h-screen bg-base-300">
      <Title>Admin Panel | TURITOR</Title>

      {/* --- Admin Sidebar --- */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold text-primary border-b border-slate-800">
          TURITOR{" "}
          <span className="text-xs block text-white opacity-50 font-normal">
            ADMIN CONSOLE
          </span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <NavLink
            to="/dashboard"
            className="flex items-center gap-3 p-3 rounded-lg bg-slate-800 text-primary"
          >
            <BarChart3 size={20} /> Overview
          </NavLink>
          <NavLink
            to="/courses/add-course"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition"
          >
            <FolderPlus size={20} /> Add New Course
          </NavLink>
          <NavLink
            to="/admin/manage-users"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition"
          >
            <Users size={20} /> Manage Users
          </NavLink>
          <NavLink
            to="/admin/settings"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition"
          >
            <Settings size={20} /> Site Settings
          </NavLink>
        </nav>
        <div className="p-4 border-t border-slate-800">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
          >
            <Home size={16} /> Back to Public Site
          </Link>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* --- Top Navbar --- */}
        <header className="h-16 bg-base-100 shadow-sm flex items-center justify-between px-8 border-b border-base-300">
          <div className="badge badge-primary font-bold p-3 uppercase">
            Administrative Access
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="flex items-center gap-3 ml-2 border-l pl-4">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold leading-none">Admin User</p>
                <p className="text-[10px] text-gray-500">{user?.email}</p>
              </div>
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  className="w-10 h-10 rounded-full"
                  alt="Admin"
                />
              ) : (
                <RxAvatar className="w-10 h-10" />
              )}
            </div>
          </div>
        </header>

        {/* --- Admin Stats & Content --- */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="stats shadow bg-base-100">
              <div className="stat">
                <div className="stat-title">Total Sales</div>
                <div className="stat-value text-primary">$24.5k</div>
              </div>
            </div>
            <div className="stats shadow bg-base-100">
              <div className="stat">
                <div className="stat-title">New Students</div>
                <div className="stat-value">150</div>
              </div>
            </div>
            <div className="stats shadow bg-base-100">
              <div className="stat">
                <div className="stat-title">Course Requests</div>
                <div className="stat-value text-secondary">12</div>
              </div>
            </div>
            <div className="stats shadow bg-base-100">
              <div className="stat">
                <div className="stat-title">Server Status</div>
                <div className="stat-value text-success text-2xl">Healthy</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl p-6 border border-base-300">
            <h2 className="text-xl font-bold mb-4">Admin Quick Actions</h2>
            <div className="flex gap-4">
              <Link to="/courses/add-course" className="btn btn-primary">
                Create Course
              </Link>
              <button
                className="btn btn-outline btn-error"
                onClick={() => signOutUser()}
              >
                Emergency Logout
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
