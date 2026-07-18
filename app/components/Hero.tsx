"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TrackingForm from "./TrackingForm";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#FAFAFA] pb-20 pt-16">
      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-red-100/70 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-28 h-72 w-72 rounded-full bg-red-200/40 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />

      <div className="container-pn2b mx-auto px-0">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center justify-center rounded-full border border-red-200 bg-red-50 px-5 py-2 text-sm font-medium text-red-600 shadow-soft"
            >
              🚚 ระบบตรวจสอบพัสดุออนไลน
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-[200px] overflow-hidden rounded-full border border-[#ECECEC] bg-white shadow-soft lg:mx-0"
            >
              <Image
                src="/images/logo.png"
                alt="PN2B"
                width={160}
                height={160}
                priority
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="space-y-4"
            >
              <h1 className="text-4xl font-semibold tracking-tight text-text md:text-5xl lg:text-6xl">
                ตรวจสอบพัสดุง่าย รวดเรว และมั่นใจทุกการจัดส่ง
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-8 text-muted md:text-lg lg:mx-0">
                PN2B รองเท้ามือสอง ช่วยให้คุตรวจสอบสถานะพัสดุได้ทันที พร้อมรองรับขนส่งชั้นนำในไทยตลอด 24 ชั่วมง
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mx-auto flex max-w-xl flex-wrap items-center justify-center gap-4 text-sm font-medium text-muted lg:mx-0 lg:justify-start"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 shadow-soft">
                ✅ ใช้งานฟรี
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 shadow-soft">
                📱 รองรับมือถือ
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 shadow-soft">
                ⚡ ตรวจสอบได้ตลอด 24 ชั่วมง
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-[32px] border border-[#ECECEC] bg-white p-8 shadow-soft"
          >
            <div className="mb-8 rounded-[28px] border border-red-100 bg-red-50 p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-xl text-white">
                  🚚
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">เชกพัสดุทันที</p>
                  <p className="text-sm text-muted">กรอกเลขพัสดุเพื่อรับสถานะล่าสุด</p>
                </div>
              </div>
            </div>

            <div id="tracking">
              <TrackingForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
