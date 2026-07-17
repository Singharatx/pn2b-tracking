export default function Couriers() {
  const couriers = [
    "Flash Express",
    "DHL eCommerce",
    "J&T Express",
    "KEX Express",
    "ไปรษณีย์ไทย",
  ];

  return (
    <section className="mx-auto mt-16 max-w-6xl px-6">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
        รองรับบริษัทขนส่ง
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {couriers.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-3 text-5xl">📦</div>

            <h3 className="font-bold text-gray-800">
              {item}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}