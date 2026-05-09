import { useState } from "react";
import { motion } from "framer-motion";
import { Package, Check, Sparkles, ArrowRight } from "lucide-react";
import { packages } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import PackageFormModal from "@/components/PackageFormModal";
import type { Package as PackageType } from "@/data/packages";

export default function Packages() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<PackageType | null>(
    null,
  );

  const handleChoosePackage = (pkg: PackageType) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/decor2.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-br from-luxury-black/90 via-luxury-dark/60 to-luxury-black/90" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

        <div className="container-luxury mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-6">
              <Package className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">
                Our Packages
              </span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Choose Your{" "}
              <span className="text-gold-gradient">Perfect Package</span>
            </h1>
            <p className="text-white/60 text-lg">
              From intimate gatherings to grand celebrations, we have a package
              that fits your vision and budget. All packages include setup and
              takedown.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section
        id="package"
        className="section-padding bg-luxury-dark relative overflow-hidden"
      >
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

        <div className="container-luxury mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <PackageCard
                key={pkg.id}
                package={pkg}
                onChoose={handleChoosePackage}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Package Comparison */}
      <section className="section-padding bg-luxury-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/3 rounded-full blur-3xl" />

        <div className="container-luxury mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">
                Compare Packages
              </span>
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              What's <span className="text-gold-gradient">Included</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-6 text-white font-semibold">
                    Feature
                  </th>
                  <th className="text-center py-4 px-6 text-gray-300 font-semibold">
                    Silver
                  </th>
                  <th className="text-center py-4 px-6 text-gold font-semibold">
                    Gold
                  </th>
                  <th className="text-center py-4 px-6 text-blue-300 font-semibold">
                    Diamond
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Backdrop Design",
                    silver: "Simple",
                    gold: "Luxury",
                    diamond: "Custom",
                  },
                  {
                    feature: "Lighting Setup",
                    silver: "Basic",
                    gold: "Enhanced",
                    diamond: "Premium",
                  },
                  {
                    feature: "Floral Arrangements",
                    silver: "Basic",
                    gold: "Beautiful",
                    diamond: "Premium Installations",
                  },
                  {
                    feature: "Chair Styling",
                    silver: "Standard",
                    gold: "Elegant",
                    diamond: "VIP Arrangement",
                  },
                  {
                    feature: "Table Styling",
                    silver: "Classic",
                    gold: "Elegant",
                    diamond: "Luxury",
                  },
                  {
                    feature: "Red Carpet",
                    silver: false,
                    gold: true,
                    diamond: true,
                  },
                  {
                    feature: "Throne Chair",
                    silver: false,
                    gold: false,
                    diamond: true,
                  },
                  {
                    feature: "Event Coordinator",
                    silver: false,
                    gold: true,
                    diamond: "Personal Designer",
                  },
                  {
                    feature: "Venue Transformation",
                    silver: false,
                    gold: false,
                    diamond: true,
                  },
                  {
                    feature: "Theme Customization",
                    silver: false,
                    gold: "Limited",
                    diamond: "Full",
                  },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-white/5">
                    <td className="py-4 px-6 text-white/80">{row.feature}</td>
                    <td className="text-center py-4 px-6">
                      {typeof row.silver === "boolean" ? (
                        row.silver ? (
                          <Check className="w-5 h-5 text-gold mx-auto" />
                        ) : (
                          <span className="text-white/30">—</span>
                        )
                      ) : (
                        <span className="text-white/60 text-sm">
                          {row.silver}
                        </span>
                      )}
                    </td>
                    <td className="text-center py-4 px-6">
                      {typeof row.gold === "boolean" ? (
                        row.gold ? (
                          <Check className="w-5 h-5 text-gold mx-auto" />
                        ) : (
                          <span className="text-white/30">—</span>
                        )
                      ) : (
                        <span className="text-gold text-sm">{row.gold}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-6">
                      {typeof row.diamond === "boolean" ? (
                        row.diamond ? (
                          <Check className="w-5 h-5 text-blue-300 mx-auto" />
                        ) : (
                          <span className="text-white/30">—</span>
                        )
                      ) : (
                        <span className="text-blue-300 text-sm">
                          {row.diamond}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-luxury-dark relative overflow-hidden">
        <div className="container-luxury mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="glass-card p-12 border border-gold/20">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Need a{" "}
                <span className="text-gold-gradient">Custom Package?</span>
              </h2>
              <p className="text-white/60 mb-8">
                Have specific requirements? We can create a custom package
                tailored to your unique needs and budget.
              </p>
              <a
                href="https://wa.me/2348037419758?text=Hello%20Jewels%20Event%2C%20I%20would%20like%20to%20discuss%20a%20custom%20package"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-primary"
              >
                Discuss Custom Package
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <PackageFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPackage={selectedPackage}
      />
    </main>
  );
}
