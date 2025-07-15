import Image from "next/image";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

export default function ServicesList() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen w-full flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-center py-12 px-4 bg-white">
        <div className="md:w-1/2 w-full max-w-xl mx-auto flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#a9445b] mb-2 uppercase tracking-tight">Facial</h1>
          <p className="text-gray-700 text-base md:text-lg">
            Our facials help to deeply cleanse the skin, removing dirt, oil, and impurities that clog pores and lead to breakouts. Secondly, our facials are also beneficial for the mind, body, and spirit by providing a relaxing experience. Each facial is customized for your skin concerns and goals, using professional products and advanced equipment for enhanced skin tones. Non-surgical or non-invasive treatments for aging, acne, and pigmentation. Our licensed estheticians perform targeted skin analysis for best results. Book a facial today at our clinic for a youthful and radiant complexion. CALL TO BOOK.
          </p>
          <button className="bg-[#fbb6c1] text-[#a9445b] px-8 py-2 rounded shadow font-bold w-32">CALL</button>
        </div>
        <div className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0">
          <div className="w-[320px] h-[400px] relative rounded-lg overflow-hidden shadow-lg">
            <Image src="/e69b890c-7b71-4f1c-9b6b-6949bd55fe40.jpeg" alt="Facial" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* Face Treatments and Facials Section */}
      <section className="w-full flex flex-col items-center py-12 px-2">
        <h2 className="text-2xl font-bold text-[#a9445b] mb-2 uppercase tracking-wide text-center">Face Treatments and Facials</h2>
        <span className="text-sm text-gray-600 mb-4 text-center">CALL TO BOOK THESE SERVICES</span>
        <div className="w-full max-w-3xl flex flex-col gap-8 items-center">
          <Image src="/rs=w_1023,cg_true.jpeg" alt="Facial Services" width={800} height={600} className="rounded-lg shadow-lg border border-pink-200" />
          <Image src="/rs=w_1023,cg_true (1).jpeg" alt="Facial Services 2" width={800} height={600} className="rounded-lg shadow-lg border border-pink-200" />
          <Image src="/rs=w_1023,cg_true (2).jpeg" alt="Facial Services 3" width={800} height={600} className="rounded-lg shadow-lg border border-pink-200" />
        </div>
      </section>

      {/* Body Massage Section */}
      <section className="w-full flex flex-col items-center py-12 px-4 bg-white">
        <h2 className="text-2xl font-bold text-[#a9445b] mb-2 uppercase tracking-wide text-center">Body Massage</h2>
        <div className="max-w-2xl mx-auto text-gray-700 text-base md:text-lg mb-6 text-center">
          Our body massages help to alleviate muscle tension and stiffness, promote relaxation and reduce stress. Improved tissue health response can be found from regular quality and careful stretching. These massages stimulate circulation, bringing a sense of overall well-being. Our skilled therapists use a variety of techniques, resulting in a holistic approach to skin care and wellness. Book a massage today for lower back pain, sports injuries, relief for overworked muscles, or general relaxation and comfort. Regular massages can contribute to better stress management and promote balance and harmony within the body. CALL TO BOOK.
        </div>
        <button className="bg-[#fbb6c1] text-[#a9445b] px-8 py-2 rounded shadow font-bold w-32 mb-8">CALL</button>
        <div className="w-full max-w-3xl flex flex-col gap-8 items-center">
          <Image src="/rs=w_1023,cg_true (3).jpeg" alt="Massage Services" width={800} height={600} className="rounded-lg shadow-lg border border-pink-200" />
        </div>
      </section>

      {/* Face Packages Section */}
      <section className="w-full flex flex-col items-center py-12 px-2">
        <h2 className="text-2xl font-bold text-[#a9445b] mb-2 uppercase tracking-wide text-center">Face Packages, Body Massages / Boosters - Waxing</h2>
        <span className="text-sm text-gray-600 mb-4 text-center">CALL TO BOOK THESE SERVICES</span>
        <div className="w-full max-w-3xl flex flex-col gap-8 items-center">
          <Image src="/rs=w_1023,cg_true (4).jpeg" alt="Face Packages" width={800} height={600} className="rounded-lg shadow-lg border border-pink-200" />
        </div>
      </section>

      {/* Bottom Image */}
      <section className="w-full flex justify-center py-12 px-2 bg-white">
        <div className="w-full max-w-xl">
          <Image src="/cr=w_1240,h_620.jpeg" alt="Spa Flower" width={800} height={400} className="rounded-lg shadow-lg border border-pink-200" />
        </div>
      </section>
      <Footer />
    </div>
  );
}
