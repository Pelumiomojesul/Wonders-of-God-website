import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Landmark, Heart } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="bg-brand-navy py-24 md:py-32 text-white relative flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1543165796-54262bfc3ec3?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20"
            alt="About WOGC"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 to-brand-navy" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tighter"
          >
            Who We Are
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Wonders Of God Church is a Christ-centered community in Lekki focused on worship, prayer, transformation and experiencing the wonders of God.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            className="apple-card p-12 bg-brand-blue text-white"
          >
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
              <Target size={30} />
            </div>
            <h2 className="text-4xl font-black mb-6">Our Mission</h2>
            <p className="text-xl text-white/80 leading-relaxed">
              To raise a generation of believers who are deeply rooted in Christ, living as witnesses of God’s power, and transforming their spheres of influence through love and excellence.
            </p>
          </motion.div>
          <motion.div 
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: 20 }}
             className="apple-card p-12 border-2 border-brand-bg bg-brand-bg"
          >
            <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-8 text-brand-blue">
              <Landmark size={30} />
            </div>
            <h2 className="text-4xl font-black mb-6">Our Vision</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To be a vibrant light in Lekki and beyond, where the presence of God is tangible, the broken find healing, and every life experiences the miraculous wonders of God.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="section-padding bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">Core Beliefs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'The Trinity', text: 'We believe in one God, existing eternally in three persons: Father, Son, and Holy Spirit.' },
              { title: 'The Bible', text: 'We believe the Bible is the inspired and authoritative word of God for all faith and life.' },
              { title: 'Salvation', text: 'We believe salvation is a gift of God received by faith in Jesus Christ.' },
              { title: 'Transformation', text: 'We believe in the power of the Holy Spirit to transform any life for God’s glory.' },
              { title: 'Worship', text: 'We believe worship is a lifestyle, not just an event.' },
              { title: 'Excellence', text: 'We believe everything we do for God should be done with a spirit of excellence.' },
            ].map((belief, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.1 }}
                className="apple-card p-10"
              >
                <h3 className="text-2xl font-bold mb-4">{belief.title}</h3>
                <p className="text-gray-500 leading-relaxed">{belief.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Pastor John Doe', role: 'Senior Pastor', photo: 'https://images.unsplash.com/photo-1542103749-8ef59b94f42e?auto=format&fit=crop&q=80&w=800' },
              { name: 'Pastor Jane Doe', role: 'Executive Pastor', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800' },
              { name: 'Pastor Mike Smith', role: 'Youth Pastor', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800' },
            ].map((leader, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                className="group text-center"
              >
                <div className="relative aspect-square rounded-apple overflow-hidden mb-6">
                  <img src={leader.photo} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={leader.name} />
                  <div className="absolute inset-0 bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-2xl font-bold">{leader.name}</h3>
                <p className="text-brand-blue font-medium">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
