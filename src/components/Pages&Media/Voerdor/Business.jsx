import { useState } from "react";
import { Link } from "react-router-dom";

export default function Business() {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [headerImage, setHeaderImage] = useState(null);

  const handleImageUpload = (e) => {
    setHeaderImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <h1 className="text-2xl font-bold flex items-center gap-2">
        Business Process
      </h1>
      <div className="flex items-center gap-12 mb-4">
        <Link
          to="/Pages&Media/Voerdor/Header"
        >
          Herder
        </Link>
        <Link to="/Pages&Media/Voerdor/WhySell">Why Sell With Us</Link>
        <Link to="/Pages&Media/Voerdor/Business" className="bg-blue-500 px-4 py-2 rounded-full text-white">Business Process</Link>
        <Link to="/Pages&Media/Voerdor/DownloadApp" >Download App</Link>
        <Link to="/Pages&Media/Voerdor/FAQ">FAQ</Link>
      </div>
      <div className="bg-white p-6 rounded shadow ">
        <h1 className="text-lg font-semibold">Business process</h1>
        <p>
          Here you can show vendors how your business are working to attract
          them sell in your system.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-4 rounded">
          <div>
            <label className="block text-sm font-medium mb-1">Title (EN)</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength="50"
              placeholder="Vendor Registration"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Sub Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength="50"
              placeholder="Vendor Registration"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </div>
      {/* Form Section */}
      <div className="bg-white p-6 rounded shadow space-y-6">
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg font-semibold">Section 1</h1>
            </div>
            <div className="flex items-center space-x-2">
              <h1 className="text-lg font-semibold">Status</h1>
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                checked={true} // Assuming the status is always on for this example
                onChange={() => {}}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Title */}
          <div className="col-span-2">
            <div className="">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Section title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  maxLength="50"
                  placeholder="Vendor Registration"
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <p className="text-right text-xs text-gray-400">
                  {title.length}/50
                </p>
              </div>

              {/* Subtitle */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Sub title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={subTitle}
                  onChange={(e) => setSubTitle(e.target.value)}
                  maxLength="50"
                  placeholder="Create Your Own Store. Already Have Store?"
                  className="w-full h-15 border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <p className="text-right text-xs text-gray-400">
                  {subTitle.length}/50
                </p>
              </div>
              <div></div>
            </div>
          </div>
          {/* Header Image */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Header Image
            </label>
            <div className="flex items-center justify-center border border-dashed rounded py-6 bg-gray-50">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer text-blue-600"
              >
                <span>Click to upload</span>
                <br />
                <span>Or drag and drop</span>
              </label>
              {headerImage && (
                <img
                  src={headerImage}
                  alt="Header Preview"
                  className="mt-4 w-20 rounded"
                />
              )}
              <p className="mt-2 text-xs text-gray-400">
                Jpg, jpeg, png image size: Max 2 MB (310 x 240px)
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Form Section */}
      <div className="bg-white p-6 rounded shadow space-y-6">
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg font-semibold">Section 1</h1>
            </div>
            <div className="flex items-center space-x-2">
              <h1 className="text-lg font-semibold">Status</h1>
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                checked={true} // Assuming the status is always on for this example
                onChange={() => {}}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Title */}
          <div className="col-span-2">
            <div className="">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Section title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  maxLength="50"
                  placeholder="Vendor Registration"
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <p className="text-right text-xs text-gray-400">
                  {title.length}/50
                </p>
              </div>

              {/* Subtitle */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Sub title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={subTitle}
                  onChange={(e) => setSubTitle(e.target.value)}
                  maxLength="50"
                  placeholder="Create Your Own Store. Already Have Store?"
                  className="w-full h-15 border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <p className="text-right text-xs text-gray-400">
                  {subTitle.length}/50
                </p>
              </div>
              <div></div>
            </div>
          </div>
          {/* Header Image */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Header Image
            </label>
            <div className="flex items-center justify-center border border-dashed rounded py-6 bg-gray-50">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer text-blue-600"
              >
                <span>Click to upload</span>
                <br />
                <span>Or drag and drop</span>
              </label>
              {headerImage && (
                <img
                  src={headerImage}
                  alt="Header Preview"
                  className="mt-4 w-20 rounded"
                />
              )}
              <p className="mt-2 text-xs text-gray-400">
                Jpg, jpeg, png image size: Max 2 MB (310 x 240px)
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Form Section */}
      <div className="bg-white p-6 rounded shadow space-y-6">
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg font-semibold">Section 1</h1>
            </div>
            <div className="flex items-center space-x-2">
              <h1 className="text-lg font-semibold">Status</h1>
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                checked={true} // Assuming the status is always on for this example
                onChange={() => {}}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Title */}
          <div className="col-span-2">
            <div className="">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Section title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  maxLength="50"
                  placeholder="Vendor Registration"
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <p className="text-right text-xs text-gray-400">
                  {title.length}/50
                </p>
              </div>

              {/* Subtitle */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Sub title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={subTitle}
                  onChange={(e) => setSubTitle(e.target.value)}
                  maxLength="50"
                  placeholder="Create Your Own Store. Already Have Store?"
                  className="w-full h-15 border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <p className="text-right text-xs text-gray-400">
                  {subTitle.length}/50
                </p>
              </div>
              <div></div>
            </div>
          </div>
          {/* Header Image */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Header Image
            </label>
            <div className="flex items-center justify-center border border-dashed rounded py-6 bg-gray-50">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer text-blue-600"
              >
                <span>Click to upload</span>
                <br />
                <span>Or drag and drop</span>
              </label>
              {headerImage && (
                <img
                  src={headerImage}
                  alt="Header Preview"
                  className="mt-4 w-20 rounded"
                />
              )}
              <p className="mt-2 text-xs text-gray-400">
                Jpg, jpeg, png image size: Max 2 MB (310 x 240px)
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex justify-end gap-3">
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded">
          Reset
        </button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Save
        </button>
      </div>
    </div>
  );
}
