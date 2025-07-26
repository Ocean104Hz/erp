import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sitemap() {
  const [sitemapList, setSitemapList] = useState([
    { sl: 1, name: "sitemap1.xml", size: "1.5 MB", date: "2025-07-26" },
    { sl: 2, name: "sitemap2.xml", size: "1.3 MB", date: "2025-07-25" },
    { sl: 3, name: "sitemap3.xml", size: "2.1 MB", date: "2025-07-24" },
    // Add more sitemaps as needed
  ]);

  const handleGenerateDownload = () => {
    alert("Sitemap is being generated and downloaded.");
  };

  const handleGenerateUpload = () => {
    alert("Sitemap is being generated and uploaded to the server.");
  };

  const handleUploadSitemap = () => {
    alert("Uploading sitemap...");
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
          className="bg-blue-900 text-white rounded-full py-2 px-3 font-semibold hover:bg-blue-800"
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
      

      <div className="bg-white p-6 rounded shadow mt-6">
        <h1 className="text-1xl font-bold">Site Map</h1>
        <p className="text-sm text-gray-600 mb-4">
        Organized for navigation and search engine optimization.
      </p>
      <p className="text-sm text-gray-500 bg-blue-200 p-2 rounded mb-4">
        A sitemap is an xml file that contains all the web pages of a website. Here we list and organize all the default pages in a hierarchical structure of your website through xml sitemap. It allows search engines to find and display your products and services in search results.
      </p>
        <h2 className="text-1xl text-center font-bold mb-4">Download Generate Sitemap</h2>
      <div className="flex gap-4 justify-center mb-6">

        <button
          onClick={handleGenerateDownload}
          className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800"
        >
          Generate & Download
        </button>
        <button
          onClick={handleGenerateUpload}
          className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800"
        >
          Generate & Upload to Server
        </button>
        <button
          onClick={handleUploadSitemap}
          className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800"
        >
          Upload Sitemap
        </button>
      </div>
        <table className="w-full table-auto">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="px-4 py-2">SL</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">File Size</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {sitemapList.map((sitemap) => (
              <tr key={sitemap.sl}>
                <td className="px-4 py-2">{sitemap.sl}</td>
                <td className="px-4 py-2">{sitemap.name}</td>
                <td className="px-4 py-2">{sitemap.size}</td>
                <td className="px-4 py-2">{sitemap.date}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:bg-gray-100 rounded px-2 py-1">
                    Download
                  </button>
                  <button className="text-red-600 hover:bg-gray-100 rounded px-2 py-1 ml-2">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
