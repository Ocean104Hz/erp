import { Link } from "react-router-dom";
export default function WebsiteSetup() {
    return (
        <>
            <div className="flex items-center p-2 mt-6 gap-2">
                <h1 className="text-2xl font-bold">Business Setup</h1>
            </div>

            <div className="flex space-x-4">
        <Link
          to="/BusinessSetup/BusinessSetup"
          className="px-4 py-2 rounded-full text-gray-600 font-semibold"
        >
          General
        </Link>
        <Link
          to="/BusinessSetup/WebsiteSetup"
          className="px-4 py-2 rounded-full bg-blue-700 text-white font-semibold"
        >
          Website Setup
        </Link>
        <Link
          to="/BusinessSetup/Vendors"
          className="px-4 px-4 py-2 rounded-full text-gray-600 font-semibold"
        >
          Vendors
        </Link>
        <Link
          to="/BusinessSetup/Products"
          className="px-4 px-4 py-2 rounded-full text-gray-600 font-semibold"
        >
          Products
        </Link>
        <Link
          to="/BusinessSetup/DeliveryMen"
          className="px-4 px-4 py-2 rounded-full text-gray-600 font-semibold"
        >
          Delivery Men
        </Link>
        <Link
          to="/BusinessSetup/Customer"
          className="px-4 px-4 py-2 rounded-full text-gray-600 font-semibold"
        >
          Customer
        </Link>
        <Link
          to="/BusinessSetup/Orders"
          className="px-4 px-4 py-2 rounded-full text-gray-600 font-semibold"
        >
          Orders
        </Link>
        <Link
          to="/BusinessSetup/Refund"
          className="px-4 px-4 py-2 rounded-full text-gray-600 font-semibold"
        >
          Refund
        </Link>
        <Link
          to="/BusinessSetup/ShippingMethod"
          className="px-4 px-4 py-2 rounded-full text-gray-600 font-semibold"
        >
          Shipping Method
        </Link>
        <Link
          to="/BusinessSetup/DeliveryRestriction"
          className="px-4 px-4 py-2 rounded-full text-gray-600 font-semibold"
        >
          Delivery Restriction
        </Link>
        <Link
          to="/BusinessSetup/Invoice"
          className="px-4 px-4 py-2 rounded-full text-gray-600 font-semibold"
        >
          Invoice
        </Link>
      </div>

            <div className="p-6 mt-5 ">
                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold">Websites & Panels</h2>
                    <p className="text-sm text-gray-600 mt-1">
                        Setup Your Business Logo And Icons
                    </p>
                </div>

                {/* Banner / Alert Box */}
                <div className="bg-blue-50 text-black text-sm p-3 rounded-md mb-6">
                    💡 You can upload your business logo, icons, and other important files. All changes will be saved and applied after you click the save information button.
                </div>

                <div className="p-6 bg-white rounded-lg shadow-md">
                    <div className="mb-5">
                        <h3 className="text-lg font-semibold">Logo & Loader</h3>
                        <p className="text-sm text-gray-600 mt-1">
                            Here You Can Setup Logos For Web Site Header, Footer, Website Favicon, Website Page Loader Gif For Better User Experience
                        </p>
                    </div>

                    {/* Warning Message */}
                    <div className="bg-yellow-50 text-black text-sm p-3 rounded-md mb-6">
                        ⚠️ Please use the suggested image & gif size ratio for better brand presentation in customer side
                    </div>

                    {/* Section for Logo & Loader */}
                    <div className="bg-gray-50 p-5 rounded-md">

                        <div className="bg-gray-50">

                        </div>

                        {/* Logo Upload Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Website Header Logo */}
                            <div className="flex flex-col bg-white p-4 rounded-md">
                                <label className="text-sm font-medium text-gray-700 mb-1">
                                    Website Header Logo
                                </label>
                                <p className="text-xs font-medium text-gray-500 mb-2">It will show at website header left side</p>
                                <div className="border-dashed border-2 border-gray-300 h-40 flex justify-center items-center rounded-md">
                                    <div className="text-center">
                                        <span className="text-gray-500">Click To Upload</span><br />
                                        <span className="text-xs text-gray-400">Or drag and drop</span>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-2 text-center">
                                    Jpg jpeg png gif image size : Max 1 MB (325 X 100 Px)
                                </p>
                            </div>

                            {/* Website Header Logo (Mobile View) */}
                            <div className="flex flex-col bg-white p-4 rounded-md">
                                <label className="text-sm font-medium text-gray-700 mb-1">
                                    Website Header Logo (Mobile View)
                                </label>
                                <p className="text-xs font-medium text-gray-500 mb-2">It will show at website header left side in mobile devices.</p>
                                <div className="border-dashed border-2 border-gray-300 h-40 flex justify-center items-center rounded-md">
                                    <div className="text-center">
                                        <span className="text-gray-500">Click To Upload</span><br />
                                        <span className="text-xs text-gray-400">Or drag and drop</span>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-2 text-center">
                                    Jpg jpeg png gif image size : Max 1 MB (325 X 100 Px)
                                </p>
                            </div>

                            {/* Website Footer Logo */}
                            <div className="flex flex-col bg-white p-4 rounded-md">
                                <label className="text-sm font-medium text-gray-700 mb-1">
                                    Website Footer Logo
                                </label>
                                <p className="text-xs font-medium text-gray-500 mb-2">It will show at website footer left side</p>
                                <div className="border-dashed border-2 border-gray-300 h-40 flex justify-center items-center rounded-md">
                                    <div className="text-center">
                                        <span className="text-gray-500">Click To Upload</span><br />
                                        <span className="text-xs text-gray-400">Or drag and drop</span>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-2 text-center">
                                    Jpg jpeg png gif image size : Max 1 MB (325 X 100 Px)
                                </p>
                            </div>

                            {/* Website Favicon */}
                            <div className="flex flex-col bg-white p-4 rounded-md">
                                <label className="text-sm font-medium text-gray-700 mb-1">
                                    Website Favicon
                                </label>
                                <p className="text-xs font-medium text-gray-500 mb-2">It will show as a website favicon.</p>
                                <div className="border-dashed border-2 border-gray-300 h-40 flex justify-center items-center rounded-md">
                                    <div className="text-center">
                                        <span className="text-gray-500">Click To Upload</span><br />
                                        <span className="text-xs text-gray-400">Or drag and drop</span>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-2 text-center">
                                    Jpg jpeg png gif image size : Max 1 MB (Ratio 1:1)
                                </p>
                            </div>
                        </div>
                        {/* Loading GIF */}
                        <div className="flex flex-col bg-white p-4 mt-6 rounded-md  ">
                            <label className="text-sm font-medium text-gray-700 mb-1">
                                Loading GIF
                            </label>
                            <p className="text-xs font-medium text-gray-500 mb-2">It will show when website load any page.</p>
                            <div className="border-dashed border-2 border-gray-300 h-40 flex justify-center items-center rounded-md">
                                <div className="text-center">
                                    <span className="text-gray-500">Click To Upload</span><br />
                                    <span className="text-xs text-gray-400">Or drag and drop</span>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-2 text-center">
                                Jpg jpeg png gif image size : Max 1 MB (Ratio 1:1)
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-6 bg-white rounded-lg shadow-md">
                    {/* Title Section */}
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold">Color Settings</h2>
                        <p className="text-sm text-gray-600">
                            Select The Primary & Secondary Colors For The Website & Panels
                        </p>
                    </div>

                    {/* Info alert */}
                    <div className="bg-blue-50 text-black text-sm p-3 rounded-md mb-3">
                        <span className="font-medium">💡 Primary color</span> used in website header sections & button. <span className="font-medium">Secondary color</span> used in button in websites. <span className="font-medium">Panel sidebar color</span> only used in panel sidebar menu background color. Primary light color are used in website cards & sections
                    </div>

                    {/* Warning alert */}
                    <div className="bg-orange-50 text-black text-sm p-3 rounded-md mb-5">
                        ⚠️ For the panel sidebar color must use any dark shade color for better text visibility
                    </div>

                    {/* Color inputs */}
                    <div className="bg-gray-50 p-6 rounded-md grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Primary Color */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 mb-2">Primary Color</label>
                            <div className="flex items-center gap-2">
                                <input type="color" value="#1455AC" className="w-10 h-10 border rounded" />
                                <input
                                    type="text"
                                    value="#1455AC"
                                    readOnly
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                                />
                            </div>
                        </div>

                        {/* Secondary Color */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                            <div className="flex items-center gap-2">
                                <input type="color" value="#F58300" className="w-10 h-10 border rounded" />
                                <input
                                    type="text"
                                    value="#F58300"
                                    readOnly
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                                />
                            </div>
                        </div>

                        {/* Panel Sidebar Color */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 mb-2">Panel Sidebar Color</label>
                            <div className="flex items-center gap-2">
                                <input type="color" value="#073B74" className="w-10 h-10 border rounded" />
                                <input
                                    type="text"
                                    value="#073B74"
                                    readOnly
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-6 bg-white rounded-lg shadow-md">
                    {/* Title */}
                    <h2 className="text-lg font-semibold mb-1">Footer App Download Button</h2>
                    <p className="text-sm text-gray-600 mb-4">
                        Configure The Link For The App Download Button Here.
                    </p>

                    {/* Input Group Box */}
                    <div className="bg-gray-50 p-6 rounded-md grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Apple Store */}
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between mb-2">
                                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                                    Apple Store Download Link
                                </label>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="   sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-500 transition-all duration-200"></div>
                                    <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-200 peer-checked:translate-x-full"></div>
                                </label>
                            </div>
                            <input
                                type="text"
                                placeholder="Ex : https://www.apple.com/app-store/"
                                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                            />
                        </div>

                        {/* Google Play Store */}
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between mb-2">
                                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                                    Google Play Store Download Link
                                </label>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="   sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-500 transition-all duration-200"></div>
                                    <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-200 peer-checked:translate-x-full"></div>
                                </label>
                            </div>
                            <input
                                type="text"
                                placeholder="Ex : https://play.google.com/store/apps"
                                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                            />
                        </div>
                    </div>
                </div>
            </div >
            {/* Footer with save button */}
            <div className="mt-6 flex justify-end gap-4">
                <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
                    Reset
                </button>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Save information
                </button>
            </div>
        </>
    );
}
