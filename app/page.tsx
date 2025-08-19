"use client";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <div className="bg-[#fbb6c1] min-h-screen w-full flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center w-full">
        <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[480px] xl:h-[520px] relative flex items-center justify-center overflow-hidden">
        <Image
            src="/home.jpg"
            alt="Smiling woman with hands on face"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
          <div className="absolute inset-0 bg-[#fbb6c1]/60" />
          <div className="absolute right-4 sm:right-8 md:right-16 lg:right-24 bottom-4 sm:bottom-8 md:bottom-16 flex flex-col items-center">
            <div className="bg-[#fbb6c1] rounded-full w-64 sm:w-80 md:w-96 lg:w-[320px] h-64 sm:h-80 md:h-96 lg:h-[320px] flex flex-col items-center justify-center shadow-xl p-4 sm:p-6">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#a9445b] text-center mb-3 sm:mb-4 leading-tight">
                HAPPY SKIN!<br/>HAPPY YOU
              </span>
              <button 
                onClick={() => window.location.href = '/services'}
                className="bg-black text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded shadow hover:bg-[#a9445b] transition font-semibold text-sm sm:text-base transform hover:scale-105"
              >
                BOOK NOW!
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section className="bg-white py-8 sm:py-12 md:py-16 flex flex-col items-center text-center px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 tracking-wide text-black">ABOUT US</h2>
        <span className="text-sm sm:text-base tracking-widest text-[#a9445b] mb-4 sm:mb-6 font-semibold">COMMITTED TO QUALITY</span>
        <div className="max-w-2xl mx-auto">
          <div className="font-bold text-sm sm:text-base md:text-lg mb-2 sm:mb-4 text-black leading-relaxed">
            PROFESSIONAL SKIN CARE GUAM | LICENSED ESTHETICIAN<br/>
            | CERTIFIED MASSAGE THERAPIST | LOCAL PRICES |<br/>
            GREAT DEALS<br/>
            EXPERT FACIALS | FREE CONSULTATION | AMAZING RESULTS<br/>
            | PROFESSIONAL PRODUCTS | GIFT CERTIFICATES
          </div>
          <div className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
            Face and Body relaxing treatment with the full benefits of rejuvenating the skin to become remarkably supple, vibrant, and youthful-looking. Enjoy excellent service powered by the state-of-the-art equipment and our well-trained Esthetician and Spa Therapist Team that we are providing just for you. We are dedicated to serving our existing customer and We would like to Welcome all future customers.<br/>
            Call Us Today! to Book your Skin Care and Spa Treatment.<br/>
            (888) 964-5925 | Follow us on <a href="https://www.facebook.com/dermalskincareandspa" target="_blank" rel="noopener noreferrer" className="text-[#a9445b] hover:underline">Facebook</a> + <a href="https://www.instagram.com/dermalskincareandspaguam/" target="_blank" rel="noopener noreferrer" className="text-[#a9445b] hover:underline">Instagram</a>
          </div>
        </div>
      </section>
      
      {/* Social Section */}
      <section className="bg-gray-100 py-6 sm:py-8 md:py-10 flex flex-col items-center">
        <h3 className="text-base sm:text-lg md:text-xl font-extrabold mb-3 sm:mb-4 tracking-widest text-[#a9445b] uppercase opacity-80">SOCIAL</h3>
        <div className="flex gap-4 sm:gap-6 md:gap-8 justify-center items-center w-full max-w-xs sm:max-w-sm md:max-w-md">
          <a href="https://www.facebook.com/dermalskincareandspa" target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-3xl md:text-4xl text-blue-600 hover:text-blue-700 transition-colors p-2 rounded-full bg-white shadow-md hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#a9445b]">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/dermalskincareandspaguam/" target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-3xl md:text-4xl text-pink-500 hover:text-pink-600 transition-colors p-2 rounded-full bg-white shadow-md hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#a9445b]">
            <FaInstagram />
          </a>
        </div>
      </section>

      {/* Blog Section */}
      <section className="w-full bg-white py-10 sm:py-14 px-4 sm:px-8 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#a9445b] mb-2 tracking-wide text-center">Our Latest Articles</h2>
        <span className="text-xs sm:text-sm text-gray-600 mb-6 text-center">Tips, news, and inspiration for your best skin and wellness</span>
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Card 1 */}
          <a href="/blog" className="bg-[#fbb6c1]/30 rounded-xl shadow-lg border border-pink-100 flex flex-col overflow-hidden transition hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#a9445b]" tabIndex={0}>
            <div className="h-48 w-full relative">
              <Image src="/rs=w_1023,cg_true.jpeg" alt="Glowing Skin Tips" fill style={{ objectFit: 'cover' }} className="rounded-t-xl" />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-bold text-lg text-[#a9445b] mb-2">5 Tips for Glowing Skin</h3>
              <p className="text-gray-700 text-sm mb-4 flex-1">Discover simple daily habits and spa treatments that can help you achieve a radiant, healthy complexion all year round.</p>
              <span className="mt-auto bg-[#a9445b] text-white px-4 py-2 rounded shadow font-semibold text-sm transition hover:bg-[#fbb6c1] hover:text-[#a9445b] text-center cursor-pointer">Read More</span>
            </div>
          </a>
          {/* Blog Card 2 */}
          <a href="/blog" className="bg-[#fbb6c1]/30 rounded-xl shadow-lg border border-pink-100 flex flex-col overflow-hidden transition hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#a9445b]" tabIndex={0}>
            <div className="h-48 w-full relative">
              <Image src="/Deep Cleansing Facial (for Men & Women).jpg" alt="Deep Cleansing Benefits" fill style={{ objectFit: 'cover' }} className="rounded-t-xl" />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-bold text-lg text-[#a9445b] mb-2">The Benefits of Deep Cleansing Facials</h3>
              <p className="text-gray-700 text-sm mb-4 flex-1">Learn how deep cleansing facials can rejuvenate your skin, unclog pores, and leave you feeling refreshed and renewed.</p>
              <span className="mt-auto bg-[#a9445b] text-white px-4 py-2 rounded shadow font-semibold text-sm transition hover:bg-[#fbb6c1] hover:text-[#a9445b] text-center cursor-pointer">Read More</span>
            </div>
          </a>
          {/* Blog Card 3 */}
          <a href="/blog" className="bg-[#fbb6c1]/30 rounded-xl shadow-lg border border-pink-100 flex flex-col overflow-hidden transition hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#a9445b]" tabIndex={0}>
            <div className="h-48 w-full relative">
              <Image src="/services/whitening-kojic.jpg" alt="Whitening Treatments" fill style={{ objectFit: 'cover' }} className="rounded-t-xl" />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-bold text-lg text-[#a9445b] mb-2">Understanding Whitening Treatments</h3>
              <p className="text-gray-700 text-sm mb-4 flex-1">Explore the science and safety behind popular whitening treatments, and how to choose the right one for your skin type.</p>
              <span className="mt-auto bg-[#a9445b] text-white px-4 py-2 rounded shadow font-semibold text-sm transition hover:bg-[#fbb6c1] hover:text-[#a9445b] text-center cursor-pointer">Read More</span>
            </div>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
