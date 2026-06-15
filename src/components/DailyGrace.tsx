import React from 'react';
import { motion } from 'motion/react';
import { Quote, Sparkles } from 'lucide-react';
import { MOCK_DAILY_GRACE } from '../data/mockData';

export const DailyGrace = () => {
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/10 rounded-full text-brand-blue text-sm font-bold uppercase tracking-widest mb-6">
            <Sparkles size={16} />
            Daily Grace
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-navy leading-tight">
            Nourishment for your Soul
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="apple-card p-8 md:p-16 relative group"
        >
          {/* Large Quote Icon Watermark */}
          <div className="absolute top-10 right-10 text-brand-gold/10 group-hover:text-brand-gold/20 transition-colors duration-500">
            <Quote size={120} />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-sm font-bold text-brand-gold mb-8 uppercase tracking-[0.2em]"
            >
              Scripture for {MOCK_DAILY_GRACE.date}
            </motion.div>

            <blockquote className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-8 leading-relaxed italic">
              "{MOCK_DAILY_GRACE.scripture}"
            </blockquote>

            <div className="w-20 h-1.5 bg-brand-gold rounded-full mb-10" />

            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
              <div>
                <h4 className="text-xs font-black uppercase text-gray-400 tracking-widest mb-2">Reference</h4>
                <p className="text-xl font-bold text-brand-navy">{MOCK_DAILY_GRACE.reference}</p>
              </div>
              <div>
                <h4 className="text-xs font-black uppercase text-gray-400 tracking-widest mb-2">Today's Reflection</h4>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {MOCK_DAILY_GRACE.thought}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.8 }}
           className="mt-12 text-center"
        >
          <button className="text-brand-blue font-bold flex items-center justify-center gap-2 mx-auto group">
            Share this word
            <span className="w-10 h-px bg-brand-blue group-hover:w-16 transition-all duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
