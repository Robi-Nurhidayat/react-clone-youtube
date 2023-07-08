import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="bg-white flex justify-between px-4 py-4 items-center w-screen top-0 sticky">
      <Link to={"/"}>
        <span>YOUTUBE</span>
      </Link>
      <SearchBar />
    </div>
  );
};

export default Navbar;
