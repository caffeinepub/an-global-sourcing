import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  DollarSign,
  Eye,
  Package,
  Search,
  Truck,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Search,
    title: "Vendor Identification",
    color: "oklch(0.46 0.12 255)",
    desc: "We leverage our extensive factory network across India to identify the most suitable manufacturers for your specific product requirements — considering quality capability, production capacity, certifications, and pricing.",
    bullets: [
      "Factory audit and qualification",
      "Capability assessment for your product category",
      "Reference checks and sample evaluation",
      "Shortlisting of 2–3 best-matched suppliers",
    ],
  },
  {
    icon: DollarSign,
    title: "Cost Negotiation",
    color: "oklch(0.55 0.14 60)",
    desc: "Our deep market knowledge and established relationships allow us to negotiate competitive pricing on your behalf — ensuring you receive genuine factory-gate pricing, not inflated middleman quotes.",
    bullets: [
      "Market price benchmarking",
      "Direct negotiation with factory management",
      "Volume pricing and long-term contract terms",
      "Transparent cost breakdown presentation",
    ],
  },
  {
    icon: Package,
    title: "Sampling & Development",
    color: "oklch(0.55 0.14 160)",
    desc: "We manage the entire sampling process — from technical specification translation to physical sample production, testing, and approval. Iterations are managed efficiently to minimize lead time.",
    bullets: [
      "Tech pack and specification development",
      "Factory sample coordination",
      "Multiple revision rounds management",
      "Final approval sign-off process",
    ],
  },
  {
    icon: Eye,
    title: "Production Monitoring",
    color: "oklch(0.55 0.14 280)",
    desc: "Once production begins, we monitor progress with regular factory visits and photographic updates — ensuring timelines are met and quality is consistent throughout the production run.",
    bullets: [
      "In-line production checks",
      "Regular progress photo updates",
      "Timeline adherence monitoring",
      "Issue identification and resolution",
    ],
  },
  {
    icon: CheckCircle,
    title: "Quality Inspection",
    color: "oklch(0.55 0.14 100)",
    desc: "A comprehensive pre-shipment inspection against your approved sample and specification — covering workmanship, dimensions, packaging, and labelling before any goods leave the factory.",
    bullets: [
      "Pre-shipment inspection (PSI)",
      "AQL sampling methodology",
      "Detailed inspection report with photos",
      "Pass/fail recommendations",
    ],
  },
  {
    icon: Truck,
    title: "Shipment Coordination",
    color: "oklch(0.55 0.14 30)",
    desc: "We coordinate all export documentation, freight booking, and logistics to ensure your goods arrive on time with all required paperwork in order — from factory floor to your warehouse.",
    bullets: [
      "Export documentation management",
      "Freight forwarder coordination",
      "Customs clearance support",
      "Tracking and delivery updates",
    ],
  },
];

const processSteps = [
  {
    num: "01",
    title: "Requirement Discussion",
    desc: "Initial consultation to understand your product, specifications, target pricing, quality requirements, and timeline.",
    icon: Search,
  },
  {
    num: "02",
    title: "Factory Selection",
    desc: "We identify, audit, and shortlist the most suitable manufacturers from our verified network.",
    icon: Eye,
  },
  {
    num: "03",
    title: "Sampling",
    desc: "Samples developed, reviewed, and refined until they meet your exact specifications and quality standards.",
    icon: Package,
  },
  {
    num: "04",
    title: "Production Monitoring",
    desc: "Continuous monitoring with factory visits, progress updates, and proactive issue resolution.",
    icon: CheckCircle,
  },
  {
    num: "05",
    title: "Quality Check",
    desc: "Comprehensive pre-shipment inspection with detailed reporting before any goods are dispatched.",
    icon: CheckCircle,
  },
  {
    num: "06",
    title: "Dispatch",
    desc: "Full export coordination, documentation, freight booking, and delivery tracking to your location.",
    icon: Truck,
  },
];

