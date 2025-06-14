import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaCheck, FaTimes, FaClock } from 'react-icons/fa';

const LeaveHistory = () => {
  const [leaveHistory, setLeaveHistory] = useState([
    {
      id: 1,
      startDate: '2024-01-15',
      endDate: '2024-01-16',
      type: 'Annual Leave',
      duration: '2 days',
      status: 'Approved',
      reason: 'Personal time off',
      approvedBy: 'John Manager',
      approvedOn: '2024-01-10'
    },
    {
      id: 2,
      startDate: '2024-02-01',
      endDate: '2024-02-01',
      type: 'Sick Leave',
      duration: '1 day',
      status: 'Pending',
      reason: 'Medical appointment',
      approvedBy: null,
      approvedOn: null
    }
  ]);

  const [expandedId, setExpandedId] = useState(null);
  const [filter, setFilter] = useState('all');

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'approved': return <FaCheck className="w-4 h-4" />;
      case 'pending': return <FaClock className="w-4 h-4" />;
      case 'rejected': return <FaTimes className="w-4 h-4" />;
      default: return null;
    }
  };

  const filteredHistory = leaveHistory.filter(leave => {
    if (filter === 'all') return true;
    return leave.status.toLowerCase() === filter.toLowerCase();
  });

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Leave History</h2>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Requests</option>
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <div className="space-y-4">
          {filteredHistory.map((leave) => (
            <div key={leave.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                   onClick={() => setExpandedId(expandedId === leave.id ? null : leave.id)}>
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-900">{leave.type}</span>
                    <span className="text-sm text-gray-500">
                      {leave.startDate === leave.endDate
                        ? leave.startDate
                        : `${leave.startDate} - ${leave.endDate}`
                      }
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">{leave.duration}</span>
                  <div className={`px-3 py-1 rounded-full flex items-center space-x-1 ${getStatusColor(leave.status)}`}>
                    {getStatusIcon(leave.status)}
                    <span>{leave.status}</span>
                  </div>
                  <FaChevronDown className={`w-4 h-4 text-gray-400 transform transition-transform ${expandedId === leave.id ? 'rotate-180' : ''}`} />
                </div>
              </div>
              {expandedId === leave.id && (
                <div className="px-4 pb-4 border-t border-gray-100">
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Reason:</p>
                      <p className="font-medium">{leave.reason}</p>
                    </div>
                    {leave.status === 'Approved' && (
                      <>
                        <div>
                          <p className="text-gray-600">Approved By:</p>
                          <p className="font-medium">{leave.approvedBy}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Approved On:</p>
                          <p className="font-medium">{leave.approvedOn}</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaveHistory;