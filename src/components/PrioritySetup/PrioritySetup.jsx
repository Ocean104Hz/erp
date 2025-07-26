import { useState } from "react";

export default function PrioritySetup() {
  const sections = [
    {
      id: "featured-products",
      title: "Featured Products",
      description:
        "The featured product means the product list which are mostly ordered, customers choice and have good reviews and ratings.",
    },
    {
      id: "new-arrival",
      title: "New Arrival Products",
      description:
        "These new arrival products are items recently added to the list within a specific time frame and have positive reviews & ratings.",
    },
    // เพิ่ม section อื่นๆ ที่คุณต้องการที่นี่
    {
      id: "top-vendor",
      title: "Top Vendor Products",
      description:
        "The top vendor products means the products that come from the highest-rated vendors.",
    },
    {
      id: "discounted-products",
      title: "Discounted Products",
      description:
        "Products that are currently being sold at a discount or offer.",
    },
  ];

  // จัดเก็บค่าของ Default / Custom สำหรับแต่ละ section
  const [sortingOption, setSortingOption] = useState({
    "featured-products": "use-default",
    "new-arrival": "use-default",
    "top-vendor": "use-default",
    "discounted-products": "use-default",
  });

  // จัดเก็บค่าของ custom sorting option เฉพาะเมื่อเลือก use-custom
  const [customSortOption, setCustomSortOption] = useState({
    "featured-products": "most-order",
    "new-arrival": "most-order",
    "top-vendor": "most-order",
    "discounted-products": "most-order",
  });

  // ตัวเลือกสำหรับ custom sorting
  const customOptions = [
    {
      group: "Created Date",
      options: [
        { value: "latest-created", label: "Sort By Latest Created" },
        { value: "first-created", label: "Sort By First Created" },
        { value: "oldest-created", label: "Sort By Oldest Created" },
      ],
    },
    {
      group: "Popularity",
      options: [
        { value: "most-order", label: "Sort By Most Order" },
        { value: "top-rating", label: "Sort By Top Rating" },
      ],
    },
    {
      group: "Alphabetical",
      options: [
        { value: "a-z", label: "Sort A → Z" },
        { value: "z-a", label: "Sort Z → A" },
      ],
    },
    // เพิ่มกลุ่มที่ต้องการได้ที่นี่
    {
      group: "Price",
      options: [
        { value: "low-high", label: "Sort By Price: Low to High" },
        { value: "high-low", label: "Sort By Price: High to Low" },
      ],
    },
    {
      group: "Ratings",
      options: [
        { value: "highest-rated", label: "Sort By Highest Rating" },
        { value: "lowest-rated", label: "Sort By Lowest Rating" },
      ],
    },
  ];

  const handleSave = () => {
    const payload = sections.map((section) => ({
      sectionId: section.id,
      mode: sortingOption[section.id],
      sortValue:
        sortingOption[section.id] === "use-custom"
          ? customSortOption[section.id]
          : "default",
    }));
    console.log("Saving data:", payload);
    alert("Settings saved successfully!");
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Priority Setup</h1>

      <div className="space-y-6">
        {sections.map((section) => (
          <div
            key={section.id}
            className="bg-white p-6 rounded shadow space-y-6"
          >
            <h2 className="text-lg font-semibold">{section.title}</h2>
            <p className="text-sm text-gray-600">{section.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-4 rounded">
              {/* Default Option */}
              <div className="flex items-start gap-3">
                <input
                  type="radio"
                  id={`${section.id}-default`}
                  name={`${section.id}-sorting`}
                  value="use-default"
                  checked={sortingOption[section.id] === "use-default"}
                  onChange={() =>
                    setSortingOption((prev) => ({
                      ...prev,
                      [section.id]: "use-default",
                    }))
                  }
                  className="mt-1 w-5 h-5 text-blue-600 focus:ring-blue-500"
                />
                <div>
                  <label
                    htmlFor={`${section.id}-default`}
                    className="text-sm font-bold"
                  >
                    Use Default Sorting List
                  </label>
                  <p className="text-xs text-gray-500">
                    Currently sorting this section based on latest add.
                  </p>
                </div>
              </div>

              {/* Custom Option */}
              <div className="flex items-start gap-3">
                <input
                  type="radio"
                  id={`${section.id}-custom`}
                  name={`${section.id}-sorting`}
                  value="use-custom"
                  checked={sortingOption[section.id] === "use-custom"}
                  onChange={() =>
                    setSortingOption((prev) => ({
                      ...prev,
                      [section.id]: "use-custom",
                    }))
                  }
                  className="mt-1 w-5 h-5 text-blue-600 focus:ring-blue-500"
                />
                <div>
                  <label
                    htmlFor={`${section.id}-custom`}
                    className="text-sm font-bold"
                  >
                    Use Custom Sorting List
                  </label>
                  <p className="text-xs text-gray-500">
                    You can sort this section by others way.
                  </p>
                </div>
              </div>
            </div>

            {/* เฉพาะเมื่อเลือก Custom */}
            {sortingOption[section.id] === "use-custom" && (
              <div className="bg-gray-100 border-gray rounded p-4 space-y-3">
                {customOptions.map((group) => (
                  <div key={group.group} className="space-y-2">
                    <div className="text-sm font-semibold text-gray-600">
                      {group.group}
                    </div>
                    {group.options.map((opt) => (
                      <div key={opt.value} className="flex items-center gap-3">
                        <input
                          type="radio"
                          name={`${section.id}-custom-option`}
                          id={`${section.id}-${opt.value}`}
                          value={opt.value}
                          checked={customSortOption[section.id] === opt.value}
                          onChange={() =>
                            setCustomSortOption((prev) => ({
                              ...prev,
                              [section.id]: opt.value,
                            }))
                          }
                          className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                        />
                        <label
                          htmlFor={`${section.id}-${opt.value}`}
                          className="text-sm"
                        >
                          {opt.label}
                        </label>
                      </div>
                    ))}
                  </div>
                ))}         
              </div>
            )}
            {/* Save Button */}
            <div className="flex justify-end">
            <button
                onClick={handleSave}
                className="w-50 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                Save
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
