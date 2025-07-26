import { useState } from "react";
import { Link } from "react-router-dom";

export default function RobotsMeta() {
  const [metaContent, setMetaContent] = useState("");
  const [pages, setPages] = useState([]);

  const handleAddContent = () => {
    setMetaContent(""); // Reset meta content field after adding
    alert("Meta content added successfully!");
  };

  const handleAddPage = () => {
    const newPage = {
      id: pages.length + 1,
      name: "New Page",
      date: new Date(),
    };
    setPages([...pages, newPage]);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">SEO Settings</h1>
      <div className="flex space-x-4 mb-6 text-center">
        <Link
          to="/SEOSettings/WebmasterTools"
          className="font-semibold py-2 px-3 hover:text-blue-800"
        >
          Webmaster Tools
        </Link>
        <Link
          to="/SEOSettings/Robots"
          className="font-semibold py-2 px-3 hover:text-blue-800"
        >
          Robots.txt
        </Link>
        <Link
          to="/SEOSettings/Sitemap"
          className="font-semibold py-2 px-3 hover:text-blue-800"
        >
          Sitemap
        </Link>
        <Link
          to="/SEOSettings/RobotsMeta"
          className="bg-blue-900 text-white rounded-full py-2 px-3 font-semibold hover:bg-blue-800"
        >
          Robots Meta Content
        </Link>
        <Link
          to="/SEOSettings/Logs"
          className="font-semibold py-2 px-3 hover:text-blue-800"
        >
          404 Loge
        </Link>
      </div>
      {/* Set Default Meta Section */}
      {/* Set Default Meta Section */}
      <div className="bg-white h-50  p-6 rounded shadow space-y-6">
        <div className="items-center">
          <div className="text-center mt-6">
            <h2 className="text-lg font-semibold">Set Default Meta</h2>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">
              If you do not have any meta content in any page it will
              automatically use meta content from this section.
            </p>
          </div>
          <div className="text-center">
            <button
              onClick={handleAddContent}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              + Add Content
            </button>
          </div>
        </div>

        {/* <input
          type="text"
          value={metaContent}
          onChange={(e) => setMetaContent(e.target.value)}
          placeholder="Enter meta content"
          className="w-full p-2 border rounded"
        /> */}
      </div>

      {/* Default Pages Robots Meta Content Settings */}
      <div className="bg-white p-6 rounded shadow space-y-6 grid grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold">
            Default Pages Robots Meta Content Settings
          </h2>
          <p className="text-sm text-gray-600">
            Optimize your Websites performance indexing status and search
            visibility.
          </p>
        </div>
        <div>
          {/* Add Page Button */}
          <div className="flex justify-end gap-3">
            <button
              onClick={handleAddPage}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              + Add Page
            </button>
          </div>
        </div>

        <div className="border-dashed border-2 p-6 text-center text-gray-400 col-span-2">
          <img src="#" alt="img" />
          <p>No data found</p>
        </div>
      </div>

      {/* List of Pages */}
    </div>
  );
}
