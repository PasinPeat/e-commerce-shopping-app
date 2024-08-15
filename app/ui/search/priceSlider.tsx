"use client";
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Slider, SliderValue } from "@nextui-org/slider";
export default function PriceSlider() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [value, setValue] = React.useState<SliderValue>([0, 10000]);

  useEffect(() => {
    
    handleFilteredbyPrice(value);
  }, [value]);

  const handleFilteredbyPrice = useDebouncedCallback(
    (range: number[] | number) => {
      const params = new URLSearchParams(searchParams);
      if (Array.isArray(range)) {
        params.set("min", range[0].toString());
        params.set("max", range[1].toString());
      } 
      // else if (range[0] == 0 && range[1]== 0) {
      //   params.delete("min");
      //   params.delete("max");
      // }
      else {
        params.delete("min");
        params.delete("max");
      }
      replace(`${pathname}?${params.toString()}`);
    },
    300
  );
  return (
    <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center my-4">
      <Slider
        label="Select a price"
         size="md"
        //  radius="lg"
         showSteps={true}
        step={500}
        showTooltip={true}
        showOutline={true}
        disableThumbScale={true}
        minValue={0}
        maxValue={10000}
        value={value}
        onChange={setValue}
        formatOptions={{ style: "currency", currency: "THB" }}
        classNames={{
          base: "max-w-md",
          filler: "bg-gradient-to-r from-primary-500 to-secondary-400",
          labelWrapper: "mb-2",
          label: "font-medium text-default-700 text-medium",
          value: "font-medium text-default-500 text-small",
          thumb: [
            "transition-size",
            "bg-gradient-to-r from-secondary-400 to-primary-500",
            "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
            "data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6"
          ],
          step: "data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50"
        }}
      />
      {/* <p className="text-default-500 font-medium text-small">
        Selected price: {Array.isArray(value) && value.map((b) => `$${b}`).join(" – ")}
      </p> */}
    </div>
  );
}
