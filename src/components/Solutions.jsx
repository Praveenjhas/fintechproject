const data = ["Retail Banking", "Payments", "Lending", "Treasury"];

export default function Solutions() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10">Solutions</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {data.map((item) => (
          <div key={item} className="border rounded-lg p-6 hover:shadow">
            <h3 className="font-semibold">{item}</h3>
            <p className="text-sm text-slate-600 mt-2">
              Modern, scalable financial solutions.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
