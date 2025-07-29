import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Manage() {
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
          className="px-4 py-2 rounded-full text-gray-600 font-semibold"
        >
          Manage Inhouse Offer
        </Link>
        <Link
          to="/OffersDeals/Manage"
          className="px-4 py-2 rounded-full bg-blue-700 text-white font-semibold"
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
              Show Clearance Offer in Home Page
            </h2>
            <p className="text-sm text-gray-600">
              You can highlight all clearance offer products in home page to
              increase customer reach
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer justify-between border border-gray-300 rounded-md p-2 w-80">
            <p>Show Offer in home page</p>
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
        <h2 className="text-xl font-semibold mb-4">Add Vendor</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <p className="text-sm text-gray-600 border-b border-gray-300 pb-3 col-span-2">
            Alongside with your in-house product , you can highlight vendor’s
            product who has activate their clearance offer.
          </p>

          <div className="relative mb-4 mt-4 border border-gray-300 rounded-md justify-between col-span-2">
            <input
              type="text"
              placeholder="Search menu"
              className="w-full p-2 pl-10 rounded-md bg-white placeholder-gray-500 text-gray-900 focus:outline-none"
            />
            <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 text-sm" />
          </div>
        </div>
      </div>

      {/* Product List Section */}
      <div className="p-6 bg-white shadow-md rounded-md mt-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Vendor List</h1>
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
