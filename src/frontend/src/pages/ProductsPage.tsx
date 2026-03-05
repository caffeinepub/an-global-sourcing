import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  PawPrint,
  Settings,
  Shield,
  Shirt,
  Star,
} from "lucide-react";
import { motion } from "motion/react";

interface Product {
  name: string;
  desc: string;
  bgColor: string;
  iconColor: string;
}

interface Category {
  id: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  title: string;
  iconColor: string;
  bgAccent: string;
  description: string;
  products: Product[];
}

const categories: Category[] = [
  {
    id: "leather",
    icon: Briefcase,
    title: "Leather Products",
    iconColor: "oklch(0.55 0.14 60)",
    bgAccent: "oklch(0.55 0.14 60 / 0.08)",
    description:
      "Premium leather goods manufactured by skilled artisans across India's renowned leather-producing hubs in Agra, Kanpur, and Chennai.",
    products: [
      {
        name: "Leather Footwear",
        desc: "Handcrafted shoes, boots, loafers — full-grain and top-grain leather. Custom sizes, OEM & private label.",
        bgColor: "oklch(0.55 0.14 60 / 0.10)",
        iconColor: "oklch(0.55 0.14 60)",
      },
      {
        name: "Leather Bags",
        desc: "Briefcases, tote bags, backpacks, handbags — premium leather, custom designs available.",
        bgColor: "oklch(0.55 0.12 55 / 0.10)",
        iconColor: "oklch(0.50 0.14 60)",
      },
      {
        name: "Leather Belts",
        desc: "Dress belts, casual belts, webbing belts — various widths, buckle styles, and leather grades.",
        bgColor: "oklch(0.50 0.14 65 / 0.10)",
        iconColor: "oklch(0.45 0.14 60)",
      },
    ],
  },
  {
    id: "garments",
    icon: Shirt,
    title: "Fashion Garments",
    iconColor: "oklch(0.55 0.14 280)",
    bgAccent: "oklch(0.55 0.14 280 / 0.08)",
    description:
      "Apparel manufacturing with full cut-make-trim services, private label capabilities, and compliance with international standards.",
    products: [
      {
        name: "Western Wear",
        desc: "Jeans, shirts, jackets, dresses — casual and formal wear with low MOQ for UK/EU retailers.",
        bgColor: "oklch(0.55 0.14 280 / 0.10)",
        iconColor: "oklch(0.55 0.14 280)",
      },
      {
        name: "Bridal Wear",
        desc: "Embroidered bridal garments, lehengas, and ethnic fusion wear for international boutiques.",
        bgColor: "oklch(0.55 0.14 310 / 0.10)",
        iconColor: "oklch(0.50 0.14 310)",
      },
      {
        name: "Private Label",
        desc: "Full private label service — design-to-delivery with your branding, labels, and packaging.",
        bgColor: "oklch(0.50 0.12 260 / 0.10)",
        iconColor: "oklch(0.46 0.12 260)",
      },
    ],
  },
  {
    id: "pet",
    icon: PawPrint,
    title: "Pet Accessories",
    iconColor: "oklch(0.55 0.14 160)",
    bgAccent: "oklch(0.55 0.14 160 / 0.08)",
    description:
      "Quality pet accessories manufactured for UK and European pet market standards — durable, safe, and attractively designed.",
    products: [
      {
        name: "Pet Collars",
        desc: "Leather and nylon collars for dogs and cats — various widths, colours, and hardware styles.",
        bgColor: "oklch(0.55 0.14 160 / 0.10)",
        iconColor: "oklch(0.55 0.14 160)",
      },
      {
        name: "Pet Leashes",
        desc: "Training leashes, retractable leads, multi-function leashes in leather and webbing.",
        bgColor: "oklch(0.50 0.14 150 / 0.10)",
        iconColor: "oklch(0.50 0.14 150)",
      },
      {
        name: "Pet Harness",
        desc: "No-pull harnesses, step-in harnesses, and working dog harnesses — safety-tested designs.",
        bgColor: "oklch(0.50 0.12 170 / 0.10)",
        iconColor: "oklch(0.50 0.12 170)",
      },
    ],
  },
  {
    id: "equestrian",
    icon: Star,
    title: "Equestrian Products",
    iconColor: "oklch(0.55 0.14 100)",
    bgAccent: "oklch(0.55 0.14 100 / 0.08)",
    description:
      "Specialist equestrian products manufactured to UK and European equestrian market standards — trusted by riders and horse owners.",
    products: [
      {
        name: "Riding Garments",
        desc: "Jodhpurs, breeches, riding jackets, and show wear — premium fabrics with technical performance.",
        bgColor: "oklch(0.55 0.14 100 / 0.10)",
        iconColor: "oklch(0.55 0.14 100)",
      },
      {
        name: "Horse Rugs",
        desc: "Turnout rugs, stable rugs, fly rugs — various fill weights and waterproofing ratings.",
        bgColor: "oklch(0.50 0.14 90 / 0.10)",
        iconColor: "oklch(0.50 0.14 90)",
      },
      {
        name: "Saddle Pads",
        desc: "Dressage pads, GP pads, jumping pads — memory foam options, various shapes and materials.",
        bgColor: "oklch(0.55 0.12 110 / 0.10)",
        iconColor: "oklch(0.50 0.12 110)",
      },
    ],
  },
  {
    id: "safety",
    icon: Shield,
    title: "Safety & Webbing Products",
    iconColor: "oklch(0.55 0.14 30)",
    bgAccent: "oklch(0.55 0.14 30 / 0.08)",
    description:
      "Industrial safety and webbing products manufactured to ISO and international safety standards for global markets.",
    products: [
      {
        name: "Transport Slings",
        desc: "Polyester and nylon lifting slings — tested and certified to EN 1492-1 and EN 1492-2 standards.",
        bgColor: "oklch(0.55 0.14 30 / 0.10)",
        iconColor: "oklch(0.55 0.14 30)",
      },
      {
        name: "Industrial Harness",
        desc: "Fall arrest harnesses, full-body harnesses — CE certified, various configurations and load ratings.",
        bgColor: "oklch(0.55 0.12 20 / 0.10)",
        iconColor: "oklch(0.50 0.12 20)",
      },
      {
        name: "Webbing Straps",
        desc: "Cargo lashing straps, ratchet tie-downs, woven webbing — custom widths and load capacities.",
        bgColor: "oklch(0.50 0.14 40 / 0.10)",
        iconColor: "oklch(0.50 0.14 40)",
      },
    ],
  },
];

