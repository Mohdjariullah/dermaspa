import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Complete Guide to Body Treatments and Spa Massage in Guam | Dermal Skin Care Spa",
  description: "Explore Guam's most comprehensive menu of body treatments and massage therapies. Find the perfect spa massage for your needs at Dermal Skin Care Spa.",
  keywords: [
    "spa massage Guam", "body treatments Guam", "massage therapy Guam", "Balinese massage Guam", "deep tissue massage Guam", "hot stone massage Guam", "Dermal Skin Care Spa"
  ],
  openGraph: {
    title: "The Complete Guide to Body Treatments and Spa Massage in Guam | Dermal Skin Care Spa",
    description: "Explore Guam's most comprehensive menu of body treatments and massage therapies. Find the perfect spa massage for your needs at Dermal Skin Care Spa.",
    url: "https://dermalskincareandspaguam.com/blog/complete-guide-to-body-treatments-and-spa-massage-in-guam",
    type: "article",
    images: [
      { url: "/services/Balinese Body Massage.jpg", width: 1200, height: 630, alt: "Spa Massage in Guam" }
    ]
  },
  alternates: {
    canonical: "https://dermalskincareandspaguam.com/blog/complete-guide-to-body-treatments-and-spa-massage-in-guam"
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

export default async function CompleteGuideMassageBlog() {
  const posts = await getRecentPosts();
  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen py-10 px-2 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          <main className="flex-1 max-w-5xl mx-auto">
            <article className="bg-white rounded-2xl shadow border border-pink-100 overflow-hidden">
              <Image src="/services/Balinese Body Massage.jpg" alt="Spa Massage in Guam" width={1200} height={480} className="w-full h-80 object-cover object-center mb-0" priority />
              <div className="p-12 pb-10">
                <h1 className="text-4xl font-extrabold text-[#a9445b] mb-8 leading-tight">The Complete Guide to Body Treatments and Spa Massage in Guam</h1>
                <p className="text-gray-600 text-base mb-8" style={{ fontFamily: 'Almarai, sans-serif', fontWeight: 400 }}>By Dermal Skin Care Spa | {new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <section className="prose prose-pink max-w-none text-gray-800 prose-h2:mt-12 prose-h2:mb-6 prose-h3:mt-10 prose-h3:mb-4 prose-ul:my-6 prose-ol:my-6 prose-li:my-2 prose-img:rounded-xl prose-img:shadow prose-img:my-10 prose-blockquote:my-8 prose-blockquote:bg-[#fbb6c1]/20 prose-blockquote:p-4 prose-blockquote:rounded-xl prose-blockquote:border-l-4 prose-blockquote:border-[#a9445b]" style={{ fontFamily: 'Almarai, sans-serif', fontWeight: 400 }}>
                  <p>In the tropical paradise of Guam, where active lifestyles meet demanding work schedules, the need for professional body treatments and therapeutic massage has never been greater.</p>
                  <p>Whether you're recovering from a challenging hike to Two Lovers Point, dealing with desk-job tension, or simply seeking deep relaxation, understanding your options for spa massage in Guam can transform your approach to wellness.</p>
                  <Image src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80" alt="Relaxing spa massage" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h2>The Art and Science of Spa Massage in Guam</h2>
                  <p>Massage therapy is far more than a luxury – it's a proven therapeutic practice with roots in ancient healing traditions and validation from modern medical science. In Guam's unique environment, where humidity, heat, and active lifestyles create specific physical challenges, professional massage becomes even more essential.</p>
                  <Image src="/services/Deep Tissue Body Massage.jpg" alt="Therapeutic massage" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h2>Comprehensive Massage Menu: Finding Your Perfect Treatment</h2>
                  <h3>Traditional Balinese Massage ($70-80)</h3>
                  <ul>
                    <li>Gentle Stretching</li>
                    <li>Acupressure</li>
                    <li>Aromatherapy</li>
                    <li>Long, Flowing Strokes</li>
                    <li>Skin Rolling</li>
                  </ul>
                  <p>Duration Options: 60 minutes ($70), 90 minutes ($80)</p>
                  <p>Ideal For: Stress relief, circulation, flexibility, wellness maintenance, massage newcomers</p>
                  <Image src="/services/Balinese Body Massage.jpg" alt="Balinese massage" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h3>Deep Tissue Massage ($90)</h3>
                  <ul>
                    <li>Myofascial Release</li>
                    <li>Trigger Point Therapy</li>
                    <li>Cross-Fiber Friction</li>
                    <li>Slow, Deep Pressure</li>
                    <li>Targeted Problem Areas</li>
                  </ul>
                  <p>Benefits: Relief from muscle strain, recovery from outdoor activities, desk job tension, athletic support</p>
                  <Image src="/services/Stretching Body Massage.jpg" alt="Deep tissue massage" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h3>Hot Stone Therapy ($90-120)</h3>
                  <ul>
                    <li>Volcanic Basalt Stones</li>
                    <li>Strategic Placement</li>
                    <li>Gliding Techniques</li>
                    <li>Temperature Therapy</li>
                    <li>Energy Balancing</li>
                  </ul>
                  <p>Pricing: 60 minutes ($90), 90 minutes ($120)</p>
                  <p>Unique Benefits: Melts tension, improves circulation, deep relaxation, anxiety relief, lasting warmth</p>
                  <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Hot stone therapy" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h2>Specialized Massage Therapies</h2>
                  <h3>Shiatsu Massage</h3>
                  <p>Japanese finger pressure along energy meridians. Performed fully clothed, perfect for lunch-hour wellness breaks.</p>
                  <h3>Swedish Massage</h3>
                  <p>Classic Western technique for relaxation and circulation. Great for first-timers or gentle therapy seekers.</p>
                  <h3>Thai Massage</h3>
                  <p>Compression, stretching, and acupressure for flexibility and energy flow. Performed on a mat.</p>
                  <h3>Aromatherapy Massage</h3>
                  <p>Customized essential oil blends for energizing or calming effects.</p>
                  <h3>Sports Massage</h3>
                  <p>For athletes and active individuals: enhances performance, prevents injury, speeds recovery.</p>
                  <Image src="/services/Deep Cleansing Facial (for Men & Women).jpg" alt="Sports massage" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h2>Unique Signature Treatments</h2>
                  <h3>18 Steps Head Massage</h3>
                  <ul>
                    <li>Scalp assessment and preparation</li>
                    <li>Neck and shoulder release</li>
                    <li>Pressure point activation</li>
                    <li>Scalp manipulation</li>
                    <li>Temple and forehead work</li>
                    <li>Hair follicle stimulation</li>
                    <li>Crown chakra balancing</li>
                    <li>Ear and jaw tension release</li>
                    <li>And more...</li>
                  </ul>
                  <p>Benefits: Relieves headaches, improves hair health, enhances clarity, reduces TMJ, better sleep, balances energy</p>
                  <Image src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80" alt="Head massage" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h3>Maternity Massage</h3>
                  <ul>
                    <li>Safe positioning and gentle techniques</li>
                    <li>Focus on lower back, legs, shoulders</li>
                    <li>Trimester-specific protocols</li>
                  </ul>
                  <p>Benefits: Reduces pain and swelling, improves circulation, better sleep, emotional support</p>
                  <h3>Reflexology</h3>
                  <p>Pressure points in the feet for whole-body wellness. Great for those on their feet all day.</p>
                  <h2>Advanced Body Treatments Beyond Massage</h2>
                  <h3>Body Contouring and Cellulite Treatments</h3>
                  <ul>
                    <li>Non-invasive fat reduction</li>
                    <li>Cellulite minimization</li>
                    <li>Skin tightening</li>
                    <li>Lymphatic drainage</li>
                  </ul>
                  <h3>Therapeutic Body Wraps</h3>
                  <ul>
                    <li>Detoxifying, hydrating, slimming, mineral wraps</li>
                  </ul>
                  <h3>Back Facial Treatments</h3>
                  <ul>
                    <li>Deep cleansing, extraction, exfoliation, targeted treatment</li>
                  </ul>
                  <h3>Lymphatic Drainage Massage</h3>
                  <ul>
                    <li>Reduces swelling, boosts immunity, improves skin, post-surgical support</li>
                  </ul>
                  <Image src="/services/Placenta-Collagen Facial.jpg" alt="Body wrap and contouring" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h2>Creating Your Ideal Spa Experience</h2>
                  <h3>Choosing the Right Treatment</h3>
                  <ul>
                    <li>Relaxation → Balinese or Swedish massage</li>
                    <li>Pain relief → Deep tissue or targeted therapy</li>
                    <li>Energy balance → Shiatsu or Thai massage</li>
                    <li>Multiple benefits → Hot stone or combination</li>
                  </ul>
                  <h3>Physical Condition</h3>
                  <ul>
                    <li>Chronic pain → Deep tissue</li>
                    <li>Pregnancy → Maternity massage</li>
                    <li>Sensitive skin → Shiatsu</li>
                    <li>Athletic recovery → Sports massage</li>
                  </ul>
                  <h3>Time and Budget</h3>
                  <ul>
                    <li>Quick relief → 30-minute treatments</li>
                    <li>Comprehensive therapy → 90-minute sessions</li>
                    <li>Best value → Packages and series</li>
                  </ul>
                  <h3>Maximizing Your Massage Benefits</h3>
                  <ul>
                    <li>Hydrate before</li>
                    <li>Avoid heavy meals</li>
                    <li>Arrive early</li>
                    <li>Communicate health concerns</li>
                    <li>Speak up about pressure</li>
                    <li>Relax and breathe</li>
                    <li>Hydrate after</li>
                    <li>Avoid strenuous activity</li>
                    <li>Take a warm bath</li>
                    <li>Schedule regular sessions</li>
                  </ul>
                  <Image src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=80" alt="Spa wellness" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h2>The Science Behind Massage Therapy</h2>
                  <ul>
                    <li>Increases circulation</li>
                    <li>Reduces muscle tension</li>
                    <li>Improves flexibility</li>
                    <li>Decreases blood pressure</li>
                    <li>Enhances immune function</li>
                    <li>Reduces anxiety and depression</li>
                    <li>Improves sleep</li>
                    <li>Increases alertness</li>
                    <li>Promotes mind-body connection</li>
                    <li>Balances hormones</li>
                  </ul>
                  <h2>Spa Massage for Different Lifestyles in Guam</h2>
                  <ul>
                    <li>Military: Recovery, stress relief, injury prevention, anxiety management</li>
                    <li>Tourism: Relief from standing, stress management, energy, sleep</li>
                    <li>Remote workers: Tech neck, posture, touch, work-life balance</li>
                  </ul>
                  <h2>Why Choose Dermal Skin Care Spa for Your Massage Needs</h2>
                  <ul>
                    <li>Comprehensive expertise</li>
                    <li>Professional standards</li>
                    <li>Accessibility and convenience</li>
                    <li>Holistic approach</li>
                  </ul>
                  <h3>Special Packages and Combinations</h3>
                  <ul>
                    <li>Couple's Retreat</li>
                    <li>Full Body Restoration</li>
                    <li>Athlete's Recovery</li>
                    <li>Executive Stress Relief</li>
                  </ul>
                  <h2>Your Journey to Wellness Starts Today</h2>
                  <ul>
                    <li>Visit <a href="https://www.dermalskincareandspaguam.com" className="text-[#a9445b] underline" target="_blank" rel="noopener noreferrer">www.dermalskincareandspaguam.com</a></li>
                    <li>Call their dedicated booking line</li>
                    <li>WhatsApp for immediate scheduling</li>
                    <li>Walk in for same-day availability</li>
                  </ul>
                  <p>Experience why Dermal Skin Care Spa is Guam's trusted destination for professional massage and body treatments. Your body deserves the best care – give it the attention it needs with therapeutic massage that goes beyond relaxation to deliver real, lasting results.</p>
                  <p>Conveniently located to serve all of Guam, from Tumon's hotels to Hagåtña's business district, Dermal Skin Care Spa welcomes you to discover the healing power of professional massage therapy. With over 60 treatments available, your perfect massage experience awaits.</p>
                </section>
                {/* Calm CTA Card at the bottom */}
                <div className="mt-16 bg-[#fbb6c1]/20 border border-pink-100 rounded-2xl shadow-lg p-10 flex flex-col items-center text-center max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold text-[#a9445b] mb-4">Book Your Med Spa Consultation Today</h2>
                  <ul className="text-base text-[#a9445b] font-semibold mb-6 space-y-2">
                    <li>Visit <a href="https://www.dermalskincareandspaguam.com" className="underline hover:text-[#a9445b]" target="_blank" rel="noopener noreferrer">www.dermalskincareandspaguam.com</a></li>
                    <li>Call for expert consultation</li>
                    <li>WhatsApp for quick questions</li>
                  </ul>
                  <p className="text-gray-700 mb-2">Serving all of Guam with convenient access from Tumon, Tamuning, and Hagåtña, Dermal Skin Care Spa brings world-class med spa services to the island. Experience the perfect blend of medical expertise, advanced technology, and spa luxury at Guam's trusted med spa destination.</p>
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