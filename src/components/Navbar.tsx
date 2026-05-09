import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { isAdminAuthenticated } from "@/lib/admin";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Packages", href: "/packages" },
  { name: "Rentals", href: "/rentals" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      event.preventDefault();
      window.location.reload();
    }
  };

  useEffect(() => {
    setIsAdmin(isAdminAuthenticated());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-luxury-black/95 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="container-luxury mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              onClick={handleLogoClick}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <img
                src="/logo.png"
                alt="Jewels Event logo"
                className="w-20 h-20 object-contain transition-transform duration-300 group-hover:rotate-12"
              />
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-white tracking-wide">
                  Jewels<span className="text-gold">Event</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    location.pathname === link.href
                      ? "text-gold"
                      : "text-white/80 hover:text-gold"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.href && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="https://wa.me/2348037419758?text=Hello%20Jewels%20Event%2C%20I%20would%20like%20to%20book%20a%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                Book Consultation
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 bg-luxury-dark border-l border-white/10"
            >
              <div className="flex flex-col pt-24 px-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className={`block py-4 text-lg font-medium border-b border-white/5 ${
                        location.pathname === link.href
                          ? "text-gold"
                          : "text-white/80 hover:text-gold"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      navigate(isAdmin ? "/admin" : "/admin");
                    }}
                    className="block w-full text-left py-4 text-lg font-medium border-b border-white/5 text-white/80 hover:text-gold"
                  >
                    Admin
                  </button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8"
                >
                  <a
                    href="https://wa.me/2348037419758?text=Hello%20Jewels%20Event%2C%20I%20would%20like%20to%20book%20a%20consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center block"
                  >
                    Book Consultation
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
