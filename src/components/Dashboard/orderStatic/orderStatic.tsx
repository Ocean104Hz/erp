import { FcStatistics } from "react-icons/fc";
import LineChart from "./graph/LineChat";
import Donut from "./graph/Donut";

export default function OrderStatic() {
const orders = [
  { id: 1, customerId: 1, productId: 1, status: "pending", type: "inhouse", amount: 12500, tax: 875, deliveryCharge: 150, createdAt: "2025-01-15" },
  { id: 2, customerId: 2, productId: 3, status: "delivered", type: "vendor", amount: 10500, tax: 735, deliveryCharge: 180, createdAt: "2025-01-25" },

  { id: 3, customerId: 3, productId: 4, status: "confirmed", type: "inhouse", amount: 9900, tax: 693, deliveryCharge: 120, createdAt: "2025-02-08" },
  { id: 4, customerId: 1, productId: 2, status: "out_for_delivery", type: "vendor", amount: 8800, tax: 616, deliveryCharge: 140, createdAt: "2025-02-18" },

  { id: 5, customerId: 2, productId: 1, status: "packaging", type: "inhouse", amount: 14250, tax: 997.5, deliveryCharge: 140, createdAt: "2025-03-11" },
  { id: 6, customerId: 3, productId: 3, status: "canceled", type: "vendor", amount: 11200, tax: 784, deliveryCharge: 130, createdAt: "2025-03-21" },

  { id: 7, customerId: 1, productId: 4, status: "returned", type: "inhouse", amount: 21800, tax: 1526, deliveryCharge: 180, createdAt: "2025-04-04" },
  { id: 8, customerId: 2, productId: 2, status: "failed", type: "vendor", amount: 14700, tax: 1029, deliveryCharge: 150, createdAt: "2025-04-19" },

  { id: 9, customerId: 3, productId: 1, status: "confirmed", type: "inhouse", amount: 13400, tax: 938, deliveryCharge: 150, createdAt: "2025-05-05" },
  { id: 10, customerId: 1, productId: 2, status: "delivered", type: "vendor", amount: 16600, tax: 1162, deliveryCharge: 175, createdAt: "2025-05-22" },

  { id: 11, customerId: 2, productId: 3, status: "pending", type: "inhouse", amount: 11900, tax: 833, deliveryCharge: 145, createdAt: "2025-06-11" },
  { id: 12, customerId: 3, productId: 4, status: "delivered", type: "vendor", amount: 12800, tax: 896, deliveryCharge: 160, createdAt: "2025-06-28" },

  { id: 13, customerId: 1, productId: 1, status: "confirmed", type: "inhouse", amount: 12300, tax: 861, deliveryCharge: 150, createdAt: "2025-07-03" },
  { id: 14, customerId: 2, productId: 3, status: "pending", type: "vendor", amount: 14900, tax: 1043, deliveryCharge: 170, createdAt: "2025-07-29" },

  { id: 15, customerId: 3, productId: 2, status: "delivered", type: "inhouse", amount: 13800, tax: 966, deliveryCharge: 150, createdAt: "2025-08-08" },
  { id: 16, customerId: 1, productId: 4, status: "returned", type: "vendor", amount: 13200, tax: 924, deliveryCharge: 140, createdAt: "2025-08-17" },

  { id: 17, customerId: 2, productId: 2, status: "delivered", type: "inhouse", amount: 15900, tax: 1113, deliveryCharge: 170, createdAt: "2025-09-01" },
  { id: 18, customerId: 3, productId: 1, status: "out_for_delivery", type: "vendor", amount: 11800, tax: 826, deliveryCharge: 120, createdAt: "2025-09-13" },

  { id: 19, customerId: 1, productId: 3, status: "confirmed", type: "inhouse", amount: 14900, tax: 1043, deliveryCharge: 150, createdAt: "2025-10-09" },
  { id: 20, customerId: 2, productId: 4, status: "canceled", type: "vendor", amount: 12200, tax: 854, deliveryCharge: 160, createdAt: "2025-10-24" },

  { id: 21, customerId: 3, productId: 3, status: "pending", type: "inhouse", amount: 11000, tax: 770, deliveryCharge: 140, createdAt: "2025-11-02" },
  { id: 22, customerId: 1, productId: 2, status: "delivered", type: "vendor", amount: 13600, tax: 952, deliveryCharge: 170, createdAt: "2025-11-19" },

  { id: 23, customerId: 2, productId: 1, status: "confirmed", type: "inhouse", amount: 14000, tax: 980, deliveryCharge: 145, createdAt: "2025-12-05" },
  { id: 24, customerId: 3, productId: 4, status: "delivered", type: "vendor", amount: 15800, tax: 1106, deliveryCharge: 185, createdAt: "2025-12-27" },
];


  // Monthly stats
  const months = Array.from({ length: 12 }, (_, i) => i); // [0,1,...11]
  const monthlyInhouse = new Array(12).fill(0);
  const monthlyVendor = new Array(12).fill(0);
  const monthlyCommission = new Array(12).fill(0);

  orders.forEach(order => {
    const monthIndex = new Date(order.createdAt).getMonth();
    if (order.type === "inhouse") {
      monthlyInhouse[monthIndex] += order.amount;
    } else if (order.type === "vendor") {
      monthlyVendor[monthIndex] += order.amount;
    }
    monthlyCommission[monthIndex] += order.amount * 0.1;
  });

  const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Inhouse",
      data: monthlyInhouse.map(v => parseFloat(v.toFixed(2))),
      borderColor: "#1e90ff",
      backgroundColor: "#1e90ff",
      pointRadius: 3,
      tension: 0.4,
      spanGaps: true, // ✅ แสดงเส้นต่อแม้มีช่องว่าง
    },
    {
      label: "Vendor",
      data: monthlyVendor.map(v => parseFloat(v.toFixed(2))),
      borderColor: "#28a745",
      backgroundColor: "#28a745",
      pointRadius: 3,
      tension: 0.4,
      spanGaps: true,
    },
  ],
};

