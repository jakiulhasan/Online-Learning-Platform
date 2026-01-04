import React, { use, useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { RxAvatar } from "react-icons/rx";
import {
  Settings,
  Users,
  FolderPlus,
  BarChart3,
  Home,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Title } from "react-head";

const AdminDashboard = () => {
  const { user, signOutUser } = use(AuthContext);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="flex h-screen bg-base-300 overflow-hidden relative">
      <Title>Admin Panel | TURITOR</Title>

      {/* --- Sidebar Overlay --- */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
          onClick={closeSidebar}
        ></div>
      )}

      {/* --- Admin Sidebar --- */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white flex flex-col transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 text-2xl font-bold text-primary border-b border-slate-800 flex justify-between items-center">
          <div>
            TURITOR{" "}
            <span className="text-xs block text-white opacity-50 font-normal">
              ADMIN CONSOLE
            </span>
          </div>
          <button className="lg:hidden" onClick={closeSidebar}>
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {/* Note the use of "end" on the Overview link to prevent it from matching sub-routes incorrectly */}
          <NavLink
            to="/dashboard/admin"
            end
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition ${
                isActive
                  ? "bg-primary text-slate-900 font-bold"
                  : "hover:bg-slate-800"
              }`
            }
          >
            <BarChart3 size={20} /> Overview
          </NavLink>
          <NavLink
            to="/dashboard/admin/manage-user"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition ${
                isActive
                  ? "bg-primary text-slate-900 font-bold"
                  : "hover:bg-slate-800"
              }`
            }
          >
            <Users size={20} /> Manage Users
          </NavLink>
          <NavLink
            to="/dashboard/admin/add-courses"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition ${
                isActive
                  ? "bg-primary text-slate-900 font-bold"
                  : "hover:bg-slate-800"
              }`
            }
          >
            <FolderPlus size={20} /> Add Course
          </NavLink>
          <NavLink
            to="/dashboard/admin/site-setting"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition ${
                isActive
                  ? "bg-primary text-slate-900 font-bold"
                  : "hover:bg-slate-800"
              }`
            }
          >
            <Settings size={20} /> Site Settings
          </NavLink>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button
            onClick={() => signOutUser()}
            className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition w-full"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>

      {/* --- Content Area --- */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-base-100 shadow-sm flex items-center justify-between px-4 lg:px-8 shrink-0">
          <button
            className="lg:hidden btn btn-ghost btn-sm"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>
          <div className="badge badge-primary font-bold p-3 uppercase hidden sm:flex">
            Administrative Access
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="flex items-center gap-3 ml-2 border-l pl-4">
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  className="w-10 h-10 rounded-full border border-primary"
                  alt="Admin"
                />
              ) : (
                <RxAvatar className="w-10 h-10" />
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          {/* Dynamic components render here */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
