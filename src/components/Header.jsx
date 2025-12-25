import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";

export default function Header({ onRequestDemo }) {
  const [open, setOpen] = useState(false);
  const nav = [
    { label: "Home", to: "/" },
    { label: "Solutions", to: "/solutions" },
    { label: "Resources", to: "/resources" },
    { label: "About", to: "/about" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center font-bold">
                F
              </div>
              <span className="font-extrabold hidden sm:inline">Fintech</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {nav.map((n) => (
                <NavLink
                  key={n.label}
                  to={n.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-indigo-600 font-medium"
                      : "text-slate-700 hover:text-indigo-600"
                  }
                >
                  {n.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Link
                to="/careers"
                className="text-sm text-slate-600 hidden sm:inline"
              >
                Careers
              </Link>
              <Link
                to="/contact"
                className="text-sm text-slate-600 hidden sm:inline"
              >
                Contact
              </Link>

              <button
                onClick={() => onRequestDemo?.()}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-semibold hover:bg-indigo-700"
              >
                Request demo
              </button>

              <button
                className="md:hidden p-2"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        onRequestDemo={() => {
          setOpen(false);
          onRequestDemo?.();
        }}
      />
    </>
  );
}
