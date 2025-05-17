import { useState } from 'react'
import { FaEye, FaTrash } from 'react-icons/fa'
import CustomTable from '../../components/CustomTable'
import { useTheme } from '../../context/ThemeContext'

const LeaveHistory = () => {
  const { theme } = useTheme()
  const [leaveData, setLeaveData] = useState([
    {
      id: 1,
      date: '2024-01-15',
      type: 'Annual',
      duration: '2 days',
      status: { text: 'Pending', status: 'Pending' },
      reason: 'Family vacation'
    },
    {
      id: 2,
      date: '2024-01-10',
      type: 'Sick',
      duration: '1 day',
      status: { text: 'Approved', status: 'Approved' },
      reason: 'Medical appointment'
    }
  ])

  const [selectedLeave, setSelectedLeave] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const handleView = (leave) => {
    setSelectedLeave(leave)
    setShowModal(true)
  }

  const handleDelete = (id) => {
    setLeaveData(leaveData.filter(leave => leave.id !== id))
  }

  const headers = ['Date', 'Type', 'Duration', 'Status']

  const renderActions = (row) => (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => handleView(row)}
        className={`flex items-center space-x-1 ${theme.primary} ${theme.buttonText} px-3 py-2 rounded-lg ${theme.primaryHover} transform hover:scale-105 transition-all duration-200`}
      >
        <FaEye className="w-4 h-4" />
        <span>View</span>
      </button>
      <button
        onClick={() => handleDelete(row.id)}
        className="flex items-center space-x-1 bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-200"
      >
        <FaTrash className="w-4 h-4" />
        <span>Delete</span>
      </button>
    </div>
  )

  return (
    <div className={`p-6 ${theme.background} min-h-screen`}>
      <div className={`${theme.card} rounded-xl shadow-lg border ${theme.border} transform hover:scale-102 transition-all duration-200`}>
        <div className="p-6">
          <h2 className={`text-2xl font-bold ${theme.heading} mb-6`}>
            Leave History
          </h2>
          <CustomTable
            headers={headers}
            data={leaveData}
            actions={renderActions}
          />
        </div>
      </div>

      {showModal && selectedLeave && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`${theme.card} rounded-xl p-6 w-full max-w-md shadow-2xl border ${theme.border} transform transition-all duration-200`}>
            <h3 className={`text-xl font-bold ${theme.heading} mb-6`}>Leave Details</h3>
            <div className="space-y-4">
              {Object.entries(selectedLeave).map(([key, value]) => (
                key !== 'id' && (
                  <p key={key} className="flex justify-between items-center">
                    <span className={`font-medium ${theme.textSecondary}`}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}:
                    </span>
                    <span className={theme.text}>
                      {typeof value === 'object' ? value.text : value}
                    </span>
                  </p>
                )
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className={`${theme.primary} ${theme.buttonText} px-4 py-2 rounded-lg ${theme.primaryHover} transform hover:scale-105 transition-all duration-200`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LeaveHistory