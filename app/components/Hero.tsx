import TrackingForm from "./TrackingForm";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-red-50 via-white to-red-100 py-16">
      <div className="mx-auto max-w-6xl px-6">

        {/* หัวข้อ */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
            📦 ระบบเช็กพัสดุ PN2B
          </span>

          <h1 className="mt-6 text-5xl font-extrabold text-gray-900">
            เช็กเลขพัสดุ
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            เช็กสถานะพัสดุได้ตลอด 24 ชั่วโมง
          </p>

          <p className="mt-2 text-gray-500">
            รองรับ Flash • J&amp;T • KEX • DHL • ไปรษณีย์ไทย
          </p>
        </div>

        {/* กล่องเช็กพัสดุ */}
        <div className="mt-12">
          <TrackingForm />
        </div>

        {/* วิธีใช้งาน */}
        <div className="mt-14 rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-center text-2xl font-bold">
            📖 วิธีใช้งาน
          </h2>

          <div className="grid gap-6 md:grid-cols-4">

            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-2xl">
                1️⃣
              </div>

              <h3 className="mt-4 font-bold">
                เลือกบริษัท
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                เลือกบริษัทขนส่งที่ใช้ส่งสินค้า
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-2xl">
                2️⃣
              </div>

              <h3 className="mt-4 font-bold">
                กรอกเลขพัสดุ
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                ใส่เลขติดตามพัสดุของคุณ
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-2xl">
                3️⃣
              </div>

              <h3 className="mt-4 font-bold">
                กดตรวจสอบ
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                ระบบจะเปิดหน้าตรวจสอบของบริษัทขนส่ง
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-2xl">
                ✅
              </div>

              <h3 className="mt-4 font-bold">
                ดูสถานะ
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                ตรวจสอบสถานะพัสดุได้ทันที
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}