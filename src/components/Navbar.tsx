import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, ChevronDown, Youtube, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { name: 'About', path: '/about' },
  { name: 'Sermons', path: '/sermons' },
  { name: 'Events', path: '/events' },
  { name: 'Ministries', path: '/ministries' },
  { name: 'Give', path: '/give' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showWatchMenu, setShowWatchMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/src/assets/logo.jpg" alt="WOGC Logo" className="w-12 h-12 object-cover rounded-full transform group-hover:rotate-12 transition-transform shadow-md" referrerPolicy="no-referrer" />
          <div className="flex flex-col">
            <span className={`font-display font-bold text-sm md:text-lg leading-none ${scrolled ? 'text-brand-navy' : 'text-white'}`}>Wonders Of God Church</span>
            <span className={`text-[10px] tracking-widest uppercase opacity-70 ${scrolled ? 'text-brand-navy' : 'text-white'}`}>Lekki</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-brand-blue ${
                  isActive 
                    ? 'text-brand-blue' 
                    : scrolled ? 'text-gray-600' : 'text-white/90'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Watch Online Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setShowWatchMenu(true)}
            onMouseLeave={() => setShowWatchMenu(false)}
          >
            <button 
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-blue ${
                scrolled ? 'text-gray-600' : 'text-white/90'
              }`}
            >
              Watch Online <ChevronDown size={14} className={`transition-transform duration-300 ${showWatchMenu ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {showWatchMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2"
                >
                  <a 
                    href="https://www.youtube.com/@WOGCMedia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-brand-bg transition-colors"
                  >
                    <Youtube size={18} className="text-red-600" />
                    <span>YouTube Live</span>
                  </a>
                  <a 
                    href="https://www.facebook.com/wogclekki/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-brand-bg transition-colors"
                  >
                    <Facebook size={18} className="text-blue-600" />
                    <span>Facebook Live</span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            to="/login"
            className={`text-sm font-medium transition-colors hover:text-brand-blue ${
              scrolled ? 'text-gray-600' : 'text-white/90'
            }`}
          >
            Login
          </Link>

          <Link 
            to="/visit" 
            className="px-6 py-2.5 bg-brand-blue text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-500/20"
          >
            Plan Your Visit
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-brand-navy' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => 
                    `flex items-center justify-between py-3 text-lg font-medium ${
                      isActive ? 'text-brand-blue' : 'text-gray-900'
                    }`
                  }
                >
                  {item.name}
                  <ChevronRight size={18} className="opacity-30" />
                </NavLink>
              ))}

              <div className="py-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 block">Watch Live</span>
                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href="https://www.youtube.com/@WOGCMedia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 bg-red-50 rounded-xl text-red-600"
                  >
                    <Youtube size={24} />
                    <span className="text-xs font-bold">YouTube</span>
                  </a>
                  <a 
                    href="https://www.facebook.com/wogclekki/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 bg-blue-50 rounded-xl text-blue-600"
                  >
                    <Facebook size={24} />
                    <span className="text-xs font-bold">Facebook</span>
                  </a>
                </div>
              </div>
              <Link 
                to="/visit" 
                className="mt-4 w-full py-4 bg-brand-blue text-white rounded-xl text-center font-bold"
              >
                Plan Your Visit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
