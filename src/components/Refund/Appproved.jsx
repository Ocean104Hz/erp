import { FolderOpen } from "lucide-react";
import { FaSearch } from 'react-icons/fa';
import Default from '../../../public/default.png';
import Export from '../../../public/excel.png';

export default function Approved() {
  const orders = [];
  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <FolderOpen />
        <h1 className="text-xl font-bold">Approved refund Requests</h1>
        <label className="text-white-500 bg-gray-300 px-2 rounded-full font-bold">
          0
        </label>
      </div>
      {/* ORDER LIST */}
      <div className="shadow-xl inset-shadow-sm p-4 bg-white rounded-md ">
        <div className="flex justify-between items-center mb-4">
          <div className="relative mb-4 mt-4">
            <input
              type="text"
              placeholder="Search menu"
              className="w-full p-2 pl-10 rounded-md bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none"
            />
            <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 text-sm" />
          </div>
          <div className="flex gap-2">
            <button className="flex gap-3 bg-green-200 px-4 py-2 rounded text-sm ">
              <img src={Export} className="w-6" />
              Export
            </button>
            <button className="bg-gray-500 px-4 py-2 rounded text-sm">
              All
            </button>
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
                  <div className="flex flex-col items-center justify-center py-10 text-gray-400">
                    <img src={Default} className="w-35 h-30 mb-2" />
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
