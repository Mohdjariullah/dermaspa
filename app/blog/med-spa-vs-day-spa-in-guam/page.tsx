import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Med Spa vs Day Spa in Guam: Which is Right for You? | Dermal Skin Care Spa",
  description: "Discover the key differences between med spas and day spas in Guam. Learn which is best for your skin, wellness, and beauty goals at Dermal Skin Care Spa.",
  keywords: [
    "med spa Guam", "day spa Guam", "Guam spa", "medical spa Guam", "facial Guam", "massage Guam", "Dermal Skin Care Spa"
  ],
  openGraph: {
    title: "Med Spa vs Day Spa in Guam: Which is Right for You? | Dermal Skin Care Spa",
    description: "Discover the key differences between med spas and day spas in Guam. Learn which is best for your skin, wellness, and beauty goals at Dermal Skin Care Spa.",
    url: "https://dermalskincareandspaguam.com/blog/med-spa-vs-day-spa-in-guam",
    type: "article",
    images: [
      { url: "/services/Deep Cleansing Facial (for Men & Women).jpg", width: 1200, height: 630, alt: "Med Spa vs Day Spa in Guam" }
    ]
  },
  alternates: {
    canonical: "https://dermalskincareandspaguam.com/blog/med-spa-vs-day-spa-in-guam"
  }
};

// Helper to get recent posts (for sidebar)
import fs from "fs";
import path from "path";
async function getRecentPosts() {
  const blogDir = path.join(process.cwd(), "app/blog");
  const slugs = fs
    .readdirSync(blogDir, { withFileTypes: true })
    .filter(
      (dirent) =>
        dirent.isDirectory() &&
        fs.existsSync(path.join(blogDir, dirent.name, "page.tsx"))
    )
    .map((dirent) => dirent.name);
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const mod = await import(`../${slug}/page`);
      return {
        slug,
        title: mod.metadata?.title || slug,
      };
    })
  );
  return posts.sort((a, b) => a.title.localeCompare(b.title));
}

