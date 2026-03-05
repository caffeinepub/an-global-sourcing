import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import {
  AlertCircle,
  CheckCircle2,
  Globe,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useActor } from "../hooks/useActor";

interface InquiryFormData {
  name: string;
  company: string;
  country: string;
  email: string;
  message: string;
}

const countries = [
  "United Kingdom",
  "Germany",
  "France",
  "Netherlands",
  "Italy",
  "Spain",
  "Belgium",
  "Sweden",
  "Denmark",
  "Norway",
  "Switzerland",
  "Austria",
  "Poland",
  "Czech Republic",
  "Portugal",
  "Australia",
  "United States",
  "Canada",
  "India",
  "Other",
];

export default function ContactPage() {
  const { actor } = useActor();
  const [formData, setFormData] = useState<InquiryFormData>({
    name: "",
    company: "",
    country: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<InquiryFormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = useMutation({
    mutationFn: async (data: InquiryFormData) => {
      if (!actor) throw new Error("Backend not available");
      return actor.submitInquiry(
        data.name,
        data.company,
        data.country,
        data.email,
        data.message,
      );
    },
    onSuccess: () => {
      setSubmitted(true);
      setFormData({
        name: "",
        company: "",
        country: "",
        email: "",
        message: "",
      });
    },
  });

  const validate = (): boolean => {
    const newErrors: Partial<InquiryFormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    submitMutation.mutate(formData);
  };

  const handleChange = (field: keyof InquiryFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

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
              Reach Out
            </p>
            <h1
              className="font-heading font-bold text-white mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Get In Touch
            </h1>
            <p className="text-white/60 max-w-2xl text-lg leading-relaxed">
              Let's Build Long-Term Business Together — tell us about your
              sourcing needs and we'll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Info card */}
              <div
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: "oklch(0.96 0 0)",
                  border: "1px solid oklch(0.88 0.01 250)",
                }}
              >
                <h3
                  className="font-heading font-bold text-lg mb-5"
                  style={{ color: "oklch(0.22 0.06 250)" }}
                >
                  Company Information
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <User
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: "oklch(0.46 0.12 255)" }}
                    />
                    <div>
                      <p
                        className="text-xs font-medium mb-0.5"
                        style={{ color: "oklch(0.55 0.02 252)" }}
                      >
                        Company
                      </p>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: "oklch(0.22 0.06 250)" }}
                      >
                        AN Global Sourcing
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <User
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: "oklch(0.46 0.12 255)" }}
                    />
                    <div>
                      <p
                        className="text-xs font-medium mb-0.5"
                        style={{ color: "oklch(0.55 0.02 252)" }}
                      >
                        Founder
                      </p>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: "oklch(0.22 0.06 250)" }}
                      >
                        Abhishek Gupta
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: "oklch(0.46 0.12 255)" }}
                    />
                    <div>
                      <p
                        className="text-xs font-medium mb-0.5"
                        style={{ color: "oklch(0.55 0.02 252)" }}
                      >
                        Location
                      </p>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: "oklch(0.22 0.06 250)" }}
                      >
                        India
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: "oklch(0.55 0.02 252)" }}
                      >
                        Serving UK, Europe & Global Markets
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: "oklch(0.46 0.12 255)" }}
                    />
                    <div>
                      <p
                        className="text-xs font-medium mb-0.5"
                        style={{ color: "oklch(0.55 0.02 252)" }}
                      >
                        Email
                      </p>
                      <a
                        href="mailto:anglobalsourcing@gmail.com"
                        className="text-sm font-semibold hover:underline"
                        style={{ color: "oklch(0.46 0.12 255)" }}
                      >
                        anglobalsourcing@gmail.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-5 rounded-xl text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                style={{ backgroundColor: "oklch(0.55 0.18 142)" }}
              >
                <MessageCircle className="w-6 h-6 shrink-0" />
                <div>
                  <div className="font-semibold text-sm">WhatsApp Inquiry</div>
                  <div className="text-xs text-white/70 mt-0.5">
                    Chat with us directly for quick responses
                  </div>
                </div>
              </a>

              {/* Map placeholder */}
              <div
                className="rounded-xl overflow-hidden"
                style={{ border: "1px solid oklch(0.88 0.01 250)" }}
              >
                <div
                  className="h-40 flex flex-col items-center justify-center relative overflow-hidden"
                  style={{ backgroundColor: "oklch(0.22 0.06 250)" }}
                >
                  <div className="absolute inset-0 grid-pattern opacity-40" />
                  <Globe
                    className="relative z-10 w-10 h-10 mb-2 opacity-60"
                    style={{ color: "oklch(0.60 0.10 255)" }}
                  />
                  <p className="relative z-10 text-white font-medium text-sm">
                    Find Us — India
                  </p>
                  <p className="relative z-10 text-white/50 text-xs mt-1">
                    Serving UK, Europe & Global Markets
                  </p>
                </div>
                <div
                  className="px-4 py-3"
                  style={{ backgroundColor: "oklch(0.97 0 0)" }}
                >
                  <p
                    className="text-xs"
                    style={{ color: "oklch(0.50 0.02 252)" }}
                  >
                    🇮🇳 Based in India · Manufacturing & sourcing operations
                    nationwide
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div
                  className="h-full flex flex-col items-center justify-center text-center p-12 rounded-xl"
                  style={{
                    backgroundColor: "oklch(0.96 0 0)",
                    border: "1px solid oklch(0.88 0.01 250)",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: "oklch(0.55 0.18 142 / 0.15)" }}
                  >
                    <CheckCircle2
                      className="w-8 h-8"
                      style={{ color: "oklch(0.55 0.18 142)" }}
                    />
                  </div>
                  <h3
                    className="font-heading font-bold text-xl mb-3"
                    style={{ color: "oklch(0.22 0.06 250)" }}
                  >
                    Inquiry Submitted!
                  </h3>
                  <p
                    className="text-base leading-relaxed mb-6"
                    style={{ color: "oklch(0.45 0.02 252)" }}
                  >
                    Your inquiry has been submitted. We'll get back to you
                    within 24 hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="text-sm"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 rounded-xl space-y-5"
                  style={{
                    backgroundColor: "oklch(0.97 0 0)",
                    border: "1px solid oklch(0.88 0.01 250)",
                  }}
                >
                  <div className="mb-6">
                    <h3
                      className="font-heading font-bold text-xl mb-1"
                      style={{ color: "oklch(0.22 0.06 250)" }}
                    >
                      Send Us an Inquiry
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "oklch(0.50 0.02 252)" }}
                    >
                      Fill in your details and we'll respond within 24 hours.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="name"
                        className="text-xs font-semibold"
                        style={{ color: "oklch(0.30 0.04 252)" }}
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={errors.name ? "border-red-400" : ""}
                        autoComplete="name"
                      />
                      {errors.name && (
                        <p className="text-xs flex items-center gap-1 text-red-500">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Company */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="company"
                        className="text-xs font-semibold"
                        style={{ color: "oklch(0.30 0.04 252)" }}
                      >
                        Company Name *
                      </Label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Your company"
                        value={formData.company}
                        onChange={(e) =>
                          handleChange("company", e.target.value)
                        }
                        className={errors.company ? "border-red-400" : ""}
                        autoComplete="organization"
                      />
                      {errors.company && (
                        <p className="text-xs flex items-center gap-1 text-red-500">
                          <AlertCircle className="w-3 h-3" />
                          {errors.company}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Country */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="country"
                        className="text-xs font-semibold"
                        style={{ color: "oklch(0.30 0.04 252)" }}
                      >
                        Country *
                      </Label>
                      <select
                        id="country"
                        value={formData.country}
                        onChange={(e) =>
                          handleChange("country", e.target.value)
                        }
                        className={`w-full rounded-md border px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                          errors.country ? "border-red-400" : "border-input"
                        }`}
                        style={{ backgroundColor: "white" }}
                      >
                        <option value="">Select country</option>
                        {countries.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      {errors.country && (
                        <p className="text-xs flex items-center gap-1 text-red-500">
                          <AlertCircle className="w-3 h-3" />
                          {errors.country}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="email"
                        className="text-xs font-semibold"
                        style={{ color: "oklch(0.30 0.04 252)" }}
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@company.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={errors.email ? "border-red-400" : ""}
                        autoComplete="email"
                      />
                      {errors.email && (
                        <p className="text-xs flex items-center gap-1 text-red-500">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="message"
                      className="text-xs font-semibold"
                      style={{ color: "oklch(0.30 0.04 252)" }}
                    >
                      Your Inquiry *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe the products you're looking to source, quantities, target pricing, and any specific requirements..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={5}
                      className={errors.message ? "border-red-400" : ""}
                    />
                    {errors.message && (
                      <p className="text-xs flex items-center gap-1 text-red-500">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Error state */}
                  {submitMutation.isError && (
                    <div
                      className="p-4 rounded-lg flex items-center gap-3 text-sm"
                      style={{
                        backgroundColor: "oklch(0.95 0.02 27)",
                        border: "1px solid oklch(0.85 0.06 27)",
                        color: "oklch(0.45 0.15 27)",
                      }}
                    >
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>
                        Something went wrong. Please try again or contact us via
                        WhatsApp.
                      </span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={submitMutation.isPending}
                    className="w-full py-3 text-sm font-semibold"
                    style={{
                      backgroundColor: "oklch(0.46 0.12 255)",
                      color: "white",
                    }}
                  >
                    {submitMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Inquiry"
                    )}
                  </Button>

                  <p
                    className="text-xs text-center"
                    style={{ color: "oklch(0.60 0.02 252)" }}
                  >
                    We respond to all inquiries within 24 hours.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="py-16 relative overflow-hidden"
        style={{ backgroundColor: "oklch(0.22 0.06 250)" }}
      >
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2
            className="font-heading font-bold text-white mb-3"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
          >
            Let's Build Long-Term Business Together
          </h2>
          <p className="text-white/60 text-base">
            Whether you're new to India sourcing or looking for a more reliable
            partner, AN Global Sourcing is ready to support your business
            growth.
          </p>
        </div>
      </section>
    </div>
  );
}
