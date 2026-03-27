import React from 'react';
import { Dumbbell, Instagram, Twitter, Facebook, Youtube, ArrowUp } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark border-t border-white/10 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        {/* Brand */}
        <div className="space-y-8">
          <a href="#home" className="flex items-center gap-2 group">
            <Dumbbell className="w-8 h-8 text-primary group-hover:rotate-45 transition-transform duration-300" />
            <span className="text-2xl font-display font-bold tracking-tighter uppercase italic">
              FITNESS <span className="text-primary">FIRST</span>
            </span>
          </a>
          <p className="text-gray-400 leading-relaxed">
            Empowering individuals to reach their peak physical potential through expert guidance, world-class facilities, and a supportive community.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-display font-bold mb-8 italic uppercase tracking-wider text-primary">Quick Links</h4>
          <ul className="space-y-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-gray-400 hover:text-primary transition-colors uppercase tracking-widest text-sm font-bold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xl font-display font-bold mb-8 italic uppercase tracking-wider text-primary">Our Services</h4>
          <ul className="space-y-4">
            <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors uppercase tracking-widest text-sm font-bold">Strength Training</a></li>
            <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors uppercase tracking-widest text-sm font-bold">Cardio Training</a></li>
            <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors uppercase tracking-widest text-sm font-bold">CrossFit</a></li>
            <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors uppercase tracking-widest text-sm font-bold">Yoga & Pilates</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-display font-bold mb-8 italic uppercase tracking-wider text-primary">Newsletter</h4>
          <p className="text-gray-400 mb-6 text-sm">Subscribe to get the latest fitness tips and exclusive offers.</p>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-secondary border border-white/10 p-4 focus:border-primary outline-none transition-colors text-sm"
              required
            />
            <button type="submit" className="btn-primary py-3 text-sm">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">
          © 2026 FITNESS FIRST. All Rights Reserved.
        </p>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-primary flex items-center justify-center hover:bg-red-700 transition-colors"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
}
