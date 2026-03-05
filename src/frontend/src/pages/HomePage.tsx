import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Globe,
  MessageCircle,
  Package,
  PawPrint,
  Quote,
  Settings,
  Shield,
  Shirt,
  Star,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Hero Slides Data
const heroSlides = [
  {
    id: 1,
    headline: "Reliable Global Sourcing & Manufacturing Partner from India",
    subtext:
      "Connecting International Buyers and Indian Manufacturers with Quality, Transparency & Competitive Pricing",
    bg: "from-[oklch(0.14_0.06_252)] via-[oklch(0.20_0.08_250)] to-[oklch(0.16_0.05_260)]",
    pattern: "leather",
    accent: "oklch(0.55 0.14 255)",
  },
  {
    id: 2,
    headline: "Private Label & OEM Manufacturing Solutions",
    subtext:
      "Low MOQ, ethical sourcing, quality inspection included — tailored for UK & European buyers.",
    bg: "from-[oklch(0.16_0.05_252)] via-[oklch(0.22_0.09_270)] to-[oklch(0.18_0.06_245)]",
    pattern: "garment",
    accent: "oklch(0.60 0.12 200)",
  },
  {
    id: 3,
    headline: "From Leather to Safety Equipment — All Under One Roof",
    subtext:
      "Your single sourcing partner for diverse product categories across India.",
    bg: "from-[oklch(0.18_0.05_248)] via-[oklch(0.24_0.07_255)] to-[oklch(0.14_0.06_258)]",
    pattern: "industrial",
    accent: "oklch(0.65 0.14 60)",
  },
];

// Product Categories
const categories = [
  {
    icon: Briefcase,
    label: "Leather Products",
    desc: "Footwear, bags, belts & accessories",
    color: "oklch(0.55 0.14 60)",
  },
  {
    icon: Shirt,
    label: "Fashion Garments",
    desc: "Western wear, bridal, private label",
    color: "oklch(0.55 0.14 280)",
  },
  {
    icon: PawPrint,
    label: "Pet Accessories",
    desc: "Collars, leashes, harness & more",
    color: "oklch(0.55 0.14 160)",
  },
  {
    icon: Star,
    label: "Equestrian Products",
    desc: "Riding garments, rugs, saddle pads",
    color: "oklch(0.55 0.14 100)",
  },
  {
    icon: Shield,
    label: "Safety & Webbing",
    desc: "Transport slings, harness, straps",
    color: "oklch(0.55 0.14 30)",
  },
  {
    icon: Settings,
    label: "Industrial Hardware",
    desc: "Precision components & fasteners",
    color: "oklch(0.46 0.12 255)",
  },
];

// Why Choose Us
const whyUs = [
  {
    icon: CheckCircle2,
    title: "Commission-Based Transparent Model",
    desc: "No hidden fees. We earn only when you succeed. Full cost visibility from factory to port.",
  },
  {
    icon: Globe,
    title: "Direct Factory Access",
    desc: "Vetted network of 200+ verified Indian manufacturers across diverse categories.",
  },
  {
    icon: Shield,
    title: "Quality Inspection Included",
    desc: "Pre-shipment inspection, production monitoring, and sample approval at every stage.",
  },
  {
    icon: Users,
    title: "UK & Europe Focused",
    desc: "Deep understanding of UK and EU compliance, certifications, and buyer expectations.",
  },
];

// Process Steps
const processSteps = [
  {
    num: "01",
    title: "Requirement Discussion",
    desc: "We understand your exact product needs, specifications, and target pricing.",
  },
  {
    num: "02",
    title: "Factory Selection",
    desc: "We identify and vet the best-matched manufacturers from our trusted network.",
  },
  {
    num: "03",
    title: "Sampling",
    desc: "Prototype and samples developed, tested, and approved before bulk production.",
  },
  {
    num: "04",
    title: "Production Monitoring",
    desc: "Regular factory visits and progress updates during manufacturing.",
  },
  {
    num: "05",
    title: "Quality Check",
    desc: "Pre-shipment inspection against your specifications and international standards.",
  },
  {
    num: "06",
    title: "Dispatch",
    desc: "Coordinated logistics, documentation, and timely shipment to your destination.",
  },
];

