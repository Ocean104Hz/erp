import { useState } from "react";
import { Link } from "react-router-dom";

export default function Robots() {
  const [robotsTxtContent, setRobotsTxtContent] = useState(`
    User-agent: *
    Disallow: /login/admin/
    Sitemap: http://127.0.0.1:8000/sitemap.xml
  `);

  const handleSave = () => {
    // Handle the save logic here (e.g., an API call to store the robots.txt content)
    console.log("Robots.txt saved:", robotsTxtContent);
    alert("Robots.txt saved successfully!");
  };
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Robots.txt Editor</h1>
      <div className="flex space-x-4 mb-6 text-center">
        <Link
          to="/SEOSettings/WebmasterTools"
          className="font-semibold py-2 px-3 hover:text-blue-800"
        >
          Webmaster Tools
        </Link>
        <Link
          to="/SEOSettings/Robots"
          className="bg-blue-900 text-white rounded-full py-2 px-3 font-semibold hover:bg-blue-800"
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

      <div className="bg-white p-6 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-semibold">Robots.txt Editor</h2>
            <p>
              Control search engine crawlers access to specific pages on a
              website.
            </p>
          </div>
          <div>
            <button
              onClick={() => alert("Viewing Robots.txt URL")}
              className="text-blue-600 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded"
            >
              View URL
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-600 bg-blue-100 p-2 rounded mb-4">
          The robots.txt editor lets you tell search engines which parts of your
          website they should or should not crawl. Please note: The system will
          automatically generate a robot.txt for your site. You do not have to
          create it manually. But you can edit or modify this robots.txt.
        </p>
        <textarea
          value={robotsTxtContent}
          onChange={(e) => setRobotsTxtContent(e.target.value)}
          rows="10"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-end mt-4">
        <div className="flex gap-3">
          <button
            onClick={() =>
              setRobotsTxtContent(
                `User-agent: *\nDisallow: /login/admin/\nSitemap: http://127.0.0.1:8000/sitemap.xml`
              )
            }
            className="bg-gray-400 text-gray-800 px-6 py-2 rounded hover:bg-gray-500 font-semibold text-lg"
          >
            Reset
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-semibold text-lg"
          >
            Save Information
          </button>
        </div>
      </div>
    </div>
  );
}
