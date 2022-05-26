import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useLocation } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = ({ children }) => {
  const [user] = useAuthState(auth);
  const {pathname} = useLocation();

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar bg-base-300">
          
          { pathname.includes("dashboard") && <label tabindex="0" for="my-drawer-2" class="btn btn-ghost btn-circle lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>}
          <div className="flex-1 px-2 mx-2 text-2xl">Sarah Enterprise</div>
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal gap-3">
              {/* <!-- Navbar menu content here --> */}
              <li>
                <NavLink to={"/"} className="rounded-lg">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to={"/about"} className="rounded-lg">
                  About
                </NavLink>
              </li>
              <li>
                {user ? (
                  <>
                    <NavLink to={"/dashboard"} className="rounded-lg">
                      Dashboard
                    </NavLink>

                    <NavLink
                      to={"/"}
                      onClick={handleSignOut}
                      className="rounded-lg mx-3"
                    >
                      Sing Out
                    </NavLink>
                  </>
                ) : (
                  <NavLink to="/login">Login</NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 gap-3">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to={"/"} className="rounded-lg">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} className="rounded-lg">
              About
            </NavLink>
          </li>
          <li>
            {user ? (
              <>
                <NavLink to={"/dashboard"} className="rounded-lg">
                  Dashboard
                </NavLink>

                <NavLink
                  to={"/"}
                  onClick={handleSignOut}
                  className="rounded-lg my-3"
                >
                  Sing Out
                </NavLink>
              </>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
