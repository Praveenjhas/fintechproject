import React from "react";
import SolutionsGrid from "../components/SolutionsGrid";

export default function SolutionsPage() {
  return (
    <main className="bg-white text-slate-800">
      {/* HERO */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
              Solutions
            </span>

            <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Full product portfolio to operate and transform financial
              institutions
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              Modular products, composable services and enterprise-grade
              controls to modernize core banking, payments, and risk operations.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#solutions-grid"
                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-semibold shadow"
              >
                Explore solutions
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-md text-sm text-slate-700"
              >
                Contact sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section id="solutions-grid" className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-slate-900">
            Our solutions
          </h2>
          <p className="mt-2 text-slate-600 max-w-xl">
            Choose from platform modules designed for payments, accounts, core
            banking, compliance and developer-first APIs.
          </p>
        </div>

        <div className="mt-10">
          <SolutionsGrid />
        </div>
      </section>
    </main>
  );
}
