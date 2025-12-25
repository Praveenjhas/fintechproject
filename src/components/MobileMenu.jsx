import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { SOLUTIONS } from "../data/solutions";

export default function MobileMenu({ open, onClose, onRequestDemo }) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Drawer */}
      <aside className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <span className="font-bold text-lg">Menu</span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 rounded hover:bg-slate-100"
          >
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
          {/* Main links */}
          <div className="space-y-3">
            <NavLink
              to="/"
              onClick={onClose}
              className={({ isActive }) =>
                `block font-semibold ${
                  isActive ? "text-indigo-600" : "text-slate-900"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/solutions"
              onClick={onClose}
              className={({ isActive }) =>
                `block font-semibold ${
                  isActive ? "text-indigo-600" : "text-slate-900"
                }`
              }
            >
              Solutions
            </NavLink>
          </div>

          {/* Solutions list */}
          <div className="pl-3 space-y-2">
            {SOLUTIONS?.map((s) => (
              <Link
                key={s.id}
                to={`/solutions/${s.id}`}
                onClick={onClose}
                className="block text-sm text-slate-600 hover:text-indigo-600"
              >
                {s.title}
              </Link>
            ))}
          </div>

          {/* Secondary links */}
          <div className="space-y-3 pt-4 border-t">
            <NavLink
              to="/resources"
              onClick={onClose}
              className="block font-semibold text-slate-900"
            >
              Resources
            </NavLink>

            <NavLink
              to="/about"
              onClick={onClose}
              className="block font-semibold text-slate-900"
            >
              About
            </NavLink>

            <NavLink
              to="/careers"
              onClick={onClose}
              className="block font-semibold text-slate-900"
            >
              Careers
            </NavLink>

            <NavLink
              to="/contact"
              onClick={onClose}
              className="block font-semibold text-slate-900"
            >
              Contact
            </NavLink>
          </div>
        </nav>

        {/* CTA */}
        <div className="px-5 py-4 border-t">
          <button
            onClick={() => {
              onRequestDemo?.();
              onClose();
            }}
            className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
          >
            Request demo
          </button>
        </div>
      </aside>
    </div>
  );
}
