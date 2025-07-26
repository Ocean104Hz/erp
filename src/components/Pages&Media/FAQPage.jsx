import { useState } from 'react';
import { Link } from "react-router-dom";

export default function FAQPage() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [priority, setPriority] = useState(1);

  return (
    <div className="p-6 space-y-6">
      {/* Tabs */}
      <div className="flex space-x-4 mb-4">
        <Link to="/Pages&Media/PageMediaSetup" className="text-gray-600 px-4 py-2 hover:text-blue-600 rounded-full rounded-full shadow">Page Setup</Link>
        <Link to="/Pages&Media/FAQPage" className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700">FAQ</Link>
        <Link to="/Pages&Media/OurCommitments" className="text-gray-600 hover:text-blue-600 px-4 py-2 rounded-full shadow">Our Commitments</Link>
      </div>

      {/* Add FAQ Section */}
      <div className="bg-white rounded shadow p-6">
        <h2 className="text-lg font-semibold mb-1">Add FAQ</h2>
        <p className="text-sm text-gray-500 mb-4">
          Configure the faqs and their display priority to add them to the list and show them to customers on the app or website
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Question */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Question<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type Question"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Priority */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Priority
            </label>
            <input
              type="number"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Answer */}
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">
            Answer<span className="text-red-500 ml-1">*</span>
          </label>
          <textarea
            rows={4}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type Answer"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-end mt-4 gap-3">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded">
            Reset
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Submit
          </button>
        </div>
      </div>

      {/* FAQ List */}
      <div className="bg-white rounded shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-md font-semibold">List of FAQ</h3>
          <input
            type="text"
            placeholder="Search by question or answer"
            className="border px-3 py-2 rounded w-72"
          />
        </div>

        {/* Table */}
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">SL</th>
              <th className="px-4 py-2 text-left">Question</th>
              <th className="px-4 py-2 text-left">Answer</th>
              <th className="px-4 py-2 text-left">Priority</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="6" className="py-8 text-center text-gray-400">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-5xl">📄</span>
                  <p className="mt-2">No faqs available in this list</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
