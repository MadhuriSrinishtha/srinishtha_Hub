import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    setIsLoading(true);
    setError('');

    try {
      // Add validation for demo account
      if (email === 'sabina@example.com' && password === 'demo123') {
        localStorage.setItem("isEmployeeLoggedIn", "true");
        localStorage.setItem("employeeLoginTime", new Date().getTime().toString());
        localStorage.setItem("employeeEmail", email);
        setIsAuthenticated(true);

        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
        successMessage.textContent = 'Login successful! Redirecting...';
        document.body.appendChild(successMessage);

        setTimeout(() => {
          navigate('/hr-zone');
          document.body.removeChild(successMessage);
        }, 2000);
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96 space-y-8 transform hover:scale-105 transition-all duration-300">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-indigo-700 mb-2">Welcome Back</h1>
          <p className="text-indigo-500">Please sign in to continue</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-indigo-700 placeholder-indigo-300"
              disabled={isLoading}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-indigo-700 placeholder-indigo-300"
              disabled={isLoading}
            />
          </div>

          {error && (
            <p className="text-rose-600 text-sm text-center bg-red-50 py-2 rounded-lg">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 transform hover:-translate-y-1 flex items-center justify-center shadow-lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span className="text-white">Signing in...</span>
              </span>
            ) : (
              'Sign In'
            )}
          </button>

          <div className="text-center">
            <p className="text-indigo-600 font-medium">Demo Account:</p>
            <p className="text-sm text-indigo-500">Email: sabina@example.com</p>
            <p className="text-sm text-indigo-500">Password: demo123</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;