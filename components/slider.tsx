"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from "./productCard";

const sliderSettings = {
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: false,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

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

export function productSlider() {
  return (
    <Slider {...sliderSettings}>
      {ProductData.map((product, index) => (
        <ProductCard
          key={index}
          src={product.src}
          name={product.name}
          price={product.price}
        />
      ))}
    </Slider>
  );
}
