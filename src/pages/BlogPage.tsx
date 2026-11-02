import { useEffect, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

import { PageLoader } from '@/components/common/PageLoader';
import { Footer } from '@/components/layout/Footer';
import { FinalCTA } from '@/sections/home/FinalCTA';
import { calculateReadTime, formatDate, getPublicPosts } from '@/lib/supabaseBlog';
import blogHeroImage from '@/assets/images/blog-hero.webp';
import type { PublicBlogPost } from '@/types/supabaseBlog';

export function BlogPage() {
  const [posts, setPosts] = useState<PublicBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    setError('');
    getPublicPosts()
      .then((data) => {
        if (active) setPosts(data);
      })
      .catch(() => {
        if (active) setError('Blog articles could not be loaded right now.');
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  if (loading) return <PageLoader />;

  return (
    <>
      <section className="relative isolate min-h-[100vh] overflow-hidden bg-[#171717]" aria-labelledby="blog-page-heading">
        <img
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[68%_center]"
          src={blogHeroImage}
          alt="Laybrotech content team planning business technology articles in a modern office."
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,8,8,0.98)_0%,rgba(8,8,8,0.90)_46%,rgba(8,8,8,0.72)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(8,8,8,0.82)_0%,rgba(8,8,8,0.28)_52%,rgba(8,8,8,0.64)_100%)]" />

        <div className="mx-auto flex min-h-[100vh] w-full max-w-container items-center justify-center px-6 py-20 text-center sm:px-8 lg:px-16">
          <div className="mx-auto max-w-[48rem]">
            <p className="type-eyebrow">Blog</p>
            <h1 id="blog-page-heading" className="mt-5 text-[2.45rem] font-semibold leading-[1.08] text-[#fffaf5] sm:text-[3.35rem] lg:text-[4.15rem]">Blog</h1>
            <p className="mx-auto mt-6 max-w-[43rem] text-base leading-8 text-[#f1e8df] sm:text-lg">Insights, guides, and practical ideas for growing your business through technology.</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:py-24" aria-label="Blog articles">
        <div className="mx-auto w-full max-w-container">
          {error ? <p className="mb-8 rounded-[1rem] border border-[#ead8c8] bg-white px-4 py-3 text-sm font-bold text-[#5f5a56]">{error}</p> : posts.length ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {posts.map((post) => <BlogCard key={post.id} post={post} />)}
            </div>
          ) : <EmptyBlogState compact />}
        </div>
      </section>

      <FinalCTA heading="Need Help With Your Digital Project?" primaryLabel="Start Your Project" primaryHref="/contact" secondaryLabel="Talk to Sales" secondaryHref="/contact" />
      <Footer />
    </>
  );
}

export function BlogCard({ post }: { post: PublicBlogPost }) {
  const category = post.blog_categories;
  return (
    <article className="min-h-full">
      <Link className="group flex min-h-full cursor-pointer flex-col overflow-hidden rounded-[1.35rem] border border-[#e7e2dd] bg-white shadow-[0_14px_36px_rgb(24_24_27/0.05)] transition-colors duration-200 hover:border-[#f25a05]/35" to={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
        <span className="overflow-hidden bg-[#f7f7f6]"><img className="aspect-[4/3] w-full object-cover object-center transition duration-500 group-hover:scale-[1.018]" src={post.featured_image_url ?? ''} alt={post.featured_image_alt ?? ''} loading="lazy" decoding="async" /></span>
        <span className="flex flex-1 flex-col p-6 sm:p-7">
          <span className="text-xs font-bold uppercase tracking-normal text-[#f25a05]">{category?.name ?? 'Insights'}</span>
          <span className="mt-3 text-[1.35rem] font-semibold leading-tight text-[#18181b] transition-colors group-hover:text-[#f25a05]">{post.title}</span>
          <span className="mt-3 text-sm leading-6 text-[#5f5a56]">{post.excerpt}</span>
          <span className="mt-4 text-xs font-bold uppercase text-[#766e67]">{formatDate(post.published_at ?? post.scheduled_at)} - {calculateReadTime(post.content)} min read</span>
          <span className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-bold text-[#f25a05] transition-colors duration-smooth group-hover:text-[#d94f04]">Read Article<ArrowRight className="size-4 transition-transform duration-smooth group-hover:translate-x-1" aria-hidden="true" /></span>
        </span>
      </Link>
    </article>
  );
}

function EmptyBlogState({ compact = false }: { compact?: boolean }) {
  return <div className={'mx-auto max-w-[42rem] rounded-[1.35rem] border border-[#ead8c8] bg-white p-8 text-center shadow-[0_18px_45px_rgb(63_45_30/0.06)] ' + (compact ? 'mt-10' : 'my-20')}><Search className="mx-auto size-10 text-[#f25a05]" aria-hidden="true" /><h2 className="mt-4 text-2xl font-semibold text-[#18181b]">No published articles yet.</h2><p className="mt-3 text-base leading-7 text-[#5f5a56]">Published Laybrotech insights will appear here.</p></div>;
}



