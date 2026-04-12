import { motion } from 'framer-motion';
import { Gem, Clock, Award, Users, Shield, Heart } from 'lucide-react';

const features = [
  {
    icon: Gem,
    title: 'Jewel-Quality Craftsmanship',
    description: 'Every detail is meticulously crafted to perfection, ensuring your event shines like a precious gem.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'We understand the importance of time. Our team ensures everything is set up well before your event begins.',
  },
  {
    icon: Award,
    title: 'Professional Excellence',
    description: 'Our experienced team brings creativity and expertise to every project, exceeding expectations.',
  },
  {
    icon: Users,
    title: 'Personalized Service',
    description: 'We listen to your vision and tailor our services to create a unique experience that reflects your style.',
  },
  {
    icon: Shield,
    title: 'Trusted & Reliable',
    description: 'With hundreds of successful events, we have built a reputation for reliability and trustworthiness.',
  },
  {
    icon: Heart,
    title: 'Passion for Perfection',
    description: 'We pour our heart into every event, treating your special occasion as if it were our own.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-luxury-black relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container-luxury mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-6">
            <Award className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium">Why Choose Us</span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            The Jewels Event <span className="text-gold-gradient">Difference</span>
          </h2>
          <p className="text-white/60">
            We go above and beyond to make your event truly unforgettable. 
            Here's why clients trust us with their special moments.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full glass-card p-8 border border-white/10 hover:border-gold/30 transition-all duration-300 hover-lift">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold-dark/20 flex items-center justify-center mb-6 group-hover:from-gold/30 group-hover:to-gold-dark/30 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-gold" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-gold transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
