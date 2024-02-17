"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

const WeekOffers = () => {
  const images = [
    { id: 1, src: "/assets/images/add.png", caption: "Caption 1" },
    { id: 2, src: "/assets/images/add-1.png", caption: "Caption 1" },
    { id: 3, src: "/assets/images/add-2.png", caption: "Caption 1" },
    { id: 4, src: "/assets/images/add.png", caption: "Caption 1" },
    { id: 5, src: "/assets/images/add-1.png", caption: "Caption 1" },
  ];

  let sliderRef = useRef<Slider | null>(null);

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 8000,
    cssEase: "linear",
  };

  return (
    <>
      <div className="slider-container my-7 relative">
        <div className="hidden md:block">
          <h5 className="font-quicksand font-semibold mb-20 text-center text-2xl leading-5 tracking-normal hidden">
            Weeks Offers
          </h5>
          <Slider ref={(c) => (sliderRef.current = c)} {...settings}>
            {images.map((image) => (
              <div key={image.id}>
                <img
                  src={image.src}
                  alt={image.caption}
                  className=" px-4  h-[230px]"
                />
              </div>
            ))}
          </Slider>
          <div className="controls flex justify-center my-4">
            <button className="border  mr-4 " onClick={goToPrev}>
              <FaChevronLeft className="text-[#B0B0B0] border-none" />
            </button>
            <button className="border" onClick={goToNext}>
              <FaChevronRight className="text-[#00A9A2]" />
            </button>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-2  md:hidden">
          <img src="/assets/images/category.png" alt="add" className="w-full" />
          <img
            src="/assets/images/category-1.png"
            alt="add"
            className="w-full"
          />
          <img
            src="/assets/images/category-2.png"
            alt="add"
            className="w-full"
          />

          <img
            src="/assets/images/category-3.png"
            alt="add"
            className="w-full"
          />
        </div>
      </div>
    </>
  );
};

export default WeekOffers;
