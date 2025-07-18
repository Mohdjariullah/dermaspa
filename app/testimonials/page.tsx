"use client";
import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { FaStar, FaChevronLeft, FaChevronRight, FaGoogle } from "react-icons/fa";

const reviews = [
  {
    name: "Ashley Otis",
    date: "11/06/2025",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "That was easily the best wax I have ever had. Selma was ver...",
    link: "https://maps.google.com/maps?cid=13251946762369740657",
  },
  {
    name: "Jacqueline Weis",
    date: "13/02/2025",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Tanisha is a goddess at taking care of your divine body and...",
    link: "https://maps.google.com/maps?cid=13251946762369740657",
  },
  {
    name: "Marissa T",
    date: "11/01/2025",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "I've been afraid to wax my brows for years after the last...",
    link: "https://maps.google.com/maps?cid=13251946762369740657",
    initial: "M",
  },
];

export default function Testimonials() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 relative bg-[#e9eaf6]">
        <div className="absolute inset-0 z-0">
          <Image src="/contact-usbg.jpg" alt="Background" fill style={{objectFit:'cover',objectPosition:'center'}} className="opacity-30" />
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto pt-8 sm:pt-12 pb-6 sm:pb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-white mb-4 sm:mb-6 uppercase text-center" style={{ textShadow: '0 2px 8px #0002' }}>REVIEWS</h1>
          
          {/* Rating Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 sm:mb-8 text-center">
            <div className="flex items-center gap-2 sm:gap-3">
              <a href="https://maps.google.com/maps?cid=13251946762369740657" target="_blank" rel="noopener noreferrer">
                <FaGoogle className="text-[#4285F4] text-2xl sm:text-3xl" style={{ filter: 'drop-shadow(0 0 2px #fff)' }} />
              </a>
              <span className="text-2xl sm:text-3xl font-bold text-white">4.8</span>
              <div className="flex text-yellow-400 text-lg sm:text-xl">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <a href="https://maps.google.com/maps?cid=13251946762369740657" target="_blank" rel="noopener noreferrer" className="text-white font-semibold underline hover:text-yellow-300 text-sm sm:text-base">Dermal Skin Clinic & Spa Guam</a>
              <span className="text-white text-xs sm:text-sm">138 Reviews</span>
            </div>
          </div>
          
          {/* Reviews Carousel */}
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 relative">
            <button className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#a9445b] text-xl sm:text-2xl bg-white rounded-full shadow p-2 z-10 transition-colors">
              <FaChevronLeft />
            </button>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center w-full max-w-4xl overflow-x-auto">
              {reviews.map((review, idx) => (
                <div key={idx} className="bg-white rounded shadow-lg px-4 sm:px-6 py-6 sm:py-8 flex flex-col items-center w-full sm:w-72 min-h-[280px] sm:min-h-[320px] mx-auto">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-2">
                    {review.avatar ? (
                      <Image src={review.avatar} alt={review.name} width={80} height={80} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-2xl sm:text-3xl font-bold text-[#a9445b]">{review.initial}</span>
                    )}
                  </div>
                  <div className="flex text-yellow-400 mb-2 text-sm sm:text-base">
                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                  </div>
                  <p className="text-center text-black text-sm sm:text-base mb-4 leading-relaxed">&quot;{review.text}&quot;</p>
                  <a href={review.link} target="_blank" rel="noopener noreferrer" className="text-[#a9445b] font-semibold flex items-center gap-1 hover:underline text-sm sm:text-base">Read full review <span>&#8250;</span></a>
                  <div className="mt-4 text-xs text-gray-700 font-semibold w-full text-left">
                    {review.name} - {review.date}
                  </div>
                </div>
              ))}
            </div>
            
            <button className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#a9445b] text-xl sm:text-2xl bg-white rounded-full shadow p-2 z-10 transition-colors">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
