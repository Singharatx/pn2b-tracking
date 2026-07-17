"use client";

import Image from "next/image";
import { useState } from "react";

type Courier = "th" | "flash" | "jt" | "kex" | "dhl";

const couriers = [
  {
    id: "th" as Courier,
    name: "ไปรษณีย์ไทย",
    image: "/images/couriers/thailandpost.png",
  },
  {
    id: "flash" as Courier,
    name: "Flash Express",
    image: "/images/couriers/flash.png",
  },
  {
    id: "jt" as Courier,
    name: "J&T Express",
    image: "/images/couriers/jt.png",
  },
  {
    id: "kex" as Courier,
    name: "KEX Express",
    image: "/images/couriers/kex.png",
  },
  {
    id: "dhl" as Courier,
    name: "DHL",
    image: "/images/couriers/dhl.png",
  },
];

export default function TrackingForm() {
  const [tracking, setTracking] = useState("");
  const [courier, setCourier] = useState<Courier>("th");
  const [loading, setLoading] = useState(false);

  const selectedCourier = couriers.find((item) => item.id === courier)!;

  const handleSearch = () => {
    if (!tracking.trim()) {
      alert("กรุณากรอกเลขพัสดุ");
      return;
    }

    setLoading(true);

    let url = "";

    switch (courier) {
      case "flash":
        url = `https://www.flashexpress.com/th/tracking?se=${tracking}`;
        break;

      case "jt":
        url = `https://www.jtexpress.co.th/index/query/gzquery.html?bills=${tracking}`;
        break;

      case "kex":
        url = `https://th.kerryexpress.com/th/track/?track=${tracking}`;
        break;

      case "dhl":
        url = `https://www.dhl.com/th-th/home/tracking.html?tracking-id=${tracking}`;
        break;

      default:
        url = `https://track.thailandpost.co.th/?trackNumber=${tracking}`;
    }

    setTimeout(() => {
      window.open(url, "_blank");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <h2 className="mb-8 text-center text-3xl font-bold">
        🚚 ตรวจสอบพัสดุ
      </h2>

      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-5">
        {couriers.map((item) => (
          <button
            key={item.id}
            onClick={() => setCourier(item.id)}
            className={`rounded-2xl border-2 p-4 transition-all duration-300 ${
              courier === item.id
                ? "border-red-600 bg-red-600 text-white shadow-xl scale-105"
                : "border-gray-200 bg-white hover:border-red-500 hover:scale-105 hover:shadow-md"
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
          </button>
        ))}
      </div>

      <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-5">

        <p className="text-sm text-gray-500">
          บริษัทที่เลือก
        </p>

        <div className="mt-4 flex items-center gap-4">

          <Image
            src={selectedCourier.image}
            alt={selectedCourier.name}
            width={80}
            height={80}
          />

          <div>
            <h3 className="text-2xl font-bold">
              {selectedCourier.name}
            </h3>

            <p className="text-gray-600">
              กรุณากรอกเลขพัสดุของ {selectedCourier.name}
            </p>
          </div>

        </div>

      </div>

      <input
        type="text"
        placeholder="กรอกเลขพัสดุ..."
        value={tracking}
        onChange={(e) => setTracking(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        className="w-full rounded-2xl border-2 border-gray-300 p-5 text-lg outline-none transition focus:border-red-600"
      />

      <button
        onClick={handleSearch}
        disabled={loading}
        className="mt-6 w-full rounded-2xl bg-red-600 py-5 text-lg font-bold text-white transition-all hover:bg-red-700 disabled:opacity-70"
      >
        {loading ? "⏳ กำลังเปิดระบบ..." : "🔍 ตรวจสอบพัสดุ"}
      </button>

    </div>
  );
}