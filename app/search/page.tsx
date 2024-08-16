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
      <div className="grid gap-6 justify-center lg:grid-cols-4 md:grid md:auto-col-auto md:place-content-center" >
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper name={name}  min={min} max={max}/>
        </Suspense>
      </div>
    </main>
  );
}
