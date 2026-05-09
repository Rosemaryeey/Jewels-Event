import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToHash from "@/components/ScrollToHash";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Work from "@/pages/Work";
import Packages from "@/pages/Packages";
import Rentals from "@/pages/Rentals";
import Contact from "@/pages/Contact";
import Admin from "@/pages/Admin";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Page wrapper for animations
function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-luxury-black">
      <ScrollToTop />
      <ScrollToHash />
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
          <Route
            path="/work"
            element={
              <PageWrapper>
                <Work />
              </PageWrapper>
            }
          />
          <Route
            path="/packages"
            element={
              <PageWrapper>
                <Packages />
              </PageWrapper>
            }
          />
          <Route
            path="/rentals"
            element={
              <PageWrapper>
                <Rentals />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />
          <Route
            path="/admin"
            element={
              <PageWrapper>
                <Admin />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
