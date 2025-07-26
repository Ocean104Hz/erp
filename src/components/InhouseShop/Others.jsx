import { useState } from "react";
import { Link } from "react-router-dom";

export default function Orders() {
  const [minOrderAmount, setMinOrderAmount] = useState(0);
  const [freeDeliveryAmount, setFreeDeliveryAmount] = useState(0);

  const handleSave = () => {
    alert("Order setup saved successfully!");
  };

  const handleReset = () => {
    setMinOrderAmount(0);
    setFreeDeliveryAmount(0);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">In-house Shop</h1>
      <div className="flex space-x-4 mb-6 text-center">
        <Link
          to="/InhouseShop/ShopSetting"
          className="font-semibold py-2 px-3 hover:text-blue-800"
        >
          Shop Settings
        </Link>
        <Link
          to="/InhouseShop/Others"
          className="bg-blue-900 text-white rounded-full py-2 px-3 font-semibold hover:bg-blue-800"
        >
          Others
        </Link>
      </div>
      <div className="bg-white p-6 rounded shadow space-y-6">
        <h2 className="text-lg font-semibold">Order Setup</h2>
        <p className="text-sm text-gray-600">
          Here you set up order amount and conditions for your customer.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-4 rounded">
          {/* Minimum Order Amount */}
          <div className="flex flex-col">
            <label htmlFor="min-order" className="text-sm font-bold">
              Minimum order amount ($)
            </label>
            <input
              type="number"
              id="min-order"
              value={minOrderAmount}
              onChange={(e) => setMinOrderAmount(e.target.value)}
              className="mt-2 px-4 py-2 rounded border border-gray-300"
            />
          </div>

          {/* Free Delivery Over Amount */}
          <div className="flex flex-col">
            <label htmlFor="free-delivery" className="text-sm font-bold">
              Free Delivery Over Amount ($)
            </label>
            <input
              type="number"
              id="free-delivery"
              value={freeDeliveryAmount}
              onChange={(e) => setFreeDeliveryAmount(e.target.value)}
              className="mt-2 px-4 py-2 rounded border border-gray-300"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={handleReset}
            className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700"
          >
            Reset
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Save Information
          </button>
        </div>
      </div>
    </div>
  );
}
