import { motion } from 'framer-motion';
import { FaDonate, FaHandsHelping, FaVideo, FaPhone } from 'react-icons/fa';

export default function QuickLinks() {
  const links = [
    { 
      icon: <FaDonate size={30} />, 
      text: 'Donate Online', 
      link: '/donations',
      description: 'Support our temple seva',
      color: 'from-green-500 to-emerald-600'
    },
    { 
      icon: <FaHandsHelping size={30} />, 
      text: 'Volunteer Signup', 
      link: '/volunteer',
      description: 'Join our divine service',
      color: 'from-blue-500 to-cyan-600'
    },
    { 
      icon: <FaVideo size={30} />, 
      text: 'Virtual Darshan', 
      link: '/virtual-darshan',
      description: 'Online temple visit',
      color: 'from-purple-500 to-violet-600'
    },
    { 
      icon: <FaPhone size={30} />, 
      text: 'Contact Temple', 
      link: '/contact',
      description: 'Get in touch with us',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      {/* Animated Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-orange-600 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Spiritual Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-700">🔗</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-300">⚡</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-1100">🚀</div>
        <div className="absolute bottom-16 right-16 text-4xl text-gold animate-pulse delay-900">✨</div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center items-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
            <span className="mx-4 text-4xl animate-pulse">🔗</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-saffron to-gold bg-clip-text text-transparent mb-4">
            Quick Actions
          </h3>
          <p className="text-gray-300 text-lg">
            Easy access to temple services and community engagement
          </p>
        </motion.div>

        {/* Quick Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.link}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              {/* Main Card */}
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-2xl shadow-2xl border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-60 transition-all duration-300 h-full">
                
                {/* Icon Container */}
                <div className="flex justify-center mb-4">
                  <div className={`bg-gradient-to-r ${link.color} p-4 rounded-full shadow-xl group-hover:shadow-2xl transition-shadow duration-300 group-hover:scale-110 transform transition-transform duration-300`}>
                    <div className="text-white">
                      {link.icon}
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-center">
                  <h4 className="font-bold text-white text-lg mb-2 group-hover:text-saffron transition-colors duration-300">
                    {link.text}
                  </h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {link.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <motion.div 
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <span className="text-saffron text-xl">→</span>
                </motion.div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl shadow-lg group-hover:shadow-saffron/20 group-hover:shadow-2xl transition-shadow duration-300"></div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-saffron/10 to-gold/10 p-6 rounded-2xl border border-saffron border-opacity-20 backdrop-blur-sm max-w-4xl mx-auto">
            <p className="text-gray-300 mb-4">
              <span className="text-saffron font-semibold">📞 24/7 Support:</span> Need immediate assistance? Our temple staff is always ready to help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
              <div className="flex items-center justify-center space-x-2">
                <span>🕐</span>
                <span>Temple Hours: 5 AM - 9 PM</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span>📧</span>
                <span>Email: info@marwarmandir.org</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span>📱</span>
                <span>WhatsApp: +91 98765 43210</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-3 text-2xl filter drop-shadow-2xl">
            <span className="text-saffron glow animate-pulse">🚀</span>
            <span className="text-gold glow animate-pulse delay-300">⚡</span>
            <span className="text-saffron glow animate-pulse delay-600">🔗</span>
            <span className="text-gold glow animate-pulse delay-900">⚡</span>
            <span className="text-saffron glow animate-pulse delay-1200">🚀</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
