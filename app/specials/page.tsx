import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import Image from "next/image";

const socialLinks = [
  { name: "FACEBOOK", href: "#" },
  { name: "INSTAGRAM", href: "#" },
  { name: "FACEBOOK", href: "#" },
  { name: "INSTAGRAM", href: "#" },
  { name: "FACEBOOK", href: "#" },
  { name: "INSTAGRAM", href: "#" },
  { name: "FACEBOOK", href: "#" },
];

export default function Specials() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-center px-2 md:px-0">
        {/* Banner */}
        <div className="w-full max-w-6xl mx-auto mt-8 flex flex-col md:flex-row items-center justify-center gap-8 px-2 md:px-8">
          <div className="flex-1 flex justify-center">
            <Image src="/cr=w_1232hsa621.jpeg" alt="Specials Banner" width={400} height={300} className="rounded-md w-full max-w-xs md:max-w-md object-cover" />
          </div>
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0">
            <h2 className="text-lg md:text-2xl font-semibold mb-2 text-[#a9445b]">PLEASE CLICK ON FACEBOOK &amp; INSTAGRAM FOR OUR</h2>
            <h1 className="text-2xl md:text-4xl font-extrabold mb-2 text-black tracking-tight">MONTHLY SPECIALS &amp; PROMOS</h1>
          </div>
        </div>
        {/* Social Links Bar - Marquee */}
        <div className="w-full bg-[#fbb6c1] mt-8 mb-8 overflow-x-hidden">
          <div className="relative w-full h-12 flex items-center">
            <div className="flex gap-8 animate-marquee whitespace-nowrap min-w-max">
              {Array(2).fill(null).map((_, i) => (
                socialLinks.map((link, idx) => (
                  <a key={i + '-' + idx} href={link.href} className="uppercase font-bold text-[#a9445b] text-lg md:text-xl tracking-wider hover:underline mx-4">{link.name}</a>
                ))
              ))}
            </div>
          </div>
        </div>
        {/* Face and Body Services */}
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center mb-12 px-2">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-4 mt-4 text-[#a9445b]">FACE AND BODY SERVICES</h2>
          <span className="block text-xs text-[#a9445b] mb-2">CALL TO BOOK THESE SERVICES</span>
          <div className="w-full flex flex-col items-center">
            <Image src="/rs=w_1023,cg_true.jpeg" alt="Face and Body Services" width={700} height={900} className="rounded-md w-full object-contain mb-6" />
            <Image src="/rs=w_1023,cg_true (1).jpeg" alt="Face and Body Services 2" width={700} height={900} className="rounded-md w-full object-contain mb-6" />
            <Image src="/rs=w_1023,cg_true (2).jpeg" alt="Face and Body Services 3" width={700} height={900} className="rounded-md w-full object-contain mb-6" />
          </div>
        </div>
        {/* Dermal Signature Face Treatment */}
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center mb-12 px-2">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-4 mt-4 text-[#a9445b]">DERMAL SIGNATURE FACE TREATMENT</h2>
          <span className="block text-xs text-[#a9445b] mb-2">CALL TO BOOK THESE SERVICES</span>
          <div className="w-full flex flex-col items-center">
            <Image src="/rs=w_1023,cg_true (3).jpeg" alt="Signature Face Treatment" width={700} height={900} className="rounded-md w-full object-contain mb-6" />
            <Image src="/rs=w_1023,cg_true (4).jpeg" alt="Signature Face Treatment 2" width={700} height={900} className="rounded-md w-full object-contain mb-6" />
            <Image src="/rs=w_1023,cg_true (2).jpeg" alt="Face and Body Services 3" width={700} height={900} className="rounded-md w-full object-contain mb-6" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
