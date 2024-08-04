"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const imgSlide = [
  "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/running-pic/homepage-slide-img/24F_Timp5CU_8x3_Desktop.jpg",
  "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/running-pic/homepage-slide-img/Homepage_Category_Road.jpg",
  "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/running-pic/homepage-slide-img/S22-AboutUs-RunAndStop.jpg",
  "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/running-pic/homepage-slide-img/james-lee-_QvszySFByg-unsplash.jpg",
  "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/running-pic/homepage-slide-img/pexels-maksgelatin-4348639.jpg",
];

function HomepageSlide() {
  return (
    <>
      <div className="flex justify-center items-center w-[1280px] md:w-[1020px] sm:w-[640px]">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="h-1/2"
        >
          {imgSlide.map((pic, index) => (
            <SwiperSlide key={index}>
              <Image
                className="w-full"
                width={700}
                height={700}
                alt="running"
                src={pic}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default HomepageSlide;
