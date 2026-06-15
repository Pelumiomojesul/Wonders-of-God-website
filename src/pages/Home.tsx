import React from 'react';
import { Play, ArrowRight, Calendar, MapPin, Clock, Quote, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MOCK_SERMONS, MOCK_EVENTS, MOCK_TESTIMONIES, MOCK_MINISTRIES } from '../data/mockData';
import { DailyGrace } from '../components/DailyGrace';
import { MinistryCarousel } from '../components/MinistryCarousel';
import { AnimatedTestimonials } from '../components/AnimatedTestimonials';

const SectionHeader = ({ title, subtitle, centered = false }: { title: string; subtitle?: string; centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <h2 className="text-4xl md:text-5xl font-black mb-4">{title}</h2>
    {subtitle && <p className="text-gray-500 text-lg max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const Divider = () => <div className="section-divider" />;

export const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* SECTION 1 — HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-50"
            alt="Church Worship"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/70 via-brand-navy/30 to-brand-navy" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-[2.5rem] lg:text-[4.5rem] font-bold mb-6 leading-[1.1] tracking-[-0.02em] text-white">
              Experience The <br />
              <span className="text-brand-blue">Wonders Of God</span>
            </h1>
            <p className="text-[1rem] lg:text-[1.25rem] text-white/60 max-w-[540px] mx-auto mb-6 font-medium leading-[1.6]">
              A vibrant community where faith grows, lives are transformed, and God's power is experienced every day.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Link to="/visit" className="cta-button cta-primary w-full sm:w-auto px-10">
                Plan Your Visit
              </Link>
              <a 
                href="https://www.youtube.com/@WOGCMedia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button cta-secondary w-full sm:w-auto flex items-center justify-center gap-2 group px-10"
              >
                <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={14} fill="currentColor" />
                </div>
                Watch Online
              </a>
            </div>

          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-current rounded-full" />
          </div>
        </motion.div>
      </section>

      <Divider />

      {/* SECTION 2 — WELCOME */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1200" 
              className="rounded-apple shadow-2xl relative z-10"
              alt="Welcome"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-gold/20 rounded-apple -z-10 blur-3xl" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4 block">Our Heart</span>
            <h2 className="text-5xl font-black mb-6">Welcome Home</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Whether you are exploring faith, looking for community, or seeking a deeper relationship with God, there is a place for you here. At Wonders Of God Church, we believe every person is a masterpiece in the making.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 font-bold text-brand-navy hover:text-brand-blue transition-colors group">
              Learn Our Story 
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* SECTION 3 — SERVICE TIMES */}
      <section className="section-padding bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Join Our Services" 
            subtitle="Connect with us in person or online for any of our weekly gatherings."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Sunday Worship', time: '9:00 AM & 11:30 AM', icon: Heart, label: 'Celebration' },
              { title: 'Midweek Power', time: 'Wednesday • 6:30 PM', icon: Clock, label: 'Bible Study' },
              { title: 'Prayer Ignite', time: 'Friday • 6:00 PM', icon: Play, label: 'Intercession' },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="apple-card p-10 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue mb-6">
                  <service.icon size={32} />
                </div>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">{service.label}</span>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-500 font-medium mb-8">{service.time}</p>
                <Link to="/visit" className="text-sm font-bold text-brand-blue flex items-center gap-1 group">
                  Get Directions <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* SECTION 4 — FEATURED SERMONS */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <SectionHeader 
              title="Recent Words" 
              subtitle="Deepen your faith with grounded biblical teachings."
            />
            <Link to="/sermons" className="cta-button border-2 border-gray-100 hover:border-brand-navy font-bold text-sm mb-16 px-10">
              View All Sermons
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_SERMONS.map((sermon, i) => (
              <motion.div 
                key={sermon.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-apple overflow-hidden mb-6">
                  <img src={sermon.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={sermon.title} />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Play fill="currentColor" size={24} />
                    </div>
                  </div>
                </div>
                <span className="text-brand-blue font-bold text-xs uppercase tracking-widest mb-2 block">{sermon.series}</span>
                <h3 className="text-xl font-bold mb-2 group-hover:text-brand-blue transition-colors leading-tight">
                  {sermon.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium">With {sermon.speaker}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* SECTION: DAILY GRACE */}
      <DailyGrace />

      <Divider />

      {/* SECTION 5 — MINISTRIES */}
      <section id="ministries" className="section-padding bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <SectionHeader 
              title="Life at WOGC" 
              subtitle="Find your community. There is a place for everyone here."
            />
            <Link to="/ministries" className="cta-button border-2 border-white/20 hover:bg-white/10 text-white font-bold text-sm mb-16 px-10">
              View All Ministries
            </Link>
          </div>
          <div className="mt-10 overflow-visible">
            <MinistryCarousel ministries={MOCK_MINISTRIES} />
          </div>
        </div>
      </section>

      <Divider />

      {/* SECTION 6 — UPCOMING EVENTS */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="What's Happening" subtitle="Don't miss out on these powerful times of fellowship." centered />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MOCK_EVENTS.map((event, i) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="apple-card p-1 items-start flex flex-col md:flex-row gap-8 overflow-hidden hover:scale-[1.01]"
              >
                <div className="w-full md:w-56 h-64 md:h-auto shrink-0 relative overflow-hidden">
                  <img src={event.image} className="w-full h-full object-cover" alt={event.title} />
                  <div className="absolute top-4 left-4 bg-white px-3 py-2 rounded-xl text-center shadow-lg">
                    <span className="block text-xl font-black text-brand-blue">{event.date.split(' ')[1].replace(',', '')}</span>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400">{event.date.split(' ')[0]}</span>
                  </div>
                </div>
                <div className="p-8 pt-0 md:pt-8 flex flex-col justify-center h-full">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-brand-blue mb-4 block px-3 py-1 bg-blue-50 w-fit rounded-full">{event.category}</span>
                  <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                  <div className="flex flex-col gap-3 mb-8 text-sm text-gray-500 font-medium">
                    <div className="flex items-center gap-2">
                       <Clock size={16} className="text-brand-blue" />
                       <span>{event.date.split('•')[1]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <MapPin size={16} className="text-brand-blue" />
                       <span>{event.venue}</span>
                    </div>
                  </div>
                  <button className="cta-button cta-primary py-3 text-sm px-6">Register Now</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* SECTION 7 — TESTIMONIES */}
      <section className="section-padding bg-brand-bg md:py-40">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Changed Lives" subtitle="Real stories of God's power and transformation in our community." centered />
          <AnimatedTestimonials testimonials={MOCK_TESTIMONIES} autoplay={true} />
        </div>
      </section>

      <Divider />

      {/* SECTION 8 — GIVING */}
      <section className="section-padding bg-brand-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/20 blur-[150px] -translate-y-1/2 translate-x-1/2 rounded-full" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">Partner With What <br />God Is Doing</h2>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              Your generosity helps us reach lives, serve communities, and spread the Gospel. Together, we see the miraculous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/give" className="cta-button cta-primary bg-brand-gold hover:bg-yellow-600 text-brand-navy font-bold">
                Give Online
              </Link>
              <button className="cta-button border-2 border-white/20 text-white hover:bg-white/10">
                Partner with Projects
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
