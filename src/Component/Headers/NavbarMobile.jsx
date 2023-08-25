import React from "react";
import { Link } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <>
      <div className="w-full h-screen bg-background opacity-40">
        <nav className="border flex flex-col items-center h-full justify-center border-black">
          <Link to="/about" className="my-3">
            About
          </Link>
          <Link to="/product" className="my-3">
            Product
          </Link>
          <Link to="/categories" className="my-3">
            Categories
          </Link>
        </nav>
      </div>
    </>
  );
};

export default NavbarMenu;
