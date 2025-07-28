import { Link } from "react-router-dom";
export default function DeliveryMen() {
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
          className="px-4 py-2 rounded-full bg-blue-700 text-white font-semibold"
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
          className="px-4 px-4 py-2 rounded-full text-gray-600 font-semibold"
        >
          Invoice
        </Link>
      </div>

            <div className="p-4 mt-5 shadow-md rounded-md bg-white">
                {/* Maintenance Mode Section */}
                <div className="flex justify-between items-center py-4 " >
                    <div >
                        <h2 className="text-xl font-semibold">Proof of Delivery</h2>
                        <label className="flex items-center cursor-pointer">
                            <span className="mr-2 text-sm text-gray-600">This option allow the deliveryman to upload a picture as a proof of delivery</span>
                        </label>
                    </div>

                    {/* Right Side (Toggle Switch) */}
                    <div className="flex gap-32 items-center border rounded-lg p-4 space-x-2">
                        <span className="text-sm font-medium text-gray-900">Upload Picture</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="   sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-500 transition-all duration-200"></div>
                            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-200 peer-checked:translate-x-full"></div>
                        </label>
                    </div>
                </div>
            </div>

            <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold">Forget password setup</h2>
                    <p className="text-sm text-gray-600 mt-1">
                        Setup how vendors can recover their forgotten passwords.
                    </p>
                </div>

                {/* Content box */}
                <div className="bg-gray-50 p-6 rounded-md">
                    <p className="mb-4 font-medium text-gray-800">Select verification option</p>

                    {/* Options container: 2 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Email option */}
                        <label className="block bg-white rounded-md border-gray-200 p-4 cursor-pointer hover:shadow-sm">
                            <div className="flex items-center mb-2">
                                <input
                                    type="radio"
                                    name="verification"
                                    className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                                    value="email"
                                />
                                <span className="ml-3 font-semibold text-gray-900">Email</span>
                            </div>
                            <p className="text-xs text-gray-600 mb-3">
                                Vendor will recover his password though email
                            </p>
                            <div className="flex items-center bg-yellow-50 p-3 rounded-md border border-yellow-200 text-black text-xs">
                                To configure email for this system visit
                                <a
                                    href="#"
                                    className="underline ml-1 font-semibold text-blue-600 hover:text-yellow-900"
                                >
                                    Email Configuration
                                </a>
                                &nbsp;Page
                            </div>
                        </label>

                        {/* Phone (OTP) option */}
                        <label className="block bg-white rounded-md p-4 cursor-pointer hover:shadow-sm">
                            <div className="flex items-center mb-2">
                                <input
                                    type="radio"
                                    name="verification"
                                    className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                                    value="phone"
                                    defaultChecked
                                />
                                <span className="ml-3 font-semibold text-gray-900">Phone (OTP)</span>
                            </div>
                            <p className="text-xs text-gray-600 mb-3">
                                Vendor will recover his password though otp
                            </p>
                            <div className="flex items-center bg-yellow-50 p-3 rounded-md border border-yellow-200 text-black text-xs">
                                To configure phone for this system visit
                                <a
                                    href="#"
                                    className="underline ml-1 font-semibold text-blue-600 hover:text-yellow-900"
                                >
                                    OTP Configuration
                                </a>
                                &nbsp;Page
                            </div>
                        </label>
                    </div>
                </div>
                <div className="flex justify-end space-x-3 mt-6">
                    <button type="reset" className="px-6 py-2 border rounded bg-gray-100 text-black-600 hover:bg-gray-200">Reset</button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Save information
                    </button>
                </div>
            </div>
        </>
    );
}
