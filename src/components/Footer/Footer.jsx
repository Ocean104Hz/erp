import { PiMedalFill } from "react-icons/pi";

export default function Footer() {
  const topCustomers = [
    { name: "Nithiphat", orders: 3 },
    { name: "Kanyarat", orders: 3 },
  ];

  const popularProducts = [
    { name: "Lipstick for Unisex", rating: 3, reviews: 2, image: "/D1.jpg" },
    { name: "Microwave", rating: 2.5, reviews: 2, image: "/D2.jpg" },
  ];

  const topSellingProducts = [
    { name: "Microwave", sold: 4, image: "/D1.jpg" },
    { name: "Lipstick for Unisex", sold: 2, image: "/D2.jpg" },
  ];

  return (
    <>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3 mt-6">

        {/* Top Customer */}
        <div className="border border-gray-300 rounded-md shadow-md bg-white">
          <div className="flex items-center gap-3 px-5 py-4">
            <img src="/top-customers.png" className="w-5" />
            <p>Top Customer</p>
          </div>
          <div className="p-3 border-t border-gray-300 flex gap-4">
            {topCustomers.map((cust, i) => (
              <div
                key={i}
                className="w-1/2 p-3 text-center border border-gray-200 rounded-md"
              >
                <img src="/219983.png" className="w-12 h-12 mx-auto" />
                <p className="font-bold">{cust.name}</p>
                <p className="text-blue-600">Orders : {cust.orders}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Most Popular Stores */}
        <div className="border border-gray-300 rounded-md shadow-md bg-white">
          <div className="flex items-center gap-3 px-5 py-4">
            <img src="/most-popular-store-icon.png" className="w-5" />
            <p>Most Popular Stores</p>
          </div>
          <div className="p-3 border-t border-gray-300">
            <p className="text-gray-400 italic">No data yet</p>
          </div>
        </div>

        {/* Top Selling Store */}
        <div className="border border-gray-300 rounded-md shadow-md bg-white">
          <div className="flex items-center gap-3 px-5 py-4">
            <img src="/shop-info.png" className="w-5" />
            <p>Top Selling Store</p>
          </div>
          <div className="p-3 border-t border-gray-300">
            <p className="text-gray-400 italic">No data yet</p>
          </div>
        </div>

        {/* Most Popular Products */}
        <div className="border border-gray-300 rounded-md shadow-md bg-white">
          <div className="flex items-center gap-3 px-5 py-4">
            <img src="/most-popular-product.png" className="w-5" />
            <p>Most Popular Products</p>
          </div>
          <div className="p-3 border-t border-gray-300 flex gap-4">
            {popularProducts.map((p, i) => (
              <div key={i} className="w-1/2 text-center">
                <img src={p.image} className="w-12 h-12 mx-auto" />
                <p>{p.name}</p>
                <p className="text-yellow-600 text-sm">⭐ {p.rating} ({p.reviews} Reviews)</p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Selling Products */}
        <div className="border border-gray-300 rounded-md shadow-md bg-white">
          <div className="flex items-center gap-3 px-5 py-4">
            <img src="/top-selling-product-icon.png" className="w-5" />
            <p>Top Selling Products</p>
          </div>
          <div className="p-3 border-t border-gray-300 flex flex-col gap-2">
            {topSellingProducts.map((p, i) => (
              <div key={i} className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <img src={p.image} className="w-10 h-10" />
                  <p>{p.name}</p>
                </div>
                <p className="text-blue-600">Sold : {p.sold}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Delivery Man */}
        <div className="border border-gray-300 rounded-md shadow-md bg-white">
          <div className="flex items-center gap-3 px-5 py-4">
            <img src="/top-customers.png" className="w-5" />
            <p>Top Delivery Man</p>
          </div>
          <div className="p-3 border-t border-gray-300">
            <p className="text-gray-400 italic">No data yet</p>
          </div>
        </div>

      </div>
    </>
  );
}
