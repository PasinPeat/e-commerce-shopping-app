import React from "react";
import { fetchProductbySlug, fetchProductbyName } from "@/lib/fetchData";
import prisma from "@/lib/db";
import ProductCarousel from "../../ui/product/productCarousel";


async function ProductPage({ params }: { params: { slug: string } }) {
  
  const product = await fetchProductbySlug(params.slug);
  // console.log(product);
  const productName = product?.name?.toString();
  const productsbyName = await fetchProductbyName(productName);

  console.log(productsbyName.length);

  return (
    <div>
    
      <ProductCarousel imgUrl={product?.imageUrl}/>
    
      <div>{product?.name}</div>
      <div>{product?.price}</div>
    </div>
  );
}

export default ProductPage;
