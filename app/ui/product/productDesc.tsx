"use client";
import { JsonValue } from "@prisma/client/runtime/library";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

type Props = {
  desc: description[] | JsonValue | undefined;
};

interface description {
  h: string;
  p: string;
}
function ProductDesc({ desc }: Props) {
  const content1 = desc[0];
  const content2 = desc[1];
  const content3 = desc[2];

  const itemClasses = {
    base: "py-2 w-full",
    title: "font-bold text-xl",
    trigger:
      "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
    indicator: "text-medium",
    content: " text-md px-2",
  };

  return (
    <>
      <Accordion selectionMode="multiple" itemClasses={itemClasses}>
        <AccordionItem key="1" aria-label="Accordion 1" title={content1.h}>
          {content1.p}
        </AccordionItem>

        <AccordionItem key="2" aria-label="Accordion 1" title={content2.h}>
          {content2.p}
        </AccordionItem>

        <AccordionItem key="3" aria-label="Accordion 1" title={content3.h}>
          {content3.p}
        </AccordionItem>
      </Accordion>
    </>
  );
}
export default ProductDesc;
