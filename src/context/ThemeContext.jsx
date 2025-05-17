import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  const theme = {
    light: {
      primary: 'bg-purple-600',
      primaryHover: 'hover:bg-purple-700',
      secondary: 'bg-purple-500',
      secondaryHover: 'hover:bg-purple-600',
      background: 'bg-purple-50',
      card: 'bg-white',
      cardHover: 'hover:bg-purple-50',
      text: 'text-gray-900',
      textSecondary: 'text-purple-700',
      border: 'border-purple-200',
      heading: 'text-purple-800',
      buttonText: 'text-white'
    },
    dark: {
      primary: 'bg-purple-500',
      primaryHover: 'hover:bg-purple-600',
      secondary: 'bg-purple-400',
      secondaryHover: 'hover:bg-purple-500',
      background: 'bg-gray-900',
      card: 'bg-gray-800',
      cardHover: 'hover:bg-gray-700',
      text: 'text-gray-100',
      textSecondary: 'text-purple-400',
      border: 'border-purple-900',
      heading: 'text-purple-400',
      buttonText: 'text-white'
    }
  }

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, theme: darkMode ? theme.dark : theme.light }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
}