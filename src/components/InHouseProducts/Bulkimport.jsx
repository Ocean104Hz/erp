import { useState } from "react";

export default function BulkImport() {
  return (
    <div className="bg-white p-6 rounded shadow space-y-6">
      {/* Title */}
      <div className="text-xl font-semibold text-gray-900">
        <span>📦 Bulk Import</span>
      </div>

      {/* Instructions */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Instructions:</h2>
        <ol className="list-decimal pl-5 text-sm text-gray-700 space-y-2">
          <li>Download the format file and fill it with proper data.</li>
          <li>You can download the example file to understand how the data must be filled.</li>
          <li>Once you have downloaded and filled the format file, Upload it in the form below and submit.</li>
          <li>After uploading products, you need to edit them and set product images and choices.</li>
          <li>You can get brand and category id from their list; please input the right ids.</li>
          <li>You can upload your product images in the product folder from the gallery and copy the image path.</li>
        </ol>
      </div>

      {/* File Upload */}
      <div className="border-dashed border-2 border-gray-400 p-6 text-center">
        <p className="text-sm text-gray-500 mb-3">Do not have the template?</p>
        <button className="text-blue-600 hover:underline mb-3">Download here</button>
        <div className="mb-6">
          <input
            type="file"
            className="w-full p-3 border rounded-lg cursor-pointer"
            placeholder="Drag & drop file or browse file"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 justify-end">
        <button className="px-4 py-2 bg-gray-300 rounded text-sm">Reset</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm">Submit</button>
      </div>
    </div>
  );
}
