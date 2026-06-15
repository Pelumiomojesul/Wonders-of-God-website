import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, ChevronDown, Youtube, Facebook, PlayCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import { MOCK_SERMONS } from '../data/mockData';

const navItems = [
  { name: 'About', path: '/about' },
  { name: 'Sermons', path: '/sermons' },
  { name: 'Events', path: '/events' },
  { name: 'Ministries', path: '/#ministries' },
  { name: 'Give', path: '/give' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showWatchMenu, setShowWatchMenu] = useState(false);
  const [showSermonMenu, setShowSermonMenu] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[1000] flex justify-center transition-all duration-500 pt-4 px-4 ${
          scrolled || isOpen ? '' : 'pointer-events-none'
        }`}
      >
        <div className={`flex items-center justify-between w-full max-w-7xl px-6 transition-all duration-500 pointer-events-auto ${
          scrolled || isOpen 
            ? 'glass-nav py-3' 
            : 'bg-transparent py-6 border-transparent shadow-none'
        }`}>
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <img src="/src/assets/logo.jpg" alt="WOGC Logo" className="w-9 h-9 md:w-10 md:h-10 object-cover rounded-full transform group-hover:rotate-12 transition-transform shadow-md" referrerPolicy="no-referrer" />
            <div className="flex flex-col">
              <span className={`font-display font-bold text-sm md:text-base leading-tight transition-colors duration-300 ${(scrolled || isOpen) ? 'text-brand-navy' : 'text-white'}`}>Wonders Of God</span>
              <span className={`text-[9px] tracking-widest uppercase transition-opacity duration-300 ${(scrolled || isOpen) ? 'text-brand-navy/60' : 'text-white/70'}`}>Lekki</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            {navItems.map((item) => (
              item.name === 'Sermons' ? (
                <div 
                  key={item.path}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setShowSermonMenu(true)}
                  onMouseLeave={() => setShowSermonMenu(false)}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => 
                      `nav-link-apple flex items-center gap-1 text-xs font-bold transition-colors ${
                        isActive 
                          ? 'text-brand-blue bg-brand-blue/5' 
                          : scrolled || isOpen ? 'text-brand-navy hover:text-brand-blue' : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`
                    }
                  >
                    {item.name} <ChevronDown size={12} className={`transition-transform duration-300 ${showSermonMenu ? 'rotate-180' : ''}`} />
                  </NavLink>

                  <AnimatePresence>
                    {showSermonMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[400px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                      >
                        <div className="p-6">
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">Latest Messages</h4>
                            <Link to="/sermons" className="text-xs font-bold text-brand-blue hover:underline">View All</Link>
                          </div>
                          <div className="space-y-4">
                            {MOCK_SERMONS.slice(0, 2).map((sermon) => (
                              <Link 
                                key={sermon.id}
                                to="/sermons" 
                                className="flex gap-4 group/item"
                              >
                                <div className="w-24 h-16 rounded-lg overflow-hidden shrink-0">
                                  <img src={sermon.thumbnail} className="w-full h-full object-cover group-hover/item:scale-110 transition-transform" />
                                </div>
                                <div className="flex flex-col justify-center">
                                  <h5 className="text-sm font-bold text-brand-navy group-hover/item:text-brand-blue transition-colors line-clamp-1">{sermon.title}</h5>
                                  <span className="text-[10px] text-gray-400 font-medium">{sermon.speaker}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 flex gap-4">
                          <div className="flex-1">
                            <span className="text-[10px] font-bold text-gray-400 uppercase block mb-2">Series</span>
                            <div className="flex gap-2">
                               <span className="px-2 py-1 bg-white border border-gray-200 rounded text-[10px] font-bold">Wonders</span>
                               <span className="px-2 py-1 bg-white border border-gray-200 rounded text-[10px] font-bold">Prayer</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => 
                    `nav-link-apple text-xs font-bold transition-colors ${
                      isActive 
                        ? 'text-brand-blue bg-brand-blue/5' 
                        : scrolled || isOpen ? 'text-brand-navy hover:text-brand-blue' : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )
            ))}

            {/* Watch Online Dropdown */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setShowWatchMenu(true)}
              onMouseLeave={() => setShowWatchMenu(false)}
            >
              <button 
                className={`nav-link-apple flex items-center gap-1 text-xs font-bold transition-colors ${
                  scrolled || isOpen ? 'text-brand-navy hover:text-brand-blue' : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                Watch <ChevronDown size={12} className={`transition-transform duration-300 ${showWatchMenu ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {showWatchMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-white/90 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 overflow-hidden py-2"
                  >
                    <a 
                      href="https://www.youtube.com/@WOGCMedia" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 text-xs font-bold text-gray-700 hover:bg-brand-bg transition-colors"
                    >
                      <Youtube size={16} className="text-red-600" />
                      <span>YouTube Live</span>
                    </a>
                    {user && (
                      <Link 
                        to="/dashboard/watch"
                        className="flex items-center gap-3 px-4 py-3 text-xs font-bold text-gray-700 hover:bg-brand-bg transition-colors border-t border-gray-50"
                      >
                        <PlayCircle size={16} className="text-brand-blue" />
                        <span>Member Portal</span>
                      </Link>
                    )}
                    <a 
                      href="https://www.facebook.com/wogclekki/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 text-xs font-bold text-gray-700 hover:bg-brand-bg transition-colors border-t border-gray-50"
                    >
                      <Facebook size={16} className="text-blue-600" />
                      <span>Facebook Live</span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to={user ? "/dashboard" : "/login"}
              className={`nav-link-apple text-xs font-bold transition-colors ${
                scrolled || isOpen ? 'text-brand-navy hover:text-brand-blue' : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {user ? 'Dashboard' : 'Login'}
            </Link>

            <Link 
              to="/visit" 
              className="px-5 py-2 bg-brand-blue text-white rounded-full text-xs font-bold hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-500/20 whitespace-nowrap"
            >
              Visit Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden p-2 rounded-xl transition-all duration-300 z-[1010] ${
              isOpen 
                ? 'bg-brand-bg text-brand-navy shadow-inner' 
                : scrolled 
                  ? 'bg-brand-navy/5 text-brand-navy' 
                  : 'bg-white/10 text-white backdrop-blur-md'
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-brand-navy/40 backdrop-blur-sm z-[1001] md:hidden"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-[85%] max-w-md bg-white z-[1002] shadow-2xl md:hidden overflow-y-auto flex flex-col"
            >
              <div className="flex flex-col p-8 pt-24 gap-2">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4 px-2">Navigation</span>
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => 
                      `flex items-center justify-between p-4 rounded-2xl text-lg font-bold transition-all ${
                        isActive 
                          ? 'bg-brand-blue text-white shadow-lg shadow-blue-500/20 px-6' 
                          : 'text-brand-navy hover:bg-brand-bg'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.name}
                        <ChevronRight size={20} className={isActive ? 'opacity-100' : 'opacity-20'} />
                      </>
                    )}
                  </NavLink>
                ))}

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6 px-2 block">Watch Our Services</span>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <a 
                      href="https://www.youtube.com/@WOGCMedia" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-3 p-6 bg-red-50 rounded-2xl text-red-600 hover:bg-red-100 transition-colors"
                    >
                      <Youtube size={28} />
                      <span className="text-xs font-black uppercase">YouTube</span>
                    </a>
                    <a 
                      href="https://www.facebook.com/wogclekki/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-3 p-6 bg-blue-50 rounded-2xl text-blue-600 hover:bg-blue-100 transition-colors"
                    >
                      <Facebook size={28} />
                      <span className="text-xs font-black uppercase">Facebook</span>
                    </a>
                  </div>

                  {user && (
                    <Link 
                      to="/dashboard/watch"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 p-5 bg-brand-navy text-white rounded-2xl font-bold mb-8 hover:bg-brand-navy/90 transition-colors shadow-xl"
                    >
                      <PlayCircle size={24} className="text-brand-gold" />
                      <div className="flex flex-col">
                        <span className="text-sm">Member Portal</span>
                        <span className="text-[10px] opacity-60 font-medium">Watch Exclusive Content</span>
                      </div>
                    </Link>
                  )}
                </div>

                <div className="mt-auto pt-8 flex flex-col gap-4">
                  <Link 
                    to={user ? "/dashboard" : "/login"} 
                    onClick={() => setIsOpen(false)}
                    className="w-full py-4 px-6 text-center text-lg font-bold text-brand-navy bg-brand-bg rounded-2xl hover:bg-gray-200 transition-colors"
                  >
                    {user ? 'Go to Dashboard' : 'Member Login'}
                  </Link>
                  <Link 
                    to="/visit" 
                    onClick={() => setIsOpen(false)}
                    className="w-full py-5 bg-brand-blue text-white rounded-2xl text-center font-black uppercase tracking-widest text-sm shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition-all"
                  >
                    Plan Your Visit
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
