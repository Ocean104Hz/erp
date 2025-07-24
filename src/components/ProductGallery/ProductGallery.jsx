import { MdRunningWithErrors } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";

export default function ProductGallery() {
    return (
        <>
            <div className="flex items-center p-2 mt-6 gap-2 ">
                <HiOutlineClipboardDocumentList className="text-2xl text-black-500" />
                <h1 className="text-2xl font-bold">Product Gallery</h1>
                <span className="font-bold px-2 py-0.5 text-sm rounded-full bg-gray-100 text-gray-600">0</span>
            </div>

            <div className="p-4 mt-5 shadow-md border rounded-md gap-4">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="w-1/4 pb-4 text-left font-semibold text-slate-600">Store</th>
                            <th className="w-1/4 pb-4 text-left font-semibold text-slate-600">Brand</th>
                            <th className="w-1/4 pb-4 text-left font-semibold text-slate-600">Category</th>
                            <th className="w-1/4 pb-4 text-left font-semibold text-slate-600"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="w-1/4 pr-2">
                                <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                                    <option disabled selected>All shop</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </td>
                            <td className="w-1/4 pr-2">
                                <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                                    <option disabled selected>All brand</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </td>
                            <td className="w-1/4 pr-2">
                                <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                                    <option disabled selected>All category</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </td>
                            <td className="w-1/4">
                                <div className="flex border rounded-md overflow-hidden w-full">
                                    <input
                                        type="text"
                                        placeholder="Search by product name"
                                        className="px-3 py-2 outline-none text-sm placeholder-gray-400 w-full"
                                    />
                                    <button className="bg-gray-100 px-3 py-3 hover:bg-gray-200">
                                        <FiSearch />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="flex flex-col justify-center items-center p-2 mt-6 gap-2">
                    <MdRunningWithErrors className="mt-20 text-9xl text-black-500" />
                    <p className="mb-10 text-sm text-gray-500 mt-2">No category found</p>
                </div>
            </div>
        </>
    );
}
