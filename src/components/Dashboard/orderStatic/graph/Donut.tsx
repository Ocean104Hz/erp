import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface DoughnutChartProps {
  data: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
      borderColor?: string[];
      borderWidth?: number;
    }[];
  };
  centerText?: string;
  options?: any;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data, centerText, options }) => {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%', // Makes it a doughnut chart
    plugins: {
      legend: {
        display: true,
        position: 'bottom' as const, // Place legend below the chart
        labels: {
          usePointStyle: true, // Use colored circles as legend markers
        },
        
      },
      title: {
        display: false, // No title for the chart
      },
      tooltip: {
        enabled: true, // Enable tooltips on hover
      },
    },
  };

  // Custom plugin to add text in the center of the doughnut chart
  const centerTextPlugin = {
    id: 'centerText',
    beforeDraw: (chart: any) => {
      if (centerText) {
        const { width, height, ctx } = chart;
        ctx.restore();

        // Split text into lines if newline character is present
        const lines = centerText.split('\n');

        // Main number (first line)
        ctx.font = `${(height / 114).toFixed(2)}em sans-serif`;
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#333'; // Dark gray color for main text

        const mainText = lines[0];
        const mainTextMetrics = ctx.measureText(mainText);
        const mainTextX = Math.round((width - mainTextMetrics.width) / 2);
        let mainTextY = height / 2; // Initial vertical center

        // Adjust Y position if there's a second line
        if (lines.length > 1) {
          mainTextY -= 10; // Move main text up
        }

        ctx.fillText(mainText, mainTextX, mainTextY);

        // Sub-text (second line)
        if (lines.length > 1) {
          const subText = lines[1];
          ctx.font = `${(height / 160).toFixed(2)}em sans-serif`;
          ctx.fillStyle = '#777'; // Lighter gray for sub-text
          const subTextMetrics = ctx.measureText(subText);
          const subTextX = Math.round((width - subTextMetrics.width) / 2);
          const subTextY = height / 2 + 10; // Move sub-text down

          ctx.fillText(subText, subTextX, subTextY);
        }
        ctx.save();
      }
    },
  };

  // Register the custom plugin globally for ChartJS
  ChartJS.register(centerTextPlugin);

  return (
    <div className="h-80 bg-white rounded-lg shadow-md p-4">
      <Doughnut data={data} options={options || defaultOptions} />
    </div>
  );
};

export default DoughnutChart;