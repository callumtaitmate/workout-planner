import ToDosForm from "../components/ToDosForm";
import EditToDo from "../components/EditToDo";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { DeleteToDo } from "../server-actions/deleteToDo";

export default async function Todos() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: todos, error } = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: true });

  if (error) {
    console.log("Error returning ToDos");
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">To Dos</h1>
        <form action="/auth/signout" method="post" className="mb-4">
          {/* Button with id "002" moved to the top right */}
          <button
            id="002"
            type="submit"
            className="absolute top-0 right-0 mt-4 mr-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Out
          </button>
        </form>
        <ToDosForm />
        <div className="mt-8 space-y-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="bg-white shadow-md p-4 rounded-lg flex justify-between items-center"
            >
              <div>
                <h1 className="text-xl font-bold">{todo.title}</h1>
                <span>{todo.description}</span>
              </div>
              <div>
                <form action={DeleteToDo} className="inline-block">
                  <input type="hidden" name="id" value={todo.id} />
                  <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Delete
                  </button>
                </form>
                <EditToDo todo={todo} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
