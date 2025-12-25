import React from "react";
import { useParams, Link } from "react-router-dom";
import { RESOURCES } from "../data/resources";

export default function ResourceDetailPage() {
  const { id } = useParams();
  const resource = RESOURCES.find((r) => r.id === id);

  if (!resource) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-semibold">Resource not found</h2>
        <Link to="/resources" className="text-blue-600 mt-4 inline-block">
          ← Back to Resources
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <article className="bg-white rounded-2xl p-12 shadow-sm">
          {/* Type */}
          <div className="text-xs uppercase tracking-widest font-semibold text-blue-600">
            {resource.type}
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mt-4">
            {resource.title}
          </h1>

          {/* Divider */}
          <div className="h-px bg-gray-200 my-8" />

          {/* Content */}
          <p className="text-lg text-gray-700 leading-relaxed">
            {resource.content}
          </p>

          {/* Back */}
          <div className="mt-12">
            <Link
              to="/resources"
              className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition"
            >
              ← Back to Resources
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
