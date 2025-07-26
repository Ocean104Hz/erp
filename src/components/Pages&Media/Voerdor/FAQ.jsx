import { useState } from "react";
import { Link } from "react-router-dom";

export default function FAQ() {
  // ข้อมูลตัวอย่าง (จาก DataFrame)
  const initialFAQs = [
    {
      id: 1,
      question: "How do I handle customer inquiries?",
      answer:
        "You can manage customer inquiries directly through our platform's messaging system.",
      priority: 4,
      status: true,
    },
    {
      id: 2,
      question: "How do I upload products?",
      answer:
        "Log in to your seller account, go to the 'Upload Products' section, and fill in the details.",
      priority: 3,
      status: false,
    },
    {
      id: 3,
      question: "What are the fees for selling?",
      answer:
        "Our platform charges a small commission on each sale. There are no upfront listing fees.",
      priority: 2,
      status: true,
    },
    {
      id: 4,
      question: "How do I register as a seller?",
      answer:
        "To register, click on the 'Sign Up' button, fill in your details, and verify your account.",
      priority: 1,
      status: false,
    },
    {
      id: 5,
      question: "How do I handle customer inquiries?",
      answer:
        "You can manage customer inquiries directly through our platform's messaging system.",
      priority: 4,
      status: true,
    },
    {
      id: 6,
      question: "How do I upload products?",
      answer:
        "Log in to your seller account, go to the 'Upload Products' section, and fill in the details.",
      priority: 3,
      status: true,
    },
    {
      id: 7,
      question: "What are the fees for selling?",
      answer:
        "Our platform charges a small commission on each sale. There are no upfront listing fees.",
      priority: 2,
      status: false,
    },
    {
      id: 8,
      question: "How do I register as a seller?",
      answer:
        "To register, click on the 'Sign Up' button, fill in your details, and verify your account.",
      priority: 1,
      status: true,
    },
  ];

  const [faqs, setFaqs] = useState(initialFAQs);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [priority, setPriority] = useState(1);

  const addFAQ = () => {
    setFaqs([
      ...faqs,
      { id: Date.now(), question, answer, priority, status: true },
    ]);
    setQuestion("");
    setAnswer("");
    setPriority(1);
  };

  const removeFAQ = (id) => {
    setFaqs(faqs.filter((item) => item.id !== id));
  };

  const toggleStatus = (id) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <h1 className="text-2xl font-bold flex items-center gap-2">
        FAQs Section
      </h1>
      <div className="flex items-center gap-12 mb-4">
        <Link
          to="/Pages&Media/Voerdor/Header"
          className=""
        >
          Herder
        </Link>
        <Link to="/Pages&Media/Voerdor/WhySell">Why Sell With Us</Link>
        <Link to="/Pages&Media/Voerdor/Business">Business Process</Link>
        <Link to="/Pages&Media/Voerdor/DownloadApp">Download App</Link>
        <Link to="/Pages&Media/Voerdor/FAQ" className="bg-blue-500 px-4 py-2 rounded-full text-white">FAQ</Link>
      </div>
      <div className="bg-white p-6 rounded shadow space-y-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="mb-6">
          <h1 className="text-lg font-semibold">FAQs Section</h1>
          <p>
            In this section you can add some frequently asked questions for
            vendors
          </p>
        </div>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-semibold">FAQs</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add FAQ
          </button>
        </div>
      </div>

      {/* Form to add FAQ */}
      <div className="bg-white p-6 rounded shadow space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Question Input */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Question <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              maxLength="50"
              placeholder="Enter question"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <p className="text-right text-xs text-gray-400">
              {question.length}/50
            </p>
          </div>

          {/* Priority Input */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Priority <span className="text-red-500">*</span>
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>

        {/* Answer Input */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Answer <span className="text-red-500">*</span>
          </label>
          <textarea
            rows="4"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            maxLength="150"
            placeholder="Write answer...."
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="text-right text-xs text-gray-400">
            {answer.length}/150
          </p>
        </div>

        {/* Save and Reset Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={addFAQ}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded">
            Reset
          </button>
        </div>
        {/* FAQ List Table */}
        <div className="p-6 ">
          <h3 className="text-lg font-semibold mb-4">FAQ List</h3>
          <table className="w-full table-auto">
            <thead className="bg-gray-100 text-gray-600 text-sm">
              <tr>
                <th className="px-4 py-2 text-left">SL</th>
                <th className="px-4 py-2 text-left">Question</th>
                <th className="px-4 py-2 text-left">Answer</th>
                <th className="px-4 py-2 text-left">Priority</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {faqs.length > 0 ? (
                faqs.map((item, index) => (
                  <tr key={item.id}>
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{item.question}</td>
                    <td className="px-4 py-2">{item.answer}</td>
                    <td className="px-4 py-2">{item.priority}</td>
                    <td className="px-4 py-2">
                      <label className="inline-flex relative items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={item.status}
                          onChange={() => toggleStatus(item.id)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600"></div>
                      </label>
                    </td>
                    <td className="px-4 py-2">
                      <button className="p-2 text-blue-600 hover:bg-gray-100 rounded">
                        ✏️
                      </button>
                      <button
                        onClick={() => removeFAQ(item.id)}
                        className="p-2 text-red-600 hover:bg-gray-100 rounded"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-8 text-center text-gray-400">
                    No FAQs available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
