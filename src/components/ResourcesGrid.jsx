import React from "react";
import { Link } from "react-router-dom";
import { RESOURCES } from "../data/resources";

export default function ResourcesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {RESOURCES.map((r) => (
        <Link
          key={r.id}
          to={`/resources/${r.id}`}
          className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all"
        >
          {/* Type */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">
              {r.type === "Article" && "📰"}
              {r.type === "eBook" && "📘"}
              {r.type === "Podcast" && "🎧"}
            </span>
            <span className="text-xs uppercase tracking-widest font-semibold text-gray-500">
              {r.type}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
            {r.title}
          </h3>

          {/* Excerpt */}
          <p className="mt-4 text-gray-600 leading-relaxed">{r.excerpt}</p>

          {/* CTA */}
          <div className="mt-6 text-blue-600 font-semibold flex items-center gap-2">
            Read more
            <span className="group-hover:translate-x-1 transition">→</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
