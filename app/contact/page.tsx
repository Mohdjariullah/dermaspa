import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar/>
      <div className="h-[110px] w-full" />
      <main className="max-w-6xl mx-auto w-full flex flex-col items-center justify-center py-6 sm:py-8 px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-center mb-8 sm:mb-12 text-black" style={{fontFamily: 'inherit'}}>CONTACT US</h1>
        <div className="w-full flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-24">
          {/* Left: Form */}
          <form className="flex-1 flex flex-col gap-4 max-w-lg mx-auto lg:mx-0">
            <span className="uppercase text-sm font-semibold tracking-widest mb-2 text-black">Get in touch!</span>
            <input 
              type="text" 
              placeholder="Name" 
              className="bg-gray-50 border border-gray-200 px-4 py-3 text-sm sm:text-base outline-none focus:border-[#a9445b] rounded transition-colors" 
            />
            <input 
              type="email" 
              placeholder="Email*" 
              className="bg-gray-50 border border-gray-200 px-4 py-3 text-sm sm:text-base outline-none focus:border-[#a9445b] rounded transition-colors" 
            />
            <textarea 
              placeholder="Message" 
              rows={5} 
              className="bg-gray-50 border border-gray-200 px-4 py-3 text-sm sm:text-base outline-none focus:border-[#a9445b] resize-none rounded transition-colors" 
            />
            <button 
              type="submit" 
              className="mt-4 bg-[#fbb6c1] text-black font-semibold tracking-widest py-3 px-6 rounded transition hover:bg-[#a9445b] hover:text-white transform hover:scale-105"
            >
              SEND
            </button>
            <span className="text-xs text-gray-500 mt-2 leading-relaxed">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</span>
          </form>
          {/* Right: Map */}
          <div className="flex-1 flex flex-col gap-4 max-w-lg mx-auto lg:mx-0">
            <div className="w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62075.37077907196!2d144.783225!3d13.4919175!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x671f780a5991925d%3A0xb7e85f5e596faf71!2sDermal%20Skin%20Clinic%20%26%20Spa%20Guam!5e0!3m2!1sen!2sin!4v1752610033098!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dermal Skin Clinic & Spa Guam Map"
              ></iframe>
            </div>
          </div>
        </div>
        {/* Info text and clinic name below form/map */}
        <div className="w-full flex flex-col items-center justify-center mt-8 sm:mt-10 mb-8 px-4">
          <span className="uppercase text-xs font-semibold tracking-widest mb-2 text-black">Questions or Comments?</span>
          <p className="text-gray-600 text-sm sm:text-base mb-4 text-center max-w-2xl text-black leading-relaxed">
            Do you have questions about our products? Do you need help in designing your skin care regimen? Drop us a line, and we&apos;ll get back to you as soon as possible.
          </p>
          <span className="uppercase text-xs font-semibold tracking-widest mt-2 mb-2 text-black">DERMAL SKIN CLINIC AND SPA GUAM</span>
        </div>
      </main>
      <Footer />
    </div>
  );
} 