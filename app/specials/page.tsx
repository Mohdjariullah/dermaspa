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
        <title>Spa Specials & Services | Dermal Skin Clinic Guam | Face & Body Treatments</title>
        <meta name="description" content="Explore our spa specials and services in Guam! Face treatments, body massages, and signature services. Call (671) 647-7546 to book your appointment today!" />
        <meta name="keywords" content="spa specials Guam, face treatments, body massages, spa services, facial treatments, massage Guam, skincare services" />
        <meta property="og:title" content="Spa Specials & Services Guam | Face & Body Treatments" />
        <meta property="og:description" content="Discover our spa specials and services! Face treatments, body massages, and signature services available. Call to book your appointment!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dermalskincareandspaguam.com/specials" />
        <link rel="canonical" href="https://dermalskincareandspaguam.com/specials" />
      </Head>
      
      <div className="min-h-screen flex flex-col bg-white font-sans">
        <Navbar />
        <main className="flex-1 w-full flex flex-col items-center px-4 sm:px-6 md:px-8">
          {/* Quick Access Banner */}
          <div className="w-full bg-gradient-to-r from-pink-50 to-rose-50 border-b-2 border-[#8b5a7a] py-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-xl sm:text-2xl font-bold text-[#8b5a7a] mb-2">
                📞 Call (671) 647-7546 to Book Our Services
              </h1>
              <p className="text-sm text-gray-700">
                Face Treatments | Body Massages | Signature Services | Professional Care
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
