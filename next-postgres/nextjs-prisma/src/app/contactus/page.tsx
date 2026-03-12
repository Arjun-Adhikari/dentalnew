"use client";

import { useState } from "react";
import { submitContactForm } from "../actions/contact";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    contactno: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = async (e: any) => {
    e.preventDefault();
    setStatus("loading");
    const result = await submitContactForm(formData);
    if (result.success) {
      setStatus("success");
      setFormData({ name: "", contactno: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Get in Touch</h1>

        {status === "success" && (
          <p className="text-green-600 text-sm text-center mb-4">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-sm text-center mb-4">Something went wrong. Try again.</p>
        )}
        
        <form onSubmit={submitForm} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              id="name" type="text" name="name"
              placeholder="Your full name"
              value={formData.name} onChange={handleChange} required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>

          {/* Contact Field */}
          <div>
            <label htmlFor="contactno" className="block text-sm font-medium text-gray-700 mb-1">
              Contact No
            </label>
            <input
              id="contactno" type="text" name="contactno"
              placeholder="Phone number"
              value={formData.contactno} onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message" name="message" rows={4}
              placeholder="How can we help?"
              value={formData.message} onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>

          <button
            type="submit" disabled={status === "loading"}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 active:scale-95 transition-all shadow-md mt-2 disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}