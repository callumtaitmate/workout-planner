import {AddToDo} from "../server-actions/addToDo"

export default function ToDosForm() {
  return (
    <form
      action={AddToDo}
      className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Description:
        </label>
        <input
          type="text"
          id="description"
          name="description"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add To Do
      </button>
    </form>
  );
}
