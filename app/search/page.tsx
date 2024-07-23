import { Suspense } from "react";
import CardWrapper from "../ui/search/cards";
import { CardsSkeleton } from "./skeketon";

export default async function Page() {
  return (
    <main>
      <h1 className="mb-4 text-xl md:text-2xl">Results</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
    </main>
  );
}
