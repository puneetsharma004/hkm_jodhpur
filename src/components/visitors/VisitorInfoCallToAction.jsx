import { motion } from 'framer-motion';

export default function VisitorInfoCallToAction() {
  const quickActions = [
    {
      title: 'Plan Your Visit',
      description: 'Get personalized visit recommendations',
      icon: '🗓️',
      color: 'from-blue-500 to-cyan-600',
      action: 'Start Planning',
      link: '#plan-visit'
    },
    {
      title: 'Book Accommodation',
      description: 'Reserve your temple guest room',
      icon: '🏨',
      color: 'from-green-500 to-teal-600',
      action: 'Book Now',
      link: '#accommodation'
    },
    {
      title: 'Join Events',
      description: 'Participate in upcoming programs',
      icon: '🎭',
      color: 'from-purple-500 to-pink-600',
      action: 'View Events',
      link: '/events'
    },
    {
      title: 'Support Temple',
      description: 'Contribute to our spiritual mission',
      icon: '🙏',
      color: 'from-orange-500 to-red-600',
      action: 'Donate',
      link: '/donations'
    }
  ];

  const visitingPackages = [
    {
      name: 'Half Day Visit',
      duration: '4 hours',
      includes: ['Morning aarti participation', 'Temple tour', 'Prasadam meal', 'Spiritual discourse'],
      price: 'Free',
      timing: '5 AM - 9 AM',
      suitable: 'Local visitors'
    },
    {
      name: 'Full Day Experience',
      duration: '8 hours',
      includes: ['All aartis', 'Guided temple tour', 'Meals included', 'Cultural program', 'Souvenir'],
      price: 'Donation based',
      timing: '5 AM - 9 PM',
      suitable: 'Out-of-town visitors'
    },
    {
      name: 'Weekend Retreat',
      duration: '2 days',
      includes: ['Accommodation', 'All meals', 'Spiritual workshops', 'Meditation sessions', 'Personal guidance'],
      price: '₹1,500/person',
      timing: 'Friday evening to Sunday evening',
      suitable: 'Spiritual seekers'
    }
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gold rounded-full opacity-10 blur-3xl animate-pulse delay-500 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-6xl text-saffron animate-pulse delay-500">🚪</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-1000">✨</div>
        <div className="absolute bottom-32 left-20 text-5xl text-saffron animate-pulse delay-1500">🙏</div>
        <div className="absolute bottom-16 right-16 text-4xl text-gold animate-pulse delay-200">💫</div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Main CTA Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-32"></div>
            <span className="mx-6 text-5xl animate-pulse">🚪</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-32"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-saffron-gold mb-6">
            Ready to Visit Us?
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            Experience divine peace and spiritual joy at the Hare Krishna Marwar Mandir. 
            Your journey to Krishna consciousness begins here.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            {/* Primary Visit Button */}
            <motion.button
              className="group relative overflow-hidden px-12 py-4 bg-gradient-to-r from-saffron via-orange-500 to-gold text-black font-bold rounded-full shadow-2xl hover:shadow-saffron/50 transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center space-x-3">
                <span>🚪</span>
                <span>Visit Temple Today</span>
                <motion.span
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  →
                </motion.span>
              </span>
            </motion.button>

            {/* Get Directions */}
            <motion.button
              className="group border-2 border-saffron text-saffron font-bold px-8 py-4 rounded-full hover:bg-saffron hover:text-black transition-all duration-300 flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">🧭</span>
              <span>Get Directions</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Quick Action Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {quickActions.map((action, index) => (
            <motion.a
              key={index}
              href={action.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-60 transition-all duration-300 group text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${action.color} rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {action.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-saffron transition-colors duration-300">
                {action.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                {action.description}
              </p>
              
              <motion.div
                className="inline-flex items-center space-x-2 text-saffron font-semibold group-hover:text-gold transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <span>{action.action}</span>
                <span>→</span>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* Visit Packages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Choose Your Visit Experience</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {visitingPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`rounded-2xl p-6 border backdrop-blur-xl transition-all duration-300 group ${
                  index === 1 
                    ? 'bg-gradient-to-br from-saffron/20 to-gold/20 border-saffron border-opacity-60' 
                    : 'bg-gradient-to-br from-gray-900/80 to-black/80 border-purple-400 border-opacity-30 hover:border-saffron hover:border-opacity-50'
                }`}
              >
                {index === 1 && (
                  <div className="text-center mb-4">
                    <span className="bg-saffron text-black text-xs font-bold px-3 py-1 rounded-full">
                      RECOMMENDED
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-saffron transition-colors duration-300">
                    {pkg.name}
                  </h4>
                  <div className="text-saffron font-semibold mb-1">{pkg.duration}</div>
                  <div className="text-2xl font-bold text-gold">{pkg.price}</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h5 className="font-semibold text-white mb-2">Includes:</h5>
                    <ul className="space-y-1">
                      {pkg.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-2">
                          <span className="text-saffron">•</span>
                          <span className="text-gray-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Timing:</span>
                      <div className="text-white font-semibold">{pkg.timing}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Best for:</span>
                      <div className="text-white font-semibold">{pkg.suitable}</div>
                    </div>
                  </div>
                </div>

                <motion.button
                  className={`w-full font-bold py-3 rounded-lg transition-all duration-300 ${
                    index === 1
                      ? 'bg-gradient-to-r from-saffron to-gold text-black hover:shadow-lg'
                      : 'border border-saffron text-saffron hover:bg-saffron hover:text-black'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Choose This Experience
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <div className="text-center">
            <div className="text-4xl mb-3">📍</div>
            <h4 className="font-bold text-saffron mb-2">Visit Us</h4>
            <p className="text-gray-300 text-sm">
              Sector 12, Near Blue City Mall<br/>
              Jodhpur, Rajasthan - 342001<br/>
              India
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-3">📞</div>
            <h4 className="font-bold text-saffron mb-2">Call Us</h4>
            <p className="text-gray-300 text-sm">
              Visitor Helpline: +91 98765 43210<br/>
              Temple Office: +91 98765 43211<br/>
              WhatsApp: +91 98765 43212
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-3">⏰</div>
            <h4 className="font-bold text-saffron mb-2">Temple Hours</h4>
            <p className="text-gray-300 text-sm">
              Morning: 5:00 AM - 12:00 PM<br/>
              Evening: 4:00 PM - 9:00 PM<br/>
              Open Daily (All Year Round)
            </p>
          </div>
        </motion.div>

        {/* Final Blessing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-saffron/10 to-gold/10 rounded-2xl p-8 border border-saffron border-opacity-20 backdrop-blur-sm"
        >
          <div className="text-6xl mb-6">🕉️</div>
          <p className="text-gray-300 italic text-lg mb-4 max-w-2xl mx-auto">
            "The temple doors are always open for sincere souls seeking Krishna's love and peace."
          </p>
          <p className="text-saffron font-semibold text-xl">
            Hare Krishna! We look forward to welcoming you 🙏
          </p>
          
          <div className="mt-8 text-center">
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-saffron to-gold text-black font-bold rounded-full hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Visitor Guide 📱
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
