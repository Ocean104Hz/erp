import { PiMedalFill } from "react-icons/pi";

export default function Footer() {
    return(
        <>
        <div className="grid grid-cols-3 gap-1 mt-6">
            <div className="border rounded-md shadow-md bg-white p-4">
                <div className="flex items-center gap-2  p-2 ">
                    <PiMedalFill />
                    <p>Top Customer</p>
                </div>
                <div className="p-3 border-t">

                </div>
            </div>
            <div className="border rounded-md shadow-md bg-white p-4">
                <div className="flex items-center gap-2  p-2 ">
                    <PiMedalFill />
                    <p>Most Popular Stores</p>
                </div>
                <div className="p-3 border-t">

                </div>
            </div>
            <div className="border rounded-md shadow-md bg-white p-4">
                <div className="flex items-center gap-2  p-2 ">
                    <PiMedalFill />
                    <p>Top Selling Store</p>
                </div>
                <div className="p-3 border-t">

                </div>
            </div>
            <div className="border rounded-md shadow-md bg-white p-4">
                <div className="flex items-center gap-2  p-2 ">
                    <PiMedalFill />
                    <p>Most Popular Products</p>
                </div>
                <div className="p-3 border-t">

                </div>
            </div>
            <div className="border rounded-md shadow-md bg-white p-4">
                <div className="flex items-center gap-2  p-2 ">
                    <PiMedalFill />
                    <p>Top Selling Products</p>
                </div>
                <div className="p-3 border-t">

                </div>
            </div>
            <div className="border rounded-md shadow-md bg-white p-4">
                <div className="flex items-center gap-2  p-2 ">
                    <PiMedalFill />
                    <p>Top Delivery Man</p>
                </div>
                <div className="p-3 border-t">

                </div>
            </div>
            
            </div>
        </>
    )
}