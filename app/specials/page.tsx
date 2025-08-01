"use client";
import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Head from "next/head";

const socialLinks = [
  { name: "FACEBOOK", href: "https://www.facebook.com/dermalskincareandspa" },
  { name: "INSTAGRAM", href: "https://www.instagram.com/dermalskincareandspaguam/" },
  { name: "FACEBOOK", href: "https://www.facebook.com/dermalskincareandspa" },
  { name: "INSTAGRAM", href: "https://www.instagram.com/dermalskincareandspaguam/" },
  { name: "FACEBOOK", href: "https://www.facebook.com/dermalskincareandspa" },
  { name: "INSTAGRAM", href: "https://www.instagram.com/dermalskincareandspaguam/" },
  { name: "FACEBOOK", href: "https://www.facebook.com/dermalskincareandspa" },
];

export default function Specials() {
  return (
    <>
      <Head>
        <title>August Spa Specials & Promotions | Dermal Skin Clinic Guam | Face Treatments $70-$120</title>
        <meta name="description" content="Get August spa specials in Guam! Face Steam + Massage + Treatment packages from $70-$120. Oxygen treatments, acne care, chemical peels. 10% off products. Call (671) 647-7546 to book now!" />
        <meta name="keywords" content="spa specials Guam, August promotions, face treatments, oxygen treatment, acne treatment, chemical peels, glycolic peel, lactic peel, salicylic peel, spa packages, massage Guam, facial treatments" />
        <meta property="og:title" content="August Spa Specials Guam | Face Treatments $70-$120" />
        <meta property="og:description" content="Limited time August spa specials! Face Steam + Massage + Treatment packages. Oxygen, acne, and chemical peel treatments available. Call to book!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dermalskincareandspaguam.com/specials" />
        <link rel="canonical" href="https://dermalskincareandspaguam.com/specials" />
        
        {/* Structured Data for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "August Spa Specials - Face Treatments",
              "description": "Face Steam + Face Massage + Face Treatment packages with oxygen, acne, and chemical peel options",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Dermal Skin Clinic and Spa Guam",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Guam"
                },
                "telephone": "(671) 647-7546"
              },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Pick 1 Treatment Package",
                  "description": "30 min Face Steam + Face Massage + Face Treatment",
                  "price": "70",
                  "priceCurrency": "USD"
                },
                {
                  "@type": "Offer",
                  "name": "Pick 2 Treatment Package", 
                  "description": "45 min Face Steam + Face Massage + Face Treatment",
                  "price": "99",
                  "priceCurrency": "USD"
                },
                {
                  "@type": "Offer",
                  "name": "Pick 3 Treatment Package",
                  "description": "60 min Face Steam + Face Massage + Face Treatment", 
                  "price": "120",
                  "priceCurrency": "USD"
                }
              ]
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen flex flex-col bg-white font-sans">
        <Navbar />
        <main className="flex-1 w-full flex flex-col items-center px-4 sm:px-6 md:px-8">
          {/* Quick Access Banner */}
          <div className="w-full bg-gradient-to-r from-pink-50 to-rose-50 border-b-2 border-[#8b5a7a] py-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-xl sm:text-2xl font-bold text-[#8b5a7a] mb-2">
                📞 Call (671) 647-7546 to Book August Specials
              </h1>
              <p className="text-sm text-gray-700">
                Face Treatments $70-$120 | Oxygen & Acne Care | Chemical Peels | 10% Off Products
              </p>
            </div>
          </div>

          {/* Banner */}
          <div className="w-full max-w-6xl mx-auto mt-6 sm:mt-8 flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 px-4 sm:px-6">
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                <Image 
                  src="/cr=w_1232hsa621.jpeg" 
                  alt="Specials Banner" 
                  width={400} 
                  height={300} 
                  className="rounded-md w-full h-auto object-cover shadow-lg" 
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left mt-4 lg:mt-0">
              <h2 className="text-base sm:text-lg md:text-2xl font-semibold mb-2 text-[#8b5a7a] leading-tight">PLEASE CLICK ON FACEBOOK &amp; INSTAGRAM FOR OUR</h2>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 text-black tracking-tight leading-tight">MONTHLY SPECIALS &amp; PROMOS</h1>
            </div>
          </div>
          
          {/* Social Links Bar - Marquee */}
          <div className="w-full bg-[#fbb6c1] mt-6 sm:mt-8 mb-6 sm:mb-8 overflow-x-hidden">
            <div className="relative w-full h-12 flex items-center">
              <div className="flex gap-4 sm:gap-6 md:gap-8 animate-marquee whitespace-nowrap min-w-max">
                {Array(2).fill(null).map((_, i) => (
                  socialLinks.map((link, idx) => (
                    <a 
                      key={i + '-' + idx} 
                      href={link.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="uppercase font-bold text-[#8b5a7a] text-sm sm:text-lg md:text-xl tracking-wider hover:underline mx-2 sm:mx-4 transition-colors"
                    >
                      {link.name}
                    </a>
                  ))
              ))}
              </div>
            </div>
          </div>

          {/* August Promo */}
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center mb-8 sm:mb-12 px-4 sm:px-6">
            <div className="w-full text-center mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-2 text-[#8b5a7a] tracking-wider" style={{fontFamily: 'Impact, Charcoal, sans-serif'}}>🌸 AUGUST PROMO 🌸</h2>
              <span className="block text-sm font-bold text-[#8b5a7a] mb-4">📞 CALL TO BOOK THESE SERVICES 📞</span>
            </div>

            {/* August Promo Image */}
            <div className="w-full max-w-3xl mb-8">
              <Image 
                src="/specials/august-a087-43bd-a141-3c169f914f72.png" 
                alt="August Promo" 
                width={800} 
                height={600} 
                className="rounded-lg w-full h-auto object-contain shadow-2xl border-4 border-[#8b5a7a]" 
              />
            </div>
            
            {/* Face Treatment Packages */}
            <div className="w-full max-w-3xl bg-gradient-to-r from-pink-50 via-rose-50 to-pink-50 rounded-lg p-6 sm:p-8 mb-8 border-4 border-[#8b5a7a] shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-black text-center mb-6 text-[#8b5a7a] tracking-wide" style={{fontFamily: 'Georgia, serif'}}>✨ Face Steam + Face Massage + Face Treatment ✨</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-white rounded-lg p-4 text-center shadow-lg border-2 border-[#8b5a7a] transform hover:scale-105 transition-transform">
                  <h4 className="font-black text-[#8b5a7a] mb-2 text-lg" style={{fontFamily: 'Impact, Charcoal, sans-serif'}}>PICK 1</h4>
                  <p className="text-sm text-gray-600 mb-2 font-semibold">30 min</p>
                  <p className="text-2xl font-black text-[#8b5a7a]" style={{fontFamily: 'Arial Black, Gadget, sans-serif'}}>$70</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-lg border-2 border-[#8b5a7a] transform hover:scale-105 transition-transform">
                  <h4 className="font-black text-[#8b5a7a] mb-2 text-lg" style={{fontFamily: 'Impact, Charcoal, sans-serif'}}>PICK 2</h4>
                  <p className="text-sm text-gray-600 mb-2 font-semibold">45 min</p>
                  <p className="text-2xl font-black text-[#8b5a7a]" style={{fontFamily: 'Arial Black, Gadget, sans-serif'}}>$99</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-lg border-2 border-[#8b5a7a] transform hover:scale-105 transition-transform">
                  <h4 className="font-black text-[#8b5a7a] mb-2 text-lg" style={{fontFamily: 'Impact, Charcoal, sans-serif'}}>PICK 3</h4>
                  <p className="text-sm text-gray-600 mb-2 font-semibold">60 min</p>
                  <p className="text-2xl font-black text-[#8b5a7a]" style={{fontFamily: 'Arial Black, Gadget, sans-serif'}}>$120</p>
                </div>
              </div>
            </div>

            {/* Treatment Options */}
            <div className="w-full max-w-4xl">
              <h3 className="text-xl sm:text-2xl font-black text-center mb-6 text-[#8b5a7a] tracking-wide" style={{fontFamily: 'Georgia, serif'}}>✨ Available Treatments ✨</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-white rounded-lg p-4 shadow-lg border-2 border-pink-200 hover:border-[#8b5a7a] transition-colors">
                  <h4 className="font-bold text-[#8b5a7a] mb-2 text-lg" style={{fontFamily: 'Impact, Charcoal, sans-serif'}}>🌿 Oxygen Face Treatment</h4>
                  <p className="text-sm text-gray-700 font-medium">Brightens and oxygenates the complexion. Glow! For dry skin.</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg border-2 border-pink-200 hover:border-[#8b5a7a] transition-colors">
                  <h4 className="font-bold text-[#8b5a7a] mb-2 text-lg" style={{fontFamily: 'Impact, Charcoal, sans-serif'}}>🌸 Acne Treatment</h4>
                  <p className="text-sm text-gray-700 font-medium">Helps clear acne, works on the acne/pimples to kill the bacteria, and reduce inflammation due to acne.</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg border-2 border-pink-200 hover:border-[#8b5a7a] transition-colors">
                  <h4 className="font-bold text-[#8b5a7a] mb-2 text-lg" style={{fontFamily: 'Impact, Charcoal, sans-serif'}}>✨ Salicylic Peel</h4>
                  <p className="text-sm text-gray-700 font-medium">Open clogged pores and exfoliates the skin. Remove excess oil and it's effective for treating whiteheads and pimples.</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg border-2 border-pink-200 hover:border-[#8b5a7a] transition-colors">
                  <h4 className="font-bold text-[#8b5a7a] mb-2 text-lg" style={{fontFamily: 'Impact, Charcoal, sans-serif'}}>🌺 Lactic Peel</h4>
                  <p className="text-sm text-gray-700 font-medium">Exfoliates, softens and promotes a radiant glow. Suitable for dry and dull skin.</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg border-2 border-pink-200 hover:border-[#8b5a7a] transition-colors">
                  <h4 className="font-bold text-[#8b5a7a] mb-2 text-lg" style={{fontFamily: 'Impact, Charcoal, sans-serif'}}>🌙 Glycolic Peel</h4>
                  <p className="text-sm text-gray-700 font-medium">The alpha hydroxy acid most suitable for the anti-aging treatment of photo-aged skin presenting wrinkles, sun spots, and fine lines.</p>
                </div>
              </div>
            </div>

            {/* Product Discount */}
            <div className="w-full max-w-3xl bg-gradient-to-r from-pink-50 via-rose-50 to-pink-50 rounded-lg p-6 sm:p-8 mt-8 border-4 border-[#8b5a7a] shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-black text-center mb-4 text-[#8b5a7a] tracking-wide" style={{fontFamily: 'Georgia, serif'}}>💝 Product Special 💝</h3>
              <div className="text-center">
                <p className="text-2xl font-black text-[#8b5a7a] mb-2 animate-bounce" style={{fontFamily: 'Arial Black, Gadget, sans-serif'}}>10% OFF</p>
                <p className="text-lg font-bold text-gray-700" style={{fontFamily: 'Georgia, serif'}}>Glycolic/Lactic Peel Products</p>
              </div>
            </div>
          </div>
          
          {/* Face and Body Services */}
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center mb-8 sm:mb-12 px-4 sm:px-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4 mt-4 text-[#8b5a7a]">FACE AND BODY SERVICES</h2>
            <span className="block text-xs text-[#8b5a7a] mb-4 sm:mb-6">CALL TO BOOK THESE SERVICES</span>
            <div className="w-full flex flex-col items-center gap-6 sm:gap-8">
              <div className="w-full max-w-3xl">
                <Image 
                  src="/rs=w_1023,cg_true.jpeg" 
                  alt="Face and Body Services" 
                  width={700} 
                  height={900} 
                  className="rounded-md w-full h-auto object-contain shadow-lg" 
                />
              </div>
              <div className="w-full max-w-3xl">
                <Image 
                  src="/rs=w_1023,cg_true (1).jpeg" 
                  alt="Face and Body Services 2" 
                  width={700} 
                  height={900} 
                  className="rounded-md w-full h-auto object-contain shadow-lg" 
                />
              </div>
              <div className="w-full max-w-3xl">
                <Image 
                  src="/rs=w_1023,cg_true (2).jpeg" 
                  alt="Face and Body Services 3" 
                  width={700} 
                  height={900} 
                  className="rounded-md w-full h-auto object-contain shadow-lg" 
                />
              </div>
            </div>
          </div>
          
          {/* Dermal Signature Face Treatment */}
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center mb-8 sm:mb-12 px-4 sm:px-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4 mt-4 text-[#8b5a7a]">DERMAL SIGNATURE FACE TREATMENT</h2>
            <span className="block text-xs text-[#8b5a7a] mb-4 sm:mb-6">CALL TO BOOK THESE SERVICES</span>
            <div className="w-full flex flex-col items-center gap-6 sm:gap-8">
              <div className="w-full max-w-3xl">
                <Image 
                  src="/rs=w_1023,cg_true (3).jpeg" 
                  alt="Signature Face Treatment" 
                  width={700} 
                  height={900} 
                  className="rounded-md w-full h-auto object-contain shadow-lg" 
                />
              </div>
              <div className="w-full max-w-3xl">
                <Image 
                  src="/rs=w_1023,cg_true (4).jpeg" 
                  alt="Signature Face Treatment 2" 
                  width={700} 
                  height={900} 
                  className="rounded-md w-full h-auto object-contain shadow-lg" 
                />
              </div>
              <div className="w-full max-w-3xl">
                <Image 
                  src="/rs=w_1023,cg_true (2).jpeg" 
                  alt="Face and Body Services 3" 
                  width={700} 
                  height={900} 
                  className="rounded-md w-full h-auto object-contain shadow-lg" 
                />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
