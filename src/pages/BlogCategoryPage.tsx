import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { PageLoader } from '@/components/common/PageLoader';
import { Footer } from '@/components/layout/Footer';
import { FinalCTA } from '@/sections/home/FinalCTA';
import { BlogCard } from '@/pages/BlogPage';
import { getPublicPostsByCategory } from '@/lib/supabaseBlog';
import type { PublicBlogPost } from '@/types/supabaseBlog';

export function BlogCategoryPage() {
  const { slug = '' } = useParams();
  const [posts, setPosts] = useState<PublicBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadedSlug, setLoadedSlug] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    setLoading(true);
    setError('');
    getPublicPostsByCategory(slug)
      .then((data) => {
        if (!active) return;

        setPosts(data);
        const category = data[0]?.blog_categories;
        document.title = `${category?.name ?? 'Blog Category'} Articles | Laybrotech`;
        setMeta('meta[name="description"]', 'name', 'description', category?.description || `Explore ${category?.name ?? 'Laybrotech'} articles and insights from Laybrotech.`);
      })
      .catch(() => {
        if (!active) return;

        setPosts([]);
        setError('Category articles could not be loaded right now.');
      })
      .finally(() => {
        if (active) {
          setLoadedSlug(slug);
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [slug]);

  const category = useMemo(() => posts[0]?.blog_categories ?? null, [posts]);
  const heading = category?.name ?? titleFromSlug(slug);

  if (loading || loadedSlug !== slug) return <PageLoader />;

  return (
    <>
      <section className="min-h-[100vh] bg-white px-5 py-16 sm:px-6 sm:py-20 lg:py-24" aria-labelledby="category-heading">
        <div className="mx-auto w-full max-w-container">
          <Link className="text-sm font-bold text-[#f25a05] transition-colors hover:text-[#d94f04]" to="/blog">Back to Blog</Link>
          <p className="type-eyebrow mt-8">Category</p>
          <h1 id="category-heading" className="mt-3 text-[clamp(2.3rem,5vw,3.5rem)] font-semibold leading-tight text-[#18181b]">{heading}</h1>
          {category?.description ? <p className="mt-4 max-w-[48rem] text-[1.05rem] leading-8 text-[#5f5a56]">{category.description}</p> : null}

          {error ? <p className="mt-8 rounded-[1rem] border border-[#ead8c8] bg-white px-4 py-3 text-sm font-bold text-[#5f5a56]">{error}</p> : posts.length ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {posts.map((post) => <BlogCard key={post.id} post={post} />)}
            </div>
          ) : <div className="mt-10 max-w-[42rem] rounded-[1rem] border border-[#e7e2dd] p-7"><h2 className="text-2xl font-semibold text-[#18181b]">No articles found.</h2><p className="mt-3 text-base leading-7 text-[#5f5a56]">Published articles in this category will appear here.</p></div>}
        </div>
      </section>
      <FinalCTA heading="Need Help With Your Digital Project?" primaryLabel="Start Your Project" primaryHref="/contact" secondaryLabel="Talk to Sales" secondaryHref="/contact" />
      <Footer />
    </>
  );
}

function titleFromSlug(slug: string) {
  return slug.split('-').filter(Boolean).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ') || 'Blog Category';
}

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}


