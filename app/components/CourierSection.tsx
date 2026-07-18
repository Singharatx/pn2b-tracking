"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const couriers = [
  {
    name: "Thailand Post",
    image: "/couriers/th.png",
  },
  {
    name: "Flash Express",
    image: "/couriers/flash.png",
  },
  {
    name: "J&T Express",
    image: "/couriers/jt.png",
  },
  {
    name: "KEX",
    image: "/couriers/kex.png",
  },
  {
    name: "DHL",
    image: "/couriers/dhl.png",
  },
];

export default function CourierSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-gray-900"
        >
          รองรับบริษัทขนส่งชั้นนำ
        </motion.h2>

        <p className="mt-3 text-center text-gray-500">
          สามารถตรวจสอบพัสดุได้จากผู้ให้บริการขนส่งต่อไปนี้
        </p>

        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-5">
          {couriers.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={120}
                height={60}
                className="mx-auto h-14 w-auto object-contain"
              />

              <p className="mt-4 text-center text-sm font-semibold text-gray-700">
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}