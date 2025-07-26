import { FiSearch } from "react-icons/fi";
import { RiShoppingBagFill } from "react-icons/ri";
import { BiSolidMessageX } from "react-icons/bi";

export default function Inbox() {
    return (
        <>
            <div className="flex items-center p-2 mt-6 gap-2 ">
                <h1 className="text-2xl font-bold">Chatting List</h1>
            </div>

            <div className="flex gap-6">

                {/* ซ้าย */}
                <div className="p-4 mt-2 shadow-md border rounded-md flex flex-col gap-4 w-1/4">
                    <div className="flex border rounded-md overflow-hidden w-full">
                        <input
                            type="text"
                            placeholder="Search customers..."
                            className="px-3 py-2 outline-none text-sm placeholder-gray-400 w-full"
                        />
                        <button className="bg-gray-100 px-3 py-3 hover:bg-gray-200">
                            <FiSearch />
                        </button>
                    </div>

                    <div className="flex space-x-4">
                        <button className="px-4 py-2 rounded-full bg-blue-700 text-white font-semibold">
                            Customer
                        </button>
                        <button className="px-4 py-2 rounded-full text-gray-600 font-semibold">
                            Delivery Man
                        </button>
                    </div>

                    <div className="flex justify-center items-center mt-24">
                        <div>
                            <RiShoppingBagFill className="text-9xl text-black-500" />
                            <p className="text-sm text-gray-500 mt-2">No Customer Found</p>
                        </div>
                    </div>
                </div>

                {/* ขวา */}
                <div className="p-4 mt-2 shadow-md border rounded-md flex flex-col gap-4 w-3/4">
                    <div className="flex justify-center items-center min-h-[700px]">
                        <div>
                            <BiSolidMessageX className="mt-56 text-9xl text-black-500" />
                            <p className="mb-10 text-sm text-gray-500 mt-2">No Customer Found</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
