import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ArticlesGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  const articles = [
    {
      id: 1,
      title: 'Understanding the Bhagavad Gita: Chapter 2 Insights',
      excerpt: 'Explore the profound teachings of Krishna about the eternal soul and the nature of reality...',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop',
      author: 'Pandit Raghunath Das',
      date: '2024-08-20',
      category: 'Spiritual Teachings',
      readTime: '12 min read',
      tags: ['Bhagavad Gita', 'Philosophy', 'Soul']
    },
    {
      id: 2,
      title: 'Holi 2024: A Celebration of Divine Love',
      excerpt: 'Witness the joyous celebration of colors at our temple and learn about its spiritual significance...',
      image: 'https://images.unsplash.com/photo-1583211892916-5e38c6ee3297?w=400&h=250&fit=crop',
      author: 'Sister Radha Priya',
      date: '2024-03-15',
      category: 'Festivals',
      readTime: '6 min read',
      tags: ['Holi', 'Festivals', 'Community']
    },
    {
      id: 3,
      title: 'The History of Hare Krishna Marwad Mandir',
      excerpt: 'Discover the inspiring journey of how our temple was established and grew into a spiritual center...',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
      author: 'Historian Govind Das',
      date: '2024-07-10',
      category: 'Temple History',
      readTime: '15 min read',
      tags: ['History', 'Temple', 'Jodhpur']
    },
    {
      id: 4,
      title: 'Community Kitchen: Serving with Love',
      excerpt: 'Behind the scenes of our daily prasadam distribution and the volunteers who make it possible...',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop',
      author: 'Krishna Devi',
      date: '2024-08-05',
      category: 'Community Stories',
      readTime: '8 min read',
      tags: ['Community', 'Service', 'Prasadam']
    },
    {
      id: 5,
      title: 'Morning Meditation: Starting Your Day with Krishna',
      excerpt: 'Learn the benefits of morning meditation and how to establish a daily spiritual practice...',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68e71?w=400&h=250&fit=crop',
      author: 'Yoga Acharya Krishnan',
      date: '2024-08-12',
      category: 'Spiritual Teachings',
      readTime: '10 min read',
      tags: ['Meditation', 'Daily Practice', 'Spirituality']
    },
    {
      id: 6,
      title: 'Rath Yatra 2024: Lord Jagannath\'s Journey',
      excerpt: 'Experience the grandeur of our annual chariot festival and its deep spiritual meaning...',
      image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?w=400&h=250&fit=crop',
      author: 'Festival Coordinator',
      date: '2024-06-20',
      category: 'Festivals',
      readTime: '9 min read',
      tags: ['Rath Yatra', 'Jagannath', 'Procession']
    },
    {
      id: 7,
      title: 'The Science of Kirtan: Music for the Soul',
      excerpt: 'Understand how devotional singing affects consciousness and promotes spiritual healing...',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop',
      author: 'Musician Govind Das',
      date: '2024-07-25',
      category: 'Spiritual Teachings',
      readTime: '11 min read',
      tags: ['Kirtan', 'Music', 'Consciousness']
    },
    {
      id: 8,
      title: 'New Youth Program Launch Announcement',
      excerpt: 'Exciting new spiritual programs designed specifically for young devotees and seekers...',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop',
      author: 'Youth Coordinator',
      date: '2024-08-18',
      category: 'Announcements',
      readTime: '5 min read',
      tags: ['Youth', 'Programs', 'Announcement']
    },
    {
      id: 9,
      title: 'The Philosophy of Karma: Action and Consequence',
      excerpt: 'Dive deep into the Vedic understanding of karma and how it shapes our spiritual journey...',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
      author: 'Philosophy Teacher',
      date: '2024-08-08',
      category: 'Philosophy',
      readTime: '14 min read',
      tags: ['Karma', 'Philosophy', 'Vedic']
    }
  ];

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const currentArticles = articles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const getCategoryColor = (category) => {
    const colors = {
      'Spiritual Teachings': 'bg-purple-600',
      'Festivals': 'bg-orange-600',
      'Temple History': 'bg-blue-600',
      'Community Stories': 'bg-green-600',
      'Announcements': 'bg-red-600',
      'Philosophy': 'bg-indigo-600'
    };
    return colors[category] || 'bg-gray-600';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {currentArticles.map((article, index) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl shadow-2xl overflow-hidden border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-50 transition-all duration-300 group"
          >
            {/* Article Image */}
            <div className="relative overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Category Badge */}
              <div className={`absolute top-3 left-3 ${getCategoryColor(article.category)} text-white text-xs font-bold px-2 py-1 rounded-full`}>
                {article.category}
              </div>
              
              {/* Read Time */}
              <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                {article.readTime}
              </div>
            </div>

            {/* Article Content */}
            <div className="p-6">
              <div className="flex items-center space-x-4 text-xs text-gray-400 mb-3">
                <span className="flex items-center space-x-1">
                  <span>👤</span>
                  <span>{article.author}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span>📅</span>
                  <span>{new Date(article.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric' 
                  })}</span>
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-saffron transition-colors duration-300 leading-tight">
                {article.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                {article.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {article.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-purple-900/30 text-purple-200 px-2 py-0.5 rounded text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Read More Link */}
              <motion.button
                className="text-saffron font-semibold text-sm hover:text-gold transition-colors duration-300 flex items-center space-x-1 group"
                whileHover={{ x: 5 }}
              >
                <span>Read More</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </motion.button>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Pagination */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex justify-center items-center space-x-4"
      >
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-900/80 text-gray-300 rounded-lg border border-purple-400 border-opacity-30 disabled:opacity-50 disabled:cursor-not-allowed hover:border-saffron hover:border-opacity-50 transition-all duration-300"
        >
          ← Previous
        </button>

        <div className="flex space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${
                currentPage === index + 1
                  ? 'bg-gradient-to-r from-saffron to-gold text-black'
                  : 'bg-gray-900/80 text-gray-300 border border-purple-400 border-opacity-30 hover:border-saffron hover:border-opacity-50'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-900/80 text-gray-300 rounded-lg border border-purple-400 border-opacity-30 disabled:opacity-50 disabled:cursor-not-allowed hover:border-saffron hover:border-opacity-50 transition-all duration-300"
        >
          Next →
        </button>
      </motion.div>
    </motion.div>
  );
}
