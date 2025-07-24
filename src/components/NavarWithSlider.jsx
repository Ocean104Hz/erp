import { FaShoppingCart, FaUserCircle, FaLanguage, FaCommentDots } from 'react-icons/fa';
import { MdTranslate } from 'react-icons/md';

export default function NavbarWithSlider() {

  return (
    <nav className="bg-white flex justify-between items-center p-4 shadow-md w-full top-0 z-10">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FaLanguage className="text-xl text-blue-500" />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <MdTranslate className="text-xl text-blue-500" />
        </button>
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FaShoppingCart className="text-xl text-blue-500" />
        </button>
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FaCommentDots className="text-xl text-blue-500" />
        </button>
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FaUserCircle className="text-xl text-blue-500" />
        </button>
      </div>
    </nav>
  );
}
