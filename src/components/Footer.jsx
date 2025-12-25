import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link
              to="/"
              className="text-xl font-extrabold inline-flex items-center gap-3"
            >
              <span className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-600 to-purple-600 inline-flex items-center justify-center text-white font-bold">
                F
              </span>
              <span>Fintech</span>
            </Link>
            <p className="mt-4 text-sm text-slate-600 max-w-xs">
              Composable fintech platform for banks and modern financial
              services.
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-sm text-slate-900">Solutions</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link to="/solutions" className="hover:text-indigo-600">
                  All solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-indigo-600">
                  Payments
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-indigo-600">
                  Accounts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-sm text-slate-900">Company</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link to="/about" className="hover:text-indigo-600">
                  About
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-indigo-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indigo-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-sm text-slate-900">Resources</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link to="/resources" className="hover:text-indigo-600">
                  Insights
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600">
                  Docs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-sm text-slate-600 text-center">
          © {new Date().getFullYear()} Fintech — Built with care.
        </div>
      </div>
    </footer>
  );
}
