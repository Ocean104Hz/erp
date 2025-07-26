import { useState } from 'react';
import { Link } from "react-router-dom";

const initialCards = [
  { id: 1, title: 'Fast Delivery all across the country', enabled: true },
  { id: 2, title: 'Safe Payment', enabled: true },
  { id: 3, title: '7 Days Return Policy', enabled: true },
  { id: 4, title: '100% Authentic Products', enabled: true },
];

export default function OurCommitments() {
  const [cards, setCards] = useState(initialCards);

  return (
    <div className="p-6 space-y-6">
      {/* Tabs */}
      <div className="flex space-x-4 mb-4">
        <Link to="/Pages&Media/PageMediaSetup" className="text-gray-600  px-4 py-2 rounded-full shadow">Page Setup</Link>
        <Link to="/Pages&Media/FAQPage" className="text-gray-600 hover:text-blue-600 px-4 py-2 rounded-full shadow">FAQ</Link>
        <Link to="/Pages&Media/OurCommitments" className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700">Our Commitments</Link>
      </div>

      {/* Alert */}
      <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded text-sm">
        💡 By this section you can grab the customer trust that will increase you revenue.
      </div>

      {/* Title + Preview Button */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Our Commitments</h2>
          <p className="text-sm text-gray-500">This page you can setup your website company reliability section.</p>
        </div>
        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50">
          👁️ Section Preview
        </button>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div key={card.id} className="bg-white shadow rounded p-4 space-y-4 ">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{getCardTitle(card.id)}</h3>
              <label className="inline-flex items-center space-x-2">
                <span className="text-sm">Show this card</span>
                <input
                  type="checkbox"
                  checked={card.enabled}
                  onChange={() =>
                    setCards((prev) =>
                      prev.map((c) =>
                        c.id === card.id ? { ...c, enabled: !c.enabled } : c
                      )
                    )
                  }
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
              </label>
            </div>

            {/* Upload Box */}
            <div className=" rounded bg-gray-50 h-80 py-6 flex flex-col items-center justify-center text-sm text-gray-500">
              <div className=" border-dashed border rounded p-4 text-center cursor-pointer hover:bg-gray-100">
                <p className="text-blue-600">Click to upload</p>
                <p>Or drag and drop</p>
              </div>
              <p className="mt-2 text-xs text-gray-400">JPG, JPEG, PNG Less Than 1MB <b>(Ratio 1:1)</b></p>
            </div>

            {/* Title Input */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={card.title}
                onChange={(e) =>
                  setCards((prev) =>
                    prev.map((c) =>
                      c.id === card.id ? { ...c, title: e.target.value } : c
                    )
                  )
                }
                maxLength={40}
                className="w-full border px-3 py-2 rounded"
              />
              <div className="text-right text-xs text-gray-400 mt-1">
                {card.title.length}/40
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end gap-3">
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">Reset</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">💾 Save information</button>
      </div>
    </div>
  );
}

function getCardTitle(id) {
  switch (id) {
    case 1:
      return 'Delivery info';
    case 2:
      return 'Safe payment';
    case 3:
      return 'Return policy';
    case 4:
      return 'Authentic product';
    default:
      return 'Info';
  }
}
