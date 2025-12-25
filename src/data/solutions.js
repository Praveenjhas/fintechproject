export const SOLUTIONS = [
  {
    id: "payments",
    title: "Payments Platform",
    summary: "End-to-end payments with real-time rails and reconciliation.",
    content:
      "Modern payments platform designed for high throughput, resiliency and compliance.",
    features: [
      "ISO20022-ready messaging",
      "Real-time settlement",
      "Flexible routing & orchestration",
    ],
    deployment: "Cloud",
    integrations: ["SWIFT", "ACH", "ISO20022"],
    sla: "99.99%",
  },
  {
    id: "accounts",
    title: "Accounts & Ledger",
    summary: "Core ledger & account services with strong consistency.",
    content: "Robust account model, multi-currency support, and audit trails.",
    features: ["General ledger", "Multi-currency", "Audit logs"],
  },
  {
    id: "api-platform",
    title: "API Platform",
    summary: "Developer-friendly APIs and SDKs for rapid integrations.",
    content: "REST + GraphQL APIs, comprehensive docs, and client SDKs.",
    features: ["OpenAPI specs", "Webhooks", "SDKs"],
  },
];
