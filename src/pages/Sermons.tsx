import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Search, Filter, Calendar, User } from 'lucide-react';
import { MOCK_SERMONS } from '../data/mockData';

export const Sermons = () => {
  const [activeTab, setActiveTab] = useState('All');
  const filters = ['All', 'Latest', 'Wonders Series', 'Prayer Ignite', 'Study'];

  return (
    <div className="pt-24 min-h-screen bg-brand-bg">
      <section className="bg-brand-navy py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Sermon Library</h1>
              <p className="text-white/60 text-lg">Deepen your spiritual walk with the word.</p>
            </div>
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
              <input 
                type="text" 
                placeholder="Search series or titles..." 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sermon */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="apple-card overflow-hidden grid grid-cols-1 lg:grid-cols-2 bg-white">
            <div className="relative aspect-video lg:aspect-auto h-full">
              <img src={MOCK_SERMONS[0].thumbnail} className="w-full h-full object-cover" alt="Featured" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button className="w-20 h-20 bg-brand-blue text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
                  <Play fill="currentColor" size={32} className="ml-1" />
                </button>
              </div>
            </div>
            <div className="p-12 md:p-20 flex flex-col justify-center">
              <span className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-6 block">Featured Video</span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">{MOCK_SERMONS[0].title}</h2>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed font-medium">
                {MOCK_SERMONS[0].description}
              </p>
              <div className="flex items-center gap-8 text-sm font-bold text-gray-400">
                <div className="flex items-center gap-2">
                  <User size={18} className="text-brand-blue" />
                  <span>{MOCK_SERMONS[0].speaker}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-brand-blue" />
                  <span>June 7, 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Library Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 mb-12">
            {filters.map((f) => (
              <button 
                key={f}
                onClick={() => setActiveTab(f)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                  activeTab === f 
                    ? 'bg-brand-navy text-white shadow-lg' 
                    : 'bg-white text-gray-500 hover:bg-gray-100'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {MOCK_SERMONS.map((sermon) => (
              <motion.div 
                key={sermon.id}
                layout
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-apple overflow-hidden mb-6 shadow-xl shadow-black/5">
                  <img src={sermon.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={sermon.title} />
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-white text-[10px] font-bold">
                    42:15
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-blue transition-colors leading-tight">
                  {sermon.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm font-medium">{sermon.speaker}</span>
                  <span className="text-gray-300 text-xs font-bold uppercase tracking-widest">{sermon.series}</span>
                </div>
              </motion.div>
            ))}
            {/* Repeat for visual density */}
            {MOCK_SERMONS.map((sermon) => (
              <motion.div 
                key={`${sermon.id}-dup`}
                layout
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-apple overflow-hidden mb-6 shadow-xl shadow-black/5">
                  <img src={sermon.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" alt={sermon.title} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-blue transition-colors leading-tight">
                  Walking in Purpose & Vision
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm font-medium">Pastor John Doe</span>
                  <span className="text-gray-300 text-xs font-bold uppercase tracking-widest">Purpose Series</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
