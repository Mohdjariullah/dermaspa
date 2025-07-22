import fs from "fs";
import path from "path";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Blog | Dermal Skin Care Spa",
  description: "Browse the latest articles, tips, and guides for glowing skin and wellness from Dermal Skin Care Spa in Guam.",
  openGraph: {
    title: "Blog | Dermal Skin Care Spa",
    description: "Browse the latest articles, tips, and guides for glowing skin and wellness from Dermal Skin Care Spa in Guam.",
    url: "https://dermalskincareandspaguam.com/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://dermalskincareandspaguam.com/blog"
  }
};

type BlogPost = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

function getBlogSlugs() {
  const blogDir = path.join(process.cwd(), "app/blog");
  return fs
    .readdirSync(blogDir, { withFileTypes: true })
    .filter(
      (dirent) =>
        dirent.isDirectory() &&
        fs.existsSync(path.join(blogDir, dirent.name, "page.tsx"))
    )
    .map((dirent) => dirent.name);
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const slugs = getBlogSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const mod = await import(`./${slug}/page`);
      return {
        slug,
        title: mod.metadata?.title || slug,
        description: mod.metadata?.description || "",
        image:
          mod.metadata?.openGraph?.images?.[0]?.url ||
          "/services/Deep Cleansing Facial (for Men & Women).jpg",
      };
    })
  );
  return posts.sort((a, b) => a.title.localeCompare(b.title));
}

function RecentPosts({ posts }: { posts: BlogPost[] }) {
  return (
    <aside className="hidden lg:block w-full max-w-xs pl-8">
      <div className="bg-[#f8e9ef] rounded-xl shadow p-6 mb-8">
        <h3 className="text-lg font-bold text-[#a9445b] mb-4">Recent Posts</h3>
        <ul className="space-y-3">
          {posts.slice(0, 6).map((post: BlogPost) => (
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

export default async function BlogIndex() {
  const posts = await getBlogPosts();
  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen py-10 px-2 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Main Blog List */}
          <main className="flex-1 max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#a9445b] mb-8 text-center">Our Blog</h1>
            <div className="flex flex-col gap-14">
              {posts.map((post: BlogPost) => (
                <article key={post.slug} className="bg-white rounded-2xl shadow border border-pink-100 overflow-hidden">
                  <Link href={`/blog/${post.slug}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover object-center mb-0"
                      loading="lazy"
                    />
                  </Link>
                  <div className="p-7 pb-6">
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-2xl font-bold text-[#a9445b] mb-2 hover:underline leading-tight">{post.title}</h2>
                    </Link>
                    <p className="text-gray-700 text-base mb-4 line-clamp-3">{post.description}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-block bg-[#a9445b] text-white px-6 py-2 rounded-full font-semibold text-base shadow hover:bg-[#fbb6c1] hover:text-[#a9445b] transition"
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </main>
          {/* Sidebar */}
          <RecentPosts posts={posts} />
        </div>
      </div>
      <Footer />
    </>
  );
}