import React, { useEffect } from "react";

export default function CTA({ onDemo }) {
  useEffect(() => {
    console.log("DEBUG: CTA mounted");
  }, []);

  return (
    // id for quick querySelector checks
    <section
      id="site-cta"
      role="region"
      aria-label="Request demo CTA"
      style={{
        // inline fallback gradient so it's visible even if Tailwind fails
        background:
          "linear-gradient(90deg, rgba(79,70,229,1) 0%, rgba(124,58,237,1) 100%)",
        padding: "48px 20px",
        color: "#fff",
        position: "relative",
        zIndex: 10,
        boxSizing: "border-box",
        borderTop: "2px solid rgba(255,255,255,0.03)", // subtle separation
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          gap: 20,
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1 1 480px", minWidth: 280 }}>
          <h2
            style={{
              margin: 0,
              fontSize: "28px",
              lineHeight: 1.05,
              fontWeight: 800,
            }}
          >
            Ready to modernize your financial platform?
          </h2>
          <p style={{ marginTop: 12, opacity: 0.95, maxWidth: 700 }}>
            Talk to our experts and see how our enterprise fintech solutions can
            accelerate your digital transformation.
          </p>
        </div>

        <div style={{ flex: "0 0 auto", minWidth: 180 }}>
          <button
            onClick={() => onDemo?.()}
            style={{
              background: "#fff",
              color: "#4f46e5",
              padding: "12px 20px",
              borderRadius: 10,
              fontWeight: 700,
              boxShadow: "0 8px 24px rgba(16,24,40,0.12)",
              border: "none",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            Request demo →
          </button>
        </div>
      </div>

      {/* visible debug border — remove after verifying */}
      <div
        style={{
          position: "absolute",
          left: 16,
          bottom: 8,
          fontSize: 12,
          opacity: 0.6,
        }}
      ></div>
    </section>
  );
}
