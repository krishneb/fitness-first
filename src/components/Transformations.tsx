import React from 'react';
import { Reveal } from './Reveal';
import SectionHeader from './SectionHeader';
import { TRANSFORMATIONS } from '../constants';

export default function Transformations() {
  return (
    <section id="transformations" className="py-24 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Real Results"
          description="Witness the incredible journeys of our members who pushed their boundaries and achieved their fitness goals."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {TRANSFORMATIONS.map((item, index) => (
            <Reveal key={item.id} delay={0.2 + index * 0.1}>
              <div className="group bg-secondary p-8 border-l-8 border-primary transition-all duration-500 hover:translate-x-4">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="relative">
                    <img
                      src={item.before}
                      alt={`${item.name} Before`}
                      className="w-full h-64 object-cover rounded-none grayscale"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-dark/80 px-4 py-1 text-xs font-bold uppercase tracking-widest">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={item.after}
                      alt={`${item.name} After`}
                      className="w-full h-64 object-cover rounded-none"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-primary px-4 py-1 text-xs font-bold uppercase tracking-widest">
                      After
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 italic uppercase tracking-wider">
                  {item.name}
                </h3>
                <p className="text-gray-400 italic leading-relaxed text-lg">
                  "{item.story}"
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
