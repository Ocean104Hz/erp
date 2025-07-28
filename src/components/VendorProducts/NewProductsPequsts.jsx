import { FolderOpen } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import Default from "../../../public/default.png";
import Export from "../../../public/excel.png";

export default function NewProductsPequsts() {
  const orders = [];
  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <FolderOpen />
        <h1 className="text-xl font-bold">Vendor Product List</h1>
        <label className="text-white-500 bg-gray-300 px-2 rounded-full font-bold">
          0
        </label>
      </div>
      <div className="shadow-xl inset-shadow-sm p-4 mb-4 bg-white rounded-md">
        <h2 className="text-lg font-semibold mb-2">Filter Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Brand</label>
            <select className="border border-gray-300 rounded-md p-2 w-full col-span-2 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out">
              <option className="bg-white text-gray-900 hover:bg-gray-100">
                walking-customer-261
              </option>
              <option className="bg-white text-gray-900 hover:bg-gray-100">
                walking-customer-262
              </option>
              <option className="bg-white text-gray-900 hover:bg-gray-100">
                walking-customer-263
              </option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Category </label>
            <select className="border border-gray-300 rounded-md p-2 w-full col-span-2 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out">
              <option className="bg-white text-gray-900 hover:bg-gray-100">
                walking-customer-261
              </option>
              <option className="bg-white text-gray-900 hover:bg-gray-100">
                walking-customer-262
              </option>
              <option className="bg-white text-gray-900 hover:bg-gray-100">
                walking-customer-263
              </option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Sub Category
            </label>
            <select className="border border-gray-300 rounded-md p-2 w-full col-span-2 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out">
              <option className="bg-white text-gray-900 hover:bg-gray-100">
                walking-customer-261
              </option>
              <option className="bg-white text-gray-900 hover:bg-gray-100">
                walking-customer-262
              </option>
              <option className="bg-white text-gray-900 hover:bg-gray-100">
                walking-customer-263
              </option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Sub Sub Category
            </label>
            <select className="border border-gray-300 rounded-md p-2 w-full col-span-2 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out">
              <option className="bg-white text-gray-900 hover:bg-gray-100">
                walking-customer-261
              </option>
              <option className="bg-white text-gray-900 hover:bg-gray-100">
                walking-customer-262
              </option>
              <option className="bg-white text-gray-900 hover:bg-gray-100">
                walking-customer-263
              </option>
            </select>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
            Reset
          </button>
          <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Show data
          </button>
        </div>
      </div>
      {/* ORDER LIST */}
      <div className="shadow-xl inset-shadow-sm p-4 bg-white rounded-md">
        <div className=" items-center gap-2 mb-4">
          <div className="grid grid-cols-4 items-center mb-4">
            <div className="relative mb-4 mt-4">
              <input
                type="text"
                placeholder="Search menu"
                className="w-full p-2 pl-10 rounded-md bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none"
              />
              <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 text-sm" />
            </div>
            <div></div>
            <div></div>
            <div className="flex justify-end gap-2">
              <button className="flex gap-3 text-blue-700 bg-green-200 px-4 py-2 rounded text-sm hover:bg-green-500 cursor-pointer font-bold">
                <img src={Export} className="w-6" />
                Export
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto ">
          <table className="mb-4 min-w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-4 font-semibold text-black">
                  SL
                </th>
                <th className="px-4 py-2 font-semibold text-black">
                  Product Name
                </th>
                <th className="px-4 py-2 font-semibold text-black">Product Type</th>
                <th className="px-4 py-2 font-semibold text-black">Unit price</th>
                <th className="px-4 py-2 font-semibold text-black">
                  Show as featured
                </th>
                <th className="px-4 py-2 font-semibold text-black">Active status</th>
                <th className="px-4 py-2 font-semibold text-black">Action</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>

        <div className="flex flex-col justify-center items-center p-2 mt-6 gap-2">
          {/* <MdRunningWithErrors className="mt-20 text-9xl text-black-500" /> */}
          <img src={Default} alt="" />
          <p className="mb-10 text-sm text-gray-500 mt-2">No category found</p>
        </div>
      </div>
    </div>
  );
}
