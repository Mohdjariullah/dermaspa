"use client";
import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function NoCallShowPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ fontFamily: "'Source Sans Pro', arial, sans-serif" }}>
      <Navbar />
      <main className="max-w-5xl mx-auto w-full flex flex-col items-center justify-center py-6 sm:py-8 px-4 sm:px-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-center mb-6 sm:mb-8 mt-6 sm:mt-8 uppercase text-[#a9445b] leading-tight" style={{ letterSpacing: 1 }}>
          CANCELLATION & NO CALL / NO SHOW POLICY
        </h1>
        
        <div className="w-full flex justify-center mb-6 sm:mb-8">
          <div className="w-full max-w-4xl aspect-[3/1.3] relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/cr=w_1240,h_620.jpeg"
              alt="Massage relaxation"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
        
        <div className="w-full max-w-4xl bg-white text-center py-4 px-4 sm:px-6 mb-4 sm:mb-6">
          <span className="uppercase text-xs sm:text-sm font-semibold tracking-widest text-[#a9445b] leading-relaxed">
            CALL US TODAY TO BOOK YOUR SKIN CARE AND SPA TREATMENT.
          </span>
        </div>
        
        <div className="w-full max-w-4xl text-center text-sm sm:text-base md:text-lg text-gray-700 flex flex-col gap-4 sm:gap-6 leading-relaxed px-4 sm:px-6">
          <p className="text-sm sm:text-base md:text-lg">
            ** For new customers, a $25 deposit is required to secure your appointment. This will be credited towards the final bill after treatment is complete. Our staff will contact you for your credit card information to secure and confirm your booking.
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            ** Clients who fail to show up, cancel or reschedule an appointment and have not contacted us at least 3 hrs prior to the scheduled appointment, a no-show fee of $25 will be added to the total bill of the next appointment.
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            ** Clients who show up 10 minutes late will still be charged the full payment, but the full hour of scheduled treatment is not guaranteed, and is based on room staff availability.
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            ** Customers are given 15 minutes grace period. 30 minutes or more will be advised to reschedule, or if customer chooses to proceed with service, and depends on room availability permits, customer will be charged a $25 late fee.
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            ** Skin consultation is free with same-day treatments only, otherwise, the consultation fee is $25.
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            ** Must present VIP Card and Gift Card to avail.
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            ** Thank you for trusting us. We appreciate your continued love and support of our time and business each year.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
