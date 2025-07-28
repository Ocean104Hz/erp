import { Link } from "react-router-dom";
export default function Products() {
  return (
    <>
      <div className="flex items-center p-2 mt-6 gap-2">
        <h1 className="text-2xl font-bold">Business Setup</h1>
      </div>

      <div className="flex space-x-4 ">
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
          className="px-4 py-2 rounded-full bg-blue-700 text-white font-semibold"
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
      <div className="p-6 mt-5 bg-white rounded-lg shadow-md">
        {/* Title Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">General Setup</h2>
          <p className="text-sm text-gray-600 mt-1">
            Manage digital products and brands visibility preferences for the
            shops
          </p>
        </div>

        {/* Settings Section with 2 Columns */}
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-md p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sell Digital Product */}
            <div className="bg-white p-4 rounded-md shadow-sm border">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <label className="text-sm font-semibold text-gray-800">
                    Sell Digital Product
                  </label>
                  <p className="text-xs text-gray-600 mt-1">
                    If this option is enabled vendors can sell digital products
                    (such as software, ebooks, activation keys, jpg, png etc.)
                    in their shops.
                  </p>
                </div>

                {/* Toggle Switch */}
                <label className="relative inline-flex items-center cursor-pointer ml-4">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-500 transition-all duration-200"></div>
                  <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-200 peer-checked:translate-x-full"></div>
                </label>
              </div>

              <div className="text-xs bg-blue-50 p-4 rounded-md text-black mt-4 w-full">
                <span className="font-medium">💡</span> To add new digital
                product for your shop visit{" "}
                <a
                  href="#"
                  className="text-blue-600 underline font-semibold hover:text-blue-800"
                >
                  Add New Product
                </a>{" "}
                Page.
              </div>
            </div>

            {/* Show Brand */}
            <div className="bg-white p-4 rounded-md shadow-sm border">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <label className="text-sm font-semibold text-gray-800">
                    Show brand
                  </label>
                  <p className="text-xs text-gray-600 mt-1">
                    If enabled customers can see brands and they can browse and
                    search for products from each brand inside any shop.
                  </p>
                </div>

                {/* Toggle Switch */}
                <label className="relative inline-flex items-center cursor-pointer ml-4">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-500 transition-all duration-200"></div>
                  <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-200 peer-checked:translate-x-full"></div>
                </label>
              </div>

              <div className="text-xs bg-blue-50 p-4 rounded-md text-black mt-4 w-full">
                <span className="font-medium">💡</span> You can manage all
                brands from this page{" "}
                <a
                  href="#"
                  className="text-blue-600 underline font-semibold hover:text-blue-800"
                >
                  Brand List
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-6 bg-white rounded-lg shadow-md">
        {/* Title */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Need Product Approval</h2>
          <p className="text-sm text-gray-600 mt-1">
            Choose in which cases need approval for the vendor products
          </p>
        </div>

        {/* Content */}
        <div className="bg-gray-50 rounded-md p-4 space-y-6">
          <div className="bg-white p-4 rounded-md shadow-sm border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* New Product */}
              <label className="flex items-start space-x-3 cursor-pointer">
                <input type="checkbox" className="mt-1" />
                <div className="flex-1">
                  <span className="font-semibold text-gray-800">
                    New Product
                  </span>
                  <p className="text-xs text-gray-600 mt-1">
                    If you checked <b>New Product</b>, Vendors need admin
                    approval to add new product to their shop.
                  </p>
                  <div className="mt-3 bg-blue-50 text-black text-xs p-3 rounded-md flex items-center gap-2 w-full">
                    <span className="font-semibold">💡</span>
                    <span>
                      You can see all the request from{" "}
                      <a
                        href="#"
                        className="text-blue-600 underline font-semibold hover:text-blue-800"
                      >
                        New products request
                      </a>{" "}
                      Page
                    </span>
                  </div>
                </div>
              </label>

              {/* Update Product Wise Shipping Cost */}
              <label className="flex items-start space-x-3 cursor-pointer">
                <input type="checkbox" className="mt-1" />
                <div className="flex-1">
                  <span className="font-semibold text-gray-800 flex items-center gap-1">
                    Update Product Wise Shipping Cost{" "}
                    <span title="Warning">⚠️</span>
                  </span>
                  <p className="text-xs text-gray-600 mt-1">
                    Vendors need approval from the admin before their updated
                    shipping cost is applied.
                  </p>
                  <div className="mt-3 bg-blue-50 text-black text-xs p-3 rounded-md flex items-center gap-2 w-full">
                    <span className="font-semibold">💡</span>
                    <span>
                      Shipping cost updates require admin approval before going
                      live
                    </span>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Re-order Level</h2>
          <p className="text-sm text-gray-600 mt-1">
            Choose in which cases need approval for the vendor products
          </p>
        </div>

        {/* Form Area */}
        <div className="bg-gray-50 p-4 rounded-md flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          {/* Left Column */}
          <div className="md:w-1/2">
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Re-order Level Amount
            </label>
            <p className="text-sm text-gray-600 leading-relaxed">
              Set the stock limit for the reorder level vendors can see all
              products that need to be restocked in a section when they reach
              this re-order level
            </p>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 md:pl-4">
            <input
              type="number"
              defaultValue={10}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">
              Set the stock limit for the reorder level..
            </p>
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
