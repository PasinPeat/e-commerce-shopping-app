"use client";
import ProductCard from "@/components/productCard";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "./styles.css";

export default function productCarousel({
  imgUrl,
}: {
  imgUrl: string[] | undefined;
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="flex overflow-hidden w-1/2 gap-4 h-[480px]">
      {/* {imgUrl &&
        imgUrl.map((product, index) => (
          <ProductCard key={index} src={product} name="test" price="50" />
        ))} */}
      <Swiper
        direction={"vertical"}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={2}
        freeMode={true}
        // watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="basis-1/4"
      >
        {imgUrl &&
          imgUrl.map((product, index) => (
            <SwiperSlide key={index}>
              <Image src={product}  width={200} height={200} alt="Running shoe picture"/>
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        // style={{
        //   '--swiper-navigation-color': '#fff',
        //   '--swiper-pagination-color': '#fff',
        // }}
        direction={"vertical"}
        spaceBetween={10}
        slidesPerView={"auto"}
        centeredSlides={true}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="basis-3/4 h-full"
        slidesOffsetBefore={85}
      >
        {imgUrl &&
          imgUrl.map((product, index) => (
            <SwiperSlide key={index} className="min-h-[480px] first:pt-10">
              <Image className="object-cover " src={product}  width={700} height={700} alt="Running shoe picture" quality={80}/>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}
