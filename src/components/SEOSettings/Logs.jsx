import { useState } from "react";
import { Link } from "react-router-dom";

export default function Logs() {
  const [logs, setLogs] = useState([
    {
      id: 1,
      url: "http://127.0.0.1:8000/assets/backend/libs/bootstrap/bootstrap.min.css.map",
      hits: 8,
      lastHitDate: "Jul 25 03:59 PM",
    },
    {
      id: 2,
      url: "http://127.0.0.1:8000/assets/backend/libs/firebase/firebase.js.map",
      hits: 6,
      lastHitDate: "Jul 25 03:59 PM",
    },
    {
      id: 3,
      url: "http://127.0.0.1:8000/sm/f07d8d7b2652873f485707eab4f3d300bf1f6f3b42912e189c8933b1b9b3dfde.map",
      hits: 7,
      lastHitDate: "Jul 25 03:59 PM",
    },
    // Add more logs as needed
  ]);

  const handleAddLink = (url) => {
    alert(`Add link for: ${url}`);
  };

  const handleDeleteLink = (id) => {
    setLogs(logs.filter((log) => log.id !== id));
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">404 Logs</h1>
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
          className="font-semibold py-2 px-3 hover:text-blue-800"
        >
          Robots Meta Content
        </Link>
        <Link
          to="/SEOSettings/Logs"
          className="bg-blue-900 text-white rounded-full py-2 px-3 font-semibold hover:bg-blue-800"
        >
          404 Loge
        </Link>
      </div>

      <div className="overflow-x-auto bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold">404 Logs</h2>
        <p className="text-sm text-gray-600 mb-6">
          Track instances of page not found errors faced by users on your
          website.
        </p>
        <table className="w-full table-auto">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="px-4 py-2 text-left">URL</th>
              <th className="px-4 py-2 text-left">Hits</th>
              <th className="px-4 py-2 text-left">Last Hit Date</th>
              <th className="px-4 py-2 text-left">Redirection Link</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {logs.map((log) => (
              <tr key={log.id}>
                <td className="px-4 py-2">{log.url}</td>
                <td className="px-4 py-2">{log.hits}</td>
                <td className="px-4 py-2">{log.lastHitDate}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleAddLink(log.url)}
                    className="text-green-600 hover:bg-gray-100 rounded px-2 py-1"
                  >
                    + Add Link
                  </button>
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDeleteLink(log.id)}
                    className="text-red-600 hover:bg-gray-100 rounded px-2 py-1"
                  >
                    🗑️ Delete
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
