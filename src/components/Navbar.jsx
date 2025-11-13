import logo from "../assets/logo.png";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { Link, NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import Loading from "./Loading";
import { RxAvatar } from "react-icons/rx";

export default function Navbar() {
  const { user, signOutUser, loading } = use(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }

  const signOut = () => {
    console.log("clicked sign out");
    signOutUser()
      .then(() => {
        toast.success("Log Out Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav data-aos="fade-down" className="z-50 bg-base-100 relative shadow-md">
      <nav className="text-base-content px-6 py-3 flex items-center justify-between  max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-8" />
        </div>

        <ul className="hidden md:flex items-center gap-6 font-semibold">
          <NavLink to="/" className="hover:text-primary cursor-pointer">
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
          {/* {user ? (
            <div className="dropdown z-10 dropdown-hover dropdown-end">
              <div tabIndex={0} className="cursor-pointer m-1 flex gap-2">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <RxAvatar className="w-8 h-8" />
                )}
              </div>
              <ul
                tabIndex={-1}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-[300px] p-2 shadow-sm"
              >
                <li>
                  <Link to="/user-profile">
                    <div>
                      {user.photoURL ? (
                        <img
                          src={user.photoURL}
                          alt="User Avatar"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <RxAvatar className="w-8 h-8" />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold">My Profile</p>
                      <p className="text-sm">{user.email}</p>
                    </div>
                  </Link>
                </li>
                <li>
                  My Courses
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/auth/login" className="btn btn-primary">
              Login
            </Link>
          )} */}

          {user ? (
            <div className="dropdown dropdown-hover dropdown-end">
              <div
                tabIndex={0}
                className="cursor-pointer m-1 flex gap-2 items-center"
              >
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <RxAvatar className="w-8 h-8" />
                )}
              </div>

              <ul
                tabIndex={-1}
                className="dropdown-content menu z-100 bg-base-100 rounded-box w-[280px] p-2 shadow-md"
              >
                <li>
                  <Link to="/user-profile" className="flex items-center gap-2">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <RxAvatar className="w-8 h-8" />
                    )}
                    <div>
                      <p className="font-semibold">My Profile</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link to="/courses/add-course">Add Course</Link>
                </li>
                <li>
                  <Link to="/courses/my-courses">My Courses</Link>
                </li>
                <li>
                  <Link to="/update-courses">Update Courses</Link>
                </li>
                <li>
                  <Link to="/courses/my-enrolled-courses">
                    My Enrolled Courses
                  </Link>
                </li>

                <div className="divider my-1"></div>

                <li>
                  <button
                    onClick={signOut}
                    className="text-red-500 hover:text-red-600"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/auth/login" className="btn btn-primary">
              Login
            </Link>
          )}

          {/* {user && (
            <button className="btn btn-primary" onClick={signOut}>
              <a>Log Out</a>
            </button>
          )} */}
        </div>
      </nav>
    </nav>
  );
}
