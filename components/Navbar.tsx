import React from "react";
import PrimaryNavbar from "./PrimaryNavbar";
import SecondNavbar from "./SecondNavbar";
import CategoryNavbar from "./CategoryNavbar";
import "@/app/globals.css";

const Navbar = () => {
  return (
    <>
      <PrimaryNavbar />
      <SecondNavbar />
      <CategoryNavbar />
    </>
  );
};

export default Navbar;
