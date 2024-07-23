import prisma from "@/lib/db";
import React from "react";
type Props = {};
import { fetchCustomerData, fetchProductData } from "@/lib/fetchData";
async function Footer({}: Props) {
  const users = await fetchCustomerData();
  const products = await fetchProductData();
  // console.log(users);
  return (
    <>
      <div>HomePageBrowse</div>
      <div className="flex justify-center items-center text-green-600">
        {users.map((user) => (
          <ul key={user.id}>
            <li>{user.id}</li>
            <li>{user.firstName}</li>
            <li>{user.lastName}</li>
            <li>{user.email}</li>
            <li>{user.phoneNumber}</li>
          </ul>
        ))}
      </div>
      <div>
        {products.map((product) => (
          <ul key={product.id}>
            <li>{product.id}</li>
            <li>{product.name}</li>
            <li>{product.price}</li>
            <li>{product.slug}</li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Footer;
