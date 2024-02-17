import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";
import MobileNavbar from "./MobileNavbar";
function Footer() {
  return (
    <>
      <footer className="flex flex-col text-black-100 mt-5 border-t bg-[#272727] text-white">
        <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 mx-4 py-10 border-b border-[#555555]">
          <div className="flex flex-col justify-start items-start gap-6">
            <div className="flex items-center w-full ">
              <Image
                src="/assets/images/Dokan-logo.png"
                alt="logo"
                width={174}
                height={52}
                className="object-contain"
              />
              <div className="flex gap-1 ml-auto md:hidden">
                <a
                  href="/ar"
                  className="text-sm font-semibold mr-1  text-white text-opacity-50"
                >
                  AR
                </a>
                |
                <a
                  href="/en"
                  className="text-sm font-semibold ml-1 text-white hover:text-blue-600"
                >
                  EN
                </a>
              </div>
            </div>
            <p className="text-xs">Follow us</p>

            <div className="flex items-center w-full">
              <div className="flex gap-20 md:gap-4 justify-between">
                <Link href="/" className="text-gray-500">
                  <Image
                    src="/assets/images/Facebook.png"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="/" className="text-gray-500">
                  <Image
                    src="/assets/images/_Twitter.png"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="/" className="text-gray-500">
                  <Image
                    src="/assets/images/Instagram.png"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="/" className="text-gray-500">
                  <Image
                    src="/assets/images/_Snapchat.png"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="/" className="text-gray-500">
                  <Image
                    src="/assets/images/_YouTube.png"
                    width={24}
                    height={24}
                  />
                </Link>

                <Link href="/" className="text-gray-500">
                  <Image
                    src="/assets/images/_TikTok.png"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </div>
            <div className="items-center hidden md:flex">
              <Link href="/" className="text-gray-500">
                <Image
                  src="/assets/images/_WhatsApp.png"
                  width={24}
                  height={24}
                  alt="whatsapp"
                />
              </Link>
              <p className="font-quicksand text-sm font-semibold leading-6 tracking-normal text-left ml-2">
                {" "}
                +966 55 80 2 88 55
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:flex flex-row justify-between gap-7 flex-wrap">
            {footerLinks.map((link) => (
              <div
                key={link.title}
                className="flex flex-col w-full md:w-auto md:flex-auto gap-2 md:gap-4"
              >
                <h3 className="font-bold text-white text-opacity-50">
                  {link.title}
                </h3>
                {link.links.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className="text-white text-base font-medium leading-5 text-left"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          <div className="flex-col gap-5 hidden md:flex">
            <div className="flex gap-1 justify-end">
              <a
                href="/ar"
                className="text-sm font-semibold mr-1  text-white text-opacity-50"
              >
                AR
              </a>
              |
              <a
                href="/en"
                className="text-sm font-semibold ml-1 text-white hover:text-blue-600"
              >
                EN
              </a>
            </div>
            <p className="text-xs font-medium leading-4 text-right mt-3">
              Avaliable payment methods
            </p>
            <div className="flex gap-6">
              <Image
                src="/assets/images/master.png"
                width={32}
                height={10}
                className="object-contain"
              />
              <Image
                src="/assets/images/visa.png"
                width={26}
                height={15}
                className="object-contain"
              />
              <Image
                src="/assets/images/express.png"
                width={7}
                height={16}
                className="object-contain"
              />
              <Image
                src="/assets/images/epay.png"
                width={26}
                height={10}
                className="object-contain"
              />
            </div>

            <div className="flex justify-center gap-2">
              <Image
                src="/assets/images/paymentt.png"
                width={32}
                height={10}
                alt={""}
              />
              <Image
                src="/assets/images/cash.png"
                width={32}
                height={32}
                alt={""}
              />
            </div>
          </div>
        </div>

        <div className="flex-col hidden md:flex md-flex md:flex-row justify-between items-center px-6">
          <div className="container mx-auto max-w-6xl flex-col md:flex-row py-5 flex items-center justify-between">
            <p className="text-base font-bold leading-6 mx-10 ">
              support@dukan.me{" "}
            </p>
            <div className="flex gap-3 items-center">
              <Image
                src="/assets/images/app.png"
                width={114}
                height={38}
                alt="social"
              />
              <Image
                src="/assets/images/Google.png"
                width={128}
                height={38}
                alt="social"
              />
              <Image
                src="/assets/images/aliexpress.png"
                width={132}
                height={38}
                alt="social"
              />
            </div>
          </div>
        </div>

        {/* for the Mobile */}
        <div className="flex flex-col md:hidden px-6 py-5">
          <p className="text-base font-bold leading-6 text-right">
            support@dukan.me{" "}
          </p>
          <div className="flex-end mt-3">
            <div className="flex flex-row justify-end">
              <Image
                src="/assets/images/app.png"
                width={114}
                height={38}
                alt="social"
                className="mr-5"
              />
              <Image
                src="/assets/images/Google.png"
                width={128}
                height={38}
                alt="social"
              />
            </div>
            <div className="flex justify-end mt-3">
              <Image
                src="/assets/images/aliexpress.png"
                width={132}
                height={38}
                alt="social"
              />
            </div>
          </div>
        </div>
      </footer>
      <MobileNavbar />
    </>
  );
}

export default Footer;
