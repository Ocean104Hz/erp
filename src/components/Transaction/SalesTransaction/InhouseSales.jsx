import { useState } from "react";

export default function InhouseSales() {
  const [category, setCategory] = useState("All");

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">📊 Inhouse Sale</h1>

      {/* Filter */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="font-semibold text-lg">Filter Data</h2>
        <div className="flex items-center gap-4 grid grid-cols-4">
          <select
            className="border border-gray-300 px-4 py-2 rounded col-span-3"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>All</option>
            <option>Category 1</option>
            <option>Category 2</option>
            <option>Category 3</option>
          </select>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white p-6 rounded shadow">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 font-semibold text-black">SL</th>
                <th className="px-4 py-2 font-semibold text-black">Product Name</th>
                <th className="px-4 py-2 font-semibold text-black">Total Sale</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">Product 1</td>
                <td className="px-4 py-2">$0.00</td>
              </tr>
              <tr>
                <td className="px-4 py-2">2</td>
                <td className="px-4 py-2">Product 2</td>
                <td className="px-4 py-2">$0.00</td>
              </tr>
              <tr>
                <td className="px-4 py-2">3</td>
                <td className="px-4 py-2">Product 3</td>
                <td className="px-4 py-2">$0.00</td>
              </tr>
              <tr className="text-center">
                <td colSpan="3" className="px-4 py-4">
                  <div className="flex justify-center items-center gap-2">
                    <img
                      src="https://via.placeholder.com/50"
                      alt="No data"
                      className="w-8 h-8"
                    />
                    <span className="text-sm text-gray-500">No product found</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
