import { FaRegClipboard } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";


export default function Total(){
    return(
        <>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-2">
                <div className="border border-gray-300 rounded-md  bg-white p-6">
                    <div className="flex justify-between items-center px-4">
                        <p className="font-bold">Total order</p>
                        <img src="/all-orders.png" className="w-8"/>
                    </div>
                    <p className="font-bold px-4">0</p>                   

                </div>
                <div className="border border-gray-300 rounded-md bg-white p-6">
                    <div className="flex justify-between items-center px-4 ">
                        <p className="font-bold">Total store</p>
                        <img src="/total-stores.png" className="w-8"/>
                    </div>
                    <p className="font-bold px-4">0</p>                   

                </div>
                <div className="border border-gray-300 rounded-md bg-white p-6">
                    <div className="flex justify-between items-center px-4 ">
                        <p className="font-bold">Total products</p>
                        <img src="/total-product.png" className="w-8"/>
                    </div>
                    <p className="font-bold px-4">0</p>                   

                </div>
                <div className="border border-gray-300 rounded-md bg-white p-6">
                    <div className="flex justify-between items-center px-4 ">
                        <p className="font-bold">Total customers</p>
                        <img src="/total-customer.png" className="w-8"/>
                    </div>
                    <p className="font-bold px-4">0</p>                   

                </div>
            </div>
        </>
    )
}