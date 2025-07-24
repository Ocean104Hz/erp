import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineGlobal } from "react-icons/ai";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { FaShoppingCart } from "react-icons/fa";
import { LuMessageSquareMore } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";



export default function Banner() {
    return (
        <>
            <div className="flex justify-between mb-6">
                <div>
                <GiHamburgerMenu />

                </div>
                <div className="flex gap-3">
                    <AiOutlineGlobal />
                    <LiaFlagUsaSolid />
                    <FaShoppingCart />
                    <LuMessageSquareMore />
                    <FaUserCircle />


                </div>
                
            </div>
        </>
    )
}