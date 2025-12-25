import React from "react";
import { useParams, Link } from "react-router-dom";
import { SOLUTIONS } from "../data/solutions";

export default function SolutionDetailPage() {
  const { id } = useParams();
  const sol = SOLUTIONS.find((s) => s.id === id);

  if (!sol) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold">Solution not found</h2>
        <Link to="/solutions" className="text-indigo-600 mt-4 inline-block">
          ← Back to solutions
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-white text-slate-800">
      <header className="max-w-7xl mx-auto px-6 py-12 border-b">
        <div className="max-w-4xl">
          <div className="text-sm font-semibold inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">
            Solution
          </div>

          <h1 className="mt-4 text-3xl font-extrabold text-slate-900">
            {sol.title}
          </h1>
          <p className="mt-3 text-slate-600">{sol.summary}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/solutions"
              className="text-sm text-slate-600 hover:underline"
            >
              ← Back to solutions
            </Link>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-semibold"
            >
              Contact sales
            </a>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Content */}
          <article className="lg:col-span-2 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Overview</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">{sol.content}</p>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-slate-900">Features</h3>
              <ul className="mt-4 grid gap-3">
                {sol.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg"
                  >
                    <div className="flex-none w-8 h-8 rounded-md flex items-center justify-center bg-indigo-600 text-white text-sm font-medium">
                      ✓
                    </div>
                    <div className="text-sm text-slate-700">{f}</div>
                  </li>
                ))}
              </ul>
            </div>

            {sol.caseStudy && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold">Case study</h3>
                <p className="mt-3 text-slate-700">{sol.caseStudy}</p>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-fit">
            <div className="text-sm text-slate-500">Quick facts</div>

            <dl className="mt-4 space-y-3">
              <div>
                <dt className="text-xs text-slate-500">Deployment</dt>
                <dd className="font-semibold text-slate-900">
                  {sol.deployment ?? "Cloud or on-prem"}
                </dd>
              </div>

              <div>
                <dt className="text-xs text-slate-500">Integrations</dt>
                <dd className="font-semibold text-slate-900">
                  {(sol.integrations || []).slice(0, 3).join(", ") ||
                    "APIs, Messaging"}
                </dd>
              </div>

              <div>
                <dt className="text-xs text-slate-500">SLA</dt>
                <dd className="font-semibold text-slate-900">
                  {sol.sla ?? "99.99%"}
                </dd>
              </div>
            </dl>

            <div className="mt-6">
              <a
                href="/contact"
                className="block w-full text-center px-4 py-2 bg-indigo-600 text-white rounded-md font-semibold"
              >
                Contact sales
              </a>
              <a
                href="#demo"
                className="block mt-3 text-center text-sm text-slate-600 hover:underline"
              >
                Request a demo
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
