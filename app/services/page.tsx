"use client";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Image from "next/image";
import { useState } from "react";

/**
 * SEO-Friendly Service Booking System
 * 
 * Each service now has a unique slug that creates clean, marketing-friendly URLs:
 * Examples:
 * - dermalspa.com?service=basic-facial-men-women
 * - dermalspa.com?service=deep-tissue-body-massage
 * - dermalspa.com?service=brazilian-wax-women
 * 
 * When users click "BOOK NOW!", they're redirected to:
 * https://spa.dermalskinclinicspa.com/contact-details-page?service={slug}&title={title}&price={price}&duration={duration}
 * 
 * This allows the booking system to pre-populate the service details.
 */

// Type definition for service objects
type Service = {
  id: number;
  title: string;
  slug: string;
  duration: string;
  price: string;
  image: string;
  category: string;
};

const serviceCategories = [
  "All Services",
  "Esthetic Facials", 
  "Face & Body Packages",
  "Body Massages",
  "Body Booster",
  "Waxing",
  "Spa Delights"
];

const allServices: Service[] = [
  // Esthetic Facials
  {
    id: 1,
    title: "Basic Facial (For Men & Women)",
    slug: "basic-facial-men-women",
    duration: "30 mins",
    price: "$65",
    image: "/Basic-facial-men-women.jpg",
    category: "Esthetic Facials"
  },
  {
    id: 2,
    title: "Deep Cleansing Facial (for Men & Women)",
    slug: "deep-cleansing-facial",
    duration: "1 hr",
    price: "$79",
    image: "/Deep Cleansing Facial (for Men & Women).jpg",
    category: "Esthetic Facials"
  },
  {
    id: 3,
    title: "Placenta | Collagen Facial",
    slug: "placenta-collagen-facial",
    duration: "1 hr",
    price: "$90",
    image: "/Placenta-Collagen Facial.jpg",
    category: "Esthetic Facials"
  },
  {
    id: 4,
    title: "Whitening Kojic Facial",
    slug: "whitening-kojic-facial",
    duration: "1 hr",
    price: "$90",
    image: "/services/whitening-kojic.jpg",
    category: "Esthetic Facials"
  },
  {
    id: 5,
    title: "Anti-Acne Facial (for Men & Women)",
    slug: "anti-acne-facial",
    duration: "1 hr",
    price: "$90",
    image: "/services/anti-acne-facial.jpg",
    category: "Esthetic Facials"
  },
  {
    id: 6,
    title: "Microderm Facial",
    slug: "microderm-facial",
    duration: "1 hr",
    price: "$99",
    image: "https://img1.wsimg.com/isteam/stock/10776",
    category: "Esthetic Facials"
  },
  {
    id: 7,
    title: "Vitamin C Facial with Extreme Softness",
    slug: "vitamin-c-facial-extreme-softness",
    duration: "1 hr",
    price: "$120",
    image: "https://img1.wsimg.com/isteam/ip/799dec32-c44d-4302-a569-db93073f4b94/facial%20citrus.jpeg",
    category: "Esthetic Facials"
  },
  {
    id: 8,
    title: "Acne Vulgaris Facial",
    slug: "acne-vulgaris-facial",
    duration: "1 hr",
    price: "$120",
    image: "https://img1.wsimg.com/isteam/stock/y6rb02w",
    category: "Esthetic Facials"
  },
  {
    id: 9,
    title: "Dermal VIP Card $50 / Year",
    slug: "dermal-vip-card",
    duration: "30 mins",
    price: "$50",
    image: "https://img1.wsimg.com/isteam/ip/799dec32-c44d-4302-a569-db93073f4b94/VIP%20Card_20240411_183834_0000.png",
    category: "Esthetic Facials"
  },
  // Face & Body Packages
  {
    id: 10,
    title: "Balinese Body Massage + Basic Facial",
    slug: "balinese-massage-basic-facial",
    duration: "1 hr 30 mins",
    price: "$130",
    image: "https://img1.wsimg.com/isteam/stock/3pNwnyj",
    category: "Face & Body Packages"
  },
  {
    id: 11,
    title: "Deep Tissue Body Massage + 3Face",
    slug: "deep-tissue-massage-3face",
    duration: "2 hrs",
    price: "$180",
    image: "https://img1.wsimg.com/isteam/stock/2717",
    category: "Face & Body Packages"
  },
  {
    id: 12,
    title: "Hot Stone Body Massage + Microderm Facial",
    slug: "hot-stone-massage-microderm-facial",
    duration: "2 hrs 30 mins",
    price: "$200",
    image: "https://img1.wsimg.com/isteam/stock/jpJd47P",
    category: "Face & Body Packages"
  },
  // 3 Face Packages
  {
    id: 13,
    title: "3 Face Basic Facial + Microdermabrason + Extreme Softness",
    slug: "3-face-basic-facial-microdermabrason-extreme-softness",
    duration: "60-90 mins",
    price: "$120",
    image: "/Basic-facial-men-women.jpg",
    category: "Face & Body Packages"
  },
  {
    id: 14,
    title: "3 Face + Deep Cleansing Facial",
    slug: "3-face-deep-cleansing-facial",
    duration: "60-90 mins",
    price: "$140",
    image: "/Deep Cleansing Facial (for Men & Women).jpg",
    category: "Face & Body Packages"
  },
  {
    id: 15,
    title: "3 Face + Placenta Collagen Facial or Whitening Facial or Anti-Acne Facial",
    slug: "3-face-placenta-collagen-whitening-anti-acne-facial",
    duration: "60-90 mins",
    price: "$150",
    image: "/Placenta-Collagen Facial.jpg",
    category: "Face & Body Packages"
  },
  {
    id: 16,
    title: "3 Face + Face Treatment #1",
    slug: "3-face-treatment-1",
    duration: "60-90 mins",
    price: "$160",
    image: "/Basic-facial-men-women.jpg",
    category: "Face & Body Packages"
  },
  {
    id: 17,
    title: "3 Face + Face Treatment #2",
    slug: "3-face-treatment-2",
    duration: "60-90 mins",
    price: "$175",
    image: "/Basic-facial-men-women.jpg",
    category: "Face & Body Packages"
  },
  {
    id: 18,
    title: "3 Face + Vitamin C Facial or Acne Vulgaris Facial",
    slug: "3-face-vitamin-c-acne-vulgaris-facial",
    duration: "60-90 mins",
    price: "$180",
    image: "/services/whitening-kojic.jpg",
    category: "Face & Body Packages"
  },
  {
    id: 19,
    title: "3 Face + Peel",
    slug: "3-face-peel",
    duration: "60-90 mins",
    price: "$185",
    image: "/Basic-facial-men-women.jpg",
    category: "Face & Body Packages"
  },
  {
    id: 20,
    title: "3 Face + Deep Tissue",
    slug: "3-face-deep-tissue",
    duration: "60-90 mins",
    price: "$200",
    image: "/services/Deep Tissue Body Massage.jpg",
    category: "Face & Body Packages"
  },
  // Body Massages
  {
    id: 21,
    title: "Balinese Body Massage",
    slug: "balinese-body-massage",
    duration: "1 hr",
    price: "$80",
    image: "/services/Balinese Body Massage Basic Facial.jpg",
    category: "Body Massages"
  },
  {
    id: 22,
    title: "Maternity Massage",
    slug: "maternity-massage",
    duration: "1 hr",
    price: "$85",
    image: "/services/maternity massage.jpg",
    category: "Body Massages"
  },
  {
    id: 23,
    title: "Stretching Body Massage",
    slug: "stretching-body-massage",
    duration: "1 hr",
    price: "$85",
    image: "/services/Stretching Body Massage.jpg",
    category: "Body Massages"
  },
  {
    id: 24,
    title: "Deep Tissue Body Massage",
    slug: "deep-tissue-body-massage",
    duration: "1 hr",
    price: "$90",
    image: "/services/Deep Tissue Body Massage.jpg",
    category: "Body Massages"
  },
  {
    id: 25,
    title: "Hot Stone Massage",
    slug: "hot-stone-massage",
    duration: "1 hr",
    price: "$90",
    image: "/services/hot-stone-massage.jpg",
    category: "Body Massages"
  },
  {
    id: 26,
    title: "Hot Stone Massage 90 Minutes",
    slug: "hot-stone-massage-90-minutes",
    duration: "1 hr 30 mins",
    price: "$120",
    image: "https://img1.wsimg.com/isteam/stock/1754",
    category: "Body Massages"
  },
  // Body Booster
  {
    id: 27,
    title: "Underarm Cleaning",
    slug: "underarm-cleaning",
    duration: "30 mins",
    price: "$99",
    image: "https://img1.wsimg.com/isteam/stock/R4ggkwa",
    category: "Body Booster"
  },
  {
    id: 28,
    title: "Back Treatment",
    slug: "back-treatment",
    duration: "30 mins",
    price: "$99",
    image: "/cr=w_1240,h_620.jpeg",
    category: "Body Booster"
  },
  {
    id: 29,
    title: "Chemical Peel (Body) Per Area",
    slug: "chemical-peel-body",
    duration: "30 mins",
    price: "$85",
    image: "https://img1.wsimg.com/isteam/stock/gAqxgK1",
    category: "Body Booster"
  },
  {
    id: 30,
    title: "Underarm or Inguinal Whitening",
    slug: "underarm-inguinal-whitening",
    duration: "30 mins",
    price: "$150",
    image: "https://img1.wsimg.com/isteam/stock/V866b57",
    category: "Body Booster"
  },
  {
    id: 31,
    title: "Basic Vajacial Cleaning + Brazilian Wax",
    slug: "vajacial-cleaning-brazilian-wax",
    duration: "30 mins",
    price: "$90",
    image: "https://img1.wsimg.com/isteam/stock/gAqxgK1",
    category: "Body Booster"
  },
  {
    id: 32,
    title: "Microdermabrasion (Body) Per Area",
    slug: "microdermabrasion-body",
    duration: "30 mins",
    price: "$85",
    image: "https://img1.wsimg.com/isteam/stock/RyAeNQo",
    category: "Body Booster"
  },
  {
    id: 33,
    title: "Deep Moisturizing Body Treatment",
    slug: "deep-moisturizing-body-treatment",
    duration: "30 mins",
    price: "$65",
    image: "https://img1.wsimg.com/isteam/stock/7862",
    category: "Body Booster"
  },
  {
    id: 34,
    title: "Dead Sea Salt Body Scrub + Deep Moisturizing",
    slug: "dead-sea-salt-body-scrub",
    duration: "30 mins",
    price: "$65",
    image: "https://img1.wsimg.com/isteam/ip/799dec32-c44d-4302-a569-db93073f4b94/massage.jpeg",
    category: "Body Booster"
  },
  {
    id: 35,
    title: "Mud Mask Body Wrap + Deep Moisturizing Body Treatment",
    slug: "mud-mask-body-wrap",
    duration: "30 mins",
    price: "$65",
    image: "https://img1.wsimg.com/isteam/stock/gYN7y1G",
    category: "Body Booster"
  },
  {
    id: 36,
    title: "Vajacial + Brazilian Wax",
    slug: "vajacial-brazilian-wax",
    duration: "1 hr",
    price: "$130",
    image: "https://img1.wsimg.com/isteam/stock/gAqxgK1",
    category: "Body Booster"
  },
  // Waxing Services
  {
    id: 37,
    title: "Eyebrow Waxing",
    slug: "eyebrow-waxing",
    duration: "15 mins",
    price: "$20",
    image: "https://img1.wsimg.com/isteam/ip/799dec32-c44d-4302-a569-db93073f4b94/eyebrows.jpeg",
    category: "Waxing"
  },
  {
    id: 38,
    title: "Lip Waxing",
    slug: "lip-waxing",
    duration: "5 mins",
    price: "$10",
    image: "https://img1.wsimg.com/isteam/ip/799dec32-c44d-4302-a569-db93073f4b94/lip%20waxing.jpeg",
    category: "Waxing"
  },
  {
    id: 39,
    title: "Half Arm Waxing",
    slug: "half-arm-waxing",
    duration: "15 mins",
    price: "$40",
    image: "https://img1.wsimg.com/isteam/stock/nybdkoA",
    category: "Waxing"
  },
  {
    id: 40,
    title: "Full Arm Waxing",
    slug: "full-arm-waxing",
    duration: "30 mins",
    price: "$60",
    image: "https://img1.wsimg.com/isteam/stock/R4ggkwa",
    category: "Waxing"
  },
  {
    id: 41,
    title: "Chin Waxing",
    slug: "chin-waxing",
    duration: "5 mins",
    price: "$12",
    image: "/cr=w_1232hsa621.jpeg",
    category: "Waxing"
  },
  {
    id: 42,
    title: "Neck Waxing",
    slug: "neck-waxing",
    duration: "15 mins",
    price: "$30",
    image: "/cr=w_1240,h_620.jpeg",
    category: "Waxing"
  },
  {
    id: 43,
    title: "Lower Leg Waxing",
    slug: "lower-leg-waxing",
    duration: "30 mins",
    price: "$40",
    image: "https://img1.wsimg.com/isteam/stock/42117/:/rs=h:%7B640%7D",
    category: "Waxing"
  },
  {
    id: 44,
    title: "Full Leg Waxing",
    slug: "full-leg-waxing",
    duration: "1 hr",
    price: "$80",
    image: "https://img1.wsimg.com/isteam/stock/8973",
    category: "Waxing"
  },
  {
    id: 45,
    title: "Full Face Waxing",
    slug: "full-face-waxing",
    duration: "30 mins",
    price: "$60",
    image: "https://remedytupelo.com/storage/2022/11/10-Things-To-Know-Before-Getting-Your-Facial-Waxing-1024x683.jpeg",
    category: "Waxing"
  },
  {
    id: 46,
    title: "Bikini Waxing",
    slug: "bikini-waxing",
    duration: "30 mins",
    price: "$35",
    image: "https://img1.wsimg.com/isteam/stock/gAqxgK1",
    category: "Waxing"
  },
  {
    id: 47,
    title: "Underarm Waxing",
    slug: "underarm-waxing",
    duration: "15 mins",
    price: "$20",
    image: "https://img1.wsimg.com/isteam/stock/R4ggkwa",
    category: "Waxing"
  },
  {
    id: 48,
    title: "Brazilian Wax ( Women )",
    slug: "brazilian-wax-women",
    duration: "45 mins",
    price: "$60",
    image: "https://img1.wsimg.com/isteam/stock/gAqxgK1",
    category: "Waxing"
  },
  {
    id: 49,
    title: "Brazilian Waxing ( Men)",
    slug: "brazilian-waxing-men",
    duration: "45 mins",
    price: "$75",
    image: "https://img1.wsimg.com/isteam/stock/6yaEPlz",
    category: "Waxing"
  },
  {
    id: 50,
    title: "Chest Wax",
    slug: "chest-wax",
    duration: "30 mins",
    price: "$40",
    image: "https://thumbs.dreamstime.com/b/woman-waxing-man-s-chest-wax-strip-close-up-103333434.jpg",
    category: "Waxing"
  },
  {
    id: 51,
    title: "Stomach Wax",
    slug: "stomach-wax",
    duration: "30 mins",
    price: "$40",
    image: "https://purebeautyathome.com/wp-content/uploads/2024/04/1708362164328-e1dfa2.webp",
    category: "Waxing"
  },
  {
    id: 52,
    title: "Shoulders",
    slug: "shoulders-waxing",
    duration: "30 mins",
    price: "$30",
    image: "https://img1.wsimg.com/isteam/stock/gAqxgK1",
    category: "Waxing"
  },
  {
    id: 53,
    title: "Feet",
    slug: "feet-waxing",
    duration: "5 mins",
    price: "$30",
    image: "https://img1.wsimg.com/isteam/stock/gAqxgK1",
    category: "Waxing"
  },
  // Additional Waxing Services
  {
    id: 54,
    title: "Sideburns Waxing",
    slug: "sideburns-waxing",
    duration: "15 mins",
    price: "$12",
    image: "https://img1.wsimg.com/isteam/ip/799dec32-c44d-4302-a569-db93073f4b94/eyebrows.jpeg",
    category: "Waxing"
  },
  {
    id: 55,
    title: "Upper Leg Waxing",
    slug: "upper-leg-waxing",
    duration: "30 mins",
    price: "$45",
    image: "https://img1.wsimg.com/isteam/stock/42117/:/rs=h:%7B640%7D",
    category: "Waxing"
  },
  {
    id: 56,
    title: "Inner Thighs Waxing",
    slug: "inner-thighs-waxing",
    duration: "15 mins",
    price: "$25",
    image: "https://img1.wsimg.com/isteam/stock/42117/:/rs=h:%7B640%7D",
    category: "Waxing"
  },
  {
    id: 57,
    title: "Nostrils Waxing",
    slug: "nostrils-waxing",
    duration: "15 mins",
    price: "$30",
    image: "https://img1.wsimg.com/isteam/ip/799dec32-c44d-4302-a569-db93073f4b94/eyebrows.jpeg",
    category: "Waxing"
  },
  {
    id: 58,
    title: "French Bikini Waxing",
    slug: "french-bikini-waxing",
    duration: "30 mins",
    price: "$45",
    image: "https://img1.wsimg.com/isteam/stock/gAqxgK1",
    category: "Waxing"
  },
  {
    id: 59,
    title: "Back Waxing",
    slug: "back-waxing",
    duration: "30 mins",
    price: "$60",
    image: "/cr=w_1240,h_620.jpeg",
    category: "Waxing"
  },
  {
    id: 60,
    title: "Buttocks Waxing",
    slug: "buttocks-waxing",
    duration: "30 mins",
    price: "$45",
    image: "https://img1.wsimg.com/isteam/stock/gAqxgK1",
    category: "Waxing"
  },
  {
    id: 61,
    title: "Ears Waxing",
    slug: "ears-waxing",
    duration: "15 mins",
    price: "$30",
    image: "https://img1.wsimg.com/isteam/ip/799dec32-c44d-4302-a569-db93073f4b94/eyebrows.jpeg",
    category: "Waxing"
  },
  {
    id: 62,
    title: "Feet/Toes Waxing",
    slug: "feet-toes-waxing",
    duration: "15 mins",
    price: "$30",
    image: "https://img1.wsimg.com/isteam/stock/gAqxgK1",
    category: "Waxing"
  },
  {
    id: 63,
    title: "Hands/Fingers Waxing",
    slug: "hands-fingers-waxing",
    duration: "15 mins",
    price: "$30",
    image: "https://img1.wsimg.com/isteam/stock/R4ggkwa",
    category: "Waxing"
  },
  // Spa Delights
  {
    id: 64,
    title: "Hair and Scalp Treatment",
    slug: "hair-scalp-treatment",
    duration: "30-60 mins",
    price: "$40-$75",
    image: "/services/Balinese Body Massage Basic Facial.jpg",
    category: "Spa Delights"
  },
  {
    id: 65,
    title: "Headspa",
    slug: "headspa",
    duration: "30-60 mins",
    price: "$40-$75",
    image: "/services/Balinese Body Massage Basic Facial.jpg",
    category: "Spa Delights"
  },
  {
    id: 66,
    title: "Face Massage",
    slug: "face-massage",
    duration: "30-60 mins",
    price: "$40-$75",
    image: "/Basic-facial-men-women.jpg",
    category: "Spa Delights"
  },
  {
    id: 67,
    title: "Shoulder, Face, Arms and Head Massage",
    slug: "shoulder-face-arms-head-massage",
    duration: "30-60 mins",
    price: "$40-$75",
    image: "/services/Balinese Body Massage Basic Facial.jpg",
    category: "Spa Delights"
  },
  {
    id: 68,
    title: "Foot Massage",
    slug: "foot-massage",
    duration: "30-60 mins",
    price: "$40-$75",
    image: "/services/foot-massage-warmup-twists.webp",
    category: "Spa Delights"
  },
  {
    id: 69,
    title: "Back Massage",
    slug: "back-massage",
    duration: "30-60 mins",
    price: "$40-$75",
    image: "/services/Deep Tissue Body Massage.jpg",
    category: "Spa Delights"
  },
  {
    id: 70,
    title: "Dry Head Massage",
    slug: "dry-head-massage",
    duration: "30-60 mins",
    price: "$40-$75",
    image: "/services/Balinese Body Massage Basic Facial.jpg",
    category: "Spa Delights"
  },
  {
    id: 71,
    title: "Deep Moisturizing Body",
    slug: "deep-moisturizing-body",
    duration: "30-60 mins",
    price: "$40-$75",
    image: "/services/Deep Tissue Body Massage.jpg",
    category: "Spa Delights"
  },
  {
    id: 72,
    title: "Back or Arms/Shoulder Scrub",
    slug: "back-arms-shoulder-scrub",
    duration: "30-60 mins",
    price: "$40-$75",
    image: "/services/Deep Tissue Body Massage.jpg",
    category: "Spa Delights"
  },
  // Special service for more options
  {
    id: 73,
    title: "GO TO SERVICE LIST PAGE FOR MORE OPTIONS",
    slug: "more-services",
    duration: "5 mins",
    price: "$0.01",
    image: "https://img1.wsimg.com/isteam/ip/799dec32-c44d-4302-a569-db93073f4b94/Face%20%26%20Body_20240619_172245_0002.png",
    category: "Esthetic Facials"
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