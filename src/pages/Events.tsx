import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { MOCK_EVENTS } from '../data/mockData';

export const Events = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    setIsRegistered(true);
    setTimeout(() => setIsRegistered(false), 5000);
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Registration Success Toast */}
      <AnimatePresence>
        {isRegistered && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-white shadow-2xl rounded-2xl px-8 py-6 border border-brand-blue/20 flex items-center gap-4"
          >
            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="font-bold text-brand-navy">Successfully Registered!</p>
              <p className="text-sm text-gray-500">We've sent the details to your email.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Featured Header */}
      <section className="bg-brand-navy py-32 md:py-40 relative flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30"
            alt="Events"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 to-brand-navy" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-white text-center">
            <span className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-6 block">Don't Miss Out</span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter text-white">Upcoming at WOGC</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">Discover moments of worship, learning, and gathering as a family of faith.</p>
        </div>
      </section>

      {/* Main Feature */}
      <section className="relative -mt-20 z-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="apple-card overflow-hidden grid grid-cols-1 lg:grid-cols-2 bg-white shadow-2xl">
             <div className="p-12 md:p-20 flex flex-col justify-center">
                <span className="px-4 py-1.5 bg-red-100 text-red-600 rounded-full text-xs font-black uppercase tracking-widest mb-8 inline-block w-fit">Flagship Event</span>
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">{MOCK_EVENTS[0].title}</h2>
                <p className="text-gray-500 text-lg mb-10 leading-relaxed font-medium">
                  {MOCK_EVENTS[0].description} Join thousands of believers for an unforgettable night of divine intervention and supernatural wonders.
                </p>
                <div className="space-y-4 mb-12">
                   <div className="flex items-center gap-4 text-gray-800 font-bold">
                      <Calendar className="text-brand-blue" />
                      <span>{MOCK_EVENTS[0].date}</span>
                   </div>
                   <div className="flex items-center gap-4 text-gray-800 font-bold">
                      <MapPin className="text-brand-blue" />
                      <span>{MOCK_EVENTS[0].venue}</span>
                   </div>
                </div>
                <button 
                  onClick={handleRegister}
                  className="cta-button cta-primary text-xl py-5 shadow-2xl shadow-blue-500/40"
                >
                  Register For Free
                </button>
             </div>
             <div className="relative h-[400px] lg:h-auto order-first lg:order-last">
                <img src={MOCK_EVENTS[0].image} className="w-full h-full object-cover" alt="Featured Event" />
             </div>
          </div>
        </div>
      </section>

      {/* Filtered Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-16 underline-offset-8">
             <h2 className="text-4xl font-black">All Occasions</h2>
             <div className="hidden md:flex gap-4">
                {['All', 'Conferences', 'Seminars', 'Services'].map((f) => (
                  <button key={f} className="text-sm font-bold text-gray-400 hover:text-brand-navy transition-colors">{f}</button>
                ))}
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_EVENTS.map((event) => (
              <motion.div 
                key={event.id}
                whileHover={{ y: -10 }}
                className="apple-card p-1 group flex flex-col bg-brand-bg/30 border-none"
              >
                <div className="relative h-64 overflow-hidden rounded-t-apple">
                  <img src={event.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={event.title} />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-brand-navy font-black text-xs">
                    {event.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-blue transition-colors">{event.title}</h3>
                  <div className="space-y-2 mb-8 text-sm text-gray-500 font-medium">
                     <div className="flex items-center gap-2"><Calendar size={14} /> {event.date}</div>
                     <div className="flex items-center gap-2"><MapPin size={14} /> {event.venue}</div>
                  </div>
                  <button 
                    onClick={handleRegister}
                    className="w-full py-4 border-2 border-brand-navy rounded-full font-bold hover:bg-brand-navy hover:text-white transition-all active:scale-95"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
            {/* Mock duplicates for UI flow */}
            {[1, 2].map((i) => (
              <motion.div 
                key={`mock-${i}`}
                whileHover={{ y: -10 }}
                className="apple-card p-1 group flex flex-col bg-brand-bg/30 border-none"
              >
                <div className="relative h-64 overflow-hidden rounded-t-apple opacity-50">
                  <img src="https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Past" />
                  <div className="absolute top-4 left-4 bg-gray-500/90 backdrop-blur-md px-3 py-1 rounded-lg text-white font-black text-xs italic">
                    CONCLUDED
                  </div>
                </div>
                <div className="p-8 opacity-50">
                  <h3 className="text-2xl font-bold mb-4">Past Glory Night</h3>
                  <div className="space-y-2 mb-8 text-sm text-gray-500 font-medium">
                     <div className="flex items-center gap-2"><Calendar size={14} /> Completed May 24, 2026</div>
                  </div>
                  <button disabled className="w-full py-4 border-2 border-gray-200 rounded-full font-bold cursor-not-allowed">
                    Archive Closed
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
