"use client";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Image from "next/image";

export default function ServicesList() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen w-full flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="w-full flex flex-col lg:flex-row items-center justify-center py-8 sm:py-12 px-4 sm:px-6 bg-white">
        <div className="lg:w-1/2 w-full max-w-xl mx-auto flex flex-col gap-4 sm:gap-6 mb-8 lg:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#a9445b] mb-2 uppercase tracking-tight">Facial</h1>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            Our facials help to deeply cleanse the skin, removing dirt, oil, and impurities that clog pores and lead to breakouts. Secondly, our facials are also beneficial for the mind, body, and spirit by providing a relaxing experience. Each facial is customized for your skin concerns and goals, using professional products and advanced equipment for enhanced skin tones. Non-surgical or non-invasive treatments for aging, acne, and pigmentation. Our licensed estheticians perform targeted skin analysis for best results. Book a facial today at our clinic for a youthful and radiant complexion. CALL TO BOOK.
          </p>
          <button className="bg-[#fbb6c1] text-[#a9445b] px-6 sm:px-8 py-2 sm:py-3 rounded shadow font-bold w-32 sm:w-36 text-sm sm:text-base transition hover:bg-[#a9445b] hover:text-white transform hover:scale-105">
            CALL
          </button>
        </div>
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-64 sm:h-80 lg:h-96 relative rounded-lg overflow-hidden shadow-lg">
            <Image src="/e69b890c-7b71-4f1c-9b6b-6949bd55fe40.jpeg" alt="Facial" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* Face Treatments and Facials Section */}
      <section className="w-full flex flex-col items-center py-8 sm:py-12 px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#a9445b] mb-2 uppercase tracking-wide text-center">Face Treatments and Facials</h2>
        <span className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 text-center">CALL TO BOOK THESE SERVICES</span>
        <div className="w-full max-w-4xl flex flex-col gap-6 sm:gap-8 items-center">
          <div className="w-full max-w-3xl">
            <Image src="/rs=w_1023,cg_true.jpeg" alt="Facial Services" width={800} height={600} className="rounded-lg shadow-lg border border-pink-200 w-full h-auto" />
          </div>
          <div className="w-full max-w-3xl">
            <Image src="/rs=w_1023,cg_true (1).jpeg" alt="Facial Services 2" width={800} height={600} className="rounded-lg shadow-lg border border-pink-200 w-full h-auto" />
          </div>
          <div className="w-full max-w-3xl">
            <Image src="/rs=w_1023,cg_true (2).jpeg" alt="Facial Services 3" width={800} height={600} className="rounded-lg shadow-lg border border-pink-200 w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Body Massage Section */}
      <section className="w-full flex flex-col items-center py-8 sm:py-12 px-4 sm:px-6 bg-white">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#a9445b] mb-2 uppercase tracking-wide text-center">Body Massage</h2>
        <div className="max-w-2xl mx-auto text-gray-700 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-center leading-relaxed">
          Our body massages help to alleviate muscle tension and stiffness, promote relaxation and reduce stress. Improved tissue health response can be found from regular quality and careful stretching. These massages stimulate circulation, bringing a sense of overall well-being. Our skilled therapists use a variety of techniques, resulting in a holistic approach to skin care and wellness. Book a massage today for lower back pain, sports injuries, relief for overworked muscles, or general relaxation and comfort. Regular massages can contribute to better stress management and promote balance and harmony within the body. CALL TO BOOK.
        </div>
        <button className="bg-[#fbb6c1] text-[#a9445b] px-6 sm:px-8 py-2 sm:py-3 rounded shadow font-bold w-32 sm:w-36 mb-6 sm:mb-8 text-sm sm:text-base transition hover:bg-[#a9445b] hover:text-white transform hover:scale-105">
          CALL
        </button>
        <div className="w-full max-w-4xl flex flex-col gap-6 sm:gap-8 items-center">
          <div className="w-full max-w-3xl">
            <Image src="/rs=w_1023,cg_true (3).jpeg" alt="Massage Services" width={800} height={600} className="rounded-lg shadow-lg border border-pink-200 w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Face Packages Section */}
      <section className="w-full flex flex-col items-center py-8 sm:py-12 px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#a9445b] mb-2 uppercase tracking-wide text-center">Face Packages, Body Massages / Boosters - Waxing</h2>
        <span className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 text-center">CALL TO BOOK THESE SERVICES</span>
        <div className="w-full max-w-4xl flex flex-col gap-6 sm:gap-8 items-center">
          <div className="w-full max-w-3xl">
            <Image src="/rs=w_1023,cg_true (4).jpeg" alt="Face Packages" width={800} height={600} className="rounded-lg shadow-lg border border-pink-200 w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Waxing Services Section */}
      <section className="w-full flex flex-col items-center py-8 sm:py-12 px-4 sm:px-6 bg-white">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#a9445b] mb-2 uppercase tracking-wide text-center">Waxing Services</h2>
        <span className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 text-center">CALL TO BOOK THESE SERVICES</span>
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Waxing Service Items */}
          <div className="flex flex-col items-center">
            <img src="https://img1.wsimg.com/isteam/ip/799dec32-c44d-4302-a569-db93073f4b94/eyebrows.jpeg" alt="Lip Waxing" className="rounded-lg shadow-lg w-48 h-48 object-cover mb-2 border border-pink-200" />
            <span className="font-semibold text-[#a9445b] text-center">Lip Waxing</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://img1.wsimg.com/isteam/stock/nybdkoA" alt="Half Arms Waxing" className="rounded-lg shadow-lg w-48 h-48 object-cover mb-2 border border-pink-200" />
            <span className="font-semibold text-[#a9445b] text-center">Half Arms Waxing</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://img1.wsimg.com/isteam/stock/R4ggkwa" alt="Full Arm Waxing" className="rounded-lg shadow-lg w-48 h-48 object-cover mb-2 border border-pink-200" />
            <span className="font-semibold text-[#a9445b] text-center">Full Arm Waxing</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://img1.wsimg.com/isteam/stock/waN1p7x" alt="Neck Waxing" className="rounded-lg shadow-lg w-48 h-48 object-cover mb-2 border border-pink-200" />
            <span className="font-semibold text-[#a9445b] text-center">Neck Waxing</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://img1.wsimg.com/isteam/stock/5lKWWEw" alt="Chin Waxing" className="rounded-lg shadow-lg w-48 h-48 object-cover mb-2 border border-pink-200" />
            <span className="font-semibold text-[#a9445b] text-center">Chin Waxing</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://img1.wsimg.com/isteam/stock/42117/:/rs=h:%7B640%7D" alt="Lower Leg Waxing" className="rounded-lg shadow-lg w-48 h-48 object-cover mb-2 border border-pink-200" />
            <span className="font-semibold text-[#a9445b] text-center">Lower Leg Waxing</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://img1.wsimg.com/isteam/stock/8973" alt="Full Leg Waxing" className="rounded-lg shadow-lg w-48 h-48 object-cover mb-2 border border-pink-200" />
            <span className="font-semibold text-[#a9445b] text-center">Full Leg Waxing</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://img1.wsimg.com/isteam/stock/1310" alt="Full Face Waxing" className="rounded-lg shadow-lg w-48 h-48 object-cover mb-2 border border-pink-200" />
            <span className="font-semibold text-[#a9445b] text-center">Full Face Waxing</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://img1.wsimg.com/isteam/stock/gAqxgK1" alt="Bikini Waxing" className="rounded-lg shadow-lg w-48 h-48 object-cover mb-2 border border-pink-200" />
            <span className="font-semibold text-[#a9445b] text-center">Bikini Waxing</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://img1.wsimg.com/isteam/stock/gAqxgK1" alt="Underarm Waxing" className="rounded-lg shadow-lg w-48 h-48 object-cover mb-2 border border-pink-200" />
            <span className="font-semibold text-[#a9445b] text-center">Underarm Waxing</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://img1.wsimg.com/isteam/stock/gAqxgK1" alt="Brazilian Wax (Women)" className="rounded-lg shadow-lg w-48 h-48 object-cover mb-2 border border-pink-200" />
            <span className="font-semibold text-[#a9445b] text-center">Brazilian Wax (Women)</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://img1.wsimg.com/isteam/stock/6yaEPlz" alt="Brazilian Waxing (Men)" className="rounded-lg shadow-lg w-48 h-48 object-cover mb-2 border border-pink-200" />
            <span className="font-semibold text-[#a9445b] text-center">Brazilian Waxing (Men)</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://img1.wsimg.com/isteam/stock/6yaEPlz" alt="Chest Wax" className="rounded-lg shadow-lg w-48 h-48 object-cover mb-2 border border-pink-200" />
            <span className="font-semibold text-[#a9445b] text-center">Chest Wax</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://img1.wsimg.com/isteam/stock/gAqxgK1/:/rs=h:%7B640%7D" alt="Stomach Wax" className="rounded-lg shadow-lg w-48 h-48 object-cover mb-2 border border-pink-200" />
            <span className="font-semibold text-[#a9445b] text-center">Stomach Wax</span>
          </div>
        </div>
      </section>

      {/* Bottom Image */}
      <section className="w-full flex justify-center py-8 sm:py-12 px-4 sm:px-6 bg-white">
        <div className="w-full max-w-2xl sm:max-w-3xl">
          <Image src="/cr=w_1240,h_620.jpeg" alt="Spa Flower" width={800} height={400} className="rounded-lg shadow-lg border border-pink-200 w-full h-auto" />
        </div>
      </section>
      <Footer />
    </div>
  );
}
