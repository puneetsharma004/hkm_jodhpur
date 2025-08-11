import { motion } from 'framer-motion';
import { useState } from 'react';

export default function VideoGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videoCategories = [
    { id: 'all', name: 'All Videos', icon: '🎥' },
    { id: 'festivals', name: 'Festival Highlights', icon: '🎉' },
    { id: 'kirtans', name: 'Kirtan Performances', icon: '🎵' },
    { id: 'teachings', name: 'Teachings & Lectures', icon: '📚' },
    { id: 'community', name: 'Community Outreach', icon: '🤝' }
  ];

  const videos = [
    {
      id: 1,
      title: 'Janmashtami 2024 Grand Celebration',
      description: 'Complete coverage of Lord Krishna\'s birth celebration with midnight aarti',
      thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '45:30',
      category: 'festivals',
      views: '15K',
      date: 'Aug 2024'
    },
    {
      id: 2,
      title: 'Morning Kirtan - Hare Krishna Mahamantra',
      description: 'Beautiful morning devotional singing session',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '25:15',
      category: 'kirtans',
      views: '8K',
      date: 'Sep 2024'
    },
    {
      id: 3,
      title: 'Bhagavad Gita Chapter 2 - Complete Lecture',
      description: 'In-depth explanation of Krishna\'s teachings on the soul',
      thumbnail: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '1:15:45',
      category: 'teachings',
      views: '12K',
      date: 'Sep 2024'
    },
    {
      id: 4,
      title: 'Holi Festival 2024 - Colors of Joy',
      description: 'Vibrant celebration of the festival of colors',
      thumbnail: 'https://images.unsplash.com/photo-1583211892916-5e38c6ee3297?w=400&h=300&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '32:20',
      category: 'festivals',
      views: '20K',
      date: 'Mar 2024'
    },
    {
      id: 5,
      title: 'Community Food Distribution Drive',
      description: 'Serving prasadam to the underprivileged community',
      thumbnail: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '18:10',
      category: 'community',
      views: '5K',
      date: 'Aug 2024'
    },
    {
      id: 6,
      title: 'Evening Sandhya Aarti - Complete Ceremony',
      description: 'Daily evening worship with lamp offerings',
      thumbnail: 'https://images.unsplash.com/photo-1582555172866-f73bb12ba8c6?w=400&h=300&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '28:45',
      category: 'festivals',
      views: '18K',
      date: 'Sep 2024'
    }
  ];

  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-orange-600 rounded-full opacity-15 blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1500"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-400">🎥</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-900">📹</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-1300">🎬</div>
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
            <span className="mx-4 text-4xl animate-pulse">🎥</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            Video Gallery
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Watch the divine moments, festivals, and spiritual teachings come alive through our videos
          </p>
        </motion.div>

        {/* Video Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {videoCategories.map((category, index) => (
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

        {/* Videos Grid */}
        <motion.div 
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl shadow-2xl overflow-hidden border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-50 transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              {/* Video Thumbnail */}
              <div className="relative overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-saffron rounded-full flex items-center justify-center text-black text-2xl glow-button">
                    ▶️
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                  {video.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-saffron text-black text-xs px-2 py-1 rounded-full font-semibold">
                  {videoCategories.find(cat => cat.id === video.category)?.name}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-saffron transition-colors duration-300">
                  {video.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                  {video.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <span>👁️</span>
                      <span>{video.views}</span>
                    </span>
                    <span>{video.date}</span>
                  </div>
                  <span className="text-saffron font-semibold">Watch Now →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Modal */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-4xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-saffron border-opacity-30">
                {/* Video Player */}
                <div className="aspect-video">
                  <iframe
                    src={selectedVideo.videoUrl}
                    title={selectedVideo.title}
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
                
                {/* Video Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{selectedVideo.title}</h3>
                  <p className="text-gray-300 mb-4">{selectedVideo.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <span>👁️</span>
                        <span>{selectedVideo.views} views</span>
                      </span>
                      <span>⏱️ {selectedVideo.duration}</span>
                    </div>
                    <span className="text-saffron">{selectedVideo.date}</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 bg-saffron text-black p-2 rounded-full hover:bg-gold transition-all duration-300"
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
