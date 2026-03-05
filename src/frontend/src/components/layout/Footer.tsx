import { Link } from "@tanstack/react-router";
import { Globe, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const productCategories = [
  "Leather Products",
  "Fashion Garments",
  "Pet Accessories",
  "Equestrian Products",
  "Safety & Webbing",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-white/80"
      style={{ backgroundColor: "oklch(0.14 0.05 252)" }}
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/assets/generated/logo-transparent.dim_600x180.png"
                alt="AN Global Sourcing"
                className="h-10 w-auto object-contain"
                style={{ filter: "brightness(1.3)" }}
              />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Reliable Global Sourcing with Transparent Execution. Connecting
              international buyers with trusted Indian manufacturers.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded flex items-center justify-center transition-colors duration-200 hover:text-white"
                style={{ backgroundColor: "oklch(0.30 0.08 252)" }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded flex items-center justify-center transition-colors duration-200 hover:text-white"
                style={{ backgroundColor: "oklch(0.30 0.08 252)" }}
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-5"
              style={{ letterSpacing: "0.1em" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span
                      className="w-1 h-1 rounded-full transition-all duration-300 group-hover:w-3"
                      style={{ backgroundColor: "oklch(0.60 0.10 255)" }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4
              className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-5"
              style={{ letterSpacing: "0.1em" }}
            >
              Our Products
            </h4>
            <ul className="space-y-2.5">
              {productCategories.map((cat) => (
                <li key={cat}>
                  <Link
                    to="/products"
                    className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span
                      className="w-1 h-1 rounded-full transition-all duration-300 group-hover:w-3"
                      style={{ backgroundColor: "oklch(0.60 0.10 255)" }}
                    />
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-5"
              style={{ letterSpacing: "0.1em" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:anglobalsourcing@gmail.com"
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-white transition-colors group"
                >
                  <Mail
                    className="w-4 h-4 mt-0.5 shrink-0"
                    style={{ color: "oklch(0.60 0.10 255)" }}
                  />
                  anglobalsourcing@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/60">
                  <MapPin
                    className="w-4 h-4 mt-0.5 shrink-0"
                    style={{ color: "oklch(0.60 0.10 255)" }}
                  />
                  India (Serving UK, Europe & Global Markets)
                </div>
              </li>
              <li>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded transition-colors mt-3"
                  style={{
                    backgroundColor: "oklch(0.55 0.18 142)",
                    color: "white",
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Inquiry
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.46 0.12 255 / 0.3), transparent)",
        }}
      />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {currentYear} AN Global Sourcing. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <Globe className="w-3 h-3" />
            Built with <span className="text-red-400">♥</span> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
