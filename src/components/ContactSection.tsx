import React, { useState } from 'react';
import { Mail, Send, Check, Copy, Building, MessageSquare, Clock, MapPin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const email = 'algae.plast.fuel@gmail.com';
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    senderEmail: '',
    organization: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted
      const textarea = document.createElement('textarea');
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate mailto link with form contents
    const encodedSubject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || 'Algae-Plast Fuel Visitor'}`
    );
    const bodyText = `Name: ${formData.name}\nEmail: ${formData.senderEmail}\nOrganization: ${formData.organization || 'N/A'}\n\nMessage:\n${formData.message}`;
    const encodedBody = encodeURIComponent(bodyText);

    window.location.href = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact-us" className="py-16 md:py-20 border-b border-[#d9c8b8] bg-[#fff1e5]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Heading (H2) */}
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#262a33]">
          <Mail className="w-6 h-6 text-[#990f3d]" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a]">
            Contact Us
          </h2>
        </div>

        {/* Subheading (H3) */}
        <h3 className="font-serif text-xl sm:text-2xl text-[#990f3d] font-semibold mb-6">
          Research Collaborations, Pilot Deployments &amp; Technical Inquiries
        </h3>

        {/* Introductory text */}
        <p className="font-serif text-base sm:text-lg text-[#262a33] leading-relaxed mb-8">
          We welcome inquiries from academic institutions, municipal waste management authorities, industrial partners, and clean technology investors interested in scaling the closed-loop co-pyrolysis and algae wastewater remediation platform.
        </p>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Primary Email Card */}
          <div className="bg-[#f6e9dc] p-5 border border-[#d9c8b8] md:col-span-2 shadow-xs">
            <span className="font-sans text-xs font-bold text-[#990f3d] uppercase tracking-wider block mb-1">
              Direct Contact
            </span>
            <div className="font-serif text-xl sm:text-2xl font-bold text-[#1a1a1a] break-all my-2">
              <a
                href={`mailto:${email}`}
                className="hover:text-[#990f3d] hover:underline transition-colors"
                id="contact-direct-email-link"
              >
                {email}
              </a>
            </div>
            <p className="font-serif text-xs sm:text-sm text-[#4d4845] mb-4">
              Direct correspondence channel for technical evaluations, grant partnerships, and venture discussions.
            </p>

            <div className="flex flex-wrap gap-2.5">
              <a
                href={`mailto:${email}?subject=Inquiry%20regarding%20Algae-Plast%20Fuel`}
                id="btn-compose-email"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#990f3d] hover:bg-[#730b2e] text-white text-xs sm:text-sm font-sans font-semibold transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>Compose Email</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                id="btn-copy-email"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#fff1e5] hover:bg-[#ebdccc] text-[#1a1a1a] border border-[#d9c8b8] text-xs sm:text-sm font-sans font-medium transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-700" />
                    <span className="text-emerald-800 font-semibold">Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#4d4845]" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick Context Details Card */}
          <div className="bg-[#f6e9dc] p-5 border border-[#d9c8b8] flex flex-col justify-between shadow-xs">
            <div>
              <span className="font-sans text-xs font-bold text-[#990f3d] uppercase tracking-wider block mb-2">
                Communications Protocol
              </span>
              <ul className="space-y-3 font-serif text-xs sm:text-sm text-[#333]">
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#990f3d] shrink-0 mt-0.5" />
                  <span>Responses typically dispatched within 24–48 business hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Building className="w-4 h-4 text-[#990f3d] shrink-0 mt-0.5" />
                  <span>Pilot testing facility &amp; engineering lab visits arranged on request.</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#990f3d] shrink-0 mt-0.5" />
                  <span>Dhaka, Bangladesh</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Formal Inquiry Form Card */}
        <div className="bg-[#f6e9dc] p-6 sm:p-8 border border-[#262a33] shadow-sm">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#d9c8b8]">
            <MessageSquare className="w-5 h-5 text-[#990f3d]" />
            <h4 className="font-serif text-lg sm:text-xl font-bold text-[#1a1a1a]">
              Send an Inquiry
            </h4>
          </div>

          <p className="font-serif text-xs sm:text-sm text-[#4d4845] mb-6">
            Fill in the details below to formulate a direct message to our engineering and research leadership team.
          </p>

          {submitted && (
            <div className="mb-6 p-4 bg-[#e8f4ed] border border-[#3e8a60] text-[#1b4d2e] font-serif text-xs sm:text-sm">
              Your default email client has been launched with your inquiry addressed to <strong>{email}</strong>. If your mail client did not open automatically, please send your email directly to <a href={`mailto:${email}`} className="underline font-bold">{email}</a>.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-sans text-xs font-bold text-[#1a1a1a] mb-1 uppercase tracking-wide"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Dr. Jane Doe"
                  className="w-full px-3 py-2 bg-[#fff1e5] border border-[#d9c8b8] focus:border-[#262a33] focus:outline-none font-serif text-sm text-[#1a1a1a]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block font-sans text-xs font-bold text-[#1a1a1a] mb-1 uppercase tracking-wide"
                >
                  Your Email Address *
                </label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  value={formData.senderEmail}
                  onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                  placeholder="name@organization.org"
                  className="w-full px-3 py-2 bg-[#fff1e5] border border-[#d9c8b8] focus:border-[#262a33] focus:outline-none font-serif text-sm text-[#1a1a1a]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-org"
                  className="block font-sans text-xs font-bold text-[#1a1a1a] mb-1 uppercase tracking-wide"
                >
                  Institution / Company
                </label>
                <input
                  type="text"
                  id="contact-org"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="University, Enterprise or Municipal Agency"
                  className="w-full px-3 py-2 bg-[#fff1e5] border border-[#d9c8b8] focus:border-[#262a33] focus:outline-none font-serif text-sm text-[#1a1a1a]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block font-sans text-xs font-bold text-[#1a1a1a] mb-1 uppercase tracking-wide"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Research Collaboration / Pilot Deployment / General Inquiry"
                  className="w-full px-3 py-2 bg-[#fff1e5] border border-[#d9c8b8] focus:border-[#262a33] focus:outline-none font-serif text-sm text-[#1a1a1a]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block font-sans text-xs font-bold text-[#1a1a1a] mb-1 uppercase tracking-wide"
              >
                Inquiry Message *
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Please outline the scope of your inquiry, technical interest, or potential collaboration parameters..."
                className="w-full px-3 py-2 bg-[#fff1e5] border border-[#d9c8b8] focus:border-[#262a33] focus:outline-none font-serif text-sm text-[#1a1a1a] resize-y"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="font-serif text-xs text-[#66605b] order-2 sm:order-1">
                Transmitted directly to <span className="font-semibold text-[#1a1a1a]">{email}</span>
              </span>

              <button
                type="submit"
                id="btn-submit-inquiry"
                className="order-1 sm:order-2 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#990f3d] hover:bg-[#730b2e] text-white text-sm font-sans font-semibold transition-colors shadow-xs"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
