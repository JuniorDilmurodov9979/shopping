import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-[#121214]">
      <div className="container_custom">
        <nav className="flex items-center gap-10 py-4">
          <Link to="/" className="text-2xl font-bold text-white">
            Logo
          </Link>
          <ul className="flex items-center space-x-4">
            <li>
              <NavLink
                to="/"
                className="text-white"
                style={({ isActive }) => (isActive ? { color: "red" } : {})}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="text-white blur">
                {" "}
              </NavLink>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
