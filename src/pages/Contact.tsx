import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Youtube } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-brand-navy py-32 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-6 block">Get in Touch</span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">We'd Love to Hear From You</h1>
            <p className="text-xl text-white/60 mb-12 max-w-lg">
              Whether you have a question about our services, need prayer, or want to get involved, our team is ready to connect.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
               <div>
                  <h4 className="font-bold text-xl mb-4">Location</h4>
                  <p className="text-white/40 text-sm leading-relaxed">3, Bamidele Eletu Street,<br />Osapa London., Lekki, Nigeria, 101245</p>
               </div>
               <div>
                  <h4 className="font-bold text-xl mb-4">Visit Times</h4>
                  <p className="text-white/40 text-sm leading-relaxed">Sun: 9:00 AM - 1:00 PM<br /> Wed: 6:30 PM - 8:00 PM</p>
               </div>
            </div>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="relative"
          >
            <div className="apple-card p-10 bg-white text-brand-navy">
               <h3 className="text-3xl font-black mb-8">Send a Message</h3>
               <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-gray-400">Full Name</label>
                        <input type="text" className="w-full bg-brand-bg border border-gray-100 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all" placeholder="John Doe" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-gray-400">Email Address</label>
                        <input type="email" className="w-full bg-brand-bg border border-gray-100 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all" placeholder="john@example.com" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold uppercase text-gray-400">Purpose</label>
                     <select className="w-full bg-brand-bg border border-gray-100 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all appearance-none">
                        <option>General Inquiry</option>
                        <option>Prayer Request</option>
                        <option>Testimony</option>
                        <option>Volunteer Interest</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold uppercase text-gray-400">Message</label>
                     <textarea rows={4} className="w-full bg-brand-bg border border-gray-100 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all resize-none" placeholder="Tell us how we can help..." />
                  </div>
                  <button className="cta-button cta-primary w-full flex items-center justify-center gap-3 text-lg py-5 shadow-2xl shadow-blue-500/20">
                     Send Message <Send size={20} />
                  </button>
               </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[600px] bg-brand-bg relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grayscale opacity-40 hover:grayscale-0 transition-all duration-1000">
           {/* In a real app, this would be a Google Maps Embed */}
           <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Map Placeholder" />
        </div>
        <div className="relative z-10 apple-card p-10 bg-white/90 backdrop-blur-md shadow-2xl text-center max-w-md">
           <MapPin className="text-brand-blue mx-auto mb-6" size={48} />
           <h4 className="text-3xl font-black mb-4">Visit Us Today</h4>
           <p className="text-gray-500 font-medium mb-8 leading-relaxed">
             Experience the warmth of our community firsthand. We have ample parking and a dedicated guest welcome team.
           </p>
           <button className="cta-button cta-primary px-10">Get Google Directions</button>
        </div>
      </section>

      {/* Social Join */}
      <section className="section-padding">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div>
               <h2 className="text-4xl md:text-5xl font-black mb-4">Stay Connected</h2>
               <p className="text-xl text-gray-500 font-medium">Follow us for daily encouragement and live updates.</p>
            </div>
             <div className="flex gap-6">
               {[
                 { name: 'Instagram', icon: Instagram, color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500', url: '#' },
                 { name: 'Facebook', icon: Facebook, color: 'bg-blue-600', url: 'https://www.facebook.com/wogclekki/' },
                 { name: 'YouTube', icon: Youtube, color: 'bg-red-600', url: 'https://www.youtube.com/@WOGCMedia' },
               ].map((social) => (
                 <motion.a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl ${social.color}`}
                 >
                    <social.icon size={28} />
                 </motion.a>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};
