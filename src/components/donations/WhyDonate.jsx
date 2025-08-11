import { motion } from 'framer-motion';

export default function WhyDonate() {
  const impactAreas = [
    {
      icon: '🏛️',
      title: 'Temple Operations',
      description: 'Daily maintenance, utilities, and keeping the sacred space beautiful',
      percentage: '30%'
    },
    {
      icon: '🍽️',
      title: 'Prasadam Distribution',
      description: 'Free meals for devotees and community members in need',
      percentage: '25%'
    },
    {
      icon: '🎉',
      title: 'Festivals & Events',
      description: 'Celebrating divine festivals and organizing spiritual programs',
      percentage: '20%'
    },
    {
      icon: '📚',
      title: 'Education & Outreach',
      description: 'Spiritual classes, books, and spreading Krishna consciousness',
      percentage: '15%'
    },
    {
      icon: '🤝',
      title: 'Community Service',
      description: 'Supporting the underprivileged and community welfare',
      percentage: '10%'
    }
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-600 rounded-full opacity-15 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-200">💝</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-800">🎯</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-1200">❤️</div>
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
            <span className="mx-4 text-4xl animate-pulse">💝</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            Why Your Donation Matters
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            In Vedic tradition, charity (dana) is considered one of the highest virtues. Your contribution helps us serve Krishna and humanity
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Explanation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-8 border border-purple-400 border-opacity-30 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-saffron mb-6">The Power of Giving</h3>
              <div className="space-y-4 text-gray-200 leading-relaxed">
                <p>
                  Every contribution to our temple is an offering to Lord Krishna and serves multiple divine purposes. 
                  Your donation helps maintain the sacred space where thousands find peace, spiritual guidance, and community.
                </p>
                <p>
                  From the daily aartis that awaken devotion to the free meals that nourish the needy, every rupee is 
                  invested in creating positive impact. When you donate, you become part of a spiritual family working 
                  together to spread love, compassion, and Krishna consciousness.
                </p>
                <p>
                  As the Bhagavad Gita teaches us, charity given with faith and without expectation of return purifies 
                  the heart and brings spiritual merit. Your generosity not only supports our mission but also elevates 
                  your own consciousness.
                </p>
              </div>
            </div>

            {/* Spiritual Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-saffron/10 to-gold/10 rounded-xl p-6 border border-saffron border-opacity-20"
            >
              <div className="text-4xl text-saffron mb-4">"</div>
              <blockquote className="text-white italic text-lg mb-4">
                "Charity given out of duty, without expectation of return, at the proper time and place, 
                and to a worthy person is considered to be in the mode of goodness."
              </blockquote>
              <p className="text-saffron font-semibold text-right">– Bhagavad Gita 17.20</p>
            </motion.div>
          </motion.div>

          {/* Right: Impact Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gold mb-6">How Your Donation is Used</h3>
            {impactAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-xl p-4 border border-gold border-opacity-20 backdrop-blur-sm hover:border-opacity-40 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {area.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-white group-hover:text-saffron transition-colors duration-300">
                        {area.title}
                      </h4>
                      <span className="text-gold font-bold text-lg">{area.percentage}</span>
                    </div>
                    <p className="text-gray-300 text-sm group-hover:text-gray-100 transition-colors duration-300">
                      {area.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl p-6 border border-saffron border-opacity-30"
            >
              <h4 className="font-bold text-saffron mb-4">100% Transparency</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <span>✓</span>
                  <span className="text-gray-300">Detailed financial reports</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>✓</span>
                  <span className="text-gray-300">Regular progress updates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>✓</span>
                  <span className="text-gray-300">Audited accounts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>✓</span>
                  <span className="text-gray-300">Donation certificates</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
