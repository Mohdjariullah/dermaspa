import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Image from "next/image";

const serviceCategories = [
  "All Services",
  "Esthetic Facials", 
  "Face & Body Packages",
  "Body Massages",
  "Body Booster",
  "Waxing"
];

const services = [
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
    title: "Anti-Acne Facial (for Men & Women)",
    duration: "1 hr",
    price: "$90",
    image: "/rs=w_1023,cg_true (4).jpeg",
    category: "Esthetic Facials"
  },
  {
    id: 6,
    title: "Vitamin C Facial with Extreme Softness",
    duration: "1 hr",
    price: "$120",
    image: "/cr=w_1232hsa621.jpeg",
    category: "Esthetic Facials"
  },
  {
    id: 7,
    title: "Dermal VIP Card $50 / Year",
    duration: "30 mins",
    price: "$50",
    image: "/cr=w_1240,h_620.jpeg",
    category: "Face & Body Packages",
    isVip: true,
    benefits: [
      "Microdermabrasion",
      "Vitamin C Treatment", 
      "Hydrating/Instant Glow",
      "Collagen Treatment",
      "Lightening Treatment",
      "Acne/Pimple Treatment",
      "Oily skincare Treatment",
      "Sunburn Treatment",
      "Extreme Softness"
    ]
  },
  {
    id: 8,
    title: "Balinese Body Massage + Basic Facial",
    duration: "1 hr 30 mins",
    price: "$130",
    image: "/rs=w_1023,cg_true.jpeg",
    category: "Face & Body Packages"
  },
  {
    id: 9,
    title: "Hot Stone Body Massage + Microderm Facial",
    duration: "2 hrs 30 mins",
    price: "$200",
    image: "/rs=w_1023,cg_true (1).jpeg",
    category: "Face & Body Packages"
  },
  {
    id: 10,
    title: "Balinese Body Massage",
    duration: "1 hr",
    price: "$80",
    image: "/rs=w_1023,cg_true (2).jpeg",
    category: "Body Massages"
  },
  {
    id: 11,
    title: "Deep Tissue Body Massage",
    duration: "1 hr",
    price: "$90",
    image: "/rs=w_1023,cg_true (3).jpeg",
    category: "Body Massages"
  }
];

export default function Services() {
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
                className={`px-4 py-2 text-sm md:text-base font-medium transition-colors ${
                  index === 0 
                    ? "text-[#a9445b] border-b-2 border-[#a9445b]" 
                    : "text-gray-600 hover:text-[#a9445b]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service) => (
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
                
                {service.isVip ? (
                  <div className="mb-3">
                    <div className="text-sm text-gray-600 mb-2">{service.duration} | {service.price}</div>
                    <div className="text-xs text-[#a9445b] font-bold mb-2">**$45 ADD-ON FACIAL VIP**</div>
                    <ul className="text-xs text-gray-600 mb-2">
                      {service.benefits?.map((benefit, index) => (
                        <li key={index} className="mb-1">• {benefit}</li>
                      ))}
                    </ul>
                    <div className="text-xs text-gray-500 italic">
                      *MUST PRESENT VIP CARD*<br/>
                      *TERMS & CONDITIONS APPLY*
                    </div>
                  </div>
                ) : (
                  <div className="text-sm text-gray-600 mb-3">{service.duration} | {service.price}</div>
                )}
                
                {/* Book Now Button */}
                <button className="w-full bg-[#fbb6c1] text-white font-bold py-2 px-4 rounded hover:bg-[#a9445b] transition-colors">
                  BOOK NOW!
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center">
          <button className="text-[#a9445b] font-semibold hover:underline">
            + See All
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}