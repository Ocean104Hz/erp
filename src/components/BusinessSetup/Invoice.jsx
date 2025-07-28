import { Link } from "react-router-dom";

export default function Invoice() {
    return (
        <>
            <div className="flex items-center p-2 mt-6 gap-2">
                <h1 className="text-2xl font-bold">Business Setup</h1>
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
          className="px-4 px-4 py-2 rounded-full text-gray-600 font-semibold"
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
          className="px-4 py-2 rounded-full bg-blue-700 text-white font-semibold"
        >
          Invoice
        </Link>
      </div>
            <div className="mt-5 p-6 bg-white rounded-lg shadow-md">
                {/* Title Section */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold">General Setup</h2>
                    <p className="text-sm text-gray-600 mt-1">
                        Complete the basic settings for invoice presentation
                    </p>
                </div>

                <div className="bg-gray-50 p-4">
                    <p>Terms & Condition <span
                        className="text-gray-400 text-sm cursor-default"
                        title="Allow customers to add funds to their wallet"
                    >
                        &#9432;
                    </span></p>
                    <div className="p-2">
                        <textarea
                            placeholder="Terms & Condition"
                            className="w-full h-24 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                </div>
            </div>

            <div className="mt-4 p-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-between">
                    <div className="gl mb-6">
                        <h2 className="text-xl font-semibold">Business Identity</h2>
                        <p className="text-sm text-gray-600 mt-1">
                            Select your business identity type from the provided options and enter the identification information
                        </p>
                    </div>

                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 relative after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                    </label>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                    <div className="flex flex-wrap items-center gap-4">
                        {/* Left side: radio group */}
                        <div className="flex-1">
                            <p className="mb-2 font-semibold">Choose Business Identity</p>
                            <div className="flex gap-56 bg-white border border-gray-200 rounded-md p-3">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="radio" name="businessIdentity" defaultChecked className="w-4 h-4 text-blue-600" />
                                    <span>Tax Id</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="radio" name="businessIdentity" className="w-4 h-4 text-blue-600" />
                                    <span>Bin Number</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="radio" name="businessIdentity" className="w-4 h-4 text-blue-600" />
                                    <span>Musak</span>
                                </label>
                            </div>
                        </div>

                        {/* Right side: input field */}
                        <div className="flex-1 min-w-[200px]">
                            <label className="block mb-2 font-semibold" htmlFor="taxNumber">
                                Tax Number
                            </label>
                            <input
                                type="text"
                                id="taxNumber"
                                placeholder="Enter"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4 p-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-between">
                    <div className="gl mb-6">
                        <h2 className="text-xl font-semibold">Logo on invoice</h2>
                        <p className="text-sm text-gray-600 mt-1">
                            Enable the option to update the logo that appears on invoices
                        </p>
                    </div>

                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 relative after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                    </label>
                </div>

                <div className="bg-gray-50 p-4 rounded">
                    <div className="flex justify-between">
                        <div>
                            <p className="font-semibold">Choose How To Display The Logo</p>
                            <p className="mb-4 text-sm text-gray-600 mt-1">
                                Select invoice logo option from the available alternatives
                            </p>
                        </div>

                        <div className="bg-gray-50 p-3 rounded-md w-1/3">
                            <div className="flex gap-32 bg-white border rounded-md p-2">
                                <label className="inline-flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="logoOption"
                                        value="upload"
                                        className="form-radio text-blue-600"
                                    />
                                    <span>Upload New</span>
                                </label>
                                <label className="inline-flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="logoOption"
                                        value="current"
                                        className="form-radio text-blue-600"
                                        defaultChecked
                                    />
                                    <span>Use Current Logo</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full bg-white px-6 items-center py-10 rounded-lg">
                        <div className="w-1/3">
                            <h1 className="text-gray-500 font-semibold">Upload Logo</h1>
                            <p className="text-sm text-gray-400 font-semibold">
                                Upload your logo here this image will be displayed on invoices
                            </p>
                        </div>

                        <div className="flex flex-col items-center justify-center w-2/3">
                            <div className="flex items-center justify-center w-full h-40 border-2 border-dashed border-gray-200 bg-gray-50 rounded-md">
                                <div className="text-center">
                                    <svg
                                        className="mx-auto h-12 w-12 text-gray-300"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M7 16V4m0 0L4 7m3-3l3 3M17 8v8m0 0l-3-3m3 3l3-3"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <p className="mt-2 text-sm text-gray-400">
                                Jpg jpeg png gif image size : Max 1 MB (325 x 100 px)
                            </p>
                        </div>
                    </div>
                </div>
            </div>

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
                    Save information
                </button>
            </div>
        </>
    );
}