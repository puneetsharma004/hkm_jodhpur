import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function FeaturedMoments() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredMoments = [
    {
      id: 1,
      title: 'Janmashtami Midnight Celebration',
      description: 'The most sacred moment when Lord Krishna appeared at midnight, celebrated with thousands of devotees in divine ecstasy.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=500&fit=crop',
      date: 'August 2024',
      category: 'Festival Highlight',
      stats: { views: '25K', likes: '2.1K', shares: '850' }
    },
    {
      id: 2,
      title: 'Temple Inauguration Ceremony',
      description: 'Historic moment of temple consecration with sacred rituals performed by senior spiritual leaders from ISKCON.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop',
      date: 'December 2020',
      category: 'Historic Moment',
      stats: { views: '45K', likes: '3.8K', shares: '1.2K' }
    },
    {
      id: 3,
      title: 'Community Seva During Pandemic',
      description: 'Heartwarming moments of serving the community during challenging times, distributing food and hope to thousands.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop',
      date: 'March 2021',
      category: 'Community Service',
      stats: { views: '38K', likes: '4.2K', shares: '2.1K' }
    },
    {
      id: 4,
      title: 'Radhashtami Divine Decoration',
      description: 'Breathtaking flower decorations created by devotees to honor Srimati Radharani on her appearance day.',
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=500&fit=crop',
      date: 'September 2024',
      category: 'Divine Art',
      stats: { views: '18K', likes: '1.9K', shares: '640' }
    },
    {
      id: 5,
      title: 'Holi Festival Joy',
      description: 'Pure joy and spiritual celebration as devotees celebrate the festival of colors in Krishna consciousness.',
      image: 'https://images.unsplash.com/photo-1583211892916-5e38c6ee3297?w=800&h=500&fit=crop',
      date: 'March 2024',
      category: 'Festival Joy',
      stats: { views: '32K', likes: '2.8K', shares: '1.1K' }
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredMoments.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredMoments.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredMoments.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredMoments.length) % featuredMoments.length);
  };

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-600">⭐</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-1100">🌟</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-400">✨</div>
        <div className="absolute bottom-16 right-16 text-4xl text-gold animate-pulse delay-900">💫</div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
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
            <span className="mx-4 text-4xl animate-pulse">⭐</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            Featured Moments
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Witness the most iconic and divine moments that define our temple's spiritual journey
          </p>
        </motion.div>

        {/* Featured Carousel */}
        <div className="relative">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl shadow-2xl border border-saffron border-opacity-30"
          >
            {/* Main Image */}
            <div className="relative h-96 md:h-[500px]">
              <img
                src={featuredMoments[currentSlide].image}
                alt={featuredMoments[currentSlide].title}
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="max-w-3xl">
                  {/* Category Badge */}
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-block bg-saffron text-black text-sm font-bold px-3 py-1 rounded-full mb-4"
                  >
                    {featuredMoments[currentSlide].category}
                  </motion.span>
                  
                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-4"
                  >
                    {featuredMoments[currentSlide].title}
                  </motion.h3>
                  
                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-gray-200 text-lg leading-relaxed mb-6 max-w-2xl"
                  >
                    {featuredMoments[currentSlide].description}
                  </motion.p>
                  
                  {/* Stats and Date */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-wrap items-center gap-6 text-sm text-gray-300"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <span>👁️</span>
                        <span>{featuredMoments[currentSlide].stats.views}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <span>❤️</span>
                        <span>{featuredMoments[currentSlide].stats.likes}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <span>📤</span>
                        <span>{featuredMoments[currentSlide].stats.shares}</span>
                      </span>
                    </div>
                    <span className="text-gold font-semibold">{featuredMoments[currentSlide].date}</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-saffron hover:text-black transition-all duration-300 backdrop-blur-sm"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-saffron hover:text-black transition-all duration-300 backdrop-blur-sm"
          >
            →
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {featuredMoments.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-saffron scale-125' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8"
        >
          {featuredMoments.map((moment, index) => (
            <motion.button
              key={moment.id}
              onClick={() => setCurrentSlide(index)}
              className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                index === currentSlide 
                  ? 'ring-2 ring-saffron scale-105' 
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
              whileHover={{ y: -5 }}
            >
              <img
                src={moment.image}
                alt={moment.title}
                className="w-full h-20 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-1 left-1 right-1">
                <p className="text-white text-xs font-semibold truncate">
                  {moment.title}
                </p>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-saffron via-orange-500 to-gold text-black font-bold rounded-full shadow-xl hover:shadow-saffron/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore More in Our Full Gallery
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
