import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

export function ProductSkeleton() {
  return (
    <div>
      <div className="flex flex-row gap-4">
        <CarouselSkeleton />
        <DetailSkeleton />
      </div>
    </div>
  );
}

export function CarouselSkeleton() {
  return (
    <Card className="flex flex-row w-1/2 gap-4" radius="lg">
      <div className=" flex flex-col gap-3">
        <Skeleton className="h-[147px] w-[156px] rounded-lg"></Skeleton>
        <Skeleton className="h-[147px] w-[156px] rounded-lg"></Skeleton>
        <Skeleton className="h-[147px] w-[156px] rounded-lg"></Skeleton>
      </div>
      <Skeleton className=" h-[480px] w-[460px] rounded-lg"></Skeleton>
    </Card>
  );
}

export function DetailSkeleton() {
  return (
    <Card className="flex flex-col w-1/2 gap-4" radius="lg">
      <Skeleton className="h-1/2 w-full rounded-lg"></Skeleton>

      <Skeleton className="h-1/2 w-full rounded-lg"></Skeleton>
    </Card>
  );
}
