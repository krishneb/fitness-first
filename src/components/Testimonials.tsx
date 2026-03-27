import React from 'react';
import { Reveal } from './Reveal';
import SectionHeader from './SectionHeader';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Michael Scott',
    role: 'Member since 2023',
    text: 'FITNESS FIRST is hands down the best gym I have ever been to. The trainers are incredibly knowledgeable and the community is so supportive.',
    rating: 5,
  },
  {
    name: 'Pam Beesly',
    role: 'Member since 2022',
    text: 'I love the yoga classes here. The atmosphere is perfect and the instructors really help you improve your technique.',
    rating: 5,
  },
  {
    name: 'Jim Halpert',
    role: 'Member since 2024',
    text: 'The equipment is top-notch and always clean. I have seen amazing results since I started training here.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Success Stories"
          description="Don't just take our word for it. Hear from the people who have transformed their lives at FITNESS FIRST."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <Reveal key={index} delay={0.2 + index * 0.1}>
              <div className="p-10 bg-secondary relative group hover:bg-primary transition-all duration-500">
                <Quote className="w-12 h-12 text-primary group-hover:text-white/20 absolute top-6 right-6 opacity-20" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary group-hover:fill-white group-hover:text-white" />
                  ))}
                </div>

                <p className="text-gray-300 group-hover:text-white mb-8 text-lg italic leading-relaxed">
                  "{item.text}"
                </p>

                <div>
                  <h4 className="text-xl font-display font-bold italic uppercase tracking-wider group-hover:text-white">
                    {item.name}
                  </h4>
                  <p className="text-primary font-bold uppercase tracking-widest text-xs group-hover:text-white/80">
                    {item.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
