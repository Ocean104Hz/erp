import { FaFileExcel } from "react-icons/fa";
import { MdRunningWithErrors } from "react-icons/md";
import { GiWallet } from "react-icons/gi";

export default function Wallet() {
    return (
        <>
            <div className="mb-4 flex items-center p-2 mt-6 gap-2">
                <GiWallet className="text-2xl text-amber-700" />
                <h1 className="text-2xl font-bold">Wallet</h1>
            </div>

            <div className="p-4 shadow-md border rounded-md flex flex-col gap-4">
                <div className="border-b pb-2">
                    <h1 className="text-lg font-bold">Filter Options</h1>
                </div>

                <div className="flex gap-6">
                    <div className="w-1/2">
                        <input
                            type="date"
                            className="text-gray-500 mt-2 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    <div className="relative w-1/2">
                        <input
                            type="date"
                            className="text-gray-500 mt-2 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                </div>


                <div className="flex gap-6">
                    <div className="w-1/2">
                        <select className="mt-2 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                            <option disabled selected>All</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>

                    <div className="w-1/2">
                        <select className="mt-2 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                            <option disabled selected>All Customer</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                </div>

                <div className="ml-2 flex items-end justify-end gap-4">
                    <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Filter
                    </button>
                </div>
            </div>

            <div className="p-4 mt-5 shadow-md border rounded-md flex flex-col gap-4">
                <div className="border-b pb-2">
                    <h1 className="text-lg font-bold">Summary</h1>
                </div>

                <div className="flex gap-6">
                    {/* Debit */}
                    <div className="w-1/3 bg-gray-50 rounded-md p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-md font-bold text-black">
                                <span>🎯</span>
                                Debit
                            </div>
                            <div className="text-blue-700 font-bold text-lg">$0.00</div>
                        </div>
                    </div>

                    {/* Credit */}
                    <div className="w-1/3 bg-gray-50 rounded-md p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-md font-bold text-black">
                                <span>💰</span>
                                Credit
                            </div>
                            <div className="text-orange-300 font-bold text-lg">$0.00</div>
                        </div>
                    </div>

                    {/* Balance */}
                    <div className="w-1/3 bg-gray-50 rounded-md p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-md font-bold text-black">
                                <span>🧾</span>
                                Balance
                            </div>
                            <div className="text-green-600 font-bold text-lg">$0.00</div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="p-4 mt-5 shadow-md border rounded-md flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    {/* ซ้าย */}
                    <div className="flex items-center space-x-2">
                        <span className="font-semibold text-black">Transactions</span>
                        <span className="font-bold px-2 py-0.5 text-sm rounded-full bg-gray-100 text-blue-600">0</span>
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
                                <th className="text-left px-10 py-4 font-semibold text-black whitespace-nowrap">SL</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Transaction ID</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Customer</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Credit</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Debit</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Balance</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Transaction Type</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Reference</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Created At</th>
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


