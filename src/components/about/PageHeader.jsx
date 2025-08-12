import { motion } from 'framer-motion';

export default function PageHeader() {
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
        <div className="absolute top-16 left-16 text-6xl text-saffron animate-pulse delay-300">🏛️</div>
        <div className="absolute top-32 right-20 text-5xl text-gold animate-pulse delay-800">📖</div>
        <div className="absolute bottom-32 left-20 text-7xl text-saffron animate-pulse delay-1200">🕉️</div>
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
            <span className="text-saffron">About Us</span>
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
            <span className="mx-6 text-5xl animate-pulse">🏛️</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-32"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold gradient-text-saffron-gold mb-6">
            About Us
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Journey of Devotion and Heritage in Jodhpur
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-gray-400 text-lg"
          >
            Discover the spiritual legacy of Marwad Mandir
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
