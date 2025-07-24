// src/pages/Index.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Barnav from '../components/Barnav';
// import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Pos from '../components/Pos';
import Dashboard from '../components/Dashboard/content';
import Category from '../components/Category/Catrgory';
import Allorder from '../components/Orders/Allorder';
import Pending from '../components/Orders/Pending';
import Confirmed from '../components/Orders/Confirmed';
import Packaging from '../components/Orders/Packaging';
import OutFotDelivery from '../components/Orders/OutFotDeilvery';
import Delivered from '../components/Orders/Delivered';
import Returned from '../components/Orders/Returned';
import FailedToDeliver from '../components/Orders/FailedToDeliver';
import Canceled from '../components/Orders/Canceled';
import ProductGallery from '../components/ProductGallery/ProductGallery';
import Approved from '../components/Refund/Appproved';
import Pending2 from '../components/Refund/Pending';
import Refunded from '../components/Refund/Refunded';
import Rejected from '../components/Refund/Rejected';

import ProductList from '../components/InHouseProducts/ProductList';


// import NotFound from './NotFound';

export default function Index() {
  return (
    <Router>
      <div className="flex">
        {/* <Navbar /> */}
        <Barnav />
        <div className="flex-1 bg-gray-100 p-6 overflow-y-auto h-screen">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/pos" element={<Pos />} />
            <Route path="/" element={<Allorder />} />
            <Route path="/pending" element={<Pending />} />
            <Route path="/confirmed" element={<Confirmed />} />
            <Route path="/packaging" element={<Packaging />} />
            <Route path="/out-for-delivery" element={<OutFotDelivery />} />
            <Route path="/delivered" element={<Delivered />} />
            <Route path="/returned" element={<Returned />} />
            <Route path="/failed-to-deliver" element={<FailedToDeliver />} />
            <Route path="/canceled" element={<Canceled />} />
            <Route path="/refunds/pending" element={<Pending2 />} />
            <Route path="/refunds/approved" element={<Approved />} />
            <Route path="/refunds/refunded" element={<Refunded />} /> 
            <Route path="/refunds/rejected" element={<Rejected />} /> 
            <Route path="/InHouseProducts/ProductList" element={<ProductList />} /> 
            <Route path="/Dashboard/content" element={<Dashboard />} />
            <Route path="/Category/Catrgory" element={<Category />} />
            <Route path="/ProductGallery/ProductGallery" element={<ProductGallery />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}
