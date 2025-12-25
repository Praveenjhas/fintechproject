import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: headline */}
          <div className="lg:col-span-7">
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold mb-4">
              ENTERPRISE FINTECH PLATFORM
            </span>

            <h1 className="mt-4 text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 max-w-3xl">
              Powering the future of financial technology
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-2xl">
              Build, scale, and modernize digital banking, payments, and lending
              with a secure, modular, API-first platform trusted by institutions
              worldwide.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white rounded-md shadow-sm text-sm font-semibold hover:bg-indigo-700 transition"
              >
                Explore solutions →
              </Link>

              <Link
                to="/contact"
                className="text-sm text-slate-700 hover:underline"
              >
                Talk to experts
              </Link>
            </div>
          </div>

          {/* Right: feature card (inside the grid, not absolute) */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-indigo-600" />
                <h3 className="text-md font-semibold text-slate-900">
                  Why Fintech?
                </h3>
              </div>

              <ul className="mt-4 space-y-3 text-slate-600 text-sm">
                <li>✓ Cloud-native & secure by design</li>
                <li>✓ API-driven, modular architecture</li>
                <li>✓ Regulatory & compliance ready</li>
                <li>✓ Built for scale and performance</li>
              </ul>

              <div className="mt-6 border-t pt-4 text-sm text-slate-500">
                🚀 Industry-leading architecture trusted globally
              </div>
            </div>
          </div>
        </div>

        {/* Stats row — clear spacing below hero */}
        <div className="mt-12 md:mt-16">
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-slate-900">
                99.99%
              </div>
              <div className="mt-2 text-xs text-slate-500 uppercase tracking-wider">
                Uptime SLA
              </div>
            </div>

            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-slate-900">
                100+
              </div>
              <div className="mt-2 text-xs text-slate-500 uppercase tracking-wider">
                Institutions
              </div>
            </div>

            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-slate-900">
                24/7
              </div>
              <div className="mt-2 text-xs text-slate-500 uppercase tracking-wider">
                Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
