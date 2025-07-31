import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Pos() {
  const products = [
    {
      id: 1,
      name: "Microwave",
      price: 1498.0,
      image: "/D1.jpg",
    },
    {
      id: 2,
      name: "Lipstick for Unisex",
      price: 382.2,
      image: "/D2.jpg",
    },
  ];

  const selectedCustomer = {
    name: "asd assdf",
    contact: "+660821235123",
  };

  const cartItems = [
    {
      id: 2,
      name: "Lipstick for Unisex",
      qty: 1,
      price: 382.2,
      image: "/D2.jpg",
      variant: "Thistle",
    },
  ];

  const productDiscount = 7.8;
  const tax = 0;
  const subTotal = 390.0;
  const extraDiscount = 0;
  const couponDiscount = 0;
  const total = subTotal - productDiscount - extraDiscount - couponDiscount + tax;

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

        <div className="grid grid-cols-4 gap-4">
          {products.map(product => (
            <div key={product.id} className="flex flex-col items-center border border-gray-200 rounded p-4">
              <img src={product.image} alt={product.name} className="w-24 h-24 object-contain" />
              <p className="mt-2 text-gray-500">{product.name}</p>
              <p className="text-blue-600 font-semibold">${product.price.toFixed(1)}</p>
            </div>
          ))}
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
          <select className="border border-gray-300 rounded-md p-2 w-full col-span-2">
            <option>{selectedCustomer.name} ({selectedCustomer.contact})</option>
          </select>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm">Add New Customer</button>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-4">
          <select className="border border-gray-300 rounded-md p-2 col-span-2">
            <option>saved-customer-5</option>
          </select>
          <button className="bg-gray-200 px-4 py-2 rounded text-sm hover:bg-gray-300">Clear Cart</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">New Order</button>
        </div>

        {/* Table */}
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
            {cartItems.map(item => (
              <tr key={item.id}>
                <td className="flex items-center gap-2 py-2 pl-3">
                  <img src={item.image} className="w-8 h-8" />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.variant}</p>
                  </div>
                </td>
                <td>
                  <input type="number" value={item.qty} className="border w-12 text-center rounded" readOnly />
                </td>
                <td>${item.price.toFixed(1)}</td>
                <td>
                  <button className="text-red-600"><MdDelete size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Summary */}
        <div className="space-y-1 text-sm text-gray-700">
          <div className="flex justify-between"><span>Sub Total :</span><span>${subTotal.toFixed(1)}</span></div>
          <div className="flex justify-between"><span>Product Discount :</span><span>${productDiscount.toFixed(1)}</span></div>
          <div className="flex justify-between"><span>Extra Discount :</span><div className="flex items-center gap-2"><FaPen/><span>${extraDiscount.toFixed(1)}</span></div></div>
          <div className="flex justify-between"><span>Coupon Discount :</span><div className="flex items-center gap-2"><FaPen/><span>${couponDiscount.toFixed(1)}</span></div></div>
          <div className="flex justify-between"><span>Tax :</span><span>${tax.toFixed(1)}</span></div>
          <div className="flex justify-between font-bold border-t pt-1"><span>Total :</span><span>${total.toFixed(1)}</span></div>
        </div>

        {/* Payment */}
        <div className="mt-4 pt-4">
          <div className="mb-2">
            <p className="font-medium mb-1">Paid By:</p>
            <div className="flex gap-2">
              <button className="bg-black text-white px-4 py-2 rounded">Cash</button>
              <button className="bg-gray-200 text-black px-4 py-2 rounded">Card</button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-2">
            <label className="col-span-2">Paid Amount :</label>
            <input type="number" className="border p-2 rounded text-right" defaultValue={0} />
          </div>
          <div className="flex justify-between font-medium">
            <span>Change Amount :</span>
            <span>$0.00</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-between gap-2">
          <button className="bg-red-600 text-white px-6 py-3 rounded w-1/2">Cancel Order</button>
          <button className="bg-blue-700 text-white px-6 py-3 rounded w-1/2">Place Order</button>
        </div>
      </div>
    </div>
  );
}
