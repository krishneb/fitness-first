import React from 'react';
import { Reveal } from './Reveal';
import SectionHeader from './SectionHeader';
import { WHY_CHOOSE_US } from '../constants';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 px-6 bg-secondary relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Why Choose Us"
          description="We provide the perfect environment for your physical and mental growth, combining expert guidance with top-tier facilities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {WHY_CHOOSE_US.map((item, index) => (
            <Reveal key={item.title} delay={0.2 + index * 0.1}>
              <div className="group p-10 bg-dark border-b-4 border-transparent hover:border-primary transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 italic uppercase tracking-wider">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
