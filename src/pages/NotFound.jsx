import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <section className="section-padding">
        <div className="container-max px-6 text-center max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="mb-8 animate-slide-up">
            <div className="text-9xl md:text-[10rem] font-display font-extrabold bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 bg-clip-text text-transparent leading-none">
              404
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-up" style={{ animationDelay: "100ms" }}>
            <h1 className="heading-lg text-neutral-900 font-display mb-4">
              Page Not Found
            </h1>
            <p className="text-body-lg text-neutral-600 max-w-xl mx-auto mb-8">
              We couldn't find the page you're looking for. It might have been
              moved or deleted. Let's get you back on track.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn-primary">
                <span className="flex items-center justify-center gap-2">
                  Return Home
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact Support
              </Link>
            </div>
          </div>

          {/* Decorative Elements */}
          <div
            className="mt-20 pt-20 border-t border-neutral-200 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <p className="text-neutral-500 text-sm font-medium uppercase tracking-wide">
              Lost? Here are some helpful links:
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-6">
              {[
                { label: "Solutions", href: "/solutions" },
                { label: "Resources", href: "/resources" },
                { label: "About", href: "/about" },
                { label: "Careers", href: "/careers" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
