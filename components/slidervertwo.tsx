"use client";

import ProductCard from "./productCard";
import React from "react";
import { ProductData } from "@/lib/productsample";
// import { SwiperOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
export const TestSwipervertwo = () => {
  return (
    <Swiper
      className="w-full h-full p-4"
      // spaceBetween={20}
      // slidesPerView={3}
      slidesPerView={"auto"}
      centeredSlides={true}
      loop={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: "auto",
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      // navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {ProductData.map((product, index) => (
        <SwiperSlide
          className="flex justify-center items-center p-10 sm:p-24"
          key={index}
        >
          <ProductCard
            src={product.src}
            name={product.name}
            price={product.price}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
