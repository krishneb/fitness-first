import React from 'react';
import { Reveal } from './Reveal';
import SectionHeader from './SectionHeader';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Our Services"
          description="We offer a wide range of specialized programs designed to help you push your boundaries and achieve your ultimate potential."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={0.2 + index * 0.1}>
              <div className="group p-10 bg-secondary border-b-4 border-transparent hover:border-primary transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 italic uppercase tracking-wider">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
