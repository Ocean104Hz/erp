import { FcPositiveDynamic } from "react-icons/fc";
import { PiTrolleyDuotone } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { FaFileExcel } from "react-icons/fa";
import { MdRunningWithErrors } from "react-icons/md";
import { GrDocumentPdf } from "react-icons/gr";
import { Link } from "react-router-dom";
import EarningChar from "../EarningChar";

export default function Report() {
    return (
        <>
            <div className="mb-4 flex items-center p-2 mt-6 gap-2 ">
                <FcPositiveDynamic className="text-2xl text-black-500" />
                <h1 className="text-2xl font-bold">Transaction Report</h1>
            </div>

            <div className="flex space-x-4">
                <Link to="/Transactions/Transactions" className="px-4 py-2 rounded-full text-gray-600 font-semibold">Order Transactions</Link>
                <Link to="/Transactions/Reports" className="px-4 py-2 rounded-full bg-blue-700 text-white font-semibold">Expense Transactions</Link>
                <Link to="/Transactions/Refund" className="px-4 py-2 rounded-full text-gray-600 font-semibold">Refund Transactions</Link>
            </div>

            <div className="p-4 mt-5 shadow-md border border-gray-300 rounded-md flex flex-col gap-4 bg-white">
                <div className="flex">
                    <div className="w-1/4">
                        <h1 className="font-bold text-lg">Filter Data</h1>
                        <label className="text-gray-500">Select status</label>
                        <select className="mt-2 w-full border rounded border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                            <option disabled selected>All status</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>

                    <div className="w-1/4 ml-2 mt-7">
                        <label className="text-gray-500">Select seller</label>
                        <select className="mt-2 w-full border rounded border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                            <option disabled selected>All</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>

                    <div className="w-1/4 ml-2 mt-7">
                        <label className="text-gray-500">Select customer</label>
                        <select className="mt-2 w-full border rounded border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                            <option disabled selected>All customer</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>

                    <div className="w-1/4 ml-2 mt-7">
                        <label className="text-gray-500">Select date</label>
                        <select className="mt-2 w-full border rounded border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                            <option disabled selected>This Year</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                </div>


                <div className="flex justify-end px-4 pb-2">
                    <button type="submit" className="ml-4 min-w-[120px] py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Filter
                    </button>
                </div>
            </div>

            <div className="flex mt-4 flex-wrap gap-4">

                {/* LEFT PANEL - Summary Cards */}
                <div className="flex flex-col gap-4 w-full lg:w-1/4">
                    {/* Total Orders */}
                    <div className="p-4 shadow-md border border-gray-300 rounded-md bg-white">
                        <div className="flex items-center gap-3">
                            <PiTrolleyDuotone className="text-4xl" />
                            <div>
                                <h1 className="text-2xl font-bold">0</h1>
                                <h2 className="text-xs font-bold">Total Orders</h2>
                            </div>
                        </div>
                        <div className="mt-6 mb-2 flex gap-32 justify-center px-2">
                            <div className="text-center">
                                <h2 className="text-blue-600 font-bold">0</h2>
                                <p className="text-sm text-gray-600">In House Orders</p>
                            </div>
                            <div className="text-center">
                                <h2 className="text-green-600 font-bold">0</h2>
                                <p className="text-sm text-gray-600">Vendor Orders</p>
                            </div>
                        </div>
                    </div>

                    {/* Total Products */}
                    <div className="p-4 shadow-md border border-gray-300 rounded-md bg-white">
                        <div className="flex items-center gap-3">
                            <PiTrolleyDuotone className="text-4xl" />
                            <div>
                                <h1 className="text-2xl font-bold">0</h1>
                                <h2 className="text-xs font-bold">Total Products</h2>
                            </div>
                        </div>
                        <div className="mt-6 mb-2 flex gap-32 justify-center px-2">
                            <div className="text-center">
                                <h2 className="text-blue-600 font-bold">0</h2>
                                <p className="text-sm text-gray-600">In House Products</p>
                            </div>
                            <div className="text-center">
                                <h2 className="text-green-600 font-bold">0</h2>
                                <p className="text-sm text-gray-600">Vendor Products</p>
                            </div>
                        </div>
                    </div>

                    {/* Total Store */}
                    <div className="pb-10 p-4 shadow-md border border-gray-300 rounded-md bg-white">
                        <div className="flex items-center gap-3">
                            <PiTrolleyDuotone className="text-4xl" />
                            <div>
                                <h1 className="text-2xl font-bold">0</h1>
                                <h2 className="text-xs font-bold">Total Stores</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CENTER PANEL - Order Statistics Chart */}
                <div className="flex-1 w-1/3 p-6 shadow-md border border-gray-300 rounded-md bg-white">
                    <h2 className="text-md font-semibold mb-2">Order Statistics</h2>
                    {/* กราฟจำลอง */}
                    <div className="h-95 bg-white border-gray-300 flex items-center justify-center text-gray-400">
                        <EarningChar/>
                    </div>
                </div>

                {/* RIGHT PANEL - Payment Statistics */}
                <div className="w-full md:w-1/4 p-4 shadow-md border border-gray-300 rounded-md bg-white">
                    <h2 className="text-sm font-semibold mb-2 text-gray-600">Payment Statistics</h2>

                    <div className="text-center mt-10">
                        <h1 className="text-2xl font-bold">฿0.00</h1>
                        <p className="text-sm text-gray-600 mt-1">Completed payments</p>
                    </div>

                    <ul className="mt-16 space-y-2 text-sm">
                        <li className="ml-20 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-900"></span>
                            Cash payments (฿0.00)
                        </li>
                        <li className="ml-20 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                            Digital payments (฿0.00)
                        </li>
                    </ul>

                    <div className="ml-20 mt-2 flex gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-300"></span>
                            Wallet (฿0.00)
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-100"></span>
                            Offline payments (฿0.00)
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 mt-5 shadow-md border border-gray-300 rounded-md flex flex-col gap-4 bg-white">
                <div className="flex justify-between items-center">
                    {/* ซ้าย */}
                    <div className="flex items-center space-x-2">
                        <span className="font-semibold text-black">Total Transactions</span>
                        <span className="font-bold px-2 py-0.5 text-sm rounded-full bg-gray-100 text-blue-600">0</span>
                    </div>

                    {/* ขวา */}
                    <div className="flex items-center justify-end space-x-4">
                        {/* Search Box */}
                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                            <input
                                type="text"
                                placeholder="Search by orders id"
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
                        <thead className="bg-white">
                            <tr>
                                <th className="px-10 py-4 font-semibold text-black whitespace-nowrap">SL</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Order Id</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Shop Name</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Customer Name</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Total Product Amount</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Product Discount</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Coupon Discount</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Discounted Amount</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">VAT/TAX</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Shipping Charge</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Order Amount</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Delivered By</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Deliveryman Incentive</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Admin Discount</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Vendor Discount</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Admin Commission</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Admin Net Income</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Vendor Net Income</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Payment Method</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Payment Status</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Action</th>
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
    );
}
