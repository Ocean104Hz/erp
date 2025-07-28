import { FiSearch } from "react-icons/fi";
import { MdRunningWithErrors } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ShippingMethod() {
    return (
        <>
            <div className="flex items-center p-2 mt-6 gap-2">
                <h1 className="text-2xl font-bold">Shipping Method</h1>
            </div>

            <div className="flex space-x-4">
        <Link
          to="/BusinessSetup/BusinessSetup"
          className="px-4 px-4 py-2 rounded-full text-gray-600 font-semibold"
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
          className="px-4 py-2 rounded-full bg-blue-700 text-white font-semibold"
        >
          Shipping Method
        </Link>
        <Link
          to="/BusinessSetup/DeliveryRestriction"
          className="px-4 px-4 py-2 rounded-full text-gray-600 font-semibold"
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

            <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold">Shipping Responsibility</h2>
                    <p className="text-sm text-gray-600 mt-1">
                        Set up the shipping responsibility and associated charges for order delivery.
                    </p>
                </div>

                {/* Content box */}
                <div className="bg-gray-50 p-6 rounded-md">

                    <div className="grid grid-cols-1 md:grid-cols-2">

                        <label className="block bg-white rounded-md border-gray-200 p-4 cursor-pointer hover:shadow-sm">
                            <div className="flex mb-2">
                                <input
                                    type="radio"
                                    name="verification"
                                    className="mt-2 w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                                    value="email"
                                />
                                <div className="ml-3">
                                    <span className="font-semibold text-gray-900">Inhouse shipping</span>
                                    <p className="text-xs text-gray-600 mb-3">
                                        Admin will handle the shipping responsibilities when you choose inhouse shipping method.
                                    </p>
                                </div>
                            </div>
                        </label>


                        <label className="block bg-white rounded-md border-gray-200 p-4 cursor-pointer hover:shadow-sm">
                            <div className="flex mb-2">
                                <input
                                    type="radio"
                                    name="verification"
                                    className="mt-2 w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                                    value="email"
                                />
                                <div className="ml-3">
                                    <span className="font-semibold text-gray-900">Vendor wise shipping</span>
                                    <p className="text-xs text-gray-600 mb-3">
                                        Vendors will handle the shipping responsibilities when you choose vendor wise shipping method.
                                    </p>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className="flex justify-end space-x-3 mt-6">
                        <button type="reset" className="px-10 py-2 border rounded bg-gray-100 text-black-600 hover:bg-gray-200">Reset</button>
                        <button
                            type="submit"
                            className="px-8 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold">Shipping Methods</h2>
                    <p className="text-sm text-gray-600 mt-1">
                        Vendors will handle the shipping responsibilities when you choose vendor wise shipping method.
                    </p>
                </div>

                {/* Content box */}
                <div className="bg-gray-50 p-6 rounded-md">

                    <div className="grid grid-cols-1 md:grid-cols-3">

                        <label className="block bg-white rounded-md border-gray-200 p-4 cursor-pointer hover:shadow-sm">
                            <div className="flex mb-2">
                                <input
                                    type="radio"
                                    name="shippingmethods"
                                    className="mt-2 w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                                    value="email"
                                />
                                <div className="ml-3">
                                    <span className="font-semibold text-gray-900">Order wise</span>
                                    <p className="text-xs text-gray-600 mb-3">
                                        Need to set the shipping cost based on order amount and shipping duration.
                                    </p>
                                </div>
                            </div>
                        </label>

                        <label className="block bg-white rounded-md border-gray-200 p-4 cursor-pointer hover:shadow-sm">
                            <div className="flex mb-2">
                                <input
                                    type="radio"
                                    name="shippingmethods"
                                    className="mt-2 w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                                    value="email"
                                />
                                <div className="ml-3">
                                    <span className="font-semibold text-gray-900">Category wise</span>
                                    <p className="text-xs text-gray-600 mb-3">
                                        Need to set the shipping cost for each category to make sure the correct amount is charged.
                                    </p>
                                </div>
                            </div>
                        </label>

                        <label className="block bg-white rounded-md border-gray-200 p-4 cursor-pointer hover:shadow-sm">
                            <div className="flex mb-2">
                                <input
                                    type="radio"
                                    name="shippingmethods"
                                    className="mt-2 w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                                    value="email"
                                />
                                <div className="ml-3">
                                    <span className="font-semibold text-gray-900">Product wise</span>
                                    <p className="text-xs text-gray-600 mb-3">
                                        Need to set the shipping cost for each product to enable individual shipping fee calculation.
                                    </p>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
                <div className="p-6 bg-white rounded-lg shadow-md">
                    {/* Header */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold">Add order wise shipping method</h2>
                        <p className="text-sm text-gray-600 mt-1">
                            Set up shipping fee calculation based on order and shipping time.
                        </p>
                    </div>

                    {/* Input Fields */}
                    <div className="bg-gray-50 p-6 rounded-md">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Title Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Title <span
                                        className="text-gray-400 text-sm cursor-default"
                                        title="Allow customers to add funds to their wallet"
                                    >
                                        &#9432;
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter the title that will be shown for this shipping method"
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Shipping Duration Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Shipping Duration <span
                                        className="text-gray-400 text-sm cursor-default"
                                        title="Allow customers to add funds to their wallet"
                                    >
                                        &#9432;
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Set up the timeframe for the shipping method"
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Shipping Cost Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Shipping Cost <span
                                        className="text-gray-400 text-sm cursor-default"
                                        title="Allow customers to add funds to their wallet"
                                    >
                                        &#9432;
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Define the cost based on the time frame:"
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end space-x-3 mt-6">
                        <button
                            type="reset"
                            className="px-10 py-2 border rounded bg-gray-100 text-gray-800 hover:bg-gray-200"
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="px-8 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Submit
                        </button>
                    </div>
                </div>

                <div className="p-4 mt-5 shadow-md border rounded-md flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        {/* Left: title */}
                        <div className="flex items-center space-x-2">
                            <span className="font-semibold text-black">List of order wise shipping method</span>
                            <span className="font-bold px-2 py-0.5 text-sm rounded-full bg-gray-100 text-gray-600">1</span>
                        </div>

                        {/* Right: search + export */}
                        <div className="flex items-center justify-end space-x-4">
                            {/* Search Box */}
                            <div className="flex items-center border rounded-md overflow-hidden">
                                <input
                                    type="text"
                                    placeholder="Search by title"
                                    className="px-3 py-2 outline-none text-sm placeholder-gray-400"
                                />
                                <button className="bg-gray-100 px-3 py-3 hover:bg-gray-200">
                                    <FiSearch />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="mb-4 min-w-full table-auto">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="text-left px-10 py-4 font-semibold text-black whitespace-nowrap">SL</th>
                                    <th className="text-left px-10 py-2 font-semibold text-black whitespace-nowrap">Title</th>
                                    <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Shipping Duration</th>
                                    <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Cost ($)</th>
                                    <th className="px-10 py-2 font-semibold text-black whitespace-nowrap">Status</th>
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
                        <p className="mb-10 text-sm text-gray-500 mt-2">No category found</p>
                    </div>
                </div>
            </div>
        </>
    );
}
