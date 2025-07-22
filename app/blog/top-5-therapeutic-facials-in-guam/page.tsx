import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top 5 Therapeutic Facials in Guam for Different Skin Concerns | Dermal Skin Care Spa",
  description: "Explore the best therapeutic facials in Guam for acne, pigmentation, aging, and more. Discover which facial is right for your skin concerns at Dermal Skin Care Spa.",
  keywords: [
    "Guam facials", "therapeutic facial Guam", "acne facial Guam", "brightening facial Guam", "LED facial Guam", "glassy skin facial Guam", "Obagi facial Guam", "Dermal Skin Care Spa"
  ],
  openGraph: {
    title: "Top 5 Therapeutic Facials in Guam for Different Skin Concerns | Dermal Skin Care Spa",
    description: "Explore the best therapeutic facials in Guam for acne, pigmentation, aging, and more. Discover which facial is right for your skin concerns at Dermal Skin Care Spa.",
    url: "https://dermalskincareandspaguam.com/blog/top-5-therapeutic-facials-in-guam",
    type: "article",
    images: [
      { url: "/services/anti-acne-facial.jpg", width: 1200, height: 630, alt: "Therapeutic Facials in Guam" }
    ]
  },
  alternates: {
    canonical: "https://dermalskincareandspaguam.com/blog/top-5-therapeutic-facials-in-guam"
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

export default async function TherapeuticFacialsBlog() {
  const posts = await getRecentPosts();
  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen py-10 px-2 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          <main className="flex-1 max-w-5xl mx-auto">
            <article className="bg-white rounded-2xl shadow border border-pink-100 overflow-hidden">
              <Image src="/services/anti-acne-facial.jpg" alt="Therapeutic Facials in Guam" width={1200} height={480} className="w-full h-80 object-cover object-center mb-0" priority />
              <div className="p-12 pb-10">
                <h1 className="text-4xl font-extrabold text-[#a9445b] mb-8 leading-tight">Top 5 Therapeutic Facials in Guam for Different Skin Concerns</h1>
                <p className="text-gray-600 text-base mb-8" style={{ fontFamily: 'Almarai, sans-serif', fontWeight: 400 }}>By Dermal Skin Care Spa | {new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <section className="prose prose-pink max-w-none text-gray-800 prose-h2:mt-12 prose-h2:mb-6 prose-h3:mt-10 prose-h3:mb-4 prose-ul:my-6 prose-ol:my-6 prose-li:my-2 prose-img:rounded-xl prose-img:shadow prose-img:my-10 prose-blockquote:my-8 prose-blockquote:bg-[#fbb6c1]/20 prose-blockquote:p-4 prose-blockquote:rounded-xl prose-blockquote:border-l-4 prose-blockquote:border-[#a9445b]" style={{ fontFamily: 'Almarai, sans-serif', fontWeight: 400 }}>
                  <p>Living in Guam&apos;s tropical paradise comes with unique skincare challenges. The combination of year-round humidity, intense UV exposure, and environmental factors can create various skin concerns that require targeted therapeutic treatments.</p>
                  <p>At Dermal Skin Care Spa, we understand that one size doesn&apos;t fit all when it comes to facial treatments. That&apos;s why we&apos;ve developed specialized therapeutic facials designed to address specific skin issues. This comprehensive guide explores the top 5 therapeutic facials in Guam, helping you choose the perfect treatment for your individual skin concerns.</p>
                  <Image src="/services/Deep Cleansing Facial (for Men & Women).jpg" alt="Facial cleansing" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h2>Understanding Therapeutic Facials vs. Regular Facials</h2>
                  <ul>
                    <li><strong>Results-driven:</strong> Designed to address specific skin conditions</li>
                    <li><strong>Customized:</strong> Tailored protocols based on individual skin analysis</li>
                    <li><strong>Professional-grade:</strong> Using medical-grade products and advanced techniques</li>
                    <li><strong>Progressive:</strong> Building upon previous treatments for cumulative results</li>
                    <li><strong>Science-based:</strong> Incorporating proven ingredients and methodologies</li>
                  </ul>
                  <p>Each therapeutic facial begins with a thorough skin analysis to ensure the treatment perfectly matches your skin&apos;s needs.</p>
                  <Image src="/services/Placenta-Collagen Facial.jpg" alt="Skin analysis" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h2>1. Anti-Acne Facial: Your Solution for Clear, Healthy Skin</h2>
                  <p><strong>Price:</strong> Starting from $60<br/><strong>Best for:</strong> Active acne, blackheads, clogged pores, oily skin<br/><strong>Treatment duration:</strong> 60-75 minutes</p>
                  <h3>The Acne Challenge in Guam</h3>
                  <p>Guam&apos;s humid climate creates the perfect storm for acne-prone skin. High humidity levels increase oil production, while environmental pollutants and sweat can clog pores. The Anti-Acne Facial at Dermal Skin Care Spa specifically targets these local challenges.</p>
                  <Image src="/services/anti-acne-facial.jpg" alt="Anti-acne facial" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h4>What Makes This Facial Therapeutic</h4>
                  <ul>
                    <li>Deep Pore Cleansing</li>
                    <li>Professional Extractions</li>
                    <li>Anti-Bacterial Treatment</li>
                    <li>Oil Control</li>
                    <li>LED Blue Light Therapy (optional add-on)</li>
                  </ul>
                  <h4>The Treatment Process</h4>
                  <ol>
                    <li>Double Cleansing</li>
                    <li>Enzyme Exfoliation</li>
                    <li>Steam Treatment</li>
                    <li>Professional Extractions</li>
                    <li>Anti-Acne Mask</li>
                    <li>Targeted Serums</li>
                    <li>Moisturizer and SPF</li>
                  </ol>
                  <h4>Expected Results</h4>
                  <ul>
                    <li>Immediate reduction in oiliness and congestion</li>
                    <li>Clearer pores and smoother texture</li>
                    <li>Reduced inflammation and redness</li>
                    <li>Prevention of future breakouts with regular treatments</li>
                    <li>Improved skin confidence</li>
                  </ul>
                  <Image src="/services/Deep Cleansing Facial (for Men & Women).jpg" alt="Clear skin results" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h2>2. Whitening/Brightening Facial: Achieve Luminous, Even-Toned Skin</h2>
                  <p><strong>Price:</strong> $70-90<br/><strong>Best for:</strong> Hyperpigmentation, dark spots, uneven skin tone, sun damage<br/><strong>Treatment duration:</strong> 60-90 minutes</p>
                  <h3>Why Brightening Treatments Are Essential in Guam</h3>
                  <p>The intense tropical sun in Guam can lead to various pigmentation issues, from sun spots to melasma. This therapeutic facial targets discoloration at multiple levels, revealing brighter, more uniform skin tone.</p>
                  <Image src="/services/whitening-kojic.jpg" alt="Brightening facial" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h4>Key Components of the Brightening Treatment</h4>
                  <ul>
                    <li>Gentle Exfoliation</li>
                    <li>Vitamin C Infusion</li>
                    <li>Niacinamide Application</li>
                    <li>Kojic Acid Treatment</li>
                    <li>Protective Barriers</li>
                  </ul>
                  <h4>Advanced Brightening Technologies</h4>
                  <ul>
                    <li>Professional-strength brightening masks</li>
                    <li>Ultrasonic product penetration</li>
                    <li>LED light therapy</li>
                    <li>Customized take-home products</li>
                  </ul>
                  <h4>Treatment Protocol</h4>
                  <ol>
                    <li>Skin Analysis</li>
                    <li>Gentle Cleansing</li>
                    <li>Mild Exfoliation</li>
                    <li>Brightening Peel</li>
                    <li>Neutralization</li>
                    <li>Intensive Serum Application</li>
                    <li>Hydrating Mask</li>
                    <li>Sun Protection</li>
                  </ol>
                  <h4>Results Timeline</h4>
                  <ul>
                    <li>Immediate: Brighter, more radiant complexion</li>
                    <li>2-4 weeks: Noticeable lightening of dark spots</li>
                    <li>2-3 months: Significant improvement in overall skin tone</li>
                    <li>Ongoing: Continued improvement with maintenance</li>
                  </ul>
                  <Image src="/services/Placenta-Collagen Facial.jpg" alt="Even skin tone" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h2>3. LED Photo-Rejuvenation Facial: Harnessing Light for Skin Transformation</h2>
                  <p><strong>Price:</strong> $80-100<br/><strong>Best for:</strong> Anti-aging, acne, inflammation, overall skin health<br/><strong>Treatment duration:</strong> 45-60 minutes</p>
                  <h3>The Science of LED Therapy</h3>
                  <p>LED (Light Emitting Diode) therapy represents one of the most innovative therapeutic facials in Guam. This NASA-developed technology uses specific wavelengths of light to trigger natural cellular processes, promoting healing and rejuvenation without heat or damage.</p>
                  <Image src="/services/Balinese Body Massage.jpg" alt="LED facial" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h4>Different LED Colors and Their Benefits</h4>
                  <ul>
                    <li><strong>Red Light:</strong> Stimulates collagen, reduces wrinkles, improves elasticity</li>
                    <li><strong>Blue Light:</strong> Kills acne bacteria, reduces oil, calms inflammation</li>
                    <li><strong>Green Light:</strong> Reduces pigmentation, calms skin, improves complexion</li>
                    <li><strong>Yellow Light:</strong> Improves lymphatic drainage, reduces puffiness, detoxifies</li>
                  </ul>
                  <h4>The LED Facial Experience at Dermal</h4>
                  <ol>
                    <li>Thorough Cleansing</li>
                    <li>Gentle Exfoliation</li>
                    <li>Targeted Serum Application</li>
                    <li>LED Treatment</li>
                    <li>Hydrating Mask</li>
                    <li>Protective Finishing</li>
                  </ol>
                  <h4>Why LED Facials Are Perfect for Guam</h4>
                  <ul>
                    <li>No downtime in sunny climate</li>
                    <li>Safe for all skin types and tones</li>
                    <li>Addresses multiple concerns simultaneously</li>
                    <li>Non-invasive with cumulative benefits</li>
                    <li>Complements other facial treatments</li>
                  </ul>
                  <Image src="/services/Deep Tissue Body Massage.jpg" alt="LED facial benefits" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h2>4. Glassy Skin Facial: Achieving the Coveted Korean Glass Skin Look</h2>
                  <p><strong>Price:</strong> $90-110<br/><strong>Best for:</strong> Dull skin, dehydration, texture issues, those seeking luminous skin<br/><strong>Treatment duration:</strong> 75-90 minutes</p>
                  <h3>The Glass Skin Phenomenon</h3>
                  <p>The Korean beauty trend of &quot;glass skin&quot; – skin so smooth and luminous it resembles glass – has taken the skincare world by storm. This therapeutic facial in Guam brings this coveted look to island residents through intensive hydration and skin refinement techniques.</p>
                  <Image src="/services/Stretching Body Massage.jpg" alt="Glassy skin facial" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h4>Core Elements of the Glassy Skin Treatment</h4>

                  <ul>
                    <li>Multi-Layer Hydration</li>
                    <li>Gentle Resurfacing</li>
                    <li>Barrier Repair</li>
                    <li>Luminosity Boost</li>
                  </ul>
                  <h4>The Seven-Step Glass Skin Protocol</h4>
                  <ol>
                    <li>Double Cleansing Method</li>
                    <li>Gentle Chemical Exfoliation</li>
                    <li>Hydrating Toner Layers</li>
                    <li>Sheet Mask Therapy</li>
                    <li>Facial Massage</li>
                    <li>Serum Cocktailing</li>
                    <li>Occlusive Seal</li>
                  </ol>
                  <h4>Maintaining Glass Skin in Guam&apos;s Climate</h4>
                  <ul>
                    <li>Morning hydration routine before sun exposure</li>
                    <li>Midday misting to maintain moisture</li>
                    <li>Evening repair focus</li>
                    <li>Weekly at-home maintenance treatments</li>
                  </ul>
                  <h4>Expected Outcomes</h4>
                  <ul>
                    <li>Immediate plumpness and glow</li>
                    <li>Significantly improved texture</li>
                    <li>Pore refinement</li>
                    <li>Translucent, healthy appearance</li>
                    <li>Long-lasting hydration</li>
                  </ul>
                  <Image src="/services/Placenta-Collagen Facial.jpg" alt="Glassy skin results" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h2>5. Obagi Infusion Facial: Medical-Grade Transformation</h2>
                  <p><strong>Price:</strong> $100-130<br/><strong>Best for:</strong> Advanced aging, severe sun damage, stubborn pigmentation, overall skin renovation<br/><strong>Treatment duration:</strong> 60-75 minutes</p>
                  <h3>The Power of Medical-Grade Skincare</h3>
                  <p>The Obagi Infusion Facial represents the pinnacle of therapeutic facials in Guam, utilizing medical-grade products and protocols typically found in dermatology offices. This treatment is ideal for those seeking dramatic skin transformation.</p>
                  <Image src="/services/Balinese Body Massage Basic Facial.jpg" alt="Obagi facial" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h4>What Makes Obagi Different</h4>
                  <ul>
                    <li>Pharmaceutical-Grade Ingredients</li>
                    <li>Prescription-Strength Formulas</li>
                    <li>Systematic Approach</li>
                    <li>Clinical Results</li>
                  </ul>
                  <h4>The Obagi Treatment Experience</h4>
                  <ol>
                    <li>Professional Skin Analysis</li>
                    <li>Preparation Phase</li>
                    <li>Obagi Peel Application</li>
                    <li>Neutralization</li>
                    <li>Infusion Process</li>
                    <li>Recovery Support</li>
                    <li>Home Care Planning</li>
                  </ol>
                  <h4>Conditions Addressed</h4>
                  <ul>
                    <li>Deep wrinkles and fine lines</li>
                    <li>Severe sun damage and age spots</li>
                    <li>Melasma and stubborn pigmentation</li>
                    <li>Rough texture and enlarged pores</li>
                    <li>Loss of elasticity and firmness</li>
                  </ul>
                  <h4>Investment in Your Skin&apos;s Future</h4>
                  <ul>
                    <li>Professional-grade transformation</li>
                    <li>Long-lasting improvements</li>
                    <li>Reduced need for more invasive procedures</li>
                    <li>Confidence in proven results</li>
                  </ul>
                  <Image src="/services/Deep Cleansing Facial (for Men & Women).jpg" alt="Obagi facial results" width={800} height={400} className="rounded-xl shadow my-8 mx-auto" />
                  <h2>Choosing the Right Therapeutic Facial for You</h2>
                  <ul>
                    <li><strong>Acne/Oiliness:</strong> Anti-Acne Facial</li>
                    <li><strong>Dark spots/Uneven tone:</strong> Whitening Facial</li>
                    <li><strong>Multiple concerns:</strong> LED Photo-Rejuvenation</li>
                    <li><strong>Dullness/Dehydration:</strong> Glassy Skin Facial</li>
                    <li><strong>Advanced aging/Damage:</strong> Obagi Infusion</li>
                  </ul>
                  <h4>Your Skin Sensitivity</h4>
                  <ul>
                    <li>Sensitive: Start with LED or Glassy Skin</li>
                    <li>Normal: Any treatment suitable</li>
                    <li>Resilient: Can handle stronger treatments like Obagi</li>
                  </ul>
                  <h4>Your Timeline</h4>
                  <ul>
                    <li>Event in 1 week: Glassy Skin or LED</li>
                    <li>Gradual improvement: Any treatment with series</li>
                    <li>Dramatic change: Obagi with commitment to process</li>
                  </ul>
                  <h4>Your Budget</h4>
                  <ul>
                    <li>Entry-level: Anti-Acne Facial ($60)</li>
                    <li>Mid-range: Whitening or LED ($70-100)</li>
                    <li>Premium: Glassy Skin or Obagi ($90-130)</li>
                  </ul>
                  <h2>Maximizing Your Therapeutic Facial Results</h2>
                  <h4>Pre-Treatment Care</h4>
                  <ul>
                    <li>Avoid sun exposure 48 hours before</li>
                    <li>Discontinue retinoids 3-5 days prior</li>
                    <li>Come with clean skin</li>
                    <li>Communicate all skin concerns</li>
                  </ul>
                  <h4>Post-Treatment Protocol</h4>
                  <ul>
                    <li>Follow all aftercare instructions precisely</li>
                    <li>Use recommended products consistently</li>
                    <li>Never skip SPF (crucial in Guam)</li>
                    <li>Stay hydrated inside and out</li>
                  </ul>
                  <h4>Creating a Treatment Plan</h4>
                  <ul>
                    <li>Initial series for correction</li>
                    <li>Maintenance schedule</li>
                    <li>Seasonal adjustments</li>
                    <li>Combination treatments for enhanced results</li>
                  </ul>
                  <h2>Why Dermal Skin Care Spa for Therapeutic Facials</h2>
                  <ul>
                    <li>Trained Professionals</li>
                    <li>Quality Products</li>
                    <li>Customized Approach</li>
                    <li>Results Tracking</li>
                    <li>Comprehensive Care</li>
                  </ul>
                  <h2>Book Your Therapeutic Facial Today</h2>
                  <p>Don&apos;t let skin concerns hold you back from feeling confident and radiant. Whether you&apos;re battling acne, fighting pigmentation, or seeking that glass skin glow, Dermal Skin Care Spa has the perfect therapeutic facial for you.</p>
                  <p>Take the first step toward transformed skin:</p>
                  <ul>
                    <li>Visit <a href="https://www.dermalskincareandspaguam.com" className="text-[#a9445b] underline" target="_blank" rel="noopener noreferrer">www.dermalskincareandspaguam.com</a></li>
                    <li>Call for a consultation</li>
                    <li>Message via WhatsApp to discuss your concerns</li>
                  </ul>
                  <p>Your journey to healthy, beautiful skin begins with choosing the right therapeutic facial. Let the experts at Dermal Skin Care Spa guide you to the treatment that will deliver the results you&apos;ve been seeking.</p>
                  <p>Serving clients throughout Guam from Tumon to Hagåtña, Dermal Skin Care Spa combines advanced technology, professional expertise, and personalized care to deliver exceptional therapeutic facial results. Discover why we&apos;re the trusted choice for therapeutic skincare in Guam.</p>
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