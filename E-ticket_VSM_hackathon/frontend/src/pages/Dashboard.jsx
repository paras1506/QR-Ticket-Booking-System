import React, { useEffect, useState } from 'react';
import { Line, Bar, Pie, Radar } from 'react-chartjs-2';
import visitorData from './visitorData';
import { Chart as ChartJS, RadialLinearScale, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, Filler } from 'chart.js';

// Register necessary components
ChartJS.register(
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
);

const Dashboard = () => {
  const [chartData, setChartData] = useState({});
  const [selectedMonth, setSelectedMonth] = useState(null); // State to hold the selected month

  useEffect(() => {
    const dates = visitorData.map(item => item.Date);
    const visitors = visitorData.map(item => item['No. of Visitors']);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthlyVisitors = new Array(12).fill(0);

    dates.forEach((date, index) => {
      const month = new Date(date).getMonth();
      monthlyVisitors[month] += visitors[index];
    });

    // Create the daily data structure for each month
    const monthlyData = months.map((month, index) => {
      const filteredData = visitorData.filter(item => new Date(item.Date).getMonth() === index);
      return {
        month: month,
        dailyVisitors: filteredData.map(item => item['No. of Visitors']),
        days: filteredData.map(item => item.Date),
      };
    });

    const specialDays = visitorData.reduce((acc, item) => {
      if (item['Special Day'] && item['Special Day'] !== 'None') {
        acc.push(item['Special Day']);
      }
      return acc;
    }, []);

    const uniqueSpecialDays = [...new Set(specialDays)];
    const specialDayVisitors = uniqueSpecialDays.map(day =>
      visitorData
        .filter(item => item['Special Day'] === day)
        .reduce((sum, item) => sum + item['No. of Visitors'], 0)
    );

    setChartData({
      lineChart: {
        labels: selectedMonth ? monthlyData[selectedMonth].days : dates, // Show selected month or all dates
        datasets: [{
          label: 'Visitors per Day',
          data: selectedMonth ? monthlyData[selectedMonth].dailyVisitors : visitors,
          borderColor: '#3B82F6',
          backgroundColor: '#93C5FD',
          fill: false,
          tension: 0.1,
        }],
      },
      barChart: {
        labels: months,
        datasets: [{
          label: 'Visitors by Month',
          data: monthlyVisitors,
          backgroundColor: '#10B981',
          borderColor: '#065F46',
          borderWidth: 1,
        }],
      },
      pieChart: {
        labels: uniqueSpecialDays,
        datasets: [{
          data: specialDayVisitors,
          backgroundColor: ['#F87171', '#FACC15', '#34D399', '#60A5FA'],
        }],
      },
      areaChart: {
        labels: months,
        datasets: [{
          label: 'Cumulative Visitors per Month',
          data: monthlyVisitors.reduce((acc, currentValue, index) => {
            acc.push((acc[index - 1] || 0) + currentValue);
            return acc;
          }, []),
          backgroundColor: '#9333EA',
          fill: true,
        }],
      },
      radarChart: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
          label: 'Weekly Visitors',
          data: [50, 60, 70, 40, 90, 100, 120],
          borderColor: '#F59E0B',
          backgroundColor: '#FEF08A',
          borderWidth: 1,
        }],
      },
    });
  }, [selectedMonth]); // Re-run effect when the selectedMonth changes

  const handleMonthChange = (event) => {
    setSelectedMonth(Number(event.target.value)); // Set the selected month
  };

  return (
    <div className="admin-dashboard bg-gray-100 min-h-screen p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Admin Dashboard</h2>


      {chartData.lineChart ? (
        <div className="chart-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Line Chart: Daily Visitors Over Time */}
          <div className="bg-white rounded-lg shadow-lg p-6">
                   {/* Month Selection Dropdown */}
      <div className="mb-4 flex justify-center">
        <select
          value={selectedMonth || ""}
          onChange={handleMonthChange}
          className="p-2 border border-gray-300 rounded-lg"
        >
          <option value="">Select Month</option>
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
            <option key={index} value={index}>{month}</option>
          ))}
        </select>
      </div>

            <h3 className="text-xl font-semibold text-gray-700 mb-4">Line Chart: Daily Visitors Over Time</h3>
            <Line
              data={chartData.lineChart}
              options={{
                responsive: true,
                plugins: { title: { display: true, text: 'Visitor Traffic Over Time' } },
                scales: { x: { title: { display: true, text: 'Date' } }, y: { title: { display: true, text: 'Number of Visitors' } } },
              }}
            />
          </div>

          {/* Bar Chart: Number of Visitors by Month */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Bar Chart: Number of Visitors by Month</h3>
            <Bar
              data={chartData.barChart}
              options={{
                responsive: true,
                plugins: { title: { display: true, text: 'Visitors by Month' } },
                scales: { y: { title: { display: true, text: 'Number of Visitors' } } },
              }}
            />
          </div>

          {/* Pie Chart: Distribution of Visitors on Special Days */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Pie Chart: Distribution of Visitors on Special Days</h3>
            <Pie
              data={chartData.pieChart}
              options={{
                responsive: true,
                plugins: { title: { display: true, text: 'Visitor Distribution on Special Days' } },
              }}
            />
          </div>

          {/* Area Chart: Monthly Visitors with Cumulative Data */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Area Chart: Monthly Visitors with Cumulative Data</h3>
            <Line
              data={chartData.areaChart}
              options={{
                responsive: true,
                plugins: { title: { display: true, text: 'Cumulative Monthly Visitors' } },
                scales: { x: { title: { display: true, text: 'Month' } }, y: { title: { display: true, text: 'Cumulative Visitors' } } },
              }}
            />
          </div>

          {/* Radar Chart: Compare Visitor Counts Across Weekdays */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Radar Chart: Compare Visitor Counts Across Weekdays</h3>
            <Radar
              data={chartData.radarChart}
              options={{
                responsive: true,
                plugins: { title: { display: true, text: 'Visitors Across Weekdays' } },
              }}
            />
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">Loading chart data...</p>
      )}
    </div>
  );
};

export default Dashboard;
