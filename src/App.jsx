import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './pages/Dashboard'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import HRZone from './pages/HRZone'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route
              path="/dashboard"
              element={
                <div className="flex">
                  <Sidebar />
                  <div className="flex-1 ml-64">
                    <Header />
                    <Dashboard />
                  </div>
                </div>
              }
            />
            <Route
              path="/hr-zone/*"
              element={
                <div className="flex">
                  <Sidebar />
                  <div className="flex-1 ml-64">
                    <Header />
                    <HRZone />
                  </div>
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