// Product visual placeholder component
function ProductVisual({ product }: { product: Product }) {
  return (
    <div
      className="h-44 rounded-t-lg flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: product.bgColor }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 40%, ${product.iconColor} 0%, transparent 60%)`,
        }}
      />
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center relative z-10"
        style={{
          backgroundColor: `${product.iconColor.replace(")", " / 0.15)")}`,
        }}
      >
        <Settings className="w-8 h-8" style={{ color: product.iconColor }} />
      </div>
    </div>
  );
}

export default function ProductsPage() {
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
              Product Catalogue
            </p>
            <h1
              className="font-heading font-bold text-white mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Our Product Categories
            </h1>
            <p className="text-white/60 max-w-2xl text-lg leading-relaxed">
              Diverse, high-quality products sourced from India's best
              manufacturers — spanning 5 major categories with 50+ product
              lines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <div className="bg-white">
        {categories.map((category, catIdx) => (
          <section
            key={category.id}
            className="py-16"
            style={{
              backgroundColor: catIdx % 2 === 0 ? "white" : "oklch(0.97 0 0)",
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row md:items-center gap-4 mb-10"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: category.bgAccent,
                    border: `2px solid ${category.iconColor}`,
                  }}
                >
                  <category.icon
                    className="w-7 h-7"
                    style={{ color: category.iconColor }}
                  />
                </div>
                <div>
                  <h2
                    className="font-heading font-bold text-2xl"
                    style={{ color: "oklch(0.22 0.06 250)" }}
                  >
                    {category.title}
                  </h2>
                  <p
                    className="text-sm mt-1 max-w-2xl"
                    style={{ color: "oklch(0.45 0.02 252)" }}
                  >
                    {category.description}
                  </p>
                </div>
              </motion.div>

              {/* Product Cards */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {category.products.map((product, i) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="card-hover rounded-lg overflow-hidden bg-white"
                    style={{ border: "1px solid oklch(0.88 0.01 250)" }}
                  >
                    <ProductVisual product={product} />
                    <div className="p-5">
                      <h3
                        className="font-heading font-bold text-base mb-2"
                        style={{ color: "oklch(0.22 0.06 250)" }}
                      >
                        {product.name}
                      </h3>
                      <p
                        className="text-xs leading-relaxed mb-4"
                        style={{ color: "oklch(0.45 0.02 252)" }}
                      >
                        {product.desc}
                      </p>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded transition-colors duration-200"
                        style={{
                          backgroundColor: "oklch(0.46 0.12 255)",
                          color: "white",
                        }}
                      >
                        Request Quote
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

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
            Don't See What You Need?
          </h2>
          <p className="text-white/60 mb-8 text-base">
            We source across 50+ product categories. Contact us with your
            requirements and we'll find the right manufacturer for you.
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-flex text-base px-8 py-3.5"
          >
            Discuss Your Requirements
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
