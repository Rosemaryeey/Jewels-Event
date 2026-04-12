import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { packages } from '@/data/packages';
import PackageCard from '@/components/PackageCard';
import type { Package } from '@/data/packages';

interface PackagesPreviewProps {
  onChoosePackage: (pkg: Package) => void;
}

export default function PackagesPreview({ onChoosePackage }: PackagesPreviewProps) {
  return (
    <section className="section-padding bg-luxury-black relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container-luxury mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium">Our Packages</span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            Choose Your <span className="text-gold-gradient">Perfect Package</span>
          </h2>
          <p className="text-white/60">
            From intimate gatherings to grand celebrations, we have a package 
            that fits your vision and budget.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <PackageCard
              key={pkg.id}
              package={pkg}
              onChoose={onChoosePackage}
              index={index}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-medium transition-colors"
          >
            View All Package Details
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
