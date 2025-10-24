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
import emailjs from "emailjs-com";
import { toast } from "sonner";

export function NominateNowDialog() {
  const [formData, setFormData] = useState({
    yourName: "",
    email: "",
    nomineeName: "",
    category: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_l6ns06h",       // your EmailJS service ID
        "template_i8agyu5",      // your EmailJS template ID
        {
          name: formData.yourName,
          email: formData.email,
          nomineeName: formData.nomineeName,
          category: formData.category,
        },
        "PGMAT2JTlePvhH-oR"      // your EmailJS public key
      )
      .then(
        () => {
          toast.success("Nomination submitted ✅");
          setFormData({ yourName: "", email: "", nomineeName: "", category: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to submit nomination ❌ Try again later.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="py-6 px-6">Nominate Now</Button>
      </DialogTrigger>

      <DialogContent className="lg:max-w-lg w-full font-poppins">
        <DialogHeader>
          <DialogTitle>Nominate Someone</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4 w-full max-w-md">
          <Input
            placeholder="Your Name"
            name="yourName"
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
            value={formData.nomineeName}
            onChange={handleChange}
            required
            className="py-6"
          />
          <Input
            placeholder="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="py-6"
          />

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
