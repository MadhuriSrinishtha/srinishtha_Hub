import { useTheme } from '../../context/ThemeContext'
import { useState } from 'react'

const TeamCalendar = () => {
  const { theme } = useTheme()
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  // Sample leave data - you can replace this with your actual data
  const leaveData = {
    '2024-05-11': [{ type: 'Annual', employee: 'Alex' }],
    '2024-05-12': [{ type: 'Annual', employee: 'Alex' }],
    '2024-05-13': [{ type: 'Annual', employee: 'Alex' }],
    '2024-05-16': [{ type: 'Annual', employee: 'You' }],
    '2024-05-17': [{ type: 'Annual', employee: 'You' }],
    '2024-05-18': [{ type: 'Annual', employee: 'You' }],
    '2024-05-19': [{ type: 'Annual', employee: 'You' }],
    '2024-05-20': [{ type: 'Annual', employee: 'You' }, { type: 'Sick', employee: 'Michael' }],
    '2024-05-21': [{ type: 'Annual', employee: 'You' }],
    '2024-05-22': [{ type: 'Annual', employee: 'You' }],
    '2024-05-23': [{ type: 'Annual', employee: 'You' }],
    '2024-05-26': [{ type: 'Sick', employee: 'Sarah' }],
    '2024-05-27': [{ type: 'Sick', employee: 'Sarah' }],
    '2024-05-28': [{ type: 'Sick', employee: 'Sarah' }],
    '2024-05-29': [{ type: 'Sick', employee: 'Sarah' }]
  }

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date) => {
    let day = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    return day === 0 ? 6 : day - 1 // Adjust for Monday start
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

  const getLeaveColor = (employee) => {
    switch(employee) {
      case 'You': return 'bg-blue-100'
      case 'Alex': return 'bg-purple-100'
      case 'Michael': return 'bg-red-100'
      case 'Sarah': return 'bg-blue-100'
      default: return 'bg-gray-100'
    }
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth)
    const firstDay = getFirstDayOfMonth(currentMonth)
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const calendar = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      calendar.push(
        <div key={`empty-${i}`} className={`border ${theme.border} p-4 min-h-[100px]`}>
          <span className="text-gray-400">28</span>
        </div>
      )
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = formatDate(year, month, day)
      const leaves = leaveData[date] || []
      const isToday = day === 29 // Example for highlighting current day

      calendar.push(
        <div
          key={day}
          className={`border ${theme.border} p-4 min-h-[100px] relative ${isToday ? 'border-purple-500 border-2' : ''}`}
        >
          <div className="flex justify-between items-start">
            <span className={theme.text}>{day}</span>
            {leaves.length > 0 && (
              <span className="bg-purple-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {leaves.length}
              </span>
            )}
          </div>
          <div className="mt-2 space-y-1">
            {leaves.map((leave, idx) => (
              <div
                key={idx}
                className={`${getLeaveColor(leave.employee)} p-1 rounded text-sm`}
              >
                {leave.employee}
              </div>
            ))}
          </div>
        </div>
      )
    }

    return calendar
  }

  return (
    <div className={`p-6 ${theme.background}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">📅</span>
          <h2 className={`text-2xl font-semibold ${theme.heading}`}>Team Leave Calendar</h2>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={handlePrevMonth}
            className={`text-2xl ${theme.text}`}
          >
            ‹
          </button>
          <span className={`text-lg font-medium ${theme.heading}`}>
            {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </span>
          <button
            onClick={handleNextMonth}
            className={`text-2xl ${theme.text}`}
          >
            ›
          </button>
          <button className={`ml-4 px-3 py-1 rounded ${theme.primary} text-white`}>
            Today
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-px">
        {days.map(day => (
          <div key={day} className={`p-4 text-sm font-medium ${theme.textSecondary} text-center`}>
            {day}
          </div>
        ))}
        {renderCalendar()}
      </div>
    </div>
  )
}

export default TeamCalendar