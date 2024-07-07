import { Prisma, PrismaClient } from "@prisma/client";
import { brands, categories, sizes } from "@/lib/seedData";

const prisma = new PrismaClient();
async function main() {
  console.log("Start seeding...");

  const jane: Prisma.CustomerCreateInput = await prisma.customer.upsert({
    where: { email: "customer1@prisma.io" },
    update: {},
    create: {
      firstName: "Jane",
      lastName: "Garrardo",
      email: "customerJane@prisma.io",
      password: "123456789",
      phoneNumber: "0985554789",
      role: "CUSTOMER",
      Address: {
        create: {
          addressValue: "101 fgssgdsg",
          city: "bangkok",
          zip_code: "12000",
        },
      },
    },
  });
  const david = await prisma.customer.upsert({
    where: { email: "customer2@prisma.io" },
    update: {},
    create: {
      email: "customerDavid@prisma.io",
      firstName: "David",
      lastName: "Columnnnnn",
      password: "88888888",
      phoneNumber: "0945875554",
      role: "CUSTOMER",
      Address: {
        create: {
          addressValue: "57 gggggg",
          city: "bangkok",
          zip_code: "12000",
        },
      },
    },
  });

  for (const brand of brands) {
    const brandSeed = await prisma.brand.create({
      data: {
        name: brand,
      },
    });
  }

  for (const category of categories) {
    const categorySeed = await prisma.category.create({
      data: {
        name: category,
      },
    });

    const altraFwdBlack = await prisma.product.upsert({
      where: {
        SKU: "ALFB01",
        brand: {
          name: "Altra",
        },
        category: {
          name: "Road",
        },
      },
      update: {},
      create: {
        SKU: "ALFB01",
        name: "Altra FWD Experience",

        description: [
          {
            h: "LIGHTWEIGHT PERFORMANCE",
            p: "A sleek engineered mesh upper and brand-new lightweight and responsive compression-molded midsole foam combine for the perfect blend of comfort, style, and performance.",
          },
          {
            h: "NATURAL FIT",
            p: "A roomy toe box for comfort and performance lets your toes spread out and encourages a natural stride, so you can move the way you were designed to.",
          },
        ],
        price: 4800,
        ProductStock: {
          create: [...sizes],
        },

        slug: "altra-fwd-experience-black",
        color: "Black",
        imageUrl: [
          "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/brands/Altra/road/fwd_experience/black/ALTRA_Men_FWD_EXPERIENCE_Black_01.jpg",
          "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/brands/Altra/road/fwd_experience/black/ALTRA_Men_FWD_EXPERIENCE_Black_02.webp",
          "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/brands/Altra/road/fwd_experience/black/ALTRA_Men_FWD_EXPERIENCE_Black_03.webp",
          "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/brands/Altra/road/fwd_experience/black/ALTRA_Men_FWD_EXPERIENCE_Black_04.jpg",
          "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/brands/Altra/road/fwd_experience/black/ALTRA_Men_FWD_EXPERIENCE_Black_05.webp",
          "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/brands/Altra/road/fwd_experience/black/ALTRA_Men_FWD_EXPERIENCE_Black_06.webp",
        ],
      },
    });

    const altraOlympusBlue = await prisma.product.upsert({
      where: {
        SKU: "ALOP01",
        brand: {
          name: "Altra",
        },
      },
      update: {},
      create: {
        SKU: "ALOP01",
        name: "Altra Olympus 5",

        description: [
          {
            h: "ROOMY TOE BOX FOR NATURAL MOVEMENT",
            p: "With Altra's signature FootShape fit, you get our roomiest toe box with plenty of room to help your toes move freely, and space through the midfoot.",
          },
          {
            h: "DURABLE + STICKY OUTSOLE FOR FIERCE TRAIL GRIP",
            p: "Vibram® Megagrip is a high-performance sticky rubber that offers unparalleled grip on both wet and dry surfaces, rugged longevity, and optimal ground adaptability.",
          },
          {
            h: "STAY PROTECTED AND CLEAN",
            p: "GaiterTrap™, our unique hook-and-loop tab, allows for easy strapless gaiter attachment without fasteners, bungees, or bindings. Trail debris in your shoes? No thanks!",
          },
        ],
        price: 6200,
        ProductStock: {
          create: [...sizes],
        },
        category: {
          create: {
            name: "Trail",
          },
        },
        slug: "altra-olympus-5-blue",
        color: "Blue",
        imageUrl: [
          "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/brands/Altra/trail/Olympus_5/blue/altra_men_olympus_5_blue_1.webp",
          "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/brands/Altra/trail/Olympus_5/blue/altra_men_olympus_5_blue_2.webp",
          "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/brands/Altra/trail/Olympus_5/blue/altra_men_olympus_5_blue_3.webp",
          "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/brands/Altra/trail/Olympus_5/blue/altra_men_olympus_5_blue_4.webp",
        ],
      },
    });

    const altraOlympusBrown = await prisma.product.upsert({
      where: {
        SKU: "ALOP02",
        brand: {
          name: "Altra",
        },
        category: {
          name: "Trail",
        },
      },
      update: {},
      create: {
        SKU: "ALOP02",
        name: "Altra Olympus 5",

        description: [
          {
            h: "ROOMY TOE BOX FOR NATURAL MOVEMENT",
            p: "With Altra's signature FootShape fit, you get our roomiest toe box with plenty of room to help your toes move freely, and space through the midfoot.",
          },
          {
            h: "DURABLE + STICKY OUTSOLE FOR FIERCE TRAIL GRIP",
            p: "Vibram® Megagrip is a high-performance sticky rubber that offers unparalleled grip on both wet and dry surfaces, rugged longevity, and optimal ground adaptability.",
          },
          {
            h: "STAY PROTECTED AND CLEAN",
            p: "GaiterTrap™, our unique hook-and-loop tab, allows for easy strapless gaiter attachment without fasteners, bungees, or bindings. Trail debris in your shoes? No thanks!",
          },
        ],
        price: 6200,
        ProductStock: {
          create: [
            { size: "7", stockQuantity: 8 },
            { size: "7.5", stockQuantity: 8 },
            { size: "8", stockQuantity: 10 },
            { size: "8.5", stockQuantity: 15 },
            { size: "9", stockQuantity: 18 },
            { size: "9.5", stockQuantity: 20 },
            { size: "10", stockQuantity: 20 },
            { size: "10.5", stockQuantity: 18 },
            { size: "11", stockQuantity: 15 },
            { size: "11.5", stockQuantity: 10 },
            { size: "12", stockQuantity: 8 },
            { size: "13", stockQuantity: 5 },
          ],
        },
        slug: "altra-olympus-5-brown",
        color: "Brown",
        imageUrl: [
          "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/brands/Altra/trail/Olympus_5/brown/altra_men_olympus_5_1.webp",
          "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/brands/Altra/trail/Olympus_5/brown/altra_men_olympus_5_2.webp",
          "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/brands/Altra/trail/Olympus_5/brown/altra_men_olympus_5_3.webp",
          "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/brands/Altra/trail/Olympus_5/brown/altra_men_olympus_5_4.webp",
        ],
      },
    });

    const altraOlympusTan = await prisma.product.upsert({
      where: {
        SKU: "ALOP03",
        brand: {
          name: "Altra",
        },
        category: {
          name: "Trail",
        },
      },
      update: {},
      create: {
        SKU: "ALOP03",
        name: "Altra Olympus 5",

        description: [
          {
            h: "ROOMY TOE BOX FOR NATURAL MOVEMENT",
            p: "With Altra's signature FootShape fit, you get our roomiest toe box with plenty of room to help your toes move freely, and space through the midfoot.",
          },
          {
            h: "DURABLE + STICKY OUTSOLE FOR FIERCE TRAIL GRIP",
            p: "Vibram® Megagrip is a high-performance sticky rubber that offers unparalleled grip on both wet and dry surfaces, rugged longevity, and optimal ground adaptability.",
          },
          {
            h: "STAY PROTECTED AND CLEAN",
            p: "GaiterTrap™, our unique hook-and-loop tab, allows for easy strapless gaiter attachment without fasteners, bungees, or bindings. Trail debris in your shoes? No thanks!",
          },
        ],
        price: 6200,
        ProductStock: {
          create: [...sizes],
        },
        slug: "altra-olympus-5-tan",
        color: "Tan",
        imageUrl: [
          "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/brands/Altra/trail/Olympus_5/tan/altra_men_olympus_5_tan_1.jpg",
          "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/brands/Altra/trail/Olympus_5/tan/altra_men_olympus_5_tan_2.jpg",
          "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/brands/Altra/trail/Olympus_5/tan/altra_men_olympus_5_tan_3.webp",
          "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/brands/Altra/trail/Olympus_5/tan/altra_men_olympus_5_tan_4.webp",
          "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/brands/Altra/trail/Olympus_5/tan/altra_men_olympus_5_tan_5.webp",
          "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/brands/Altra/trail/Olympus_5/tan/altra_men_olympus_5_tan_6.webp",
        ],
      },
    });
    console.log({ jane, david });
    console.log("Seeding finished.");
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
