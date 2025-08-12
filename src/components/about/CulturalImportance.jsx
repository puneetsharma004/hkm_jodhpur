import { motion } from 'framer-motion';

export default function CulturalImportance() {
  const communityPrograms = [
    { name: 'Bhagavad Gita Classes', frequency: 'Weekly', icon: '📚', participants: '200+' },
    { name: 'Cultural Festivals', frequency: 'Monthly', icon: '🎭', participants: '1000+' },
    { name: 'Prasadam Distribution', frequency: 'Daily', icon: '🍽️', participants: '300+' },
    { name: 'Youth Programs', frequency: 'Bi-weekly', icon: '👥', participants: '150+' },
    { name: 'Spiritual Retreats', frequency: 'Quarterly', icon: '🧘', participants: '100+' },
    { name: 'Heritage Workshops', frequency: 'Monthly', icon: '🎨', participants: '80+' }
  ];

  const impactStats = [
    { number: '25+', label: 'Years of Service', icon: '⏰' },
    { number: '50,000+', label: 'Lives Touched', icon: '❤️' },
    { number: '100+', label: 'Festivals Celebrated', icon: '🎉' },
    { number: '15+', label: 'Community Projects', icon: '🤝' }
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-600 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-700">🏛️</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-300">🎭</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-1100">🤝</div>
        <div className="absolute bottom-16 right-16 text-4xl text-gold animate-pulse delay-900">✨</div>
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
            <span className="mx-4 text-4xl animate-pulse">🏛️</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            Cultural Importance
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A cornerstone of spiritual and cultural life in Jodhpur's Marwad region
          </p>
        </motion.div>

        {/* Temple's Role */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl shadow-2xl p-8 border border-purple-400 border-opacity-30 backdrop-blur-xl mb-12"
        >
          <h3 className="text-2xl font-bold text-saffron mb-6 text-center">Heart of the Community</h3>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                For over two decades, the Hare Krishna Marwad Mandir has served as the spiritual and cultural heart of Jodhpur's devotional community. Our temple plays a vital role in preserving the rich heritage of the Marwad region while fostering spiritual growth and community unity.
              </p>
              <p>
                We host numerous festivals that bring together people from all walks of life, creating bridges between different communities and promoting the universal message of love and peace that Lord Krishna represents.
              </p>
              <p>
                Through our various programs, we've contributed significantly to the cultural landscape of the Blue City, making spiritual wisdom accessible to modern seekers while honoring ancient traditions.
              </p>
            </div>
            <div className="text-center">
              <motion.div
                className="text-8xl mb-4"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🤝
              </motion.div>
              <p className="text-gray-300 italic">
                "Building bridges through devotion"
              </p>
            </div>
          </div>
        </motion.div>

        {/* Community Programs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center text-gold mb-8">Community Programs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-xl p-6 border border-gold border-opacity-20 backdrop-blur-sm hover:border-opacity-40 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-saffron to-gold rounded-full flex items-center justify-center text-black text-xl">
                    {program.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-2 group-hover:text-saffron transition-colors duration-300">
                      {program.name}
                    </h4>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">{program.frequency}</span>
                      <span className="text-gold font-semibold">{program.participants}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-saffron/10 to-gold/10 rounded-2xl p-8 border border-saffron border-opacity-20 backdrop-blur-sm mb-12"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Our Impact</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-saffron glow mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-2xl p-8 border border-saffron border-opacity-30 backdrop-blur-sm max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b002?w=80&h=80&fit=crop&crop=face"
                alt="Community member"
                className="w-16 h-16 rounded-full border-2 border-saffron"
              />
              <div className="text-left">
                <div className="font-bold text-white">Rajeshwari Devi</div>
                <div className="text-sm text-gray-400">Long-time Devotee</div>
              </div>
            </div>
            <blockquote className="text-xl italic text-gray-100 mb-4">
              "This temple has been our family's spiritual anchor for over 15 years. It's not just a place of worship, but a guardian of our cultural values and a beacon of hope for our community."
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
