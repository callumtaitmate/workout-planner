export function Overview() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-4">Weekly Overview</h3>
      <input
        className="w-full bg-gray-100 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Food item"
      />
      <div className="flex justify-between">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Export
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Sign up to save
        </button>
      </div>
    </div>
  );
}
