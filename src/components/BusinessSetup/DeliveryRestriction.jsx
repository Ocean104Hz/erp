import { FiSearch } from "react-icons/fi";
import { MdRunningWithErrors } from "react-icons/md";
import { Link } from "react-router-dom";

export default function DeliveryRestriction() {
    return (
        <>
            <div className="flex items-center p-2 mt-6 gap-2">
                <h1 className="text-2xl font-bold">Business Setup</h1>
            </div>

            <div className="flex space-x-4">
        <Link
          to="/BusinessSetup/BusinessSetup"
          className="px-4 py-2 rounded-full text-gray-600 font-semibold"
        >
          General
        </Link>
        <Link
          to="/BusinessSetup/WebsiteSetup"
          className="px-4 py-2 rounded-full text-gray-600 font-semibold"
        >
          Website Setup
        </Link>
        <Link
          to="/BusinessSetup/Vendors"
          className="px-4 px-4 py-2 rounded-full text-gray-600 font-semibold"
        >
          Vendors
        </Link>
        <Link
          to="/BusinessSetup/Products"
          className="px-4 px-4 py-2 rounded-full text-gray-600 font-semibold"
        >
          Products
        </Link>
        <Link
          to="/BusinessSetup/DeliveryMen"
          className="px-4 px-4 py-2 rounded-full text-gray-600 font-semibold"
        >
          Delivery Men
        </Link>
        <Link
          to="/BusinessSetup/Customer"
          className="px-4 px-4 py-2 rounded-full text-gray-600 font-semibold"
        >
          Customer
        </Link>
        <Link
          to="/BusinessSetup/Orders"
          className="px-4 px-4 py-2 rounded-full text-gray-600 font-semibold"
        >
          Orders
        </Link>
        <Link
          to="/BusinessSetup/Refund"
          className="px-4 px-4 py-2 rounded-full text-gray-600 font-semibold"
        >
          Refund
        </Link>
        <Link
          to="/BusinessSetup/ShippingMethod"
          className="px-4 px-4 py-2 rounded-full text-gray-600 font-semibold"
        >
          Shipping Method
        </Link>
        <Link
          to="/BusinessSetup/DeliveryRestriction"
          className="px-4 py-2 rounded-full bg-blue-700 text-white font-semibold"
        >
          Delivery Restriction
        </Link>
        <Link
          to="/BusinessSetup/Invoice"
          className="px-4 px-4 py-2 rounded-full text-gray-600 font-semibold"
        >
          Invoice
        </Link>
      </div>
            <div className="p-6 min-h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Delivery Available Country */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="font-semibold text-lg">Delivery Available Country</h2>
                            <label className="inline-flex relative items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 transition"></div>
                                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition"></div>
                            </label>
                        </div>

                        <p className="text-sm text-gray-600 mb-3">
                            If you enable this you will be able to select multiple countries for product delivery.
                        </p>

                        <div className="bg-yellow-100 border-l-4 border-yellow-400 text-black p-3 rounded mb-4 text-xs font-semibold">
                            <span className="font-bold">Warning:</span> If a country name is not entered it will not appear as an option for shipping in that country.
                        </div>

                        <div className="bg-gray-50 p-4 rounded mb-6">
                            <label className="block mb-1 text-sm font-medium text-gray-700">Country</label>
                            <select
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option>Select Country</option>
                            </select>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded"
                                >
                                    Save
                                </button>
                            </div>
                        </div>

                        {/* Country List */}
                        <div className="bg-white rounded shadow p-4">
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="font-semibold text-sm">
                                    Country List <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-0.5 text-xs">0</span>
                                </h3>
                                {/* Search Box */}
                                <div className="flex items-center border rounded-md overflow-hidden">
                                    <input
                                        type="text"
                                        placeholder="Search Country"
                                        className="px-3 py-2 outline-none text-sm placeholder-gray-400"
                                    />
                                    <button className="bg-gray-100 px-3 py-3 hover:bg-gray-200">
                                        <FiSearch />
                                    </button>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="overflow-x-auto">
                                <table className="mb-4 min-w-full table-auto">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="text-left px-10 py-4 font-semibold text-black whitespace-nowrap">SL</th>
                                            <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Country Name</th>
                                            <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </table>
                            </div>

                            {/* No data fallback */}
                            <div className="flex flex-col justify-center items-center p-2 mt-6 gap-2">
                                <MdRunningWithErrors className="mt-20 text-9xl text-black-500" />
                                <p className="mb-10 text-sm text-gray-500 mt-2">No country found</p>
                            </div>
                        </div>
                    </div>

                    {/* Delivery Available ZIP Code Area */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="font-semibold text-lg">Delivery Available ZIP Code Area</h2>
                            <label className="inline-flex relative items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 transition"></div>
                                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition"></div>
                            </label>
                        </div>

                        <p className="text-sm text-gray-600 mb-3">
                            If enabled the zip code areas will be available for delivery.
                        </p>

                        <div className="bg-yellow-100 border-l-4 border-yellow-400 text-black p-3 rounded mb-4 text-xs font-semibold">
                            <span className="font-bold">If</span> you do not enter a specific <strong>ZIP Code</strong> From a country, That area would not be available for delivery.
                        </div>

                        <div className="bg-gray-50 p-4 rounded mb-6">
                            <label className="block mb-1 text-sm font-medium text-gray-700">Zip code</label>
                            <input
                                type="text"
                                placeholder="Enter zip code"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                            />

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded"
                                >
                                    Save
                                </button>
                            </div>
                        </div>

                        {/* Zip Code List */}
                        <div className="bg-white rounded shadow p-4">
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="font-semibold text-sm">
                                    Zip Code List <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-0.5 text-xs">0</span>
                                </h3>
                                {/* Search Box */}
                                <div className="flex items-center border rounded-md overflow-hidden">
                                    <input
                                        type="text"
                                        placeholder="Search ZIP Code"
                                        className="px-3 py-2 outline-none text-sm placeholder-gray-400"
                                    />
                                    <button className="bg-gray-100 px-3 py-3 hover:bg-gray-200">
                                        <FiSearch />
                                    </button>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="overflow-x-auto">
                                <table className="mb-4 min-w-full table-auto">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="text-left px-10 py-4 font-semibold text-black whitespace-nowrap">SL</th>
                                            <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Zip Code</th>
                                            <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </table>
                            </div>

                            {/* No data fallback */}
                            <div className="flex flex-col justify-center items-center p-2 mt-6 gap-2">
                                <MdRunningWithErrors className="mt-20 text-9xl text-black-500" />
                                <p className="mb-10 text-sm text-gray-500 mt-2">No zip code found</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}