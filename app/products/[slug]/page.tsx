import React from "react";
import {
  fetchProductbySlug,
  fetchProductbyName,
  fetchProductStockbyId,
} from "@/lib/fetchData";
import prisma from "@/lib/db";
import ProductDesc from "@/app/ui/product/productDesc";
import ProductCarousel from "../../ui/product/productCarousel";
import Productcolors from "@/app/ui/product/productcolors";
import ProductStocks from "@/app/ui/product/productStocks";
import OtherProducts from "@/app/ui/product/otherProducts";

async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await fetchProductbySlug(params.slug);

  const productName = product?.name?.toString();

  const productDescription = product?.description?.contents;
  const productId = Number(product?.id);
  const productsbyName = await fetchProductbyName(productName);
  const productStock = await fetchProductStockbyId(productId);

  console.log(productsbyName.length);
  console.log(productDescription);

  return (
    <main className="text-default-600 flex flex-col gap-9">
      <div className="flex ">
        <ProductCarousel imgUrl={product?.imageUrl} />
        <section className="flex flex-col ml-5">
          <article className="flex flex-col gap-4">
            <h1 className=" text-5xl font-bold">{product?.name}</h1>
            <p className="text-xl font-medium">{product?.price}</p>
          </article>
          <article className="my-4">
            <Productcolors products={productsbyName} />
          </article>
          <article className="my-4">
            <ProductStocks stocks={productStock} />
          </article>
        </section>
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl">Product Specification</h1>
        <ProductDesc desc={productDescription} />
      </div>
      <div className="flex flex-col gap-8 justify-center items-center">
        <h1 className="font-bold text-3xl  ">You May Also Like</h1>
        <OtherProducts name={product?.name?.toString()} />
      </div>
    </main>
  );
}

export default ProductPage;
