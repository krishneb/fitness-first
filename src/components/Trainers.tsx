import React from 'react';
import { Reveal } from './Reveal';
import SectionHeader from './SectionHeader';
import { TRAINERS } from '../constants';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Expert Trainers"
          description="Our trainers are more than just coaches; they are mentors dedicated to your personal growth and physical transformation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {TRAINERS.map((trainer, index) => (
            <Reveal key={trainer.id} delay={0.2 + index * 0.1}>
              <div className="group relative overflow-hidden bg-dark">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="flex gap-4 mb-6">
                    <a href="#" className="p-2 bg-primary text-white hover:bg-white hover:text-primary transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 bg-primary text-white hover:bg-white hover:text-primary transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 bg-primary text-white hover:bg-white hover:text-primary transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="p-8 border-b-4 border-transparent group-hover:border-primary transition-all duration-500">
                  <h3 className="text-2xl font-display font-bold mb-2 italic uppercase tracking-wider">
                    {trainer.name}
                  </h3>
                  <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
                    {trainer.specialization}
                  </p>
                  <div className="flex justify-between text-xs text-gray-400 uppercase tracking-widest font-bold">
                    <span>Exp: {trainer.experience}</span>
                    <span>{trainer.certifications}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
