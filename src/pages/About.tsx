import { motion } from "framer-motion";
import {
  Gem,
  Target,
  Eye,
  Heart,
  Award,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: Gem,
    title: "Luxury",
    description:
      "We believe every event deserves a touch of luxury. From the finest materials to exquisite details, we craft experiences that exude elegance.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Good is never enough. We strive for excellence in every project, pushing boundaries to deliver results that exceed expectations.",
  },
  {
    icon: Heart,
    title: "Trust",
    description:
      "We build lasting relationships with our clients through transparency, reliability, and consistently delivering on our promises.",
  },
  {
    icon: Sparkles,
    title: "Creativity",
    description:
      "Every event is unique. Our creative team brings fresh ideas and innovative concepts to make your celebration one-of-a-kind.",
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "1000+", label: "Events Decorated" },
  { value: "50+", label: "Rental Items" },
  { value: "100%", label: "Satisfaction Rate" },
];

export default function About() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/gallery1.jpg')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-black/100 via-luxury-dark/80 to-luxury-black/100" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

        <div className="container-luxury mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-6">
              <Gem className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">About Us</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Crafting Memories,{" "}
              <span className="text-gold-gradient">One Event at a Time</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Jewels Event is a premium event decoration and rental company
              dedicated to transforming ordinary spaces into extraordinary
              experiences. With a passion for perfection, hospitality and an eye for detail,
              we bring your vision to life.
            </p>
          </motion.div>
        </div> 
      </section>

      {/* Story Section */}
      <section className="section-padding bg-luxury-dark relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

        <div className="container-luxury mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Our <span className="text-gold-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  Founded in 2010, Jewels Event began with a simple mission: to
                  bring jewel-quality craftsmanship to event decoration. What
                  started as a small passion project has grown into one of
                  Nigeria's most trusted event decoration and rental companies.
                </p>
                <p>
                  Our founder, inspired by the brilliance and precision of fine
                  jewelry, envisioned a company that would approach every event
                  with the same attention to detail and commitment to
                  excellence. This philosophy continues to guide everything we
                  do today.
                </p>
                <p>
                  Over the years, we've had the privilege of decorating over 500
                  events, from intimate family gatherings to grand corporate
                  galas. Each event has taught us something new and strengthened
                  our commitment to our craft.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card p-8 text-center border border-white/10"
                >
                  <div className="text-3xl md:text-4xl font-serif font-bold text-gold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-luxury-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

        <div className="container-luxury mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 border border-gold/20"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-white/60 leading-relaxed">
                To transform every event into an unforgettable experience
                through exceptional decoration, premium rentals, and
                unparalleled service. We aim to exceed expectations and create
                moments that last a lifetime.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-10 border border-gold/20"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">
                Our Vision
              </h3>
              <p className="text-white/60 leading-relaxed">
                To be the most sought-after event decoration and rental company
                in Nigeria, known for our creativity, reliability, and
                commitment to excellence. We envision a world where every
                celebration is truly special.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-luxury-dark relative overflow-hidden">
        <div className="container-luxury mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-6">
              <Heart className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">
                What We Stand For
              </span>
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              Our Core <span className="text-gold-gradient">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 border border-white/10 hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-luxury-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

        <div className="container-luxury mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Why Jewels Event{" "}
                <span className="text-gold-gradient">Stands Out</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Unmatched Attention to Detail",
                    description:
                      "We treat every element of your event with the care it deserves, ensuring nothing is overlooked.",
                  },
                  {
                    title: "Premium Quality Materials",
                    description:
                      "From our backdrops to our rental items, we use only the finest materials for a luxurious finish.",
                  },
                  {
                    title: "Experienced Team",
                    description:
                      "Our team of decorators and event specialists bring years of experience to every project.",
                  },
                  {
                    title: "Customer-First Approach",
                    description:
                      "Your satisfaction is our priority. We work closely with you to bring your vision to life.",
                  },
                ].map((item, index) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gold text-sm font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 border border-gold/20 text-center"
            >
              <h3 className="text-2xl font-serif font-bold text-white mb-4">
                Ready to Work With Us?
              </h3>
              <p className="text-white/60 mb-8">
                Let's create something beautiful together. Request a free quote
                and let's discuss your event needs.
              </p>
              <a
                href="https://wa.me/2348037419758?text=Hello%20Jewels%20Event%2C%20I%20would%20like%20to%20request%20a%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-primary"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
