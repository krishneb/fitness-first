import React from 'react';
import { Reveal } from './Reveal';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <Reveal>
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1000"
                alt="Gym Training"
                className="w-full h-[600px] object-cover rounded-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-primary p-8 hidden lg:block">
                <span className="text-6xl font-display font-bold block">12+</span>
                <span className="text-sm uppercase tracking-widest font-bold">Years of Excellence</span>
              </div>
            </div>
          </Reveal>
          <div className="absolute -top-10 -left-10 w-64 h-64 border-8 border-primary/20 -z-0" />
        </div>

        <div>
          <Reveal delay={0.3}>
            <span className="text-primary font-bold uppercase tracking-widest mb-4 block">About Our Gym</span>
          </Reveal>
          <Reveal delay={0.5}>
            <h2 className="text-4xl md:text-5xl font-display font-black mb-8 italic">
              We Are More Than Just A <span className="text-primary">Gym</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.7}>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Founded in 2014, FITNESS FIRST has been the cornerstone of physical transformation in our community. Our mission is simple: to provide a world-class environment where anyone, regardless of their starting point, can achieve their ultimate fitness goals.
            </p>
          </Reveal>
          
          <div className="space-y-4 mb-10">
            {[
              'State-of-the-art training facility',
              'Personalized transformation programs',
              'Supportive and motivating community',
              'Expert nutrition and lifestyle coaching'
            ].map((item, index) => (
              <Reveal key={index} delay={0.8 + index * 0.1}>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-6 h-6" />
                  <span className="text-lg font-medium">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={1.2}>
            <a href="#services" className="btn-primary inline-block">
              Explore Services
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
