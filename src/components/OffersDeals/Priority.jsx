import { useState } from "react";
import { Link } from "react-router-dom";

export default function Priority() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    useDefaultSorting: true,
    useCustomSorting: false,
    sortOption: "latestCreated", // Default sorting option
    stockOutOption: "removeStockOut",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic
  };

  return (
    <div className="p-6">
      {/* Main section for clearance setup */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Flash Deals</h1>
      </div>
      <div className="flex space-x-4 mb-6">
        <Link
          to="/OffersDeals/Clearance"
          className="px-4 py-2 rounded-full text-gray-600 font-semibold"
        >
          Manage Inhouse Offer
        </Link>
        <Link
          to="/OffersDeals/Manage"
          className="px-4 py-2 rounded-full text-gray-600 font-semibold"
        >
          Manage Vendor Offer
        </Link>
        <Link
          to="/OffersDeals/Priority"
          className="px-4 py-2 rounded-full bg-blue-700 text-white font-semibold"
        >
          Priority setup
        </Link>
      </div>

      {/* Active clearance sale toggle */}
      <div className="mb-6">
        <div className="p-6 bg-white rounded-md shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Description */}
            <div>
              <h2 className="text-lg font-semibold mb-2">
                Stock Clearance Product
              </h2>
              <p className="text-gray-600">
                Stock clearance products are items specifically selected and
                listed to be sold at discounted prices to customers.
              </p>
            </div>

            {/* Sorting Options */}
            <div className="border border-gray-200 rounded-md p-4">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-semibold">Use Default Sorting List</h3>
                  <p className="text-sm text-gray-500">
                    Currently sorting this section based on latest add
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="useDefaultSorting"
                    checked={formData.useDefaultSorting}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full peer relative after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
                </label>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-semibold">Use Custom Sorting List</h3>
                  <p className="text-sm text-gray-500">
                    You can sorting this section by others way
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="useCustomSorting"
                    checked={formData.useCustomSorting}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full peer relative after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
                </label>
              </div>

              {/* Custom Sorting Options */}
              {formData.useCustomSorting && (
                <div className="mt-4">
                  <h3 className="text-md font-semibold mb-2">Sort by</h3>
                  <div className="space-y-4">
                    <label className="flex items-center gap-4">
                      <input
                        type="radio"
                        name="sortOption"
                        value="latestCreated"
                        checked={formData.sortOption === "latestCreated"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span>Sort by latest created</span>
                    </label>
                    <label className="flex items-center gap-4">
                      <input
                        type="radio"
                        name="sortOption"
                        value="clearanceExpiration"
                        checked={formData.sortOption === "clearanceExpiration"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span>Based on the clearance expiration date</span>
                    </label>
                    <label className="flex items-center gap-4">
                      <input
                        type="radio"
                        name="sortOption"
                        value="mostOrder"
                        checked={formData.sortOption === "mostOrder"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span>Sort by most order</span>
                    </label>
                    <label className="flex items-center gap-4">
                      <input
                        type="radio"
                        name="sortOption"
                        value="reviewCount"
                        checked={formData.sortOption === "reviewCount"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span>Sort by review count</span>
                    </label>
                    <label className="flex items-center gap-4">
                      <input
                        type="radio"
                        name="sortOption"
                        value="averageRatings"
                        checked={formData.sortOption === "averageRatings"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span>Sort by average ratings</span>
                    </label>
                    <label className="flex items-center gap-4">
                      <input
                        type="radio"
                        name="sortOption"
                        value="alphabeticalAZ"
                        checked={formData.sortOption === "alphabeticalAZ"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span>Sort by Alphabetical (A to Z)</span>
                    </label>
                    <label className="flex items-center gap-4">
                      <input
                        type="radio"
                        name="sortOption"
                        value="alphabeticalZA"
                        checked={formData.sortOption === "alphabeticalZA"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span>Sort by Alphabetical (Z to A)</span>
                    </label>
                  </div>
                </div>
              )}

              {/* Stock Option */}
              <div className="mt-6">
                <h3 className="text-md font-semibold mb-2">Stock out products</h3>
                <div className="space-y-4">
                  <label className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="stockOutOption"
                      value="showStockOut"
                      checked={formData.stockOutOption === "showStockOut"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span>Show stock out products in the last</span>
                  </label>
                  <label className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="stockOutOption"
                      value="removeStockOut"
                      checked={formData.stockOutOption === "removeStockOut"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span>Remove stock out products from the list</span>
                  </label>
                  <label className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="stockOutOption"
                      value="none"
                      checked={formData.stockOutOption === "none"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span>None</span>
                  </label>
                </div>
              </div>

              {/* Save Button */}
              <div className="text-right mt-6">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-md">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
