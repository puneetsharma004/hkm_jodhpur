import { motion } from 'framer-motion';

export default function WelcomeSection() {
  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      {/* Animated Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-600 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Spiritual Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl text-saffron animate-pulse">🕉️</div>
        <div className="absolute top-20 right-20 text-4xl text-gold animate-pulse delay-500">🪔</div>
        <div className="absolute bottom-20 left-20 text-5xl text-saffron animate-pulse delay-1000">🌺</div>
        <div className="absolute bottom-10 right-10 text-4xl text-gold animate-pulse delay-1500">⚛️</div>
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-5xl mx-auto z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center items-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-32"></div>
            <span className="mx-4 text-4xl animate-pulse">🕉️</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-32"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Welcome to 
            <span className="block gradient-text-saffron-gold mt-2">
  Hare Krishna Marwar Mandir
</span>

            <span className="block text-2xl md:text-3xl font-medium text-purple-300 mt-2">Jodhpur</span>
          </h2>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl shadow-2xl p-8 md:p-12 border border-purple-400 border-opacity-40 backdrop-blur-xl"
        >
          {/* Description */}
          <div className="mb-8">
            <p className="text-lg md:text-xl leading-relaxed text-gray-100 mb-6">
              Nestled in the heart of the <span className="font-semibold text-cyan-300 glow">Blue City</span>, our temple is a beacon of devotion, heritage, and spiritual bliss. 
              Part of the <span className="font-semibold text-saffron glow">ISKCON family</span>, the Hare Krishna Marwar Mandir offers daily darshan, cultural events, and a warm welcome to all.
            </p>

            {/* Decorative Quote Container */}
            <div className="relative bg-gradient-to-r from-purple-900/80 to-indigo-900/80 p-6 rounded-xl shadow-2xl border border-saffron border-opacity-50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-saffron/10 to-gold/10 rounded-xl"></div>
              <div className="absolute -top-3 -left-3 text-4xl text-saffron glow">"</div>
              <div className="absolute -bottom-3 -right-3 text-4xl text-saffron glow">"</div>
              
              <blockquote className="text-lg md:text-xl italic text-white font-medium text-center relative z-10">
                By serving Krishna with love and devotion, we find eternal joy.
              </blockquote>
              <p className="text-center text-saffron font-semibold mt-3 text-sm glow">
                – Srila Prabhupada
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <motion.a
              href="/about"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(255, 153, 51, 0.6)",
                filter: "brightness(1.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-saffron via-orange-500 to-amber-400 text-black font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-saffron/50 transition-all duration-300 group glow-button"
            >
              <span className="mr-2">Learn More About Our Temple</span>
              <motion.span
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                →
              </motion.span>
            </motion.a>

            {/* Additional Links */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
              <a href="/events" className="text-gray-400 hover:text-saffron transition-colors duration-300 font-medium hover:glow">
                🎭 Events & Programs
              </a>
              <span className="text-gray-700">•</span>
              <a href="/visitor-info" className="text-gray-400 hover:text-saffron transition-colors duration-300 font-medium hover:glow">
                🚪 Visitor Information
              </a>
              <span className="text-gray-700">•</span>
              <a href="/donations" className="text-gray-400 hover:text-saffron transition-colors duration-300 font-medium hover:glow">
                🙏 Make a Donation
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center space-x-2 text-2xl filter drop-shadow-2xl">
            <span className="text-saffron glow">🪔</span>
            <span className="text-gold glow">🕉️</span>
            <span className="text-saffron glow">🌺</span>
            <span className="text-gold glow">🕉️</span>
            <span className="text-saffron glow">🪔</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
