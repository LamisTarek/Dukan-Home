"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const Banners = () => {
  // Define your array of image URLs
  const banners = [
    "/assets/images/Hero-banners.png",
    "/assets/images/test.jpg",
    "/assets/images/Hero-banners.png",
    "/assets/images/test.jpg",
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(activeSlide === banners.length - 1 ? 0 : activeSlide + 1);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [activeSlide]);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <>
      <div className="hidden container px-4 mx-auto relative pt-5 md:block">
        {/* FirstSlider */}
        <div>
          <Link href="/shop">
            <Image
              src={banners[activeSlide]} 
              alt="banner"
              width={1232}
              height={400}
              className="crusor-pointer"
            />
          </Link>
          <div className="absolute bottom-100 left-0 right-0 flex justify-center">
            <div className="flex space-x-5 py-3">
              {banners.map((banner, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 transform rotate-45 bg-gray-400 diamond rocursor-pointer ${
                    index === activeSlide ? "bg-passion-orange" : ""
                  }`}
                  onClick={() => handleSlideChange(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* SecondSlider */}
        <div className="flex justify-between my-10">
          <div className="bg-[#a092e0] basis-1/2 h-[320px] rounded relative flex flex-col item-start justify-center">
            <p className="font-bold text-[32px] text-white text-start pl-7 z-40 leading-10">
              Easier shopping with online fast delivery. Meet new feature!
            </p>
            <CustomButton
              containerStyles="text-passion-orange bg-white rounded-lg mt-3 mx-7 border-passion-orange	border text-center text-base font-bold w-48 h-12 z-40"
              title="Learn More"
              route="/"
            />
            <div className="absolute top-11 right-5">
              <Image
                src="/assets/images/banner2.svg"
                alt="banner"
                width={300}
                height={300}
              />
            </div>
          </div>

          <div className="bg-mint-green basis-1/2 h-[320px] rounded relative flex flex-col items-center justify-center ml-4">
            <p className="font-bold text-[32px] text-black text-start px-7 z-40">
              Seasonal Offer
            </p>
            <CustomButton
              containerStyles="text-white bg-passion-orange rounded-lg mt-3 mx-7 border-passion-orange	border text-center text-base font-bold w-[158px] h-[48px] z-40"
              title="Shop Now"
              route="/"
            />
            <div className="absolute left-0 top-0">
              <Image
                src="/assets/images/strawberry.svg"
                alt="banner"
                width={230}
                height={161}
              />
            </div>
            <div className="absolute left-0 bottom-0">
              <Image
                src="/assets/images/anans.svg"
                alt="banner"
                width={163}
                height={270}
              />
            </div>
            <div className="absolute right-5 top-0">
              <Image
                src="/assets/images/veg.svg"
                alt="banner"
                width={250}
                height={154}
              />
            </div>
            <div className="absolute right-0 top-2">
              <Image
                src="/assets/images/bana.svg"
                alt="banner"
                width={200}
                height={213}
              />
            </div>
            <div className="absolute bottom-0 right-8">
              <Image
                src="/assets/images/purepng.svg"
                alt="banner"
                width={130}
                height={140}
              />
            </div>
            <div className="absolute bottom-0 left-10">
              <Image
                src="/assets/images/roman.svg"
                alt="banner"
                width={160}
                height={140}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block container pt-5 md:hidden">
        <div className="bg-[#D5F07D] basis-1 h-[140px] rounded relative flex flex-col items-center justify-center">
          <p className="font-bold  text-black text-start leading-6 text-xl px-7 z-40">
            Flavours of Italy
          </p>
          <p className="text-xs font-meduim text-center leading-4">
            20% off weekly offer for italian products{" "}
          </p>
          <div className="absolute left-0 top-2">
            <Image
              src="/assets/images/salsa.png"
              alt="banner"
              width={70}
              height={85}
            />
          </div>
          <div className="absolute left-5 bottom-0 overflow-hidden">
            <Image
              src="/assets/images/forkk.png"
              alt="banner"
              width={120}
              height={120}
            />
          </div>
          <div className="absolute left-13 bottom-0">
            <Image
              src="/assets/images/macronyy.png"
              alt="banner"
              width={75}
              height={90}
            />
          </div>
          <div className="absolute bottom-0 right-12">
            <Image
              src="/assets/images/jar.png"
              alt="banner"
              width={50}
              height={60}
            />
          </div>
          <div className="absolute bottom-0 right-3">
            <Image
              src="/assets/images/olive.png"
              alt="banner"
              width={60}
              height={120}
            />
          </div>
          <div className="absolute bottom-0 right-0">
            <Image
              src="/assets/images/wine.png"
              alt="banner"
              width={60}
              height={144}
            />
          </div>
          <div className="absolute top-0 right-5">
            <Image
              src="/assets/images/top-macrony.png"
              alt="banner"
              width={130}
              height={100}
            />
          </div>
        </div>
        <div className="bg-bright-orange mt-4 h-[64px] rounded flex items-center justify-between">
          <div className="flex items-center basis-1/4 ml-5">
            <img src="/assets/images/car.png" />
            <p className="ml-3 font-bold text-lg text-[#FF4300] leading-6">
              Delivery NOW
            </p>
          </div>
          <div className="basis-1/2  mt-6  font-quicksand text-base font-medium leading-5 tracking-normal text-left">
            <p>Get order in 60 min or less!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banners;
