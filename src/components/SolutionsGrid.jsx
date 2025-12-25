import React from "react";
import { Link } from "react-router-dom";
import { SOLUTIONS } from "../data/solutions";

export default function SolutionsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {SOLUTIONS.map((s) => (
        <article
          key={s.id}
          className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition"
        >
          <div className="flex items-start gap-4">
            <div
              className="flex-none w-14 h-14 rounded-lg flex items-center justify-center text-2xl font-semibold"
              style={{
                background: "linear-gradient(135deg,#6366f1 0%,#7c3aed 100%)",
                color: "white",
              }}
              aria-hidden
            >
              {s.shortIcon ?? s.title.charAt(0)}
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 line-clamp-3">
                {s.summary}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <Link
                  to={`/solutions/${s.id}`}
                  className="text-indigo-600 font-medium inline-flex items-center gap-2"
                >
                  Learn more →
                </Link>

                <div className="text-xs text-slate-500">
                  {s.badge ?? (s.industry && s.industry[0])}
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
