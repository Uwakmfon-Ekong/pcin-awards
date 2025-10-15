"use client"

import type React from "react"
import { useState } from "react"
import { User, Mail, Phone, Info, Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-foreground">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-12 pl-10 pr-4 border-b text-black border-gray-300 rounded-md focus:outline-none text-"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-12 pl-10 pr-4 border-b text-black border-gray-300 rounded-md focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full h-12 pl-10 pr-4 border-b border-gray-300 rounded-md focus:outline-none text-black"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-gray-700">
            Subject
          </label>
          <div className="relative">
            <Info className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Enter subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full h-12 pl-10 pr-4 border-b border-gray-300 rounded-md focus:outline-none text-black"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="How can we help you? Feel free to get in touch!"
          value={formData.message}
          onChange={handleChange}
          className="w-full min-h-[200px] p-4 border-b -b-gray-300 rounded-md resize-none focus:outline-none text-black"
          required
        />
      </div>

      <button
        type="submit"
        className="h-12 px-8 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-md transition-colors duration-200 flex items-center gap-2"
      >
        <Send className="h-4 w-4" />
        GET IN TOUCH
      </button>
    </form>
  )
}
