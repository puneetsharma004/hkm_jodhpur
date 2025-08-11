import { motion } from 'framer-motion';

export default function GalleryCallToAction() {
  const actionCards = [
    {
      title: 'Be Part of Our Journey',
      description: 'Join our spiritual community and create memories',
      icon: '🚪',
      color: 'from-purple-500 to-indigo-600',
      action: 'Visit Temple',
      link: '/visitor-info'
    },
    {
      title: 'Support Our Mission',
      description: 'Help us continue serving Krishna and community',
      icon: '🙏',
      color: 'from-green-500 to-teal-600',
      action: 'Donate Online',
      link: '/donations'
    },
    {
      title: 'Join Our Events',
      description: 'Participate in festivals and spiritual programs',
      icon: '🎭',
      color: 'from-orange-500 to-red-600',
      action: 'View Events',
      link: '/events'
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
        <div className="absolute top-16 left-16 text-6xl text-saffron animate-pulse delay-500">📸</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-1000">✨</div>
        <div className="absolute bottom-32 left-20 text-5xl text-saffron animate-pulse delay-1500">🎨</div>
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
            <span className="mx-6 text-5xl animate-pulse">🎨</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-32"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-saffron-gold mb-6">
            Be Part of Our Story
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            Every moment captured here represents the divine love and community spirit that flows through our temple. 
            Join us in creating more beautiful memories together.
          </p>
        </motion.div>

        {/* Action Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {actionCards.map((card, index) => (
            <motion.a
              key={index}
              href={card.link}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              viewport={{ once: true }}
              whileHover={{ y: -15, scale: 1.05 }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-8 border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-60 transition-all duration-300 group text-center"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${card.color} rounded-2xl flex items-center justify-center text-white text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {card.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-saffron transition-colors duration-300">
                {card.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                {card.description}
              </p>
              
              <motion.div
                className="inline-flex items-center space-x-2 text-saffron font-semibold group-hover:text-gold transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <span>{card.action}</span>
                <span>→</span>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* Share Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-saffron/10 to-gold/10 rounded-2xl p-8 border border-saffron border-opacity-20 backdrop-blur-sm mb-12"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Share Our Divine Moments</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Help spread the divine joy by sharing our gallery with your friends and family. 
              Every share brings more souls closer to Krishna's love.
            </p>
            
            <div className="flex justify-center space-x-4">
              {[
                { platform: 'Facebook', icon: '📘', color: 'bg-blue-600' },
                { platform: 'Twitter', icon: '🐦', color: 'bg-sky-500' },
                { platform: 'WhatsApp', icon: '💬', color: 'bg-green-600' },
                { platform: 'Instagram', icon: '📷', color: 'bg-pink-600' }
              ].map((social, index) => (
                <motion.button
                  key={social.platform}
                  className={`${social.color} text-white p-3 rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-6xl mb-6">🕉️</div>
          <p className="text-gray-300 italic text-lg mb-4">
            "Through every photograph, we capture not just moments, but the eternal presence of divine love"
          </p>
          <p className="text-saffron font-semibold text-xl">
            Hare Krishna! May you find peace and joy in these sacred moments 🙏
          </p>
        </motion.div>
      </div>
    </section>
  );
}
