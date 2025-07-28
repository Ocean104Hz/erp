import { useState } from "react";
import EarningChar from "../../EarningChar";
import { Link } from "react-router-dom";
import { FolderOpen } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import Default from "../../../../public/default.png";
import Export from "../../../../public/excel.png";

export default function VendorEarning() {
  const [selectedDate, setSelectedDate] = useState("This Year");
  const orders = [];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">📊 Earning Reports</h1>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6 text-center">
        <Link
          to="/Transaction/SalesTransaction/EarningReports"
          className="font-semibold py-2 px-3 hover:text-blue-800 "
        >
          Admin Earning
        </Link>
        <Link
          to="/Transaction/SalesTransaction/VendorEarning"
          className="bg-blue-900 text-white rounded-full py-2 px-3 font-semibold hover:bg-blue-800"
        >
          Vendor Earning
        </Link>
      </div>

      {/* Filter */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="font-semibold text-lg">Filter Data</h2>
        <div className="grid grid-cols-4 gap-4 items-center">
          <select
            className="border border-gray-300 px-4 py-2 rounded"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          >
            <option>This Year</option>
            <option>This Month</option>
            <option>This Week</option>
            <option>Today</option>
            <option>Custoom Date</option>
          </select>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Filter
          </button>
        </div>
      </div>

      {/* Summary & Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Total Earnings Card */}
        <div className="grid grid-cols-2">
          <div className="bg-white p-6 rounded shadow col-span-2 mb-4">
            <div className="text-2xl font-bold">0</div>
            <div className="text-gray-500 text-sm">Total Vendor</div>
          </div>

          {/* Other stats */}
          <div className="md:grid-cols-2 gap-6  col-span-2">
            <div className="bg-white p-6 rounded shadow space-y-2 mb-4">
              <div className="text-xl font-bold">$0.00</div>
              <div className="text-sm text-gray-600 mb-8">Total earnings</div>
              <div className="flex justify-between text-sm ">
                <span className="text-red-800 font-bold">$0.00</span>
                <span className="text-blue-800 font-bold">$0.00</span>
                <span className="text-green-800 font-bold">$0.00</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mb-10">
                <span>Denied</span>
                <span>Pending Request</span>
                <span>Approved</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded shadow space-y-2 col-span-2">
              <div className="text-2xl font-bold">0</div>
              <div className="text-gray-500 text-sm">Total Earning</div>
            </div>
          </div>
        </div>

        {/* Earning Statistics Chart (placeholder) */}
        <div className="bg-white p-6 rounded shadow col-span-2 row-span-2">
          <h2 className="font-semibold mb-4">Earning Statistics</h2>
          <p className="text-gray-600 mb-4">Average Earning Value : $0.00</p>
          <div className="w-full h-100">
            <EarningChar />
          </div>
        </div>

        {/* Payment Statistics */}
        <div className="bg-white p-6 rounded shadow row-span-2">
          <h2 className="font-semibold mb-25">Payment Statistics</h2>
          <div className="">
            <div className="flex flex-col text-center justify-center mb-10">
              <div className="text-xl font-bold">$0.00</div>
              <div className="text-sm text-gray-600 mb-4">Wallet Amount</div>
            </div>
            <div className="flex justify-center">
              <ul className="text-sm space-y-1 text-gray-600">
                <li>🔵 Withdrawble Balance ($0.00)</li>
                <li>🔵 Pending Withdraws ($0.00)</li>
                <li>🔵 Already Withdrawn($0.00)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Earnings Table */}
      <div className="bg-white p-6 rounded shadow overflow-x-auto">
        <div className="flex justify-end mb-4">
          <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300">
            <img src={Export} className="w-5 h-5" alt="Export Icon" />
            Export
          </button>
        </div>

        <div>
          <table className="min-w-full table-auto text-sm">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                {[
                  "SL",
                  "Vendor Info",
                  "Earn From Order",
                  "Earn From Shipping",
                  "Deliveryman Incentive",
                  "Commission Given",
                  "Discount Given",
                  "Tax Collected",
                  "Total Earning",
                  "Refund Given",
                ].map((head, idx) => (
                  <th
                    key={idx}
                    className="px-6 py-4 font-semibold text-black whitespace-nowrap"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td colSpan="10" className="text-center py-4">
                    <div className="flex flex-col justify-center items-center gap-2">
                      <img
                        src={Default}
                        className="mt-6 w-24 h-24"
                        alt="No Orders"
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        No order found
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                orders.map((order, idx) => (
                  <tr
                    key={order.id}
                    className={idx % 2 === 0 ? "bg-gray-50" : ""}
                  >
                    <td className="px-6 py-4">{order.id}</td>
                    <td className="px-6 py-4">{order.customer}</td>
                    <td className="px-6 py-4">{order.store}</td>
                    <td className="px-6 py-4">{order.date}</td>
                    <td className="px-6 py-4">{order.status}</td>
                    <td className="px-6 py-4">{order.earnFromOrder}</td>
                    <td className="px-6 py-4">{order.earnFromShipping}</td>
                    <td className="px-6 py-4">{order.deliverymanIncentive}</td>
                    <td className="px-6 py-4">{order.totalEarning}</td>
                    <td className="px-6 py-4">
                      <button className="text-green-600 hover:underline">
                        ↓
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
