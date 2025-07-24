import { GiWallet } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";

export default function Wallet(){
    return(
        <>
        <div className="items-center p-2 mt-6">
            <div className="flex gap-2 items-center">
                <GiWallet className="text-2xl text-red-500 " />
                        
                <p>Admin Wallet</p>
        
                        
        
            </div>
        <div>

            
            <div>
                <div className="justify-center items-center flex  gap-2 h-40 w-full border rounded-md shadow-md bg-white p-4 mt-3">
               <div className="flex flex-col justify-center items-center gap-2">
                    <GiReceiveMoney className="text-5xl"/>
                    <p className="font-bold">฿0.00</p>
                    <p className="text-gray-500">In-House Earning</p>
                </div>
            
            </div>
            </div>

            
            <div className="justify-center items-center flex  gap-2 h-40 w-full  mt-3">
                <div className="justify-center items-center flex  gap-2 h-40 w-full border rounded-md shadow-md bg-white p-4 mt-3">
               <div className="flex flex-col justify-center items-center gap-2">
                    <div>
                        <p className="font-bold">฿0.00</p>
                        <p className="text-gray-500">Total Tax Collected</p>
                    </div>
                    
                    <GiReceiveMoney className="text-5xl"/>
                </div>
            </div>
            <div className="justify-center items-center flex  gap-2 h-40 w-full border rounded-md shadow-md bg-white p-4 mt-3">
               <div className="flex flex-col justify-center items-center gap-2">
                    <div>
                        <p className="font-bold">฿0.00</p>
                        <p className="text-gray-500">Delivery Change Earned</p>
                    </div>
                    
                    <GiReceiveMoney className="text-5xl"/>
                </div>
            
            </div>
            <div className="justify-center items-center flex  gap-2 h-40 w-full border rounded-md shadow-md bg-white p-4 mt-3">
               <div className="flex flex-col justify-center items-center gap-2">
                    <div>
                        <p className="font-bold">฿0.00</p>
                        <p className="text-gray-500">Total Tax Collected</p>
                    </div>
                    
                    <GiReceiveMoney className="text-5xl"/>
                </div>
            
            </div>
            <div className="justify-center items-center flex  gap-2 h-40 w-full border rounded-md shadow-md bg-white p-4 mt-3">
               <div className="flex flex-col justify-center items-center gap-2">
                    <div>
                        <p className="font-bold align-self-center">฿0.00</p>
                        <p className="text-gray-500">Pending Amount</p>
                    </div>
                    
                    <GiReceiveMoney className="text-5xl"/>
                </div>
            
            </div>
            </div>
            </div>
            
        </div>
        </>
    )
}