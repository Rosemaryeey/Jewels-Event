import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import type { GalleryItem } from '@/data/gallery';

interface GalleryCardProps {
  item: GalleryItem;
  index: number;
  onClick: () => void;
}

export default function GalleryCard({ item, index, onClick }: GalleryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
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
          <h3 className="text-xl font-serif font-bold text-white mb-2">
            {item.title}
          </h3>
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {item.location}
            </span>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-luxury-black/80 backdrop-blur-sm text-gold text-xs font-medium rounded-full capitalize">
            {item.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
