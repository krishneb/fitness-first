import React from 'react';
import { motion } from 'motion/react';
import { Reveal } from './Reveal';
import { MessageCircle, Play } from 'lucide-react';

export default function Hero() {
  const whatsappNumber = '8981782619';
  const message = 'Hello, I want to join FITNESS FIRST. Please share details.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20 md:pt-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920"
          alt="Gym Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <Reveal delay={0.1}>
            <span className="text-primary font-bold uppercase tracking-[0.3em] mb-4 block">
              Push Your Limits
            </span>
          </Reveal>
          
          <Reveal delay={0.3}>
            <h1 className="text-6xl md:text-8xl font-display font-black leading-none mb-6 italic">
              Transform Your <span className="text-primary">Body</span>.<br />
              Transform Your <span className="text-primary">Life</span>.
            </h1>
          </Reveal>

          <Reveal delay={0.5}>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl">
              Join the most trusted fitness center in the city. Expert trainers, modern equipment, and a community that pushes you to be your best.
            </p>
          </Reveal>

          <Reveal delay={0.7}>
            <div className="flex flex-wrap gap-4">
              <a href="#pricing" className="btn-primary flex items-center gap-2">
                Join Now
              </a>
              <a href="#contact" className="btn-outline">
                Book Free Trial
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-8 transition-colors uppercase tracking-widest"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          {/* Stats */}
          <div className="mt-16 flex gap-12 border-l-4 border-primary pl-8">
            <Reveal delay={0.9}>
              <div>
                <span className="block text-4xl font-display font-bold">1500+</span>
                <span className="text-sm text-gray-400 uppercase tracking-widest">Members Joined</span>
              </div>
            </Reveal>
            <Reveal delay={1.1}>
              <div>
                <span className="block text-4xl font-display font-bold">500+</span>
                <span className="text-sm text-gray-400 uppercase tracking-widest">Transformations</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
