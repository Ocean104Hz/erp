import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaChevronDown, FaChevronRight, FaHome, FaCashRegister, FaShoppingCart, FaDollarSign, FaTicketAlt } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";

export default function Barnav() {
  const [openSections, setOpenSections] = useState({
    orders: false,
    refunds: false,
    offers: false,
    notifications: false,
    reports: false,
    products: false,
    support: false,
    transactions: false,
    pagesMedia: false,
    vendors: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const menuItems = [
    {
      label: "Dashboard",
      icon: <FaHome />,
      path: "/Dashboard/content",
    },
    {
      label: "POS",
      icon: <FaCashRegister />,
      path: "/pos",
    },
    {
      label: "Orders",
      icon: <FaShoppingCart />,
      section: "orders",
      subMenu: [
        { label: "All", path: "/" },
        { label: "Pending", path: "/pending" },
        { label: "Confirmed", path: "/confirmed" },
        { label: "Packaging", path: "/packaging" },
        { label: "Out for Delivery", path: "/out-for-delivery" },
        { label: "Delivered", path: "/delivered" },
        { label: "Returned", path: "/returned" },
        { label: "Failed to Deliver", path: "/failed-to-deliver" },
        { label: "Canceled", path: "/canceled" },
      ],
    },
    {
      label: "Refund Requests",
      icon: <FaDollarSign />,
      section: "refunds",
      subMenu: [
        { label: "Pending", path: "/refunds/pending" },
        { label: "Approved", path: "/refunds/approved" },
        { label: "Refunded", path: "/refunds/refunded" },
        { label: "Rejected", path: "/refunds/rejected" },
      ],
    },
    {
      label: "Category Setup",
      icon: <MdLocalOffer />,
      section: "offers",
      subMenu: [{ label: "Categories", path: "/Category/Catrgory" }],
    },
    {
      label: "Brands",
      icon: <MdLocalOffer />,
      section: "notifications",
      subMenu: [
        { label: "Add new", path: "/BrandSetup/BrandSetup" },
        { label: "List", path: "/BrandSetup/BrandList" },
      ],
    },
    {
      label: "Product Attribute Setup",
      icon: <FaTicketAlt />,
      path: "/ProductAttributeSetup/AttributeSwtup",
    },
    {
      label: "In House Products",
      icon: <MdLocalOffer />,
      section: "reports",
      subMenu: [
        { label: "Product List", path: "/InHouseProducts/ProductList" },
        // { label: "Add New Products", path: "/InHouseProducts/AddNewProduct" },
        { label: "Bulk import", path: "/InHouseProducts/Bulkimport" },
        { label: "Request Restock List", path: "/InHouseProducts/RequestRestockList" },
      ],
    },
    {
      label: "Vendor Products",
      icon: <MdLocalOffer />,
      section: "products",
      subMenu: [
        { label: "Vendor Product List", path: "/VendorProducts/NewProductsPequsts" },
        { label: "Approved Products", path: "/VendorProducts/DeniedProducts" },
        { label: "Denied Product", path: "/VendorProducts/ApprovedProducts" },
      ],
    },
    {
      label: "Product gallery",
      icon: <FaTicketAlt />,
      path: "/ProductGallery/ProductGallery",
    },
    {
      label: "Offers & Deals",
      icon: <MdLocalOffer />,
      section: "offers",
      subMenu: [
        { label: "Coupon", path: "/OffersDeals/Coupon" },
        { label: "Flash Deals", path: "/OffersDeals/Flash" },
        { label: "Deal of the day", path: "/OffersDeals/Dealoftheday" },
        { label: "Featured Deal", path: "/OffersDeals/Featrured" },
        { label: "Clearance Sale", path: "/OffersDeals/Clearance" },
      ],
    },
    {
      label: "Sales & Transaction Report",
      icon: <FaDollarSign />,
      section: "transactions",
      subMenu: [
        { label: "Earning Reports", path: "/Transaction/SalesTransaction/EarningReports" },
        { label: "Inhouse Sales", path: "/Transaction/SalesTransaction/InhouseSales" },
        { label: "Verdor Sales", path: "/Transaction/SalesTransaction/VerdorSales" },
        { label: "Transaction Report", path: "/Transactions/Transactions" },
      ],
    },
    {
      label: "Product Report",
      icon: <FaTicketAlt />,
      path: "/ProductReport/AllProducts",
    },
    {
      label: "Order Report",
      icon: <FaTicketAlt />,
      path: "/OrderReport/OrderReport",
    },
    {
      label: "Business Setup",
      icon: <FaTicketAlt />,
      path: "/BusinessSetup/BusinessSetup",
    },
    {
      label: "Inhouse Shop",
      icon: <FaTicketAlt />,
      path: "/InhouseShop/ShopSetting",
    },
    {
      label: "SEO Settings",
      icon: <FaTicketAlt />,
      path: "/SEOSettings/WebmasterTools",
    },
    {
      label: "Priority Setup",
      icon: <FaTicketAlt />,
      path: "/PrioritySetup/PrioritySetup",
    },
    {
      label: "Pages & Media",
      icon: <FaDollarSign />,
      section: "pagesMedia",
      subMenu: [
        { label: "Bussiness Pages", path: "/Pages&Media/PageMediaSetup" },
        { label: "Social Media Links", path: "/Pages&Media/SocialMediaLinks" },
        { label: "Vendor Rogistration", path: "/Pages&Media/Voerdor/Header" },
      ],
    },
  ];

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

      {/* Menu Items */}
      {menuItems.map((item, index) => (
        <div key={index}>
          {/* For link-based items */}
          {item.path && (
            <Link
              to={item.path}
              className="flex items-center gap-2 py-2 hover:bg-green-800 w-full px-2 rounded"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          )}

          {/* For items with submenus */}
          {item.section && (
            <div>
              <button
                onClick={() => toggleSection(item.section)}
                className="flex items-center justify-between w-full px-2 py-2 hover:bg-green-800 rounded"
              >
                <span className="flex items-center gap-2">{item.icon} {item.label}</span>
                {openSections[item.section] ? <FaChevronDown /> : <FaChevronRight />}
              </button>
              {openSections[item.section] && (
                <ul className="ml-6 text-sm text-gray-300 space-y-1 mt-1">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link to={subItem.path} className="hover:underline">
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
