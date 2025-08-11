import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="relative py-20 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-orange-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gold rounded-full opacity-10 blur-3xl animate-pulse delay-500 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-6xl text-saffron animate-pulse delay-500">🚪</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-1000">🙏</div>
        <div className="absolute bottom-32 left-20 text-5xl text-saffron animate-pulse delay-1500">💫</div>
        <div className="absolute bottom-16 right-16 text-4xl text-gold animate-pulse delay-200">✨</div>
      </div>

      <div className="relative max-w-4xl mx-auto z-10 text-center">
        {/* Main CTA Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-32"></div>
            <span className="mx-6 text-5xl animate-pulse">🚪</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-32"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-saffron-gold mb-6">
            Visit Our Sacred Temple
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Experience the divine presence of Lord Krishna in the heart of Jodhpur. 
            Join our spiritual family and discover inner peace through devotion.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
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
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gold to-saffron opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
              style={{ zIndex: -1 }}
            />
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href="/events"
            className="group border-2 border-saffron text-saffron font-bold px-8 py-4 rounded-full hover:bg-saffron hover:text-black transition-all duration-300 flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl">🎭</span>
            <span>View Events</span>
          </motion.a>
        </motion.div>

        {/* Quick Actions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {[
            {
              icon: '🙏',
              title: 'Make a Donation',
              desc: 'Support our temple seva',
              link: '/donations',
              color: 'from-green-500 to-emerald-600'
            },
            {
              icon: '📞',
              title: 'Contact Us',
              desc: 'Get in touch today',
              link: '/contact',
              color: 'from-blue-500 to-cyan-600'
            },
            {
              icon: '📸',
              title: 'View Gallery',
              desc: 'See divine moments',
              link: '/gallery',
              color: 'from-purple-500 to-violet-600'
            }
          ].map((action, index) => (
            <motion.a
              key={index}
              href={action.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-50 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${action.color} rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                {action.icon}
              </div>
              <h3 className="font-bold text-white mb-2 group-hover:text-saffron transition-colors duration-300">
                {action.title}
              </h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                {action.desc}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Temple Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-saffron/10 to-gold/10 rounded-2xl p-8 border border-saffron border-opacity-20 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Visit Information</h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="font-semibold text-saffron mb-3">Temple Timings</h4>
              <div className="space-y-2 text-gray-300">
                <p>🌅 Morning: 5:00 AM - 12:00 PM</p>
                <p>🌇 Evening: 4:00 PM - 9:00 PM</p>
                <p>🎉 Special festivals: Extended hours</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-saffron mb-3">Contact Details</h4>
              <div className="space-y-2 text-gray-300">
                <p>📍 123 Temple Road, Jodhpur</p>
                <p>📞 +91 98765 43210</p>
                <p>✉️ info@marwarmandir.org</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="text-2xl text-saffron mb-4">🕉️</div>
          <p className="text-gray-300 italic text-lg">
            "Come as you are, leave transformed by Krishna's love"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
