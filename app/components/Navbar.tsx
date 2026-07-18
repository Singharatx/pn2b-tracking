"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const menu = [
  { name: "หน้าแรก", href: "#home" },
  { name: "เชกพัสดุ", href: "#tracking" },
  { name: "ติดต่อ", href: "#footer" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white backdrop-blur-sm shadow-soft">
      <div className="container-pn2b mx-auto flex h-20 items-center justify-between gap-4 px-0 md:px-0">
        <a href="#home" className="flex items-center gap-3">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border border-[#ECECEC] bg-white shadow-soft">
            <Image
              src="/images/logo.png"
              alt="PN2B"
              width={56}
              height={56}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted">
              PN2B
            </p>
            <h1 className="text-base font-semibold text-text md:text-lg">
              รองเท้ามือสอง
            </h1>
            <p className="text-xs text-muted md:text-sm">
              ระบบตรวจสอบพัสดุ
            </p>
          </div>
        </a>

        <nav className="hidden md:absolute md:left-1/2 md:top-1/2 md:flex md:-translate-x-1/2 md:-translate-y-1/2 md:items-center md:gap-10">
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-muted transition hover:text-primary"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://lin.ee/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-[#00C200] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#00A100] md:inline-flex"
          >
            LINE OA
          </a>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="rounded-full border border-gray-200 bg-white p-2 text-gray-700 transition hover:border-gray-300 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 md:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="border-t border-gray-200 bg-white md:hidden"
          >
            <nav className="flex flex-col gap-2 px-5 py-5">
              {menu.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-gray-700 transition hover:bg-red-50 hover:text-red-600"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="https://lin.ee/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center rounded-full bg-[#00C200] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#00A100]"
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
