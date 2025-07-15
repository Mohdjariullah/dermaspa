import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function Home() {
  return (
    <div className="bg-[#fbb6c1] min-h-screen w-full flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center w-full">
        <div className="w-full h-[480px] md:h-[520px] relative flex items-center justify-center overflow-hidden">
          <Image
            src="/home.jpg" // Placeholder image
            alt="Smiling woman with hands on face"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div className="absolute inset-0 bg-[#fbb6c1]/60" />
          <div className="absolute right-8 bottom-8 md:right-24 md:bottom-16 flex flex-col items-center">
            <div className="bg-[#fbb6c1] rounded-full w-[320px] h-[320px] flex flex-col items-center justify-center shadow-xl">
              <span className="text-2xl md:text-3xl font-bold text-[#a9445b] text-center mb-4">HAPPY SKIN!<br/>HAPPY YOU!</span>
              <button className="bg-black text-white px-8 py-3 rounded shadow hover:bg-[#a9445b] transition font-semibold">BOOK NOW!</button>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section className="bg-white py-16 flex flex-col items-center text-center px-4">
        <h2 className="text-2xl font-bold mb-2 tracking-wider text-black">ABOUT US</h2>
        <span className="text-xs tracking-widest text-[#a9445b] mb-4">COMMITTED TO QUALITY</span>
        <div className="max-w-2xl mx-auto">
          <div className="font-bold text-sm mb-2 text-black">
            PROFESSIONAL SKIN CARE GUAM | LICENSED ESTHETICIAN<br/>
            | CERTIFIED MASSAGE THERAPIST | LOCAL PRICES |<br/>
            GREAT DEALS<br/>
            EXPERT FACIALS | FREE CONSULTATION | AMAZING RESULTS<br/>
            | PROFESSIONAL PRODUCTS | GIFT CERTIFICATES
          </div>
          <div className="text-sm text-gray-700 mb-4">
            Face and Body relaxing treatment with the full benefits of rejuvenating the skin to become remarkably supple, vibrant, and youthful-looking. Enjoy excellent service powered by the state-of-the-art equipment and our well-trained Esthetician and Spa Therapist Team that we are providing just for you. We are dedicated to serving our existing customer and We would like to Welcome all future customers.<br/>
            Call Us Today! to Book your Skin Care and Spa Treatment.<br/>
            671-647-7546 | 671-489-0327 | Follow us on Facebook + Instagram
          </div>
        </div>
      </section>
      {/* Social Section */}
      <section className="bg-gray-100 py-10 flex flex-col items-center">
        <h3 className="text-xl font-bold mb-4 tracking-wider">SOCIAL</h3>
        <div className="overflow-hidden w-full max-w-xs">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            <a href="#" className="text-3xl text-blue-600"><FaFacebookF /></a>
            <a href="#" className="text-3xl text-pink-500"><FaInstagram /></a>
            <a href="#" className="text-3xl text-blue-600"><FaFacebookF /></a>
            <a href="#" className="text-3xl text-pink-500"><FaInstagram /></a>
            <a href="#" className="text-3xl text-blue-600"><FaFacebookF /></a>
            <a href="#" className="text-3xl text-pink-500"><FaInstagram /></a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
