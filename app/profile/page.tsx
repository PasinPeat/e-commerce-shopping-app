import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { logout } from "../../lib/authActions";
export default async function ProfilePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <>
    <div className="text-foreground">

      <p>Hello {data.user.email}</p>
      <form className="flex flex-col gap-4" action={logout}>
        <label htmlFor="email">Log out from website</label>
        <button className="bg-blue-600 p-2 rounded-md max-w-20" type="submit">Log out</button>
      </form>
    </div>
    </>
  );
}
