import { fetchProductData } from "@/lib/fetchData";
import ProductCard from "@/components/productCard";
import Link from "next/link";

export default async function CardWrapper({
  name,
  min,
  max,
}: {
  name: string;
  min: number;
  max: number;
}) {
  const products = await fetchProductData({ name: name, price: [min, max] });

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
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
      </div>
    </>
  );
}
