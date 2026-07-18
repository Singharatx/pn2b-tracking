"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-gray-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="flex flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/logo.png"
              alt="PN2B"
              width={90}
              height={90}
              className="mx-auto rounded-full shadow-md"
            />
          </motion.div>

          <h2 className="mt-5 text-2xl font-bold text-red-600">
            PN2B รองเท้ามือสอง
          </h2>

          <p className="mt-2 max-w-xl text-gray-500">
            ระบบตรวจสอบพัสดุสำหรับลูกค้าของ PN2B
            รองรับการติดตามพัสดุจากบริษัทขนส่งชั้นนำ
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="#home"
              className="rounded-full border border-gray-300 px-5 py-2 transition hover:border-red-600 hover:text-red-600"
            >
              หน้าแรก
            </a>

            <a
              href="#tracking"
              className="rounded-full border border-gray-300 px-5 py-2 transition hover:border-red-600 hover:text-red-600"
            >
              เช็กพัสดุ
            </a>

            <a
              href="https://lin.ee/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green-500 px-5 py-2 font-semibold text-white transition hover:bg-green-600"
            >
              LINE OA
            </a>

          </div>

        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} PN2B รองเท้ามือสอง. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}