export default function ServicesPage() {
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
              What We Do
            </p>
            <h1
              className="font-heading font-bold text-white mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Our Services
            </h1>
            <p className="text-white/60 max-w-2xl text-lg leading-relaxed">
              End-to-end sourcing and manufacturing coordination — from vendor
              identification to shipment delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              Core Services
            </div>
            <h2
              className="font-heading font-bold"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: "oklch(0.22 0.06 250)",
              }}
            >
              Everything You Need in One Partner
            </h2>
            <p
              className="mt-4 max-w-2xl mx-auto text-base"
              style={{ color: "oklch(0.45 0.02 252)" }}
            >
              From finding the right factory to ensuring your goods arrive on
              time — we handle it all.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-hover p-6 rounded-xl"
                style={{
                  backgroundColor: "oklch(0.97 0 0)",
                  border: "1px solid oklch(0.88 0.01 250)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: service.color, opacity: 1 }}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="font-heading font-bold text-lg mb-3"
                  style={{ color: "oklch(0.22 0.06 250)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "oklch(0.45 0.02 252)" }}
                >
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-xs"
                      style={{ color: "oklch(0.40 0.02 252)" }}
                    >
                      <ChevronRight
                        className="w-3.5 h-3.5 shrink-0 mt-0.5"
                        style={{ color: service.color }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
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
              Step-By-Step Process
            </div>
            <h2
              className="font-heading font-bold"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: "oklch(0.22 0.06 250)",
              }}
            >
              Our 6-Step Sourcing Process
            </h2>
            <p
              className="mt-4 max-w-2xl mx-auto text-base"
              style={{ color: "oklch(0.45 0.02 252)" }}
            >
              A structured, transparent workflow that takes your order from
              inquiry to delivery.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-5 items-start"
              >
                {/* Step number with connector line */}
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-white text-sm shrink-0 z-10"
                    style={{ backgroundColor: "oklch(0.46 0.12 255)" }}
                  >
                    {step.num}
                  </div>
                  {i < processSteps.length - 1 && (
                    <div
                      className="w-0.5 h-8 mt-2"
                      style={{ backgroundColor: "oklch(0.46 0.12 255 / 0.25)" }}
                    />
                  )}
                </div>

                {/* Content */}
                <div
                  className="flex-1 p-5 rounded-xl mb-2 bg-white"
                  style={{ border: "1px solid oklch(0.88 0.01 250)" }}
                >
                  <h3
                    className="font-heading font-bold text-base mb-1.5"
                    style={{ color: "oklch(0.22 0.06 250)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.45 0.02 252)" }}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section
        className="py-16 relative overflow-hidden"
        style={{ backgroundColor: "oklch(0.22 0.06 250)" }}
      >
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              {
                value: "₹0",
                label: "Upfront Cost",
                note: "Commission only on confirmed orders",
              },
              {
                value: "100%",
                label: "Transparent",
                note: "Full cost visibility, no hidden fees",
              },
              {
                value: "48h",
                label: "Response Time",
                note: "Quick quote turnaround",
              },
              {
                value: "24/7",
                label: "Support",
                note: "Dedicated account management",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-white"
              >
                <div
                  className="font-heading font-bold mb-1"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    color: "oklch(0.80 0.08 255)",
                  }}
                >
                  {item.value}
                </div>
                <div className="font-semibold text-sm mb-1">{item.label}</div>
                <div className="text-xs text-white/50">{item.note}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-heading font-bold mb-4"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: "oklch(0.22 0.06 250)",
              }}
            >
              Ready to Get Started?
            </h2>
            <p
              className="text-base mb-8"
              style={{ color: "oklch(0.45 0.02 252)" }}
            >
              Tell us what you need to source and we'll get back to you within
              24–48 hours.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-flex text-base px-8 py-3.5"
            >
              Start a Sourcing Request
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
