import React from "react";
import { fetchProductbySlug, fetchProductbyName, fetchProductStockbyId } from "@/lib/fetchData";
import prisma from "@/lib/db";
import ProductCarousel from "../../ui/product/productCarousel";
import Productcolors from "@/app/ui/product/productcolors";
import ProductStocks from "@/app/ui/product/productStocks";
async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await fetchProductbySlug(params.slug);
  // console.log(product);
  const productName = product?.name?.toString();
  const productId = Number(product?.id)
  const productsbyName = await fetchProductbyName(productName);
const productStock = await fetchProductStockbyId(productId)
  console.log(productsbyName.length);

  return (
    <div className="flex text-default-600">
      <ProductCarousel imgUrl={product?.imageUrl} />
      <section className="flex flex-col ml-5">
        <article className="flex flex-col gap-4">
          <h1 className=" text-5xl font-bold">{product?.name}</h1>
          <p className="text-xl font-medium">{product?.price}</p>
        </article>
        <article  className="my-4">
          <Productcolors products={productsbyName} />
        </article>
        <article  className="my-4">
          <ProductStocks stocks={productStock} />
        </article>
      </section>
    </div>
  );
}

export default ProductPage;
