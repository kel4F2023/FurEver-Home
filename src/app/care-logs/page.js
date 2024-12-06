'use client';
import '../globals.css';
import React, { useState } from 'react';
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
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

ChartJS.register(CategoryScale, LineElement, PointElement, LinearScale, Title, Tooltip);

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
  // State for data arrays
  const [foodData, setFoodData] = useState([4.3, 4.1, 4.6, 4.8, 4.7]);
  const [exerciseData, setExerciseData] = useState([110, 100, 105, 95, 97]);
  const [weightData, setWeightData] = useState([17.8, 18.4, 18.2, 18.6, 18.7]);
  const [labels, setLabels] = useState(['Oct 30', 'Nov 6', 'Nov 13', 'Nov 20', 'Nov 27']);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [areInputsDisabled, setAreInputsDisabled] = useState(false);

  const handleRecord = () => {
    // Get input values
    const foodInput = parseFloat(document.getElementById('foodInput').value);
    const exerciseInput = parseFloat(document.getElementById('exerciseInput').value);
    const weightInput = parseFloat(document.getElementById('weightInput').value);

    if (!isNaN(foodInput)) setFoodData((prev) => [...prev, foodInput]);
    if (!isNaN(exerciseInput)) setExerciseData((prev) => [...prev, exerciseInput]);
    if (!isNaN(weightInput)) setWeightData((prev) => [...prev, weightInput]);
    setLabels((prev) => [...prev, 'Dec 6']);

    setIsButtonVisible(false);
    setAreInputsDisabled(true);
  };

  const foodIntakeChartData = {
    labels: labels,
    datasets: [
      {
        label: 'Average Food Intake (cups)',
        data: foodData,
        borderColor: '#00A9FF', // Line color
        backgroundColor: '#CDF5FD', // Fill under line
        tension: 0.4,
      },
    ],
  };

  const exerciseChartData = {
    labels: labels,
    datasets: [
      {
        label: 'Average exercise (min)',
        data: exerciseData,
        borderColor: '#00A9FF', // Line color
        backgroundColor: '#CDF5FD', // Fill under line
        tension: 0.4,
      },
    ],
  };

  const weightChartData = {
    labels: labels,
    datasets: [
      {
        label: 'Average weight (kg)',
        data: weightData,
        borderColor: '#00A9FF', // Line color
        backgroundColor: '#CDF5FD', // Fill under line
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="p-8 pb-20">
      <h1 className="H1 pb-4">Care Logs</h1>
      <div className="separator"></div>

      <AnimatePresence>
        {/* Recommendations Section */}
        {!isButtonVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} // Start invisible with height 0
            animate={{ opacity: 1, height: 'auto' }} // Expand to fit content
            exit={{ opacity: 0, height: 0 }} // Collapse back to height 0
            transition={{ duration: 0.5, ease: 'easeInOut' }} // Smooth transition
            className="overflow-hidden" // Prevent content overflow during animation
          >
            <div>
              <h2 className="H2 mt-4">Recommendations</h2>
              <div className="mt-4 flex flex-col space-y-4">
                <div className="flex items-center gap-4">
                  <img src="/footprint.png" alt="Recommendation 1" className="w-8 h-8 rounded-md object-cover" />
                  <p className="H3">Exercise more often with longer durations</p>
                </div>

                <div className="flex items-center gap-4">
                  <img src="/footprint.png" alt="Recommendation 2" className="w-8 h-8 rounded-md object-cover" />
                  <p className="H3">Try some low fat dog food</p>
                </div>

                <div className="flex items-center gap-4">
                  <img src="/footprint.png" alt="Recommendation 3" className="w-8 h-8 rounded-md object-cover" />
                  <p className="H3">Reminder: vaccine shot in 23 days</p>
                </div>
              </div>
              <div className="separator mt-6"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Daily Logs HStack */}
      <div className="flex flex-row justify-start items-start gap-6 py-4">
        {/* VStack */}
        <div className="flex flex-col items-center space-y-2">
          <p className="H2">Daily Log</p>
          <p className="H3">Dec 6, 2024</p>
          <img src="/Lucas.png" alt="Lucas" className="w-32 h-32 object-cover rounded-full" />
          <p className="H2">Lucas</p>
        </div>

        {/* Input VStack */}
        <div className="flex flex-col space-y-2 py-2">
          <label htmlFor="food" className="Body-Caption">Food (cups)</label>
          <input type="number" id="foodInput" name="foodInput" className="Input" placeholder="0" disabled={areInputsDisabled} />

          <label htmlFor="exerciseInput" className="Body-Caption">Exercise (min)</label>
          <input type="number" id="exerciseInput" name="exerciseInput" className="Input" placeholder="0" disabled={areInputsDisabled} />

          <label htmlFor="weightInput" className="Body-Caption">Weight (kg)</label>
          <input type="number" id="weightInput" name="weightInput" className="Input" placeholder="0" disabled={areInputsDisabled} />
        </div>
      </div>

      <AnimatePresence>
        {isButtonVisible && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} // Button starts invisible and slightly above
            animate={{ opacity: 1, y: 0 }} // Button fades in and slides down
            exit={{ opacity: 0, y: -10 }} // Button fades out and slides up
            transition={{ duration: 0.4, ease: 'easeInOut' }} // Smooth animation
          >
            <button className="Primary-Button mb-4" onClick={handleRecord}>
              Record
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="separator mt-2 mb-4"></div>

      <p className="H2">Metrics</p>

      {/* Food Intake */}
      <div className="flex items-center gap-4 mt-4">
        <img src="/pet-food.png" alt="Food-Intake" className="w-16 h-16 rounded-md object-cover" />
        <div className="flex flex-col">
          <p className="H3">Food Intake (cups)</p>
          <p className="Body">Lucas eats more for the past 5 weeks</p>
        </div>
      </div>
      <div className="mt-1">
        <Line data={foodIntakeChartData} options={chartOptions} />
      </div>

      {/* Exercise */}
      <div className="flex items-center gap-4 mt-4">
        <img src="/walk-the-pet.png" alt="Exercise" className="w-16 h-16 rounded-md object-cover" />
        <div className="flex flex-col">
          <p className="H3">Exercise (min)</p>
          <p className="Body">Lucas exercises less for the past 5 weeks</p>
        </div>
      </div>
      <div className="mt-1">
        <Line data={exerciseChartData} options={chartOptions} />
      </div>

      {/* Weight */}
      <div className="flex items-center gap-4 mt-4">
        <img src="/scale.png" alt="Weight" className="w-16 h-16 rounded-md object-cover" />
        <div className="flex flex-col">
          <p className="H3">Weight (kg)</p>
          <p className="Body">Lucas' weight increases for the past 5 weeks</p>
        </div>
      </div>
      <div className="mt-1">
        <Line data={weightChartData} options={chartOptions} />
      </div>

    </div>
  );
} 