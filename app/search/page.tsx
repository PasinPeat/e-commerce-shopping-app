import { Suspense } from "react";
import CardWrapper from "../ui/search/cards";
import { CardsSkeleton } from "./skeketon";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    name?: string;
    min?: string;
    max?: string;
  };
}) {
  const name = searchParams?.name || ""
  const min = Number(searchParams?.min) || 0
  const max = Number(searchParams?.max) || 10000

  return (
    <main>
      <h1 className="mb-4 text-xl md:text-2xl">Results</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper name={name}  min={min} max={max}/>
        </Suspense>
      </div>
    </main>
  );
}
