import React from 'react';
import { motion } from 'motion/react';
import { MOCK_SERMONS, MOCK_TESTIMONIES } from '../data/mockData';
import { Play, ArrowRight, Star, TrendingUp, Calendar, Heart } from 'lucide-react';
import { DailyGrace } from '../components/DailyGrace';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const DashboardHome = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-brand-navy mb-2">Welcome, {user?.name}!</h1>
          <p className="text-gray-500">Here's what's happening in your faith community today.</p>
        </div>
        <div className="flex gap-3">
          <div className="apple-card px-6 py-4 flex items-center gap-4">
            <div className="w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold">
              <TrendingUp size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Streak</p>
              <p className="text-lg font-black text-brand-navy">12 Days</p>
            </div>
          </div>
          <div className="apple-card px-6 py-4 flex items-center gap-4">
            <div className="w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue">
              <Calendar size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Messages</p>
              <p className="text-lg font-black text-brand-navy">48 Watched</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Sermon */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative h-[450px] rounded-[40px] overflow-hidden shadow-2xl group cursor-pointer"
        onClick={() => navigate('/dashboard/watch')}
      >
        <img 
          src={MOCK_SERMONS[0].thumbnail} 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          alt="Featured" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/60 to-transparent" />
        <div className="absolute inset-0 p-12 flex flex-col justify-end max-w-xl">
          <span className="inline-block px-4 py-1.5 bg-brand-gold text-brand-navy text-xs font-black uppercase tracking-widest rounded-full mb-6 w-fit shadow-lg">
            Recommended For You
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            {MOCK_SERMONS[0].title}
          </h2>
          <p className="text-white/70 text-lg mb-10 line-clamp-2">
            {MOCK_SERMONS[0].description}
          </p>
          <div className="flex items-center gap-6">
            <button className="px-8 py-4 bg-white text-brand-navy rounded-2xl font-bold flex items-center gap-3 hover:bg-brand-gold hover:text-brand-navy transition-all active:scale-95 shadow-xl">
              <Play size={20} className="fill-current" /> Watch Now
            </button>
            <p className="text-white font-medium">{MOCK_SERMONS[0].speaker}</p>
          </div>
        </div>
      </motion.div>

      {/* Daily Grace Integration */}
      <div className="rounded-[40px] overflow-hidden">
        <DailyGrace />
      </div>

      {/* Recent Testimonies Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black text-brand-navy">Community Stories</h3>
            <button className="text-brand-blue font-bold text-sm flex items-center gap-2">View All <ArrowRight size={16} /></button>
          </div>
          <div className="space-y-4">
            {MOCK_TESTIMONIES.map((t) => (
              <div key={t.id} className="apple-card p-6 flex gap-6">
                <img src={t.photo} className="w-16 h-16 rounded-2xl object-cover shrink-0" alt={t.name} />
                <div>
                  <div className="flex items-center gap-1 text-brand-gold mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-600 italic mb-4 line-clamp-3">"{t.story}"</p>
                  <p className="text-sm font-bold text-brand-navy">{t.name} • {t.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="space-y-6">
          <h3 className="text-2xl font-black text-brand-navy">Quick Access</h3>
          <div className="grid grid-cols-2 gap-4 h-full">
            <button 
              onClick={() => navigate('/dashboard/library')}
              className="apple-card p-8 flex flex-col items-center justify-center text-center gap-4 hover:border-brand-blue/30 transition-all group"
            >
              <div className="w-16 h-16 bg-brand-blue/10 rounded-3xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                <Play size={32} />
              </div>
              <span className="font-bold text-brand-navy">All Sermons</span>
            </button>
            <button className="apple-card p-8 flex flex-col items-center justify-center text-center gap-4 hover:border-brand-gold/30 transition-all group">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-3xl flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">
                <Heart size={32} />
              </div>
              <span className="font-bold text-brand-navy">Notes & Prayers</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
