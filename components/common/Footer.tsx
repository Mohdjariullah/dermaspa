"use client";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(2020);
  useEffect(() => {
    setYear(new Date().getFullYear());
    if (typeof window !== "undefined" && window.location && window.location.hostname) {
      // setUtmSource(window.location.hostname.replace(/^www\./, "")); // This line was removed
    }
  }, []);
  return (
    <footer className="bg-[#fbb6c1] py-6 sm:py-8 md:py-10 text-center text-[#222] px-4">
      <div className="max-w-4xl mx-auto">
        <div className="font-bold text-base sm:text-lg md:text-xl mb-2">DERMAL SKIN CLINIC AND SPA GUAM</div>
        <div className="mb-2 text-sm sm:text-base">274 Chalan San Antonio Tamuning Guam 96931</div>
        <div className="mb-2 text-sm sm:text-base">
          (888) 964-5925
        </div>
        <div className="text-xs mb-2 leading-relaxed">
          Copyright © {year} Dermal Skin Clinic and Spa Guam<br/>All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
