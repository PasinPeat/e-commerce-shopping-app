"use client";
import { usePathname, useRouter } from "next/navigation";
import prisma from "@/lib/db";
import React from "react";
import Image from "next/image";
type Props = {};

const styleData = [
  {
    name: "hoka",
    url: "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/running-pic/homepage-brand-choose/Trail_collection_men.jpg",
  },
  {
    name: "kailas",
    url: "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/running-pic/homepage-brand-choose/kailas.jpg",
  },
  {
    name: "asics",
    url: "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/running-pic/homepage-brand-choose/sport_vision_blog_asics_gel_nimbus24_cover_photo.jpg",
  },
  {
    name: "nike",
    url: "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/running-pic/homepage-brand-choose/the-best-beginner-nike-running-shoes.jpg",
  },
  {
    name: "altra",
    url: "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/running-pic/homepage-brand-choose/24F_Olympus6_Homepage_MainHero_Product-Focused_Desktop_8x3.avif",
  },
];

async function HomePageBrowse({}: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const addQueryParam = (query: string) => {
    const params = new URLSearchParams();
    params.set("name", query);
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="my-4 py-7 bg-[#F0F0F0] rounded-2xl p-4">
      <div className="flex justify-center">
        <h1 className="text-center font-extrabold text-5xl text-slate-800 my-8 sm:max-w-[450px]">
          BROWSE BY BRANDS
        </h1>
      </div>
      <section className=" grid grid-cols-5 sm:flex sm:flex-col sm:p-8 gap-4 mb-8">
        <button
          className="relative col-span-2"
          onClick={() => addQueryParam(styleData[0].name)}
        >
          <div className=" bg-hoka min-h-[290px]  bg-cover  rounded-xl">
            <p className="p-brand">
              {styleData[0].name}
            </p>
          </div>
        </button>
        <button
          className="relative col-span-3"
          onClick={() => addQueryParam(styleData[1].name)}
        >
          <div className=" bg-kailas min-h-[290px] bg-left bg-cover rounded-xl ">
            <p className="p-brand">
              {styleData[1].name}
            </p>
          </div>
        </button>
        <button
          className="relative col-span-3"
          onClick={() => addQueryParam(styleData[2].name)}
        >
          <div className=" bg-asics min-h-[290px] bg-bottom  bg-cover rounded-xl">
            <p className="p-brand">
              {styleData[2].name}
            </p>
          </div>
        </button>
        <button
          className="relative col-span-2"
          onClick={() => addQueryParam(styleData[3].name)}
        >
          <div className=" bg-nike  min-h-[290px]  bg-cover rounded-xl">
            <p className="p-brand">
              {styleData[3].name}
            </p>
          </div>
        </button>
        <button
          className="relative col-span-5"
          onClick={() => addQueryParam(styleData[4].name)}
        >
          <div className=" bg-altra  min-h-[290px] bg-cover bg-bottom rounded-xl">
            <p className="p-brand">
              {styleData[4].name}
            </p>
          </div>
        </button>
      </section>
    </div>
  );
}

export default HomePageBrowse;
