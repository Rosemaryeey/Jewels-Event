import { useState } from "react";
import { Link } from "react-router-dom";
import { Gem, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { loadSiteContent } from "@/lib/admin";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Work", href: "/work" },
  { name: "Packages", href: "/packages" },
  { name: "Rentals", href: "/rentals" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Wedding Decoration", href: "/packages#package" },
  { name: "Burials Ceremonies", href: "/work" },
  { name: "Birthday Parties", href: "/packages#package" },
  { name: "Corporate Events", href: "/work#work" },
  { name: "Traditional Events", href: "/packages#package" },
  { name: "Catering Services", href: "/contact" },
  { name: "Pastries & Desserts", href: "/contact" },
  { name: "Chair Rentals", href: "/rentals" },
  { name: "Tent & Canopy", href: "/rentals" },
];

export default function Footer() {
  const [siteContent] = useState(() => loadSiteContent());

    const handleEmailClick = () => {
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

      if (isMobile) {
        window.location.href = `mailto:${siteContent.email}`;
      } else {
        window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&to=${siteContent.email}`,
          "_blank",
        );
      }
    };
  return (
    <footer className="bg-luxury-dark border-t border-white/5">
      {/* Main Footer */}
      <div className="container-luxury mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Gem className="w-8 h-8 text-gold" />
              <span className="text-2xl font-serif font-bold text-white">
                Jewels<span className="text-gold">Event</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Crafting unforgettable moments with jewel-quality event decoration
              and rental services. We transform your vision into reality.
            </p>
            <div className="flex gap-4">
              <a
                href={siteContent.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-gold hover:text-luxury-black transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteContent.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-gold hover:text-luxury-black transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={siteContent.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-gold hover:text-luxury-black transition-all duration-300"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-white mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-white/60 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-white mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Phone</p>
                  <a
                    href={`tel:${siteContent.phone}`}
                    className="text-white/60 hover:text-gold transition-colors text-sm"
                  >
                    {siteContent.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Email</p>
                  <a
                    type="button"
                    onClick={handleEmailClick}
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                      siteContent.email,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-gold transition-colors text-sm"
                  >
                    {siteContent.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Location</p>
                  <p className="text-white/60 text-sm">
                    {siteContent.location}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-luxury mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Jewels Event. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="#"
                className="text-white/40 hover:text-gold transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-white/40 hover:text-gold transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
