import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="h-full glass-card p-8 border border-white/10 hover:border-gold/20 transition-all duration-300">
        {/* Quote Icon */}
        <div className="mb-6">
          <Quote className="w-10 h-10 text-gold/30" />
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-gold text-gold" />
          ))}
        </div>

        {/* Content */}
        <p className="text-white/80 text-sm leading-relaxed mb-6">
          "{testimonial.content}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/5">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
            <span className="text-luxury-black font-bold text-lg">
              {testimonial.name.charAt(0)}
            </span>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm">
              {testimonial.name}
            </h4>
            <p className="text-white/50 text-xs">
              {testimonial.role} • {testimonial.event}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
