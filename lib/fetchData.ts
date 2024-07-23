import prisma from "@/lib/db";
import { formatCurrency, formatCurrencyVer2 } from "./utils";

export async function fetchCustomerData() {
  try {
    const customers = await prisma.customer.findMany();
    return customers;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Customers data.");
  }
}

export async function fetchProductData() {
  try {
    const data = await prisma.product.findMany({
      distinct: ["name"],
      orderBy: {
        id: "asc",
      },
    });

    const products = data.map((product) => ({
      ...product,
      price: formatCurrencyVer2(product.price),
    }));

    return products;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Products data.");
  }
}

export async function fetchProductbySlug(slug: string) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        slug: `${slug}`,
      },
    });
    // console.log(data);

    if (product) {
      const productWithFormatCurrency = {
        ...product,
        price: formatCurrencyVer2(product.price),
      };
      return productWithFormatCurrency;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Products data.");
  }
}

export async function fetchNewArrivalProduct() {
  try {
    const data = await prisma.product.findMany({
      distinct: ["name"],
      take: 4,
      orderBy: {
        id: "asc",
      },
    });

    const products = data.map((product) => ({
      ...product,
      price: formatCurrencyVer2(product.price),
    }));

    return products;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Products data.");
  }
}
