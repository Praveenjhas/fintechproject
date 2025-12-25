import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

/* ---------- Inline SVG icons (small, crisp) ---------- */
const IconEmail = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" {...props}>
    <path
      d="M3 7.5v9A2.5 2.5 0 0 0 5.5 19h13A2.5 2.5 0 0 0 21 16.5v-9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 8.25L12.75 13 4.5 8.25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" {...props}>
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 8.81 19.79 19.79 0 0 1 0 0.18 2 2 0 0 1 2 0h3a2 2 0 0 1 2 1.72c.12.91.36 1.8.72 2.64a2 2 0 0 1-.45 2.11L6 8.59a16 16 0 0 0 7.41 7.41l1.12-1.12a2 2 0 0 1 2.11-.45c.84.36 1.73.6 2.64.72A2 2 0 0 1 22 16.92z"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconLocation = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" {...props}>
    <path
      d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 10.5c0 6-9 11.5-9 11.5S3 16.5 3 10.5A9 9 0 0 1 21 10.5z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ---------- polished contact card ---------- */
function ContactCard({ icon, title, desc, meta }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
          {icon}
        </div>

        <div className="flex-1">
          <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
          <div className="mt-1 text-sm text-slate-600">{desc}</div>
          {meta && (
            <div className="mt-3 text-xs text-slate-400 uppercase tracking-wide">
              {meta}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- main Contact page ---------- */
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const liveRef = useRef(null);

  useEffect(() => {
    if (status === "success") liveRef.current?.focus();
  }, [status]);

  const update = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // simple client-side validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      // simulate API call
      await new Promise((r) => setTimeout(r, 900));
      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <main className="bg-gray-50">
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="inline-block text-xs px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-semibold">
              Contact
            </p>
            <h1 className="mt-6 text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Get in touch — we’re here to help
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Whether you’re evaluating our platform or need support, our team
              is available worldwide. Share some details and we’ll respond
              quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact methods + form */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 -mt-12">
          {/* Left: contact cards */}
          <div className="lg:col-span-1 space-y-4">
            <ContactCard
              icon={<IconEmail />}
              title="Email"
              desc={
                <a
                  className="text-indigo-600 hover:underline"
                  href="mailto:hello@fintech.local"
                >
                  hello@fintech.local
                </a>
              }
              meta="Response within 2 hours"
            />
            <ContactCard
              icon={<IconPhone />}
              title="Phone"
              desc={
                <a className="text-slate-700" href="tel:+1234567890">
                  +1 (234) 567-890
                </a>
              }
              meta="Available 24/7"
            />
            <ContactCard
              icon={<IconLocation />}
              title="Headquarters"
              desc="San Francisco, CA"
              meta="Global presence"
            />
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h4 className="text-sm font-semibold text-slate-900">
                Need immediate help?
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                Call our support hotline or start a live chat for priority
                assistance.
              </p>
              <div className="mt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-indigo-600 font-medium"
                >
                  Start live chat →
                </Link>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900">
                    Send us a message
                  </h2>
                  <p className="mt-2 text-sm text-slate-600">
                    Tell us a little about your project or question and we’ll
                    respond shortly.
                  </p>
                </div>

                <div className="hidden sm:block text-right">
                  <p className="text-xs text-slate-500">Sales inquiry?</p>
                  <a
                    className="text-indigo-600 font-medium"
                    href="mailto:sales@fintech.local"
                  >
                    sales@fintech.local
                  </a>
                </div>
              </div>

              {/* Form */}
              <form
                onSubmit={onSubmit}
                className="mt-6 grid grid-cols-1 gap-4"
                noValidate
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-sm font-medium text-slate-700">
                      Full name
                    </span>
                    <input
                      name="name"
                      value={form.name}
                      onChange={update}
                      required
                      className="mt-2 block w-full rounded-md border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="John Doe"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-slate-700">
                      Work email
                    </span>
                    <input
                      name="email"
                      value={form.email}
                      onChange={update}
                      type="email"
                      required
                      className="mt-2 block w-full rounded-md border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="john@company.com"
                    />
                  </label>
                </div>

                <label>
                  <span className="text-sm font-medium text-slate-700">
                    Company (optional)
                  </span>
                  <input
                    name="company"
                    value={form.company}
                    onChange={update}
                    className="mt-2 block w-full rounded-md border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Company name"
                  />
                </label>

                <label>
                  <span className="text-sm font-medium text-slate-700">
                    Message
                  </span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={update}
                    rows="6"
                    required
                    className="mt-2 block w-full rounded-md border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Tell us about your use case, timeline, and budget (if any)..."
                  />
                </label>

                <div className="flex items-center gap-4 mt-1">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-md font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
                  >
                    {status === "sending" ? "Sending…" : "Send message"}
                  </button>

                  <div className="text-sm text-slate-500">
                    Or{" "}
                    <a
                      className="text-indigo-600"
                      href="mailto:hello@fintech.local"
                    >
                      email us
                    </a>
                  </div>
                </div>

                {/* live region for accessibility */}
                <div
                  tabIndex={-1}
                  ref={liveRef}
                  aria-live="polite"
                  className="mt-4"
                >
                  {status === "success" && (
                    <div className="rounded-md bg-green-50 border border-green-100 p-4 text-green-700">
                      <strong>Thanks —</strong> we received your message and
                      will get back shortly.
                    </div>
                  )}

                  {status === "error" && (
                    <div className="rounded-md bg-amber-50 border border-amber-100 p-4 text-amber-700">
                      Please complete all required fields and try again.
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* small faq / hours card */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 text-center">
                <div className="text-sm text-slate-500">Support</div>
                <div className="mt-2 font-semibold text-slate-900">24/7</div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 text-center">
                <div className="text-sm text-slate-500">Typical response</div>
                <div className="mt-2 font-semibold text-slate-900">2 hours</div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 text-center">
                <div className="text-sm text-slate-500">SLA</div>
                <div className="mt-2 font-semibold text-slate-900">99.99%</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
