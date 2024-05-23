import type { Metadata } from "next";
import './globals.css';
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Home from "./page";
import Planner from "./planner/page";

export const metadata: Metadata = {
  title: "mealbudget.pro",
  description: "mealbudget.pro",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <html lang="en">
        <body><Planner /></body>
      </html>
    )
  }

  return (
    <html lang="en">
      <body><Planner /></body>
    </html>
  )
}

