import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const Sidebar = () => {
  const { theme } = useTheme()

  return (
    <div className={`w-64 h-screen fixed left-0 ${theme.card} border-r ${theme.border} shadow-lg`}>
      <div className="p-6">
        <h1 className={`text-2xl font-bold ${theme.heading} mb-8`}>Srinishtha Hub</h1>
        <nav className="space-y-2">
          <Link
            to="/dashboard"
            className={`flex items-center space-x-2 p-3 rounded-lg ${theme.cardHover} ${theme.text} transition-all duration-200 transform hover:scale-105`}
          >
            <span className="text-purple-500">📊</span>
            <span>Dashboard</span>
          </Link>
          <Link
            to="/hr-zone"
            className={`flex items-center space-x-2 p-3 rounded-lg ${theme.cardHover} ${theme.text} transition-all duration-200 transform hover:scale-105`}
          >
            <span className="text-purple-500">👥</span>
            <span>HR Zone</span>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar