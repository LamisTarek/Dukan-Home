"use client";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faWallet } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const CategoryNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="py-3 hidden md:block">
      <div className="container mx-auto max-w-6xl flex justify-between items-center">
        <ul className="flex items-center gap-6 justify-between font-semibold text-sm relative group">
          <li className="flex items-center">
            <Link href="/" onClick={toggleDropdown}>
              All Categories
            </Link>
            <FontAwesomeIcon icon={faAngleDown} className="w-3 h-4 ml-2" />
          </li>
          {/* Dropdown menu */}
          {isDropdownOpen && (
            <ul className="absolute z-20 top-full w-1/2 left-0 bg-orange-50 shadow-md border border-gray-300 rounded-md py-2 px-4">
              <li className="px-8 py-2">
                <Link href="/">Mother Care</Link>
              </li>
              <li className="px-8 py-2">
                {" "}
                <Link href="/">Mother Care</Link>
              </li>
              <li className="px-8 py-2">
                <Link href="/">Mother Care</Link>
              </li>
              
            </ul>
          )}

          <li>
            <Link href="/" className="flex items-center">
              <FontAwesomeIcon icon={faWallet} className="w-3 h-3 mr-2 " />
              Highest cashback
            </Link>
          </li>
          <li>
            <Link href="/">Top Deals</Link>
          </li>
          <li>
            <Link href="/">Fruits & Vegetables </Link>
          </li>
          <li>
            <Link href="/">Diary & Eggs</Link>
          </li>
          <li>
            <Link href="/">Beverages & Drinks</Link>
          </li>
          <li>
            <Link href="/">Fresh Bakery</Link>
          </li>
          <li>
            <Link href="/">Baby Products</Link>
          </li>
          <li>
            <Link href="/">Household</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CategoryNavbar;
