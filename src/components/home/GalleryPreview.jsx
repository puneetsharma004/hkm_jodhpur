import { motion } from 'framer-motion';

export default function GalleryPreview() {
  const gallery = [
    '/images/gallery1.jpg',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg',
    '/images/gallery4.jpg'
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      {/* Animated Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-600 rounded-full opacity-15 blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1500"></div>
      </div>

      {/* Spiritual Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-12 text-5xl text-saffron animate-pulse delay-200">📸</div>
        <div className="absolute top-32 right-16 text-4xl text-gold animate-pulse delay-800">🎨</div>
        <div className="absolute bottom-32 left-16 text-6xl text-saffron animate-pulse delay-1200">🖼️</div>
        <div className="absolute bottom-16 right-12 text-4xl text-gold animate-pulse delay-400">✨</div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center items-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
            <span className="mx-4 text-4xl animate-pulse">📸</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-saffron to-gold bg-clip-text text-transparent mb-4">
            Temple Gallery
          </h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Glimpses of divine moments, festivals, and the spiritual beauty of our temple
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {gallery.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 2,
                transition: { duration: 0.3 }
              }}
              className="relative group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-purple-400 border-opacity-30 group-hover:border-saffron group-hover:border-opacity-60 transition-all duration-300">
                <img 
                  src={img} 
                  alt={`Gallery ${i+1}`} 
                  className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-saffron text-black p-3 rounded-full shadow-xl glow-button">
                    <span className="text-2xl">🔍</span>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl shadow-lg group-hover:shadow-saffron/30 group-hover:shadow-2xl transition-shadow duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* View Full Gallery Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="/gallery"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 153, 51, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-saffron via-orange-500 to-amber-400 text-black font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-saffron/50 transition-all duration-300 group glow-button"
          >
            <span className="mr-3">View Full Gallery</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-xl"
            >
              📸
            </motion.span>
            <motion.span
              className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
            >
              →
            </motion.span>
          </motion.a>

          {/* Additional Info */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-400 text-sm"
          >
            Discover more divine moments • Festival celebrations • Temple architecture
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto"
        >
          {[
            { number: '500+', label: 'Photos', icon: '📷' },
            { number: '50+', label: 'Events', icon: '🎭' },
            { number: '25+', label: 'Festivals', icon: '🎉' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + (i * 0.1) }}
              viewport={{ once: true }}
              className="text-center p-4 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-xl border border-gold border-opacity-20 backdrop-blur-sm"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-saffron glow">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-3 text-2xl filter drop-shadow-2xl">
            <span className="text-saffron glow animate-pulse">📸</span>
            <span className="text-gold glow animate-pulse delay-300">🎨</span>
            <span className="text-saffron glow animate-pulse delay-600">🖼️</span>
            <span className="text-gold glow animate-pulse delay-900">🎨</span>
            <span className="text-saffron glow animate-pulse delay-1200">📸</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
