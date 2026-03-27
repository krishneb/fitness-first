import React from 'react';
import { Reveal } from './Reveal';
import SectionHeader from './SectionHeader';
import { PRICING_PLANS } from '../constants';
import { Check, MessageCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Pricing() {
  const whatsappNumber = '8981782619';
  const message = 'Hello, I want to join FITNESS FIRST. Please share details.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="pricing" className="py-24 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Membership Plans"
          description="Select the plan that best fits your goals and lifestyle. No hidden fees, just pure results."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <Reveal key={plan.id} delay={0.2 + index * 0.1}>
              <div className={cn(
                "relative p-10 bg-secondary border-t-8 transition-all duration-500 hover:-translate-y-4 h-full flex flex-col",
                plan.isPopular ? "border-primary scale-105 z-10 shadow-2xl shadow-primary/20" : "border-gray-800"
              )}>
                {plan.isPopular && (
                  <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1">
                    Best Value
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-display font-bold mb-2 italic uppercase tracking-wider">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-display font-black text-primary italic">{plan.price}</span>
                    <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-gray-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <a href="#contact" className={cn(
                    "btn-primary w-full text-center block",
                    !plan.isPopular && "bg-gray-800 hover:bg-gray-700"
                  )}>
                    Join Now
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold py-3 px-8 transition-all uppercase tracking-widest text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Join via WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
