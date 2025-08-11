import { motion } from 'framer-motion';

export default function EventsCallToAction() {
  const quickActions = [
    {
      title: 'Join Virtual Darshan',
      description: 'Experience divine presence online',
      icon: '📱',
      color: 'from-purple-500 to-indigo-600',
      link: '/virtual-darshan',
      urgent: false
    },
    {
      title: 'Register for Events',
      description: 'Book your spot in upcoming programs',
      icon: '📝',
      color: 'from-blue-500 to-cyan-600',
      link: '/register',
      urgent: true
    },
    {
      title: 'Volunteer Today',
      description: 'Serve Krishna through community seva',
      icon: '🤝',
      color: 'from-green-500 to-teal-600',
      link: '/volunteer',
      urgent: false
    },
    {
      title: 'Support Temple',
      description: 'Contribute to our spiritual mission',
      icon: '🙏',
      color: 'from-orange-500 to-red-600',
      link: '/donations',
      urgent: false
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
        <div className="absolute top-16 left-16 text-6xl text-saffron animate-pulse delay-500">🎭</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-1000">📅</div>
        <div className="absolute bottom-32 left-20 text-5xl text-saffron animate-pulse delay-1500">✨</div>
        <div className="absolute bottom-16 right-16 text-4xl text-gold animate-pulse delay-200">🙏</div>
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
            <span className="mx-6 text-5xl animate-pulse">🎭</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-32"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-saffron-gold mb-6">
            Begin Your Spiritual Journey
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            Join thousands of devotees in experiencing Krishna's divine love through our darshan, events, and community programs
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            {/* Primary CTA */}
            <motion.a
              href="/visitor-info"
              className="group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-gradient-to-r from-saffron via-orange-500 to-gold text-black font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-saffron/50 transition-all duration-300 flex items-center space-x-3">
                <span className="text-2xl">🚪</span>
                <span className="text-lg">Plan Your Visit</span>
                <motion.span
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  →
                </motion.span>
              </div>
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="#newsletter"
              className="group border-2 border-saffron text-saffron font-bold px-8 py-4 rounded-full hover:bg-saffron hover:text-black transition-all duration-300 flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">📧</span>
              <span>Get Event Updates</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Quick Actions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {quickActions.map((action, index) => (
            <motion.a
              key={index}
              href={action.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              className={`relative rounded-2xl p-6 border backdrop-blur-xl transition-all duration-300 group ${
                action.urgent 
                  ? 'bg-gradient-to-br from-saffron/20 to-gold/20 border-saffron border-opacity-60' 
                  : 'bg-gradient-to-br from-gray-900/80 to-black/80 border-purple-400 border-opacity-30 hover:border-saffron hover:border-opacity-50'
              }`}
            >
              {action.urgent && (
                <motion.div
                  className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  URGENT
                </motion.div>
              )}

              <div className={`w-16 h-16 bg-gradient-to-r ${action.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                {action.icon}
              </div>
              
              <h3 className="font-bold text-white text-lg mb-2 text-center group-hover:text-saffron transition-colors duration-300">
                {action.title}
              </h3>
              
              <p className="text-gray-400 text-sm text-center group-hover:text-gray-300 transition-colors duration-300">
                {action.description}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          id="newsletter"
          className="bg-gradient-to-r from-saffron/10 to-gold/10 rounded-2xl p-8 border border-saffron border-opacity-20 backdrop-blur-sm mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Connected with Krishna</h3>
            <p className="text-gray-300">
              Subscribe to receive updates about upcoming events, festivals, and spiritual programs
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-900/50 border border-purple-400 border-opacity-30 text-white placeholder-gray-400 focus:outline-none focus:border-saffron focus:border-opacity-60 transition-all duration-300"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-saffron to-gold text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <div className="text-center">
            <div className="text-4xl mb-3">📍</div>
            <h4 className="font-bold text-saffron mb-2">Visit Us</h4>
            <p className="text-gray-300 text-sm">
              123 Temple Road<br/>
              Jodhpur, Rajasthan<br/>
              India - 342001
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-3">📞</div>
            <h4 className="font-bold text-saffron mb-2">Call Us</h4>
            <p className="text-gray-300 text-sm">
              Temple: +91 98765 43210<br/>
              Office: +91 98765 43211<br/>
              WhatsApp: +91 98765 43212
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-3">⏰</div>
            <h4 className="font-bold text-saffron mb-2">Temple Hours</h4>
            <p className="text-gray-300 text-sm">
              Morning: 5:00 AM - 12:00 PM<br/>
              Evening: 4:00 PM - 9:30 PM<br/>
              Closed: 12:00 PM - 4:00 PM
            </p>
          </div>
        </motion.div>

        {/* Final Blessing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-6xl mb-4">🕉️</div>
          <p className="text-gray-300 italic text-lg mb-4">
            "Wherever you are, whatever you do, remember Krishna and His divine love"
          </p>
          <p className="text-saffron font-semibold">
            Hare Krishna! 🙏
          </p>
        </motion.div>
      </div>
    </section>
  );
}
