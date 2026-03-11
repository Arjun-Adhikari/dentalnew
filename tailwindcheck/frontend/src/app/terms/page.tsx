"use client";
import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";

export default function TermsAndPrivacyPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto">

        {/* Page title */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service &amp; Privacy Policy</h1>
          <p className="text-sm text-gray-500">Last updated: March 2026 · Swargadwari Dental Care Home</p>
        </div>

        {/* ── Terms of Service ──────────────────────────────────── */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <h2 className="text-xl font-bold text-[#000080] mb-6 border-b pb-3">Terms of Service</h2>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">1. Acceptance of Terms</h3>
              <p>By accessing and using the Swargadwari Dental Care Home website (&quot;Site&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this Site.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">2. Use of the Site</h3>
              <p>This website is provided for informational purposes about our dental services. You may use the Site to browse services, request appointments, and contact us. You agree not to misuse the Site for unlawful purposes, to submit false appointment requests, or to interfere with the operation of the Site.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">3. Appointment Requests</h3>
              <p>Submitting an appointment request through this website does <strong>not</strong> guarantee a confirmed appointment. Our staff will contact you to confirm availability. Confirmed appointments can be cancelled or rescheduled by contacting us at least 24 hours in advance.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">4. Medical Disclaimer</h3>
              <p>The information provided on this Site is for general informational purposes only and does not constitute professional medical or dental advice. Always consult a qualified dental professional for diagnosis and treatment. Swargadwari Dental Care Home is not liable for any decisions made based solely on information from this website.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">5. Intellectual Property</h3>
              <p>All content on this website — including text, images, logos, and graphics — is the property of Swargadwari Dental Care Home and is protected by applicable copyright laws. You may not reproduce, distribute, or use any content without prior written permission.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">6. Limitation of Liability</h3>
              <p>To the fullest extent permitted by law, Swargadwari Dental Care Home shall not be liable for any indirect, incidental, or consequential damages arising from your use of, or inability to use, this website.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">7. Changes to Terms</h3>
              <p>We reserve the right to update these Terms at any time. Continued use of the Site after any changes constitutes acceptance of the new Terms.</p>
            </div>
          </div>
        </section>

        {/* ── Privacy Policy ────────────────────────────────────── */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <h2 className="text-xl font-bold text-[#000080] mb-6 border-b pb-3">Privacy Policy</h2>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">1. Information We Collect</h3>
              <p>When you use our website or submit an appointment request, we may collect:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                <li>Full name and contact number</li>
                <li>Preferred appointment date and time</li>
                <li>Reason for visit / dental concern</li>
                <li>Browser type and IP address (via standard server logs)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">2. How We Use Your Information</h3>
              <p>We use the information you provide solely to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                <li>Schedule and confirm appointments</li>
                <li>Contact you regarding your appointment or dental queries</li>
                <li>Improve our services and website experience</li>
              </ul>
              <p className="mt-2">We do <strong>not</strong> sell, trade, or rent your personal information to third parties.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">3. Data Security</h3>
              <p>We take reasonable precautions to protect your personal information from unauthorized access, disclosure, or misuse. However, no data transmission over the internet can be guaranteed to be completely secure.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">4. Cookies</h3>
              <p>This website may use cookies to enhance user experience (e.g., language preference). Cookies are small text files stored on your device. You can disable cookies in your browser settings, but some features of the Site may not function properly as a result.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">5. Third-Party Links</h3>
              <p>Our website may contain links to third-party sites (e.g., Facebook, Google Maps). We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies separately.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">6. Children&apos;s Privacy</h3>
              <p>Our website is not directed at children under 13. We do not knowingly collect personal information from children without parental consent. If you believe a child has submitted personal information, please contact us.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">7. Your Rights</h3>
              <p>You have the right to request access to, correction of, or deletion of any personal information we hold about you. To exercise these rights, contact us at the details below.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">8. Changes to This Policy</h3>
              <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date at the top.</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-[#000080] text-white rounded-2xl p-8 text-center">
          <h2 className="text-lg font-bold mb-2">Questions or Concerns?</h2>
          <p className="text-sm text-blue-200 mb-4">If you have questions about these policies, please reach out to us.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact" className="bg-white text-[#000080] font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors">
              Contact Us
            </Link>
            <Link href="/" className="text-sm text-blue-300 hover:text-white transition-colors">
              ← Back to Home
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
