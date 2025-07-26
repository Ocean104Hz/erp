import { FiSearch } from "react-icons/fi";
import { FaFileExcel } from "react-icons/fa";
import { MdRunningWithErrors } from "react-icons/md";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function CustomerReviews() {
    return (
        <>
            <div className="mb-4 flex items-center p-2 mt-6 gap-2">
                <FaArrowsDownToPeople className="text-2xl text-yellow-500" />
                <h1 className="text-2xl font-bold">Customer Reviews</h1>
                <span className="font-bold px-2 py-0.5 text-sm rounded-full bg-gray-100 text-blue-600">0</span>
            </div>

            <div className="p-4 mt-5 shadow-md border rounded-md flex flex-col gap-4">
                <div className="flex">
                    <div className="w-1/3">
                        <h1 className="text-sm font-bold">Order Date</h1>
                        <input
                            type="date"
                            className="text-gray-500 mt-2 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    <div className="relative w-1/3 ml-2">
                        <h1 className="text-sm font-bold">Customer Joining Date</h1>
                        <input
                            type="date"
                            className="text-gray-500 mt-2 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    <div className="w-1/3 ml-2">
                        <h1 className="text-sm font-bold">Customer Status</h1>
                        <select className="mt-2 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                            <option disabled selected>Select status</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                </div>


                <div className="flex">
                    <div className="w-1/3">
                        <h1 className="text-sm font-bold">Sort By</h1>
                        <select className="mt-2 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                            <option disabled selected>Select Customer sorting order</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <div className="w-1/3 ml-2 flex items-end justify-start gap-4">
                        <button type="reset" className="w-1/6 py-2 border rounded bg-gray-100 text-black-600 hover:bg-gray-200">Reset</button>
                        <button type="submit" className="w-1/6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                            Filter
                        </button>
                    </div>
                </div>
            </div>

            <div className="p-4 mt-5 shadow-md border rounded-md flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    {/* ซ้าย */}
                    <div className="flex items-center space-x-2">
                        <span className="font-semibold text-black">Customer Reviews List</span>
                        <span className="font-bold px-2 py-0.5 text-sm rounded-full bg-gray-100 text-blue-600">0</span>
                    </div>

                    {/* ขวา */}
                    <div className="flex items-center justify-end space-x-4">
                        {/* Search Box */}
                        <div className="flex items-center border rounded-md overflow-hidden">
                            <input
                                type="text"
                                placeholder="Search by Product or Customer"
                                className="px-3 py-2 outline-none text-sm placeholder-gray-400"
                            />
                            <button className="bg-gray-100 px-3 py-3 hover:bg-gray-200">
                                <FiSearch />
                            </button>
                        </div>

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
                                <th className="text-left px-10 py-4 font-semibold text-black whitespace-nowrap">SL</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Review ID</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Product</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Customer</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Rating</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Review</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Reply</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Date</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Status</th>
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
