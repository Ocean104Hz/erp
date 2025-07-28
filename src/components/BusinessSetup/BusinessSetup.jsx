import { useState } from "react";
import { Link } from "react-router-dom";

export default function BusinessSetup() {
  const [indexOption, setIndexOption] = useState(false);
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaImage, setMetaImage] = useState(null);

  return (
    <div className="w-full ">
      <div className="flex items-center p-2 mt-6 gap-2">
        <h1 className="text-2xl font-bold">Business Setup</h1>
      </div>
      <div className="flex space-x-4">
        <Link
          to="/BusinessSetup/BusinessSetup"
          className="px-4 py-2 rounded-full bg-blue-700 text-white font-semibold"
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
          className="px-4 px-4 py-2 rounded-full text-gray-600 font-semibold"
        >
          Invoice
        </Link>
      </div>

      {/* Maintenance Mode Section */}
      <div className="p-4 mt-5 shadow-md rounded-md bg-white">
        <div className="flex justify-between items-center py-4 ">
          <div>
            <h2 className="text-xl font-semibold">Maintenance Mode</h2>
            <label className="flex items-center cursor-pointer">
              <span className="mr-2 text-sm text-gray-600">
                Turn on the maintenance mode will temporarily deactivate your
                selected systems as of your chosen date and time.
              </span>
            </label>
          </div>

          {/* Toggle Maintenance Mode */}
          <div className="flex gap-32 items-center p-4 space-x-2 bg-white">
            <span className="text-sm font-medium text-gray-900">
              Maintenance Mode
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={indexOption}
                onChange={() => setIndexOption(!indexOption)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-500 transition-all duration-200"></div>
              <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-200 peer-checked:translate-x-full"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Basic Information Section */}
      <div className="p-4 mt-5 shadow-md bg-white">
        <div className="mb-4 pb-2 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Basic Information</h2>
          <p className="text-sm text-gray-600">
            Here you setup your all business information.
          </p>
        </div>

        {/* Form and Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form - spans 2/3 */}
          <div className="lg:col-span-2 space-y-4">
            {/* Company Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Type your company name"
                  className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value="Copy@6amtech.com"
                  className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Phone & Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="Ex: 012XXXXXX"
                  maxLength={10}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <input
                  type="text"
                  value="Bangladesh"
                  className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Time Zone & Pagination */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Time Zone
                </label>
                <select className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm text-gray-500 focus:ring-blue-500 focus:border-blue-500">
                  <option>Select from dropdown</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Pagination
                </label>
                <input
                  type="number"
                  value="10"
                  className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <textarea
                placeholder="Ex : House#38  Road#04  Demo City"
                className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                rows={1}
              />
            </div>

            {/* Hint for Address */}
            <div className="bg-blue-50 border border-blue-200 text-black text-sm rounded-md px-4 py-3">
              💡 For the address setup you can simply drag the map to pick the
              perfect <strong>Lat(Latitude)</strong> &{" "}
              <strong>Long(Longitude)</strong> Value.
            </div>
          </div>

          {/* Map - spans 1/3 */}
          <div className="w-full h-full">
            <div className="w-full h-full min-h-[360px] rounded-md overflow-hidden">
              <iframe
                title="Google Map"
                src="https://maps.google.com/maps?q=-33.8688,151.2195&z=15&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* General Setup Section */}
      <div className="p-4 mt-5 shadow-md rounded-md bg-white">
        <div className="mb-4 pb-2 border-b border-gray-200">
          <h2 className="text-xl font-semibold">General Setup</h2>
          <p className="text-sm text-gray-600">
            Manage your business criteria here.
          </p>
        </div>

        {/* Currency Setup Block */}
        <div className="bg-white rounded-md p-4">
          <div className="mb-4 pb-2 border-b border-gray-100">
            <h3 className="text-md font-semibold">Currency Setup</h3>
            <p className="text-sm text-gray-600">
              Set your business currency here.
            </p>
          </div>

          {/* Warning Message */}
          <div className="bg-red-100 text-black text-sm rounded-md px-4 py-3 mb-5 border border-red-200">
            ⚠️ No payment gateway supported for USD currency. Select at least
            one gateway.
          </div>

          {/* Currency Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Select Currency
              </label>
              <select className="block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500">
                <option>USD</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Currency Position
              </label>
              <div className="flex items-center space-x-4 border rounded-md px-3 py-2">
                <label className="flex items-center space-x-1">
                  <input type="radio" name="position" defaultChecked />
                  <span>($) Left</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="radio" name="position" />
                  <span>($) Right</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Decimal Digits
              </label>
              <input
                type="number"
                value="2"
                className="block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                readOnly
              />
            </div>
          </div>

          {/* Info Message */}
          <div className="bg-blue-50 text-black text-sm rounded-md px-4 py-3 border border-blue-100">
            💡 Set your default and multiple currencies from{" "}
            <a href="#" className="text-blue-600 underline hover:text-blue-800">
              Currency Setup
            </a>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end space-x-3 mt-6">
        <button
          type="reset"
          className="px-6 py-2 border rounded bg-gray-100 text-black-600 hover:bg-gray-200"
        >
          Reset
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save Information
        </button>
      </div>
    </div>
  );
}
