import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import Image from "next/image";

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
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-center px-4 sm:px-6 md:px-8">
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
            <h2 className="text-base sm:text-lg md:text-2xl font-semibold mb-2 text-[#a9445b] leading-tight">PLEASE CLICK ON FACEBOOK &amp; INSTAGRAM FOR OUR</h2>
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
                    className="uppercase font-bold text-[#a9445b] text-sm sm:text-lg md:text-xl tracking-wider hover:underline mx-2 sm:mx-4 transition-colors"
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
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4 mt-4 text-[#a9445b]">FACE AND BODY SERVICES</h2>
          <span className="block text-xs text-[#a9445b] mb-4 sm:mb-6">CALL TO BOOK THESE SERVICES</span>
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
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4 mt-4 text-[#a9445b]">DERMAL SIGNATURE FACE TREATMENT</h2>
          <span className="block text-xs text-[#a9445b] mb-4 sm:mb-6">CALL TO BOOK THESE SERVICES</span>
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
  );
}
