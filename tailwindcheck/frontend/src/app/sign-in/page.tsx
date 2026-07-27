"use client";

import { useState } from "react";
import { signIn } from "@/lib/auth-client";
import { FaEnvelope, FaLock, FaCircleNotch, FaTooth } from "react-icons/fa";

export default function SignInPage() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const res = await signIn.email({
        email,
        password,
        callbackURL: "/dashboard",
      });

      if (res.error) {
        setError(res.error.message || "Invalid credentials. Please try again.");
        setIsLoading(false);
      }
    } catch (err) {
      setError("Unable to connect. Please try again later.");
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-warm-50 p-4 sm:p-8" aria-label="Sign in to appointment dashboard">
      <div className="fixed inset-0 overflow-hidden -z-10 opacity-20">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-terracotta blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#2b4859] blur-[120px]" />
      </div>

      <div className="w-full max-w-105 bg-white rounded-3xl shadow-2xl shadow-terracotta/10 overflow-hidden border border-warm-200">
        <div className="h-2 w-full bg-gradient-to-r from-terracotta via-[#2b4859] to-terracotta" />

        <div className="p-8 sm:p-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-terracotta to-[#2b4859] mb-6 shadow-lg rotate-3 hover:rotate-0 transition-transform duration-300">
              <FaTooth className="text-white text-4xl" />
            </div>
            <h1 className="font-heading text-3xl font-bold text-gray-900 tracking-tight">Portal Access</h1>
            <p className="text-gray-500 mt-2 text-sm font-medium">
              Manage your dental appointments
            </p>
          </div>

          {error && (
            <div className="mb-6 px-4 py-3 rounded-xl bg-red-50 border-l-4 border-red-500 text-red-700 text-xs font-semibold">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-[13px] font-bold text-gray-700 uppercase tracking-wider ml-1">
                Email
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-terracotta transition-colors">
                  <FaEnvelope size={16} />
                </div>
                <input
                  name="email"
                  type="email"
                  placeholder="doctor@clinic.com"
                  required
                  className="w-full bg-warm-50 border-2 border-warm-200 rounded-2xl pl-12 pr-4 py-4 text-gray-800 placeholder:text-gray-400 focus:border-terracotta focus:bg-white outline-none transition-all duration-200"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold text-gray-700 uppercase tracking-wider ml-1">
                Password
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-terracotta transition-colors">
                  <FaLock size={16} />
                </div>
                <input
                  name="password"
                  type="password"
                  placeholder="••••••••••••"
                  required
                  className="w-full bg-warm-50 border-2 border-warm-200 rounded-2xl pl-12 pr-4 py-4 text-gray-800 placeholder:text-gray-400 focus:border-terracotta focus:bg-white outline-none transition-all duration-200"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full bg-terracotta text-white font-bold rounded-2xl px-4 py-4 hover:bg-terracotta-dark active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-terracotta/20"
            >
              <div className="flex items-center justify-center gap-3">
                {isLoading ? (
                  <FaCircleNotch className="animate-spin text-xl text-white" />
                ) : (
                  <span className="flex items-center gap-2">
                    SIGN IN <span className="text-white">→</span>
                  </span>
                )}
              </div>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}