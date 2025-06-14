import { useNavigate } from 'react-router-dom';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';

const Header = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const userName = localStorage.getItem('employeeEmail')?.split('@')[0] || 'User';

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <div className="flex flex-col w-full">
      <div className="bg-white shadow-xl p-8 flex justify-between items-center h-24 transition-all duration-500 ease-in-out hover:shadow-2xl">
        <div className="flex items-center space-x-6">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2534/2534327.png" 

            alt="HR Logo" 
            className="h-16 w-16 transform hover:scale-110 transition-transform duration-300 hover:rotate-3" 
          />
          <span className="font-bold text-3xl text-gray-900 tracking-tight hover:text-blue-600 transition-colors duration-300">HUB.Srinishtha</span>
        </div>
        <div className="flex items-center space-x-10">
          <div className="flex items-center space-x-4 group">
            <div className="bg-blue-100 rounded-full p-3.5 shadow-md group-hover:bg-blue-200 transition-all duration-300">
              <FaUser className="h-7 w-7 text-blue-600 group-hover:text-blue-700" />
            </div>
            <span className="font-semibold text-gray-900 text-xl group-hover:text-blue-600 transition-colors duration-300">{userName}</span>
          </div>
          <button 
            onClick={handleLogout} 
            className="bg-red-50 text-red-600 hover:bg-red-100 px-6 py-3 rounded-xl flex items-center space-x-3 transition-all duration-300 ease-in-out hover:shadow-lg transform hover:-translate-y-1 hover:scale-105"
          >
            <FaSignOutAlt className="h-6 w-6" />
            <span className="font-medium text-lg">Logout</span>
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white py-16 px-10 shadow-inner transition-all duration-500">
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide animate-fade-in hover:scale-105 transform transition-transform duration-300">
          Welcome, {userName}!
        </h1>
        <p className="text-white/90 text-xl font-medium hover:text-white transition-colors duration-300">
          Effortlessly manage your leave requests and reports
        </p>
      </div>
    </div>
  );
};

export default Header;