import { useState } from 'react';

export default function BrandSetup() {
  const [brandName, setBrandName] = useState('');
  const [altText, setAltText] = useState('');
  const [image, setImage] = useState(null);

  return (
    <div className="p-6 space-y-6 ">
      {/* Header */}
      <h1 className="text-2xl font-bold flex items-center gap-2">🧺 Brand Setup</h1>

      {/* Language Tab */}
      <div className=" pb-1">
        <button className="text-blue-600 font-semibold border-b-2 border-blue-600 px-2 pb-1">English(EN)</button>
      </div>

      {/* Form Area */}
      <div className="bg-white p-6 rounded shadow space-y-6">

        {/* Input Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Brand Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Brand Name <span className="text-red-500">*</span> (EN)
            </label>
            <input
              type="text"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              placeholder="Ex : LUX"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Image Alt Text */}
          <div>
            <label className="block text-sm font-medium mb-1">Image alt text</label>
            <input
              type="text"
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
              placeholder="Ex : Apex Brand"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Upload Image */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Image <span className="text-red-500">(Size: 1:1)</span>
          </label>

          <div className="h-100 border rounded bg-gray-50 py-6 flex flex-col items-center justify-center text-sm text-gray-500">
            <div className="border border-dashed rounded p-4 text-center cursor-pointer hover:bg-gray-100">
              <p className="text-blue-600">Click to upload</p>
              <p>Or drag and drop</p>
            </div>
            <p className="mt-2 text-xs text-gray-400">
              Image format : jpg, png, jpeg, webp<br />
              Image size : Max 2 MB
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded">Reset</button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">Submit</button>
        </div>
      </div>
    </div>
  );
}
