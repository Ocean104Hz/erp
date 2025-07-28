import { Link } from "react-router-dom";
export default function Refund() {
    return (
        <>
            <div className="flex items-center p-2 mt-6 gap-2">
                <h1 className="text-2xl font-bold">Refund</h1>
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
          className="px-4 py-2 rounded-full bg-blue-700 text-white font-semibold"
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

            <div className="mt-5 p-6 bg-white rounded-lg shadow space-y-6">
                {/* Header with toggle */}
                <div className="bg-gray-50 p-4 rounded-md flex justify-between items-center">
                    <div>
                        <h2 className="font-semibold text-lg">Customer Wallet</h2>
                        <p className="text-sm text-gray-600">
                            For these wallet settings customers can get the refund to the wallet and also can use their wallet money to pay for any order.
                        </p>
                    </div>
                </div>


                <div className="bg-gray-50 p-4 rounded-md grid grid-cols-2 gap-4">

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Refund Order Validity(Days) <span
                                className="text-gray-400 text-sm cursor-default"
                                title="Allow customers to add funds to their wallet"
                            >
                                &#9432;
                            </span>
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
                </div>
                <div className="text-xs bg-blue-50 p-4 rounded-md text-black mt-4 w-full">
                    <span className="font-medium">💡</span> Enabling the option refund amount will be added to the wallet automatically.
                </div>

                <div className="mt-6 flex justify-end gap-4">
                    <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
                        Reset
                    </button>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        Save information
                    </button>
                </div>
            </div>
        </>
    );
}