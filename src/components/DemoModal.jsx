import React, { useEffect, useRef, useState } from "react";

export default function DemoModal({ open, onClose }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const firstRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    // Focus the first input when modal opens
    firstRef.current?.focus();
    // Prevent background scroll
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // replace with real POST in production
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    onClose();
    setName("");
    setCompany("");
    setEmail("");
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
    >
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative z-10 w-full max-w-md bg-white rounded-xl shadow-xl p-6 ring-1 ring-black/5">
        <h3 className="text-lg font-semibold">Request a demo</h3>

        <form onSubmit={submit} className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium">Full name</label>
            <input
              ref={firstRef}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border border-gray-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Company</label>
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="mt-1 block w-full border border-gray-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Business email</label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="mt-1 block w-full border border-gray-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary-400 outline-none"
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-md font-medium disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Request demo"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-sm text-gray-600 underline-offset-2 hover:underline"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
