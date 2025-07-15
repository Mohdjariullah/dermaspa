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
  // Initial 6 services (shown first)
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
    title: "Deep Cleansing Facial (For Men & Women)",
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
    title: "Anti-Aging Facial",
    duration: "1 hr",
    price: "$90",
    image: "/rs=w_1023,cg_true (4).jpeg",
    category: "Esthetic Facials"
  },
  {
    id: 6,
    title: "Acne Facial",
    duration: "1 hr",
    price: "$90",
    image: "/cr=w_1232hsa621.jpeg",
    category: "Esthetic Facials"
  },
  // Additional services (shown after "See All")
  {
    id: 7,
    title: "Dermal Skin Clinic and Spa Guam",
    duration: "1 hr",
    price: "$90",
    image: "/cr=w_1240,h_620.jpeg",
    category: "Esthetic Facials"
  },
  {
    id: 8,
    title: "Swedish Massage",
    duration: "1 hr",
    price: "$79",
    image: "/rs=w_1023,cg_true.jpeg",
    category: "Body Massages"
  },
  {
    id: 9,
    title: "Shiatsu Massage",
    duration: "1 hr",
    price: "$79",
    image: "/rs=w_1023,cg_true (1).jpeg",
    category: "Body Massages"
  },
  {
    id: 10,
    title: "Deep Tissue Massage",
    duration: "1 hr",
    price: "$79",
    image: "/rs=w_1023,cg_true (2).jpeg",
    category: "Body Massages"
  },
  {
    id: 11,
    title: "Hot Stone Massage",
    duration: "1 hr",
    price: "$79",
    image: "/rs=w_1023,cg_true (3).jpeg",
    category: "Body Massages"
  },
  {
    id: 12,
    title: "Sweet Coconut Scrub + Deep Moisturizing",
    duration: "1 hr",
    price: "$79",
    image: "/rs=w_1023,cg_true (4).jpeg",
    category: "Body Booster"
  },
  {
    id: 13,
    title: "Body Scrub + Body Wrap",
    duration: "1 hr",
    price: "$79",
    image: "/cr=w_1232hsa621.jpeg",
    category: "Body Booster"
  },
  {
    id: 14,
    title: "Body Massage + Body Scrub",
    duration: "1 hr",
    price: "$79",
    image: "/cr=w_1240,h_620.jpeg",
    category: "Body Booster"
  },
  {
    id: 15,
    title: "Body Massage + Body Wrap",
    duration: "1 hr",
    price: "$79",
    image: "/rs=w_1023,cg_true.jpeg",
    category: "Body Booster"
  },
  // Waxing Services
  {
    id: 16,
    title: "Underarm Waxing",
    duration: "15 mins",
    price: "$25",
    image: "/rs=w_1023,cg_true (1).jpeg",
    category: "Waxing"
  },
  {
    id: 17,
    title: "Half Arm Waxing",
    duration: "30 mins",
    price: "$35",
    image: "/rs=w_1023,cg_true (2).jpeg",
    category: "Waxing"
  },
  {
    id: 18,
    title: "Full Arm Waxing",
    duration: "45 mins",
    price: "$45",
    image: "/rs=w_1023,cg_true (3).jpeg",
    category: "Waxing"
  },
  {
    id: 19,
    title: "Half Leg Waxing",
    duration: "30 mins",
    price: "$45",
    image: "/rs=w_1023,cg_true (4).jpeg",
    category: "Waxing"
  },
  {
    id: 20,
    title: "Full Leg Waxing",
    duration: "45 mins",
    price: "$65",
    image: "/cr=w_1232hsa621.jpeg",
    category: "Waxing"
  },
  {
    id: 21,
    title: "Bikini Waxing",
    duration: "30 mins",
    price: "$45",
    image: "/cr=w_1240,h_620.jpeg",
    category: "Waxing"
  },
  {
    id: 22,
    title: "Brazilian Waxing",
    duration: "45 mins",
    price: "$65",
    image: "/rs=w_1023,cg_true.jpeg",
    category: "Waxing"
  },
  {
    id: 23,
    title: "Eyebrow Waxing",
    duration: "15 mins",
    price: "$15",
    image: "/rs=w_1023,cg_true (1).jpeg",
    category: "Waxing"
  },
  {
    id: 24,
    title: "Upper Lip Waxing",
    duration: "10 mins",
    price: "$10",
    image: "/rs=w_1023,cg_true (2).jpeg",
    category: "Waxing"
  },
  {
    id: 25,
    title: "Chin Waxing",
    duration: "10 mins",
    price: "$10",
    image: "/rs=w_1023,cg_true (3).jpeg",
    category: "Waxing"
  },
  {
    id: 26,
    title: "Full Face Waxing",
    duration: "30 mins",
    price: "$45",
    image: "/rs=w_1023,cg_true (4).jpeg",
    category: "Waxing"
  },
  {
    id: 27,
    title: "Back Waxing",
    duration: "45 mins",
    price: "$65",
    image: "/cr=w_1232hsa621.jpeg",
    category: "Waxing"
  },
  {
    id: 28,
    title: "Chest Waxing",
    duration: "45 mins",
    price: "$65",
    image: "/cr=w_1240,h_620.jpeg",
    category: "Waxing"
  },
  {
    id: 29,
    title: "Stomach Waxing",
    duration: "30 mins",
    price: "$45",
    image: "/rs=w_1023,cg_true.jpeg",
    category: "Waxing"
  },
  // Additional clinic cards
  {
    id: 30,
    title: "Dermal Skin Clinic and Spa Guam",
    duration: "1 hr",
    price: "$90",
    image: "/rs=w_1023,cg_true (1).jpeg",
    category: "All Services"
  },
  {
    id: 31,
    title: "Dermal Skin Clinic and Spa Guam",
    duration: "1 hr",
    price: "$90",
    image: "/rs=w_1023,cg_true (2).jpeg",
    category: "All Services"
  },
  {
    id: 32,
    title: "Dermal Skin Clinic and Spa Guam",
    duration: "1 hr",
    price: "$90",
    image: "/rs=w_1023,cg_true (3).jpeg",
    category: "All Services"
  },
  {
    id: 33,
    title: "Dermal Skin Clinic and Spa Guam",
    duration: "1 hr",
    price: "$90",
    image: "/rs=w_1023,cg_true (4).jpeg",
    category: "All Services"
  },
  {
    id: 34,
    title: "Dermal Skin Clinic and Spa Guam",
    duration: "1 hr",
    price: "$90",
    image: "/cr=w_1232hsa621.jpeg",
    category: "All Services"
  },
  {
    id: 35,
    title: "Dermal Skin Clinic and Spa Guam",
    duration: "1 hr",
    price: "$90",
    image: "/cr=w_1240,h_620.jpeg",
    category: "All Services"
  },
  {
    id: 36,
    title: "Dermal Skin Clinic and Spa Guam",
    duration: "1 hr",
    price: "$90",
    image: "/rs=w_1023,cg_true.jpeg",
    category: "All Services"
  },
  {
    id: 37,
    title: "Dermal Skin Clinic and Spa Guam",
    duration: "1 hr",
    price: "$90",
    image: "/rs=w_1023,cg_true (1).jpeg",
    category: "All Services"
  },
  {
    id: 38,
    title: "Dermal Skin Clinic and Spa Guam",
    duration: "1 hr",
    price: "$90",
    image: "/rs=w_1023,cg_true (2).jpeg",
    category: "All Services"
  },
  {
    id: 39,
    title: "Dermal Skin Clinic and Spa Guam",
    duration: "1 hr",
    price: "$90",
    image: "/rs=w_1023,cg_true (3).jpeg",
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
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Online Appointments Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">ONLINE APPOINTMENTS</h1>
          
          {/* Service Categories */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
            {serviceCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm md:text-base font-medium transition-colors rounded ${
                  selectedCategory === category
                    ? "bg-[#a9445b] text-white" 
                    : "text-gray-600 hover:text-[#a9445b] hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Service Image */}
              <div className="relative h-48 md:h-56">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Service Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black mb-2">{service.title}</h3>
                <div className="text-sm text-gray-600 mb-3">{service.duration} | {service.price}</div>
                
                {/* Book Now Button */}
                <button className="w-full bg-[#fbb6c1] text-white font-bold py-2 px-4 rounded hover:bg-[#a9445b] transition-colors">
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
              className="text-[#a9445b] font-semibold hover:underline"
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