"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const menu = [
  { name: "หน้าแรก", href: "#home" },
  { name: "เช็กพัสดุ", href: "#tracking" },
  { name: "ติดต่อ", href: "#footer" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="PN2B"
            width={56}
            height={56}
            className="rounded-full"
          />

          <div>
            <h1 className="text-lg font-bold text-red-600 lg:text-xl">
              PN2B รองเท้ามือสอง
            </h1>

            <p className="text-xs text-gray-500 lg:text-sm">
              ระบบตรวจสอบพัสดุ
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-gray-700 transition hover:text-red-600"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Button */}
        <a
          href="https://lin.ee/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600 md:block"
        >
          LINE OA
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 transition hover:bg-gray-100 md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="border-t border-gray-200 bg-white md:hidden"
          >
            <nav className="flex flex-col p-5">
              {menu.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 font-medium text-gray-700 transition hover:bg-red-50 hover:text-red-600"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="https://lin.ee/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 rounded-full bg-green-500 py-3 text-center font-semibold text-white transition hover:bg-green-600"
              >
                LINE OA
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}