import { FaPen } from "react-icons/fa";

export default function Pos(){
    return (
        <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* LEFT: Product Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Product Section</h2>

                <div className="flex items-center gap-4 mb-4">
                <select className="border rounded p-2">
                    <option>All categories</option>
                </select>
                <div className="flex-1 relative">
                    <input
                    type="text"
                    placeholder="Search by name or sku"
                    className="w-full border rounded p-2 pr-10"
                    />
                    <span className="absolute right-3 top-2.5 text-gray-500">🔍</span>
                </div>
                </div>

                <div className="flex justify-center items-center border border-dashed border-gray-300 h-64 rounded bg-gray-50 text-gray-500">
                Currently no product available by this name
                </div>
            </div>

            {/* RIGHT: Billing Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Billing Section</h2>
                <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm">
                    View All Hold Orders <span className="bg-red-500 text-white px-2 py-0.5 rounded-full ml-1 text-xs">0</span>
                </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <select className="border border-gray-300 rounded-md p-2 w-full col-span-2 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out">
                        <option className="bg-white text-gray-900 hover:bg-gray-100">Walking customer</option>
                    </select>
                    <button className="bg-green-600 text-white px-4 py-2 rounded text-sm">Add New Customer</button>
                </div>

                <div className="grid drid-cols-4 md:grid-cols-4 gap-4 mb-4">
                <select className="border border-gray-300 rounded-md p-2 w-full col-span-2 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out">
                    <option className="bg-white text-gray-900 hover:bg-gray-100">walking-customer-261</option>
                    <option className="bg-white text-gray-900 hover:bg-gray-100">walking-customer-262</option>
                    <option className="bg-white text-gray-900 hover:bg-gray-100">walking-customer-263</option>
                </select>
                <button className="bg-gray-200 px-4 py-2 rounded text-sm">Clear Cart</button>
                <button className="bg-blue-700 text-white px-4 py-2 rounded text-sm">New Order</button>
                </div>

                {/* Item Table */}
                <table className="w-full text-sm mb-4">
                <thead>
                    <tr className="text-left text-gray-500 bg-gray-100">
                    <th className="py-2 pl-3">Item</th>
                    <th className="py-2 pl-3">Qty</th>
                    <th className="py-2 pl-3">Price</th>
                    <th className="py-2 pl-3">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td colSpan="4">
                        <div className="text-center text-gray-400 py-10">
                        No items in cart
                        </div>
                    </td>
                    </tr>
                </tbody>
                </table>

                {/* Summary Section */}
                <div className="space-y-1 text-sm text-gray-700">
                <div className="flex justify-between">
                    <span>Sub Total :</span>
                    <span>฿0.00</span>
                </div>
                <div className="flex justify-between">
                    <span>Product Discount :</span>
                    <span>฿0.00</span>
                </div>
                <div className="flex justify-between">
                    <span>Extra Discount :</span>
                    <div className="flex items-center gap-2">
                        <FaPen/>
                        <span>฿0.00</span>
                    </div>  
                </div>
                <div className="flex justify-between">
                    <span>Coupon Discount :</span>
                    <div className="flex items-center gap-2">
                        <FaPen/>
                        <span>฿0.00</span>
                    </div>      
                </div>
                <div className="flex justify-between">
                    <span>Tax :</span>
                    <span>฿0.00</span>
                </div>
                <div className="flex justify-between font-bold border-t">
                    <span>Total :</span>
                    <span>฿0.00</span>
                </div>
                </div>

                {/* Payment Section */}
                <div className="mt-4 pt-4">
                <div className="mb-2">
                    <p className="font-medium mb-1">Paid By:</p>
                    <div className="flex gap-2">
                    <button className="bg-black text-white px-4 py-2 rounded">Cash</button>
                    <button className="bg-gray-200 text-black px-4 py-2 rounded">Card</button>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <label className="w-28 col-span-2">Paid Amount :</label>
                    <input type="number" className="border border-gray-300 bg-white-100 p-2 w-full rounded text-right" defaultValue={0} />
                </div>

                <div className="flex justify-between mt-2 font-medium">
                    <span>Change Amount :</span>
                    <span>฿0.00</span>
                </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex justify-between gap-2">
                <button className="bg-red-600 text-white px-6 py-3 rounded w-1/2">Cancel Order</button>
                <button className="bg-blue-700 text-white px-6 py-3 rounded w-1/2">Place Order</button>
                </div>
            </div>
        </div>
    )
}