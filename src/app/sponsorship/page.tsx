"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navigation } from "../components/navbar";
import { DecorativeBorder } from "../components/decorativebackground";
import { Footer } from "../components/footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";
const ACCESS_KEY = "853b1a50-459c-4984-ad9f-565cbd80eab0"; 
const TO_EMAIL = "pcinaofficial@gmail.com";
const EMAIL_SUBJECT = "PCIN Awards Sponsorship Form Submission";

const tiers = [
  {
    key: "platinum",
    title: "PLATINUM",
    price: "₦5,000,000",
    bullets: [
      "Advert / Montage on LED Screen (5 times)",
      "Airtime: 3 minutes (CEO or representative)",
      "Continuous flash of business logo on LED screen",
      "Roll-up banner placement",
      "Special mention on our videos&apos; end credits",
      "Slot in event magazine / brochure",
    ],
    color: "bg-gradient-to-r from-orange-400 to-orange-600",
  },
  {
    key: "gold",
    title: "GOLD",
    price: "₦2,000,000",
    bullets: [
      "Advert / Montage on LED Screen (3 times)",
      "Airtime: 2 minutes (CEO or representative)",
      "Continuous flash of business logo on LED screen",
      "Roll-up banner placement",
      "Special mention on our videos&apos; end credits",
      "Slot in event magazine / brochure",
    ],
    color: "bg-yellow-400",
  },
  {
    key: "silver",
    title: "SILVER",
    price: "₦500,000",
    bullets: [
      "Continuous flash of business logo on LED screen",
      "Roll-up banner placement",
      "Special mention on our videos&apos; end credits",
      "Slot in event magazine / brochure",
    ],
    color: "bg-gray-200",
  },
  {
    key: "bronze",
    title: "BRONZE",
    price: "₦200,000",
    bullets: [
      "Roll-up banner placement",
      "Special mention on our videos&apos; end credits",
      "Slot in event magazine / brochure",
    ],
    color: "bg-orange-200",
  },
];

