import { motion } from 'framer-motion';
import { ArrowRight, Armchair } from 'lucide-react';
import { Link } from 'react-router-dom';
import { rentals } from '@/data/rentals';

export default function RentalsPreview() {
  const featuredRentals = rentals.slice(0, 4);

  return (
    <section className="section-padding bg-luxury-dark relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-3xl" />

      <div className="container-luxury mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-6">
              <Armchair className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">Event Rentals</span>
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Premium Rentals for{' '}
              <span className="text-gold-gradient">Every Occasion</span>
            </h2>
            
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              From elegant chairs and tables to stunning tents and lighting, 
              we provide everything you need to create the perfect event atmosphere. 
              All items are meticulously maintained and delivered on time.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {['Chairs & Seating', 'Tables', 'Tents & Canopy', 'Lighting', 'Decor'].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <Link
              to="/rentals"
              className="inline-flex items-center gap-2 btn-primary"
            >
              Browse Rentals
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Featured Rentals Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {featuredRentals.map((rental, index) => (
              <motion.div
                key={rental.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card p-5 border border-white/10 hover:border-gold/30 transition-all duration-300 hover-lift ${
                  index === 0 || index === 3 ? 'lg:translate-y-8' : ''
                }`}
              >
                <span className="text-xs font-medium text-gold uppercase tracking-wider">
                  {rental.category}
                </span>
                <h3 className="text-lg font-serif font-bold text-white mt-2 mb-2 group-hover:text-gold transition-colors">
                  {rental.name}
                </h3>
                <p className="text-white/50 text-sm line-clamp-2">
                  {rental.description}
                </p>
                {rental.price && (
                  <p className="text-gold text-sm font-semibold mt-3">
                    {rental.price}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
