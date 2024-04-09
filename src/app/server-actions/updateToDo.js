"use server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function UpdateToDo(formData) {
  const id = formData.get("id");
  const title = formData.get("title");
  const description = formData.get("description");

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.error(
      "User is not authenticated within addToDos update server action"
    );
    return;
  }

  const { data, error } = await supabase
    .from("todos")
    .update({ title: title, description: description })
    .match({id: id, user_id: user.id});

  if (error) {
    console.error("Error updating data.", error);
    return;
  }

  revalidatePath("/todos");

  return { message: "Success" };
}
