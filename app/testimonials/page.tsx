import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import Image from "next/image";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    <div className="min-h-screen flex flex-col bg-white" style={{ fontFamily: "'Source Sans Pro', Arial, sans-serif" }}>
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-center justify-center px-2 md:px-0 relative" style={{ background: "url('/public/testimonial-bg.jpg') center/cover no-repeat, #e9eaf6" }}>
        <div className="w-full max-w-5xl mx-auto pt-12 pb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wider text-white mb-4 uppercase" style={{ textShadow: '0 2px 8px #0002' }}>REVIEWS</h1>
          <div className="flex items-center gap-3 mb-6">
            <Image src="/public/google-g.svg" alt="Google" width={32} height={32} />
            <span className="text-3xl font-bold text-white">4.8</span>
            <div className="flex text-yellow-400 text-xl">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
            <a href="https://maps.google.com/maps?cid=13251946762369740657" target="_blank" rel="noopener noreferrer" className="text-white font-semibold underline hover:text-yellow-300 ml-2">Dermal Skin Clinic & Spa Guam</a>
            <span className="text-white text-sm ml-2">138 Reviews</span>
          </div>
          <div className="flex flex-row items-center justify-center gap-4 relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#a9445b] text-2xl bg-white rounded-full shadow p-2 z-10"><FaChevronLeft /></button>
            <div className="flex flex-row gap-8 justify-center w-full">
              {reviews.map((review, idx) => (
                <div key={idx} className="bg-white rounded shadow-lg px-6 py-8 flex flex-col items-center w-72 min-h-[320px]">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-2">
                    {review.avatar ? (
                      <Image src={review.avatar} alt={review.name} width={80} height={80} />
                    ) : (
                      <span className="text-3xl font-bold text-[#a9445b]">{review.initial}</span>
                    )}
                  </div>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                  </div>
                  <p className="text-center text-black text-base mb-4">&quot;{review.text}&quot;</p>
                  <a href={review.link} target="_blank" rel="noopener noreferrer" className="text-[#a9445b] font-semibold flex items-center gap-1 hover:underline">Read full review <span>&#8250;</span></a>
                  <div className="mt-4 text-xs text-gray-700 font-semibold w-full text-left">
                    {review.name} - {review.date}
                  </div>
                </div>
              ))}
            </div>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#a9445b] text-2xl bg-white rounded-full shadow p-2 z-10"><FaChevronRight /></button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
