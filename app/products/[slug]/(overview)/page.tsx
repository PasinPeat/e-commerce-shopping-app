import { Suspense } from "react";
import {
  fetchProductbySlug,
  fetchProductbyName,
  fetchProductStockbyId,
} from "@/lib/fetchData";
// import prisma from "@/lib/db";
import { CarouselSkeleton } from "@/app/ui/product/productSkeleton";
import { CardsSkeletonHorizon } from "@/app/search/skeketon";
import ProductDesc from "@/app/ui/product/productDesc";
import ProductCarousel from "@/app/ui/product/productCarousel";
import Productcolors from "@/app/ui/product/productcolors";
import ProductStocks from "@/app/ui/product/productStocks";
import OtherProducts from "@/app/ui/product/otherProducts";
import Link from "next/link";

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
        <Suspense fallback={<CarouselSkeleton />}>
          <ProductCarousel imgUrl={product?.imageUrl} />
        </Suspense>
        <section className="flex flex-col ml-5">
          <article className="flex flex-col gap-4">
            <h1 className=" text-5xl font-bold">{product?.name}</h1>
            <p className="text-xl font-medium">{product?.price}</p>
          </article>
          <article className="my-4">
            <Suspense fallback={<CarouselSkeleton />}>
              <Productcolors products={productsbyName} />
            </Suspense>
          </article>
          <article className="my-4 flex flex-col gap-3">
            <Suspense fallback={<CarouselSkeleton />}>
              <ProductStocks stocks={productStock} />
            </Suspense>
            <div className="flex gap-2">
              <Link href="/checkout/cart">
                <button className="bg-orange-400 p-2 rounded-md">
                  add to cart
                </button>
              </Link>
              <Link href="/checkout/payment">
                <button className="bg-blue-500 p-2 rounded-md">Buy</button>
              </Link>
            </div>
          </article>
        </section>
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl">Product Specification</h1>
        <Suspense fallback={<CarouselSkeleton />}>
          <ProductDesc desc={productDescription} />
        </Suspense>
      </div>
      <div className="flex flex-col gap-8 justify-center items-center">
        <h1 className="font-bold text-3xl  ">You May Also Like</h1>
        <Suspense fallback={<CardsSkeletonHorizon />}>
          <OtherProducts name={product?.name?.toString()} />
        </Suspense>
      </div>
    </main>
  );
}

export default ProductPage;
