import { Link } from "react-router-dom";
export default function Customer() {
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
          className="px-4 px-4 py-2 rounded-full text-gray-600 font-semibold"
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
          className="px-4 py-2 rounded-full bg-blue-700 text-white font-semibold"
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

            <div className="p-6 mt-5 bg-white rounded-lg shadow space-y-6">
                {/* Header with toggle */}
                <div className="bg-gray-50 p-4 rounded-md flex justify-between items-center">
                    <div>
                        <h2 className="font-semibold text-lg">Customer Wallet</h2>
                        <p className="text-sm text-gray-600">
                            For these wallet settings customers can get the refund to the wallet and also can use their wallet money to pay for any order.
                        </p>
                    </div>
                    {/* Wallet toggle */}
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            defaultChecked={true}
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 relative after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                    </label>
                </div>

                {/* Add funds to wallet section */}
                <div className="bg-gray-50 p-4 rounded-md grid grid-cols-3 gap-4">
                    {/* Add Funds Label */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="font-medium text-sm">Add funds to wallet</span>
                            <span
                                className="text-gray-400 text-sm cursor-default"
                                title="Allow customers to add funds to their wallet"
                            >
                                &#9432;
                            </span>
                        </div>
                        <div className="bg-white border rounded-md p-2 flex items-center justify-between">
                            <span className="text-sm">Status</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    defaultChecked={false}
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 relative after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                            </label>
                        </div>
                    </div>

                    {/* Minimum Add Amount */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Minimum Add Amount (USD)
                        </label>
                        <input
                            type="number"
                            defaultValue={0}
                            className="w-full border rounded-md px-3 py-2 bg-white text-sm"
                        />
                    </div>

                    {/* Maximum Add Amount */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Maximum Add Amount (USD)
                        </label>
                        <input
                            type="number"
                            defaultValue={0}
                            className="w-full border rounded-md px-3 py-2 bg-white text-sm"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-4 p-6 bg-white rounded-lg shadow space-y-6">
                {/* Header with toggle */}
                <div className="bg-gray-50 p-4 rounded-md flex justify-between items-center">
                    <div>
                        <h2 className="font-semibold text-lg">Customer Loyalty Point</h2>
                        <p className="text-sm text-gray-600">
                            In this settings admin can set the rules for the customers for earning and use the loyalty points.
                        </p>
                    </div>
                    {/* Wallet toggle */}
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            defaultChecked={true}
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 relative after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                    </label>
                </div>

                <div className="bg-gray-50 p-4 rounded-md grid grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Equivalent Points Needed to Redeem $1.00
                        </label>
                        <input
                            type="number"
                            defaultValue={0}
                            className="w-full border rounded-md px-3 py-2 bg-white text-sm"
                        />
                    </div>

                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="font-medium text-sm">Add funds to wallet</span>
                            <span
                                className="text-gray-400 text-sm cursor-default"
                                title="Allow customers to add funds to their wallet"
                            >
                                &#9432;
                            </span>
                        </div>
                        <input
                            type="number"
                            defaultValue={0}
                            className="w-full border rounded-md px-3 py-2 bg-white text-sm"
                        />
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-md gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Earn Loyalty Point on Each Order
                        </label>
                        <p className="mb-6 text-sm text-gray-600">
                            Setup loyalty point percentage earned by customer based on order amount
                        </p>
                        <label className="block text-sm font-medium mb-2">
                            Earning Percentage (%)
                        </label>
                        <input
                            type="number"
                            defaultValue={0}
                            placeholder="Ex: 2"
                            className="w-full border rounded-md px-3 py-2 bg-white text-sm"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-4 p-6 bg-white rounded-lg shadow space-y-6">
                {/* Header with toggle */}
                <div className="bg-gray-50 p-4 rounded-md flex justify-between items-center">
                    <div>
                        <h2 className="font-semibold text-lg">Customer referral earning settings</h2>
                        <p className="text-sm text-gray-600">
                            Customers will receive this wallet balance rewards for sharing their referral code
                        </p>
                    </div>
                    {/* Wallet toggle */}
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 relative after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                    </label>
                </div>

                <div className="bg-gray-50 p-4 rounded-md gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Earnings to Each Referral (USD)
                        </label>
                        <input
                            type="number"
                            defaultValue={0}
                            placeholder="Ex: 10"
                            className="w-full border rounded-md px-3 py-2 bg-white text-sm"
                        />
                    </div>
                    <p className="text-red-500 text-sm font-semibold">Must turn on add fund to wallet option otherwise customer can not receive the reward amount.</p>
                </div>
            </div>
        </>
    );
}