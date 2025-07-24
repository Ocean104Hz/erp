import { TbCategoryFilled } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { FaFileExcel } from "react-icons/fa";
import { MdRunningWithErrors } from "react-icons/md";

export default function Category() {
    return (
        <>
            <div className="flex items-center p-2 mt-6 gap-2 ">
                <TbCategoryFilled className="text-2xl text-black-500" />
                <h1 className="text-2xl font-bold">Category Setup</h1>
            </div>

            <div className="p-4 mt-2 shadow-md border rounded-md flex flex-col gap-4">
                {/* ส่วนบน: ซ้าย-ขวา */}
                <div className="flex justify-between">
                    {/* LEFT SIDE */}
                    <div className="w-1/2">
                        {/* Tabs */}
                        <div className="border-b mb-6">
                            <ul className="flex text-sm font-medium text-center">
                                <li>
                                    <button className="inline-block p-4 border-b-2 border-blue-600 text-blue-600">English (EN)</button>
                                </li>
                                <li>
                                    <button className="inline-block p-4 text-gray-500 hover:text-blue-600">Thai (TH)</button>
                                </li>
                            </ul>
                        </div>

                        {/* Category Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Category Name (EN)
                            </label>
                            <input
                                type="text"
                                placeholder="New Category"
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>

                        {/* Priority */}
                        <div>
                            <label className="mt-5 block text-sm font-medium text-gray-700 mb-1">
                                Priority
                                <span className="inline-block ml-1 text-gray-400" title="Set the order priority">🛈</span>
                            </label>
                            <select className="mb-5 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                                <option disabled selected>Set Priority</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                    </div>

                    {/* RIGHT SIDE (Gray box) */}
                    <div className="m-10 rounded-md bg-gray-50 w-1/2 flex flex-col items-center justify-start py-4">
                        <label className="mt-4 font-bold text-sm mb-1">Category Logo</label>
                        <p className="font-bold text-sm text-blue-600 mb-4">Ratio 1:1 (500 x 500 px)</p>

                        <label className="flex flex-col items-center justify-center w-40 h-40 border-2 border-dashed rounded cursor-pointer hover:bg-gray-100">
                            <input type="file" accept="image/*" className="hidden" />
                            <IoDocumentTextOutline className="text-2xl text-black-500" />
                            <span className="font-bold text-sm text-blue-500">Click to upload</span>
                            <span className="font-bold text-sm text-black-500">or drag and drop</span>
                        </label>

                        <p className="mb-4 text-sm text-gray-500 mt-2">Image size: Max 2 MB</p>
                    </div>
                </div>

                {/* ปุ่มด้านล่าง (อยู่ในกล่องขาว แต่นอกกล่องเทา) */}
                <div className="flex justify-end px-4 pb-2">
                    <button type="reset" className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100">Reset</button>
                    <button type="submit" className="ml-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Submit</button>
                </div>
            </div>


            <div className="p-4 mt-5 shadow-md border rounded-md flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    {/* ซ้าย */}
                    <div className="flex items-center space-x-2">
                        <span className="font-semibold text-black">Category list</span>
                        <span className="font-bold px-2 py-0.5 text-sm rounded-full bg-gray-100 text-gray-600">0</span>
                    </div>

                    {/* ขวา */}
                    <div className="flex items-center justify-end space-x-4">
                        {/* Search Box */}
                        <div className="flex items-center border rounded-md overflow-hidden">
                            <input
                                type="text"
                                placeholder="Search by category name"
                                className="px-3 py-2 outline-none text-sm placeholder-gray-400"
                            />
                            <button className="bg-gray-100 px-3 py-3 hover:bg-gray-200">
                                <FiSearch />
                            </button>
                        </div>

                        {/* Export Button */}
                        <button className="flex items-center border border-blue-500 text-blue-600 font-semibold px-4 py-2 rounded-md hover:bg-blue-50">
                            <FaFileExcel className="mr-2 text-green-600 text-lg" />
                            Export
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="mb-4 min-w-full table-auto">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="text-left px-4 py-4 font-semibold text-black">ID</th>
                                <th className="px-4 py-2 font-semibold text-black">Category Image</th>
                                <th className="px-4 py-2 font-semibold text-black">Name</th>
                                <th className="px-4 py-2 font-semibold text-black">Priority</th>
                                <th className="px-4 py-2 font-semibold text-black">Home Category Status</th>
                                <th className="px-4 py-2 font-semibold text-black">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>

                <div className="flex flex-col justify-center items-center p-2 mt-6 gap-2">
                    <MdRunningWithErrors className="mt-20 text-9xl text-black-500" />
                    <p className="mb-10 text-sm text-gray-500 mt-2">No category found</p>
                </div>
            </div>
        </>
    );
}
