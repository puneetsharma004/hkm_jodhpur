import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Articles', icon: '📚', count: 250 },
    { id: 'teachings', name: 'Spiritual Teachings', icon: '🕉️', count: 85 },
    { id: 'festivals', name: 'Festivals', icon: '🎉', count: 45 },
    { id: 'history', name: 'Temple History', icon: '🏛️', count: 32 },
    { id: 'community', name: 'Community Stories', icon: '🤝', count: 58 },
    { id: 'announcements', name: 'Announcements', icon: '📢', count: 25 },
    { id: 'philosophy', name: 'Philosophy', icon: '💭', count: 67 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <h3 className="text-xl font-bold text-white mb-6">Browse by Category</h3>
      
      {/* Desktop Categories */}
      <div className="hidden md:flex flex-wrap gap-3 mb-6">
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-saffron to-gold text-black'
                : 'bg-gray-900/80 text-gray-300 border border-purple-400 border-opacity-30 hover:border-saffron hover:border-opacity-50'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{category.icon}</span>
            <span>{category.name}</span>
            <span className="bg-black/20 px-2 py-0.5 rounded-full text-xs">
              {category.count}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Mobile Categories Dropdown */}
      <div className="md:hidden">
        <select
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
          className="w-full px-4 py-3 bg-gray-900/80 border border-purple-400 border-opacity-30 rounded-lg text-white focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all duration-300"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id} className="bg-gray-900">
              {category.icon} {category.name} ({category.count})
            </option>
          ))}
        </select>
      </div>

      {/* Active Category Info */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <p className="text-gray-400 text-sm">
          Showing {categories.find(cat => cat.id === activeCategory)?.count} articles 
          {activeCategory === 'all' ? '' : ` in ${categories.find(cat => cat.id === activeCategory)?.name}`}
        </p>
      </motion.div>
    </motion.div>
  );
}
