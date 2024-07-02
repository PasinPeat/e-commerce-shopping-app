"use client";
import { register } from "swiper/element/bundle";
import ProductCard from "./productCard";
import React, { useRef, useEffect, ReactNode, RefObject } from "react";
import Swiper, { SwiperOptions } from "swiper";
import { SwiperSlideProps } from "swiper/react";
type Kebab<
  T extends string,
  A extends string = "",
> = T extends `${infer F}${infer R}`
  ? Kebab<R, `${A}${F extends Lowercase<F> ? "" : "-"}${Lowercase<F>}`>
  : A;

type KebabObjectKeys<T> = {
  [key in keyof T as Kebab<key & string>]: T[key] extends Object
    ? KebabObjectKeys<T[key]>
    : T[key];
};

type SwiperRef = HTMLElement & { swiper: Swiper; initialize: () => void };

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": SwiperContainerAttributes;
      "swiper-slide": SwiperSlideAttributes;
    }

    interface SwiperContainerAttributes extends KebabObjectKeys<SwiperOptions> {
      ref?: RefObject<SwiperRef>;
      children?: ReactNode;
    }
    interface SwiperSlideAttributes extends KebabObjectKeys<SwiperSlideProps> {}
  }
}
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const ProductData = [
  {
    src: "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/T-SHIRT-WITH-TAPE-DETAILS.jpg",
    name: "T-SHIRT WITH TAPE DETAILS",
    price: 120,
  },
  {
    src: "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/SKINNY-FIT-JEANS.jpg",
    name: "SKINNY FIT JEANS",
    price: 240,
  },
  {
    src: "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/CHECKERED-SHIRT.jpg",
    name: "CHECKERED SHIRT",
    price: 180,
  },
  {
    src: "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/SLEEVE-STRIPED-T-SHIRT.jpg",
    name: "SLEEVE STRIPED T-SHIRT",
    price: 130,
  },
];
register();

export const TestSwiper = () => {
  return (
    <swiper-container
      slides-per-view="3"
      navigation="true"
      pagination="true"
      scrollbar="true"
    >
      {ProductData.map((product, index) => (
        <swiper-slide>
          <ProductCard
            key={index}
            src={product.src}
            name={product.name}
            price={product.price}
          />
        </swiper-slide>
      ))}
    </swiper-container>
  );
};
