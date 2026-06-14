import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white/90 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <img src="/src/assets/logo.jpg" alt="WOGC Logo" className="w-12 h-12 object-cover rounded-full shadow-md" referrerPolicy="no-referrer" />
              <span className="font-display font-bold text-xl tracking-tight">Wonders Of God Church</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Experience the power of God's love and the beauty of a transformed life in the heart of Lekki.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, url: 'https://www.facebook.com/wogclekki/' },
                { Icon: Twitter, url: '#' },
                { Icon: Instagram, url: '#' },
                { Icon: Youtube, url: 'https://www.youtube.com/@WOGCMedia' }
              ].map(({ Icon, url }, i) => (
                <a 
                  key={i} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-white/60 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/sermons" className="hover:text-white transition-colors">Watch Sermons</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/give" className="hover:text-white transition-colors">Giving</Link></li>
              <li><Link to="/visit" className="hover:text-white transition-colors">Visit Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Ministries</h4>
            <ul className="flex flex-col gap-4 text-white/60 text-sm">
              <li><Link to="/ministries/youth" className="hover:text-white transition-colors">Youth Ministry</Link></li>
              <li><Link to="/ministries/children" className="hover:text-white transition-colors">Children's Church</Link></li>
              <li><Link to="/ministries/men" className="hover:text-white transition-colors">Men of Valor</Link></li>
              <li><Link to="/ministries/women" className="hover:text-white transition-colors">Virtuous Women</Link></li>
              <li><Link to="/ministries/prayer" className="hover:text-white transition-colors">House of Prayer</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Connect</h4>
            <ul className="flex flex-col gap-6 text-white/60 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-brand-blue shrink-0" size={18} />
                <span>3, Bamidele Eletu Street, Osapa London., Lekki, Nigeria, 101245</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-brand-blue shrink-0" size={18} />
                <span>+234 806 850 7444</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-brand-blue shrink-0" size={18} />
                <span>wogcmediaunit@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Wonders Of God Church, Lekki. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xs text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
