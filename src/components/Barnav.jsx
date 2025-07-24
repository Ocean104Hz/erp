import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaSearch, FaDollarSign, FaChevronDown, FaChevronRight, FaBullhorn, FaBell, FaInbox, FaEnvelope, FaTicketAlt, FaShoppingCart, FaHome, FaCashRegister  } from "react-icons/fa";
import { House, Calculator  } from 'lucide-react';
import { MdLocalOffer } from "react-icons/md";


export default function Barnav() {
  const [openOffers, setOpenOffers] = useState(true);
  const [openNotifications, setOpenNotifications] = useState(true);
  const [openOrders, setOpenOrders] = useState(true);
  const [openRefunds, setOpenRefunds] = useState(true);
  const [openReports, setOpenReports] = useState(true);
  const [openProducts, setOpenProducts] = useState(true);
  const [openSupport, setOpenSupport] = useState(true);

  return (
    <div className="w-64 h-screen bg-blue-900 text-white p-4 text-sm font-medium overflow-y-auto">
      {/* Search */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search menu"
          className="w-full p-2 pl-10 rounded-md bg-blue-800 placeholder-gray-300 text-white focus:outline-none"
        />
        <FaSearch className="absolute top-2.5 left-3 text-white text-sm" />
      </div>
      {/* Home */}
      <div>
        <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
          <FaHome />
          <Link to="/Dashboard/content" className="hover:underline">Dashboard</Link>
        </button>
        <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
          <FaCashRegister  />
          <Link to="/pos" className="hover:underline">POS</Link>
        </button>
      </div>

      {/* ORDER MANAGEMENT */}
      <p className="text-xs text-gray-400 mb-2 mt-4">ORDER MANAGEMENT</p>

      <div>
        <button
          onClick={() => setOpenOrders(!openOrders)}
          className="flex items-center justify-between w-full px-2 py-2 hover:bg-blue-800 rounded"
        >
          <span className="flex items-center gap-2">
            <FaShoppingCart />
            Orders
          </span>
          {openOrders ? <FaChevronDown /> : <FaChevronRight />}
        </button>
        {openOrders && (
          <ul className="ml-6 text-sm text-gray-300 space-y-1 mt-1">
            <li><Link to="/" className="hover:underline">All</Link></li>
            <li><Link to="/pending" className="hover:underline">Pending</Link></li>
            <li><Link to="/confirmed" className="hover:underline">Confirmed</Link></li>
            <li><Link to="/packaging" className="hover:underline">Packaging</Link></li>
            <li><Link to="/out-for-delivery" className="hover:underline">Out for Delivery</Link></li>
            <li><Link to="/delivered" className="hover:underline">Delivered</Link></li>
            <li><Link to="/returned" className="hover:underline">Returned</Link></li>
            <li><Link to="/failed-to-deliver" className="hover:underline">Failed to Deliver</Link></li>
            <li><Link to="/canceled" className="hover:underline">Canceled</Link></li>
          </ul>
        )}
      </div>
      <div>
        <button 
        onClick={() => setOpenRefunds(!openRefunds)} 
        className="flex items-center justify-between w-full px-2 py-2 hover:bg-blue-800 rounded"
        >
          <span className="flex items-center gap-2">
            <FaDollarSign />
            Refund Requests
          </span>
          {openRefunds ? <FaChevronDown /> : <FaChevronRight />}
        </button>
        {openRefunds && (
          <ul className="ml-6 text-sm text-gray-300 space-y-1 mt-1">
            <li><Link to="/refunds/pending" className="hover:underline">Pending</Link></li>
            <li><Link to="/refunds/approved" className="hover:underline">Appproved</Link></li>
            <li><Link to="/refunds/refunded" className="hover:underline">Refunded</Link></li>
            <li><Link to="/refunds/rejected" className="hover:underline">Rejected</Link></li>
          </ul>
        )}
      </div>

      {/* PROMOTION MANAGEMENT */}
      <p className="text-xs text-gray-400 mb-2 mt-4">PROMOTION MANAGEMENT</p>

      <div>
        <button
          onClick={() => setOpenOffers(!openOffers)}
          className="flex items-center justify-between w-full px-2 py-2 hover:bg-blue-800 rounded"
        >
          <span className="flex items-center gap-2">
            <MdLocalOffer />
            Category Setup
          </span>
          {openOffers ? <FaChevronDown /> : <FaChevronRight />}
        </button>
        {openOffers && (
          <ul className="ml-6 text-sm text-gray-300 space-y-1 mt-1">
            <li>Sub Categories</li>
            <li>Sub Sub Categories</li>
            <li><Link to="/Category/Catrgory" className="hover:underline">Categories</Link></li>
            {/* <li><Link to="/refunds/approved" className="hover:underline">Appproved</Link></li>
            <li><Link to="/refunds/refunded" className="hover:underline">Refunded</Link></li> */}
          </ul>
        )}
      </div>

      <div className="mt-2">
        <button
          onClick={() => setOpenNotifications(!openNotifications)}
          className="flex items-center justify-between w-full px-2 py-2 hover:bg-blue-800 rounded"
        >
          <span className="flex items-center gap-2">
            <MdLocalOffer />
            Brands
          </span>
          {openNotifications ? <FaChevronDown /> : <FaChevronRight />}
        </button>
        {openNotifications && (
          <ul className="ml-6 text-sm text-gray-300 space-y-1 mt-1">
            <li>Add new</li>
            <li>List</li>
          </ul>
        )}
      </div>

      <Link
        to="/ProductGallery/ProductGallery"
        className="flex items-center justify-between w-full px-2 py-2 hover:bg-blue-800 rounded"
      >
        <span className="flex items-center gap-2">
            <FaTicketAlt />
            Product Gallery
        </span>
      </Link>


      <div className="mt-2">
        <button
          onClick={() => setOpenReports(!openReports)}
          className="flex items-center justify-between w-full px-2 py-2 hover:bg-blue-800 rounded"
        >
          <span className="flex items-center gap-2">
            <MdLocalOffer />
            In House Products
          </span>
          {openReports ? <FaChevronDown /> : <FaChevronRight />}
        </button>
        {openReports && (
          <ul className="ml-6 text-sm text-gray-300 space-y-1 mt-1">
            <li><Link to="/InHouseProducts/ProductList" className="hover:underline">Product List</Link></li>
            <li>List</li>
          </ul>
        )}
      </div>

      <div className="mt-2">
        <button
          onClick={() => setOpenProducts(!openProducts)}
          className="flex items-center justify-between w-full px-2 py-2 hover:bg-blue-800 rounded"
        >
          <span className="flex items-center gap-2">
            <MdLocalOffer />
            Vendor Products
          </span>
          {openProducts ? <FaChevronDown /> : <FaChevronRight />}
        </button>
        {openProducts && (
          <ul className="ml-6 text-sm text-gray-300 space-y-1 mt-1">
            <li>Add new</li>
            <li>List</li>
          </ul>
        )}
      </div>

      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        <Link to="/Product Gallery/ProductGallery" className="hover:underline">Product gallery</Link>
      </button>

      {/* Promotion management */}
      <p className="text-xs text-gray-400 mt-6 mb-2">PROMOTION MANAGEMENT</p>
      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaInbox />
        Banner Setup
      </button>

        <div className="mt-2">
        <button
          onClick={() => setOpenReports(!openReports)}
          className="flex items-center justify-between w-full px-2 py-2 hover:bg-blue-800 rounded"
        >
          <span className="flex items-center gap-2">
            <MdLocalOffer />
            Offers & Deals
          </span>
          {openReports ? <FaChevronDown /> : <FaChevronRight />}
        </button>
        {openReports && (
          <ul className="ml-6 text-sm text-gray-300 space-y-1 mt-1">
            <li>Add new</li>
            <li>List</li>
          </ul>
        )}
      </div>

      <div className="mt-2">
        <button
          onClick={() => setOpenSupport(!openSupport)}
          className="flex items-center justify-between w-full px-2 py-2 hover:bg-blue-800 rounded"
        >
          <span className="flex items-center gap-2">
            <MdLocalOffer />
            Notifications
          </span>
          {openSupport ? <FaChevronDown /> : <FaChevronRight />}
        </button>
        {openSupport && (
          <ul className="ml-6 text-sm text-gray-300 space-y-1 mt-1">
            <li>Add new</li>
            <li>List</li>
          </ul>
        )}
      </div>

      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        Announcement
      </button>

      {/* HELP & SUPPORT */}
      <p className="text-xs text-gray-400 mt-6">HELP & SUPPORT</p>
      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        Inbox
      </button>
      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        Messages
      </button>
      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        Support Ticket
      </button>


      {/* HELP & SUPPORT */}
      <p className="text-xs text-gray-400 mt-6 uppercase">Reports & Analysis</p>
      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        Sales & Transaction Report
      </button>
      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        Product Report
      </button>
      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        Order Report
      </button>

      {/* HELP & SUPPORT */}
      <p className="text-xs text-gray-400 mt-6 uppercase">Blog management</p>
      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        Blog
      </button>

      {/* User management */}
      <p className="text-xs text-gray-400 mt-6 uppercase">User management</p>
      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        Customers
      </button>
      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        Vendors
      </button>
      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        Delivery Men
      </button>
      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        Employees
      </button>
      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        Subscribers
      </button>

      {/* Business Settings */}
      <p className="text-xs text-gray-400 mt-6 uppercase">Business Settings</p>
      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        Business Setup
      </button>
      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        Inhouse Shop
      </button>
      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        SEO Settings
      </button>
      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        Priority Setup
      </button>
      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        Pages & Media
      </button>

      {/* System Settings */}
      <p className="text-xs text-gray-400 mt-6 uppercase">System Settings</p>
      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        System Setup
      </button>
      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        Login Settings
      </button>
      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        Email Template
      </button>
      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        Gallery
      </button>

      {/* 3rd Party Setup */}
      <p className="text-xs text-gray-400 mt-6 uppercase">3rd Party Setup</p>
            <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        Payment Methods
      </button>
      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        Firebase
      </button>
      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        Marketing Tools
      </button>
      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        Other Configuration
      </button>

      {/* Themes & Addons */}
      <p className="text-xs text-gray-400 mt-6 uppercase">Themes & Addons</p>
      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        Theme Setup
      </button>
      <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        System Addons
      </button>





    </div>
  );
}
