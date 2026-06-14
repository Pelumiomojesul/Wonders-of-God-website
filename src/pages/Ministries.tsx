import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Users, Heart, BookOpen, Music, Handshake, Globe } from 'lucide-react';
import { MOCK_MINISTRIES } from '../data/mockData';

const getIcon = (slug: string) => {
  switch (slug) {
    case 'youth': return Users;
    case 'children': return Heart;
    case 'men': return BookOpen;
    case 'women': return Music;
    case 'prayer': return Handshake;
    case 'outreach': return Globe;
    default: return Users;
  }
};

export const Ministries = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="section-padding bg-brand-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tighter"
          >
            Find Your Family
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 leading-relaxed"
          >
            We believe that growing together is the core of our faith journey. No matter where you are in life, there’s a community here waiting for you.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {MOCK_MINISTRIES.map((m, i) => {
              const Icon = getIcon(m.slug);
              return (
                <motion.div 
                  key={m.id}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ delay: i * 0.1 }}
                  className="apple-card overflow-hidden group border-none bg-brand-bg/50"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative aspect-square md:aspect-auto">
                      <img src={m.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={m.name} />
                      <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-10 flex flex-col justify-center">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-blue shadow-lg shadow-blue-500/10 mb-6 group-hover:scale-110 transition-transform">
                         <Icon size={24} />
                      </div>
                      <h3 className="text-3xl font-black mb-4">{m.name} Ministry</h3>
                      <p className="text-gray-500 mb-8 font-medium leading-relaxed">
                        {m.description} Join us as we build a vibrant foundation in the word of God and support each other.
                      </p>
                      <button className="flex items-center gap-2 font-black text-brand-navy group/btn">
                         Explore This Ministry <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="section-padding bg-brand-bg">
        <div className="max-w-4xl mx-auto text-center apple-card p-20 bg-white">
          <h2 className="text-4xl font-black mb-6">Not Sure Where to Start?</h2>
          <p className="text-lg text-gray-500 mb-10 font-medium">
            Take a quick spiritual gift assessment or contact our connection team to find the perfect fit for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cta-button cta-primary text-sm px-10">Get Connected</button>
            <button className="cta-button border-2 border-brand-navy font-black text-sm px-10">Speak with a Leader</button>
          </div>
        </div>
      </section>
    </div>
  );
};
