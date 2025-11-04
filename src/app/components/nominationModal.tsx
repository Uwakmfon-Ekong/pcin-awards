"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const ACCESS_KEY = "aff88a10-4122-4d6c-9a2d-d445b9da2ca3";


const CATEGORIES = [
 "Life Time Achievement Award",
  "Legendary Photography/Cinematography Industry Icon Award",
  "Rookie Cinematographer of the year",
  "Rookie Photographer of the year",
  "Professional Photographer of the year",
  "Professional Cinematographer of the year",
  "Photo frames Production Company of the year",
  "Photo lab/Enlargement Print Company of the year",
  "Most Entrepreneurial Creative of the year",
  "Most visual Creative Brand of the year",
  "Aerial Photographer/Cinematographer of the year",
  "Best Macro Photographer of the year",
  "Documentary Photographer/Cinematographers of the year",
  "Portrait Photographer of the year",
  "Content Creator of the year",
  "Mobile Photographer of The Year",
  "Media Influencer of the year",
  "Most Impactful Photographer of the year",
  "Wedding Cinematographer of the year",
  "Best Wedding Photographer of the year",
  "Event Vendor of the year!",
  "Women Icon Award in Photography",
  "Photographers Makeup Artist Choice of the year",
  "Photographers Wedding Planner Choice of the year",
  "Photographers' DJ Choice of the year",
  "Event Decorator of the year",
  "Sports Photographer of the year",
  "DOP of the year",
  "Media Personality of the year",
  "Event Reporter of the Year",
  "Event Media Blog of the Year",
  "Photopreneur of the year",
  "Frame Vendor of the year",
  "Studio Equipment vendor of the year"
];

export function NominateNowDialog() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    yourName: "",
    email: "",
    phone: "",
    nomineeName: "",
    category: CATEGORIES[0],
    subject: "",
    hp: "", 
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.yourName || !formData.email || !formData.nomineeName || !formData.category) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (formData.hp) return; // honeypot check

    setLoading(true);

    try {
      const payload = {
        access_key: ACCESS_KEY,
        name: formData.yourName,
        email: formData.email,
        phone: formData.phone,
        nomineeName: formData.nomineeName,
        category: formData.category,
        subject: "PCIN Awards Nomination",
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (!res.ok || json.success === false) {
        console.error("Web3Forms error:", json);
        throw new Error(json.message || "Failed to submit");
      }

      toast.success("Nomination submitted ✅");
      setFormData({
        yourName: "",
        email: "",
        phone: "",
        nomineeName: "",
        category: CATEGORIES[0],
        subject: "",
        hp: "",
      });
      setOpen(false);
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Failed to submit nomination ❌ Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="py-6 px-6">Nominate Now</Button>
      </DialogTrigger>

      <DialogContent className="lg:max-w-lg w-full font-poppins">
        <DialogHeader>
          <DialogTitle>Nominate Someone</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4 w-full max-w-md">
          {/* Honeypot hidden field */}
          <input
            type="text"
            name="hp"
            value={formData.hp}
            onChange={handleChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <Input
            placeholder="Your Name"
            name="yourName"
            type="text"
            value={formData.yourName}
            onChange={handleChange}
            required
            className="py-6"
          />
          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="py-6"
          />
          <Input
            placeholder="Nominee Name"
            name="nomineeName"
            type="text"
            value={formData.nomineeName}
            onChange={handleChange}
            required
            className="py-6"
          />
          <Input
            placeholder="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="py-6"
          />

          {/* Dropdown for Category */}
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full rounded-md border px-3 py-4"
            required
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <Button
            type="submit"
            className={`w-full mt-2 py-6 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
