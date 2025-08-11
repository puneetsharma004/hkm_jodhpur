import { motion } from 'framer-motion';

export default function ContactPageHeader() {
  return (
    <section className="relative py-20 px-4 overflow-hidden bg-black">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      {/* Animated Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Spiritual Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-6xl text-saffron animate-pulse delay-300">📞</div>
        <div className="absolute top-32 right-20 text-5xl text-gold animate-pulse delay-800">📧</div>
        <div className="absolute bottom-32 left-20 text-7xl text-saffron animate-pulse delay-1200">💬</div>
        <div className="absolute bottom-16 right-16 text-4xl text-gold animate-pulse delay-600">✨</div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10 text-center">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center space-x-2 text-sm">
            <a href="/" className="text-gray-400 hover:text-saffron transition-colors duration-300">Home</a>
            <span className="text-gray-600">•</span>
            <span className="text-saffron">Contact Us</span>
          </div>
        </motion.nav>

        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex justify-center items-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-32"></div>
            <span className="mx-6 text-5xl animate-pulse">📞</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-32"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold gradient-text-saffron-gold mb-6">
            Contact Us
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            We're Here to Help and Guide You
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-saffron/20 to-gold/20 rounded-2xl p-6 max-w-3xl mx-auto border border-saffron border-opacity-30"
          >
            <p className="text-white text-lg">
              🙏 Whether you need guidance, have questions, or want to connect with our community, 
              we're always here to assist you on your spiritual journey.
            </p>
          </motion.div>
        </motion.div>

        {/* Quick Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto"
        >
          {[
            { icon: '📞', method: 'Call Us', detail: '+91 98765 43210' },
            { icon: '📧', method: 'Email Us', detail: 'info@marwarmandir.org' },
            { icon: '💬', method: 'WhatsApp', detail: 'Quick Response' },
            { icon: '📍', method: 'Visit Us', detail: 'Jodhpur, Rajasthan' }
          ].map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
              className="text-center p-4 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-xl border border-gold border-opacity-20 backdrop-blur-sm hover:border-opacity-40 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{contact.icon}</div>
              <div className="text-saffron font-bold text-sm">{contact.method}</div>
              <div className="text-gray-300 text-xs">{contact.detail}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
