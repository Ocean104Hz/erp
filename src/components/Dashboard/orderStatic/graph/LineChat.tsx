import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

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

export default function LineChart({ data, options }) {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          usePointStyle: true,
          color: "#333",
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => `฿${context.parsed.y.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: "rgba(200, 200, 200, 0.2)",
        },
        ticks: {
          color: "#555",
          font: {
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: "rgba(200, 200, 200, 0.2)",
        },
        ticks: {
          color: "#555",
          font: {
            size: 12,
          },
          callback: function (value) {
            return "฿" + value.toLocaleString();
          },
        },
      },
    },
    elements: {
      point: {
        radius: 4,
        hoverRadius: 6,
        backgroundColor: "#fff",
        borderWidth: 2,
      },
      line: {
        borderWidth: 2,
        tension: 0.4, // Smooth curve
      },
    },
  };

  return (
    <div className="w-full h-80 bg-white">
      <Line data={data} options={options || defaultOptions} />
    </div>
  );
}
