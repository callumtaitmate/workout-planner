export function ConfigureFood() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-4">Configure Food</h3>
      <input
        className="w-full bg-gray-100 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Food item"
      />
    </div>
  );
}
