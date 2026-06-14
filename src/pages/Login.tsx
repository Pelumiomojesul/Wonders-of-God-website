import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Github } from 'lucide-react';

export const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Side - Image */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden md:block md:w-1/2 lg:w-3/5 relative overflow-hidden"
      >
        <img 
          src="https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=2000" 
          alt="Church Worship"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent" />
        <div className="absolute bottom-20 left-20 right-20 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-5xl font-black mb-6 leading-tight tracking-tighter">Your Journey of Faith <br />Continues Here</h2>
            <p className="text-xl text-white/70 max-w-md">Connect with your community, manage your partnership, and access exclusive content.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Form */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20"
      >
        <div className="max-w-md w-full mx-auto">
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center gap-2 group mb-10">
              <img src="/src/assets/logo.jpg" alt="WOGC Logo" className="w-12 h-12 object-cover rounded-full shadow-md" referrerPolicy="no-referrer" />
              <span className="font-display font-bold text-lg tracking-tight text-brand-navy">Wonders Of God Church</span>
            </Link>
            <h1 className="text-4xl font-black text-brand-navy mb-3">Welcome Back</h1>
            <p className="text-gray-500 font-medium">Please enter your details to sign in.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-gray-400 tracking-widest">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="email" 
                  className="w-full bg-brand-bg border border-gray-100 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all" 
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase text-gray-400 tracking-widest">Password</label>
                <a href="#" className="text-xs font-bold text-brand-blue hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="password" 
                  className="w-full bg-brand-bg border border-gray-100 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all" 
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 py-2">
              <input type="checkbox" id="remember" className="w-5 h-5 rounded border-gray-300 text-brand-blue focus:ring-brand-blue" />
              <label htmlFor="remember" className="text-sm font-medium text-gray-600">Remember for 30 days</label>
            </div>

            <button className="cta-button cta-primary w-full flex items-center justify-center gap-2 py-4">
              Sign In <ArrowRight size={18} />
            </button>
          </form>

          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-gray-400 font-bold tracking-widest">Or continue with</span>
            </div>
          </div>

          <button className="w-full py-4 border-2 border-gray-100 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-gray-50 transition-all active:scale-95">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
            Sign in with Google
          </button>

          <p className="mt-10 text-center text-sm text-gray-500 font-medium">
            Don't have an account? <Link to="/contact" className="text-brand-blue font-bold hover:underline">Connect with us</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};
