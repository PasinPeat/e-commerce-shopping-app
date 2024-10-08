"use client";
/* @ts-ignore */
import { Prisma, PrismaClient } from "@prisma/client";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
type Props = {
  products: Prisma.ProductCreateInput[];
};

interface ImgUrl {
  src: string[];
}

function Productcolors({ products }: Props) {
  const router = useRouter();

  return (
    <>
      <div>Select Colors</div>
      <div className="flex gap-3 mt-4 ">
        {products &&
          products.map((product, index) => (
            <div key={index}>
              <button
                type="button"
                onClick={() => router.push(`/products/${product.slug}`)}
              >
                {product.imageUrl && Array.isArray(product.imageUrl) && (
                  <Image
                    width={50}
                    height={50}
                    alt="Shoe image"
                    src={product.imageUrl[0]}
                    className=" rounded-lg"
                  />
                )}

                <p className=" text-sm">{product.color}</p>
              </button>
            </div>
          ))}
      </div>
    </>
  );
}

export default Productcolors;
