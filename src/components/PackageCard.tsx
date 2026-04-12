import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import type { Package } from '@/data/packages';

interface PackageCardProps {
  package: Package;
  onChoose: (pkg: Package) => void;
  index: number;
}

export default function PackageCard({ package: pkg, onChoose, index }: PackageCardProps) {
  const tierColors = {
    silver: 'from-gray-300 to-gray-500',
    gold: 'from-gold to-gold-dark',
    diamond: 'from-blue-300 via-white to-blue-300',
  };

  const tierBadges = {
    silver: 'bg-gray-500/20 text-gray-300',
    gold: 'bg-gold/20 text-gold',
    diamond: 'bg-blue-400/20 text-blue-300',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative group ${pkg.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
    >
      {/* Popular Badge */}
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="px-4 py-1 bg-gold text-luxury-black text-xs font-bold rounded-full flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            MOST POPULAR
          </span>
        </div>
      )}

      <div
        className={`h-full glass-card p-8 transition-all duration-500 ${
          pkg.popular
            ? 'border-gold/30 shadow-gold'
            : 'border-white/10 hover:border-gold/20'
        }`}
      >
        {/* Tier Badge */}
        <div className="mb-6">
          <span
            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
              tierBadges[pkg.tier]
            }`}
          >
            {pkg.tier} Package
          </span>
        </div>

        {/* Title & Price */}
        <h3 className="text-2xl font-serif font-bold text-white mb-2">
          {pkg.name}
        </h3>
        <p className={`text-sm font-medium bg-gradient-to-r ${tierColors[pkg.tier]} bg-clip-text text-transparent mb-4`}>
          {pkg.price}
        </p>
        <p className="text-white/60 text-sm mb-8">
          {pkg.description}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {pkg.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${tierColors[pkg.tier]} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                <Check className="w-3 h-3 text-luxury-black" />
              </div>
              <span className="text-white/80 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          onClick={() => onChoose(pkg)}
          className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
            pkg.popular
              ? 'bg-gold text-luxury-black hover:bg-gold-light hover:shadow-gold'
              : 'bg-white/5 text-white border border-white/10 hover:bg-gold hover:text-luxury-black hover:border-gold'
          }`}
        >
          Choose Package
        </button>
      </div>
    </motion.div>
  );
}
