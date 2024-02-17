"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  faMagnifyingGlass,
  faBarcode,
  faLocationPin,
  faWallet,
  faBars,
  faCartShopping,
  faBell,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const SecondNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="py-3 ">
        <div className="bg-rich-green py-3 md:bg-white">
          <div className="container mx-auto max-w-6xl hidden md:flex gap-4 items-center">
            {/* logo */}
            <Image
              src="/assets/icons/dokan.png"
              alt="logo"
              width={149}
              height={44}
            />

            {/* Search */}
            <div className="relative mt-4">
              <input
                type="text"
                placeholder="Search Products"
                className="border border-gray-300 rounded-r-3xl rounded-l-lg h-10 pl-10"
              />
              <span className="absolute top-2 left-3">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="w-5 h-5 text-rich-green cursor-pointer"
                />
              </span>
              <span className="absolute top-2 right-5">
                <FontAwesomeIcon
                  icon={faBarcode}
                  className="w-5 h-5 cursor-pointer"
                />
              </span>
            </div>

            {/* Delievery */}
            <div className="flex items-center gap-1">
              <FontAwesomeIcon
                icon={faLocationPin}
                className="w-5 h-5 text-red-500"
              />
              <div className="leading-4 ">
                <span className="text-xs">Delievery to:</span>
                <p className="text-sm text-best-black font-semibold">
                  sulaimaniyah Dist, 455 Riyad Saud...
                  <br /> (30-45 mins)
                </p>
              </div>
              <a
                href="#"
                className="underline underline-offset-1 text-orange-500 text-base"
              >
                Change
              </a>
            </div>

            {/* Cashback */}
            <div className="bg-yellow-300 bg-opacity-100 px-2 py-1">
              <span className="text-best-black text-xs font-normal">
                Your Cashback
              </span>
              <div className="flex items-center ">
                <FontAwesomeIcon icon={faWallet} className="w-3 h-3 " />
                <p className="text-best-black font-semibold text-xs ml-1">
                  SAR 124,00
                </p>
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-5 ml-auto">
              <Link href="/">
                <Image
                  src="/assets/icons/bell.png"
                  alt="bell"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/assets/icons/Favourite.svg"
                  alt="heart"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/assets/icons/user.svg"
                  alt="profile"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/assets/icons/Cart.svg"
                  alt="cart"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>

          {/* For Mobile */}
          <div className="container max-w-full flex-wrap  px-4 md:max-w-6xl md:px-0 md:hidden items-center">
            <div className="flex items-center w-full justify-between">
              {/* first row */}
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faBars}
                  className="w-8 h-8 mr-2 text-white md:hidden cursor-pointer"
                  onClick={toggleMenu}
                />
                <Image
                  src="/assets/icons/logoMob.svg"
                  alt="logo"
                  width={149}
                  height={44}
                />
              </div>

              {/* sideMenue */}
              <div
                className={`${
                  menuOpen ? "block" : "hidden"
                } absolute top-0 left-0 bg-gray-200 w-1/2 h-screen z-50`}
                ref={menuRef}
              >
                <div className="flex flex-col mt-10 items-center text-left gap-y-4">
                  <Link href="/" className="text-best-black font-semibold">
                    Home
                  </Link>
                  <Link href="/" className="text-best-black font-semibold">
                    Categories
                  </Link>
                  <Link href="/" className="text-best-black font-semibold">
                    Offers
                  </Link>
                  <Link href="/" className="text-best-black font-semibold">
                    Best Sellers
                  </Link>
                  <Link href="/" className="text-best-black font-semibold">
                    My Orders
                  </Link>
                  <Link href="/" className="text-best-black font-semibold">
                    My Account
                  </Link>
                  <Link href="/" className="text-best-black font-semibold">
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className="flex item-center gap-x-8">
                {/* Cashback */}
                <div className="bg-yellow-300 bg-opacity-100 rounded-tl-lg rounded-br-lg px-2 py-1">
                  <div className="flex items-center ">
                    <FontAwesomeIcon icon={faWallet} className="w-3 h-3 " />
                    <p className="text-best-black font-semibold text-xs ml-1">
                      SAR 124,00
                    </p>
                  </div>
                </div>
                <div>
                  <Link href="/">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="w-5 h-5 text-white"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Second row */}
            {/* search */}
            <div className="flex items-center w-full justify-between">
              <div className="relative mt-4  w-[90%]">
                <input
                  type="text"
                  placeholder="Search Products"
                  className="border border-gray-300 rounded-r-3xl rounded-l-lg w-full h-10 pl-10"
                />
                <span className="absolute top-2 left-3">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="w-5 h-5 text-rich-green cursor-pointer"
                  />
                </span>
                <span className="absolute top-2 right-5">
                  <FontAwesomeIcon
                    icon={faBarcode}
                    className="w-5 h-5 cursor-pointer"
                  />
                </span>
              </div>
              <div className="flex-end flex-grow text-right ml-auto mt-2">
                <Link href="/">
                  <FontAwesomeIcon
                    icon={faBell}
                    className="w-5 h-5 text-white mt-2"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Delievry */}
        <div className="container max-w-full flex-wrap flex  px-4 md:max-w-6xl  md:hidden bg-[#DCF3F3] py-3">
          <div className="flex">
            <FontAwesomeIcon icon={faLocation} className="w-5 h-5 text-black" />
            <p className="text-best-black font-semibold ml-3 line-clamp-1">
              {" "}
              sulaimaniyah Dist, 455 Riyad Saud...(30-45 mins)
            </p>
          </div>
          <div className="flex-grow flex-end text-right">
            <a
              href="#"
              className="underline underline-offset-1 text-orange-500 text-base self-end"
            >
              Change
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SecondNavbar;
