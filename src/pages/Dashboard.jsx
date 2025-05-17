import React from 'react'
import { useTheme } from '../context/ThemeContext'

const Dashboard = () => {
  const { theme } = useTheme()

  return (
    <div className={`p-6 ${theme.background} min-h-screen`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Announcements */}
        <div className={`${theme.card} p-6 rounded-xl shadow-lg border ${theme.border} transform hover:scale-102 transition-all duration-200`}>
          <h2 className={`text-xl font-bold mb-4 ${theme.heading}`}>Recent Announcements</h2>
          <div className="space-y-4">
            <div className={`p-4 rounded-lg ${theme.cardHover} transition-colors duration-200`}>
              <h3 className={`font-medium ${theme.textSecondary}`}>May Company Meeting</h3>
              <p className={theme.text}>Join us for our monthly all-hands meeting on May 15th at 10:00 AM.</p>
              <span className="text-sm text-purple-400">Posted 2 days ago</span>
            </div>
            <div className={`p-4 rounded-lg ${theme.cardHover} transition-colors duration-200`}>
              <h3 className={`font-medium ${theme.textSecondary}`}>New Performance Review Process</h3>
              <p className={theme.text}>HR has released details about our new quarterly performance review process.</p>
              <span className="text-sm text-purple-400">Posted 1 week ago</span>
            </div>
            <div className={`p-4 rounded-lg ${theme.cardHover} transition-colors duration-200`}>
              <h3 className={`font-medium ${theme.textSecondary}`}>Office Updates</h3>
              <p className={theme.text}>The 3rd floor kitchen will be closed for renovations from May 20-25.</p>
              <span className="text-sm text-purple-400">Posted 1 week ago</span>
            </div>
          </div>
        </div>

        {/* Goals Progress */}
        <div className={`${theme.card} p-6 rounded-xl shadow-lg border ${theme.border} transform hover:scale-102 transition-all duration-200`}>
          <h2 className={`text-xl font-bold mb-4 ${theme.heading}`}>Your Goals Progress</h2>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className={`text-sm font-medium ${theme.textSecondary}`}>Q2 Target Completion</span>
              <span className={`text-sm font-medium ${theme.textSecondary}`}>72%</span>
            </div>
            <div className="h-3 bg-purple-100 rounded-full overflow-hidden">
              <div className={`h-3 ${theme.primary} rounded-full transition-all duration-500`} style={{ width: '72%' }}></div>
            </div>
          </div>
        </div>

        {/* Tasks Due This Week */}
        <div className={`${theme.card} p-6 rounded-xl shadow-lg border ${theme.border} transform hover:scale-102 transition-all duration-200`}>
          <h2 className={`text-xl font-bold mb-4 ${theme.heading}`}>Tasks Due This Week</h2>
          <div className="space-y-3">
            <div className={`flex items-center p-3 rounded-lg ${theme.cardHover} transition-colors duration-200`}>
              <input type="checkbox" className="h-4 w-4 text-purple-600 rounded focus:ring-purple-500" />
              <span className={`ml-3 ${theme.text}`}>Submit quarterly report</span>
              <span className="ml-auto text-sm text-purple-400">Due Today</span>
            </div>
            <div className={`flex items-center p-3 rounded-lg ${theme.cardHover} transition-colors duration-200`}>
              <input type="checkbox" className="h-4 w-4 text-purple-600 rounded focus:ring-purple-500" />
              <span className={`ml-3 ${theme.text}`}>Review team performance</span>
              <span className="ml-auto text-sm text-purple-400">Due Tomorrow</span>
            </div>
            <div className={`flex items-center p-3 rounded-lg ${theme.cardHover} transition-colors duration-200`}>
              <input type="checkbox" className="h-4 w-4 text-purple-600 rounded focus:ring-purple-500" />
              <span className={`ml-3 ${theme.text}`}>Update project timeline</span>
              <span className="ml-auto text-sm text-purple-400">Due in 3 days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard