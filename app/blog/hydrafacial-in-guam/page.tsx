import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HydraFacial in Guam: Everything You Need to Know About This Celebrity-Favorite Treatment | Dermal Skin Care Spa",
  description: "Discover why HydraFacial is the most sought-after facial in Guam. Learn about the process, benefits, comparisons, and why Dermal Skin Care Spa is the top choice for HydraFacial treatments.",
  keywords: [
    "HydraFacial Guam", "Guam facial", "celebrity facial Guam", "Dermal Skin Care Spa", "Guam skincare", "HydraFacial benefits", "HydraFacial review", "Guam spa", "HydraFacial price Guam"
  ],
  openGraph: {
    title: "HydraFacial in Guam: Everything You Need to Know About This Celebrity-Favorite Treatment | Dermal Skin Care Spa",
    description: "Discover why HydraFacial is the most sought-after facial in Guam. Learn about the process, benefits, comparisons, and why Dermal Skin Care Spa is the top choice for HydraFacial treatments.",
    url: "https://dermalskincareandspaguam.com/blog/hydrafacial-in-guam",
    type: "article",
    images: [
      { url: "/services/Deep Cleansing Facial (for Men & Women).jpg", width: 1200, height: 630, alt: "HydraFacial in Guam" }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "HydraFacial in Guam: Everything You Need to Know About This Celebrity-Favorite Treatment | Dermal Skin Care Spa",
    description: "Discover why HydraFacial is the most sought-after facial in Guam. Learn about the process, benefits, comparisons, and why Dermal Skin Care Spa is the top choice for HydraFacial treatments.",
    images: [
      "/services/Deep Cleansing Facial (for Men & Women).jpg"
    ]
  },
  alternates: {
    canonical: "https://dermalskincareandspaguam.com/blog/hydrafacial-in-guam"
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

export default async function HydraFacialBlog() {
  const posts = await getRecentPosts();
  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen py-10 px-2 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          <main className="flex-1 max-w-5xl mx-auto">
            <article className="bg-white rounded-2xl shadow border border-pink-100 overflow-hidden">
              <Image src="/services/Deep Cleansing Facial (for Men & Women).jpg" alt="HydraFacial in Guam" width={1200} height={480} className="w-full h-80 object-cover object-center mb-0" priority />
              <div className="p-12 pb-10">
                <h1 className="text-4xl font-extrabold text-[#a9445b] mb-8 leading-tight">HydraFacial in Guam: Everything You Need to Know About This Celebrity-Favorite Treatment</h1>
                <p className="text-gray-600 text-base mb-8" style={{ fontFamily: 'Almarai, sans-serif', fontWeight: 400 }}>By Dermal Skin Care Spa | {new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <section className="prose prose-pink max-w-none text-gray-800 prose-h2:mt-12 prose-h2:mb-6 prose-h3:mt-10 prose-h3:mb-4 prose-ul:my-6 prose-ol:my-6 prose-li:my-2 prose-img:rounded-xl prose-img:shadow prose-img:my-10 prose-blockquote:my-8 prose-blockquote:bg-[#fbb6c1]/20 prose-blockquote:p-4 prose-blockquote:rounded-xl prose-blockquote:border-l-4 prose-blockquote:border-[#a9445b]" style={{ fontFamily: 'Almarai, sans-serif', fontWeight: 400 }}>
                  <p className="mb-8">The HydraFacial has taken the beauty world by storm, becoming the go-to treatment for celebrities, influencers, and skincare enthusiasts worldwide.</p>
                  <p className="mb-8">Now, this revolutionary facial treatment is available right here in Guam at Dermal Skin Care Spa. If you're curious about what makes HydraFacial the most sought-after facial in Guam and beyond, this comprehensive guide will answer all your questions and help you understand why this treatment has become a game-changer in professional skincare.</p>
                  <Image src="/services/anti-acne-facial.jpg" alt="HydraFacial relaxing" width={800} height={400} />
                  <h2>What is a HydraFacial?</h2>
                  <p className="mb-8">HydraFacial is a non-invasive, multi-step facial treatment that combines the benefits of hydradermabrasion, chemical peels, automated painless extractions, and a special delivery of antioxidants, hyaluronic acid, and peptides.</p>
                  <p className="mb-8">Unlike traditional facials, HydraFacial uses patented Vortex-Fusion technology to cleanse, extract, and hydrate the skin simultaneously. This innovative treatment delivers instant results with no downtime and is suitable for all skin types.</p>
                  <h2>Why HydraFacial Has Become a Celebrity Obsession</h2>
                  <ul className="mb-8">
                    <li><strong>Instant, Visible Results:</strong> Clients leave with glowing, hydrated, and visibly refreshed skin. Perfect for special events or when you need to look your best quickly.</li>
                    <li><strong>No Downtime or Irritation:</strong> Gentle yet effective, you can return to your daily activities immediately after treatment—even apply makeup if desired.</li>
                    <li><strong>Customizable for Every Skin Type:</strong> Whether you have sensitive, acne-prone, or mature skin, HydraFacial can be tailored to your needs.</li>
                    <li><strong>Consistent, Predictable Results:</strong> The standardized protocol ensures reliable results every time.</li>
                  </ul>
                  <h2>The HydraFacial Process: What to Expect at Dermal Skin Care Spa</h2>
                  <ol className="mb-8">
                    <li><strong>Cleansing and Exfoliation:</strong> Removes dead skin cells and reveals a fresh layer of skin.</li>
                    <li><strong>Acid Peel:</strong> A gentle peel to loosen dirt and debris from pores without irritation.</li>
                    <li><strong>Extraction:</strong> Painlessly removes blackheads, whiteheads, and other impurities.</li>
                    <li><strong>Hydration:</strong> Infuses the skin with intensive moisturizers and customized serums.</li>
                  </ol>
                  <Image src="/services/Stretching Body Massage.jpg" alt="Spa hydration step" width={800} height={400} />
                  <h2>Optional Add-Ons</h2>
                  <ul className="mb-8">
                    <li>Brightening booster for hyperpigmentation</li>
                    <li>Anti-aging booster for fine lines and wrinkles</li>
                    <li>Clarifying booster for acne-prone skin</li>
                    <li>LED light therapy for additional benefits</li>
                  </ul>
                  <h2>HydraFacial vs. Other Facials Available in Guam</h2>
                  <ul className="mb-8">
                    <li><strong>Traditional Facial:</strong> Manual extractions can be painful and may cause redness. Results vary depending on the aesthetician’s skill.</li>
                    <li><strong>HydraFacial:</strong> Painless, no irritation or downtime, consistent results, and deep product infusion for lasting benefits.</li>
                  </ul>
                  <h2>Who is the Ideal Candidate for HydraFacial?</h2>
                  <ul className="mb-8">
                    <li>All skin types: oily, dry, combination, or sensitive</li>
                    <li>Various age groups: teens to mature adults</li>
                    <li>Specific skin concerns: fine lines, uneven tone, hyperpigmentation, enlarged pores, dullness</li>
                    <li>Busy lifestyles: quick treatment, zero downtime</li>
                  </ul>
                  <h2>Maximizing Your HydraFacial Results</h2>
                  <ul className="mb-8">
                    <li><strong>Pre-Treatment:</strong> Avoid retinoids and exfoliating acids 48 hours before. Arrive with a clean face.</li>
                    <li><strong>Post-Treatment:</strong> Apply SPF, keep skin hydrated, avoid harsh exfoliants for 48 hours, and maintain a consistent home care routine.</li>
                  </ul>
                  <h2>Book Your HydraFacial Experience Today</h2>
                  <p className="mb-8">Ready to discover why HydraFacial has become the most requested facial in Guam? Experience the celebrity-favorite treatment that delivers real results without downtime or discomfort.</p>
                  <p className="mb-8">Contact Dermal Skin Care Spa today to book your HydraFacial and enjoy radiant, healthy skin!</p>
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