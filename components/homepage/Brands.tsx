import React from "react";
import Image from "next/image";

import {
  HokaIcon,
  KailasIcon,
  AsicsIcon,
  AltraIcon,
  NikeIcon,
} from "../brandIcons";
type Props = {};

function Brands({}: Props) {
  return (
    <>
      <div className="min-h-[122px] bg-black dark:bg-white flex flex-row md:flex-wrap gap-20 md:gap-8 p-8 justify-center items-center">
        <HokaIcon />
        <KailasIcon />
        <AsicsIcon />
        <AltraIcon />
        {/* <PradaIcon /> */}
        {/* <ZaraIcon /> */}
        {/* <GucciIcon /> */}
        <NikeIcon />
        {/* <CalvinkleinIcon /> */}
      </div>
    </>
  );
}

export default Brands;
