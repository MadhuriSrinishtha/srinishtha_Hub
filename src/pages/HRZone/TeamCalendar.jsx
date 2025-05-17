import { useTheme } from '../../context/ThemeContext'
import { useState } from 'react'

const TeamCalendar = () => {
  const { theme } = useTheme()
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  // Sample leave data
  const leaveData = {
    '2024-05-15': { type: 'Annual', employee: 'John Doe' },
    '2024-05-16': { type: 'Annual', employee: 'John Doe' },
    '2024-05-20': { type: 'Sick', employee: 'Jane Smith' },
    '2024-05-25': { type: 'Personal', employee: 'Mike Johnson' }
  }

  // Calendar helper functions remain the same
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const formatDate = (year, month, day) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
  }

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth)
    const firstDay = getFirstDayOfMonth(currentMonth)
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const calendar = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      calendar.push(<div key={`empty-${i}`} className="p-2 md:p-4"></div>)
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = formatDate(year, month, day)
      const hasLeave = leaveData[date]

      calendar.push(
        <div
          key={day}
          className={`p-2 md:p-4 rounded-lg ${theme.cardHover} border ${theme.border} transform hover:scale-105 transition-all duration-200 relative min-h-[80px] md:min-h-[100px]`}
        >
          <span className={`text-sm md:text-base font-bold ${theme.textSecondary}`}>{day}</span>
          {hasLeave && (
            <div className={`mt-1 md:mt-2 text-xs md:text-sm ${theme.text}`}>
              <div className={`px-1 md:px-2 py-0.5 md:py-1 rounded ${hasLeave.type === 'Annual' ? 'bg-blue-100 text-blue-700' : 
                hasLeave.type === 'Sick' ? 'bg-red-100 text-red-700' : 'bg-purple-100 text-purple-700'}`}>
                <div className="truncate text-xs md:text-sm">{hasLeave.employee}</div>
                <div className="font-medium text-xs md:text-sm">{hasLeave.type}</div>
              </div>
            </div>
          )}
        </div>
      )
    }

    return calendar
  }

  return (
    <div className={`p-3 md:p-6 ${theme.background}`}>
      <div className={`${theme.card} rounded-xl shadow-lg border ${theme.border}`}>
        <div className="p-3 md:p-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-6 space-y-3 md:space-y-0">
            <h2 className={`text-xl md:text-2xl font-bold ${theme.heading}`}>Team Calendar</h2>
            <div className="flex items-center space-x-2 md:space-x-4">
              <button
                onClick={handlePrevMonth}
                className={`p-1.5 md:p-2 rounded-lg ${theme.primary} ${theme.buttonText} ${theme.primaryHover}`}
              >
                ←
              </button>
              <span className={`text-base md:text-lg font-semibold ${theme.heading}`}>
                {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </span>
              <button
                onClick={handleNextMonth}
                className={`p-1.5 md:p-2 rounded-lg ${theme.primary} ${theme.buttonText} ${theme.primaryHover}`}
              >
                →
              </button>
            </div>
          </div>

          {/* Calendar header - Days of week */}
          <div className="grid grid-cols-7 gap-1 md:gap-2 mb-2 md:mb-4">
            {days.map(day => (
              <div key={day} className={`text-center text-xs md:text-sm font-semibold ${theme.textSecondary}`}>
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1 md:gap-2">
            {renderCalendar()}
          </div>

          {/* Legend */}
          <div className="mt-4 md:mt-6 flex flex-wrap md:flex-nowrap justify-center md:justify-start space-x-2 md:space-x-4">
            <div className="flex items-center mb-2 md:mb-0">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded bg-blue-100 mr-1 md:mr-2"></div>
              <span className={`text-xs md:text-sm ${theme.text}`}>Annual Leave</span>
            </div>
            <div className="flex items-center mb-2 md:mb-0">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded bg-red-100 mr-1 md:mr-2"></div>
              <span className={`text-xs md:text-sm ${theme.text}`}>Sick Leave</span>
            </div>
            <div className="flex items-center mb-2 md:mb-0">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded bg-purple-100 mr-1 md:mr-2"></div>
              <span className={`text-xs md:text-sm ${theme.text}`}>Personal Leave</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamCalendar