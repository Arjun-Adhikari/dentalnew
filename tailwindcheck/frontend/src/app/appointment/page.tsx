"use client";

import { useState } from "react";
import { submitContactForm } from "../actions/contact";

export default function Page() {
  // Get current date and time string for the "min" attribute (YYYY-MM-DDTHH:mm)
  const getCurrentDateTime = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now.toISOString().slice(0, 16);
  };

  const [formData, setFormData] = useState({
    name: "",
    contactno: "",
    appointmentDate: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const result = await submitContactForm(formData);

    if (result.success) {
      setStatus("success");
      setFormData({ name: "", contactno: "", appointmentDate: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">Book an Appointment</h1>
        <p className="text-gray-500 text-sm text-center mb-6">Select your preferred date and time</p>

        {status === "success" && (
          <p className="bg-green-100 text-green-700 p-3 rounded-lg text-sm text-center mb-4 font-medium">
            Appointment requested successfully!
          </p>
        )}
        {status === "error" && (
          <p className="bg-red-100 text-red-700 p-3 rounded-lg text-sm text-center mb-4 font-medium">
            Something went wrong. Try again.
          </p>
        )}

        <form onSubmit={submitForm} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              id="name" type="text" name="name"
              placeholder="Your full name"
              value={formData.name} onChange={handleChange} required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:outline-none transition-all"
            />
          </div>

          {/* Contact Field */}
          <div>
            <label htmlFor="contactno" className="block text-sm font-medium text-gray-700 mb-1">Contact No</label>
            <input
              id="contactno"
              type="tel" // Use tel for better mobile keyboard
              name="contactno"
              placeholder="10 digit phone number"
              pattern="[0-9]{10}" // Browser-level validation for exactly 10 digits
              minLength={10}
              maxLength={10}
              value={formData.contactno} onChange={handleChange} required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:outline-none transition-all"
            />
          </div>

          {/* Date and Time Field */}
          <div>
            <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Date & Time
            </label>
            <input
              id="appointmentDate"
              type="datetime-local"
              name="appointmentDate"
              min={getCurrentDateTime()} // Prevents selection of past dates
              value={formData.appointmentDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:outline-none transition-all cursor-pointer"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Reason for Visit</label>
            <textarea
              id="message" name="message" rows={3}
              placeholder="Describe your dental issue..."
              value={formData.message} onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-terracotta text-white font-semibold py-3 rounded-lg hover:bg-terracotta-dark active:scale-95 transition-all shadow-md mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Processing..." : "Confirm Appointment"}
          </button>
        </form>
      </div>
    </div>
  );
}