import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
// import { Image } from "@nextui-org/image";
import Image from "next/image";
type ImageProps = {
  src: string;
  name: string;
  price: number;
};

const ProductCard = (props: ImageProps) => {
  return (
    <div className="min-h-[315px] md:min-h-[295px] md:min-w-[295px] sm:h-[250px] sm:w-[300px]">
      <Card className="py-4 md:max-w-[295px] hover:scale-105 hover:cursor-pointer">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={props.src}
            width={295}
            height={295}
          />
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <h4 className="font-bold text-medium">{props.name}</h4>
          <p className="text-tiny uppercase font-bold mt-2">{props.price}</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;
