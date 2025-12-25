import React from "react";

const TEAM = [
  { name: "Sarah Johnson", role: "CEO & Co-founder", initials: "SJ" },
  { name: "Alex Chen", role: "CTO & Co-founder", initials: "AC" },
  { name: "Maria Garcia", role: "VP Engineering", initials: "MG" },
  { name: "James Wilson", role: "VP Product", initials: "JW" },
];

const VALUES = [
  {
    icon: "🔒",
    title: "Security",
    description:
      "Enterprise-grade security built into every layer of our platform.",
  },
  {
    icon: "⚡",
    title: "Reliability",
    description: "99.99% uptime SLA with redundancy and disaster recovery.",
  },
  {
    icon: "🔓",
    title: "Openness",
    description: "API-first architecture for seamless integrations.",
  },
  {
    icon: "🎯",
    title: "Customer Success",
    description: "Dedicated to your success with 24/7 support and guidance.",
  },
];

export default function About() {
  return (
    <main className="bg-white text-slate-800">
      {/* HERO */}
      <section className="bg-gradient-to-br from-indigo-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold">
              About us
            </span>

            <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Transforming{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                financial
              </span>{" "}
              infrastructure
            </h1>

            <p className="mt-6 text-lg text-slate-600">
              We build modern, secure, and composable software for financial
              institutions worldwide. Our approach prioritizes modularity,
              security, and developer experience to accelerate digital
              transformation.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900">
              Our core values
            </h2>
            <p className="mt-3 text-slate-600">
              Principles that guide how we design, build and operate our
              platform.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl">{v.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-xl font-semibold">Our mission</h3>
              <p className="mt-4 text-sm md:text-base text-white/90 leading-relaxed">
                To empower financial institutions to deliver modern, secure
                digital services at scale. We believe technology should enable
                innovation, not hinder it.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Our vision</h3>
              <p className="mt-4 text-sm md:text-base text-white/90 leading-relaxed">
                A world where organizations of any size can compete globally
                with secure infrastructure, composable platforms, and
                best-in-class customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900">
              Leadership team
            </h2>
            <p className="mt-3 text-slate-600">
              Experienced leaders from fintech and enterprise software.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-12"></div>
      </section>
    </main>
  );
}
