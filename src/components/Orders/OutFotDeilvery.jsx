import { FolderOpen } from 'lucide-react';


export default function OutFotDeilvery() { 
    const orders = [];
    return (
        <div className="p-6" >
            <div className='flex items-center gap-2 mb-4'>
                <FolderOpen />
                <h1 className='text-xl font-bold'>Out for Delivery</h1>
                <label className="text-white-500 bg-gray-300 px-2 rounded-full font-bold">0</label>
            </div>
            <div className='shadow-xl inset-shadow-sm p-4 mb-4 bg-white rounded-md'>
                <h2 className='text-lg font-semibold mb-2'>Filter Order</h2>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    <div>
                        <label className='block text-sm font-medium mb-1'>Order type</label>
                        <input type="text" className='w-full border rounded p-2' />
                    </div>
                    <div>
                        <label className='block text-sm font-medium mb-1'>Store</label>
                        <input type="text" className='w-full border rounded p-2' />
                    </div>
                    <div>
                        <label className='block text-sm font-medium mb-1'>Customer</label>
                        <input type="text" className='w-full border rounded p-2' />
                    </div>
                    <div>
                        <label className='block text-sm font-medium mb-1'>Date type</label>
                        <input type="text" className='w-full border rounded p-2' />
                    </div>
                </div>
                <div className='flex justify-end gap-2 mt-4'>
                    <button className='bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded'>Reset</button>
                    <button className='bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Show data</button>
                </div>
            </div>
            {/* ORDER LIST */}
            <div className='shadow-xl inset-shadow-sm p-4 bg-white rounded-md'>
                <div className='flex items-center gap-2 mb-4'>
                    <h2 className='text-lg font-semibold'>Order list</h2>
                    <label className="text-white-500 bg-gray-300 px-2 rounded-full font-bold">0</label>
                </div>

                <table className='w-full text-sm text-left text-gray-700'>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                        <tr>
                            <th className='px-6 py-3'>Order ID</th>
                            <th className='px-6 py-3'>Customer</th>
                            <th className='px-6 py-3'>Store</th>
                            <th className='px-6 py-3'>Date</th>
                            <th className='px-6 py-3'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length === 0 ? (
                            <tr>
                                <td colSpan="5">
                                    <div className="flex flex-col items-center justify-center py-10 text-gray-400">
                                        <FolderOpen className="w-12 h-12 mb-2" />
                                        <p className="text-sm font-medium">No order found</p>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            orders.map(order => (
                                <tr key={order.id}>
                                    <td className="px-6 py-4">{order.id}</td>
                                    <td className="px-6 py-4">{order.customer}</td>
                                    <td className="px-6 py-4">{order.store}</td>
                                    <td className="px-6 py-4">{order.date}</td>
                                    <td className="px-6 py-4">{order.status}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}