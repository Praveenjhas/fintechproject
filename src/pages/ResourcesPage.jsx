import React from "react";
import ResourcesGrid from "../components/ResourcesGrid";

export default function ResourcesPage() {
  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900">
            Resources & Insights
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Expert articles, podcasts, and guides helping financial institutions
            build secure and scalable digital platforms.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-20">
          <ResourcesGrid />
        </div>
      </div>
    </section>
  );
}
