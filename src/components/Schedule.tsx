import React, { useState } from 'react';
import { motion } from 'motion/react';
import SectionHeader from './SectionHeader';
import { CLASS_SCHEDULE } from '../constants';
import { cn } from '../lib/utils';

export default function Schedule() {
  const [activeDay, setActiveDay] = useState<'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat'>('mon');
  const days = [
    { id: 'mon', label: 'Mon' },
    { id: 'tue', label: 'Tue' },
    { id: 'wed', label: 'Wed' },
    { id: 'thu', label: 'Thu' },
    { id: 'fri', label: 'Fri' },
    { id: 'sat', label: 'Sat' },
  ];

  return (
    <section id="schedule" className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Class Schedule"
          description="Plan your workouts with our interactive weekly schedule. We offer classes for all fitness levels throughout the day."
        />

        {/* Day Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {days.map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveDay(day.id as any)}
              className={cn(
                "px-8 py-3 font-display font-bold uppercase tracking-widest transition-all duration-300 italic",
                activeDay === day.id ? "bg-primary text-white scale-110" : "bg-dark text-gray-400 hover:bg-gray-800"
              )}
            >
              {day.label}
            </button>
          ))}
        </div>

        {/* Schedule Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-dark text-primary uppercase tracking-widest font-display italic">
                <th className="p-6 text-left border border-white/10">Time</th>
                <th className="p-6 text-left border border-white/10">Class</th>
                <th className="p-6 text-left border border-white/10">Action</th>
              </tr>
            </thead>
            <tbody>
              {CLASS_SCHEDULE.map((row, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  className="bg-dark/50 hover:bg-dark transition-colors"
                >
                  <td className="p-6 border border-white/10 font-bold text-gray-300">{row.time}</td>
                  <td className="p-6 border border-white/10">
                    <span className="text-xl font-display font-bold uppercase italic tracking-wider">
                      {row[activeDay]}
                    </span>
                  </td>
                  <td className="p-6 border border-white/10">
                    <a href="#contact" className="text-primary font-bold uppercase tracking-widest text-xs hover:underline">
                      Book Spot
                    </a>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