const chartData2 = {
  ...chartData,
  datasets: [
    ...chartData.datasets,
    {
      label: "Commission",
      data: monthlyCommission.map(v => parseFloat(v.toFixed(2))),
      borderColor: "#a5a728",
      backgroundColor: "#a5a728",
      pointRadius: 3,
      tension: 0.4,
      spanGaps: true,
    },
  ],
};
  const DonutData = {
    labels: ["Total Customer", "Total Vendor", "Total Delivery Man"],
    datasets: [
      {
        data: [3, 2, 1],
        backgroundColor: ["#6dd5ed", "#ffe082", "#3f51b5"],
        borderColor: ["#6dd5ed", "#ffe082", "#3f51b5"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="flex gap-2">
        {/* LINE CHART SECTION */}
        <div className="w-2/3 h-auto bg-white p-4 rounded-xl">
          <div className="flex justify-between items-center pb-3">
            <div className="flex gap-2 items-center">
              <img src="/order-statistics.png" className="w-7 h-6" />
              <p>Order Statistics</p>
            </div>
            <div>
              <button className="p-2 border border-gray-300 hover:bg-blue-500 hover:text-white rounded-l-md">
                This Year
              </button>
              <button className="p-2 border border-gray-300 hover:bg-blue-500 hover:text-white">
                This Month
              </button>
              <button className="p-2 border border-gray-300 hover:bg-blue-500 hover:text-white rounded-r-md">
                This Week
              </button>
            </div>
          </div>
          <LineChart data={chartData} />
        </div>

        {/* DONUT CHART SECTION */}
        <div className="w-1/3 h-auto bg-white p-4 rounded-xl">
          <p className="px-4 pb-5">Earning statistics</p>
          <div className="h-80 max-w-lg">
            <Donut data={DonutData} />
          </div>
        </div>
      </div>

      {/* SECOND CHART SECTION */}
      <div className="mt-4 bg-white p-4 rounded-xl">
        <div className="grid grid-cols-4">
          <div className="col-span-3 flex gap-3">
            <img src="/order-statistics.png" className="w-7 h-6" />
            <h1>Order statistics</h1>
          </div>
          <div className="flex gap-4 bg-gray-100 px-1 py-1 border border-gray-200 rounded content-center w-80">
            <a href="#" className="bg-blue-500 px-2 py-1 rounded text-white">This Year</a>
            <a href="#" className="px-2 py-1">This Month</a>
            <a href="#" className="px-2 py-1">This Week</a>
          </div>
        </div>
        <LineChart data={chartData2} />
      </div>
    </>
  );
}
