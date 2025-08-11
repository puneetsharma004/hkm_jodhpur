import { motion } from 'framer-motion';
import BlogPageHeader from '../components/blog/BlogPageHeader';
import FeaturedArticle from '../components/blog/FeaturedArticle';
import SearchFunction from '../components/blog/SearchFunction';
import CategoryFilter from '../components/blog/CategoryFilter';
import ArticlesGrid from '../components/blog/ArticlesGrid';
import BlogCallToAction from '../components/blog/BlogCallToAction';
import BlogSidebar from '../components/blog/BlogSidebar';

export default function Blog() {
  return (
    <div className="bg-black">
      <BlogPageHeader />
      <FeaturedArticle />
      <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 py-16">
        <div className="lg:col-span-3">
          <SearchFunction />
          <CategoryFilter />
          <ArticlesGrid />
        </div>
        <div className="lg:col-span-1">
          <BlogSidebar />
        </div>
      </div>
      <BlogCallToAction />
    </div>
  );
}
