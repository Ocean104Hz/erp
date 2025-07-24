import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
      pointRadius?: number;
      pointHoverRadius?: number;
      tension?: number;
    }[];
  };
  options?: any;
}

const LineChart: React.FC<LineChartProps> = ({ data, options }) => {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        labels: {
          usePointStyle: true,
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: 'rgba(200, 200, 200, 0.2)',
        },
        ticks: {
          color: '#555',
        },
        min: 'Jan',
        max: 'Dec',
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      y: {
        grid: {
          display: true,
          color: 'rgba(200, 200, 200, 0.2)',
        },
        ticks: {
          beginAtZero: false,
          stepSize: 1,
          color: '#555',
          // 💡 ส่วนนี้คือการแก้ไข: เพิ่มสัญลักษณ์บาท (฿)
          callback: function(value: string | number) {
            return '฿' + value; // เพิ่มสัญลักษณ์ ฿ นำหน้าค่า
          },
        },
        min: 0,
        max: 100,
      },
    },
    elements: {
      point: {
        radius: 0,
        hoverRadius: 5,
      },
      line: {
        borderWidth: 2,
      },
    },
  };

  return (
    <div className="w-full h-80 bg-white p-4 rounded-lg shadow-md">
      <Line data={data} options={options || defaultOptions} />
    </div>
  );
};

export default LineChart;