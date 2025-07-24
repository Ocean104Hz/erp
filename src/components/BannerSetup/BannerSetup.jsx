import { IoDocumentTextOutline } from "react-icons/io5";
import { MdRunningWithErrors } from "react-icons/md";
import { GiFinishLine } from "react-icons/gi";

export default function Banner_setup() {
    return (
        <>
            <div className="flex items-center p-2 mt-6 gap-2 ">
                <GiFinishLine className="text-2xl text-black-500" />
                <h1 className="text-2xl font-bold">Banner Setup</h1>
                <h1 className="text-2xl font-bold text-blue-800">(Default )</h1>
            </div>

            <div className="p-4 mt-2 shadow-md border rounded-md flex flex-col gap-4">
                {/* ส่วนบน: ซ้าย-ขวา */}
                <div className="flex justify-between">
                    {/* LEFT SIDE */}
                    <div className="w-1/2">
                        {/* Tabs */}
                        <div className="border-b mb-6">
                            <h1 className="text-sm mb-2 font-bold">Banner Form</h1>
                        </div>

                        {/* Banner type */}
                        <div>
                            <label className="block font-medium mb-4">
                                Banner type
                            </label>
                            <select className="mb-5 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                                <option disabled selected>Main Banner</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>

                        {/* Banner URL */}
                        <div>
                            <label className="block font-medium mb-4">
                                Banner URL
                            </label>
                            <input
                                type="text"
                                placeholder="New Category"
                                className="mb-5 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>

                        {/* Resource type */}
                        <div>
                            <label className="block font-medium mb-4">
                                Resource type
                            </label>
                            <select className="mb-5 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                                <option disabled selected>Product</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>

                        {/* Product */}
                        <div>
                            <label className="block font-medium mb-4">
                                Product
                            </label>
                            <input
                                type="text"
                                placeholder=""
                                className="mb-5 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                    </div>

                    {/* RIGHT SIDE (Gray box) */}
                    <div className="m-10 rounded-md bg-gray-50 w-1/2 flex flex-col items-center justify-start py-4">
                        <label className="mt-4 font-bold text-sm mb-1">Banner image</label>
                        <p className="font-bold text-sm text-blue-600 mb-4">( Ratio 4:1 )</p>

                        <label className="flex flex-col items-center justify-center w-40 h-40 border-2 border-dashed rounded cursor-pointer hover:bg-gray-100">
                            <input type="file" accept="image/*" className="hidden" />
                            <IoDocumentTextOutline className="text-2xl text-black-500" />
                            <span className="font-bold text-sm text-blue-500">Click to upload</span>
                            <span className="font-bold text-sm text-black-500">or drag and drop</span>
                        </label>

                        <p className="text-sm text-gray-500 mt-10">Banner Image ratio is not same for all sections in website.</p>
                        <p className="mb-4 text-sm text-gray-500">Please review he ratio before upload</p>
                    </div>
                </div>

                {/* ปุ่มด้านล่าง (อยู่ในกล่องขาว แต่นอกกล่องเทา) */}
                <div className="flex justify-end px-4 pb-2">
                    <button type="reset" className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100">Reset</button>
                    <button type="submit" className="ml-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save</button>
                </div>
            </div>


            <div className="p-4 mt-5 shadow-md border rounded-md flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    {/* ซ้าย */}
                    <div className="flex items-center space-x-2 flex-nowrap">
                        <span className="font-semibold text-black">Banner table</span>
                        <span className="font-bold px-2 py-0.5 text-sm rounded-full bg-gray-100 text-gray-600">0</span>
                    </div>

                    {/* ขวา */}
                    <div className="flex w-9/12 items-center justify-end space-x-4 pr-48">
                        {/* All Drop Down */}
                        <div className="max-w-md w-1/2">
                            <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                                <option disabled selected>All</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>

                        {/* Filter Button */}
                        <button type="submit" className="flex-1 max-w-[230px] ml-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Filter</button>
                        {/* Add Banner Button */}
                        <button type="submit" className="ml-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">+ Add Banner</button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="mb-4 min-w-full table-auto">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="text-left px-4 py-4 font-semibold text-black">SL</th>
                                <th className="px-4 py-2 font-semibold text-black">Image</th>
                                <th className="px-4 py-2 font-semibold text-black">Banner Type</th>
                                <th className="px-4 py-2 font-semibold text-black">Published</th>
                                <th className="px-4 py-2 font-semibold text-black">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>

                <div className="flex flex-col justify-center items-center p-2 mt-6 gap-2">
                    <MdRunningWithErrors className="mt-20 text-9xl text-black-500" />
                    <p className="mb-10 text-sm text-gray-500 mt-2">No banner found</p>
                </div>
            </div>
        </>
    );
}
