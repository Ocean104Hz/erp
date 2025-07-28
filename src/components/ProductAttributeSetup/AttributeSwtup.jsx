import { FolderOpen } from "lucide-react";
import { FaSearch } from "react-icons/fa";
export default function AttributeSwtup() {
  const orders = [];
  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <FolderOpen />
        <h1 className="text-xl font-bold borfer-b-blue">Attribute Setup</h1>
        <label className="text-white-500 bg-gray-300 px-2 rounded-full font-bold">
          0
        </label>
      </div>
      <div className="shadow-xl inset-shadow-sm p-4 mb-4 bg-white rounded-md">
        <h2 className="text-lg font-semibold mb-2 text-blue-600 underline">english(EN)</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Attribute Name* (EN)
            </label>
            <input type="text" className="w-full border rounded p-2" />
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
            Reset
          </button>
          <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Show data
          </button>
        </div>
      </div>
      {/* ORDER LIST */}
      <div className="shadow-xl inset-shadow-sm p-4 bg-white rounded-md">
        <div className="flex justify-between items-center gap-2 mb-4">
          <div className="flex gap-4">
            <h2 className="text-lg font-semibold">Attribute list</h2>
            <label className="text-white-500 bg-gray-300 px-2 rounded-full font-bold">
              0
            </label>
          </div>
          <div className="relative mb-4 mt-4">
            <input
              type="text"
              placeholder="Search menu"
              className="w-full p-2 pl-10 rounded-md bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none"
            />
            <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 text-sm" />
          </div>
        </div>

        <table className="w-full h-80 text-sm text-left text-gray-700">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">SL</th>
              <th className="px-6 py-3">Attribute Name</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="5">
                  <div className="flex flex-col items-center justify-center py-10 text-gray-400">
                    <FolderOpen className="w-12 h-12 mb-2" />
                    <p className="text-sm font-medium">No order found</p>
                  </div>
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4">{order.id}</td>
                  <td className="px-6 py-4">{order.customer}</td>
                  <td className="px-6 py-4">{order.store}</td>
                  <td className="px-6 py-4">{order.date}</td>
                  <td className="px-6 py-4">{order.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
