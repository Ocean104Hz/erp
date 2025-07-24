import { FcStatistics } from "react-icons/fc";
import LineChart from "./graph/LineChat";
import Donut from "./graph/Donut";

export default function OrderStatic(){
    const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Inhouse',
        data: [50, 60, 30, 40, 82.5, 55, 16, 20, 25, 45, 80, 83.5], // Data points at 80 for all months
        borderColor: '#1e90ff', // Dodger Blue for "Inhouse"
        backgroundColor: '#1e90ff', // Dodger Blue for "Inhouse"
        pointRadius: 0, // Hide points for this dataset
        tension: 0, // Straight line
      },
      {
        label: 'Vendor',
        data: [80, 40, 70, 90, 50, 55, 50, 20, 60, 45, 80, 50], // Data points at 80 for all months
        borderColor: '#28a745', // Green for "Vendor"
        backgroundColor: '#28a745', // Green for "Vendor"
        pointRadius: 0, // Hide points for this dataset
        tension: 0, // Straight line
      },
    ],
  };
  const chartData2 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Inhouse',
        data: [50, 60, 30, 40, 82.5, 55, 16, 20, 25, 45, 80, 83.5], // Data points at 80 for all months
        borderColor: '#1e90ff', // Dodger Blue for "Inhouse"
        backgroundColor: '#1e90ff', // Dodger Blue for "Inhouse"
        pointRadius: 0, // Hide points for this dataset
        tension: 0, // Straight line
      },
      {
        label: 'Vendor',
        data: [80, 40, 70, 90, 50, 55, 50, 20, 60, 45, 80, 50], // Data points at 80 for all months
        borderColor: '#28a745', // Green for "Vendor"
        backgroundColor: '#28a745', // Green for "Vendor"
        pointRadius: 0, // Hide points for this dataset
        tension: 0, // Straight line
      }, {
        label: 'Comiission',
        data: [84, 13, 56, 92, 41, 78, 29, 67, 5, 99, 32, 71], // Data points at 80 for all months
        borderColor: '#a5a728', // Green for "Vendor"
        backgroundColor: '#a5a728', // Green for "Vendor"
        pointRadius: 0, // Hide points for this dataset
        tension: 0, // Straight line
      },
    ],
  };

  const DonutData = {
    labels: ['Total Customer', 'Total Vendor', 'Total Delivery Man'],
    datasets: [
      {
        data: [2, 0, 0], // Your actual data values
        backgroundColor: ['#6dd5ed', '#ffe082', '#3f51b5'], // Colors for each segment
        borderColor: ['#6dd5ed', '#ffe082', '#3f51b5'], // Border color for each segment
        borderWidth: 1, // Border width between segments
      },
    ],
  };
    return (
        <>
        <div className="flex gap-2">
            <div className="w-2/3 h-96">
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <FcStatistics className="text-2xl"/>
                        <p>Order Statistics</p>
                    </div>
                    <div >
                        <button className="p-2 border hover:bg-blue-500 hover:text-white rounded-l-md">This Year</button>
                        <button className="p-2 border hover:bg-blue-500 hover:text-white">This Month</button>
                        <button className="p-2 border hover:bg-blue-500 hover:text-white rounded-r-md">This Week</button>
                    </div>
                </div>
                
                
                <div>
                    <div>
                        <LineChart data={chartData} />
                    </div>
                    
                </div>
                
                
                    
            </div>
            <div className="w-1/3 h-80 ">
                <p className="px-4 pb-5">User Overview</p>
                <div className="h-80 max-w-lg">
                    
                    <Donut data={DonutData} />
                </div>
            </div>
        </div>
            
            <div>
                <div>
                     <LineChart data={chartData2} />
                </div>
            </div>
        </>
    )
}