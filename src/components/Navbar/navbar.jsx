import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-[#121214]">
      <div className="container_custom">
        <nav className="flex items-center  gap-10 py-4">
          <Link to="/" className="text-2xl font-bold text-white">
            Logo
          </Link>
          <ul className="flex  items-center space-x-4">
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
          <div className="ml-auto flex gap-6 items-center">
            <div className="relative ">
              <input
                className="bg-[#313131] border border-transparent rounded-4xl max-w-[180px] p-3 [&::-webkit-search-cancel-button]:hidden"
                type="search"
                placeholder="searching..."
              />
              <SearchOutlined
                className="absolute top-4 right-4"
                style={{ color: "white", fontSize: "20px" }}
              />
            </div>
            <div className="">
              <Link to={"/cart"}>
                <ShoppingCartOutlined
                  className="cursor-pointer"
                  style={{ color: "white", fontSize: "30px" }}
                />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
