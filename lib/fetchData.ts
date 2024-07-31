import prisma from "@/lib/db";
import { formatCurrencyVer2 } from "./utils";

export async function fetchCustomerData() {
  try {
    const customers = await prisma.customer.findMany();
    return customers;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Customers data.");
  }
}

export async function fetchProductData({
  name,
  price,
}: {
  name: string | null;
  price: number[] | null;
}) {
  try {
    let data = null;
    if (name && price) {
      data = await prisma.product.findMany({
        where: {
          OR: [
            {
              name: {
                contains: name,
              },
            },
          ],
        },
        include: {
          brand: true,
        },
        distinct: ["name"],
        orderBy: {
          id: "asc",
        },
      });
    } else {
      data = await prisma.product.findMany({
        include: {
          brand: true,
        },
        distinct: ["name"],
        orderBy: {
          id: "asc",
        },
      });
    }
    // console.log(data);

    let products = null;
    if (price) {
      products = data
        .filter(
          (product) => product.price >= price[0] && product.price <= price[1]
        )
        .map((product) => ({
          ...product,
          price: formatCurrencyVer2(product.price),
        }));
    }

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
      include: {
        brand: true,
        description: true,
      },
    });
    console.log(product);

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

export async function fetchProductbyName(name: string | undefined) {
  try {
    const products = await prisma.product.findMany({
      where: {
        name: name,
      },
    });
    console.log(products);

    return products;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Products data.");
  }
}

export async function fetchProductStockbyId(id: number | undefined) {
  try {
    const stocks = await prisma.productStock.findMany({
      where: {
        product_id: id,
      },
    });
    console.log(stocks);

    return stocks;
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

export async function fetchOtherproducts(name: string | undefined) {
  try {
    const products = await prisma.product.findMany({
      where: {
        NOT: {
          name: name,
        },
      },
      take: 4,
      distinct: ["name"],
    });

    return products;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Products data.");
  }
}
