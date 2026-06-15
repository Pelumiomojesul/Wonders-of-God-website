import React from 'react';
import { motion } from 'motion/react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  PlayCircle, 
  Library, 
  Heart, 
  LogOut, 
  Bell, 
  Search,
  User as UserIcon,
  Menu,
  X
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const DashboardLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { name: 'Overview', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Sermon Library', path: '/dashboard/library', icon: Library },
    { name: 'Watch Online', path: '/dashboard/watch', icon: PlayCircle },
    { name: 'My Partnership', path: '/dashboard/giving', icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-brand-navy text-white transition-transform duration-300 transform
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-8 flex flex-col h-full">
          <Link to="/" className="flex items-center gap-3 mb-12">
            <img src="/src/assets/logo.jpg" alt="Logo" className="w-10 h-10 rounded-full border border-white/20" referrerPolicy="no-referrer" />
            <span className="font-display font-bold text-lg">WOGC Dashboard</span>
          </Link>

          <nav className="flex-1 space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    flex items-center gap-4 px-6 py-4 rounded-2xl transition-all
                    ${isActive 
                      ? 'bg-brand-blue text-white shadow-lg shadow-blue-500/20' 
                      : 'text-white/60 hover:bg-white/5 hover:text-white'}
                  `}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <item.icon size={20} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="pt-8 border-t border-white/10">
            <button 
              onClick={handleLogout}
              className="flex items-center gap-4 px-6 py-4 w-full text-white/60 hover:text-white transition-colors"
            >
              <LogOut size={20} />
              <span className="font-medium">Sign Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-72 flex flex-col">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-100 h-20 px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button 
              className="p-2 text-gray-400 hover:text-brand-navy md:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div className="relative hidden md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search sermons, series..."
                className="bg-gray-50 border-none rounded-full pl-12 pr-6 py-2.5 w-64 focus:ring-2 focus:ring-brand-blue/20 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-gray-400 hover:text-brand-navy transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-brand-gold rounded-full" />
            </button>
            <div className="flex items-center gap-4 pl-6 border-l border-gray-100">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-brand-navy">{user?.name}</p>
                <p className="text-xs text-gray-500">Member</p>
              </div>
              <div className="w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue">
                <UserIcon size={20} />
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
