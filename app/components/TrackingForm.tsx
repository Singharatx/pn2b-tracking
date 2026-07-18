"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { couriers, Courier } from "../lib/couriers";
import { detectCourier } from "../lib/detectCourier";

export default function TrackingForm() {
  const [tracking, setTracking] = useState("");

  const [courier, setCourier] = useState<Courier>("th");

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const selectedCourier = useMemo(() => {
    return couriers.find((item) => item.id === courier)!;
  }, [courier]);

  useEffect(() => {
    const detected = detectCourier(tracking);

    if (detected) {
      setCourier(detected);

      const found = couriers.find(
        (item) => item.id === detected
      );

      if (found) {
        setMessage(`✓ ตรวจพบ : ${found.name}`);
      }
    } else {
      setMessage("");
    }
  }, [tracking]);

  const handleSearch = () => {
  if (loading) return;
    const code = tracking.trim().toUpperCase();

    if (!code) {
      setMessage("กรุณากรอกเลขพัสดุ");
      return;
    }

    setLoading(true);

    const url = selectedCourier.url(code);

    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setLoading(false);
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl bg-white p-8 shadow-xl"
    >
      <h2 className="mb-8 text-center text-3xl font-bold">
        🚚 ตรวจสอบพัสดุ
      </h2>

<div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-5">
        {couriers.map((item) => (
          <motion.button
            key={item.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => {
  setCourier(item.id);
  setMessage("");
}}
            className={`rounded-2xl border-2 p-4 transition-all duration-300 ${
              courier === item.id
                ? "border-red-600 bg-red-600 text-white shadow-xl"
                : "border-gray-200 bg-white hover:border-red-500 hover:shadow-md"
            }`}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={70}
              height={70}
              className="mx-auto object-contain"
            />

            <p className="mt-3 text-sm font-semibold">
              {item.name}
            </p>
          </motion.button>
        ))}
      </div>

      <motion.div
  layout
  whileHover={{ scale: 1.01 }}
  transition={{ duration: 0.2 }}
  className="mb-8 rounded-3xl border border-red-200 bg-gradient-to-r from-red-50 to-white p-6 shadow-sm"
>
        <p className="text-sm text-gray-500">
          บริษัทที่เลือก
        </p>

        <div className="mt-4 flex items-center gap-4">
          <motion.div
  key={selectedCourier.id}
  initial={{ opacity: 0, scale: 0.85 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.25 }}
>
  <Image
    src={selectedCourier.image}
    alt={selectedCourier.name}
    width={80}
    height={80}
  />
</motion.div>

          <div>
            <h3 className="text-2xl font-bold">
              {selectedCourier.name}
            </h3>

            <p className="text-gray-600">
  กรอกเลขพัสดุของคุณ เช่น
</p>

            <p className="mt-1 font-semibold text-red-600">
              {selectedCourier.placeholder}
            </p>
          </div>
        </div>
      </motion.div>

      <input
  type="text"
  value={tracking}
  placeholder={selectedCourier.placeholder}
  autoComplete="off"
  spellCheck={false}
  onChange={(e) => {
    const value = e.target.value
      .trim()
      .toUpperCase();

    setTracking(value);

setMessage("");

const detected = detectCourier(value);

if (detected) {
  setCourier(detected);
}
  }}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  }}
  className="mt-2 w-full rounded-2xl border-2 border-gray-300 bg-white p-5 text-lg outline-none transition-all duration-300 focus:border-red-600 focus:ring-4 focus:ring-red-100"
/>

      {message && (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.25 }}
    className={`mt-4 rounded-xl border px-4 py-3 text-sm font-semibold ${
      message.startsWith("✓")
        ? "border-green-200 bg-green-50 text-green-700"
        : "border-red-200 bg-red-50 text-red-700"
    }`}
  >
    {message}
  </motion.div>
)}

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleSearch}
        disabled={loading}
        className="mt-6 w-full rounded-2xl bg-red-600 py-5 text-lg font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70"
>
  {loading ? (
  <div className="flex items-center justify-center gap-3">
    <div className="h-5 w-5 animate-spin rounded-full border-[3px] border-white border-t-transparent" />

    <span>กำลังเปิดหน้าตรวจสอบ...</span>
  </div>
) : (
  <span className="flex items-center justify-center gap-2">
    🔍
    <span>ตรวจสอบพัสดุ</span>
  </span>
)}
      </motion.button>
    </motion.div>
  );
}