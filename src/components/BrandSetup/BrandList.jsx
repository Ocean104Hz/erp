// Brand List
import { FcPositiveDynamic } from "react-icons/fc";
import { FiSearch } from "react-icons/fi";
import { FaFileExcel } from "react-icons/fa";
import { MdRunningWithErrors } from "react-icons/md";
import { Link } from "react-router-dom";

export default function BrandList() {
    return (
        <>
            <div className="mb-4 flex items-center p-2 mt-6 gap-2 ">
                <FcPositiveDynamic className="text-2xl text-black-500" />
                <h1 className="text-2xl font-bold">Brand List</h1>
                <span className="font-bold px-2 py-0.5 text-sm rounded-full bg-white-100 text-blue-600">0</span>
            </div>
            <div className="p-4 mt-5 shadow-md  rounded-md flex flex-col gap-4 bg-white">
                <div className="flex justify-between items-center">
                    {/* ซ้าย */}
                    <div className="flex items-center space-x-2">
                        {/* Search Box */}
                        <div className="flex items-center border rounded-md">
                            <input
                                type="text"
                                placeholder="Search by orders id or refund id"
                                className="px-3 py-2 outline-none text-sm placeholder-gray-400"
                            />
                            <button className="bg-gray-100 px-3 py-3 hover:bg-gray-200">
                                <FiSearch />
                            </button>
                        </div>
                    </div>

                    {/* ขวา */}
                    <div className="flex items-center justify-end space-x-4">
                        

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
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Brand Logo</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Name</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Total Product</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Total Order</th>
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

