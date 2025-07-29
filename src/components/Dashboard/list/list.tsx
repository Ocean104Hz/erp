import { MdOutlinePendingActions } from "react-icons/md";


export default function List(){
    return (
        <>
            <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-2 mt-2">
                <div className="flex justify-between items-center border border-gray-100 rounded-md  bg-gray-100 p-4">
                    <div className="flex items-center gap-1">
                        <img src="/pending.png" className="w-7 h-7" />
                        <p className="font-bold">Pending</p>
                    </div>
                    <p className="font-bold">0</p>
                </div>
                <div className="flex justify-between items-center border border-gray-100 rounded-md  bg-gray-100 p-4">
                    <div className="flex items-center gap-1">
                        <img src="/confirmed.png" className="w-7 h-7" />
                        <p className="font-bold">Confirmed</p>
                    </div>
                    <p className="font-bold">0</p>
                </div>
                <div className="flex justify-between items-center border border-gray-100 rounded-md  bg-gray-100 p-4">
                    <div className="flex items-center gap-1">
                        <img src="/packaging.png" className="w-7 h-7" />
                        <p className="font-bold">Packaging</p>
                    </div>
                    <p className="font-bold">0</p>
                </div>
                <div className="flex justify-between items-center border border-gray-100 rounded-md  bg-gray-100 p-4">
                    <div className="flex items-center gap-1">
                        <img src="/out-of-delivery.png" className="w-7 h-7" />
                        <p className="font-bold">Out for delivery</p>
                    </div>
                    <p className="font-bold">0</p>
                </div>
                <div className="flex justify-between items-center border border-gray-100 rounded-md  bg-gray-100 p-4">
                    <div className="flex items-center gap-1">
                        <img src="/delivered.png" className="w-7 h-7" />
                        <p className="font-bold">Delivered</p>
                    </div>
                    <p className="font-bold">0</p>
                </div>
                <div className="flex justify-between items-center border border-gray-100 rounded-md  bg-gray-100 p-4">
                    <div className="flex items-center gap-1">
                        <img src="/canceled.png" className="w-7 h-7" />
                        <p className="font-bold">Canceled</p>
                    </div>
                    <p className="font-bold">0</p>
                </div>
                <div className="flex justify-between items-center border border-gray-100 rounded-md  bg-gray-100 p-4">
                    <div className="flex items-center gap-1">
                        <img src="/returned.png" className="w-7 h-7" />
                        <p className="font-bold">Returned</p>
                    </div>
                    <p className="font-bold">0</p>
                </div>
                <div className="flex justify-between items-center border border-gray-100 rounded-md  bg-gray-100 p-4">
                    <div className="flex items-center gap-1">
                        <img src="/failed-to-deliver.png" className="w-7 h-7" />
                        <p className="font-bold">Failed to delivery</p>
                    </div>
                    <p className="font-bold">0</p>
                </div>
            </div>
        </>
    )
}