import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, CheckCircle2, ArrowRight, Share2, MessageCircle, Heart } from 'lucide-react';
import { MOCK_SERMONS } from '../data/mockData';

export const DashboardWatch = () => {
  const [selectedVideo, setSelectedVideo] = useState(MOCK_SERMONS[0]);
  const [isDone, setIsDone] = useState(false);
  const [progress, setProgress] = useState(0);

  // Simulate video completion after 10 seconds for demo purposes
  useEffect(() => {
    let interval: any;
    if (!isDone) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsDone(true);
            return 100;
          }
          return prev + 1;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isDone]);

  const handleReset = () => {
    setIsDone(false);
    setProgress(0);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-black text-brand-navy mb-2">Watch Online</h1>
        <p className="text-gray-500">Immerse yourself in the word of God wherever you are.</p>
      </div>

      <div className="grid lg:grid-cols-[1fr_350px] gap-8">
        {/* Main Player Area */}
        <div className="space-y-6">
          <div className="relative aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl">
            <iframe 
              src={`${selectedVideo.videoUrl}?autoplay=0&controls=1`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            
            {/* Completion Overlay */}
            <AnimatePresence>
              {isDone && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-brand-navy/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8 z-20"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", damping: 12 }}
                    className="w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-brand-gold/20"
                  >
                    <CheckCircle2 size={48} className="text-brand-navy" />
                  </motion.div>
                  
                  <motion.h3 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-black text-white mb-4"
                  >
                    Glory to God!
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-white/70 max-w-md mb-10 text-lg"
                  >
                    You have completed watching "{selectedVideo.title}". May this word produce uncommon wonders in your life.
                  </motion.p>
                  
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-4"
                  >
                    <button className="px-8 py-4 bg-brand-blue text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-600 transition-all active:scale-95 shadow-xl shadow-blue-500/20">
                      Share Message <Share2 size={18} />
                    </button>
                    <button 
                      onClick={handleReset}
                      className="px-8 py-4 bg-white/10 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-white/20 transition-all active:scale-95 border border-white/10"
                    >
                      Watch Again
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 bg-brand-gold/10 text-brand-gold text-xs font-black uppercase tracking-widest rounded-lg mb-2">
                {selectedVideo.series}
              </span>
              <h2 className="text-2xl font-bold text-brand-navy">{selectedVideo.title}</h2>
              <p className="text-gray-500">{selectedVideo.speaker} • {selectedVideo.date}</p>
            </div>
            <div className="flex gap-4">
              <button className="p-3 bg-white rounded-2xl text-gray-400 hover:text-brand-navy shadow-sm transition-all border border-gray-100">
                <Heart size={20} />
              </button>
              <button className="p-3 bg-white rounded-2xl text-gray-400 hover:text-brand-navy shadow-sm transition-all border border-gray-100">
                <MessageCircle size={20} />
              </button>
            </div>
          </div>
          
          <div className="apple-card p-8">
            <h4 className="font-bold mb-4">About this sermon</h4>
            <p className="text-gray-600 leading-relaxed">
              {selectedVideo.description}
            </p>
          </div>
        </div>

        {/* Playlist Sidebar */}
        <div className="space-y-6">
          <h4 className="text-sm font-black uppercase text-gray-400 tracking-widest px-2">Up Next</h4>
          <div className="space-y-4">
            {MOCK_SERMONS.filter(s => s.id !== selectedVideo.id).map((sermon) => (
              <motion.button
                key={sermon.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSelectedVideo(sermon);
                  handleReset();
                }}
                className="w-full text-left apple-card p-3 flex gap-4 hover:border-brand-blue/30 group transition-all"
              >
                <div className="relative w-32 shrink-0 aspect-video rounded-xl overflow-hidden">
                  <img src={sermon.thumbnail} className="w-full h-full object-cover" alt={sermon.title} />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={20} className="text-white fill-white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0 pr-2">
                  <h5 className="font-bold text-sm text-brand-navy truncate mb-1">{sermon.title}</h5>
                  <p className="text-xs text-gray-500 truncate">{sermon.speaker}</p>
                </div>
              </motion.button>
            ))}
          </div>
          
          <div className="bg-brand-blue p-6 rounded-3xl text-white">
            <h4 className="font-bold mb-2">Join us live!</h4>
            <p className="text-xs text-white/70 mb-4">Our main service starts every Sunday at 9:00 AM.</p>
            <button className="w-full py-3 bg-white text-brand-blue rounded-xl font-bold text-xs flex items-center justify-center gap-2">
              Add to Calendar <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
