"use client"

import { useState, useEffect } from "react"
import { User, Mail, Phone, Info, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import AOS from "aos"
import "aos/dist/aos.css"
import "../../app/globals.css"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 w-[100%] lg:px-0 px-6 text-slate-900"
      data-aos="fade-left"
    >
      <div className="w-full grid lg:grid-cols-2 grid-col-1 gap-4">
        {/** Name */}
       
         <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="pl-10 border-b border-gray-300 rounded-md focus:ring-0 focus:border-primary py-6"
              required
            />
          </div>
        </div>

        {/** Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="pl-10 py-6 border-b  border-gray-300 rounded-md focus:ring-0 focus:border-primary "
              required
            />
          </div>
        </div>
      

        {/** Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="pl-10 border-b py-6 border-gray-300 rounded-md focus:ring-0 focus:border-primary "
            />
          </div>
        </div>

        {/** Subject */}
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <div className="relative">
            <Info className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              id="subject"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="pl-10 border-b py-6 border-gray-300 rounded-md focus:ring-0 focus:border-primary"
            />
          </div>
        </div>
      </div>

      {/** Message */}
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can we help you?"
          value={formData.message}
          onChange={handleChange}
          required
          className="border-b border-gray-300 rounded-md focus:ring-0 focus:outline-none focus:border-primary min-h-[150px] resize-none py-3"
        />
      </div>

      {/** Submit Button */}
      <Button
        type="submit"
        className="flex items-center gap-2 bg-primary rounded-md text-white font-semibold px-6 py-3 w-full md:w-auto justify-center"
      >
        <Send className="h-4 w-4" /> Send Message
      </Button>
    </form>
  )
}
