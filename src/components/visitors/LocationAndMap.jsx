import { motion } from 'framer-motion';
import { useState } from 'react';

export default function LocationAndMap() {
  const [mapLoaded, setMapLoaded] = useState(false);

  const templeLocation = {
    address: 'Hare Krishna Marwar Mandir, Sector 12, Near Blue City Mall, Jodhpur, Rajasthan 342001, India',
    gpsCoordinates: '26.2863° N, 73.0392° E',
    landmark: 'Near Blue City Mall, Opposite City Hospital',
    pincode: '342001',
    district: 'Jodhpur',
    state: 'Rajasthan'
  };

  const nearbyLandmarks = [
    { name: 'Mehrangarh Fort', distance: '8 km', time: '15 mins' },
    { name: 'Jodhpur Railway Station', distance: '5 km', time: '12 mins' },
    { name: 'Umaid Bhawan Palace', distance: '10 km', time: '20 mins' },
    { name: 'Clock Tower Market', distance: '6 km', time: '15 mins' }
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-600 rounded-full opacity-15 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-200">📍</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-800">🗺️</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-1200">🧭</div>
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
            <span className="mx-4 text-4xl animate-pulse">📍</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            Location & Directions
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Find us in the heart of the Blue City, easily accessible from all major landmarks
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Map Container */}
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl overflow-hidden border border-purple-400 border-opacity-30 backdrop-blur-xl">
              <div className="aspect-video bg-gradient-to-br from-saffron/20 to-gold/20 flex items-center justify-center relative">
                {/* Placeholder for Google Maps */}
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-white font-semibold">Interactive Map</p>
                  <p className="text-gray-300 text-sm mt-2">Loading Google Maps...</p>
                </div>
                
                {/* Map Controls */}
                <div className="absolute top-4 right-4 space-y-2">
                  <button className="bg-white/90 p-2 rounded-lg shadow-lg hover:bg-white transition-all duration-300">
                    <span className="text-lg">🔍</span>
                  </button>
                  <button className="bg-white/90 p-2 rounded-lg shadow-lg hover:bg-white transition-all duration-300">
                    <span className="text-lg">📍</span>
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-white mb-1">Hare Krishna Marwar Mandir</h3>
                    <p className="text-gray-400 text-sm">{templeLocation.landmark}</p>
                  </div>
                  <motion.button
                    className="px-4 py-2 bg-gradient-to-r from-saffron to-gold text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Open in Maps
                  </motion.button>
                </div>
              </div>
            </div>

            {/* GPS Coordinates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-xl p-4 border border-gold border-opacity-20 backdrop-blur-sm"
            >
              <h4 className="font-bold text-gold mb-2">📍 GPS Coordinates</h4>
              <p className="text-white font-mono text-lg">{templeLocation.gpsCoordinates}</p>
              <button className="text-saffron text-sm hover:text-gold transition-colors duration-300 mt-2">
                Copy Coordinates
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Address Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Full Address */}
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-8 border border-purple-400 border-opacity-30 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-saffron mb-6">Complete Address</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🏛️</span>
                  <div>
                    <div className="font-semibold text-white">Temple Name</div>
                    <div className="text-gray-300">Hare Krishna Marwar Mandir</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">📮</span>
                  <div>
                    <div className="font-semibold text-white">Full Address</div>
                    <div className="text-gray-300">{templeLocation.address}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center space-x-2">
                    <span>🏷️</span>
                    <div>
                      <div className="text-sm text-gray-400">Pincode</div>
                      <div className="text-white font-semibold">{templeLocation.pincode}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>🗺️</span>
                    <div>
                      <div className="text-sm text-gray-400">State</div>
                      <div className="text-white font-semibold">{templeLocation.state}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-8 border border-purple-400 border-opacity-30 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-gold mb-6">Nearby Landmarks</h3>
              <div className="space-y-4">
                {nearbyLandmarks.map((landmark, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-3 bg-purple-900/30 rounded-lg hover:bg-purple-900/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">🏺</span>
                      <div>
                        <div className="font-semibold text-white group-hover:text-saffron transition-colors duration-300">
                          {landmark.name}
                        </div>
                        <div className="text-sm text-gray-400">{landmark.distance} away</div>
                      </div>
                    </div>
                    <div className="text-gold font-semibold">{landmark.time}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <motion.button
                className="p-4 bg-gradient-to-r from-saffron to-gold text-black font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>🧭</span>
                <span>Get Directions</span>
              </motion.button>
              
              <motion.button
                className="p-4 border border-saffron text-saffron font-semibold rounded-xl hover:bg-saffron hover:text-black transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>📞</span>
                <span>Call Temple</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
