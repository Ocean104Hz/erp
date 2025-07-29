import { GiWallet } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";

export default function Wallet() {
  return (
    <>
      <div className="p-2">
        <div className="flex gap-2 items-center">
          <GiWallet className="text-2xl text-red-500" />
          <p>Admin Wallet</p>
        </div>

        {/* Use grid for the sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-4 mt-6">
          {/* In-House Earning */}
          <div className="flex justify-center items-center row-span-2 w-full border border-gray-400 rounded-md shadow-md bg-white p-4">
            <div className="flex flex-col justify-center items-center gap-2">
              <img src="/inhouse-earning.png" className="w-15" />
              <p className="font-bold text-2xl text-gray-500">฿0.00</p>
              <p className="text-gray-500">In-House Earning</p>
            </div>
          </div>

          {/* Total Tax Collected */}
          <div className="items-center content-center w-full border border-gray-400 rounded-md shadow-md bg-white p-4">
            <div className="flex justify-between items-center gap-2">
              <div>
                <p className="font-bold text-2xl text-gray-500">฿0.00</p>
                <p className="text-gray-500">Total Tax Collected</p>
              </div>
              <div>
                <img src="/ce.png" className="w-10" />
              </div>
            </div>
          </div>

          {/* Delivery Change Earned */}
          <div className="items-center content-center w-full border border-gray-400 rounded-md shadow-md bg-white p-4">
            <div className="flex justify-between items-center gap-2">
              <div>
                <p className="font-bold text-2xl text-gray-500">฿0.00</p>
                <p className="text-gray-500">Delivery Change Earned</p>
              </div>
              <div>
                <img src="/dce.png" className="w-10" />
              </div>
            </div>
          </div>

          {/* Total Tax Collected (Repeat) */}
          <div className="items-center content-center w-full border border-gray-400 rounded-md shadow-md bg-white p-4">
            <div className="flex justify-between items-center gap-2">
              <div>
                <p className="font-bold text-2xl text-gray-500">฿0.00</p>
                <p className="text-gray-500">Total Tax Collected</p>
              </div>
              <div>
                <img src="/ttc.png" className="w-10" />
              </div>
            </div>
          </div>

          {/* Pending Amount */}
          <div className="items-center content-center w-full border border-gray-400 rounded-md shadow-md bg-white p-4">
            <div className="flex justify-between items-center gap-2">
              <div>
                <p className="font-bold text-2xl text-gray-500">฿0.00</p>
                <p className="text-gray-500">Pending Amount</p>
              </div>
              <div>
                <img src="/pa.png" className="w-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
