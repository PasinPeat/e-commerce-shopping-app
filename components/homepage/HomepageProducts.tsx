// import React from "react";
import ProductCard from "../productCard";
import { Button } from "@nextui-org/button";
import { ProductData } from "@/lib/productsample";
import { fetchNewArrivalProduct } from "@/lib/fetchData";
import { TestSwipervertwo } from "../slidervertwo";
import prisma from "@/lib/db";

type Props = {};

export async function NewArrivals({}: Props) {


  return (
    <div className="my-4 flex flex-col  items-center gap-14">
      <h1 className="flex justify-center font-extrabold text-5xl my-8 ">
        New Arrival
      </h1>
      <TestSwipervertwo  />

      <Button color="primary" className="w-[220px]">
        View All
      </Button>
    </div>
  );
}

export async function Topselling({}: Props) {
  const products = await prisma.product.findMany();

  // console.log(products[0].imageUrl);

  if (!products) {
    return <div> no products</div>;
  }
  return (
    <div className="my-4 sm:mt-8">
      <h1 className="text-center font-extrabold text-5xl my-8 ">Top Selling</h1>
      <section className="flex flex-nowrap gap-4 overflow-hidden">
        {products[0].imageUrl.map((product, index) => (
          <ProductCard key={index} src={product} name="test" price={12} />
        ))}
      </section>
    </div>
  );
}
