import { motion } from 'framer-motion';

export default function TempleHistory() {
  const timeline = [
    { year: '1985', event: 'Foundation laid by spiritual leaders', icon: '🏗️' },
    { year: '1988', event: 'First darshan ceremony conducted', icon: '🕉️' },
    { year: '1995', event: 'Major expansion and renovation', icon: '🏛️' },
    { year: '2000', event: 'Community hall construction', icon: '🏢' },
    { year: '2010', event: 'Digital darshan system introduced', icon: '📱' },
    { year: '2020', event: 'Heritage preservation project', icon: '🏺' }
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-600 rounded-full opacity-15 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-200">📜</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-800">⏰</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-1200">🏛️</div>
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
            <span className="mx-4 text-4xl animate-pulse">📜</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            Temple History
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A sacred journey that began decades ago, rooted in devotion and blessed by divine grace
          </p>
        </motion.div>

        {/* History Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl shadow-2xl p-8 border border-purple-400 border-opacity-30 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-saffron mb-4">Our Sacred Beginning</h3>
              <div className="space-y-4 text-gray-200 leading-relaxed">
                <p>
                  In the heart of Jodhpur, the Blue City of Rajasthan, our temple stands as a beacon of spiritual light. Founded in 1985 by devoted disciples of the ISKCON movement, the Hare Krishna Marwad Mandir was established with a vision to spread the message of Lord Krishna in the land of the Maharajas.
                </p>
                <p>
                  The temple's foundation was blessed by senior spiritual leaders who recognized Jodhpur's strategic importance in connecting the ancient wisdom of Krishna consciousness with the rich cultural heritage of Marwad region.
                </p>
                <p>
                  Over the decades, our temple has grown from a small meditation hall to a magnificent complex that serves thousands of devotees daily, while preserving the authentic traditions of bhakti yoga and Vedic culture.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gold mb-6">Historical Timeline</h3>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-xl p-4 border border-gold border-opacity-20 backdrop-blur-sm hover:border-opacity-40 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-saffron to-gold rounded-full flex items-center justify-center text-black font-bold">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="text-saffron font-bold text-lg">{item.year}</div>
                  <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item.event}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
