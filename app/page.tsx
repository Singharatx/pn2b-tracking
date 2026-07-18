"use client";

import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CourierSection from "./components/CourierSection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import PageLoader from "./components/PageLoader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PageLoader loading={loading} />

      {!loading && (
        <main className="min-h-screen bg-white text-gray-900">
          <Navbar />

          <Hero />

          <CourierSection />

          <Footer />

          <BackToTop />
        </main>
      )}
    </>
  );
}