"use client";
import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Head from "next/head";

const socialLinks = [
  { name: "FACEBOOK", href: "https://www.facebook.com/dermalskincareandspa" },
  {
    name: "INSTAGRAM",
    href: "https://www.instagram.com/dermalskincareandspaguam/",
  },
  { name: "FACEBOOK", href: "https://www.facebook.com/dermalskincareandspa" },
  {
    name: "INSTAGRAM",
    href: "https://www.instagram.com/dermalskincareandspaguam/",
  },
  { name: "FACEBOOK", href: "https://www.facebook.com/dermalskincareandspa" },
  {
    name: "INSTAGRAM",
    href: "https://www.instagram.com/dermalskincareandspaguam/",
  },
  { name: "FACEBOOK", href: "https://www.facebook.com/dermalskincareandspa" },
];

export default function Promos() {
  return (
    <>
      <Head>
        <title>
          Current Promotions & Offers | Dermal Skin Clinic Guam | Spa Deals
        </title>
        <meta
          name="description"
          content="Discover current spa promotions and special offers in Guam! Limited time deals on face treatments, massages, and skincare products. Call (888) 964-5925 to book your discounted session!"
        />
        <meta
          name="keywords"
          content="spa promotions Guam, current offers, spa deals, face treatment discounts, massage specials, skincare promotions, limited time offers"
        />
        <meta
          property="og:title"
          content="Current Spa Promotions Guam | Limited Time Offers"
        />
        <meta
          property="og:description"
          content="Limited time spa promotions and special offers available now! Face treatments, massages, and skincare products at discounted prices."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dermalskincareandspaguam.com/promos"
        />
        <link
          rel="canonical"
          href="https://dermalskincareandspaguam.com/promos"
        />
      </Head>

      <div className="min-h-screen flex flex-col bg-white font-sans">
        <Navbar />
        <main className="flex-1 w-full flex flex-col items-center px-4 sm:px-6 md:px-8">
          {/* Quick Access Banner */}
          <div className="w-full bg-gradient-to-r from-pink-50 to-rose-50 border-b-2 border-[#9b6b8a] py-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-xl sm:text-2xl font-bold text-[#9b6b8a] mb-2">
                📞 Call (888) 964-5925 to Book Current Promotions
              </h1>
              <p className="text-sm text-gray-700">
                Limited Time Offers | Face Treatments | Massages | Product
                Discounts
              </p>
            </div>
          </div>

          {/* September Promos Header */}
          <div className="w-full max-w-6xl mx-auto mt-6 sm:mt-8 flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 px-4 sm:px-6">
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                <Image
                  src="cr=w_1232hsa621.jpeg"
                  alt="September Promotions Banner"
                  width={400}
                  height={300}
                  className="rounded-md w-full h-auto object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left mt-4 lg:mt-0">
              <h2 className="text-base sm:text-lg md:text-2xl font-semibold mb-2 text-[#9b6b8a] leading-tight">
                SEPTEMBER PROMOTIONS &amp; OFFERS
              </h2>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 text-black tracking-tight leading-tight">
                FALL SKIN CARE SPECIALS
              </h1>
            </div>
          </div>

          {/* Social Links Bar - Marquee */}
          <div className="w-full bg-[#fbb6c1] mt-6 sm:mt-8 mb-6 sm:mb-8 overflow-x-hidden">
            <div className="relative w-full h-12 flex items-center">
              <div className="flex gap-4 sm:gap-6 md:gap-8 animate-marquee whitespace-nowrap min-w-max">
                {Array(2)
                  .fill(null)
                  .map((_, i) =>
                    socialLinks.map((link, idx) => (
                      <a
                        key={i + "-" + idx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="uppercase font-bold text-[#9b6b8a] text-sm sm:text-lg md:text-xl tracking-wider hover:underline mx-2 sm:mx-4 transition-colors"
                      >
                        {link.name}
                      </a>
                    ))
                  )}
              </div>
            </div>
          </div>



          {/* September Promotional Offers */}
          <div className="w-full max-w-6xl mx-auto flex flex-col items-center mb-8 sm:mb-12 px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-[#9b6b8a]">
              🍂 SEPTEMBER SPECIAL OFFERS
            </h2>
            
            {/* Acne Vulgaris Facial Promo */}
            <div className="w-full max-w-4xl bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6 sm:p-8 mb-8 border-4 border-[#9b6b8a] shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-black text-center mb-4 text-[#9b6b8a] tracking-wide">
                🎯 Acne Vulgaris Facial Special
              </h3>
              <div className="text-center mb-4">
                <p className="text-3xl font-black text-[#9b6b8a] mb-2">
                  $115
                </p>
                <p className="text-lg font-bold text-gray-700 mb-4">
                  Acne Vulgaris Facial
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <h4 className="font-bold text-[#9b6b8a] mb-2">Add Ons:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Microdermabrasion: $30</li>
                    <li>• LED Treatment: $20</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Premium Treatments Promo */}
            <div className="w-full max-w-4xl bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 sm:p-8 mb-8 border-4 border-[#9b6b8a] shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-black text-center mb-4 text-[#9b6b8a] tracking-wide">
                ⭐ Premium Treatments - $110 Each
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white rounded-lg p-4 shadow-lg text-center">
                  <h4 className="font-bold text-[#9b6b8a] mb-2">Radio Frequency</h4>
                  <p className="text-sm text-gray-700">Advanced skin tightening</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg text-center">
                  <h4 className="font-bold text-[#9b6b8a] mb-2">HydraFacial</h4>
                  <p className="text-sm text-gray-700">Deep cleansing & hydration</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg text-center">
                  <h4 className="font-bold text-[#9b6b8a] mb-2">Vampire Facial</h4>
                  <p className="text-sm text-gray-700">PRP skin rejuvenation</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <h4 className="font-bold text-[#9b6b8a] mb-2 text-center">Add Ons:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="font-semibold text-gray-700">Basic Facial: $60</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Microdermabrasion: $30</p>
                  </div>
                </div>
              </div>
            </div>

            {/* All Skin Types Promo */}
            <div className="w-full max-w-4xl bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 sm:p-8 mb-8 border-4 border-[#9b6b8a] shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-black text-center mb-4 text-[#9b6b8a] tracking-wide">
                🌟 For All Skin Types
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white rounded-lg p-4 shadow-lg text-center">
                  <h4 className="font-bold text-[#9b6b8a] mb-2">Hollywood Facial</h4>
                  <p className="text-2xl font-black text-[#9b6b8a]">$140</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg text-center">
                  <h4 className="font-bold text-[#9b6b8a] mb-2">3-Face Treatment</h4>
                  <p className="text-2xl font-black text-[#9b6b8a]">$100</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg text-center">
                  <h4 className="font-bold text-[#9b6b8a] mb-2">Deep Cleansing + Microdermabrasion</h4>
                  <p className="text-2xl font-black text-[#9b6b8a]">$100</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <h4 className="font-bold text-[#9b6b8a] mb-2 text-center">Add Ons:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="font-semibold text-gray-700">Collagen Face Treatment: $40</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Vitamin C: $40</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Lactic/Glycolic Peel: $50</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="w-full max-w-3xl bg-gradient-to-r from-pink-100 to-rose-100 rounded-lg p-6 sm:p-8 border-4 border-[#9b6b8a] shadow-2xl text-center">
              <h3 className="text-xl sm:text-2xl font-black mb-4 text-[#9b6b8a] tracking-wide">
                📞 Book Your September Special Today!
              </h3>
              <p className="text-lg font-bold text-gray-700 mb-4">
                Limited Time Offers - Don&apos;t Miss Out!
              </p>
              <button 
                onClick={() => window.location.href = '/services'}
                className="bg-[#9b6b8a] text-white px-8 py-3 rounded-lg shadow-lg hover:bg-[#7a5a6f] transition-colors font-bold text-lg transform hover:scale-105"
              >
                VIEW ALL SERVICES
              </button>
            </div>
          </div>

          {/* Additional Promotions Section */}
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center mb-8 sm:mb-12 px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-[#9b6b8a]">
              🎉 More Current Promotions
            </h2>
            {/* New Promo Image */}
            <div className="w-full max-w-3xl mb-8">
              <Image
                src="specials/eb0895fb-100d-4051-b3d9-634702b483ad.png"
                alt="Dermal Promo"
                width={800}
                height={600}
                className="rounded-lg w-full h-auto object-contain shadow-2xl border-4 border-[#9b6b8a]"
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
