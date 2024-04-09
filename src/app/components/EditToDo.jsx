"use client";
import { UpdateToDo } from "../server-actions/updateToDo";
import { useState } from "react";

export default function EditToDo({ todo }) {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    id: todo.id,
    title: todo.title,
    description: todo.description,
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <div>
      <button onClick={() => setOpenModal(true)} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300 mt-2">
  Edit
</button>

      {openModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <span
                      onClick={() => setOpenModal(false)}
                      className="absolute top-0 right-0 mt-4 mr-4 cursor-pointer"
                    >
                      &times;
                    </span>
                    <form
                      action={UpdateToDo}
                      onSubmit={() => setOpenModal(false)}
                      className="mb-4"
                    >
                      <input type="hidden" name="id" value={todo.id} />
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
                          value={formData.title}
                          onChange={handleChange}
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
                          value={formData.description}
                          onChange={handleChange}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Update To Do
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
