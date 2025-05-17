import { useTheme } from '../../context/ThemeContext'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import RequestLeave from './RequestLeave'
import LeaveHistory from './LeaveHistory'
import TeamCalendar from './TeamCalendar'
import Approvals from './Approvals'
import Reports from './Reports'

const HRZone = () => {
  const { theme } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()

  const leaveData = [
    { type: 'Annual Leave', count: 15, color: 'text-purple-600' },
    { type: 'Sick Leave', count: 10, color: 'text-purple-500' },
    { type: 'Personal Leave', count: 5, color: 'text-purple-400' },
    { type: 'Bereavement Leave', count: 5, color: 'text-purple-600' },
    { type: 'Parental Leave', count: 12, color: 'text-purple-500' },
    { type: 'Unpaid Leave', count: 0, color: 'text-purple-400' }
  ]

  const navigationItems = [
    { path: '/hr-zone/request-leave', label: '📝 Request Leave' },
    { path: '/hr-zone/leave-history', label: '📅 Leave History' },
    { path: '/hr-zone/team-calendar', label: '👥 Team Calendar' },
    { path: '/hr-zone/approvals', label: '✓ Approvals' },
    { path: '/hr-zone/reports', label: '📊 Reports' }
  ]

  return (
    <div className={`min-h-screen ${theme.background} p-6`}>
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className={`text-2xl font-bold ${theme.heading} mb-4`}>
            HR Zone
          </h1>
          <p className={`${theme.textSecondary} mb-6`}>
            Manage employee information, recruitment, training, compensation, and more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className={`${index % 2 === 0 ? theme.primary : theme.secondary} ${theme.buttonText} rounded-xl p-4 shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2`}
              >
                <span className="text-lg">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="mb-8">
            <Routes>
              <Route path="/" element={
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {leaveData.map((leave, index) => (
                    <div
                      key={index}
                      className={`${theme.card} rounded-xl p-6 shadow-lg border ${theme.border} transform hover:scale-102 transition-all duration-200`}
                    >
                      <h3 className={`text-lg font-semibold ${theme.textSecondary} mb-2`}>
                        {leave.type}
                      </h3>
                      <p className={`text-3xl font-bold ${leave.color}`}>
                        {leave.count}
                      </p>
                    </div>
                  ))}
                </div>
              } />
              <Route path="request-leave" element={<RequestLeave />} />
              <Route path="leave-history" element={<LeaveHistory />} />
              <Route path="team-calendar" element={<TeamCalendar />} />
              <Route path="approvals" element={<Approvals />} />
              <Route path="reports" element={<Reports />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HRZone