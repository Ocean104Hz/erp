import { FaRegClipboard } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";


export default function Total(){
    return(
        <>
            <div className="grid grid-cols-2 gap-2">
                <div className="border rounded-md shadow-md bg-white p-6">
                    <div className="flex justify-between items-center px-4">
                        <p>Total order</p>
                        <FaRegClipboard />
                    </div>
                    <p className="font-bold px-4">0</p>                   

                </div>
                <div className="border rounded-md shadow-md bg-white p-6">
                    <div className="flex justify-between items-center px-4 ">
                        <p>Total store</p>
                        <FaStore />
                    </div>
                    <p className="font-bold px-4">0</p>                   

                </div>
                <div className="border rounded-md shadow-md bg-white p-6">
                    <div className="flex justify-between items-center px-4 ">
                        <p>Total products</p>
                        <AiOutlineProduct />
                    </div>
                    <p className="font-bold px-4">0</p>                   

                </div>
                <div className="border rounded-md shadow-md bg-white p-6">
                    <div className="flex justify-between items-center px-4 ">
                        <p>Total customers</p>
                        <IoPerson />
                    </div>
                    <p className="font-bold px-4">0</p>                   

                </div>
            </div>
        </>
    )
}