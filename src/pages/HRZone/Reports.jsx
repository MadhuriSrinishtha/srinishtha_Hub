import React from 'react';
import { FaCalendarCheck, FaChartBar, FaClock, FaExclamationCircle, FaCheck } from 'react-icons/fa';

const Reports = () => {
  const leaveStats = {
    totalDays: 20,
    used: 8,
    pending: 2,
    remaining: 10,
    upcomingLeaves: [
      { date: '2024-02-15', type: 'Annual Leave', duration: '1 day' },
      { date: '2024-03-01', type: 'Sick Leave', duration: '2 days' }
    ],
    monthlyStats: [
      { month: 'Jan', count: 2 },
      { month: 'Feb', count: 1 },
      { month: 'Mar', count: 3 },
      { month: 'Apr', count: 2 }
    ]
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Leave Reports</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Leave Days</p>
                <p className="text-2xl font-bold text-gray-900">{leaveStats.totalDays}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <FaCalendarCheck className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Used Leaves</p>
                <p className="text-2xl font-bold text-gray-900">{leaveStats.used}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <FaCheck className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Pending Requests</p>
                <p className="text-2xl font-bold text-gray-900">{leaveStats.pending}</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <FaClock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Remaining Balance</p>
                <p className="text-2xl font-bold text-gray-900">{leaveStats.remaining}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <FaChartBar className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Upcoming Leaves</h3>
            <div className="space-y-4">
              {leaveStats.upcomingLeaves.map((leave, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div>
                    <p className="font-medium text-gray-900">{leave.type}</p>
                    <p className="text-sm text-gray-500">{leave.date}</p>
                  </div>
                  <span className="text-sm font-medium text-gray-600">{leave.duration}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Monthly Distribution</h3>
            <div className="space-y-4">
              {leaveStats.monthlyStats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <span className="w-12 text-sm text-gray-600">{stat.month}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${(stat.count / 5) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-600">{stat.count} days</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;