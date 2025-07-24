import { PiConfettiLight } from "react-icons/pi";

export default function Options(){
    return(
        <>
        <div className="flex items-center justify-between p-2 mt-6">
            <div className="flex gap-2 items-center">
                <PiConfettiLight className="text-2xl text-red-500 " />
                
                <p>Business Analytics</p>

                

            </div>
            <div>
                <select className="border border-gray-300 rounded-md p-2 text-gray-700">
                    <option value="">Select Option</option>
                    <option value="">Option 1</option>
                    <option value="">Option 2</option>
                    <option value="">Option 3</option>
                </select>
            </div>
            
        </div>
        </>
    )
}