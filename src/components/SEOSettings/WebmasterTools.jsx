import { useState } from "react";
import { Link } from "react-router-dom";

export default function WebmasterTools() {
  // Data structure for the SEO tools with images
  const seoToolsData = [
    {
      id: 1,
      name: "Google Search Console",
      description:
        "Optimize website's performance indexing status and search visibility.",
      htmlCode: "<meta name='google-site-verification' content='your-id' />",
      image: "https://www.example.com/google-icon.png", // Add an image URL
    },
    {
      id: 2,
      name: "Bing Webmaster Tools",
      description:
        "Optimize website's performance indexing status and search visibility.",
      htmlCode: "<meta name='msvalidate.01' content='your-id' />",
      image: "https://www.example.com/bing-icon.png", // Add an image URL
    },
    {
      id: 3,
      name: "Baidu Webmaster Tool",
      description:
        "Optimize website's performance indexing status and search visibility.",
      htmlCode: "<meta name='baidu-site-verification' content='your-id' />",
      image: "https://www.example.com/baidu-icon.png", // Add an image URL
    },
    {
      id: 4,
      name: "Baidu Webmaster Tool",
      description:
        "Optimize website's performance indexing status and search visibility.",
      htmlCode: "<meta name='baidu-site-verification' content='your-id' />",
      image: "https://www.example.com/baidu-icon.png", // Add an image URL
    },
  ];

  // States to handle the values for each tool's HTML code input
  const [toolValues, setToolValues] = useState({
    "google-search-console": "",
    "bing-webmaster-tools": "",
    "baidu-webmaster-tool": "",
  });

  const handleInputChange = (e, tool) => {
    const { value } = e.target;
    setToolValues((prevValues) => ({
      ...prevValues,
      [tool]: value,
    }));
  };

  const handleSave = () => {
    // Perform the save operation here (e.g., API call)
    console.log("Saved SEO settings:", toolValues);
    alert("Settings saved successfully!");
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">SEO Settings</h1>

      <div className="flex space-x-4 mb-6 text-center">
        <Link
          to="/SEOSettings/WebmasterTools"
          className="bg-blue-900 text-white rounded-full py-2 px-3 font-semibold hover:bg-blue-800"
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
          className="font-semibold py-2 px-3 hover:text-blue-800"
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

      <div className="space-y-6">
        {/* Table to display the SEO tools */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold">Webmaster Tools</h2>
          <p className="text-sm text-gray-600 mb-4">
            Enter the HTML code for each webmaster tool to optimize website
            indexing and search visibility.
          </p>

          <p className="bg-yellow-100 text-sm mb-4 p-2 rounded">
            After input All Information, Make sure you click Save Button.
          </p>

          <div className="space-y-4">
            {seoToolsData.map((tool) => (
              <div
                key={tool.id}
                className="flex flex-col space-y-3 bg-gray-50 p-4 rounded grid grid-cols-1 md:grid-cols-3 gap-4 shadow"
              >
                <div className="flex flex-col items-light space-x-4">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-8 h-8 object-contain mb-3"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{tool.name}</h3>
                    <p className="text-sm text-gray-500">{tool.description}</p>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 col-span-2 bg-white p-4 rounded shadow">
                  <input
                    type="text"
                    id={`${tool.name}-html`}
                    value={
                      toolValues[
                        `${tool.name.toLowerCase().replace(/\s+/g, "-")}`
                      ] || ""
                    }
                    onChange={(e) =>
                      handleInputChange(
                        e,
                        `${tool.name.toLowerCase().replace(/\s+/g, "-")}`
                      )
                    }
                    placeholder="Enter HTML code"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="bg-blue-100 text-xs text-blue-500 mt-2 p-2 rounded">
                    <code>{tool.htmlCode}</code>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Save Button */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={handleSave}
            className="bg-gray-400 text-gray-800 px-6 py-2 rounded hover:bg-gray-500 font-semibold text-lg"
          >
            Reset
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-semibold text-lg"
          >
            Save information
          </button>
        </div>
      </div>
    </div>
  );
}
