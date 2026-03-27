import React from 'react';
import { Reveal } from './Reveal';

interface SectionHeaderProps {
  subtitle: string;
  title?: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({ subtitle, title, description, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <Reveal delay={0.1}>
        <span className="text-primary font-bold uppercase tracking-[0.3em] mb-4 block">
          {subtitle}
        </span>
      </Reveal>
      {title && (
        <Reveal delay={0.3}>
          <h2 className="text-4xl md:text-6xl font-display font-black leading-none italic uppercase">
            {title}
          </h2>
        </Reveal>
      )}
      {description && (
        <Reveal delay={0.5}>
          <p className={`text-gray-400 text-lg mt-6 max-w-2xl ${centered ? 'mx-auto' : ''}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
