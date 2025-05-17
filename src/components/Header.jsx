import { useTheme } from '../context/ThemeContext'
import { FaMoon, FaSun } from 'react-icons/fa'

const Header = () => {
  const { darkMode, toggleTheme, theme } = useTheme()

  return (
    <header className={`${theme.card} border-b ${theme.border} shadow-lg`}>
      <div className="flex justify-between items-center h-16 px-6">
        <h1 className={`text-xl font-bold ${theme.heading}`}>Srinishtha Hub</h1>
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full ${theme.primary} ${theme.primaryHover} transform hover:scale-110 transition-all duration-200`}
        >
          {darkMode ? (
            <FaSun className="text-white w-5 h-5" />
          ) : (
            <FaMoon className="text-white w-5 h-5" />
          )}
        </button>
      </div>
    </header>
  )
}

export default Header