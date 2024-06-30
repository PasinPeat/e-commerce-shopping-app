import { createCategory } from "@/actions/actions";
import { createClient } from "@/utils/supabase/server";

export default async function BlogPage() {
  return (
    <>
      <h1>Category Page</h1>
      <p> Create Category example using sever actions</p>

      <form action={createCategory} className="flex flex-col gap-y-2 w-[300px]">
        <input
          type="text"
          name="categoryName"
          placeholder="Category name?"
          className="px-2 py-2 my-2 rounded-sm"
        />
        <button type="submit" className="bg-blue-500 rounded-md py-2">
          Create category
        </button>
      </form>
    </>
  );
}
