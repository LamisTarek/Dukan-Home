import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const PrimaryNavbar = () => {
  return (
    <nav className="bg-gray-100 py-3 hidden md:block">
      <div className="container mx-auto max-w-6xl flex justify-between items-center">
        {/* Left-aligned section */}
        <ul className="flex items-center">
          <li className="flex items-center mr-4">
            <Image src="assets/icons/1.svg" alt="logo" width={44} height={24} />
            <p className="text-custom-nav px-3 text-best-black ">
              Fast Delivery &<br /> Free delivery
            </p>
          </li>
          <li className="flex items-center mr-4">
            <Image src="assets/icons/2.svg" alt="logo" width={24} height={24} />
            <p className="px-3 text-custom-nav text-best-black">
              + 500 offline stores with <br />
              high quality products
            </p>
          </li>
          <li className="flex items-center">
            <Image
              src="assets/icons/Active.svg"
              alt="logo"
              width={24}
              height={24}
            />
            <p className="px-3 text-custom-nav text-best-black">
              Save more by returning <br />
              cashback for each order
            </p>
          </li>
        </ul>

        {/* Right-aligned section */}

        <div className="flex items-center gap-1">
          <a
            href="/ar"
            className="text-sm font-semibold mr-1 text-best-black hover:text-blue-600"
          >
            AR
          </a>
          |
          <a
            href="/en"
            className="text-sm font-semibold ml-1 text-best-black hover:text-blue-600"
          >
            EN
          </a>
          <div className="flex items-center ml-3 pl-3">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="w-6 h-6 text-green-500 cursor-pointer ml-5"
            />
            <p className="text-best-black font-semibold ml-2 leading-6">
              +966 55 80 2 88 55
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PrimaryNavbar;
