import { FaClipboardList, FaCalendarAlt, FaFileAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HRZone = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: FaFileAlt, label: 'Request Leave', path: '/hr-zone/request-leave' },
    { icon: FaClipboardList, label: 'Leave History', path: '/hr-zone/leave-history' },
    { icon: FaCalendarAlt, label: 'Reports', path: '/hr-zone/reports' }
  ];

  return (
    <div className="container mx-auto px-8 py-12 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center justify-center p-8 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all duration-300 w-full max-w-xs mx-auto shadow-xl transform hover:scale-110 hover:shadow-2xl"
            >
              <Icon className="text-6xl mb-4" />
              <span className="text-xl text-center font-semibold tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HRZone;