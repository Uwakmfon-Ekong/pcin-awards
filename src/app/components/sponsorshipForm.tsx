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
  DialogClose,
} from "@/components/ui/dialog";
import emailjs from "emailjs-com";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";

export function SponsorshipDialog() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_l6ns06h", // Replace with your EmailJS service ID
        "template_i8agyu5", // Replace with your EmailJS sponsorship template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "PGMAT2JTlePvhH-oR" // Replace with your EmailJS public key
      )
      .then(
        () => {
          toast.success("Sponsorship request sent ✅");
          setFormData({ name: "", email: "", phone: "", message: "" });
          const closeButton = document.getElementById("closeSponsorDialog");
          closeButton?.click();
        },
        () => {
          toast.error("Failed to send request ❌ Try again later.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="py-6 px-6">Become a Sponsor</Button>
      </DialogTrigger>
      <DialogContent className="lg:max-w-lg w-full font-poppins">
        <DialogHeader>
          <DialogTitle>Sponsorship Form</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4 w-full max-w-md">
          <Input
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="py-6"
          />
          <Input
            placeholder="Email Address"
            type="email"
            name="email"
            value={formData.email}
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
            required
            className="py-6"
          />
          <Textarea
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="py-6"
          />

          <Button
            type="submit"
            className={`w-full mt-2 py-6 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </Button>

          <DialogClose asChild>
            <button id="closeSponsorDialog" className="hidden"></button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
}
