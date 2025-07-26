import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaSearch, FaDollarSign, FaChevronDown, FaChevronRight, FaBullhorn, FaBell, FaInbox, FaEnvelope, FaTicketAlt, FaShoppingCart, FaHome, FaCashRegister  } from "react-icons/fa";
import { House, Calculator  } from 'lucide-react';
import { MdLocalOffer } from "react-icons/md";


export default function Barnav() {
  const [openOffers, setOpenOffers] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);
  const [openOrders, setOpenOrders] = useState(false);
  const [openRefunds, setOpenRefunds] = useState(false);
  const [openReports, setOpenReports] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const [openSupport, setOpenSupport] = useState(false);
  const [transactions, setTransactions] = useState(false);
  const [PagesMedia, setPagesMedia] = useState(false);

  return (
    <div className="w-80 h-screen bg-green-900 text-white p-4 text-sm font-medium overflow-y-auto">
      {/* Search */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search menu"
          className="w-full p-2 pl-10 rounded-md bg-green-800 placeholder-gray-300 text-white focus:outline-none"
        />
        <FaSearch className="absolute top-2.5 left-3 text-white text-sm" />
      </div>
      {/* Home */}
      <div>
        <button className="flex items-center gap-2 py-2 hover:bg-green-800 w-full px-2 rounded">
          <FaHome />
          <Link to="/Dashboard/content" className="hover:underline">Dashboard</Link>
        </button>
        <button className="flex items-center gap-2 py-2 hover:bg-green-800 w-full px-2 rounded">
          <FaCashRegister  />
          <Link to="/pos" className="hover:underline">POS</Link>
        </button>
      </div>

      {/* ORDER MANAGEMENT */}
      <p className="text-xs text-gray-400 mb-2 mt-4">ORDER MANAGEMENT</p>

      <div>
        <button
          onClick={() => setOpenOrders(!openOrders)}
          className="flex items-center justify-between w-full px-2 py-2 hover:bg-green-800 rounded"
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
        className="flex items-center justify-between w-full px-2 py-2 hover:bg-green-800 rounded"
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
          className="flex items-center justify-between w-full px-2 py-2 hover:bg-green-800 rounded"
        >
          <span className="flex items-center gap-2">
            <MdLocalOffer />
            Category Setup
          </span>
          {openOffers ? <FaChevronDown /> : <FaChevronRight />}
        </button>
        {openOffers && (
          <ul className="ml-6 text-sm text-gray-300 space-y-1 mt-1">
            {/* <li>Sub Categories</li> */}
            {/* <li>Sub Sub Categories</li> */}
            <li><Link to="/Category/Catrgory" className="hover:underline">Categories</Link></li>
            {/* <li><Link to="/refunds/approved" className="hover:underline">Appproved</Link></li>
            <li><Link to="/refunds/refunded" className="hover:underline">Refunded</Link></li> */}
          </ul>
        )}
      </div>

      <div className="mt-2">
        <button
          onClick={() => setOpenNotifications(!openNotifications)}
          className="flex items-center justify-between w-full px-2 py-2 hover:bg-green-800 rounded"
        >
          <span className="flex items-center gap-2">
            <MdLocalOffer />
            Brands
          </span>
          {openNotifications ? <FaChevronDown /> : <FaChevronRight />}
        </button>
        {openNotifications && (
          <ul className="ml-6 text-sm text-gray-300 space-y-1 mt-1">
            <li><Link to="/BrandSetup/BrandSetup" className="hover:underline">Add new</Link></li>
            <li><Link to="/BrandSetup/BrandList" className="hover:underline">List</Link></li>
          </ul>
        )}
      </div>

      {/* <Link
        to="/ProductGallery/ProductGallery"
        className="flex items-center justify-between w-full px-2 py-2 hover:bg-green-800 rounded"
      >
        <span className="flex items-center gap-2">
            <FaTicketAlt />
            Product Gallery
        </span>
      </Link> */}


      <div className="mt-2">
        <button
          onClick={() => setOpenReports(!openReports)}
          className="flex items-center justify-between w-full px-2 py-2 hover:bg-green-800 rounded"
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
          className="flex items-center justify-between w-full px-2 py-2 hover:bg-green-800 rounded"
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

      <button className="flex items-center gap-2 py-2 hover:bg-green-800 w-full px-2 rounded">
        <FaTicketAlt />
        <Link to="/Product Gallery/ProductGallery" className="hover:underline">Product gallery</Link>
      </button>

      {/* Promotion management */}
      {/* <p className="text-xs text-gray-400 mt-6 mb-2">PROMOTION MANAGEMENT</p>
      <button className="flex items-center gap-2 py-2 hover:bg-green-800 w-full px-2 rounded">
        <FaInbox />
        Banner Setup
      </button> */}

        <div className="mt-2">
        <button
          onClick={() => setOpenReports(!openReports)}
          className="flex items-center justify-between w-full px-2 py-2 hover:bg-green-800 rounded"
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
          className="flex items-center justify-between w-full px-2 py-2 hover:bg-green-800 rounded"
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

      <button className="flex items-center gap-2 py-2 hover:bg-green-800 w-full px-2 rounded">
        <FaTicketAlt />
        Announcement
      </button>

      {/* HELP & SUPPORT */}
      <p className="text-xs text-gray-400 mt-6">HELP & SUPPORT</p>
      <Link
        to="/Chatting/Inbox"
        className="flex items-center justify-between w-full px-2 py-2 hover:bg-green-800 rounded"
      >
        <span className="flex items-center gap-2">
            <FaTicketAlt />
            Inbox
        </span>
      </Link>
      <button className="flex items-center gap-2 py-2 hover:bg-green-800 w-full px-2 rounded">
        <FaTicketAlt />
        Messages
      </button>
      <button className="flex items-center gap-2 py-2 hover:bg-green-800 w-full px-2 rounded">
        <FaTicketAlt />
        Support Ticket
      </button>


      {/* HELP & SUPPORT */}
      <p className="text-xs text-gray-400 mt-6 uppercase">Reports & Analysis</p>
      {/* <button className="flex items-center gap-2 py-2 hover:bg-blue-800 w-full px-2 rounded">
        <FaTicketAlt />
        Sales & Transaction Report
      </button> */}
      <div>
        <button 
        onClick={() => setTransactions(!transactions)} 
        className="flex items-center justify-between w-full px-2 py-2 hover:bg-green-800 rounded"
        >
          <span className="flex items-center gap-2">
            <FaDollarSign />
            Sales & Transaction Report
          </span>
          {transactions ? <FaChevronDown /> : <FaChevronRight />}
        </button>
        {transactions && (
          <ul className="ml-6 text-sm text-gray-300 space-y-1 mt-1">
            <li><Link to="/" className="hover:underline">Earning Reports</Link></li>
            <li><Link to="/" className="hover:underline">Inhouse Sales</Link></li>
            <li><Link to="/" className="hover:underline">Verdor Sales</Link></li>
            <li><Link to="/Transactions/Transactions" className="hover:underline">Transaction Report</Link></li>
          </ul>
        )}
      </div>

      <Link
        to="/ProductReport/AllProducts"
        className="flex items-center gap-2 py-2 hover:bg-green-800 w-full px-2 rounded"
      >
        <span className="flex items-center gap-2">
            <FaTicketAlt />
            Product Report
        </span>
      </Link>
      <Link
        to="/OrderReport/OrderReport"
        className="flex items-center gap-2 py-2 hover:bg-green-800 w-full px-2 rounded"
      >
        <span className="flex items-center gap-2">
            <FaTicketAlt />
            Order Report
        </span>
      </Link>

      {/* HELP & SUPPORT */}
      {/* <p className="text-xs text-gray-400 mt-6 uppercase">Blog management</p>
      <button className="flex items-center gap-2 py-2 hover:bg-green-800 w-full px-2 rounded">
        <FaTicketAlt />
        Blog
      </button> */}

      {/* User management */}
      <p className="text-xs text-gray-400 mt-6 uppercase">User management</p>
      <div>
        <button 
        onClick={() => setPagesMedia(!PagesMedia)} 
        className="flex items-center justify-between w-full px-2 py-2 hover:bg-green-800 rounded"
        >
          <span className="flex items-center gap-2">
            <FaDollarSign />
            Customers
          </span>
          {PagesMedia ? <FaChevronDown /> : <FaChevronRight />}
        </button>
        {PagesMedia && (
          <ul className="ml-6 text-sm text-gray-300 space-y-1 mt-1">
            <li><Link to="/Customers/CustomerList" className="hover:underline">Customer List</Link></li>
            <li><Link to="/Customers/CustomerReviews" className="hover:underline">Customer Reviews</Link></li>
            <li><Link to="/Customers/Wallet" className="hover:underline">Wallet</Link></li>
            <li><Link to="/Customers/WalletBonus" className="hover:underline">Wallet Bonus</Link></li>
            <li><Link to="/Customers/LoyaltyPoints" className="hover:underline">Loyalty Points</Link></li>
          </ul>
        )}
      </div>
      <div>
        <button 
        onClick={() => setPagesMedia(!PagesMedia)} 
        className="flex items-center justify-between w-full px-2 py-2 hover:bg-green-800 rounded"
        >
          <span className="flex items-center gap-2">
            <FaDollarSign />
            Vendors
          </span>
          {PagesMedia ? <FaChevronDown /> : <FaChevronRight />}
        </button>
        {PagesMedia && (
          <ul className="ml-6 text-sm text-gray-300 space-y-1 mt-1">
            <li><Link to="/Customers/CustomerList" className="hover:underline">Add New Vendor</Link></li>
            <li><Link to="/Customers/CustomerReviews" className="hover:underline">Vendor List</Link></li>
            <li><Link to="/Customers/Wallet" className="hover:underline">Withdraws</Link></li>
            <li><Link to="/Customers/WalletBonus" className="hover:underline">Withdraws  Methods</Link></li>
          </ul>
        )}
      </div>
      <button className="flex items-center gap-2 py-2 hover:bg-green-800 w-full px-2 rounded">
        <FaTicketAlt />
        Vendors
      </button>
      <button className="flex items-center gap-2 py-2 hover:bg-green-800 w-full px-2 rounded">
        <FaTicketAlt />
        Delivery Men
      </button>
      <button className="flex items-center gap-2 py-2 hover:bg-green-800 w-full px-2 rounded">
        <FaTicketAlt />
        Employees
      </button>
      {/* <button className="flex items-center gap-2 py-2 hover:bg-green-800 w-full px-2 rounded">
        <FaTicketAlt />
        Subscribers
      </button> */}

      {/* Business Settings */}
      <p className="text-xs text-gray-400 mt-6 uppercase">Business Settings</p>
      <Link
        to="/SEOSettings/WebmasterTools"
        className="flex items-center gap-2 py-2 hover:bg-green-800 w-full px-2 rounded"
      >
        <span className="flex items-center gap-2">
            <FaTicketAlt />
            Business Setup
        </span>
      </Link>
      <Link
        to="/InhouseShop/ShopSetting"
        className="flex items-center gap-2 py-2 hover:bg-green-800 w-full px-2 rounded"
      >
        <span className="flex items-center gap-2">
            <FaTicketAlt />
            Inhouse Shop
        </span>
      </Link>
      <Link
        to="/SEOSettings/WebmasterTools"
        className="flex items-center gap-2 py-2 hover:bg-green-800 w-full px-2 rounded"
      >
        <span className="flex items-center gap-2">
            <FaTicketAlt />
            SEO Settings
        </span>
      </Link>
      <Link
        to="/PrioritySetup/PrioritySetup"
        className="flex items-center gap-2 py-2 hover:bg-green-800 w-full px-2 rounded"
      >
        <span className="flex items-center gap-2">
            <FaTicketAlt />
            Priority Setup
        </span>
      </Link>
       <div>
        <button 
        onClick={() => setPagesMedia(!PagesMedia)} 
        className="flex items-center justify-between w-full px-2 py-2 hover:bg-green-800 rounded"
        >
          <span className="flex items-center gap-2">
            <FaDollarSign />
            Pages & Media
          </span>
          {PagesMedia ? <FaChevronDown /> : <FaChevronRight />}
        </button>
        {PagesMedia && (
          <ul className="ml-6 text-sm text-gray-300 space-y-1 mt-1">
            <li><Link to="/Pages&Media/PageMediaSetup" className="hover:underline">Bussiness Pages</Link></li>
            <li><Link to="/Pages&Media/SocialMediaLinks" className="hover:underline">Social Media Links</Link></li>
            <li><Link to="/Pages&Media/Voerdor/Header" className="hover:underline">Venor Rogistration</Link></li>
          </ul>
        )}
      </div>
    </div>
  );
}
