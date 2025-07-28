import { useState } from "react";
import EarningChar from "../../EarningChar";
import { Link } from "react-router-dom";

export default function EarningReports() {
  const [selectedDate, setSelectedDate] = useState("This Year");

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
          className="bg-blue-900 text-white rounded-full py-2 px-3 font-semibold hover:bg-blue-800"
        >
          Admin Earning
        </Link>
        <Link
          to="/Transaction/SalesTransaction/VendorEarning"
          className="font-semibold py-2 px-3 hover:text-blue-800"
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
            <div className="text-xl font-bold">$0.00</div>
            <div className="text-sm text-gray-600 mb-8">Total earnings</div>
            <div className="flex justify-between text-sm ">
              <span className="text-red-600 font-bold">$0.00</span>
              <span className="text-blue-600 font-bold">$0.00</span>
              <span className="text-green-600 font-bold">$0.00</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mb-10">
              <span>Commission</span>
              <span>In House</span>
              <span>Shipping</span>
            </div>
          </div>

          {/* Other stats */}
          <div className="md:grid-cols-2 gap-6  col-span-2">
            <div className="bg-white p-6 rounded shadow space-y-2 mb-4">
              <div className="text-2xl font-bold">0</div>
              <div className="text-gray-500 text-sm">
                Total In House Products
              </div>
            </div>
            <div className="bg-white p-6 rounded shadow space-y-2 col-span-2">
              <div className="text-2xl font-bold">0</div>
              <div className="text-gray-500 text-sm">Total Shop</div>
            </div>
          </div>
        </div>

        {/* Earning Statistics Chart (placeholder) */}
        <div className="bg-white p-6 rounded shadow col-span-2 row-span-2">
          <h2 className="font-semibold mb-4">Earning Statistics</h2>
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
              <div className="text-sm text-gray-600 mb-4">Payments Amount</div>
            </div>
            <div className="flex justify-center">
              <ul className="text-sm space-y-1 text-gray-600">
                <li>🔵 Cash payments ($0.00)</li>
                <li>🔵 Digital payments ($0.00)</li>
                <li>🔵 Offline payments ($0.00)</li>
                <li>🔵 Wallet ($0.00)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Earnings Table */}
      <div className="bg-white p-6 rounded shadow overflow-auto">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">Total Earnings</h2>
          <button className="bg-green-600 text-white px-4 py-1 rounded">
            Export
          </button>
        </div>
        <table className="min-w-full text-sm text-left ">
          <thead className="bg-gray-100">
            <tr>
              {[
                "SL",
                "Duration",
                "In-House Earning",
                "Commission Earning",
                "Earn From Shipping",
                "Deliveryman Incentive",
                "Discount Given",
                "VAT/TAX",
                "Refund Given",
                "Total Earning",
                "Action",
              ].map((head) => (
                <th key={head} className="px-4 py-2 ">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 12 }, (_, i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="px-4 py-2 ">{i + 1}</td>
                <td className="px-4 py-2 ">
                  {
                    [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ][i]
                  }
                </td>
                {Array.from({ length: 8 }, () => (
                  <td className="px-4 py-2 ">$0.00</td>
                ))}
                <td className="px-4 py-2 ">
                  <button className="text-green-600 hover:underline">↓</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
