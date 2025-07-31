import { FolderOpen, Eye, Download } from "lucide-react";
import { useState } from "react";

export default function Delivered() {
  const orders = [
    {
      id: "100006",
      date: "31 Jul 2025, 08:50 PM",
      customer: {
        name: "Nithiphat Chotiphatjinda",
        phone: "+660643529121",
      },
      store: "In House",
      amount: "$1,353.1",
      payment: "Cash On Delivery",
      status: "Paid",
    },
    {
      id: "100003",
      date: "31 Jul 2025, 08:24 PM",
      customer: {
        name: "Nithiphat Chotiphatjinda",
        phone: "+660643529121",
      },
      store: "In House",
      amount: "$1,503.0",
      payment: "Cash On Delivery",
      status: "Paid",
    },
    {
      id: "100002",
      date: "31 Jul 2025, 07:55 PM",
      customer: {
        name: "Kanyarat Srisuwan",
        phone: "+660948100788",
      },
      store: "In House",
      amount: "$505.2",
      payment: "Cash On Delivery",
      status: "Paid",
    },
    {
      id: "100001",
      date: "31 Jul 2025, 07:29 PM",
      customer: {
        name: "Nithiphat Chotiphatjinda",
        phone: "+660643529121",
      },
      store: "In House",
      amount: "$387.2",
      payment: "Cash On Delivery",
      status: "Paid",
    },
  ];

  const [search, setSearch] = useState("");

  return (
    <div className="p-6">
      {/* Title */}
      <div className="flex items-center gap-2 mb-4">
        <FolderOpen />
        <h1 className="text-xl font-bold">Delivered Orders</h1>
        <label className="text-white bg-gray-400 px-2 rounded-full font-bold">
          {orders.length}
        </label>
      </div>

      {/* Filter */}
      <div className="shadow p-4 mb-4 bg-white rounded-md">
        <h2 className="text-lg font-semibold mb-2">Filter Order</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Order type</label>
            <select className="w-full border rounded p-2">
              <option>All</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Store</label>
            <select className="w-full border rounded p-2">
              <option>Inhouse</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Customer</label>
            <select className="w-full border rounded p-2">
              <option>All customer</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Date type</label>
            <select className="w-full border rounded p-2">
              <option>Select Date Type</option>
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

      {/* Order List */}
      <div className="shadow p-4 bg-white rounded-md">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold">Order list</h2>
            <label className="text-white bg-gray-400 px-2 rounded-full font-bold">
              {orders.length}
            </label>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search by Order ID"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border p-2 rounded"
            />
            <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded text-sm">
              Export
            </button>
          </div>
        </div>

        {/* Table */}
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-4 py-2">SL</th>
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Order Date</th>
              <th className="px-4 py-2">Customer Info</th>
              <th className="px-4 py-2">Store</th>
              <th className="px-4 py-2">Total Amount</th>
              <th className="px-4 py-2">Payment Method</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="8">
                  <div className="flex flex-col items-center justify-center py-10 text-gray-400">
                    <FolderOpen className="w-12 h-12 mb-2" />
                    <p className="text-sm font-medium">No order found</p>
                  </div>
                </td>
              </tr>
            ) : (
              orders
                .filter((o) => o.id.includes(search))
                .map((order, index) => (
                  <tr key={order.id} className="">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{order.id}</td>
                    <td className="px-4 py-2">{order.date}</td>
                    <td className="px-4 py-2">
                      {order.customer.name}
                      <br />
                      <span className="text-xs text-gray-500">
                        {order.customer.phone}
                      </span>
                    </td>
                    <td className="px-4 py-2">{order.store}</td>
                    <td className="px-4 py-2">
                      {order.amount}{" "}
                      <span className="ml-1 bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded">
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-2">{order.payment}</td>
                    <td className="px-4 py-2 flex gap-2">
                      <button className="border p-1 rounded text-blue-600 hover:bg-blue-100">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="border p-1 rounded text-green-600 hover:bg-green-100">
                        <Download className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
