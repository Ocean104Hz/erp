import { useState } from "react";
import { Link } from "react-router-dom";

export default function ShopSetting() {
  const [status, setStatus] = useState(false);

  const handleStatusChange = () => {
    setStatus(!status);
  };

  const handleGoToVacationMode = () => {
    alert("Going to vacation mode...");
  };

  const handleEditInformation = () => {
    alert("Editing information...");
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">In-house Shop</h1>
      <div className="flex space-x-4 mb-6 text-center">
        <Link
          to="/InhouseShop/ShopSetting"
          className="bg-blue-900 text-white rounded-full py-2 px-3 font-semibold hover:bg-blue-800"
        >
          Shop Settings
        </Link>
        <Link
          to="/InhouseShop/Others"
          className="font-semibold py-2 px-3 hover:text-blue-800"
        >
          Others
        </Link>
      </div>

      {/* Shop Settings */}
      <div className="bg-white p-6 rounded shadow space-y-6 grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <h2 className="text-lg font-semibold">Temporary Close</h2>
          <p className="text-sm text-gray-600">
            Turning on the status will deactivate your shop and will show
            temporary off in the customer app and websites.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <label htmlFor="status" className="text-sm mr-2">
            Status
          </label>
          <input
            type="checkbox"
            id="status"
            checked={status}
            onChange={handleStatusChange}
            className="h-5 w-5 text-blue-600"
          />
        </div>
      </div>

      {/* Shop Details */}
      <div className="bg-white p-6 rounded shadow space-y-4 relative">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <h2 className="text-lg font-semibold">Shop details</h2>
            <p className="text-sm text-gray-600">Created at 25 Jul, 2025</p>
          </div>
          <div className="flex flex-col items-end">
            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <button
                onClick={handleGoToVacationMode}
                className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700"
              >
                Go to Vacation Mode
              </button>
              <button
                onClick={handleEditInformation}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Edit Information
              </button>
            </div>
          </div>
        </div>

        <div className="bg-blue-100 p-4 rounded mt-4 relative z-10">
          <div className="flex items-center gap-4">
            <img
              src="https://via.placeholder.com/50"
              alt="Shop"
              className="w-12 h-12 rounded"
            />
            <div>
              <h3 className="font-bold">Shop</h3>
              <p className="text-sm">Created at 25 Jul, 2025</p>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Your shop is now on live status. All functions are working properly.
            To turn vacation mode click go vacation mode button.
          </p>
        </div>

        {/* Visit Website Button */}
        <div className="flex justify-center mt-6">
          <button
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            onClick={() => window.open("https://example.com", "_blank")}
          >
            Visit website
          </button>
        </div>
      </div>
    </div>
  );
}
