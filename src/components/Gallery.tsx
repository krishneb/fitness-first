import React from 'react';
import { Reveal } from './Reveal';
import SectionHeader from './SectionHeader';
import { GALLERY_IMAGES } from '../constants';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Our Gallery"
          description="Take a look at our world-class facilities, advanced equipment, and the energetic atmosphere of our gym."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((image, index) => (
            <Reveal key={index} delay={0.1 + index * 0.1}>
              <div className="group relative overflow-hidden aspect-square">
                <img
                  src={image}
                  alt={`Gym Gallery ${index + 1}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
