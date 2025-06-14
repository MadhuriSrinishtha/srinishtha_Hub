import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import HRZone from './pages/HRZone';
import Login from './pages/Login';
import RequestLeave from './pages/HRZone/RequestLeave';
import LeaveHistory from './pages/HRZone/LeaveHistory';
import Reports from './pages/HRZone/Reports';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Clear any existing authentication on initial load
    localStorage.clear();
    setIsAuthenticated(false);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {isAuthenticated && <Header setIsAuthenticated={setIsAuthenticated} />}
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/hr-zone" replace />
              ) : (
                <Login setIsAuthenticated={setIsAuthenticated} />
              )
            }
          />
          <Route
            path="/hr-zone/*"
            element={
              isAuthenticated ? (
                <Routes>
                  <Route index element={<HRZone />} />
                  <Route path="request-leave" element={<RequestLeave />} />
                  <Route path="leave-history" element={<LeaveHistory />} />
                  <Route path="reports" element={<Reports />} />
                </Routes>
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;