import { motion } from "framer-motion";
import { Tag } from "lucide-react";
import type { RentalItem } from "@/data/rentals";

interface RentalCardProps {
  rental: RentalItem;
  index: number;
}

export default function RentalCard({ rental, index }: RentalCardProps) {
  const handleRequest = () => {
    const message = encodeURIComponent(
      `Hello Jewels Event 👋\n\nI'm interested in renting:\n\nItem: ${rental.name}\nCategory: ${rental.category}\n\nPlease provide more information about availability and pricing.`,
    );
    window.open(`https://wa.me/2348037419758?text=${message}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group"
    >
      <div className="h-full glass-card p-6 border border-white/10 hover:border-gold/30 transition-all duration-300 hover-lift">
        {/* Category Tag */}
        <div className="flex items-center gap-2 mb-4">
          <Tag className="w-4 h-4 text-gold" />
          <span className="text-xs font-medium text-gold uppercase tracking-wider">
            {rental.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-gold transition-colors">
          {rental.name}
        </h3>

        {/* Description */}
        <p className="text-white/60 text-sm mb-6 line-clamp-3">
          {rental.description}
        </p>

        {/* Price & CTA */}
        <div className="flex items-center justify-between mt-auto">
          {rental.price && (
            <span className="text-gold font-semibold text-sm">
              {rental.price}
            </span>
          )}
          <button
            onClick={handleRequest}
            className="ml-auto px-4 py-2 bg-white/5 text-white text-sm font-medium rounded-lg border border-white/10 hover:bg-gold hover:text-luxury-black hover:border-gold transition-all duration-300"
          >
            Request Rental
          </button>
        </div>
      </div>
    </motion.div>
  );
}
