export default function Resources() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Resources</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Article", "Podcast", "eBook"].map((r) => (
            <div key={r} className="bg-white p-6 rounded shadow-sm">
              <span className="text-xs uppercase text-slate-500">{r}</span>
              <h3 className="font-semibold mt-2">
                Financial innovation insights
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
