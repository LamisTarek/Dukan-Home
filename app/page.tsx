"use client";
import { Banners, ProductSlider, SimpleSlider, WeekOffers } from "@/components";
import CardSection from "@/components/CardSection";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [productData, setProductData] = useState({
    mostPopular: [],
    topDeals: [],
  });

  

  useEffect(() => {
    const fetchData = async () => {
      const base_url = "https://innova.products.aait-d.com/api/website";
      const axiosInstance = axios.create({
        baseURL: base_url,
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": "en",
        },
      });
      try {
        const response = await axiosInstance.get("/home");
        const products = {
          mostPopular: response.data.data.find(
            (item: any) => item.type === "most_popular_products"
          ),
          topDeals: response.data.data.find(
            (item: any) => item.type === "top_deal_products"
          ),
        };
        setProductData(products);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Banners />
      <SimpleSlider />
      <ProductSlider
        content={productData.topDeals.content}
        text="Highest Cash"
      />
      <WeekOffers />

      <ProductSlider
        content={productData.topDeals.content}
        text={productData.topDeals.text || ""}
      />
      <CardSection src="/assets/images/gift.png" />

      <ProductSlider
        content={productData.mostPopular.content}
        text={productData.mostPopular.text || ""}
      />

      <CardSection src="/assets/images/countdown.png" style="hidden" />

      <ProductSlider
        content={(productData.topDeals as any).content}
        text="Personal Care"
        style="hidden md:block"
      />

      <ProductSlider
        content={productData.mostPopular.content}
        text="Products May Like"
        style="hidden md:block"
      />
    </>
  );
}
