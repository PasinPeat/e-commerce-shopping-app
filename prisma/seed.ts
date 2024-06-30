import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {

console.log('Start seeding...');

  const jane: Prisma.CustomerCreateInput = await prisma.customer.upsert({
    where: { email: "customer1@prisma.io" },
    update: {},
    create: {
      firstName: "Jane",
      lastName: "garrardo",
      email: "customer1@prisma.io",
      password: "123456789",
      phoneNumber: "0985554789",
      role: "CUSTOMER",
      address: {
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
      email: "customer2@prisma.io",
      firstName: "David",
      lastName: "columnnnnn",
      password: "88888888",
      phoneNumber: "0945875554",
      role: "CUSTOMER",
      address: {
        create: {
          addressValue: "57 gggggg",
          city: "bangkok",
          zip_code: "12000",
        },
      },
    },
  });

  const nikeRunningShoe = await prisma.product.upsert({
    where: { SKU: "gf5568" },
    update: {},
    create: {
      SKU: "gf5568",
      description: ["first Desc", "second Desc"],
      price: 2500,
      stock: 20,
      category: {
        connectOrCreate: {
          where: {
            id:1,
            name: "runningShoe",
          },
          create: {
            name: "runningShoe",
          },
        },
      },
    },
  });

  console.log({ jane, david, nikeRunningShoe });
  console.log("Seeding finished.");
  
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
