// import React from "react";
import ProductCard from "../productCard";
import { Button } from "@nextui-org/button";
import { ProductData } from "@/lib/productsample";

import { TestSwipervertwo } from "../slidervertwo";

type Props = {};

export function NewArrivals({}: Props) {
  return (
    <div className="my-4 flex flex-col  items-center gap-14">
      <h1 className="flex justify-center font-extrabold text-5xl my-8 ">
        New Arrival
      </h1>
      <TestSwipervertwo />

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
