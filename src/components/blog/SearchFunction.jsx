import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SearchFunction() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const searchSuggestions = [
    'Janmashtami celebration',
    'Bhagavad Gita teachings',
    'Temple history',
    'Community service',
    'Spiritual practices',
    'Festival stories'
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 2) {
      setIsSearching(true);
      // Simulate search
      setTimeout(() => {
        setSearchResults([
          { title: 'The Philosophy of Bhagavad Gita', category: 'Teachings' },
          { title: 'Janmashtami Celebrations 2024', category: 'Festivals' },
          { title: 'Community Kitchen Stories', category: 'Community' }
        ]);
        setIsSearching(false);
      }, 500);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <div className="relative">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search articles, teachings, stories..."
            className="w-full px-6 py-4 pl-12 bg-gray-900/80 border border-purple-400 border-opacity-30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all duration-300 backdrop-blur-xl"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            {isSearching ? (
              <div className="w-5 h-5 border-2 border-saffron border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <span className="text-xl">🔍</span>
            )}
          </div>
        </div>

        {/* Search Suggestions */}
        {searchQuery.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4"
          >
            <p className="text-gray-400 text-sm mb-3">Popular searches:</p>
            <div className="flex flex-wrap gap-2">
              {searchSuggestions.map((suggestion, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleSearch(suggestion)}
                  className="bg-purple-900/30 text-purple-200 px-3 py-1 rounded-full text-sm hover:bg-saffron hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {suggestion}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Search Results */}
        {searchResults.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 border border-purple-400 border-opacity-30 rounded-xl backdrop-blur-xl z-50 shadow-2xl"
          >
            {searchResults.map((result, index) => (
              <motion.div
                key={index}
                className="p-4 hover:bg-saffron/10 transition-colors duration-300 border-b border-gray-700 last:border-b-0 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-semibold">{result.title}</h4>
                    <p className="text-gray-400 text-sm">{result.category}</p>
                  </div>
                  <span className="text-saffron">→</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
