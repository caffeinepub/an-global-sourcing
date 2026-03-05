import { Link, useRouterState } from "@tanstack/react-router";
import { Globe, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouterState();
  const currentPath = router.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled
          ? "oklch(0.16 0.05 252 / 0.97)"
          : "oklch(0.22 0.06 250 / 0.95)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 4px 30px oklch(0.10 0.04 252 / 0.4)" : "none",
        borderBottom: scrolled
          ? "1px solid oklch(0.46 0.12 255 / 0.15)"
          : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/assets/generated/logo-transparent.dim_600x180.png"
              alt="AN Global Sourcing"
              className="h-9 md:h-11 w-auto object-contain"
              style={{ filter: "brightness(1.2) contrast(1.1)" }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link text-sm font-medium tracking-wide transition-colors duration-200 ${
                  currentPath === link.path
                    ? "text-white"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {link.label}
                {currentPath === link.path && (
                  <span
                    className="absolute bottom-[-2px] left-0 w-full h-0.5 rounded-full"
                    style={{ backgroundColor: "oklch(0.60 0.10 255)" }}
                  />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-2 btn-primary text-xs px-5 py-2.5 rounded"
            >
              <Globe className="w-3.5 h-3.5" />
              Get In Touch
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded text-white/80 hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: "oklch(0.16 0.05 252 / 0.98)" }}
          >
            <div className="px-4 py-4 space-y-1 border-t border-white/10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded font-medium text-sm transition-colors ${
                      currentPath === link.path
                        ? "text-white"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                    style={
                      currentPath === link.path
                        ? { backgroundColor: "oklch(0.46 0.12 255 / 0.2)" }
                        : {}
                    }
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.2 }}
                className="pt-2"
              >
                <Link
                  to="/contact"
                  className="btn-primary w-full justify-center mt-2 text-sm"
                >
                  <Globe className="w-4 h-4" />
                  Get In Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
