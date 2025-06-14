import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const Sidebar = () => {
  const { theme } = useTheme()

  const menuItems = [
    { path: '/hr-zone', label: 'HR Zone' },
    
  ]

  return (
    <div className={`w-64 h-screen fixed left-0 ${theme.card} border-r ${theme.border} shadow-lg`}>
      <div className="p-6">
        <h1 className={`text-2xl font-bold ${theme.heading} mb-8`}>Srinishtha Hub</h1>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-2 rounded-lg hover:bg-purple-100 ${theme.text}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Sidebar