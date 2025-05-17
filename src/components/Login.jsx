import { useTheme } from '../context/ThemeContext'

const Login = () => {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen ${theme.background} flex items-center justify-center p-6`}>
      <div className={`${theme.card} p-8 rounded-xl shadow-2xl border ${theme.border} w-full max-w-md transform transition-all duration-200 hover:scale-105`}>
        <h2 className={`text-2xl font-bold ${theme.heading} mb-6 text-center`}>Welcome Back</h2>
        <form className="space-y-6">
          <div>
            <label className={`block text-sm font-medium ${theme.textSecondary} mb-2`}>Email</label>
            <input
              type="email"
              className={`w-full px-4 py-3 rounded-lg border ${theme.border} focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${theme.cardHover}`}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className={`block text-sm font-medium ${theme.textSecondary} mb-2`}>Password</label>
            <input
              type="password"
              className={`w-full px-4 py-3 rounded-lg border ${theme.border} focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${theme.cardHover}`}
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className={`w-full ${theme.primary} ${theme.buttonText} py-3 rounded-lg ${theme.primaryHover} transform hover:scale-105 transition-all duration-200 font-medium shadow-lg`}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login