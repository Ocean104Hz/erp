import { GiWallet } from "react-icons/gi";
export default function Wallet() {
  const orders = [
    {
      id: 1,
      customerId: 1,
      productId: 1,
      status: "pending",
      type: "inhouse",
      amount: 12500,
      tax: 875,
      deliveryCharge: 150,
    },
    {
      id: 2,
      customerId: 2,
      productId: 3,
      status: "delivered",
      type: "vendor",
      amount: 18500,
      tax: 1295,
      deliveryCharge: 200,
    },
    {
      id: 3,
      customerId: 3,
      productId: 4,
      status: "confirmed",
      type: "inhouse",
      amount: 9900,
      tax: 693,
      deliveryCharge: 120,
    },
    {
      id: 4,
      customerId: 1,
      productId: 2,
      status: "out_for_delivery",
      type: "inhouse",
      amount: 21800,
      tax: 1526,
      deliveryCharge: 180,
    },
    {
      id: 5,
      customerId: 2,
      productId: 1,
      status: "packaging",
      type: "vendor",
      amount: 14250,
      tax: 997.5,
      deliveryCharge: 140,
    },
    {
      id: 6,
      customerId: 3,
      productId: 3,
      status: "canceled",
      type: "vendor",
      amount: 17500,
      tax: 1225,
      deliveryCharge: 160,
    },
    {
      id: 7,
      customerId: 1,
      productId: 4,
      status: "returned",
      type: "inhouse",
      amount: 10800,
      tax: 756,
      deliveryCharge: 130,
    },
    {
      id: 8,
      customerId: 2,
      productId: 2,
      status: "failed",
      type: "vendor",
      amount: 20100,
      tax: 1407,
      deliveryCharge: 190,
    },
  ];

  const inhouseEarning = orders
    .filter((o) => o.type === "inhouse")
    .reduce((sum, o) => sum + o.amount, 0);

  const totalTax = orders.reduce((sum, o) => sum + o.tax, 0);

  const deliveryChangeEarned = orders.reduce(
    (sum, o) => sum + o.deliveryCharge,
    0
  );

  const pendingAmount = orders
    .filter((o) => o.status === "pending")
    .reduce((sum, o) => sum + o.amount + o.tax + o.deliveryCharge, 0);

  const format = (n) => `฿${n.toFixed(2)}`;

  return (
    <div className="p-2">
      <div className="flex gap-2 items-center">
        <GiWallet className="text-2xl text-red-500" />
        <p>Admin Wallet</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-4 mt-6">
        <div className="flex justify-center items-center row-span-2 w-full border border-gray-400 rounded-md shadow-md bg-white p-4">
          <div className="flex flex-col justify-center items-center gap-2">
            <img src="/inhouse-earning.png" className="w-15" />
            <p className="font-bold text-2xl text-gray-500">
              {format(inhouseEarning)}
            </p>
            <p className="text-gray-500">In-House Earning</p>
          </div>
        </div>

        <Card title="Total Tax Collected" value={totalTax} icon="/ce.png" />
        <Card
          title="Delivery Change Earned"
          value={deliveryChangeEarned}
          icon="/dce.png"
        />
        <Card title="Total Tax Collected" value={totalTax} icon="/ttc.png" />
        <Card title="Pending Amount" value={pendingAmount} icon="/pa.png" />
      </div>
    </div>
  );
}

function Card({ title, value, icon }) {
  return (
    <div className="items-center content-center w-full border border-gray-400 rounded-md shadow-md bg-white p-4">
      <div className="flex justify-between items-center gap-2">
        <div>
          <p className="font-bold text-2xl text-gray-500">
            ฿{value.toFixed(2)}
          </p>
          <p className="text-gray-500">{title}</p>
        </div>
        <div>
          <img src={icon} className="w-10" />
        </div>
      </div>
    </div>
  );
}
