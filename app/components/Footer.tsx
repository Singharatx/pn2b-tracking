import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-gradient-to-b from-white to-gray-100">
      <div className="mx-auto max-w-6xl px-6 py-12">

        <div className="flex flex-col items-center">

          <Image
            src="/images/logo.png"
            alt="PN2B Logo"
            width={90}
            height={90}
            className="rounded-full shadow-md"
          />

          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            PN2B รองเท้ามือสอง
          </h2>

          <p className="mt-2 text-center text-gray-600">
            ระบบตรวจสอบพัสดุออนไลน์
          </p>

          <p className="text-center text-gray-500">
            รองรับ Flash Express • J&T Express • KEX • DHL • ไปรษณีย์ไทย
          </p>

        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">

          <div className="text-center">
            <h3 className="text-lg font-bold text-red-600">
              เวลาทำการ
            </h3>

            <p className="mt-3 text-gray-600">
              เปิดทุกวัน
            </p>

            <p className="text-gray-600">
              09:00 - 21:00 น.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-bold text-red-600">
              ติดต่อร้าน
            </h3>

            <p className="mt-3">💬 LINE Official</p>
            <p>📘 Facebook</p>
            <p>📱 TikTok</p>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-bold text-red-600">
              ระบบเช็กพัสดุ
            </h3>

            <p className="mt-3 text-gray-600">
              ใช้งานได้ตลอด 24 ชั่วโมง
            </p>

            <p className="text-gray-600">
              สะดวก รวดเร็ว และปลอดภัย
            </p>
          </div>

        </div>

        <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} PN2B รองเท้ามือสอง
          <br />
          All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}