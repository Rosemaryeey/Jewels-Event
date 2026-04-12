import { useState } from "react";
import { motion } from "framer-motion";
import { Armchair, Search, ArrowRight } from "lucide-react";
import { rentals, rentalCategories } from "@/data/rentals";
import RentalCard from "@/components/RentalCard";

export default function Rentals() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRentals = rentals.filter((rental) => {
    const matchesCategory =
      activeCategory === "All" || rental.category === activeCategory;
    const matchesSearch =
      rental.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rental.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
          <source src="/decor.mp4" type="video/mp4" />
          Your browser does not support the video tag.
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
              <Armchair className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">
                Event Rentals
              </span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Premium Rentals for{" "}
              <span className="text-gold-gradient">Every Occasion</span>
            </h1>
            <p className="text-white/60 text-lg">
              From elegant seating to stunning tents and lighting, we provide
              everything you need to create the perfect event atmosphere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rentals Section */}
      <section className="section-padding bg-luxury-dark relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

        <div className="container-luxury mx-auto relative z-10">
          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 space-y-6"
          >
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search rentals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {rentalCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-gold text-luxury-black"
                      : "bg-white/5 text-white/70 border border-white/10 hover:border-gold/50 hover:text-gold"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <p className="text-white/50 text-sm">
              Showing {filteredRentals.length} item
              {filteredRentals.length !== 1 ? "s" : ""}
            </p>
          </motion.div>

          {/* Rentals Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRentals.map((rental, index) => (
              <RentalCard key={rental.id} rental={rental} index={index} />
            ))}
          </div>

          {/* Empty State */}
          {filteredRentals.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Armchair className="w-16 h-16 text-white/20 mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold text-white mb-2">
                No items found
              </h3>
              <p className="text-white/50">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-luxury-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-3xl" />

        <div className="container-luxury mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              How <span className="text-gold-gradient">Rental Works</span>
            </h2>
            <p className="text-white/60">
              Renting from us is simple and hassle-free. Here's how it works:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Browse",
                description: "Explore our catalog of premium rental items",
              },
              {
                step: "02",
                title: "Request",
                description: 'Click "Request Rental" to send us your inquiry',
              },
              {
                step: "03",
                title: "Confirm",
                description:
                  "We'll confirm availability and pricing via WhatsApp",
              },
              {
                step: "04",
                title: "Enjoy",
                description: "We deliver and set up for your event",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold text-xl font-bold">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
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
                Can't Find What You{" "}
                <span className="text-gold-gradient">Need?</span>
              </h2>
              <p className="text-white/60 mb-8">
                We have access to a wide network of suppliers. If you don't see
                what you're looking for, just ask!
              </p>
              <a
                href="https://wa.me/2348037419758?text=Hello%20Jewels%20Event%2C%20I'm%20looking%20for%20a%20specific%20rental%20item"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-primary"
              >
                Ask About Specific Items
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
