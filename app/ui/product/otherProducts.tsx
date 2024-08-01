import React from "react";
import ProductCard from "@/components/productCard";
import Link from "next/link";
import { fetchOtherproducts } from "@/lib/fetchData";

type Props = {
  name: string | undefined;
};

async function OtherProducts({ name }: Props) {
  const otherProducts = await fetchOtherproducts(name);
  return (
    <div className="flex flex-row gap-8 justify-between">
      {otherProducts &&
        otherProducts.map((product, index) => (
          <Link href={`/products/${product.slug}`} key={index}>
            <ProductCard
              src={product.imageUrl[0]}
              name={product.name}
              price={product.price.toString()}
            />
          </Link>
        ))}
    </div>
  );
}

export default OtherProducts;
