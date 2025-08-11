import { motion } from 'framer-motion';

export default function WhyVolunteer() {
  const benefits = [
    {
      title: 'Spiritual Growth',
      description: 'Develop Krishna consciousness through selfless service and devotional practice',
      icon: '🕉️',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'Community Connection',
      description: 'Build meaningful relationships with like-minded spiritual seekers',
      icon: '🤗',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Skill Development',
      description: 'Learn new skills while serving - from cooking to event management',
      icon: '📈',
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Cultural Experience',
      description: 'Immerse yourself in ancient Vedic traditions and festivals',
      icon: '🎭',
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Inner Peace',
      description: 'Find joy and fulfillment through karma yoga and selfless action',
      icon: '☮️',
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Divine Service',
      description: 'Directly serve Krishna through temple activities and community help',
      icon: '🙏',
      color: 'from-yellow-500 to-amber-600'
    }
  ];

  const sevaImportance = [
    'Purifies the heart and consciousness',
    'Develops humility and compassion',
    'Creates positive karma and spiritual merit',
    'Strengthens devotion to Krishna',
    'Builds character and discipline'
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-600 rounded-full opacity-15 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-200">💝</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-800">🌟</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-1200">🙏</div>
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
            <span className="mx-4 text-4xl animate-pulse">💝</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            Why Volunteer? The Joy of Seva
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            In Vedic tradition, selfless service (seva) is the path to spiritual elevation and inner fulfillment
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-8 border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-50 transition-all duration-300 group text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {benefit.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-saffron transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Spiritual Significance */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Quote and Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-saffron/10 to-gold/10 rounded-2xl p-8 border border-saffron border-opacity-20 backdrop-blur-sm">
              <div className="text-6xl text-saffron mb-4 text-center">"</div>
              <blockquote className="text-white text-lg italic text-center mb-6 leading-relaxed">
                "Man is meant to be in the service of the Lord. When one is actually in the service of the Lord, he is in his natural position and is completely satisfied."
              </blockquote>
              <p className="text-saffron font-semibold text-center">
                - Srila Prabhupada
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl p-6 border border-purple-400 border-opacity-30 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-gold mb-4">The Philosophy of Karma Yoga</h3>
              <p className="text-gray-300 leading-relaxed">
                Karma yoga, the path of selfless action, is one of the three main paths to spiritual realization 
                outlined in the Bhagavad Gita. When we serve without attachment to results, dedicating our actions 
                to Krishna, we purify our consciousness and develop genuine love for the Divine.
              </p>
            </div>
          </motion.div>

          {/* Right: Importance of Seva */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">How Seva Transforms Us</h3>
            
            {sevaImportance.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-4 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-lg border border-gold border-opacity-20 hover:border-opacity-40 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-saffron rounded-full flex items-center justify-center text-black font-bold text-sm">
                  {index + 1}
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {point}
                </p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-500 border-opacity-30"
            >
              <h4 className="font-bold text-green-300 mb-3">✨ Personal Transformation</h4>
              <p className="text-gray-300 text-sm">
                "Through seva, I discovered my true purpose and found a family of like-minded souls. 
                Every moment spent in service brings me closer to Krishna and fills my heart with inexplicable joy."
              </p>
              <p className="text-green-400 text-xs mt-2 italic">- Volunteer testimonial</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Spiritual Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-2xl p-8 border border-purple-500 border-opacity-30 backdrop-blur-sm"
        >
          <div className="text-5xl mb-4">🌸</div>
          <h3 className="text-2xl font-bold text-white mb-4">Begin Your Spiritual Journey Through Service</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Every act of seva, no matter how small, contributes to your spiritual evolution and the welfare of all beings. 
            Join us in this sacred path of selfless service.
          </p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-saffron to-gold text-black font-bold rounded-lg hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Volunteer Opportunities →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
