import { MdRunningWithErrors } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";

export default function WalletBonus() {
    return (
        <>
            <div className="mb-4 flex items-center p-2 mt-6 gap-2">
                <GiWallet className="text-2xl text-amber-700" />
                <h1 className="text-2xl font-bold">Wallet Bonus Setup</h1>
            </div>

            <div className="p-4 shadow-md border rounded-md flex flex-col gap-4">
                <div className="flex gap-6">
                    <div className="w-1/2">
                        <label className="text-gray-500">Bonus Title</label>
                        <input
                            placeholder="Ex:EID Dhamaka"
                            className="text-gray-500 mt-2 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    <div className="relative w-1/2">
                        <label className="text-gray-500">Short Description</label>
                        <input
                            placeholder="Ex:EID Dhamaka"
                            className="text-gray-500 mt-2 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                </div>


                <div className="flex gap-6">
                    <div className="w-1/3">
                        <label className="text-gray-500">Bonus Type</label>
                        <select className="mt-2 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                            <option disabled selected>Percentage(%)</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>

                    <div className="w-1/3">
                        <label className="text-gray-500">Bonus Amount (%)</label>
                        <input
                            defaultValue={0}
                            type="number"
                            className="mt-2 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    <div className="w-1/3">
                        <label className="text-gray-500">Minimum Add Amount ($)</label>
                        <input
                            defaultValue={0}
                            type="number"
                            className="mt-2 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="w-1/3">
                        <label className="text-gray-500">Maximum Bonus ($)</label>
                        <input
                            defaultValue={0}
                            type="number"
                            className="mt-2 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    <div className="w-1/3">
                        <label className="text-gray-500">Start Date</label>
                        <input
                            type="date"
                            className="mt-2 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    <div className="w-1/3">
                        <label className="text-gray-500">End Date</label>
                        <input
                            type="date"
                            className="mt-2 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                </div>

                <div className="ml-2 flex items-end justify-end gap-4">
                    <button type="reset" className="px-6 py-2 border rounded bg-gray-100 text-black-600 hover:bg-gray-200">Reset</button>
                    <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Submit
                    </button>
                </div>
            </div>

            <div className="p-4 mt-5 shadow-md border rounded-md flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    {/* ซ้าย */}
                    <div className="flex items-center space-x-2">
                        <span className="font-semibold text-black">Wallet Bonus Table</span>
                        <span className="font-bold px-2 py-0.5 text-sm rounded-full bg-gray-100 text-blue-600">0</span>
                    </div>

                    {/* ขวา */}
                    <div className="w-1/2 flex items-center justify-end space-x-4">
                        {/* Search Box */}
                        <div className="w-1/2 flex items-center border rounded-md overflow-hidden">
                            <input
                                type="text"
                                placeholder="Search by bonus title"
                                className="px-3 py-2 w-full  outline-none text-sm placeholder-gray-400"
                            />
                            <button className="bg-gray-100 px-3 py-3 hover:bg-gray-200">
                                <FiSearch />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="mb-4 min-w-full table-auto">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="text-left px-10 py-4 font-semibold text-black whitespace-nowrap">SL</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Bonus Title</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Bonus Info</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Bonus Amount</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Started On</th>
                                <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Expires On</th>
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
