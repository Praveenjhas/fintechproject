import React from "react";
import { Link } from "react-router-dom";

export default function Careers() {
  const roles = [
    { id: 1, title: "Senior Backend Engineer", loc: "Remote / India" },
    { id: 2, title: "Product Manager — Payments", loc: "London" },
    { id: 3, title: "Customer Success Manager", loc: "New York" },
  ];

  return (
    <div className="container-max px-6 py-20">
      <h1 className="text-3xl font-bold">Careers</h1>
      <p className="mt-2 text-slate-600">
        Join the team building the future of financial technology.
      </p>

      <div className="mt-8 space-y-4">
        {roles.map((r) => (
          <div
            key={r.id}
            className="p-4 border rounded flex items-center justify-between"
          >
            <div>
              <div className="font-semibold">{r.title}</div>
              <div className="text-sm text-slate-600">{r.loc}</div>
            </div>
            <Link
              to="/contact"
              className="px-3 py-2 bg-primary-500 text-white rounded"
            >
              Apply
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