// Testimonials
const testimonials = [
  {
    quote:
      "AN Global Sourcing helped us find the perfect leather goods manufacturer in India. Their transparent process saved us significant costs while maintaining quality standards.",
    name: "James Richardson",
    company: "Premier Leather Co., UK",
    role: "Purchasing Director",
  },
  {
    quote:
      "Exceptional service! They managed our entire equestrian product line from sourcing to dispatch. Professional, reliable, and truly understands European market requirements.",
    name: "Sophie Mueller",
    company: "EuroEquine GmbH, Germany",
    role: "Head of Procurement",
  },
];

// SlidePattern component
function SlidePattern({ pattern }: { pattern: string }) {
  if (pattern === "leather") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Leather texture pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              oklch(0.60 0.10 255 / 0.3) 10px,
              oklch(0.60 0.10 255 / 0.3) 11px
            )`,
          }}
        />
        <div
          className="absolute top-1/4 right-10 w-64 h-64 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, oklch(0.55 0.14 255) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 left-20 w-48 h-48 rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, oklch(0.55 0.14 60) 0%, transparent 70%)",
          }}
        />
        {/* Abstract shoe outline */}
        <svg
          aria-hidden="true"
          className="absolute right-16 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block"
          width="320"
          height="200"
          viewBox="0 0 320 200"
        >
          <path
            d="M40 140 Q80 80 160 80 Q220 80 280 120 Q290 130 285 150 Q280 160 200 160 Q120 165 60 155 Q30 150 40 140Z"
            fill="none"
            stroke="white"
            strokeWidth="3"
          />
          <ellipse
            cx="200"
            cy="80"
            rx="60"
            ry="40"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
    );
  }
  if (pattern === "garment") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 20px,
              oklch(0.60 0.12 200 / 0.2) 20px,
              oklch(0.60 0.12 200 / 0.2) 21px
            ), repeating-linear-gradient(
              90deg,
              transparent,
              transparent 20px,
              oklch(0.60 0.12 200 / 0.2) 20px,
              oklch(0.60 0.12 200 / 0.2) 21px
            )`,
          }}
        />
        <div
          className="absolute top-10 right-20 w-72 h-72 opacity-15"
          style={{
            background:
              "radial-gradient(ellipse, oklch(0.60 0.12 200) 0%, transparent 70%)",
          }}
        />
        {/* Abstract fabric drape */}
        <svg
          aria-hidden="true"
          className="absolute right-12 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block"
          width="260"
          height="300"
          viewBox="0 0 260 300"
        >
          <path
            d="M80 20 Q130 10 180 20 L200 80 Q210 100 200 120 L220 280 Q210 290 130 290 Q50 290 40 280 L60 120 Q50 100 60 80 Z"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <line
            x1="80"
            y1="20"
            x2="40"
            y2="80"
            stroke="white"
            strokeWidth="2"
          />
          <line
            x1="180"
            y1="20"
            x2="220"
            y2="80"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
    );
  }
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25px 25px, oklch(0.65 0.14 60 / 0.3) 2px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
      />
      <div
        className="absolute bottom-10 right-10 w-80 h-80 opacity-15"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.14 60) 0%, transparent 70%)",
        }}
      />
      {/* Abstract industrial/gear */}
      <svg
        aria-hidden="true"
        className="absolute right-16 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block"
        width="280"
        height="280"
        viewBox="0 0 280 280"
      >
        <circle
          cx="140"
          cy="140"
          r="100"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeDasharray="8 4"
        />
        <circle
          cx="140"
          cy="140"
          r="60"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <circle
          cx="140"
          cy="140"
          r="20"
          fill="none"
          stroke="white"
          strokeWidth="3"
        />
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <rect
            key={angle}
            x="130"
            y="32"
            width="20"
            height="14"
            fill="none"
            stroke="white"
            strokeWidth="2"
            rx="2"
            transform={`rotate(${angle}, 140, 140)`}
          />
        ))}
      </svg>
    </div>
  );
}

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-advance slides
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally depends on currentSlide for reset
  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 4500);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentSlide, isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () =>
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => goToSlide((currentSlide + 1) % heroSlides.length);

  const slide = heroSlides[currentSlide];

  return (
    <div>
      {/* ─── HERO SLIDER ─── */}
      <section
        className="relative min-h-[92vh] flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.14 0.06 252), oklch(0.20 0.08 250), oklch(0.16 0.05 260))",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${slide.bg.replace("from-[", "").replace("]", "").split(" ")[0]}, oklch(0.18 0.06 252))`,
            }}
          />
        </AnimatePresence>

        {/* Pattern overlay */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`pattern-${slide.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SlidePattern pattern={slide.pattern} />
          </motion.div>
        </AnimatePresence>

        {/* Dark vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 30%, oklch(0.10 0.04 252 / 0.6) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase mb-6"
              style={{
                backgroundColor: "oklch(0.46 0.12 255 / 0.2)",
                border: "1px solid oklch(0.46 0.12 255 / 0.3)",
                color: "oklch(0.85 0.08 255)",
              }}
            >
              <Globe className="w-3 h-3" />
              India Sourcing & Manufacturing Partner
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.h1
                key={`h1-${slide.id}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="font-heading font-bold text-white leading-tight mb-6"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
              >
                {slide.headline}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`p-${slide.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-white/70 leading-relaxed mb-10"
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.2rem)",
                  maxWidth: "560px",
                }}
              >
                {slide.subtext}
              </motion.p>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="btn-primary">
                Send Inquiry
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/products" className="btn-outline">
                View Products
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Slide Controls */}
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {heroSlides.map((slide, i) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(i)}
                  className="transition-all duration-300"
                  aria-label={`Go to slide ${i + 1}`}
                  style={{
                    width: i === currentSlide ? "28px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    backgroundColor:
                      i === currentSlide
                        ? "oklch(0.60 0.10 255)"
                        : "oklch(1 0 0 / 0.3)",
                  }}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="w-9 h-9 rounded flex items-center justify-center text-white/70 hover:text-white transition-colors"
                style={{ backgroundColor: "oklch(1 0 0 / 0.1)" }}
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-9 h-9 rounded flex items-center justify-center text-white/70 hover:text-white transition-colors"
                style={{ backgroundColor: "oklch(1 0 0 / 0.1)" }}
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS / ABOUT SNIPPET ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1.5 rounded"
                style={{
                  backgroundColor: "oklch(0.22 0.06 250 / 0.08)",
                  color: "oklch(0.22 0.06 250)",
                }}
              >
                About AN Global Sourcing
              </div>
              <h2
                className="font-heading font-bold mb-5 leading-tight"
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  color: "oklch(0.22 0.06 250)",
                }}
              >
                Your Trusted Sourcing Partner in India
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "oklch(0.40 0.02 252)" }}
              >
                AN Global Sourcing is a commission-based sourcing and
                manufacturing coordination company based in India. We bridge the
                gap between international buyers — particularly in the UK and
                Europe — and India's best-in-class manufacturers.
              </p>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "oklch(0.40 0.02 252)" }}
              >
                Our model is simple: transparent, ethical, and results-driven.
                We earn when you succeed — no hidden charges, no inflated
                factory prices.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-semibold text-sm transition-colors"
                style={{ color: "oklch(0.46 0.12 255)" }}
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                {
                  value: "10+",
                  label: "Years Experience",
                  color: "oklch(0.22 0.06 250)",
                },
                {
                  value: "50+",
                  label: "Product Categories",
                  color: "oklch(0.46 0.12 255)",
                },
                {
                  value: "20+",
                  label: "Countries Served",
                  color: "oklch(0.55 0.14 60)",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-6 rounded-lg"
                  style={{
                    backgroundColor: "oklch(0.96 0 0)",
                    border: "1px solid oklch(0.88 0.01 250)",
                  }}
                >
                  <div
                    className="font-heading font-bold text-3xl mb-2"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs font-medium leading-tight"
                    style={{ color: "oklch(0.45 0.02 252)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCT CATEGORIES ─── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.96 0 0)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div
              className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1.5 rounded"
              style={{
                backgroundColor: "oklch(0.22 0.06 250 / 0.08)",
                color: "oklch(0.22 0.06 250)",
              }}
            >
              Our Expertise
            </div>
            <h2
              className="font-heading font-bold"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: "oklch(0.22 0.06 250)",
              }}
            >
              Product Categories
            </h2>
            <p
              className="mt-4 max-w-2xl mx-auto text-base"
              style={{ color: "oklch(0.45 0.02 252)" }}
            >
              We source across a diverse range of product categories, connecting
              you with verified Indian manufacturers.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to="/products"
                  className="card-hover block p-6 rounded-lg bg-white group"
                  style={{ border: "1px solid oklch(0.88 0.01 250)" }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${cat.color.replace("oklch(", "oklch(").replace(")", " / 0.12)")}`,
                    }}
                  >
                    <cat.icon
                      className="w-6 h-6"
                      style={{ color: cat.color }}
                    />
                  </div>
                  <h3
                    className="font-heading font-bold text-base mb-1.5"
                    style={{ color: "oklch(0.22 0.06 250)" }}
                  >
                    {cat.label}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "oklch(0.50 0.02 252)" }}
                  >
                    {cat.desc}
                  </p>
                  <div
                    className="mt-4 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: "oklch(0.46 0.12 255)" }}
                  >
                    Explore
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/products" className="btn-primary inline-flex">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div
              className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1.5 rounded"
              style={{
                backgroundColor: "oklch(0.22 0.06 250 / 0.08)",
                color: "oklch(0.22 0.06 250)",
              }}
            >
              Why Work With Us
            </div>
            <h2
              className="font-heading font-bold"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: "oklch(0.22 0.06 250)",
              }}
            >
              The AN Global Advantage
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: "oklch(0.96 0 0)",
                  border: "1px solid oklch(0.88 0.01 250)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "oklch(0.22 0.06 250)" }}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="font-heading font-bold text-base mb-2"
                  style={{ color: "oklch(0.22 0.06 250)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.45 0.02 252)" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "oklch(0.22 0.06 250)" }}
      >
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div
              className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1.5 rounded"
              style={{
                backgroundColor: "oklch(0.46 0.12 255 / 0.2)",
                color: "oklch(0.80 0.08 255)",
                border: "1px solid oklch(0.46 0.12 255 / 0.3)",
              }}
            >
              Our Process
            </div>
            <h2
              className="font-heading font-bold text-white"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
            >
              How We Work
            </h2>
            <p className="mt-4 text-white/60 max-w-xl mx-auto">
              A streamlined 6-step process from inquiry to delivery —
              transparent at every stage.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative text-center p-5 rounded-lg"
                style={{
                  backgroundColor: "oklch(0.30 0.08 252 / 0.5)",
                  border: "1px solid oklch(0.46 0.12 255 / 0.2)",
                }}
              >
                {/* Connector */}
                {i < processSteps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-full w-full h-px z-10"
                    style={{
                      background: "oklch(0.46 0.12 255 / 0.25)",
                      width: "calc(100% - 2rem)",
                    }}
                  />
                )}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 font-heading font-bold text-sm"
                  style={{
                    backgroundColor: "oklch(0.46 0.12 255)",
                    color: "white",
                  }}
                >
                  {step.num}
                </div>
                <h4 className="font-heading font-bold text-white text-sm mb-2 leading-tight">
                  {step.title}
                </h4>
                <p className="text-xs text-white/50 leading-relaxed hidden md:block">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div
              className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1.5 rounded"
              style={{
                backgroundColor: "oklch(0.22 0.06 250 / 0.08)",
                color: "oklch(0.22 0.06 250)",
              }}
            >
              Client Testimonials
            </div>
            <h2
              className="font-heading font-bold"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: "oklch(0.22 0.06 250)",
              }}
            >
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="p-8 rounded-lg relative"
                style={{
                  backgroundColor: "oklch(0.96 0 0)",
                  border: "1px solid oklch(0.88 0.01 250)",
                }}
              >
                <Quote
                  className="w-10 h-10 mb-4 opacity-20"
                  style={{ color: "oklch(0.46 0.12 255)" }}
                />
                <p
                  className="text-base leading-relaxed mb-6 italic"
                  style={{ color: "oklch(0.38 0.02 252)" }}
                >
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: "oklch(0.22 0.06 250)" }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div
                      className="font-semibold text-sm"
                      style={{ color: "oklch(0.22 0.06 250)" }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "oklch(0.55 0.02 252)" }}
                    >
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "oklch(0.16 0.05 252)" }}
      >
        <div className="absolute inset-0 hero-pattern opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Package
              className="w-12 h-12 mx-auto mb-5 opacity-60"
              style={{ color: "oklch(0.60 0.10 255)" }}
            />
            <h2
              className="font-heading font-bold text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Ready to Source from India?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Let's Build Long-Term Business Together
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                Start Your Inquiry
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded font-semibold text-base transition-all duration-200 hover:opacity-90"
                style={{
                  backgroundColor: "oklch(0.55 0.18 142)",
                  color: "white",
                }}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
