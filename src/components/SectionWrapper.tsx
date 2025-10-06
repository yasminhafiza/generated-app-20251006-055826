import { cn } from '@/lib/utils';
import React from 'react';
import { motion } from 'framer-motion';
interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}
export function SectionWrapper({ children, className }: SectionWrapperProps) {
  return (
    <motion.section
      className={cn('py-16 md:py-24', className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-4xl shadow-soft">
          {children}
        </div>
      </div>
    </motion.section>
  );
}