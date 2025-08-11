import { motion } from 'framer-motion';
import { useState } from 'react';

export default function VirtualDarshan() {
  const [activeTab, setActiveTab] = useState('live');

  const virtualOptions = [
    {
      id: 'live',
      title: 'Live Darshan',
      icon: '📺',
      description: 'Join live streaming during aarti times',
      available: true
    },
    {
      id: '360',
      title: '360° Tour',
      icon: '🌀',
      description: 'Virtual temple tour experience',
      available: true
    },
    {
      id: 'gallery',
      title: 'Photo Gallery',
      icon: '📸',
      description: 'High-quality deity photographs',
      available: true
    },
    {
      id: 'booking',
      title: 'Book Session',
      icon: '📅',
      description: 'Schedule personal virtual darshan',
      available: false
    }
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-600 rounded-full opacity-15 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-200">📱</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-800">💻</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-1200">📺</div>
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
            <span className="mx-4 text-4xl animate-pulse">📱</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            Virtual Darshan
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Experience divine darshan from anywhere in the world through our virtual temple services
          </p>
        </motion.div>

        {/* Virtual Darshan Options */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Options Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4 mb-8">
              {virtualOptions.map((option) => (
                <motion.button
                  key={option.id}
                  onClick={() => setActiveTab(option.id)}
                  className={`p-4 rounded-xl border transition-all duration-300 ${
                    activeTab === option.id
                      ? 'bg-gradient-to-r from-saffron to-gold text-black border-saffron'
                      : 'bg-gradient-to-br from-gray-900/80 to-black/80 text-gray-300 border-purple-400 border-opacity-30 hover:border-saffron hover:border-opacity-50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={!option.available}
                >
                  <div className="text-2xl mb-2">{option.icon}</div>
                  <div className="font-semibold text-sm">{option.title}</div>
                  {!option.available && (
                    <div className="text-xs text-gray-500 mt-1">Coming Soon</div>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Active Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-purple-400 border-opacity-30 backdrop-blur-xl"
            >
              {activeTab === 'live' && (
                <div>
                  <h3 className="text-xl font-bold text-saffron mb-4">Live Darshan Streaming</h3>
                  <div className="space-y-4 text-gray-200">
                    <p>Join our live darshan sessions during aarti times:</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-purple-900/30 p-3 rounded-lg">
                        <div className="font-semibold text-gold">Morning Aarti</div>
                        <div>5:00 AM - 6:00 AM</div>
                      </div>
                      <div className="bg-purple-900/30 p-3 rounded-lg">
                        <div className="font-semibold text-gold">Evening Aarti</div>
                        <div>7:00 PM - 8:00 PM</div>
                      </div>
                    </div>
                    <motion.button
                      className="w-full bg-gradient-to-r from-saffron to-gold text-black font-bold py-3 rounded-lg mt-4"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      🔴 Join Live Stream
                    </motion.button>
                  </div>
                </div>
              )}

              {activeTab === '360' && (
                <div>
                  <h3 className="text-xl font-bold text-saffron mb-4">360° Virtual Tour</h3>
                  <div className="space-y-4 text-gray-200">
                    <p>Take an immersive virtual tour of our temple:</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <span>🏛️</span>
                        <span>Main sanctum and deity darshan</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span>🌸</span>
                        <span>Beautiful temple architecture</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span>🎨</span>
                        <span>Sacred artwork and decorations</span>
                      </li>
                    </ul>
                    <motion.button
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 rounded-lg mt-4"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      🌀 Start Virtual Tour
                    </motion.button>
                  </div>
                </div>
              )}

              {activeTab === 'gallery' && (
                <div>
                  <h3 className="text-xl font-bold text-saffron mb-4">Deity Photo Gallery</h3>
                  <div className="space-y-4 text-gray-200">
                    <p>View high-quality photographs of our deities:</p>
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="aspect-square bg-gradient-to-br from-saffron/20 to-gold/20 rounded-lg flex items-center justify-center text-2xl">
                          🕉️
                        </div>
                      ))}
                    </div>
                    <motion.button
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 rounded-lg mt-4"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      📸 View Full Gallery
                    </motion.button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* Virtual Darshan Video/Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl overflow-hidden border border-purple-400 border-opacity-30 backdrop-blur-xl">
              <div className="aspect-video bg-gradient-to-br from-saffron/20 to-gold/20 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="text-6xl mb-4">🕉️</div>
                  <p className="text-white font-semibold">Virtual Darshan Preview</p>
                  <p className="text-gray-300 text-sm mt-2">Live streaming available during aarti times</p>
                </div>
                
                {/* Play Button Overlay */}
                <motion.button
                  className="absolute inset-0 bg-black/30 flex items-center justify-center"
                  whileHover={{ bg: 'rgba(0,0,0,0.5)' }}
                >
                  <div className="w-16 h-16 bg-saffron rounded-full flex items-center justify-center text-black text-2xl">
                    ▶️
                  </div>
                </motion.button>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-white mb-2">Next Live Darshan</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-saffron font-semibold">Evening Aarti</div>
                    <div className="text-gray-400 text-sm">Today at 7:00 PM</div>
                  </div>
                  <div className="text-right">
                    <div className="text-gold font-bold text-lg">2:30:45</div>
                    <div className="text-gray-400 text-xs">Time remaining</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 bg-gradient-to-r from-saffron/10 to-gold/10 rounded-xl p-4 border border-saffron border-opacity-20"
            >
              <h4 className="font-semibold text-saffron mb-2">How to Join Virtual Darshan</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>• Click on the live stream button during aarti times</p>
                <p>• Ensure stable internet connection for best experience</p>
                <p>• Join with devotion and receive Krishna's blessings</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
