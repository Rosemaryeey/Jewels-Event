import { motion } from "framer-motion";
import { Star, MessageSquare } from "lucide-react";
import { testimonials } from "@/data/testimonials";
// import TestimonialCard from "@/components/TestimonialCard";

export default function Testimonials() {
  // Duplicate testimonials for infinite carousel effect
  const carouselItems = [...testimonials, ...testimonials];

  return (
    <section className="section-padding bg-luxury-black relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container-luxury mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-6">
            <MessageSquare className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium">Testimonials</span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            What Our <span className="text-gold-gradient">Clients Say</span>
          </h2>
          <p className="text-white/60">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about their experience with Jewels Event.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden mb-12">
          <motion.div
            className="flex gap-8"
            animate={{ x: [0, -(testimonials.length * 416)] }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {carouselItems.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-96"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="h-full"
                >
                  <div className="h-full glass-card p-8 border border-white/10 hover:border-gold/20 transition-all duration-300">
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <svg
                        className="w-10 h-10 text-gold/30"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5-.75 0-.75.75-.75.972V11c0 1-1 2-1 2s1 1 1 2v1c0 1-1 2-1 2s1 1 1 2v1c0 1-1 2-1 2s1 1 1 2v1c0 1-1 2-1 2s1 1 1 2v1c0 1-1 2-1 2s1 1 1 2v1c0 1-1 2-1 2s1 1 1 2" />
                      </svg>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4 items-center">
                      {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                      {testimonial.rating % 1 >= 0.5 && (
                        <div className="relative w-4 h-4">
                          <Star className="w-4 h-4 text-gold" />
                          <div className="absolute left-0 top-0 w-2 h-4 overflow-hidden">
                            <Star className="w-4 h-4 fill-gold text-gold" />
                          </div>
                        </div>
                      )}
                      <span className="text-gold text-xs ml-2 font-medium">
                        {testimonial.rating.toFixed(1)}
                      </span>
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
              </div>
            ))}
          </motion.div>

          {/* Gradient overlay on sides for smooth fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-luxury-black to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-luxury-black to-transparent pointer-events-none z-10" />
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 glass-card border border-gold/20">
            <div className="flex gap-1 items-center">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
              <div className="relative w-5 h-5">
                <Star className="w-5 h-5 text-gold" />
                <div className="absolute left-0 top-0 w-2 h-5 overflow-hidden">
                  <Star className="w-5 h-5 fill-gold text-gold" />
                </div>
              </div>
            </div>
            <span className="text-white font-medium">
              Rated 4.5 by 500+ Happy Clients
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
