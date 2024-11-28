'use client';
import '../globals.css';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LineElement, PointElement, LinearScale, Title, Tooltip);


const foodIntakeData = {
  labels: ['Oct 30', 'Nov 6', 'Nov 13', 'Nov 20', 'Nov 27'],
  datasets: [
    {
      label: 'Average Food Intake (cups)',
      data: [4.3, 4.1, 4.6, 4.8, 4.7], // Example data points
      borderColor: '#00A9FF', // Line color
      backgroundColor: '#CDF5FD', // Fill under line
      tension: 0.4, // Smooth curve
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'top',
    },
  },
  scales: {
    x: {
      title: {
        display: true,
      },
    },
    y: {
      title: {
        display: true,
      },
    },
  },
};

export default function CareLogs() {
  return (
    <div className="p-8">
      <h1 className="H1 pb-4">Care Logs</h1>
      <div className="separator"></div>

      {/* Daily Logs HStack */}
      <div className="flex flex-row justify-start items-start gap-6 py-4">
        {/* VStack */}
        <div className="flex flex-col items-center space-y-2">
          <p className="H2">Daily Log</p>
          <p className="H3">Dec 4, 2024</p>
          <img src="/Lucas.png" alt="Lucas" className="w-32 h-32 object-cover rounded-full" />
          <p className="H2">Lucas</p>
        </div>

        {/* Input VStack */}
        <div className="flex flex-col space-y-2 py-2">
          <label htmlFor="food" className="Body-Caption">Food (cups)</label>
          <input type="number" id="foodInput" name="foodInput" className="Input" placeholder="0" />

          <label htmlFor="exerciseInput" className="Body-Caption">Exercise (min)</label>
          <input type="number" id="exerciseInput" name="exerciseInput" className="Input" placeholder="0" />

          <label htmlFor="weightInput" className="Body-Caption">Weight (kg)</label>
          <input type="number" id="weightInput" name="weightInput" className="Input" placeholder="0" />
        </div>
      </div>

      <button className="Primary-Button">Record</button>

      <div className="separator mt-6 mb-4"></div>

      <p className="H2">Metrics</p>

      {/* Food Intake */}
      <div class="flex items-center gap-4 mt-4">
        <img src="/pet-food.png" alt="Food-Intake" className="w-16 h-16 rounded-md object-cover" />
        <div className="flex flex-col">
          <p className="H3">Food Intake (cups)</p>
          <p className="Body">Lucas eats more for the past 5 weeks</p>
        </div>
      </div>
      <div className="mt-1">
        <Line data={foodIntakeData} options={chartOptions} />
      </div>

    </div>
  );
} 