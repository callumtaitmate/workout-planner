"use server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { todo } from "node:test";

export async function DeleteToDo(formData) {
  const toDoId = formData.get("id");

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.error("User is not authenticated within addToDos server action");
    return;
  }

  const { data, error } = await supabase
    .from("todos")
    .delete().match({ id: toDoId, user_id: user.id });

  if (error) {
    console.error("Error deleting data.", error);
    return;
  }

  revalidatePath("/todos");

  return { message: "Success" };
}
