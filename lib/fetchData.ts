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
    const data = await prisma.product.findMany();
    console.log(data);

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