export default function SponsorshipPage() {
   useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Navigation />
      <DecorativeBorder />

      {/* Hero */}
      <header className="font-poppins relative py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-orange-600 font-semibold">
            PARTNERSHIP OPPORTUNITIES
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight" data-aos="zoom-in">
            Sponsorship Packages
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600" data-aos="fade-up">
            Partner with PCIN Awards to showcase your brand to creatives, industry leaders, and an engaged audience. Choose a tier that suits your visibility goals.
          </p>
        </div>
      </header>

      {/* Tiers */}
      <section className="font-poppins mx-auto px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {tiers.map((t, i) => (
            <article
              key={t.key}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="relative rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full" aria-hidden />
                  <div>
                    <h3 className="text-xl font-semibold">{t.title}</h3>
                    <p className="text-sm text-gray-500">{t.price}</p>
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className={`px-3 py-2 rounded-md text-xs font-semibold text-white ${t.color}`}>
                    SPONSOR
                  </div>
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-gray-700 text-sm">
                {t.bullets.map((b, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    const el = document.getElementById("sponsorship-form-section");
                    el?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-orange-700"
                >
                  Become a Sponsor
                </button>

                <a
                  className="text-sm text-gray-500 hover:underline"
                  href="#details"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("payment");
                    el?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                >
                  See details
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Sponsorship Form Section */}
      <section id="payment" className="bg-orange-50 py-12 font-poppins">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-start">
          {/* Left column: benefits */}
          <div data-aos="fade-right">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h4 className="text-lg font-semibold mb-3">Sponsorship Benefits</h4>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex gap-3 items-start">
                  <span className="mt-1 inline-block h-3 w-3 rounded-full bg-primary" />
                  Increased brand visibility and market penetration
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1 inline-block h-3 w-3 rounded-full bg-primary" />
                  Philanthropic and CSR exposure
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1 inline-block h-3 w-3 rounded-full bg-primary" />
                  Direct access to creative communities & talent
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1 inline-block h-3 w-3 rounded-full bg-primary" />
                  Media mentions and premium placement on event materials
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1 inline-block h-3 w-3 rounded-full bg-primary" />
                  Increased sales & brand loyalty through event publicity
                </li>
              </ul>

              <div className="mt-6 text-sm text-gray-500">
                <p>
                  Express your sponsorship interest below and our team will contact you with payment options and onboarding instructions.
                </p>
              </div>
            </div>
          </div>

          {/* Right column: Sponsorship form card */}
          <div data-aos="fade-left" id="sponsorship-form-section">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h4 className="text-xl font-semibold mb-2">Become a Sponsor</h4>
              <p className="text-sm text-gray-600 mb-4">
                Fill the form and we will reach out to finalize your sponsorship.
              </p>

              <SponsorshipForm />
            </div>
          </div>
        </div>
      </section>

      <DecorativeBorder />
      <Footer />
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* SponsorshipForm component (Web3Forms)                                      */
/* ------------------------------------------------------------------------- */
function SponsorshipForm() {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    sponsorshipPackage: "platinum",
    phone: "",
    email: "",
    message: "",
    hp: "", // honeypot field
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // basic validation
    if (!form.name || !form.email || !form.phone || !form.organization) {
      toast.error("Please complete required fields.");
      return;
    }

    // honeypot check (client-side)
    if (form.hp) {
      return; // silent reject for bots
    }

    setLoading(true);

    try {
      const payload = {
        access_key: ACCESS_KEY,
        subject: EMAIL_SUBJECT,
        to: TO_EMAIL,
        name: form.name,
        email: form.email,
        phone: form.phone,
        organization: form.organization,
        sponsorshipPackage: form.sponsorshipPackage,
        message: form.message,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (!res.ok || json.success === false) {
        console.error("Web3Forms error response:", json);
        throw new Error(json.message || "Failed to submit");
      }

      toast.success("Thank you! Your sponsorship request has been received.");
      setForm({
        name: "",
        organization: "",
        sponsorshipPackage: "platinum",
        phone: "",
        email: "",
        message: "",
        hp: "",
      });

      const sec = document.getElementById("sponsorship-form-section");
      sec?.scrollIntoView({ behavior: "smooth", block: "center" });
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-2">
      {/* Honeypot hidden field */}
      <input
        type="text"
        name="hp"
        value={form.hp}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <Input
        placeholder="Full Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
        className="py-3"
      />

      <Input
        placeholder="Company / Brand Name"
        name="organization"
        value={form.organization}
        onChange={handleChange}
        required
        className="py-3"
      />

      <div>
        <select
          name="sponsorshipPackage"
          value={form.sponsorshipPackage}
          onChange={handleChange}
          className="w-full rounded-md border px-3 py-3"
        >
          <option value="gold">Gold Sponsor — ₦2,000,000</option>
          <option value="silver">Silver Sponsor — ₦500,000</option>
          <option value="bronze">Bronze Sponsor — ₦200,000</option>
          <option value="platinum">Platinum Sponsor — ₦5,000,000</option>
        </select>
      </div>

      <Input
        placeholder="Phone Number"
        name="phone"
        type="tel"
        value={form.phone}
        onChange={handleChange}
        required
        className="py-3"
      />

      <Input
        placeholder="Email Address"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
        className="py-3"
      />

      <Textarea
        placeholder="Message"
        name="message"
        value={form.message}
        onChange={handleChange}
        className="py-3"
        required
      />

      <div className="flex items-center gap-3">
        <Button
          type="submit"
          disabled={loading}
          className={`px-6 py-3 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
        >
          {loading ? "Submitting..." : "Become a Sponsor"}
        </Button>

        <Button
          type="button"
          variant="outline"
          onClick={() =>
            setForm({
              name: "",
              organization: "",
              sponsorshipPackage: "platinum",
              phone: "",
              email: "",
              message: "",
              hp: "",
            })
          }
        >
          Reset
        </Button>
      </div>
    </form>
  );
}
