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

          {/* Header */}
          <div className="w-full max-w-6xl mx-auto mt-6 sm:mt-8 flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 px-4 sm:px-6">
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                <Image
                  src="/cr=w_1232hsa621.jpeg"
                  alt="Promotions Banner"
                  width={400}
                  height={300}
                  className="rounded-md w-full h-auto object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left mt-4 lg:mt-0">
              <h2 className="text-base sm:text-lg md:text-2xl font-semibold mb-2 text-[#9b6b8a] leading-tight">
                CURRENT PROMOTIONS &amp; OFFERS
              </h2>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 text-black tracking-tight leading-tight">
                LIMITED TIME DEALS
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

          {/* August Promo */}
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center mb-8 sm:mb-12 px-4 sm:px-6">
            <div className="w-full text-center mb-6">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-2 text-[#9b6b8a] tracking-wider"
                style={{ fontFamily: "Impact, Charcoal, sans-serif" }}
              >
                🌸 AUGUST PROMO 🌸
              </h2>
              <span className="block text-sm font-bold text-[#9b6b8a] mb-4">
                📞 CALL TO BOOK THESE SERVICES 📞
              </span>
            </div>

            {/* Face Treatment Packages */}
            <div className="w-full max-w-3xl bg-gradient-to-r from-pink-50 via-rose-50 to-pink-50 rounded-lg p-6 sm:p-8 mb-8 border-4 border-[#9b6b8a] shadow-2xl">
              <h3
                className="text-xl sm:text-2xl font-black text-center mb-6 text-[#9b6b8a] tracking-wide"
                style={{ fontFamily: "Georgia, serif" }}
              >
                ✨ Face Steam + Face Massage + Face Treatment ✨
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-white rounded-lg p-4 text-center shadow-lg border-2 border-[#9b6b8a] transform hover:scale-105 transition-transform">
                  <h4
                    className="font-black text-[#9b6b8a] mb-2 text-lg"
                    style={{ fontFamily: "Impact, Charcoal, sans-serif" }}
                  >
                    PICK 1
                  </h4>
                  <p className="text-sm text-gray-600 mb-2 font-semibold">
                    30 min
                  </p>
                  <p
                    className="text-2xl font-black text-[#9b6b8a]"
                    style={{ fontFamily: "Arial Black, Gadget, sans-serif" }}
                  >
                    $70
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-lg border-2 border-[#9b6b8a] transform hover:scale-105 transition-transform">
                  <h4
                    className="font-black text-[#9b6b8a] mb-2 text-lg"
                    style={{ fontFamily: "Impact, Charcoal, sans-serif" }}
                  >
                    PICK 2
                  </h4>
                  <p className="text-sm text-gray-600 mb-2 font-semibold">
                    45 min
                  </p>
                  <p
                    className="text-2xl font-black text-[#9b6b8a]"
                    style={{ fontFamily: "Arial Black, Gadget, sans-serif" }}
                  >
                    $99
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-lg border-2 border-[#9b6b8a] transform hover:scale-105 transition-transform">
                  <h4
                    className="font-black text-[#9b6b8a] mb-2 text-lg"
                    style={{ fontFamily: "Impact, Charcoal, sans-serif" }}
                  >
                    PICK 3
                  </h4>
                  <p className="text-sm text-gray-600 mb-2 font-semibold">
                    60 min
                  </p>
                  <p
                    className="text-2xl font-black text-[#9b6b8a]"
                    style={{ fontFamily: "Arial Black, Gadget, sans-serif" }}
                  >
                    $120
                  </p>
                </div>
              </div>
            </div>

            {/* August Promo Image */}
            <div className="w-full max-w-3xl mb-8">
              <Image
                src="/specials/august-a087-43bd-a141-3c169f914f72.png"
                alt="August Promo"
                width={800}
                height={600}
                className="rounded-lg w-full h-auto object-contain shadow-2xl border-4 border-[#9b6b8a]"
              />
            </div>

            {/* Treatment Options */}
            <div className="w-full max-w-4xl">
              <h3
                className="text-xl sm:text-2xl font-black text-center mb-6 text-[#9b6b8a] tracking-wide"
                style={{ fontFamily: "Georgia, serif" }}
              >
                ✨ Available Treatments ✨
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-white rounded-lg p-4 shadow-lg border-2 border-pink-200 hover:border-[#9b6b8a] transition-colors">
                  <h4
                    className="font-bold text-[#9b6b8a] mb-2 text-lg"
                    style={{ fontFamily: "Impact, Charcoal, sans-serif" }}
                  >
                    4. 🌿 Oxygen Face Treatment
                  </h4>
                  <p className="text-sm text-gray-700 font-medium">
                    Brightens and oxygenates the complexion. Glow! For dry skin.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg border-2 border-pink-200 hover:border-[#9b6b8a] transition-colors">
                  <h4
                    className="font-bold text-[#9b6b8a] mb-2 text-lg"
                    style={{ fontFamily: "Impact, Charcoal, sans-serif" }}
                  >
                    5. 🌸 Acne Treatment
                  </h4>
                  <p className="text-sm text-gray-700 font-medium">
                    Helps clear acne, works on the acne/pimples to kill the
                    bacteria, and reduce inflammation due to acne.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg border-2 border-pink-200 hover:border-[#9b6b8a] transition-colors">
                  <h4
                    className="font-bold text-[#9b6b8a] mb-2 text-lg"
                    style={{ fontFamily: "Impact, Charcoal, sans-serif" }}
                  >
                    6. ✨ Salicylic Peel
                  </h4>
                  <p className="text-sm text-gray-700 font-medium">
                    Open clogged pores and exfoliates the skin. Remove excess
                    oil and it&apos;s effective for treating whiteheads and
                    pimples.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg border-2 border-pink-200 hover:border-[#9b6b8a] transition-colors">
                  <h4
                    className="font-bold text-[#9b6b8a] mb-2 text-lg"
                    style={{ fontFamily: "Impact, Charcoal, sans-serif" }}
                  >
                    7. 🌺 Lactic Peel
                  </h4>
                  <p className="text-sm text-gray-700 font-medium">
                    Exfoliates, softens and promotes a radiant glow. Suitable
                    for dry and dull skin.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg border-2 border-pink-200 hover:border-[#9b6b8a] transition-colors">
                  <h4
                    className="font-bold text-[#9b6b8a] mb-2 text-lg"
                    style={{ fontFamily: "Impact, Charcoal, sans-serif" }}
                  >
                    8. 🌙 Glycolic Peel
                  </h4>
                  <p className="text-sm text-gray-700 font-medium">
                    The alpha hydroxy acid most suitable for the anti-aging
                    treatment of photo-aged skin presenting wrinkles, sun spots,
                    and fine lines.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Product Discount */}
            <div className="w-full max-w-3xl bg-gradient-to-r from-pink-50 via-rose-50 to-pink-50 rounded-lg p-6 sm:p-8 mt-8 border-4 border-[#9b6b8a] shadow-2xl">
              <h3
                className="text-xl sm:text-2xl font-black text-center mb-4 text-[#9b6b8a] tracking-wide"
                style={{ fontFamily: "Georgia, serif" }}
              >
                💝 Product Special 💝
              </h3>
              <div className="text-center">
                <p
                  className="text-2xl font-black text-[#9b6b8a] mb-2 animate-bounce"
                  style={{ fontFamily: "Arial Black, Gadget, sans-serif" }}
                >
                  10% OFF
                </p>
                <p
                  className="text-lg font-bold text-gray-700"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Glycolic/Lactic Peel Products
                </p>
              </div>
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
                src="/specials/dermal 2.0 aug02.34.12_443628e5.jpg"
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
