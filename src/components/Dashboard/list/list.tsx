export default function List() {
  const orders = [
    { id: 1, customerId: 1, productId: 1, status: "pending" },
    { id: 2, customerId: 2, productId: 3, status: "confirmed" },
    { id: 3, customerId: 3, productId: 4, status: "delivered" },
    { id: 4, customerId: 1, productId: 2, status: "packaging" },
    { id: 5, customerId: 2, productId: 1, status: "out_for_delivery" },
    { id: 6, customerId: 3, productId: 3, status: "canceled" },
    { id: 7, customerId: 1, productId: 4, status: "returned" },
    { id: 8, customerId: 2, productId: 2, status: "failed" },
  ];

  const statusCount = {
    pending: 2,
    confirmed: 3,
    packaging: 1,
    out_for_delivery: 5,
    delivered: 6,
    canceled: 8,
    returned: 10,
    failed: 4,
  };

  orders.forEach(order => {
    if (statusCount[order.status] !== undefined) {
      statusCount[order.status]++;
    }
  });

  return (
    <>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-2 mt-2">
        <Card icon="/pending.png" label="Pending" value={statusCount.pending} />
        <Card icon="/confirmed.png" label="Confirmed" value={statusCount.confirmed} />
        <Card icon="/packaging.png" label="Packaging" value={statusCount.packaging} />
        <Card icon="/out-of-delivery.png" label="Out for delivery" value={statusCount.out_for_delivery} />
        <Card icon="/delivered.png" label="Delivered" value={statusCount.delivered} />
        <Card icon="/canceled.png" label="Canceled" value={statusCount.canceled} />
        <Card icon="/returned.png" label="Returned" value={statusCount.returned} />
        <Card icon="/failed-to-deliver.png" label="Failed to delivery" value={statusCount.failed} />
      </div>
    </>
  );
}

function Card({ icon, label, value }) {
  return (
    <div className="flex justify-between items-center border border-gray-100 rounded-md bg-gray-100 p-4">
      <div className="flex items-center gap-1">
        <img src={icon} className="w-7 h-7" />
        <p className="font-bold">{label}</p>
      </div>
      <p className="font-bold">{value}</p>
    </div>
  );
}
