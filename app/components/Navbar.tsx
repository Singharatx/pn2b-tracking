import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-4">

          <Image
            src="/images/logo.png"
            alt="PN2B"
            width={55}
            height={55}
            className="rounded-full"
          />

          <div>
            <h1 className="text-xl font-bold text-red-600">
              PN2B รองเท้ามือสอง
            </h1>

            <p className="text-sm text-gray-500">
              ระบบตรวจสอบพัสดุ
            </p>
          </div>

        </div>

        {/* Menu */}
        <nav className="hidden gap-8 md:flex">

          <a
            href="#"
            className="font-medium transition hover:text-red-600"
          >
            หน้าแรก
          </a>

          <a
            href="#tracking"
            className="font-medium transition hover:text-red-600"
          >
            เช็กพัสดุ
          </a>

          <a
            href="#footer"
            className="font-medium transition hover:text-red-600"
          >
            ติดต่อ
          </a>

        </nav>

        {/* Button */}
        <a
          href="https://lin.ee/"
          target="_blank"
          className="rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600"
        >
          LINE OA
        </a>

      </div>
    </header>
  );
}