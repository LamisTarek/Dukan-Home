"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute top-1/2 right-4 transform -translate-y-1/2  ${className}`}
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faAngleRight}
        className="h-6 w-6 text-black hidden md:block "
      />{" "}
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute top-1/2 left-4 transform -translate-y-1/2  ${className}`}
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faAngleLeft}
        className="h-6 w-6 text-black hidden md:block"
      />{" "}
    </div>
  );
}

export default function SimpleSlider() {
  const images = [
    { id: 1, src: "/assets/images/image 10.png", caption: "Milk" },
    { id: 2, src: "/assets/images/image 11.png", caption: "Drinks" },
    { id: 3, src: "/assets/images/image 12.png", caption: "Vegetables" },
    { id: 4, src: "/assets/images/image 13.png", caption: "Caption 1" },
    { id: 5, src: "/assets/images/image 10.png", caption: "Milk" },
    { id: 6, src: "/assets/images/image 11.png", caption: "Baby Care" },
    { id: 7, src: "/assets/images/image 12.png", caption: "Caption 1" },
    { id: 8, src: "/assets/images/image 13.png", caption: "Caption 1" },
    { id: 9, src: "/assets/images/image 10.png", caption: "Caption 1" },
    { id: 10, src: "/assets/images/image 11.png", caption: "Caption 1" },
    { id: 11, src: "/assets/images/image 12.png", caption: "Caption 1" },
  ];
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  return (
    <>
      <div className="slider-container  mx-5">
        {/* Conditionally render title and link only on mobile devices */}
        <div className="text-center mt-4 flex items-center justify-between lg:hidden">
          <h2 className="text-xl font-semibold">Product Catalog</h2>
          <Link href="/" className="font-semibold text-[#FF4300]">
            View All
          </Link>
        </div>
        <Slider {...settings}>
          {images.map((image) => (
            <div
              key={image.id}
              className="flex flex-col items-center justify-cente cursor-pointer"
            >
              <img src={image.src} alt={image.caption} />
              <p className="text-sm font-semibold leading-4 ml-5">
                {image.caption}
              </p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="container">
        <img
          src="/assets/images/return-banner.png"
          alt="return"
          className="my-4 hidden md:block"
        />
        <Image
          src="/assets/images/backSchool.png"
          alt="return"
          className="my-4 md:hidden"
          width={1200}
          height={200}
        />
      </div>
    </>
  );
}
