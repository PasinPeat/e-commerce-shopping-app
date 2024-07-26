import React from "react";
import { fetchProductbySlug } from "@/lib/fetchData";
import prisma from "@/lib/db";

type Props = {};

async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await fetchProductbySlug(params.slug);
  // console.log(product);

  return <>
  <div>{product?.name}</div>
  <div>{product?.price}</div>
  </>;
}

export default ProductPage;
