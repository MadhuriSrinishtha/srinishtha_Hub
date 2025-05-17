import { useState } from 'react'
import { useTheme } from '../../context/ThemeContext'

const RequestLeave = () => {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    leaveType: '',
    startDate: '',
    endDate: '',
    isHalfDay: false,
    reason: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <div className={`${theme.card} rounded-xl p-6 shadow-lg border ${theme.border} transition-all duration-200`}>
      <h2 className={`text-xl font-semibold mb-6 ${theme.heading}`}>Request Leave</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className={`block text-sm font-medium ${theme.textSecondary} mb-2`}>Leave Type</label>
          <select
            className={`w-full p-2 border ${theme.border} rounded-lg bg-white hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200`}
            value={formData.leaveType}
            onChange={(e) => setFormData({...formData, leaveType: e.target.value})}
            required
          >
            <option value="" disabled>Select Leave Type</option>
            <option value="annual">Annual Leave</option>
            <option value="sick">Sick Leave</option>
            <option value="personal">Personal Leave</option>
            <option value="bereavement">Bereavement Leave</option>
            <option value="parental">Parental Leave</option>
            <option value="unpaid">Unpaid Leave</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={`block text-sm font-medium ${theme.textSecondary} mb-2`}>Start Date</label>
            <input
              type="date"
              className={`w-full p-2 border ${theme.border} rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 ${theme.cardHover}`}
              value={formData.startDate}
              onChange={(e) => setFormData({...formData, startDate: e.target.value})}
              required
            />
          </div>
          <div>
            <label className={`block text-sm font-medium ${theme.textSecondary} mb-2`}>End Date</label>
            <input
              type="date"
              className={`w-full p-2 border ${theme.border} rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 ${theme.cardHover}`}
              value={formData.endDate}
              onChange={(e) => setFormData({...formData, endDate: e.target.value})}
              required
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="halfDay"
            className="h-4 w-4 text-purple-600 rounded focus:ring-purple-500 transition-colors duration-200"
            checked={formData.isHalfDay}
            onChange={(e) => setFormData({...formData, isHalfDay: e.target.checked})}
          />
          <label htmlFor="halfDay" className={`ml-2 text-sm ${theme.text}`}>Half Day Leave</label>
        </div>

        <div>
          <label className={`block text-sm font-medium ${theme.textSecondary} mb-2`}>Reason</label>
          <textarea
            className={`w-full p-2 border ${theme.border} rounded-lg h-32 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 ${theme.cardHover}`}
            value={formData.reason}
            onChange={(e) => setFormData({...formData, reason: e.target.value})}
            placeholder="Please provide a reason for your leave request"
            required
          ></textarea>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className={`px-4 py-2 ${theme.border} border rounded-lg ${theme.cardHover} transform hover:scale-102 transition-all duration-200 ${theme.text}`}
            onClick={() => setFormData({
              leaveType: '',
              startDate: '',
              endDate: '',
              isHalfDay: false,
              reason: ''
            })}
          >
            Clear
          </button>
          <button
            type="submit"
            className={`px-4 py-2 ${theme.primary} ${theme.buttonText} rounded-lg ${theme.primaryHover} transform hover:scale-102 transition-all duration-200`}
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  )
}

export default RequestLeave