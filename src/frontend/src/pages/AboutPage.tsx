import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  DollarSign,
  Eye,
  Globe,
  Target,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    desc: "Commission-based model with full cost visibility. You know exactly what the factory charges and what we earn.",
  },
  {
    icon: Users,
    title: "Dedicated Account Management",
    desc: "A single point of contact who understands your business needs and coordinates every step.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    desc: "Rigorous pre-shipment inspection and production monitoring to ensure every order meets your standards.",
  },
  {
    icon: Globe,
    title: "Global Compliance",
    desc: "Full understanding of UK and EU import regulations, certifications, and labelling requirements.",
  },
];

const markets = [
  {
    flag: "🇬🇧",
    country: "United Kingdom",
    desc: "Primary market — deep understanding of UK retail, wholesale, and compliance requirements.",
  },
  {
    flag: "🇩🇪",
    country: "Germany",
    desc: "Serving German buyers across leather goods, safety equipment, and garments.",
  },
  {
    flag: "🇫🇷",
    country: "France",
    desc: "Fashion and lifestyle product sourcing for French importers and brands.",
  },
  {
    flag: "🇳🇱",
    country: "Netherlands",
    desc: "Industrial and pet accessories supply chain coordination.",
  },
  {
    flag: "🇮🇳",
    country: "India",
    desc: "Base of operations — deep manufacturer relationships and factory networks.",
  },
  {
    flag: "🇦🇺",
    country: "Australia & More",
    desc: "Growing presence in other international markets.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ backgroundColor: "oklch(0.22 0.06 250)" }}
      >
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.60 0.10 255)" }}
            >
              About Us
            </p>
            <h1
              className="font-heading font-bold text-white mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Who We Are
            </h1>
            <p className="text-white/60 max-w-2xl text-lg leading-relaxed">
              A commission-based sourcing and manufacturing coordination company
              bridging international buyers with India's finest manufacturers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
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
                Company Overview
              </div>
              <h2
                className="font-heading font-bold mb-5"
                style={{
                  fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                  color: "oklch(0.22 0.06 250)",
                }}
              >
                Built on Transparency. Driven by Results.
              </h2>
              <div
                className="space-y-4 text-base leading-relaxed"
                style={{ color: "oklch(0.40 0.02 252)" }}
              >
                <p>
                  AN Global Sourcing was founded by Abhishek Gupta with a clear
                  vision: to make India's world-class manufacturing capabilities
                  accessible to international buyers — without the complexity,
                  risks, and opaque pricing that often characterize overseas
                  sourcing.
                </p>
                <p>
                  Based in India with a focus on UK and European markets, we
                  operate on a commission-based model that aligns our interests
                  perfectly with yours. We earn only when you get the right
                  product at the right price from the right manufacturer.
                </p>
                <p>
                  Our expertise spans leather goods, fashion garments,
                  equestrian products, pet accessories, industrial safety
                  equipment, and webbing products — giving you a single,
                  reliable partner for your diverse sourcing needs.
                </p>
              </div>
            </motion.div>

            {/* Visual side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div
                className="rounded-xl p-8 relative overflow-hidden"
                style={{ backgroundColor: "oklch(0.22 0.06 250)" }}
              >
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { label: "Founded", value: "2015" },
                      { label: "Countries Served", value: "20+" },
                      { label: "Product Categories", value: "50+" },
                      { label: "Factory Network", value: "200+" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="p-4 rounded-lg text-center"
                        style={{
                          backgroundColor: "oklch(0.30 0.08 252 / 0.6)",
                        }}
                      >
                        <div
                          className="font-heading font-bold text-2xl mb-1"
                          style={{ color: "oklch(0.80 0.08 255)" }}
                        >
                          {item.value}
                        </div>
                        <div className="text-xs text-white/50">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    className="p-4 rounded-lg"
                    style={{
                      backgroundColor: "oklch(0.46 0.12 255 / 0.2)",
                      border: "1px solid oklch(0.46 0.12 255 / 0.3)",
                    }}
                  >
                    <p className="text-white/80 text-sm italic leading-relaxed">
                      "Reliable Global Sourcing with Transparent Execution" —
                      our promise to every buyer, on every order.
                    </p>
                    <div className="mt-3 text-xs text-white/50">
                      — Abhishek Gupta, Founder
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.96 0 0)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2
              className="font-heading font-bold"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: "oklch(0.22 0.06 250)",
              }}
            >
              Mission & Vision
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: "Our Mission",
                color: "oklch(0.46 0.12 255)",
                content:
                  "To provide international buyers with seamless access to India's manufacturing excellence — through transparent pricing, rigorous quality standards, and dedicated coordination that reduces risk and maximizes value at every step of the supply chain.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                color: "oklch(0.55 0.14 60)",
                content:
                  "To become the most trusted sourcing intermediary between India and global markets — known for our integrity, market expertise, and the long-term business relationships we build with buyers and manufacturers alike.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="p-8 rounded-xl bg-white"
                style={{ border: "1px solid oklch(0.88 0.01 250)" }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: `${item.color.replace("oklch(", "").replace(")", "")}`,
                  }}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3
                  className="font-heading font-bold text-xl mb-4"
                  style={{ color: "oklch(0.22 0.06 250)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "oklch(0.40 0.02 252)" }}
                >
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Model */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14"
          >
            <div
              className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1.5 rounded"
              style={{
                backgroundColor: "oklch(0.22 0.06 250 / 0.08)",
                color: "oklch(0.22 0.06 250)",
              }}
            >
              How We Operate
            </div>
            <h2
              className="font-heading font-bold mb-4"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: "oklch(0.22 0.06 250)",
              }}
            >
              Commission-Based Transparent Structure
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "oklch(0.45 0.02 252)" }}
            >
              Our working model is designed to eliminate conflicts of interest
              and ensure you always get the best factory price.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Direct Factory Pricing",
                desc: "We negotiate directly with manufacturers on your behalf. The factory invoice goes directly to you — full transparency.",
              },
              {
                step: "02",
                title: "Clear Commission Structure",
                desc: "We charge a pre-agreed commission on the factory price. No hidden markups, no inflated quotes. You know our fee before you commit.",
              },
              {
                step: "03",
                title: "Aligned Incentives",
                desc: "We earn more only when you order more. Our model incentivizes finding you the best quality at the best price — every time.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="text-center p-6 rounded-xl"
                style={{
                  backgroundColor: "oklch(0.96 0 0)",
                  border: "1px solid oklch(0.88 0.01 250)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-bold text-white"
                  style={{ backgroundColor: "oklch(0.46 0.12 255)" }}
                >
                  {item.step}
                </div>
                <h3
                  className="font-heading font-bold text-base mb-3"
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

      {/* Market Focus */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.96 0 0)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2
              className="font-heading font-bold"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: "oklch(0.22 0.06 250)",
              }}
            >
              Our Market Focus
            </h2>
            <p
              className="mt-4 text-base max-w-2xl mx-auto"
              style={{ color: "oklch(0.45 0.02 252)" }}
            >
              Primarily serving UK and European buyers, with growing operations
              across global markets.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {markets.map((market, i) => (
              <motion.div
                key={market.country}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-5 rounded-lg bg-white"
                style={{ border: "1px solid oklch(0.88 0.01 250)" }}
              >
                <div className="text-3xl mb-3">{market.flag}</div>
                <h3
                  className="font-heading font-bold text-base mb-2"
                  style={{ color: "oklch(0.22 0.06 250)" }}
                >
                  {market.country}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "oklch(0.50 0.02 252)" }}
                >
                  {market.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2
              className="font-heading font-bold"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: "oklch(0.22 0.06 250)",
              }}
            >
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-hover p-6 rounded-lg"
                style={{
                  backgroundColor: "oklch(0.96 0 0)",
                  border: "1px solid oklch(0.88 0.01 250)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "oklch(0.22 0.06 250)" }}
                >
                  <v.icon className="w-5 h-5 text-white" />
                </div>
                <h3
                  className="font-heading font-bold text-sm mb-2"
                  style={{ color: "oklch(0.22 0.06 250)" }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "oklch(0.45 0.02 252)" }}
                >
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 relative overflow-hidden"
        style={{ backgroundColor: "oklch(0.22 0.06 250)" }}
      >
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2
            className="font-heading font-bold text-white mb-4"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
          >
            Ready to Start Sourcing?
          </h2>
          <p className="text-white/60 mb-8">
            Get in touch today and let's explore how we can support your
            sourcing needs.
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-flex text-base px-8 py-3.5"
          >
            Contact Us Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
