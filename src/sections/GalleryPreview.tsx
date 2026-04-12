import { motion } from 'framer-motion';
import { ArrowRight, Images } from 'lucide-react';
import { Link } from 'react-router-dom';
import { galleryItems } from '@/data/gallery';

export default function GalleryPreview() {
  const previewItems = galleryItems.slice(0, 6);

  return (
    <section className="section-padding bg-luxury-dark relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container-luxury mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-6">
              <Images className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">Our Portfolio</span>
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              Events We've <span className="text-gold-gradient">Transformed</span>
            </h2>
            <p className="text-white/60">
              Browse through our gallery of stunning events and get inspired 
              for your own celebration.
            </p>
          </div>
          
          <Link
            to="/work"
            className="inline-flex items-center gap-2 btn-outline self-start md:self-auto"
          >
            View All Work
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
            >
              {/* Image */}
              <div className="absolute inset-0 bg-luxury-light">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-gold text-xs font-medium uppercase tracking-wider mb-2">
                  {item.type}
                </span>
                <h3 className="text-xl font-serif font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm">{item.location}</p>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-luxury-black/80 backdrop-blur-sm text-gold text-xs font-medium rounded-full capitalize">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
