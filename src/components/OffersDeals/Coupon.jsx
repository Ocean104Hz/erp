import { useState } from "react";
import { FolderOpen } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import Default from "../../../public/default.png";
import Export from "../../../public/excel.png";

export default function CouponSetup() {
  const [formData, setFormData] = useState({
    couponType: "",
    couponBearer: "",
    limitForSameUser: "",
    minimumPurchase: "",
    couponTitle: "",
    vendor: "",
    discountType: "Amount",
    couponCode: "pra6eprdvk",
    customer: "",
    discountAmount: "",
    startDate: "",
    expireDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Coupon Setup</h1>
      <div className="bg-white shadow-md rounded-md p-6">
        <form onSubmit={handleSubmit}>
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Coupon Type */}
            <div>
              <label className="block text-sm font-semibold">Coupon type</label>
              <select
                name="couponType"
                value={formData.couponType}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md mt-1"
              >
                <option>Select coupon type</option>
                <option>Discount</option>
                <option>Promo</option>
                <option>Free Shipping</option>
              </select>
            </div>

            {/* Coupon Title */}
            <div>
              <label className="block text-sm font-semibold">
                Coupon title
              </label>
              <input
                type="text"
                name="couponTitle"
                value={formData.couponTitle}
                onChange={handleChange}
                placeholder="Title"
                className="w-full p-2 border border-gray-300 rounded-md mt-1"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Coupon Bearer */}
            <div>
              <label className="block text-sm font-semibold">
                Coupon bearer
              </label>
              <select
                name="couponBearer"
                value={formData.couponBearer}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md mt-1"
              >
                <option>Select coupon bearer</option>
                <option>Customer</option>
                <option>Vendor</option>
              </select>
            </div>

            {/* Coupon Code */}
            <div>
              <label className="block text-sm font-semibold">Coupon Code</label>
              <input
                type="text"
                name="couponCode"
                value={formData.couponCode}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md mt-1"
              />
            </div>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Limit for Same User */}
            <div>
              <label className="block text-sm font-semibold">
                Limit for same user
              </label>
              <input
                type="number"
                name="limitForSameUser"
                value={formData.limitForSameUser}
                onChange={handleChange}
                placeholder="Ex: 10"
                className="w-full p-2 border border-gray-300 rounded-md mt-1"
              />
            </div>

            {/* Discount Type */}
            <div>
              <label className="block text-sm font-semibold">
                Discount type
              </label>
              <select
                name="discountType"
                value={formData.discountType}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md mt-1"
              >
                <option value="Amount">Amount</option>
                <option value="Percentage">Percentage</option>
              </select>
            </div>
          </div>

          {/* Fourth Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Minimum Purchase */}
            <div>
              <label className="block text-sm font-semibold">
                Minimum purchase ($)
              </label>
              <input
                type="number"
                name="minimumPurchase"
                value={formData.minimumPurchase}
                onChange={handleChange}
                placeholder="Ex: 100"
                className="w-full p-2 border border-gray-300 rounded-md mt-1"
              />
            </div>

            {/* Discount Amount */}
            <div>
              <label className="block text-sm font-semibold">
                Discount Amount
              </label>
              <input
                type="number"
                name="discountAmount"
                value={formData.discountAmount}
                onChange={handleChange}
                placeholder="Ex: 500"
                className="w-full p-2 border border-gray-300 rounded-md mt-1"
              />
            </div>
          </div>

          {/* Fifth Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Start Date */}
            <div>
              <label className="block text-sm font-semibold">Start date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md mt-1"
              />
            </div>

            {/* Expiry Date */}
            <div>
              <label className="block text-sm font-semibold">Expire date</label>
              <input
                type="date"
                name="expireDate"
                value={formData.expireDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md mt-1"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button
              type="reset"
              className="py-2 px-4 bg-gray-300 text-black rounded-md"
            >
              Reset
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-blue-600 text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* ORDER LIST */}
            <div className="shadow-xl inset-shadow-sm p-4 bg-white rounded-md">
              <div className=" items-center gap-2 mb-4">
                <div className="grid grid-cols-4 items-center mb-4">
                  <div className="relative mb-4 mt-4">
                    <input
                      type="text"
                      placeholder="Search menu"
                      className="w-full p-2 pl-10 rounded-md bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none"
                    />
                    <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 text-sm" />
                  </div>
                  <div></div>
                  <div></div>
                  <div className="flex justify-end gap-2">
                    <button className="flex gap-3 text-blue-700 bg-green-200 px-4 py-2 rounded text-sm hover:bg-green-500 cursor-pointer font-bold">
                      <img src={Export} className="w-6" />
                      Export
                    </button>
                  </div>
                </div>
              </div>
      
              <div className="overflow-x-auto ">
                <table className="mb-4 min-w-full table-auto">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left px-4 py-4 font-semibold text-black">
                        SL
                      </th>
                      <th className="px-4 py-2 font-semibold text-black">
                        Coupon
                      </th>
                      <th className="px-4 py-2 font-semibold text-black">Coupon type</th>
                      <th className="px-4 py-2 font-semibold text-black">User limit</th>
                      <th className="px-4 py-2 font-semibold text-black">
                        Discount bearer
                      </th>
                      <th className="px-4 py-2 font-semibold text-black">Status</th>
                      <th className="px-4 py-2 font-semibold text-black">Action</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
      
              <div className="flex flex-col justify-center items-center p-2 mt-6 gap-2">
                {/* <MdRunningWithErrors className="mt-20 text-9xl text-black-500" /> */}
                <img src={Default} alt="" />
                <p className="mb-10 text-sm text-gray-500 mt-2">No category found</p>
              </div>
            </div>
    </div>
  );
}
