import { CardSkeleton } from "@/app/search/skeketon";
import PriceSlider from "./priceSlider";
import Search from "./search";
import { Suspense } from "react";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <section>
        <Suspense fallback={<CardSkeleton />}>
          <Search placeholder="Search products..." />
        </Suspense>
      </section>
      <section>
        <Suspense fallback={<CardSkeleton />}>
          <PriceSlider />
        </Suspense>
      </section>
    </div>
  );
}
