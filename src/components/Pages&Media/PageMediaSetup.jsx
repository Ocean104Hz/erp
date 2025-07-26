import { Link } from "react-router-dom";

export default function PageMediaSetup() {
  const pages = [
    { id: 1, name: "About Us", default: true, available: false },
    { id: 2, name: "Terms And Conditions", default: true, available: false },
    { id: 3, name: "Privacy Policy", default: true, available: false },
    { id: 4, name: "Refund Policy", default: true, available: true },
    { id: 5, name: "Return Policy", default: true, available: true },
    { id: 6, name: "Cancellation Policy", default: true, available: true },
    { id: 7, name: "Shipping Policy", default: true, available: true },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Pages & Media Setup
      </h1>
      {/* Tabs */}
      <div className="flex space-x-4 mb-4">
        <Link
          to="/Pages&Media/PageMediaSetup"
          className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700"
        >
          Page Setup
        </Link>
        <Link
          to="/Pages&Media/FAQPage"
          className="text-gray-600 hover:text-blue-600 px-4 py-2 rounded-full shadow "
        >
          FAQ
        </Link>
        <Link
          to="/Pages&Media/OurCommitments"
          className="text-gray-600 hover:text-blue-600 px-4 py-2 rounded-full shadow "
        >
          Our Commitments
        </Link>
      </div>

      {/* Alert */}
      <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded mb-4 text-sm">
        ℹ️ In this page you can add edit and status on or off your business
        related pages
      </div>

      {/* Business page list title */}
      <h2 className="font-bold text-blue-800 mb-2">Business page list</h2>
      <div className="bg-white shadow-md rounded p-4 mb-6">
        {/* Table Header */}
        <div className="flex items-center justify-between mb-2">
          <input
            type="text"
            placeholder="Search by name"
            className="border rounded px-3 py-1 w-64"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            ➕ Add New Page
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded">
            <thead className="bg-gray-100 text-gray-600 text-sm">
              <tr className="text-left">
                <th className="px-4 py-2">SL</th>
                <th className="px-4 py-2">Page Name</th>
                <th className="px-4 py-2">Availability</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {pages.map((page) => (
                <tr key={page.id} className="">
                  <td className="px-4 py-2">{page.id}</td>
                  <td className="px-4 py-2 flex items-center gap-2">
                    {page.name}
                    {page.default && (
                      <span className="text-xs bg-gray-100 text-blue-600 px-2 py-0.5 rounded">
                        Default
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-2">
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked={page.available}
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:bg-blue-600"></div>
                    </label>
                  </td>
                  <td className="px-4 py-2 flex space-x-2">
                    <button className="p-2 border rounded hover:bg-gray-100">
                      👁️
                    </button>
                    <button className="p-2 border rounded hover:bg-gray-100">
                      ✏️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
