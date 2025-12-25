import React from "react";
import { Link } from "react-router-dom";
import { SOLUTIONS } from "../data/solutions";

export default function MegaMenu() {
  return (
    <div className="absolute left-0 mt-2 w-screen max-w-4xl bg-white border rounded shadow-lg z-50">
      <div className="grid grid-cols-2 gap-6 p-6">
        <div>
          <h4 className="text-sm uppercase text-slate-500">Products</h4>
          <ul className="mt-4 space-y-3">
            {SOLUTIONS.map((s) => (
              <li key={s.id}>
                <Link
                  to={`/solutions/${s.id}`}
                  className="block hover:bg-slate-50 p-2 rounded"
                >
                  <div className="font-semibold">{s.title}</div>
                  <div className="text-sm text-slate-500">{s.summary}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase text-slate-500">Platform</h4>
          <p className="mt-2 text-sm text-slate-600">
            Composable architecture, open APIs, security-first design and
            flexible deployment models — cloud, hybrid or on-prem.
          </p>

          <div className="mt-4">
            <Link
              to="/resources"
              className="inline-block px-3 py-2 bg-primary-50 text-primary-700 rounded"
            >
              Explore resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
