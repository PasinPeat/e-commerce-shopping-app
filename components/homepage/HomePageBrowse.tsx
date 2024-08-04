import prisma from "@/lib/db";
import React from "react";
import Image from "next/image";
type Props = {};

const styleData = [
  {
    name: "Hoka",
    url: "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/running-pic/homepage-brand-choose/Trail_collection_men.jpg",
  },
  {
    name: "Kailas",
    url: "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/running-pic/homepage-brand-choose/kailas.jpg",
  },
  {
    name: "Asics",
    url: "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/running-pic/homepage-brand-choose/sport_vision_blog_asics_gel_nimbus24_cover_photo.jpg",
  },
  {
    name: "Nike",
    url: "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/running-pic/homepage-brand-choose/the-best-beginner-nike-running-shoes.jpg",
  },
  {
    name: "Altra",
    url: "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/running-pic/homepage-brand-choose/24F_Olympus6_Homepage_MainHero_Product-Focused_Desktop_8x3.avif",
  },
];
async function HomePageBrowse({}: Props) {
  const users = await prisma.customer.findMany();
  // console.log(users);

  return (
    <div className="my-4 py-7 bg-[#F0F0F0] rounded-2xl p-4">
      <div className="flex justify-center">
        <h1 className="text-center font-extrabold text-5xl text-slate-800 my-8 sm:max-w-[450px]">
          BROWSE BY BRANDS
        </h1>
      </div>
      <section className=" grid grid-cols-5 sm:flex sm:flex-col sm:p-8 gap-4 mb-8">
        
        <div className="relative  col-span-2 bg-hoka min-h-[290px]  bg-cover  rounded-xl">
          <p className=" absolute text-3xl font-bold top-6 left-6">
            {styleData[0].name}
          </p>
        </div>
        <div className="relative col-span-3 bg-kailas min-h-[290px] bg-left bg-cover rounded-xl">
          <p className=" absolute text-3xl font-bold top-6 left-6">
            {styleData[1].name}
          </p>
        </div>
        <div className="relative col-span-3 bg-asics min-h-[290px] bg-bottom  bg-cover rounded-xl">
          <p className=" absolute text-3xl font-bold top-6 left-6">
            {styleData[2].name}
          </p>
        </div>
        <div className="relative bg-nike col-span-2 min-h-[290px]  bg-cover rounded-xl">
          <p className=" absolute text-3xl font-bold top-6 left-6">
            {styleData[3].name}
          </p>
        </div>
        <div className="relative bg-altra col-span-5 min-h-[290px] bg-cover bg-bottom rounded-xl">
          <p className=" absolute text-3xl font-bold top-6 left-6">
            {styleData[4].name}
          </p>
        </div>
      </section>
    </div>
  );
}

export default HomePageBrowse;
