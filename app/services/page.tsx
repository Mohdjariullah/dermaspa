"use client";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Image from "next/image";
import { useState } from "react";

const serviceCategories = [
  "All Services",
  "Esthetic Facials", 
  "Face & Body Packages",
  "Body Massages",
  "Body Booster",
  "Waxing"
];

const allServices = [
  // Esthetic Facials
  {
    id: 1,
    title: "Basic Facial (For Men & Women)",
    duration: "30 mins",
    price: "$65",
    image: "/Basic-facial-men-women.jpg",
    category: "Esthetic Facials"
  },
  {
    id: 2,
    title: "Deep Cleansing Facial (for Men & Women)",
    duration: "1 hr",
    price: "$79",
    image: "/Deep Cleansing Facial (for Men & Women).jpg",
    category: "Esthetic Facials"
  },
  {
    id: 3,
    title: "Placenta | Collagen Facial",
    duration: "1 hr",
    price: "$90",
    image: "/Placenta-Collagen Facial.jpg",
    category: "Esthetic Facials"
  },
  {
    id: 4,
    title: "Whitening Kojic Facial",
    duration: "1 hr",
    price: "$90",
    image: "/services/whitening-kojic.jpg",
    category: "Esthetic Facials"
  },
  {
    id: 5,
    title: "Anti-Acne Facial (for Men & Women)",
    duration: "1 hr",
    price: "$90",
    image: "/services/anti-acne-facial.jpg",
    category: "Esthetic Facials"
  },
  {
    id: 6,
    title: "Microderm Facial",
    duration: "1 hr",
    price: "$99",
    image: "https://img1.wsimg.com/isteam/stock/10776",
    category: "Esthetic Facials"
  },
  {
    id: 7,
    title: "Vitamin C Facial with Extreme Softness",
    duration: "1 hr",
    price: "$120",
    image: "https://img1.wsimg.com/isteam/ip/799dec32-c44d-4302-a569-db93073f4b94/facial%20citrus.jpeg",
    category: "Esthetic Facials"
  },
  {
    id: 8,
    title: "Acne Vulgaris Facial",
    duration: "1 hr",
    price: "$120",
    image: "https://img1.wsimg.com/isteam/stock/y6rb02w",
    category: "Esthetic Facials"
  },
  {
    id: 9,
    title: "Dermal VIP Card $50 / Year",
    duration: "30 mins",
    price: "$50",
    image: "https://img1.wsimg.com/isteam/ip/799dec32-c44d-4302-a569-db93073f4b94/VIP%20Card_20240411_183834_0000.png",
    category: "Esthetic Facials"
  },
  // Face & Body Packages
  {
    id: 10,
    title: "Balinese Body Massage + Basic Facial",
    duration: "1 hr 30 mins",
    price: "$130",
    image: "https://img1.wsimg.com/isteam/stock/3pNwnyj",
    category: "Face & Body Packages"
  },
  {
    id: 11,
    title: "Deep Tissue Body Massage + 3Face",
    duration: "2 hrs",
    price: "$180",
    image: "https://img1.wsimg.com/isteam/stock/2717",
    category: "Face & Body Packages"
  },
  {
    id: 12,
    title: "Hot Stone Body Massage + Microderm Facial",
    duration: "2 hrs 30 mins",
    price: "$200",
    image: "https://img1.wsimg.com/isteam/stock/jpJd47P",
    category: "Face & Body Packages"
  },
  // Body Massages
  {
    id: 14,
    title: "Balinese Body Massage",
    duration: "1 hr",
    price: "$80",
    image: "/services/Balinese Body Massage Basic Facial.jpg",
    category: "Body Massages"
  },
  {
    id: 15,
    title: "Maternity Massage",
    duration: "1 hr",
    price: "$85",
    image: "/services/maternity massage.jpg",
    category: "Body Massages"
  },
  {
    id: 16,
    title: "Stretching Body Massage",
    duration: "1 hr",
    price: "$85",
    image: "/services/Stretching Body Massage.jpg",
    category: "Body Massages"
  },
  {
    id: 17,
    title: "Deep Tissue Body Massage",
    duration: "1 hr",
    price: "$90",
    image: "/services/Deep Tissue Body Massage.jpg",
    category: "Body Massages"
  },
  {
    id: 18,
    title: "Hot Stone Massage",
    duration: "1 hr",
    price: "$90",
    image: "/services/hot-stone-massage.jpg",
    category: "Body Massages"
  },
  {
    id: 19,
    title: "Hot Stone Massage 90 Minutes",
    duration: "1 hr 30 mins",
    price: "$120",
    image: "https://img1.wsimg.com/isteam/stock/1754",
    category: "Body Massages"
  },
  // Body Booster
  {
    id: 20,
    title: "Underarm Cleaning",
    duration: "30 mins",
    price: "$99",
    image: "https://img1.wsimg.com/isteam/stock/R4ggkwa",
    category: "Body Booster"
  },
  {
    id: 21,
    title: "Back Treatment",
    duration: "30 mins",
    price: "$99",
    image: "/cr=w_1240,h_620.jpeg",
    category: "Body Booster"
  },
  {
    id: 22,
    title: "Chemical Peel (Body) Per Area",
    duration: "30 mins",
    price: "$85",
    image: "https://img1.wsimg.com/isteam/stock/gAqxgK1",
    category: "Body Booster"
  },
  {
    id: 23,
    title: "Underarm or Inguinal Whitening",
    duration: "30 mins",
    price: "$150",
    image: "https://img1.wsimg.com/isteam/stock/V866b57",
    category: "Body Booster"
  },
  {
    id: 25,
    title: "Basic Vajacial Cleaning + Brazilian Wax",
    duration: "30 mins",
    price: "$90",
    image: "https://img1.wsimg.com/isteam/stock/gAqxgK1",
    category: "Body Booster"
  },
  {
    id: 26,
    title: "Microdermabrasion (Body) Per Area",
    duration: "30 mins",
    price: "$85",
    image: "https://img1.wsimg.com/isteam/stock/RyAeNQo",
    category: "Body Booster"
  },
  {
    id: 27,
    title: "Deep Moisturizing Body Treatment",
    duration: "30 mins",
    price: "$65",
    image: "https://img1.wsimg.com/isteam/stock/7862",
    category: "Body Booster"
  },
  {
    id: 28,
    title: "Dead Sea Salt Body Scrub + Deep Moisturizing",
    duration: "30 mins",
    price: "$65",
    image: "https://img1.wsimg.com/isteam/ip/799dec32-c44d-4302-a569-db93073f4b94/massage.jpeg",
    category: "Body Booster"
  },
  {
    id: 29,
    title: "Mud Mask Body Wrap + Deep Moisturizing Body Treatment",
    duration: "30 mins",
    price: "$65",
    image: "https://img1.wsimg.com/isteam/stock/gYN7y1G",
    category: "Body Booster"
  },
  // Waxing Services
  {
    id: 30,
    title: "Eyebrow Waxing",
    duration: "15 mins",
    price: "$20",
    image: "https://img1.wsimg.com/isteam/ip/799dec32-c44d-4302-a569-db93073f4b94/eyebrows.jpeg",
    category: "Waxing"
  },
  {
    id: 31,
    title: "Lip Waxing",
    duration: "5 mins",
    price: "$10",
    image: "https://img1.wsimg.com/isteam/ip/799dec32-c44d-4302-a569-db93073f4b94/lip%20waxing.jpeg",
    category: "Waxing"
  },
  {
    id: 32,
    title: "Half Arm Waxing",
    duration: "15 mins",
    price: "$40",
    image: "https://img1.wsimg.com/isteam/stock/nybdkoA",
    category: "Waxing"
  },
  {
    id: 33,
    title: "Full Arm Waxing",
    duration: "30 mins",
    price: "$60",
    image: "https://img1.wsimg.com/isteam/stock/R4ggkwa",
    category: "Waxing"
  },
  {
    id: 34,
    title: "Chin Waxing",
    duration: "5 mins",
    price: "$12",
    image: "/cr=w_1232hsa621.jpeg",
    category: "Waxing"
  },
  {
    id: 35,
    title: "Neck Waxing",
    duration: "15 mins",
    price: "$30",
    image: "/cr=w_1240,h_620.jpeg",
    category: "Waxing"
  },
  {
    id: 36,
    title: "Lower Leg Waxing",
    duration: "30 mins",
    price: "$40",
    image: "/rs=w_1023,cg_true.jpeg",
    category: "Waxing"
  },
  {
    id: 37,
    title: "Full Leg Waxing",
    duration: "1 hr",
    price: "$80",
    image: "/rs=w_1023,cg_true (1).jpeg",
    category: "Waxing"
  },
  {
    id: 38,
    title: "Full Face Waxing",
    duration: "30 mins",
    price: "$60",
    image: "/rs=w_1023,cg_true (2).jpeg",
    category: "Waxing"
  },
  {
    id: 39,
    title: "Bikini Waxing",
    duration: "30 mins",
    price: "$35",
    image: "/rs=w_1023,cg_true (3).jpeg",
    category: "Waxing"
  },
  {
    id: 40,
    title: "Underarm Waxing",
    duration: "15 mins",
    price: "$20",
    image: "/rs=w_1023,cg_true (4).jpeg",
    category: "Waxing"
  },
  {
    id: 41,
    title: "Brazilian Wax ( Women )",
    duration: "45 mins",
    price: "$60",
    image: "/cr=w_1232hsa621.jpeg",
    category: "Waxing"
  },
  {
    id: 42,
    title: "Brazilian Waxing ( Men)",
    duration: "45 mins",
    price: "$75",
    image: "/cr=w_1240,h_620.jpeg",
    category: "Waxing"
  },
  {
    id: 43,
    title: "Chest Wax",
    duration: "30 mins",
    price: "$40",
    image: "/rs=w_1023,cg_true.jpeg",
    category: "Waxing"
  },
  {
    id: 44,
    title: "Stomach Wax",
    duration: "30 mins",
    price: "$40",
    image: "/rs=w_1023,cg_true (1).jpeg",
    category: "Waxing"
  },
  {
    id: 45,
    title: "Shoulders",
    duration: "30 mins",
    price: "$30",
    image: "/rs=w_1023,cg_true (2).jpeg",
    category: "Waxing"
  },
  {
    id: 46,
    title: "Feet",
    duration: "5 mins",
    price: "$30",
    image: "/rs=w_1023,cg_true (3).jpeg",
    category: "Waxing"
  },
  // Special service for more options
  {
    id: 47,
    title: "GO TO SERVICE LIST PAGE FOR MORE OPTIONS",
    duration: "5 mins",
    price: "$0.01",
    image: "/rs=w_1023,cg_true (4).jpeg",
    category: "All Services"
  }
];

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Services");

  // Show first 6 services initially, then all when "See All" is clicked
  const displayedServices = showAll ? allServices : allServices.slice(0, 6);

  // Filter services by category
  const filteredServices = selectedCategory === "All Services" 
    ? displayedServices 
    : displayedServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Online Appointments Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6" style={{ fontFamily: 'Fjalla One, arial, sans-serif', fontWeight: 400, color: 'rgb(27,27,27)', fontSize: '36px', lineHeight: '50px' }}>ONLINE APPOINTMENTS</h1>
          {/* Service Categories */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-10 sm:mb-12">
            {serviceCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xs sm:text-sm md:text-base font-medium transition-all duration-300 rounded ${
                  selectedCategory === category
                    ? "bg-[#a9445b] text-white shadow-lg" 
                    : "text-gray-600 hover:text-[#a9445b] hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid - Clean, Centered, Compact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden w-[300px] mx-auto">
              {/* Service Image - Fixed Height */}
              <div className="relative w-full h-[220px] bg-gray-200">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Service Details - Minimal Padding, Small Font */}
              <div className="p-3">
                <h3 className="text-sm font-semibold text-black mb-1 leading-tight" style={{ fontFamily: 'Source Sans Pro, arial, sans-serif', fontWeight: 400 }}>
                  {service.title}
                </h3>
                <div className="text-xs text-gray-600 mb-2" style={{ fontFamily: 'Source Sans Pro, arial, sans-serif', fontWeight: 400 }}>
                  {service.duration} | {service.price}
                </div>
                {/* Book Now Button - Small, Clean */}
                <button 
                  onClick={() => window.open('https://api.leadconnectorhq.com/widget/form/tOfh6LGNpYUC0lJfJdSw?notrack=true', '_blank')}
                  className="w-full bg-[#fbb6c1] text-black font-bold py-2 px-2 rounded hover:bg-[#a9445b] hover:text-white transition-all duration-300 text-xs"
                >
                  BOOK NOW!
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        {!showAll && (
          <div className="text-center">
            <button 
              onClick={() => setShowAll(true)}
              className="text-[#a9445b] font-semibold hover:underline text-sm sm:text-base transition-all duration-300 hover:scale-105"
            >
              + See All
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}