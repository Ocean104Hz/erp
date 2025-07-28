import { FolderOpen } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import Default from "../../../public/default.png";
import Export from "../../../public/excel.png";

export default function RequestRestockList() {
  const orders = [];
  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <FolderOpen />
        <h1 className="text-xl font-bold">Request Restock List</h1>
        <label className="text-white-500 bg-gray-300 px-2 rounded-full font-bold">
          0
        </label>
      </div>
      <div className="shadow-xl inset-shadow-sm p-4 mb-4 bg-white rounded-md">
        <h2 className="text-lg font-semibold mb-2">Filter Order</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Request Restock Date
            </label>
            <input
              className="border border-gray-300 rounded-md p-2 w-full col-span-2 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
              type="date"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select className="border border-gray-300 rounded-md p-2 w-full col-span-2 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out">
              <option className="bg-white text-gray-900 hover:bg-gray-100">
                Select category
              </option>
              <option className="bg-white text-gray-900 hover:bg-gray-100">
                walking-customer-262
              </option>
              <option className="bg-white text-gray-900 hover:bg-gray-100">
                walking-customer-263
              </option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Sub Category
            </label>
            <select className="border border-gray-300 rounded-md p-2 w-full col-span-2 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out">
              <option className="bg-white text-gray-900 hover:bg-gray-100">
                Select Sub Category
              </option>
              <option className="bg-white text-gray-900 hover:bg-gray-100">
                walking-customer-262
              </option>
              <option className="bg-white text-gray-900 hover:bg-gray-100">
                walking-customer-263
              </option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Brand</label>
            <select className="border border-gray-300 rounded-md p-2 w-full col-span-2 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out">
              <option className="bg-white text-gray-900 hover:bg-gray-100">
                Select brand
              </option>
              <option className="bg-white text-gray-900 hover:bg-gray-100">
                walking-customer-262
              </option>
              <option className="bg-white text-gray-900 hover:bg-gray-100">
                walking-customer-263
              </option>
            </select>
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
        <div className=" items-center gap-2 mb-4">
          <div className="grid grid-cols-3 items-center mb-4">
            <div className="flex items-center gap-2 mb-4 col-span-2">
              <FolderOpen />
              <h1 className="text-xl font-bold">Request list</h1>
              <label className="text-white-500 bg-gray-300 px-2 rounded-full font-bold">
                0
              </label>
            </div>
            <div className="flex justify-end gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search menu"
                  className="w-full p-2 pl-10 rounded-md bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none"
                />
                <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 text-sm" />
              </div>
              <button className="flex gap-3 text-blue-700 bg-green-200 px-4 py-2 rounded text-sm horver:bg-green-300 cursor-pointer font-bold">
                <img src={Export} className="w-6" />
                Export
              </button>
            </div>
          </div>
        </div>

        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">Order ID</th>
              <th className="px-6 py-3">Customer</th>
              <th className="px-6 py-3">Store</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="5">
                  <div className="flex flex-col items-center justify-center py-10 text-gray-400 h-120">
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
