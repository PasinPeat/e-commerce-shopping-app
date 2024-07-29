"use client";
import React from "react";
import { RadioGroup, Radio, useRadio, RadioProps, cn } from "@nextui-org/react";

interface stock {
  id: number;
  stockQuantity: number;
  size: string;
  product_id: number;
}
type Props = {
  stocks: stock[];
};

export const CustomRadio = (props: any) => {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
          "flex-row-reverse max-w-[100px] cursor-pointer rounded-lg gap-4  border-2 border-transparent",
          "data-[selected=true]:border-primary"
        ),
      }}
    >
      {children}
    </Radio>
  );
};

function ProductStocks({ stocks }: Props) {
  const [selectedSize, setSelectedSize] = React.useState("0");

  const filterAvailablebySize = (size: string | null | undefined) => {
    return stocks.filter((stock) => stock.size == size);
  };

  let filteredAvailable = filterAvailablebySize(selectedSize);

  console.log(filteredAvailable);
  console.log(selectedSize);

  // function handleStockChange(Size: string, Avaliable: number) {
  //   setSelectedSize(Size)
  //   setStockAvaliable(Avaliable)
  // }
  return (
    <>
      <div className="text-3xl font-bold">Shoe Stock</div>
      {filteredAvailable.map((stock, index) => (
        <div className="my-3" key={index}>Stock Avaliable : {stock.stockQuantity}</div>
      ))}
      <RadioGroup
        orientation="horizontal"
        value={selectedSize}
        onValueChange={setSelectedSize}
      >
        {stocks &&
          stocks.map((stock) => (
            <CustomRadio key={stock.id} value={stock.size}>
              {stock.size}
            </CustomRadio>
          ))}
      </RadioGroup>
    </>
  );
}

export default ProductStocks;
