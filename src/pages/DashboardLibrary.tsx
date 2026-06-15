import React from 'react';
import { motion } from 'motion/react';
import { Play, Clock, Search, Filter, ArrowRight } from 'lucide-react';
import { MOCK_SERMONS } from '../data/mockData';
import { useNavigate } from 'react-router-dom';

export const DashboardLibrary = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-3xl font-black text-brand-navy mb-2">Sermon Library</h1>
          <p className="text-gray-500">Browse through hundreds of life-transforming messages.</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-100 rounded-2xl text-sm font-bold shadow-sm hover:border-brand-blue transition-colors">
            <Filter size={18} />
            Filters
          </button>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search library..."
              className="bg-white border border-gray-100 rounded-2xl pl-12 pr-6 py-3 w-64 shadow-sm focus:ring-2 focus:ring-brand-blue/20 transition-all"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_SERMONS.map((sermon, i) => (
          <motion.div
            key={sermon.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <div 
              onClick={() => navigate('/dashboard/watch')}
              className="apple-card overflow-hidden cursor-pointer h-full flex flex-col group-hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={sermon.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={sermon.title} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                    <Play className="text-white fill-white" size={32} />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-brand-gold text-brand-navy px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                  {sermon.series}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                  <Clock size={14} />
                  <span>{sermon.date}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-brand-blue transition-colors line-clamp-2">
                  {sermon.title}
                </h3>
                <p className="text-gray-500 text-sm mb-8 line-clamp-3">
                  {sermon.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-sm font-bold text-brand-navy">{sermon.speaker}</span>
                  <button className="text-brand-blue font-bold text-sm flex items-center gap-2 group/btn">
                    Watch Now
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
