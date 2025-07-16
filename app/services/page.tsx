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
    image: "/rs=w_1023,cg_true.jpeg",
    category: "Esthetic Facials"
  },
  {
    id: 2,
    title: "Deep Cleansing Facial (for Men & Women)",
    duration: "1 hr",
    price: "$79",
    image: "/rs=w_1023,cg_true (1).jpeg",
    category: "Esthetic Facials"
  },
  {
    id: 3,
    title: "Placenta | Collagen Facial",
    duration: "1 hr",
    price: "$90",
    image: "/rs=w_1023,cg_true (2).jpeg",
    category: "Esthetic Facials"
  },
  {
    id: 4,
    title: "Whitening Kojic Facial",
    duration: "1 hr",
    price: "$90",
    image: "/rs=w_1023,cg_true (3).jpeg",
    category: "Esthetic Facials"
  },
  {
    id: 5,
    title: "Anti-Acne Facial (for Men & Women)",
    duration: "1 hr",
    price: "$90",
    image: "/rs=w_1023,cg_true (4).jpeg",
    category: "Esthetic Facials"
  },
  {
    id: 6,
    title: "Microderm Facial",
    duration: "1 hr",
    price: "$99",
    image: "/cr=w_1240,h_620.jpeg",
    category: "Esthetic Facials"
  },
  {
    id: 7,
    title: "Vitamin C Facial with Extreme Softness",
    duration: "1 hr",
    price: "$120",
    image: "/cr=w_1232hsa621.jpeg",
    category: "Esthetic Facials"
  },
  {
    id: 8,
    title: "Acne Vulgaris Facial",
    duration: "1 hr",
    price: "$120",
    image: "/rs=w_1023,cg_true.jpeg",
    category: "Esthetic Facials"
  },
  {
    id: 9,
    title: "Dermal VIP Card $50 / Year",
    duration: "30 mins",
    price: "$50",
    image: "/rs=w_1023,cg_true (1).jpeg",
    category: "Esthetic Facials"
  },
  // Face & Body Packages
  {
    id: 10,
    title: "Balinese Body Massage + Basic Facial",
    duration: "1 hr 30 mins",
    price: "$130",
    image: "/rs=w_1023,cg_true (2).jpeg",
    category: "Face & Body Packages"
  },
  {
    id: 11,
    title: "Deep Tissue Body Massage + 3Face",
    duration: "2 hrs",
    price: "$180",
    image: "/rs=w_1023,cg_true (3).jpeg",
    category: "Face & Body Packages"
  },
  {
    id: 12,
    title: "Hot Stone Body Massage + Microderm Facial",
    duration: "2 hrs 30 mins",
    price: "$200",
    image: "/rs=w_1023,cg_true (4).jpeg",
    category: "Face & Body Packages"
  },
  {
    id: 13,
    title: "Dermal VIP Card $50 / Year",
    duration: "30 mins",
    price: "$50",
    image: "/cr=w_1232hsa621.jpeg",
    category: "Face & Body Packages"
  },
  // Body Massages
  {
    id: 14,
    title: "Balinese Body Massage",
    duration: "1 hr",
    price: "$80",
    image: "/cr=w_1240,h_620.jpeg",
    category: "Body Massages"
  },
  {
    id: 15,
    title: "Maternity Massage",
    duration: "1 hr",
    price: "$85",
    image: "/rs=w_1023,cg_true.jpeg",
    category: "Body Massages"
  },
  {
    id: 16,
    title: "Stretching Body Massage",
    duration: "1 hr",
    price: "$85",
    image: "/rs=w_1023,cg_true (1).jpeg",
    category: "Body Massages"
  },
  {
    id: 17,
    title: "Deep Tissue Body Massage",
    duration: "1 hr",
    price: "$90",
    image: "/rs=w_1023,cg_true (2).jpeg",
    category: "Body Massages"
  },
  {
    id: 18,
    title: "Hot Stone Massage",
    duration: "1 hr",
    price: "$90",
    image: "/rs=w_1023,cg_true (3).jpeg",
    category: "Body Massages"
  },
  {
    id: 19,
    title: "Hot Stone Massage 90 Minutes",
    duration: "1 hr 30 mins",
    price: "$120",
    image: "/rs=w_1023,cg_true (4).jpeg",
    category: "Body Massages"
  },
  // Body Booster
  {
    id: 20,
    title: "Underarm Cleaning",
    duration: "30 mins",
    price: "$99",
    image: "/cr=w_1232hsa621.jpeg",
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
    image: "/rs=w_1023,cg_true.jpeg",
    category: "Body Booster"
  },
  {
    id: 23,
    title: "Underarm or Inguinal Whitening",
    duration: "30 mins",
    price: "$150",
    image: "/rs=w_1023,cg_true (1).jpeg",
    category: "Body Booster"
  },
  {
    id: 24,
    title: "Vajacial + Brazilian Wax",
    duration: "1 hr",
    price: "$130",
    image: "/rs=w_1023,cg_true (2).jpeg",
    category: "Body Booster"
  },
  {
    id: 25,
    title: "Basic Vajacial Cleaning + Brazilian Wax",
    duration: "30 mins",
    price: "$90",
    image: "/rs=w_1023,cg_true (3).jpeg",
    category: "Body Booster"
  },
  {
    id: 26,
    title: "Microdermabrasion (Body) Per Area",
    duration: "30 mins",
    price: "$85",
    image: "/rs=w_1023,cg_true (4).jpeg",
    category: "Body Booster"
  },
  {
    id: 27,
    title: "Deep Moisturizing Body Treatment",
    duration: "30 mins",
    price: "$65",
    image: "/cr=w_1232hsa621.jpeg",
    category: "Body Booster"
  },
  {
    id: 28,
    title: "Dead Sea Salt Body Scrub + Deep Moisturizing",
    duration: "30 mins",
    price: "$65",
    image: "/cr=w_1240,h_620.jpeg",
    category: "Body Booster"
  },
  {
    id: 29,
    title: "Mud Mask Body Wrap + Deep Moisturizing Body Treatment",
    duration: "30 mins",
    price: "$65",
    image: "/rs=w_1023,cg_true.jpeg",
    category: "Body Booster"
  },
  // Waxing Services
  {
    id: 30,
    title: "Eyebrow Waxing",
    duration: "15 mins",
    price: "$20",
    image: "/rs=w_1023,cg_true (1).jpeg",
    category: "Waxing"
  },
  {
    id: 31,
    title: "Lip Waxing",
    duration: "5 mins",
    price: "$10",
    image: "/rs=w_1023,cg_true (2).jpeg",
    category: "Waxing"
  },
  {
    id: 32,
    title: "Half Arm Waxing",
    duration: "15 mins",
    price: "$40",
    image: "/rs=w_1023,cg_true (3).jpeg",
    category: "Waxing"
  },
  {
    id: 33,
    title: "Full Arm Waxing",
    duration: "30 mins",
    price: "$60",
    image: "/rs=w_1023,cg_true (4).jpeg",
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Online Appointments Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6">ONLINE APPOINTMENTS</h1>
          
          {/* Service Categories */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-6 sm:mb-8">
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

        {/* Services Grid - Mobile First Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              {/* Service Image - Much Larger on Mobile */}
              <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 bg-gray-200">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<div class="w-full h-full bg-gray-300 flex items-center justify-center"><span class="text-gray-500 text-xs sm:text-sm">Image not available</span></div>';
                  }}
                />
              </div>
              
              {/* Service Details - Larger Text on Mobile */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-3 sm:mb-4 leading-tight">{service.title}</h3>
                <div className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">{service.duration} | {service.price}</div>
                
                {/* Book Now Button - Larger on Mobile */}
                <button 
                  onClick={() => window.open('https://api.leadconnectorhq.com/widget/form/tOfh6LGNpYUC0lJfJdSw?notrack=true', '_blank')}
                  className="w-full bg-[#fbb6c1] text-black font-bold py-3 sm:py-4 px-4 sm:px-6 rounded hover:bg-[#a9445b] hover:text-white transition-all duration-300 text-sm sm:text-base md:text-lg transform hover:scale-105"
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