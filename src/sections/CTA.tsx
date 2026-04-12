import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="section-padding bg-luxury-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-transparent to-luxury-black" />
      </div>

      <div className="container-luxury mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-12 md:p-16 border border-gold/20 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-8">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-gold text-sm font-medium">
                  Let's Create Magic
                </span>
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                Ready to Make Your Event{" "}
                <span className="text-gold-gradient">Unforgettable?</span>
              </h2>

              <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
                Let's bring your vision to life. Book a free consultation today
                and let's discuss how we can make your special day truly
                extraordinary.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/2348037419758?text=Hello%20Jewels%20Event%2C%20I%20would%20like%20to%20book%20a%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-gold text-luxury-black font-bold rounded-lg flex items-center gap-2 hover:bg-gold-light hover:shadow-gold transition-all duration-300"
                >
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  to="/packages"
                  className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-lg hover:border-gold hover:text-gold transition-all duration-300"
                >
                  View Packages
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
