export default function Total() {
  const stores = [
    { id: 1, name: "Store A" },
    { id: 2, name: "Store B" },
    { id: 3, name: "Store C" },
  ];

  const products = [
    { id: 1, name: "Product 1", storeId: 1 },
    { id: 2, name: "Product 2", storeId: 1 },
    { id: 3, name: "Product 3", storeId: 2 },
    { id: 4, name: "Product 4", storeId: 3 },
  ];

  const customers = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Mary" },
  ];

  const orders = [
    { id: 1, customerId: 1, productId: 1 },
    { id: 2, customerId: 2, productId: 3 },
    { id: 3, customerId: 3, productId: 4 },
  ];

  const totalOrders = orders.length;
  const totalStores = stores.length;
  const totalProducts = products.length;
  const totalCustomers = customers.length;

  return (
    <>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-2">
        <div className="border border-gray-300 rounded-md  bg-white p-6">
          <div className="flex justify-between items-center px-4">
            <p className="font-bold">Total order</p>
            <img src="/all-orders.png" className="w-8" />
          </div>
          <p className="font-bold px-4">{totalOrders}</p>
        </div>

        <div className="border border-gray-300 rounded-md bg-white p-6">
          <div className="flex justify-between items-center px-4 ">
            <p className="font-bold">Total store</p>
            <img src="/total-stores.png" className="w-8" />
          </div>
          <p className="font-bold px-4">{totalStores}</p>
        </div>

        <div className="border border-gray-300 rounded-md bg-white p-6">
          <div className="flex justify-between items-center px-4 ">
            <p className="font-bold">Total products</p>
            <img src="/total-product.png" className="w-8" />
          </div>
          <p className="font-bold px-4">{totalProducts}</p>
        </div>

        <div className="border border-gray-300 rounded-md bg-white p-6">
          <div className="flex justify-between items-center px-4 ">
            <p className="font-bold">Total customers</p>
            <img src="/total-customer.png" className="w-8" />
          </div>
          <p className="font-bold px-4">{totalCustomers}</p>
        </div>
      </div>
    </>
  );
}
