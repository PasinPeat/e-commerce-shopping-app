import { createClient } from "@/utils/supabase/server";

export default async function BlogPage() {
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();

  return <pre>{JSON.stringify(notes, null, 2)}</pre>;
}
