"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TrackingForm from "./TrackingForm";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-red-50 via-white to-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-red-200/40 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-red-100/50 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-[80vh] w-full max-w-7xl flex-col items-center justify-center px-6 py-16">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 rounded-full border border-red-200 bg-red-50 px-5 py-2 text-sm font-medium text-red-600 shadow-sm"
        >
          🚚 ระบบตรวจสอบพัสดุออนไลน์
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-red-300 blur-2xl opacity-20" />

          <Image
            src="/images/logo.png"
            alt="PN2B"
            width={140}
            height={140}
            priority
            className="relative rounded-full shadow-2xl"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-8 text-center text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl"
        >
          เช็กสถานะพัสดุ
          <span className="mt-2 block text-red-600">
            PN2B รองเท้ามือสอง
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-6 max-w-2xl text-center text-base leading-8 text-gray-500 md:text-lg"
        >
          ตรวจสอบสถานะพัสดุได้ง่าย รวดเร็ว รองรับบริษัทขนส่งชั้นนำของประเทศไทย
        </motion.p>

        {/* Feature */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-gray-600"
        >
          <span>✅ ใช้งานฟรี</span>
          <span>📱 รองรับมือถือ</span>
          <span>⚡ ตรวจสอบได้ตลอด 24 ชั่วโมง</span>
        </motion.div>

        {/* Tracking Card */}
        <motion.div
          id="tracking"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-14 w-full max-w-3xl rounded-3xl border border-white/70 bg-white/90 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl"
        >
          <TrackingForm />
        </motion.div>
      </div>
    </section>
  );
}