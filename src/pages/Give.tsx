import React from 'react';
import { motion } from 'motion/react';
import { CreditCard, Landmark, Heart, Building2, HelpCircle, ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => (
  <div className="border-b border-gray-100 py-6 group cursor-pointer">
    <div className="flex items-center justify-between">
      <h4 className="text-lg font-bold text-gray-800">{question}</h4>
      <ChevronDown size={20} className="text-brand-blue group-hover:translate-y-1 transition-transform" />
    </div>
    <p className="mt-4 text-gray-500 font-medium hidden"> {/* Can implement accordion state if needed */}
      {answer}
    </p>
  </div>
);

export const Give = () => {
  return (
    <div className="pt-24 min-h-screen bg-brand-bg">
      {/* Hero */}
      <section className="bg-brand-navy py-32 text-center text-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tighter"
          >
            Giving Changes Lives
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto"
          >
            At Wonders Of God Church, we believe giving is an act of worship and a way to partner with what God is doing. Your generosity fuels transformation.
          </motion.p>
        </div>
      </section>

      {/* Methods */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 -mt-32">
          {[
            { 
               title: 'Online Offering', 
               desc: 'Quick and secure giving via our digital portal.', 
               icon: CreditCard, 
               cta: 'Give Online',
               primary: true
            },
            { 
               title: 'Bank Transfer', 
               desc: 'Direct transfer to our dedicated accounts.', 
               icon: Landmark, 
               cta: 'View Details',
               primary: false
            },
            { 
               title: 'Partnerships', 
               desc: 'Commit to recurring support for vision projects.', 
               icon: Heart, 
               cta: 'Become a Partner',
               primary: false
            },
          ].map((method, i) => (
            <motion.div 
               key={i}
               whileHover={{ y: -10 }}
               className={`apple-card p-12 text-center flex flex-col items-center border-0 shadow-lg ${method.primary ? 'bg-brand-blue text-white shadow-2xl shadow-blue-500/20' : 'bg-white text-brand-navy'}`}
            >
              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 ${method.primary ? 'bg-white/20' : 'bg-brand-blue/10 text-brand-blue'}`}>
                 <method.icon size={40} />
              </div>
              <h3 className={`text-2xl font-black mb-4 ${method.primary ? 'text-white' : 'text-brand-navy'}`}>{method.title}</h3>
              <p className={`text-sm mb-10 font-medium ${method.primary ? 'text-white/80' : 'text-gray-500'}`}>
                {method.desc}
              </p>
              <button className={`cta-button w-full h-14 ${method.primary ? 'bg-white text-brand-navy font-black' : 'cta-primary'}`}>
                {method.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bank Account Info */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto apple-card p-12 md:p-20 bg-white">
          <div className="flex items-center gap-4 mb-12">
             <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                <Building2 size={24} />
             </div>
             <h2 className="text-3xl font-black">Bank Information</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-100 pt-12">
            {[
              { bank: 'Zenith Bank', name: 'Offering & Tithes', account: '1012345678' },
              { bank: 'GT Bank', name: 'WOGC Projects', account: '0012345678' },
              { bank: 'Access Bank', name: 'Missions & Outreach', account: '0098765432' },
              { bank: 'Zenith Bank', name: 'Partnership', account: '1019876543' },
            ].map((acc, i) => (
              <div key={i} className="space-y-2">
                 <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{acc.name}</span>
                 <p className="text-xl font-black text-brand-navy">{acc.bank}</p>
                 <div className="flex items-center justify-between bg-brand-bg px-4 py-3 rounded-xl border border-gray-100">
                    <span className="font-mono text-lg font-bold tracking-wider">{acc.account}</span>
                    <button className="text-brand-blue font-bold text-xs hover:underline">Copy</button>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
             <HelpCircle className="text-brand-blue" />
             <h2 className="text-4xl font-black">Common Questions</h2>
          </div>
          <div className="space-y-2">
            <FAQItem question="Where does my money go?" answer="Your gifts support our ministries, facilities, staff, and local/international mission projects." />
            <FAQItem question="Is my online donation secure?" answer="Yes, we use industry-standard encryption for all digital transactions." />
            <FAQItem question="Can I receive a giving statement?" answer="Absolutely. We provide annual contribution statements for all traceable donations." />
            <FAQItem question="How do I cancel a recurring gift?" answer="You can manage your giving profile directly via our portal or contact the finance office." />
          </div>
        </div>
      </section>
    </div>
  );
};
