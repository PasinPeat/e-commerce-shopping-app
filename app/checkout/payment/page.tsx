import React from "react";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
type Props = {};

async function Payment({}: Props) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return <div className="text-foreground">Payment page</div>;
}

export default Payment;
