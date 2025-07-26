import { FcPositiveDynamic } from "react-icons/fc";
import { PiTrolleyDuotone } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { FaFileExcel } from "react-icons/fa";
import { MdRunningWithErrors } from "react-icons/md";
import { GrDocumentPdf } from "react-icons/gr";
import { Link } from "react-router-dom";


export default function Transactions() {
    return(
        <>
            <div className="mb-4 flex items-center p-2 mt-6 gap-2 ">
                <FcPositiveDynamic className="text-2xl text-black-500" />
                <h1 className="text-2xl font-bold">Transaction Report</h1>
            </div>

            <div className="flex space-x-4">
                <Link to="/Transactions/Transactions" className="px-4 py-2 rounded-full bg-blue-700 text-white font-semibold">Order Transactions</Link>
                <Link to="/Transactions/Reports" className="px-4 py-2 rounded-full text-gray-600 font-semibold">Expense Transactions</Link>
                <Link to="/Transactions/Refund" className="px-4 py-2 rounded-full text-gray-600 font-semibold">Refund Transactions</Link>
            </div>

            <div className="p-4 mt-5 shadow-md border rounded-md gap-4">
                <div className="flex items-end gap-4">
                    <div className="w-1/4">
                        <h1 className="font-bold text-lg">Filter Data</h1>
                        <label className="text-gray-500">Select Date</label>
                        <select className="mt-2 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                            <option disabled selected>This year</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>

                    <div className="w-1/4">
                        <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                            Filter
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex mt-4 flex-wrap gap-4">

                {/* LEFT PANEL - Summary Cards */}
                <div className="flex flex-col gap-4 w-full lg:w-1/3">
                    {/* Total Expense */}
                    <div className="pb-20 p-4 shadow-md border rounded-md">
                        <div className="flex items-center gap-3">
                            <PiTrolleyDuotone className="text-4xl" />
                            <div>
                                <h1 className="text-2xl font-bold">$0.00</h1>
                                <h2 className="text-xs font-bold">Total Expense</h2>
                            </div>
                        </div>
                    </div>

                    {/* Free Delivery */}
                    <div className="pb-20 p-4 shadow-md border rounded-md">
                        <div className="flex items-center gap-3">
                            <PiTrolleyDuotone className="text-4xl" />
                            <div>
                                <h1 className="text-2xl font-bold">$0.00</h1>
                                <h2 className="text-xs font-bold">Free Delivery</h2>
                            </div>
                        </div>
                    </div>

                    {/* Coupon Discount */}
                    <div className="pb-20 p-4 shadow-md border rounded-md">
                        <div className="flex items-center gap-3">
                            <PiTrolleyDuotone className="text-4xl" />
                            <div>
                                <h1 className="text-2xl font-bold">$0.00</h1>
                                <h2 className="text-xs font-bold">Coupon Discount</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT PANEL */}
                <div className="flex-1 w-2/3 p-6 shadow-md border rounded-md">
                    <h2 className="text-md font-semibold mb-2">Order Statistics</h2>
                    {/* กราฟจำลอง */}
                    <div className="h-64 bg-gray-50 border-dashed border-2 border-gray-300 flex items-center justify-center text-gray-400">
                        <p>Chart Placeholder</p>
                    </div>
                </div>
            </div>

            <div className="p-4 mt-5 shadow-md border rounded-md flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    {/* ซ้าย */}
                    <div className="flex items-center space-x-2">
                        <span className="font-semibold text-black">Total Transactions</span>
                        <span className="font-bold px-2 py-0.5 text-sm rounded-full bg-gray-100 text-blue-600">0</span>
                    </div>

                    {/* ขวา */}
                    <div className="flex items-center justify-end space-x-4">
                        {/* Search Box */}
                        <div className="flex items-center border rounded-md overflow-hidden">
                            <input
                                type="text"
                                placeholder="Search by Order ID or Transaction ID"
                                className="px-3 py-2 outline-none text-sm placeholder-gray-400"
                            />
                            <button className="bg-gray-100 px-3 py-3 hover:bg-gray-200">
                                <FiSearch />
                            </button>
                        </div>

                        <button className="flex items-center border border-blue-500 text-blue-600 font-semibold px-4 py-2 rounded-md hover:bg-blue-50">
                            <GrDocumentPdf className="mr-2 text-blue-600 text-lg" />
                            Download PDF
                        </button>

                        {/* Export Button */}
                        <button className="flex items-center border border-blue-500 text-blue-600 font-semibold px-4 py-2 rounded-md hover:bg-blue-50">
                            <FaFileExcel className="mr-2 text-green-600 text-lg" />
                            Export
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="mb-4 min-w-full table-auto">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-10 py-4 font-semibold text-black whitespace-nowrap">SL</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Order Id</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Shop Name</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Customer Name</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Total Product Amount</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Product Discount</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Coupon Discount</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col justify-center items-center p-2 mt-6 gap-2">
                    <MdRunningWithErrors className="mt-20 text-9xl text-black-500" />
                    <p className="mb-10 text-sm text-gray-500 mt-2">No category found</p>
                </div>
            </div>
        </>
    )
}