"use client";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  HeartIcon,
  PlusIcon,
  StarIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import Link from "next/link";

function ProductSlider({
  content,
  text,
  style,
}: {
  content: any[];
  text: string;
  style?: string;
}) {
  const [sectionData, setSectionData] = useState({ content: [] });
  const [quantityMap, setQuantityMap] = useState<Record<number, number>>({});

  const incrementItemQuantity = (id: number) => {
    setQuantityMap((prevQuantityMap) => ({
      ...prevQuantityMap,
      [id]: (prevQuantityMap[id] || 0) + 1,
    }));
  };

  const decrementItemQuantity = (id: number) => {
    if (quantityMap[id] && quantityMap[id] > 0) {
      setQuantityMap((prevQuantityMap) => ({
        ...prevQuantityMap,
        [id]: prevQuantityMap[id] - 1,
      }));
    }
  };

  const removeItem = (id: number) => {
    setQuantityMap((prevQuantityMap) => {
      const updatedQuantityMap = { ...prevQuantityMap };
      delete updatedQuantityMap[id];
      return updatedQuantityMap;
    });
  };
  let sliderRef = useRef<Slider | null>(null);

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const sliderSettings = {
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 7000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  useEffect(() => {
    if (content && content.length > 0) {
      setSectionData({ content: content as never[] });
    }
  }, [content]);

  return (
    <div className={`container relative mx-auto px-4 pt-20 md:block ${style}`}>
      <div className="content">
        <div className="flex justify-between">
          <h5 className="font-quicksand font-bold text-2xl leading-5 tracking-normal text-left">
            {text}{" "}
          </h5>
          <span className="text-orange-500 text-right md:hidden font-semibold text-sm">
            View All
          </span>
          <div className="controls justify-end mb-4 hidden md:block">
            <button
              onClick={goToPrev}
              className="border p-2 border-[#B0B0B0] mr-4 "
            >
              <FaChevronLeft className="text-[#B0B0B0]" />
            </button>
            <button className="border p-2 border-[#00A9A2]">
              <FaChevronRight onClick={goToNext} className="text-[#00A9A2]" />
            </button>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <Slider ref={(c) => (sliderRef.current = c)} {...sliderSettings}>
            {sectionData.content.map((item, index) => (
              <div key={index} className="mx-auto mb-4 relative">
                <div className="shadow-lg cursor-pointer relative">
                  <div className="relative">
                    <img
                      src={(item as any)?.image}
                      alt={(item as any)?.name}
                      className="w-[220px] h-[220px]"
                    />
                    <div className="absolute top-0 left-0 p-2">
                      <img src="/assets/images/topdeals.png" alt="left-icon" />
                    </div>
                    <div className="absolute top-0 right-0 p-2">
                      <HeartIcon className="h-6 w-6 text-rich-green" />
                    </div>
                  </div>
                  <div className="p-2">
                    {quantityMap[item.id] === undefined ||
                    quantityMap[item.id] === 0 ? (
                      <button
                        className="h-8 w-8 text-white rounded bg-rich-green"
                        onClick={() => incrementItemQuantity(item.id)}
                      >
                        +
                      </button>
                    ) : (
                      <div className="relative flex items-center">
                        <input
                          type="text"
                          value={quantityMap[item.id]}
                          className="border border-gray-400 pl-8 pr-10 py-1 w-full text-center"
                          readOnly
                        />
                        <button
                          className="absolute left-0 top-0 h-full w-8 text-white rounded-l bg-rich-green flex items-center justify-center"
                          onClick={() => incrementItemQuantity(item.id)}
                        >
                          +
                        </button>
                        <button
                          className="absolute right-0 top-0 h-full w-8 text-white rounded-r bg-rich-green flex items-center justify-center"
                          onClick={() => decrementItemQuantity(item.id)}
                        >
                          -
                        </button>
                      </div>
                    )}
                    <div className="mt-2 flex justify-between items-center">
                      <div className="flex items-center justify-start">
                        <StarIcon className="h-5 w-5 text-amber-400" />
                        <StarIcon className="h-5 w-5 text-amber-400" />
                        <StarIcon className="h-5 w-5 text-amber-400" />
                        <StarIcon className="h-5 w-5 text-amber-400" />
                        <StarIcon className="h-5 w-5 text-amber-400" />
                      </div>
                      <div className="flex justify-end items-center">
                        <span className="bg-amber-400 hidden md:block px-4 text-xs font-semibold leading-4 tracking-normal text-center">
                          +5.99 SAR{" "}
                        </span>
                        <MenuIcon className="h-5 w-5 text-gray-500" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h5 className="text-sm font-bold">
                        {(item as any).price}
                        {(item as any).currency}
                      </h5>
                      <span className="bg-amber-400 md:hidden px-2 sm:px-4 py-1 text-xs font-semibold leading-4 tracking-normal text-right ml-2">
                        +5.99 SAR
                      </span>
                    </div>
                    <span className="turncate line-clamp-1 text-sm font-meduim text-gray-600">
                      {(item as any).name.split(" ").slice(0, 4).join(" ")}
                    </span>
                    <div className="text-gray-500">
                      <Link
                        href={`/product/${(item as any).id}`}
                        className="text-rich-green"
                      >
                        Show more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ProductSlider;
