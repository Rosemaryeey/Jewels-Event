import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Images, MapPin } from "lucide-react";
import { galleryCategories } from "@/data/gallery";
import { loadGalleryItems } from "@/lib/admin";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [galleryItems] = useState(() => loadGalleryItems());
  const [selectedItem, setSelectedItem] = useState<
    (typeof galleryItems)[0] | null
  >(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/gallery2.jpg')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-black/100 via-luxury-dark/80 to-luxury-black/100" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

        <div className="container-luxury mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-6">
              <Images className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">
                Our Portfolio
              </span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Events We've{" "}
              <span className="text-gold-gradient">Transformed</span>
            </h1>
            <p className="text-white/60 text-lg">
              Browse through our gallery of stunning events. Each project is a
              testament to our commitment to excellence and creativity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="work"
        className="section-padding bg-luxury-dark relative overflow-hidden"
      >
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

        <div className="container-luxury mx-auto relative z-10">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gold text-luxury-black"
                    : "bg-white/5 text-white/70 border border-white/10 hover:border-gold/50 hover:text-gold"
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedItem(item)}
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
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Detail Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl bg-luxury-dark border border-gold/20 p-0 overflow-hidden">
          <DialogTitle className="sr-only">
            {selectedItem?.title || "Event Details"}
          </DialogTitle>
          {selectedItem && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-square md:aspect-auto">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-gold text-sm font-medium uppercase tracking-wider mb-3">
                  {selectedItem.type}
                </span>
                <h2 className="text-3xl font-serif font-bold text-white mb-4">
                  {selectedItem.title}
                </h2>
                <div className="flex items-center gap-2 text-white/60 mb-6">
                  <MapPin className="w-5 h-5 text-gold" />
                  {selectedItem.location}
                </div>
                <p className="text-white/70 leading-relaxed mb-8">
                  {selectedItem.description}
                </p>
                <a
                  href={`https://wa.me/2348037419758?text=Hello%20Jewels%20Event%2C%20I%20saw%20your%20${encodeURIComponent(selectedItem.title)}%20work%20and%20would%20like%20something%20similar`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center"
                >
                  Request Similar Design
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
