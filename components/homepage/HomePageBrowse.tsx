import prisma from "@/lib/db";
import React from "react";
import Image from "next/image";
type Props = {};

const styleData = [
  {
    name: "Casual",
    url: "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/dress%20style/image_11.jpg",
  },
  {
    name: "Formal",
    url: "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/dress%20style/image_13.jpg",
  },
  {
    name: "Party",
    url: "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/dress%20style/image_12.jpg",
  },
  {
    name: "Gym",
    url: "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/dress%20style/image_14.jpg",
  },
];
async function HomePageBrowse({}: Props) {
  const users = await prisma.customer.findMany();
  // console.log(users);

  return (
    <div className="my-4 py-7 bg-[#F0F0F0] rounded-2xl p-4">
      <div className="flex justify-center">
        <h1 className="text-center font-extrabold text-5xl my-8 sm:max-w-[450px]">
          BROWSE BY DRESS STYLE
        </h1>
      </div>
      <section className=" grid grid-cols-5 sm:flex sm:flex-col sm:p-8 gap-4 mb-8">
        {/* {styleData.map((card, index) => (
          <div style={{'--image-url': `url(${card.url})`}} key={index} className="relative bg-[image:var(--image-url)] min-h-[290px]  bg-cover rounded-xl">
            
          </div>
        ))} */}
        <div className="relative  col-span-2 bg-casual min-h-[290px]  bg-cover rounded-xl">
          <p className=" absolute text-3xl font-bold top-6 left-6">
            {styleData[0].name}
          </p>
        </div>
        <div className="relative col-span-3 bg-formal min-h-[290px]  bg-cover rounded-xl">
          <p className=" absolute text-3xl font-bold top-6 left-6">
            {styleData[1].name}
          </p>
        </div>
        <div className="relative col-span-3 bg-party min-h-[290px]  bg-cover rounded-xl">
          <p className=" absolute text-3xl font-bold top-6 left-6">
            {styleData[2].name}
          </p>
        </div>
        <div className="relative bg-gym col-span-2 min-h-[290px]  bg-cover rounded-xl">
          <p className=" absolute text-3xl font-bold top-6 left-6">
            {styleData[3].name}
          </p>
        </div>
      </section>
    </div>
  );
}

export default HomePageBrowse;
