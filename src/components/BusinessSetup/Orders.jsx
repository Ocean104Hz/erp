import { Link } from "react-router-dom";
export default function Orders() {
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
          className="px-4 py-2 rounded-full bg-blue-700 text-white font-semibold"
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

            <div className="mt-5 p-6 bg-white rounded-lg shadow-md">
                {/* Title Section */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold">General Setup</h2>
                    <p className="text-sm text-gray-600 mt-1">
                        Complete the necessary setup for order process completion
                    </p>
                </div>

                <div className="bg-gray-50 grid grid-cols-1 md:grid-cols-2 gap-6 p-4 rounded-md">
                    <div className="flex p-4 bg-white rounded-md shadow-sm">
                        <div className="flex-1">
                            <label className="text-sm font-medium text-gray-700">
                                Order Delivery Verification
                            </label>
                            <p className="text-xs text-gray-600 mt-1">
                                Customers receive a verification code after placing an order deliveryman must get the code to verify from the customer when deliver the order
                            </p>
                        </div>
                        <label className="relative inline-flex cursor-pointer">
                            <input type="checkbox" className="   sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-500 transition-all duration-200"></div>
                            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-200 peer-checked:translate-x-full"></div>
                        </label>
                    </div>

                    <div className="flex justify-between p-4 bg-white rounded-md shadow-sm">
                        <div className="flex-1">
                            <label className="text-sm font-medium text-gray-700">
                                Vendor Can Set Minimum Order Amount
                            </label>
                            <p className="text-xs text-gray-600 mt-1">
                                Set a certain amount below that customer can not place any order for others vendor and in-house vendor
                            </p>
                            <div className="text-xs bg-blue-50 p-4 rounded-md text-black mt-4 w-full">
                                <span className="font-medium">💡</span> You can manage all brands from this page{' '}
                                <a href="#" className="text-blue-600 underline font-semibold hover:text-blue-800">
                                    In house shop
                                </a>.
                            </div>
                        </div>
                        <label className="relative inline-flex cursor-pointer">
                            <input type="checkbox" className="   sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-500 transition-all duration-200"></div>
                            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-200 peer-checked:translate-x-full"></div>
                        </label>
                    </div>

                    <div className="flex justify-between p-4 bg-white rounded-md shadow-sm">
                        <div className="flex-1">
                            <label className="text-sm font-medium text-gray-700">
                                Show Billing Address
                            </label>
                            <p className="text-xs text-gray-600 mt-1">
                                If enabled this option customers will be able to enter their billing address information
                            </p>
                        </div>
                        <label className="relative inline-flex cursor-pointer">
                            <input type="checkbox" className="   sr-only peer" defaultChecked={true} />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-500 transition-all duration-200"></div>
                            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-200 peer-checked:translate-x-full"></div>
                        </label>
                    </div>

                    <div className="flex justify-between p-4 bg-white rounded-md shadow-sm">
                        <div className="flex-1">
                            <label className="text-sm font-medium text-gray-700">
                                Guest Checkout
                            </label>
                            <p className="text-xs text-gray-600 mt-1">
                                EIf enabled this option customers can complete order checkout process without the need to create or log in to an account.
                            </p>
                        </div>
                        <label className="relative inline-flex cursor-pointer">
                            <input type="checkbox" className="   sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-500 transition-all duration-200"></div>
                            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-200 peer-checked:translate-x-full"></div>
                        </label>
                    </div>
                </div>
            </div>

            <div className="mt-4 p-6 bg-white rounded-lg shadow-md">
                {/* Section Header */}
                <div>
                    <h2 className="font-semibold text-lg">Setup Free Delivery</h2>
                    <p className="mb-4 text-sm text-gray-600">
                        Configure free delivery offer for orders that meet a specific order value
                    </p>
                </div>

                {/* Toggle Section */}
                <div className="bg-gray-50 p-4 rounded-md space-y-4">
                    <div className="flex justify-between items-center bg-white border rounded-md p-4">
                        <div>
                            <h3 className="font-semibold text-sm">Turn On / Off Free Delivery</h3>
                            <p className="text-sm text-gray-600">
                                If enabled free delivery will be available when customers order over a certain amount.
                            </p>
                        </div>
                        {/* Toggle */}
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                defaultChecked={false}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 relative after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                        </label>
                    </div>

                    {/* Responsibility + Threshold */}
                    <div className="grid grid-cols-3 gap-4 items-center">
                        {/* Responsibility Options */}
                        <div className="col-span-2">
                            <label className="block mb-2 text-sm font-medium">Free Delivery Responsibility</label>
                            <div className="flex gap-6 bg-white border rounded-md p-2">
                                <label className="text-gray-700 flex items-center gap-2 text-sm font-medium">
                                    <input type="radio" name="responsibility" defaultChecked />
                                    Admin Responsibility
                                </label>
                                <label className="text-gray-700 flex items-center gap-2 text-sm font-medium">
                                    <input type="radio" name="responsibility" />
                                    Vendors Responsibility
                                </label>
                            </div>
                        </div>

                        {/* Threshold input */}
                        <div>
                            <label className="block mb-2 text-sm font-medium">
                                Free Delivery Over ($)
                                <span title="Minimum order amount for free delivery" className="text-gray-400 ml-1">&#9432;</span>
                            </label>
                            <input
                                type="number"
                                defaultValue={0}
                                className="w-full border rounded-md px-3 py-2 text-sm bg-white"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex justify-end gap-4">
                <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
                    Reset
                </button>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Save information
                </button>
            </div>
        </>
    );
}
