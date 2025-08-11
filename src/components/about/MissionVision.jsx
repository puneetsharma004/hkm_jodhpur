import { motion } from 'framer-motion';

export default function MissionVision() {
  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-orange-600 rounded-full opacity-15 blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1500"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-400">🎯</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-900">💫</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-1300">🌟</div>
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
            <span className="mx-4 text-4xl animate-pulse">🎯</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            Mission & Vision
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Guided by divine purpose and unwavering devotion to serve humanity
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl shadow-2xl p-8 border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-50 transition-all duration-300 group"
          >
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-saffron group-hover:text-gold transition-colors duration-300">
                Our Mission
              </h3>
            </div>
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                To spread the timeless teachings of Lord Krishna and provide a spiritual sanctuary where devotees can experience divine love, inner peace, and spiritual growth through the practice of bhakti yoga.
              </p>
              <p>
                We strive to preserve and promote the rich cultural heritage of the Marwar region while fostering global consciousness of Krishna's universal message of love and compassion.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl shadow-2xl p-8 border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-gold hover:border-opacity-50 transition-all duration-300 group"
          >
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold text-gold group-hover:text-saffron transition-colors duration-300">
                Our Vision
              </h3>
            </div>
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                To become a beacon of spiritual enlightenment in Rajasthan, inspiring thousands to embrace a life of devotion, service, and divine consciousness.
              </p>
              <p>
                We envision a harmonious community where ancient wisdom meets modern living, creating a world where peace, love, and spiritual prosperity flourish for all beings.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-saffron/10 to-gold/10 rounded-2xl p-8 border border-saffron border-opacity-20 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🙏', title: 'Devotion', desc: 'Pure love for Krishna' },
              { icon: '🤝', title: 'Service', desc: 'Selfless community service' },
              { icon: '📚', title: 'Education', desc: 'Spiritual knowledge sharing' },
              { icon: '🏛️', title: 'Heritage', desc: 'Cultural preservation' }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="font-bold text-saffron mb-2">{value.title}</h4>
                <p className="text-gray-300 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-2xl p-8 border border-saffron border-opacity-30 backdrop-blur-sm max-w-4xl mx-auto">
            <div className="text-4xl text-saffron mb-4">"</div>
            <blockquote className="text-xl italic text-gray-100 mb-4">
              "A temple is not just a building; it is a living embodiment of divine love where every soul can find their eternal home in Krishna's embrace."
            </blockquote>
            <p className="text-saffron font-semibold">– Temple Founder</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
