"use server";
import prisma from "@/lib/db";

export async function createCategory(formdata: FormData) {
  
  try {
    await prisma.category.create({
        data: {
          name: formdata.get("categoryName") as string,
        },
      });
  } catch (error) {
    console.log("Error creating category", error);
    
  }
    
}

export async function editCategory(formdata: FormData, id: number) {
  await prisma.category.update({
    where: { id },
    data: {
      name: formdata.get("categoryName") as string,
    },
  });
}

export async function deleteCategory(id: number) {
  await prisma.category.delete({
    where: { id },
  });
}
