import React from "react";
import { fetchProductbySlug, fetchProductbyName } from "@/lib/fetchData";
import prisma from "@/lib/db";
import ProductCarousel from "../../ui/product/productCarousel";
import Productcolors from "@/app/ui/product/productcolors";
async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await fetchProductbySlug(params.slug);
  // console.log(product);
  const productName = product?.name?.toString();
  const productsbyName = await fetchProductbyName(productName);

  console.log(productsbyName.length);

  return (
    <div className="flex">
      <ProductCarousel imgUrl={product?.imageUrl} />
      <section className="flex flex-col">
        <article className="flex flex-col gap-4">
          <h1 className=" text-5xl font-bold">{product?.name}</h1>
          <p className="text-xl font-medium">{product?.price}</p>
        </article>
        <article  className="my-4">
          <Productcolors products={productsbyName} />
        </article>
      </section>
    </div>
  );
}

export default ProductPage;
