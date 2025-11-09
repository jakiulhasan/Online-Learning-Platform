import logo from "../assets/logo.png";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const user = null;
  return (
    <nav className="bg-base-100 shadow-md">
      <nav className="text-base-content px-6 py-3 flex items-center justify-between  w-11/12 mx-auto">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-8" />
        </div>

        <ul className="hidden md:flex items-center gap-6 font-semibold">
          <NavLink to="/home" className="hover:text-primary cursor-pointer">
            HOME
          </NavLink>
          <NavLink to="/courses" className="hover:text-primary cursor-pointer">
            COURSES
          </NavLink>
          <NavLink
            to="/dashboard"
            className="hover:text-primary cursor-pointer"
          >
            DASHBOARD
          </NavLink>
          <NavLink to="/about" className="hover:text-primary cursor-pointer">
            ABOUT
          </NavLink>
          <NavLink to="/contact" className="hover:text-primary cursor-pointer">
            CONTACT
          </NavLink>
        </ul>

        <div className="hidden lg:flex items-center bg-base-200 rounded-md px-2 ml-4">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none px-2 py-1 text-sm"
          />
        </div>

        <div className="flex items-center gap-4 ml-4">
          <ThemeToggle></ThemeToggle>

          {/* User */}
          {user ? (
            <button className="p-2 hover:bg-base-200 rounded-full">
              <User size={18} />
            </button>
          ) : (
            <button className="btn btn-primary">LOGIN</button>
          )}
        </div>
      </nav>
    </nav>
  );
}
