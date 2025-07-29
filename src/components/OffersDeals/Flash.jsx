import { useState } from "react";
import { useDropzone } from "react-dropzone";

import { FolderOpen } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import Default from "../../../public/default.png";
import Export from "../../../public/excel.png";

export default function Flash() {
  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    image: null,
  });

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
    <div className="w-full p-6">
      <h1 className="text-2xl font-bold mb-4">Flash deals</h1>
      <form onSubmit={handleSubmit}>
        {/* Form Layout using Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white shadow-md rounded-md p-6">
          <div>
            {/* Title */}
            <div className="mb-4">
              <label className="block text-sm font-semibold">Title (EN)</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md mt-1"
                placeholder="Ex: LUX"
              />
            </div>

            {/* Start Date */}
            <div className="mb-4">
              <label className="block text-sm font-semibold">Start date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md mt-1"
              />
            </div>

            {/* End Date */}
            <div className="mb-4">
              <label className="block text-sm font-semibold">End date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md mt-1"
              />
            </div>
          </div>

          {/* Image Upload */}
          <div className="mb-4 col-span-1">
            <label className="block text-sm font-semibold">
              Upload image (Ratio 5:1)
            </label>
            <div
              {...getRootProps()}
              className="w-full h-53 border-2 border-dashed border-gray-300 rounded-md flex justify-center items-center text-center"
            >
              {formData.image ? (
                <img
                  src={formData.image}
                  alt="Uploaded"
                  className="w-50 h-50 object-cover rounded-md"
                />
              ) : (
                <div className="text-gray-400 flex flex-col justify-center items-center">
                  <span className="text-blue-600 text-lg">Click to upload</span>
                  <span className="text-sm">Or drag and drop</span>
                </div>
              )}
              <input {...getInputProps()} className="sr-only" />
            </div>
          </div>
          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-4 col-span-2">
            <button
              type="reset"
              className="py-2 px-4 bg-gray-300 text-black rounded-md"
            >
              Reset
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-blue-600 text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      {/* ORDER LIST */}
      <div className="shadow-xl inset-shadow-sm p-4 bg-white rounded-md mt-4">
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
                <th className="px-4 py-2 font-semibold text-black">
                  Product Type
                </th>
                <th className="px-4 py-2 font-semibold text-black">
                  Unit price
                </th>
                <th className="px-4 py-2 font-semibold text-black">
                  Show as featured
                </th>
                <th className="px-4 py-2 font-semibold text-black">
                  Active status
                </th>
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
