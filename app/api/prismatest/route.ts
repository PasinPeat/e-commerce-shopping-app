import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function main() {
  await prisma.customer.create({
    data: {
      firstName: "Alice",
      email: "alice@prisma.io",
      password: "4543213",
      phoneNumber: "123",
    },
  });

  // const allUsers = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //     profile: true,
  //   },
  // })
  // console.dir(allUsers, { depth: null })
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
