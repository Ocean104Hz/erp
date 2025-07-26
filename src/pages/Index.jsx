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
import Transactions from '../components/Transaction/Transactions';
import ProductList from '../components/InHouseProducts/ProductList';
import Reports from '../components/Transaction/Reports';
import Refund from '../components/Transaction/Refund';
import OrderReport from '../components/OrderReport/OrderReport';
import PageMediaSetup from '../components/Pages&Media/PageMediaSetup';
import FAQPage from '../components/Pages&Media/FAQPage';
import OurCommitments from '../components/Pages&Media/OurCommitments';
import Inbox from '../components/Chatting/Inbox';
import BrandSetup from '../components/BrandSetup/BrandSetup';
import BrandList from '../components/BrandSetup/BrandList';
import SocialMediaLinkSetup from '../components/Pages&Media/SocialMediaLinks';
import Vendor from '../components/Pages&Media/Voerdor/Vendor';
import WhySell from '../components/Pages&Media/Voerdor/WhySell';
import Business from '../components/Pages&Media/Voerdor/Business';
import DownloadApp from '../components/Pages&Media/Voerdor/DownloadApp';
import FAQ from '../components/Pages&Media/Voerdor/FAQ';
import Header2 from '../components/Pages&Media/Voerdor/Header';
import PrioritySetup from '../components/PrioritySetup/PrioritySetup';
import WebmasterTools from '../components/SEOSettings/WebmasterTools';
import Robots from '../components/SEOSettings/Robots';
import Sitemap from '../components/SEOSettings/Sitemap';
import RobotsMeta from '../components/SEOSettings/RobotsMeta';
import Logs from '../components/SEOSettings/Logs';
import ShopSetting  from  '../components/InhouseShop/ShopSetting'
import Others from '../components/InhouseShop/Others'
import ProductReport from '../components/ProductReport/AllProducts'
import ProductStock from '../components/ProductReport/ProductStock'
import WishListed from '../components/ProductReport/WishListed'
import CustomerList from '../components/Customers/CustomerList'
import CustomerReviews from '../components/Customers/CustomerReviews'
import LoyaltyPoints from '../components/Customers/LoyaltyPoints'
import Wallet from '../components/Customers/Wallet'
import WalletBonus from '../components/Customers/WalletBonus'

// import NotFound from './NotFound' WalletBonus;

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
            <Route path="/Transactions/Transactions" element={<Transactions />} />
            <Route path="/Transactions/Reports" element={<Reports />} />
            <Route path="/Transactions/Refund" element={<Refund />} />   
            <Route path="/OrderReport/OrderReport" element={<OrderReport />} />
            <Route path="/Pages&Media/PageMediaSetup" element={<PageMediaSetup />} />
            <Route path="/Pages&Media/FAQPage" element={<FAQPage />} />
            <Route path="/Pages&Media/OurCommitments" element={<OurCommitments />} />
            <Route path="/Chatting/Inbox" element={<Inbox />} />
            <Route path="/BrandSetup/BrandSetup" element={<BrandSetup />} />
            <Route path="/BrandSetup/BrandList" element={<BrandList />} />
            <Route path="/Pages&Media/SocialMediaLinks" element={<SocialMediaLinkSetup />} />
            <Route path="/Pages&Media/Voerdor/Vendor" element={<Vendor />} />
            <Route path="/Pages&Media/Voerdor/WhySell" element={<WhySell />} />
            <Route path="/Pages&Media/Voerdor/Business" element={<Business />} />
            <Route path="/Pages&Media/Voerdor/DownloadApp" element={<DownloadApp />} />
            <Route path="/Pages&Media/Voerdor/FAQ" element={<FAQ />} />
            <Route path="/Pages&Media/Voerdor/Header" element={<Header2 />} />
            <Route path="/PrioritySetup/PrioritySetup" element={<PrioritySetup />} />
            <Route path="/SEOSettings/WebmasterTools" element={<WebmasterTools />} />
            <Route path="/SEOSettings/Robots" element={<Robots />} />
            <Route path='/SEOSettings/Sitemap' element={<Sitemap/>}/>
            <Route path='/SEOSettings/RobotsMeta' element={<RobotsMeta/>}/>
            <Route path='/SEOSettings/Logs' element={<Logs/>}/>
            <Route path='/InhouseShop/ShopSetting' element={<ShopSetting/>}/>
            <Route path='/InhouseShop/Others' element={<Others/>}/>
            <Route path='/ProductReport/AllProducts' element={<ProductReport/>}/>
            <Route path='/ProductReport/ProductStock' element={<ProductStock/>}/>
            <Route path='/ProductReport/WishListed' element={<WishListed/>}/>
            <Route path='/Customers/CustomerList' element={<CustomerList/>}/>
            <Route path='/Customers/CustomerReviews' element={<CustomerReviews/>}/>
            <Route path='/Customers/LoyaltyPoints' element={<LoyaltyPoints/>}/>
            <Route path='/Customers/Wallet' element={<Wallet/>}/>
            <Route path='/Customers/WalletBonus' element={<WalletBonus/>}/>
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}