function RecentPosts({ posts }: { posts: { slug: string; title: string }[] }) {
  return (
    <aside className="hidden lg:block w-full max-w-xs pl-8">
      <div className="bg-[#f8e9ef] rounded-xl shadow p-6 mb-8">
        <h3 className="text-lg font-bold text-[#a9445b] mb-4">Recent Posts</h3>
        <ul className="space-y-3">
          {posts.slice(0, 6).map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="text-[#a9445b] hover:underline font-medium text-base">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default async function MedSpaVsDaySpaBlog() {
  const posts = await getRecentPosts();
  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen py-10 px-2 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          <main className="flex-1 max-w-5xl mx-auto">
            <article className="bg-white rounded-2xl shadow border border-pink-100 overflow-hidden">
              <Image src="/services/Deep Cleansing Facial (for Men & Women).jpg" alt="Med Spa vs Day Spa in Guam" width={1200} height={480} className="w-full h-80 object-cover object-center mb-0" priority />
              <div className="p-12 pb-10">
                <h1 className="text-4xl font-extrabold text-[#a9445b] mb-8 leading-tight">Med Spa vs Day Spa in Guam: Which is Right for You?</h1>
                <p className="text-gray-600 text-base mb-8" style={{ fontFamily: 'Almarai, sans-serif', fontWeight: 400 }}>By Dermal Skin Care Spa | {new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <section className="prose prose-pink max-w-none text-gray-800 prose-h2:mt-12 prose-h2:mb-6 prose-h3:mt-10 prose-h3:mb-4 prose-ul:my-6 prose-ol:my-6 prose-li:my-2 prose-img:rounded-xl prose-img:shadow prose-img:my-10 prose-blockquote:my-8 prose-blockquote:bg-[#fbb6c1]/20 prose-blockquote:p-4 prose-blockquote:rounded-xl prose-blockquote:border-l-4 prose-blockquote:border-[#a9445b] prose-p:leading-relaxed prose-p:text-base prose-p:mb-6" style={{ fontFamily: 'Almarai, sans-serif', fontWeight: 400 }}>
                  <p>When searching for professional skincare and wellness services in Guam, you&apos;ll encounter two main types of establishments: medical spas (med spas) and day spas. While both offer relaxation and beauty treatments, the differences between them are significant and can greatly impact your results. Understanding these distinctions will help you make the best choice for your specific needs.</p>
                  <Image src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80" alt="Spa difference" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h2>Defining Med Spa vs Day Spa: Understanding the Fundamental Differences</h2>
                  <h3>What is a Day Spa?</h3>
                  <ul>
                    <li>Traditional facials with standard products</li>
                    <li>Relaxation massages</li>
                    <li>Basic body treatments</li>
                    <li>Manicures and pedicures</li>
                    <li>Waxing services</li>
                    <li>Aromatherapy treatments</li>
                  </ul>
                  <p>Day spas excel at providing a relaxing escape from daily stress, offering treatments that feel good and provide temporary aesthetic improvements. They&apos;re perfect for special occasions, stress relief, or when you simply want to be pampered.</p>
                  <Image src="/services/Stretching Body Massage.jpg" alt="Day spa relaxation" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h3>What is a Med Spa?</h3>
                  <ul>
                    <li>Medical-grade facial treatments</li>
                    <li>Advanced technology procedures</li>
                    <li>Clinical-strength products</li>
                    <li>Results-driven protocols</li>
                    <li>Therapeutic treatments for specific conditions</li>
                    <li>Professional consultations and treatment planning</li>
                  </ul>
                  <p>Med spas like Dermal Skin Care Spa combine the relaxing atmosphere of a spa with the expertise and advanced treatments typically found in dermatology offices or medical clinics.</p>
                  <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Med spa technology" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h2>Key Differences That Matter for Your Skin</h2>
                  <h3>1. Treatment Depth and Effectiveness</h3>
                  <ul>
                    <li><strong>Day Spa Treatments:</strong> Surface-level, temporary, focus on relaxation</li>
                    <li><strong>Med Spa Treatments:</strong> Deeper, lasting, address root causes, measurable results</li>
                  </ul>
                  <h3>2. Product Quality and Strength</h3>
                  <ul>
                    <li><strong>Day Spa:</strong> Over-the-counter, lower concentrations, pleasant but general</li>
                    <li><strong>Med Spa:</strong> Medical-grade, higher concentrations, clinically tested, prescription options</li>
                  </ul>
                  <h3>3. Technology and Equipment</h3>
                  <ul>
                    <li><strong>Day Spa:</strong> Basic steamers, simple tools, standard equipment</li>
                    <li><strong>Med Spa:</strong> LED therapy, radiofrequency, ultrasonic, microcurrent, advanced extraction, lasers</li>
                  </ul>
                  <Image src="/services/Balinese Body Massage.jpg" alt="Spa technology" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h3>4. Staff Training and Expertise</h3>
                  <ul>
                    <li><strong>Day Spa:</strong> Basic certification, general training, focus on relaxation</li>
                    <li><strong>Med Spa:</strong> Advanced training, medical certifications, ongoing education, skin physiology knowledge</li>
                  </ul>
                  <h2>Treatment Comparisons: Day Spa vs Med Spa in Guam</h2>
                  <h3>Treating Acne</h3>
                  <ul>
                    <li><strong>Day Spa:</strong> Basic cleansing, steam, manual extractions, clay mask, light moisturizer</li>
                    <li><strong>Med Spa:</strong> Skin analysis, medical-grade cleansing, safe extractions, LED therapy, professional products, home care plan, follow-up</li>
                  </ul>
                  <h3>Anti-Aging Treatments</h3>
                  <ul>
                    <li><strong>Day Spa:</strong> Hydrating facial, collagen mask, basic serums, temporary effects</li>
                    <li><strong>Med Spa:</strong> Microneedling, vampire facial, chemical peels, radiofrequency, retinoids, long-lasting rejuvenation</li>
                  </ul>
                  <h3>Pigmentation Issues</h3>
                  <ul>
                    <li><strong>Day Spa:</strong> Brightening facial, vitamin C, gentle exfoliation, minimal improvement</li>
                    <li><strong>Med Spa:</strong> Pigmentation analysis, whitening treatments, chemical peels, brightening protocols, prescription products, lasting results</li>
                  </ul>
                  <Image src="/services/Placenta-Collagen Facial.jpg" alt="Facial results" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h2>Specific Med Spa Advantages at Dermal Skin Care Spa</h2>
                  <ul>
                    <li>Microneedling</li>
                    <li>Chemical Peels</li>
                    <li>Vampire Facial</li>
                    <li>Radio Frequency Treatments</li>
                    <li>Advanced LED Therapy</li>
                  </ul>
                  <h3>Customized Treatment Protocols</h3>
                  <ul>
                    <li>Detailed skin analysis</li>
                    <li>Customized combinations</li>
                    <li>Progressive plans</li>
                    <li>Adjustments based on response</li>
                    <li>Medical-grade home care</li>
                  </ul>
                  <h3>Safety and Expertise</h3>
                  <ul>
                    <li>Consultation and screening</li>
                    <li>Patch testing</li>
                    <li>Sanitation protocols</li>
                    <li>Emergency preparedness</li>
                    <li>Insurance and licensing</li>
                  </ul>
                  <Image src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80" alt="Spa safety" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h2>When to Choose a Day Spa vs Med Spa in Guam</h2>
                  <ul>
                    <li><strong>Day Spa:</strong> Pure relaxation, special occasions, no specific concerns, gentle treatments, budget</li>
                    <li><strong>Med Spa:</strong> Specific concerns, lasting results, acne/aging/pigmentation, evidence-based, advanced tech, expertise, transformation</li>
                  </ul>
                  <h2>The Cost Factor: Understanding the Value Proposition</h2>
                  <ul>
                    <li><strong>Day Spa:</strong> Basic facials $40-60, massage $50-70, limited value, frequent visits</li>
                    <li><strong>Med Spa:</strong> Facials $50-130, advanced $90-199, long-lasting, fewer treatments, better value</li>
                  </ul>
                  <h2>Why Medical-Grade Matters in Guam&apos;s Climate</h2>
                  <ul>
                    <li>Sun Damage: Med spa treatments reverse photodamage, prescription sunscreens</li>
                    <li>Humidity: Professional products withstand humidity, treat clogged pores</li>
                    <li>Lifestyle: Active/outdoor needs serious protection, med spa = resilient results</li>
                  </ul>
                  <Image src="/services/Balinese Body Massage Basic Facial.jpg" alt="Med spa results" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h2>The Dermal Difference: Best of Both Worlds</h2>
                  <ul>
                    <li>Medical-grade treatments in a spa setting</li>
                    <li>Comprehensive wellness approach</li>
                    <li>Accessibility</li>
                  </ul>
                  <h2>Making Your Decision: Questions to Ask</h2>
                  <ul>
                    <li>What are my primary goals? Relaxation (day spa) or results (med spa)?</li>
                    <li>What&apos;s my skin condition? Healthy (either) or specific concerns (med spa)?</li>
                    <li>What&apos;s my budget? Occasional treat (day spa) or investment (med spa)?</li>
                    <li>How important are results? Feel good (day spa) or visible improvement (med spa)?</li>
                  </ul>
                  <h2>The Future of Spa Services in Guam</h2>
                  <ul>
                    <li>Continuous education and training</li>
                    <li>Investment in new technologies</li>
                    <li>Commitment to medical-grade protocols</li>
                    <li>Focus on measurable results</li>
                  </ul>
                  <h2>Experience the Med Spa Advantage</h2>
                  <ul>
                    <li>60+ professional treatments</li>
                    <li>Advanced technologies</li>
                    <li>Expert staff</li>
                    <li>Proven results</li>
                    <li>Comfortable spa atmosphere</li>
                  </ul>
                </section>
                {/* Calm CTA Card at the bottom */}
                <div className="mt-16 bg-[#fbb6c1]/20 border border-pink-100 rounded-2xl shadow-lg p-10 flex flex-col items-center text-center max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold text-[#a9445b] mb-4">Book Your Med Spa Consultation Today</h2>
                  <ul className="text-base text-[#a9445b] font-semibold mb-6 space-y-2">
                    <li>Visit <a href="https://dermalskinclinicspa.com/" className="underline hover:text-[#a9445b]" target="_blank" rel="noopener noreferrer">www.dermalskincareandspaguam.com</a></li>
                    <li>Call for expert consultation</li>
                    <li>WhatsApp for quick questions</li>
                  </ul>
                  <p className="text-gray-700 mb-2">Serving all of Guam with convenient access from Tumon, Tamuning, and Hagåtña, Dermal Skin Care Spa brings world-class med spa services to the island. Experience the perfect blend of medical expertise, advanced technology, and spa luxury at Guam&apos;s trusted med spa destination.</p>
                </div>
              </div>
            </article>
          </main>
          <RecentPosts posts={posts} />
        </div>
      </div>
      <Footer />
    </>
  );
} 