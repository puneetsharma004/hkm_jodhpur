import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All Photos', icon: '🖼️' },
    { id: 'festivals', name: 'Festivals & Celebrations', icon: '🎉' },
    { id: 'worship', name: 'Daily Worship & Aartis', icon: '🕉️' },
    { id: 'architecture', name: 'Temple Architecture', icon: '🏛️' },
    { id: 'community', name: 'Community Services', icon: '🤝' },
    { id: 'workshops', name: 'Workshops & Classes', icon: '📚' }
  ];

  const photos = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      category: 'festivals',
      title: 'Janmashtami Celebration 2024',
      description: 'Grand celebration of Lord Krishna\'s birth',
      date: 'August 2024'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&h=300&fit=crop',
      category: 'worship',
      title: 'Morning Mangala Aarti',
      description: 'Daily morning prayers and worship',
      date: 'Daily 5:00 AM'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      category: 'architecture',
      title: 'Temple Main Hall',
      description: 'Beautiful Marwad style architecture',
      date: '2023'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1583211892916-5e38c6ee3297?w=400&h=300&fit=crop',
      category: 'festivals',
      title: 'Holi Festival Colors',
      description: 'Joyful celebration with natural colors',
      date: 'March 2024'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?w=400&h=300&fit=crop',
      category: 'community',
      title: 'Prasadam Distribution',
      description: 'Serving the community with love',
      date: 'Weekly Service'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1605538883669-825200433431?w=400&h=300&fit=crop',
      category: 'festivals',
      title: 'Diwali Decorations',
      description: 'Festival of lights celebration',
      date: 'November 2023'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1582555172866-f73bb12ba8c6?w=400&h=300&fit=crop',
      category: 'worship',
      title: 'Evening Sandhya Aarti',
      description: 'Beautiful evening lamp ceremony',
      date: 'Daily 7:00 PM'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1571896848203-97f5ce0b9e9e?w=400&h=300&fit=crop',
      category: 'workshops',
      title: 'Bhagavad Gita Class',
      description: 'Weekly spiritual learning sessions',
      date: 'Every Sunday'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1574401572222-9e4c2b6b5e4c?w=400&h=300&fit=crop',
      category: 'architecture',
      title: 'Sacred Sanctum',
      description: 'Inner temple deity chamber',
      date: '2023'
    }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-600 rounded-full opacity-15 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-200">📷</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-800">🎨</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-1200">📸</div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
            <span className="mx-4 text-4xl animate-pulse">📷</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            Photo Gallery
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Explore the divine moments and sacred experiences captured through our lens
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-saffron to-gold text-black'
                    : 'bg-gradient-to-br from-gray-900/80 to-black/80 text-gray-300 border border-purple-400 border-opacity-30 hover:border-saffron hover:border-opacity-50'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Photos Grid */}
        <motion.div 
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImage(photo)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-purple-400 border-opacity-30 group-hover:border-saffron group-hover:border-opacity-60 transition-all duration-300">
                <img 
                  src={photo.src} 
                  alt={photo.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-sm mb-1">{photo.title}</h3>
                    <p className="text-gray-300 text-xs mb-2">{photo.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-saffron text-xs font-semibold">{photo.date}</span>
                      <div className="bg-saffron text-black p-2 rounded-full">
                        <span className="text-sm">🔍</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                  {categories.find(cat => cat.id === photo.category)?.name}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Photos
          </motion.button>
        </motion.div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-4xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                <h3 className="text-white font-bold text-xl mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300 mb-2">{selectedImage.description}</p>
                <span className="text-saffron font-semibold">{selectedImage.date}</span>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
