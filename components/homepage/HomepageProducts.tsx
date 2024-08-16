// import React from "react";
import ProductCard from "../productCard";


import { fetchNewArrivalProduct } from "@/lib/fetchData";

import prisma from "@/lib/db";
import Link from "next/link";

type Props = {};
interface ProductData {
  price: string;
  id: number;
  SKU: string | null;
  name: string | undefined;
  brand_id: number | null;
  category_id: number | null;
  color: string | null;
  created_at: Date;
  imageUrl: string[];
  slug: string | null;
  update_at: Date | null;
  description_id: number | null;
}


export async function NewArrivals({}: Props) {
  const products = await fetchNewArrivalProduct();

  if (!products) {
    return <div> no products</div>;
  }
  return (
    <div className="my-4 sm:mt-8">
      <h1 className="text-center font-extrabold text-5xl my-8 ">
        New Arrivals
      </h1>
      <section className="flex flex-nowrap justify-evenly gap-4 overflow-hidden md:flex-wrap">
        {products &&
          products.map((product, index) => (
            <Link href={`/products/${product.slug}`} key={index}>
              <ProductCard
                src={product.imageUrl[0]}
                name={product.name}
                price={product.price}
              />
            </Link>
          ))}
      </section>
    </div>
  );
}
