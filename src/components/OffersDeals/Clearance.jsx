import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";

export default function Clearance() {
  const [products, setProducts] = useState([]);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    image: null,
  });

  const handleAddProduct = () => {
    setShowAddProductModal(true);
  };

  const handleAddProductsToList = (selectedProduct) => {
    setProducts([...products, selectedProduct]);
    setShowAddProductModal(false); // Close the modal after adding product
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFormData((prev) => ({
        ...prev,
        image: URL.createObjectURL(acceptedFiles[0]),
      }));
    },
  });

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
          className="px-4 py-2 rounded-full bg-blue-700 text-white font-semibold"
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
          className="px-4 py-2 rounded-full text-gray-600 font-semibold"
        >
          Priority setup
        </Link>
      </div>

      {/* Active clearance sale toggle */}
      <div className="mb-6">
        <div className="bg-white p-4 rounded-md flex justify-between items-center">
          <div>
            <h2 className="font-semibold text-lg">
              Active clearance sale offer?
            </h2>
            <p className="text-sm text-gray-600">
              Show your offer in the store details page in customer website and
              apps
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer justify-between border border-gray-300 rounded-md p-2 w-80">
            <p>Active Offer</p>
            <input
              type="checkbox"
              defaultChecked={true}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 relative after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
          </label>
        </div>
      </div>

      {/* Offer Logic Setup */}
      <div className="bg-white shadow-md rounded-md p-6">
        <h2 className="text-xl font-semibold mb-4">Setup Offer Logics</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Duration */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Duration
            </label>
            <input
              type="text"
              value="07/29/2025 12:00:00 AM - 07/29/2025 11:59:59 PM"
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
            />
          </div>

          {/* Discount Amount */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Discount Amount (%)
            </label>
            <input
              type="number"
              value="0"
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
            />
          </div>

          {/* Discount Type */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Discount Type
            </label>
            <div className="flex items-center gap-4 w-full p-2 border border-gray-300 rounded-md mt-1">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="discount_type"
                  checked
                  className="mr-2"
                />
                <span>Flat Discount</span>
              </label>
              <label className="flex items-center pl-50">
                <input type="radio" name="discount_type" className="mr-2" />
                <span>Product wise discount</span>
              </label>
            </div>
          </div>

          {/* Offer Active Time */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Offer Active Time
            </label>
            <div className="flex items-center gap-4 w-full p-2 border border-gray-300 rounded-md mt-1">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="offer_active_time"
                  checked
                  className="mr-2"
                />
                <span>Always</span>
              </label>
              <label className="flex items-center pl-50">
                <input type="radio" name="offer_active_time" className="mr-2" />
                <span>Specific time in a day</span>
              </label>
            </div>
          </div>

          {/* Also show in home page */}
          <div className="flex items-center gap-4 w-full p-2 border border-gray-300 rounded-md mt-1 justify-between">
            <span className="text-sm">Also show in home page</span>
            <input type="checkbox" className="form-checkbox" />
          </div>

          <div className="justify-end content-end text-end gap-4">
            <button
              type="reset"
              className="py-2 px-4 bg-gray-300 text-black rounded-md"
            >
              Reset
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-blue-600 text-white rounded-md ml-3"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Product List Section */}
      <div className="p-6 bg-white shadow-md rounded-md mt-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Product List</h1>
          <button
            onClick={handleAddProduct}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            + Add Product
          </button>
        </div>

        {/* Empty State */}
        <div className="flex justify-center items-center p-6 border border-dashed border-gray-300 rounded-md">
          <div className="text-center text-gray-600">
            <div className="text-3xl mb-4">
              <i className="fas fa-plus-circle"></i>
            </div>
            <p className="mb-4">
              Add product show in the clearance offer section in customer app
              and website
            </p>
            <button
              onClick={handleAddProduct}
              className="text-blue-600 hover:underline"
            >
              + Add Product
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Adding Products */}
      {showAddProductModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500/30">
          <div className="bg-white rounded-md p-6 w-1/3">
            <h2 className="text-xl font-semibold mb-4">Add Product</h2>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Products</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md mt-1"
                placeholder="Search Products"
              />
            </div>
            <div className="h-40 mb-4 border-2 border-gray-300 border-dashed rounded-md flex justify-center items-center">
              <span className="text-gray-400">
                Search & Add product from the list
              </span>
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => setShowAddProductModal(false)}
                className="py-2 px-4 bg-gray-300 text-black rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleAddProductsToList}
                className="py-2 px-4 bg-blue-600 text-white rounded-md"
              >
                Add Products
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
