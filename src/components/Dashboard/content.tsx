import Options from './list/option'
import Total from './list/total';
import List from './list/list';
import Wallet from '../wallet/wallet';
import OrderStatic from './orderStatic/orderStatic';
import Footer from '../Footer/Footer';

export default function Dashboard() {
    return (
    <div className="contents">
      
      <h1 className="text-2xl font-bold">Welcome Donlawat</h1>
      <p className="mt-1 text-gray-500">Monitor your business analytics and statistics</p>
      < Options />
      < Total />
      < List />
      < Wallet />
      <div className='mt-6'>
        <OrderStatic />
      </div>
      <Footer />
    </div>
  );
}