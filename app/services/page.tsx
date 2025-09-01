"use client";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Image from "next/image";
import { useState } from "react";
import { allServices, serviceCategories, type Service } from "@/data/services";
import Head from "next/head";


export function ServicesSEO() {
  return (
    <Head>
      <title>Online Appointments | Dermal Skin Clinic Spa Services</title>
      <meta name="description" content="Book your next facial, massage, waxing, or spa treatment at Dermal Skin Clinic Spa. Explore our full menu of services and schedule your appointment online." />
      <meta name="keywords" content="facial, massage, waxing, spa, esthetic, body, booking, online appointment, dermal skin clinic spa, beauty services" />
      <meta property="og:title" content="Book Online | Dermal Skin Clinic Spa" />
      <meta property="og:description" content="Discover and book top spa services including facials, massages, waxing, and more at Dermal Skin Clinic Spa." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://dermalskinclinicspa.com/services" />
      <meta property="og:image" content="https://dermalskinclinicspa.com/og-image.jpg" />
      <link rel="canonical" href="https://dermalskinclinicspa.com/services" />
    </Head>
  );
}

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Services");

  // Show first 6 services initially, then all when "See All" is clicked
  const displayedServices = showAll ? allServices : allServices.slice(0, 12);

  // Filter services by category
  const filteredServices = selectedCategory === "All Services" 
    ? displayedServices 
    : displayedServices.filter(service => service.category === selectedCategory);

  // Function to handle booking with service slug
  const handleBooking = (service: Service) => {
    const bookingUrl = `https://dermal-spa-booking.vercel.app/?utm_source=dermalskinclinicspa.com&utm_medium=referral&utm_campaign=dermalskinclinicspa.com&service=${service.slug}`;
    window.open(bookingUrl, '_blank');
  };

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
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
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
                  onClick={() => handleBooking(service)}
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
