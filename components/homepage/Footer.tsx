import prisma from "@/lib/db";
import React from "react";
type Props = {};

async function Footer({}: Props) {
  const users = await prisma.customer.findMany();
  console.log(users);
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
    </>
  );
}

export default Footer;
