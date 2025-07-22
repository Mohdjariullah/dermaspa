import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wellness Spa in Guam: Your Complete Self-Care Destination | Dermal Skin Care Spa",
  description: "Discover Guam's premier wellness spa for holistic self-care. Explore facials, massages, body treatments, and wellness packages at Dermal Skin Care Spa.",
  keywords: [
    "wellness spa Guam", "Guam spa", "self-care Guam", "massage Guam", "facial Guam", "wellness packages Guam", "Dermal Skin Care Spa"
  ],
  openGraph: {
    title: "Wellness Spa in Guam: Your Complete Self-Care Destination | Dermal Skin Care Spa",
    description: "Discover Guam's premier wellness spa for holistic self-care. Explore facials, massages, body treatments, and wellness packages at Dermal Skin Care Spa.",
    url: "https://dermalskincareandspaguam.com/blog/wellness-spa-in-guam",
    type: "article",
    images: [
      { url: "/services/Balinese Body Massage.jpg", width: 1200, height: 630, alt: "Wellness Spa in Guam" }
    ]
  },
  alternates: {
    canonical: "https://dermalskincareandspaguam.com/blog/wellness-spa-in-guam"
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

export default async function WellnessSpaBlog() {
  const posts = await getRecentPosts();
  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen py-10 px-2 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          <main className="flex-1 max-w-5xl mx-auto">
            <article className="bg-white rounded-2xl shadow border border-pink-100 overflow-hidden">
              <Image src="/services/Balinese Body Massage.jpg" alt="Wellness Spa in Guam" width={1200} height={480} className="w-full h-80 object-cover object-center mb-0" priority />
              <div className="p-12 pb-10">
                <h1 className="text-4xl font-extrabold text-[#a9445b] mb-8 leading-tight">Wellness Spa in Guam: Your Complete Self-Care Destination</h1>
                <p className="text-gray-600 text-base mb-8" style={{ fontFamily: 'Almarai, sans-serif', fontWeight: 400 }}>By Dermal Skin Care Spa | {new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <section className="prose prose-pink max-w-none text-gray-800 prose-h2:mt-12 prose-h2:mb-6 prose-h3:mt-10 prose-h3:mb-4 prose-ul:my-6 prose-ol:my-6 prose-li:my-2 prose-img:rounded-xl prose-img:shadow prose-img:my-10 prose-blockquote:my-8 prose-blockquote:bg-[#fbb6c1]/20 prose-blockquote:p-4 prose-blockquote:rounded-xl prose-blockquote:border-l-4 prose-blockquote:border-[#a9445b]" style={{ fontFamily: 'Almarai, sans-serif', fontWeight: 400 }}>
                  <p>In today&apos;s fast-paced world, finding a true wellness sanctuary has become more important than ever. For residents and visitors in Guam seeking comprehensive self-care solutions, Dermal Skin Care Spa has emerged as the island&apos;s premier wellness spa destination.</p>
                  <p>Unlike traditional spas that focus solely on beauty or relaxation, a true wellness spa in Guam offers a holistic approach to health, beauty, and mental wellbeing. This guide explores how Dermal Skin Care Spa&apos;s integrated approach to wellness can transform not just your appearance, but your entire sense of wellbeing.</p>
                  <Image src="/services/Deep Tissue Body Massage.jpg" alt="Massage therapy in Guam" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h2>Understanding the Wellness Spa Concept</h2>
                  <p>A wellness spa goes beyond surface-level treatments to address the whole person – body, mind, and spirit. At Dermal Skin Care Spa, this philosophy is evident in every aspect of their service offerings. From therapeutic massages that relieve physical tension to advanced facials that boost confidence, each treatment contributes to overall wellness.</p>
                  <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Spa wellness concept" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h2>The Complete Wellness Experience: Services That Nurture Body and Soul</h2>
                  <h3>Facial Treatments: The Foundation of Skin Wellness</h3>
                  <p>At the heart of any wellness spa in Guam should be a comprehensive facial menu that addresses diverse skin needs. Dermal offers over 30 different facial treatments, each designed to promote skin health while providing a deeply relaxing experience.</p>
                  <ul>
                    <li><strong>HydraFacial ($199):</strong> Cleansing, exfoliation, extraction, and hydration in one seamless process.</li>
                    <li><strong>Therapeutic Facials ($50-130):</strong> Targeted treatments for specific skin issues and overall wellness.</li>
                    <li><strong>Relaxation-Focused Facials:</strong> Aromatherapy and massage techniques for mind and skin.</li>
                  </ul>
                  <Image src="/services/Deep Cleansing Facial (for Men & Women).jpg" alt="Facial treatment in Guam" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h3>Body Massages: Healing Touch for Physical and Mental Wellness</h3>
                  <ul>
                    <li><strong>Traditional Balinese Massage ($70-80):</strong> Gentle stretches, acupressure, and aromatherapy for deep relaxation.</li>
                    <li><strong>Deep Tissue Massage ($90):</strong> Intensive treatment for chronic tension and pain.</li>
                    <li><strong>Hot Stone Therapy ($90-120):</strong> Heated stones melt away tension and improve circulation.</li>
                    <li><strong>Specialty Massages:</strong> Shiatsu, Swedish, Maternity, Reflexology</li>
                  </ul>
                  <Image src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80" alt="Relaxing massage" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h3>Innovative Body Treatments: Beyond Traditional Spa Services</h3>
                  <ul>
                    <li>18 Steps Head Massage</li>
                    <li>Body Contouring Treatments</li>
                    <li>Lymphatic Drainage Massage</li>
                    <li>Vajacial, Back Facial, Cellulite Treatments</li>
                  </ul>
                  <Image src="/services/Stretching Body Massage.jpg" alt="Body treatment in Guam" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h3>Wellness Spa Packages: Integrated Experiences for Maximum Benefit</h3>
                  <ul>
                    <li>Face & Body Harmony Packages ($130-200): Pairing facials with massages for total wellness</li>
                    <li>Half-Day Wellness Retreats: Multiple treatments and relaxation time</li>
                    <li>Couples Wellness Experiences: Synchronized treatments in a peaceful setting</li>
                  </ul>
                  <Image src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80" alt="Spa package experience" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h2>The Holistic Approach: Why Wellness Matters in Guam</h2>
                  <ul>
                    <li>Sun Exposure: Spa treatments provide essential recovery and protection</li>
                    <li>Humidity: Professional treatments help maintain optimal skin balance</li>
                    <li>Ocean Activities: Spa treatments aid recovery and maintenance</li>
                    <li>Work-Life Balance: Spa visits provide necessary respite</li>
                  </ul>
                  <h3>Cultural Appreciation for Wellness</h3>
                  <p>Dermal Skin Care Spa honors Guam&apos;s multicultural wellness traditions by incorporating techniques from across the Pacific and Asia.</p>
                  <Image src="/services/Balinese Body Massage Basic Facial.jpg" alt="Cultural spa traditions" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h2>Creating Your Personal Wellness Journey</h2>
                  <ul>
                    <li>Comprehensive skin analysis</li>
                    <li>Discussion of physical concerns</li>
                    <li>Lifestyle assessment</li>
                    <li>Goal setting and customized planning</li>
                  </ul>
                  <h3>Building a Sustainable Wellness Routine</h3>
                  <ul>
                    <li>Monthly Maintenance</li>
                    <li>Seasonal Adjustments</li>
                    <li>Progressive Treatments</li>
                    <li>Home Care Integration</li>
                  </ul>
                  <Image src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=80" alt="Wellness routine" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h2>The Mind-Body Connection</h2>
                  <ul>
                    <li>Stress Reduction</li>
                    <li>Confidence Building</li>
                    <li>Mindful Moments</li>
                    <li>Therapeutic Touch</li>
                  </ul>
                  <h2>What Makes Dermal Skin Care Spa Guam&apos;s Premier Wellness Destination</h2>
                  <ul>
                    <li>Comprehensive Service Menu</li>
                    <li>Professional Excellence</li>
                    <li>Accessibility and Convenience</li>
                    <li>Results-Driven Approach</li>
                    <li>Value for Investment</li>
                  </ul>
                  <Image src="/services/Deep Cleansing Facial (for Men & Women).jpg" alt="Wellness results" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h2>Integrating Wellness Spa Visits into Your Lifestyle</h2>
                  <ul>
                    <li>For Busy Professionals: Express treatments, evening appointments, weekend retreats</li>
                    <li>For Parents: Mom&apos;s day out, prenatal/postnatal, quick treatments, couples packages</li>
                    <li>For Athletes: Sports massage, recovery, injury prevention, skin protection</li>
                    <li>For Seniors: Gentle massage, anti-aging facials, circulation-boosting, social wellness</li>
                  </ul>
                  <h2>The Science Behind Spa Wellness</h2>
                  <ul>
                    <li>Massage: Reduces cortisol, increases serotonin/dopamine, improves circulation, decreases pain</li>
                    <li>Facials: Stimulate collagen, enhance turnover, improve absorption, measurable improvements</li>
                    <li>Overall: Better sleep, improved immunity, enhanced mood, more energy</li>
                  </ul>
                  <h2>Seasonal Wellness at Dermal Skin Care Spa</h2>
                  <ul>
                    <li>Dry Season: Hydrating treatments, sun repair, cooling therapies</li>
                    <li>Wet Season: Anti-humidity skin care, energizing massages, brightening facials</li>
                    <li>Year-Round: Regular exfoliation, sun protection, stress management</li>
                  </ul>
                  <h2>Testimonials: Real Wellness Transformations</h2>
                  <blockquote>&quot;Monthly visits have transformed not just my skin, but my entire outlook on self-care.&quot;</blockquote>
                  <blockquote>&quot;The combination of massage and facials has eliminated my chronic headaches.&quot;</blockquote>
                  <blockquote>&quot;I never understood wellness until I experienced the holistic approach at Dermal.&quot;</blockquote>
                  <h2>Your Wellness Journey Starts Today</h2>
                  <ul>
                    <li>Book a Consultation</li>
                    <li>Try a Signature Package</li>
                    <li>Establish a Routine</li>
                    <li>Track Your Progress</li>
                    <li>Adjust as Needed</li>
                  </ul>
                  <h2>Easy Booking Options</h2>
                  <ul>
                    <li>Visit <a href="https://www.dermalskincareandspaguam.com" className="text-[#a9445b] underline" target="_blank" rel="noopener noreferrer">www.dermalskincareandspaguam.com</a></li>
                    <li>Call their dedicated booking line</li>
                    <li>WhatsApp for quick scheduling</li>
                    <li>Walk in for consultations</li>
                  </ul>
                  <h2>Embrace Complete Wellness in Guam</h2>
                  <p>At Dermal Skin Care Spa, wellness isn&apos;t just a service – it&apos;s a philosophy. By addressing your complete wellbeing through professional treatments, personalized care, and ongoing support, they&apos;ve created Guam&apos;s definitive wellness spa destination.</p>
                  <p>Don&apos;t wait for the &quot;perfect time&quot; to prioritize your wellness. Every day you invest in yourself is a day moving toward better health, enhanced beauty, and greater life satisfaction. Experience the transformation that comes from choosing comprehensive wellness at Dermal Skin Care Spa.</p>
                  <p>Conveniently serving all of Guam from Tumon to Hagåtña, Dermal Skin Care Spa welcomes you to discover true wellness. With professional expertise, comprehensive services, and genuine care for your wellbeing, your journey to a healthier, more beautiful you begins here.</p>
                </section>
                {/* Calm CTA Card at the bottom */}
                <div className="mt-16 bg-[#fbb6c1]/20 border border-pink-100 rounded-2xl shadow-lg p-10 flex flex-col items-center text-center max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold text-[#a9445b] mb-4">Book Your Med Spa Consultation Today</h2>
                  <ul className="text-base text-[#a9445b] font-semibold mb-6 space-y-2">
                    <li>Visit <a href="https://www.dermalskincareandspaguam.com" className="underline hover:text-[#a9445b]" target="_blank" rel="noopener noreferrer">www.dermalskincareandspaguam.com</a></li>
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