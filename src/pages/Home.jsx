import React from "react";
import Hero from "../components/Hero";
import SolutionsGrid from "../components/SolutionsGrid";
import ResourcesGrid from "../components/ResourcesGrid";
import CTA from "../components/CTA";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <Hero />

      {/* SOLUTIONS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Enterprise solutions
            </h2>
            <p className="mt-3 text-slate-600">
              Modular, secure products to modernize core banking, payments, and
              financial infrastructure.
            </p>
          </div>

          <Link
            to="/solutions"
            className="text-indigo-600 font-medium hover:underline"
          >
            View all solutions →
          </Link>
        </div>

        <div className="mt-10">
          <SolutionsGrid />
        </div>
      </section>

      {/* RESOURCES SECTION */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Insights & resources
              </h2>
              <p className="mt-3 text-slate-600">
                Research, guides, and conversations shaping the future of
                financial services.
              </p>
            </div>

            <Link
              to="/resources"
              className="text-indigo-600 font-medium hover:underline"
            >
              Explore resources →
            </Link>
          </div>

          <div className="mt-10">
            <ResourcesGrid />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </main>
  );
}
