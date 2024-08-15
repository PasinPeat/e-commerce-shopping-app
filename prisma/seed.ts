import { Prisma, PrismaClient } from "@prisma/client";
import { brands, categories, shoes, shoesDescription } from "../lib/seedData";

const prisma = new PrismaClient();
async function main() {
  try {
    console.log("Start seeding...");
    await prisma.customer.deleteMany();
    await prisma.address.deleteMany();
    await prisma.category.deleteMany();
    await prisma.brand.deleteMany();
    await prisma.productStock.deleteMany();
    await prisma.product.deleteMany();

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
      const brandSeed: Prisma.BrandCreateInput = await prisma.brand.create({
        data: {
          name: brand,
        },
      });
    }

    for (const shoeDescription of shoesDescription) {
      const DescriptionSeed = await prisma.description.create({
        data: {
          name: shoeDescription.name,
          contents: [...shoeDescription.description],
        },
      });
    }

    for (const category of categories) {
      const categorySeed: Prisma.CategoryCreateInput =
        await prisma.category.create({
          data: {
            name: category,
          },
        });
    }

    for (const shoe of shoes) {
      const shoeSeed: Prisma.ProductCreateInput = await prisma.product.create({
        data: {
          SKU: shoe.SKU,
          name: shoe.name,
          price: shoe.price,
          slug: shoe.slug,
          color: shoe.color,
          ProductStock: shoe.ProductStock,
          imageUrl: shoe.imageUrl,
        },
      });
    }

    console.log({ jane });
    console.log("Seeding finished.");
  } catch (error) {
    console.error("failed to seed data", error);
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
