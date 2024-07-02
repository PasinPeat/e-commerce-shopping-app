import React from "react";
import ProductCard from "../productCard";
import {Button, ButtonGroup} from "@nextui-org/button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import tshirtwithtape from '../../public/productImg/T-SHIRT-WITH-TAPE-DETAILS.jpg'
// import sKINNYFITJEANS from '../../public/productImg/SKINNY-FIT-JEANS.jpg'
// import cHECKEREDSHIRT from '../../public/productImg/CHECKERED-SHIRT.jpg'
// import sLEEVESTRIPEDTSHIRT from '../../public/productImg/SLEEVE-STRIPED-T-SHIRT.jpg'

type Props = {};
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

export function NewArrivals({}: Props) {
  return (
    <div className="my-4 flex flex-col gap-14">
      <h1 className="flex justify-center font-extrabold text-5xl my-8 ">New Arrival</h1>
      <section className="flex flex-nowrap gap-4 overflow-hidden">
        {ProductData.map((product, index) => (
          <ProductCard
            key={index}
            src={product.src}
            name={product.name}
            price={product.price}
          />
        ))}
      </section>
        <Button color="primary" className="w-[220px]">
      View All
    </Button>
    </div>
  );
}

export function Topselling({}: Props) {
  return (
    <div className="my-4 sm:mt-8">
      <h1 className="text-center font-extrabold text-5xl my-8 ">Top Selling</h1>
      <section className="flex flex-nowrap gap-4 overflow-hidden">
        {ProductData.map((product, index) => (
          <ProductCard
            key={index}
            src={product.src}
            name={product.name}
            price={product.price}
          />
        ))}
      </section>
    </div>
  );
}
