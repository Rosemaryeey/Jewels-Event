import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Send,
  Clock,
  MessageCircle,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello Jewels Event 👋

I would like to inquire about your services.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event Type: ${formData.eventType}
Event Date: ${formData.eventDate}

Message:
${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2348037419758?text=${encodedMessage}`, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg1.jpg')] bg-cover bg-center bg-no-repeat" />
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
              <MessageCircle className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">
                Get in Touch
              </span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Let's Create Something{" "}
              <span className="text-gold-gradient">Beautiful</span>
            </h1>
            <p className="text-white/60 text-lg">
              Have a question or ready to book? We'd love to hear from you.
              Reach out and let's start planning your perfect event.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-luxury-dark relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

        <div className="container-luxury mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Contact <span className="text-gold-gradient">Information</span>
              </h2>
              <p className="text-white/60 mb-10">
                Reach out to us through any of these channels. We're always
                ready to help you plan your perfect event.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <a
                      href="tel:+2348037419758"
                      className="text-white/60 hover:text-gold transition-colors"
                    >
                      +234 803 741 9758
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:jewelsheartfoundation06@gmail.com"
                      className="text-white/60 hover:text-gold transition-colors"
                    >
                      jewelsheartfoundation06@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Location</h3>
                    <a
                      href="https://www.google.com/maps/place/267+Aba-Owerri+Rd,+Abayi,+Aba+450272,+Abia/@5.1445767,7.3337342,17z/data=!3m1!4b1!4m6!3m5!1s0x10429a336fd372d7:0x4b78ea7844545bf6!8m2!3d5.1445714!4d7.3363091!16s%2Fg%2F11j8gprtkf?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-gold transition-colors"
                    >
                      Aba, Nigeria
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Business Hours
                    </h3>
                    <p className="text-white/60">
                      Sunday - Saturday: 6:00 AM - 11:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/jewels_event?igsh=MjN6NTIzenB0azNz&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/60 hover:bg-gold hover:text-luxury-black transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com/jewelsevent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/60 hover:bg-gold hover:text-luxury-black transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>

                  <a
                    href="https://www.tiktok.com/@jewels.event?_r=1&_t=ZS-95TyCJ0kaLh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/60 hover:bg-gold hover:text-luxury-black transition-all duration-300"
                  >
                    <FaTiktok className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8 border border-white/10">
                <h3 className="text-2xl font-serif font-bold text-white mb-6">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="08123456789"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Event Type
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-luxury-dark">
                          Select event type
                        </option>
                        <option value="Wedding" className="bg-luxury-dark">
                          Wedding
                        </option>
                        <option value="Birthday" className="bg-luxury-dark">
                          Birthday
                        </option>
                        <option value="Corporate" className="bg-luxury-dark">
                          Corporate
                        </option>
                        <option value="Traditional" className="bg-luxury-dark">
                          Traditional
                        </option>
                        <option value="Other" className="bg-luxury-dark">
                          Other
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your event..."
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gold text-luxury-black font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-gold-light hover:shadow-gold transition-all duration-300"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>

                  <p className="text-center text-white/40 text-xs">
                    Your message will be sent via WhatsApp
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="section-padding bg-luxury-black relative overflow-hidden">
        <div className="container-luxury mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden border border-white/10"
          >
            <div className="aspect-[21/9] bg-luxury-light relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-dark to-luxury-black" />
              <div className="relative z-10 text-center">
                <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  Jewels Event
                </h3>
                <p className="text-white/60">Aba, Nigeria</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
