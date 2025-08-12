import { motion } from 'framer-motion';

export default function MapAndDirections() {
  const mapFeatures = [
    { feature: 'Free Parking Available', icon: '🚗' },
    { feature: 'Wheelchair Accessible', icon: '♿' },
    { feature: 'Public Transport Nearby', icon: '🚌' },
    { feature: 'Visitor Reception', icon: '🏪' }
  ];

  const landmarks = [
    { name: 'Blue City Mall', distance: '50m', direction: 'East' },
    { name: 'City Hospital', distance: '100m', direction: 'West' },
    { name: 'Jodhpur Railway Station', distance: '5 km', direction: 'South' },
    { name: 'Mehrangarh Fort', distance: '8 km', direction: 'North' }
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-600 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-600">🗺️</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-1100">📍</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-400">🧭</div>
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
            <span className="mx-4 text-4xl animate-pulse">🗺️</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            Find Us on Map
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Located in the heart of Jodhpur, our temple is easily accessible from all major locations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl overflow-hidden border border-purple-400 border-opacity-30 backdrop-blur-xl">
              {/* Map Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-saffron/20 to-gold/20 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-white font-semibold text-xl">Interactive Map</p>
                  <p className="text-gray-300 text-sm mt-2">Google Maps Loading...</p>
                </div>
                
                {/* Map Controls */}
                <div className="absolute top-4 right-4 space-y-2">
                  <motion.button 
                    className="bg-white/90 p-3 rounded-lg shadow-lg hover:bg-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-lg">🔍</span>
                  </motion.button>
                  <motion.button 
                    className="bg-white/90 p-3 rounded-lg shadow-lg hover:bg-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-lg">📍</span>
                  </motion.button>
                </div>

                {/* Location Pin */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="text-4xl">📍</div>
                </motion.div>
              </div>

              {/* Map Info Bar */}
              <div className="p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-white text-lg">Hare Krishna Marwad Mandir</h3>
                    <p className="text-gray-400 text-sm">Sector 12, Near Blue City Mall, Jodhpur</p>
                  </div>
                  <div className="flex space-x-3">
                    <motion.button
                      className="px-4 py-2 bg-gradient-to-r from-saffron to-gold text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Directions
                    </motion.button>
                    <motion.button
                      className="px-4 py-2 border border-saffron text-saffron rounded-lg hover:bg-saffron hover:text-black transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Share Location
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {mapFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-lg p-3 text-center border border-gold border-opacity-20"
                >
                  <div className="text-2xl mb-1">{feature.icon}</div>
                  <div className="text-gray-300 text-xs">{feature.feature}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Directions and Landmarks */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* GPS Coordinates */}
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl p-6 border border-purple-400 border-opacity-30 backdrop-blur-xl">
              <h3 className="font-bold text-saffron mb-4">📍 GPS Coordinates</h3>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-600">
                <div className="text-white font-mono text-lg text-center">
                  26.2863° N, 73.0392° E
                </div>
                <motion.button
                  className="w-full mt-3 px-4 py-2 bg-saffron text-black rounded-lg font-semibold hover:bg-gold transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Copy Coordinates
                </motion.button>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl p-6 border border-purple-400 border-opacity-30 backdrop-blur-xl">
              <h3 className="font-bold text-gold mb-4">🏛️ Nearby Landmarks</h3>
              <div className="space-y-3">
                {landmarks.map((landmark, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-3 bg-purple-900/30 rounded-lg hover:bg-purple-900/50 transition-all duration-300"
                  >
                    <div>
                      <div className="text-white font-semibold text-sm">{landmark.name}</div>
                      <div className="text-gray-400 text-xs">{landmark.direction}</div>
                    </div>
                    <div className="text-saffron font-bold text-sm">{landmark.distance}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Transport Options */}
            <div className="bg-gradient-to-r from-saffron/10 to-gold/10 rounded-xl p-6 border border-saffron border-opacity-20">
              <h3 className="font-bold text-saffron mb-4">🚗 How to Reach</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <span>🚗</span>
                  <span className="text-gray-300">By Car: Free parking available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🚌</span>
                  <span className="text-gray-300">By Bus: City Bus Route 12 & 7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🛺</span>
                  <span className="text-gray-300">By Auto: ₹50-100 from station</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📱</span>
                  <span className="text-gray-300">Ola/Uber: Available 24/7</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
