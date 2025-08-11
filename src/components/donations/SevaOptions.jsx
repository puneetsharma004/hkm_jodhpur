import { motion } from 'framer-motion';

export default function SevaOptions() {
  const sevaOptions = [
    {
      id: 'gau-seva',
      title: 'Gau Seva (Cow Protection)',
      description: 'Support the care and feeding of our sacred temple cows. Help maintain the goshala and provide nutritious food for these gentle souls.',
      icon: '🐄',
      color: 'from-green-500 to-teal-600',
      suggestedAmount: '₹2,500',
      impact: 'Feeds 1 cow for a month',
      popular: false
    },
    {
      id: 'anna-daan',
      title: 'Anna Daan Seva (Food Distribution)',
      description: 'Provide free prasadam to devotees and the needy. Your contribution helps us serve hundreds of meals daily with love and devotion.',
      icon: '🍽️',
      color: 'from-orange-500 to-red-600',
      suggestedAmount: '₹5,000',
      impact: 'Provides 200 meals',
      popular: true
    },
    {
      id: 'festival-sponsorship',
      title: 'Festival Sponsorship',
      description: 'Sponsor major festivals like Janmashtami, Holi, and Rath Yatra. Help create divine celebrations that inspire thousands.',
      icon: '🎉',
      color: 'from-purple-500 to-pink-600',
      suggestedAmount: '₹25,000',
      impact: 'Sponsors complete festival',
      popular: false
    },
    {
      id: 'temple-construction',
      title: 'Temple Construction & Renovation',
      description: 'Contribute to infrastructure development, maintenance, and beautification of our sacred temple premises.',
      icon: '🏗️',
      color: 'from-blue-500 to-indigo-600',
      suggestedAmount: '₹50,000',
      impact: 'Major infrastructure support',
      popular: false
    },
    {
      id: 'aarti-sponsorship',
      title: 'Daily Aarti Sponsorship',
      description: 'Sponsor morning or evening aarti ceremonies. Your name will be announced during the sacred offering to the deities.',
      icon: '🕉️',
      color: 'from-yellow-500 to-orange-600',
      suggestedAmount: '₹1,500',
      impact: 'Sponsors one complete aarti',
      popular: true
    },
    {
      id: 'education-outreach',
      title: 'Education & Outreach',
      description: 'Fund spiritual education programs, book distribution, and outreach activities to spread Krishna consciousness.',
      icon: '📚',
      color: 'from-cyan-500 to-blue-600',
      suggestedAmount: '₹10,000',
      impact: 'Supports 50 students monthly',
      popular: false
    }
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-orange-600 rounded-full opacity-15 blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1500"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-400">🎯</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-900">💫</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-1300">🙏</div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
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
            Types of Seva / Donation Options
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Choose how you'd like to serve Krishna and support our temple community through various seva opportunities
          </p>
        </motion.div>

        {/* Seva Options Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sevaOptions.map((seva, index) => (
            <motion.div
              key={seva.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 group ${
                seva.popular 
                  ? 'bg-gradient-to-br from-saffron/20 to-gold/20 border-2 border-saffron border-opacity-60' 
                  : 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-purple-400 border-opacity-30 hover:border-saffron hover:border-opacity-50'
              } backdrop-blur-xl`}
            >
              {seva.popular && (
                <div className="absolute -top-2 right-4 bg-saffron text-black text-xs font-bold px-3 py-1 rounded-b-lg">
                  POPULAR
                </div>
              )}

              <div className="p-8">
                {/* Icon and Title */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${seva.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {seva.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-saffron">{seva.suggestedAmount}</div>
                    <div className="text-xs text-gray-400">Suggested</div>
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  seva.popular ? 'text-white' : 'text-white group-hover:text-saffron'
                }`}>
                  {seva.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                  {seva.description}
                </p>

                {/* Impact */}
                <div className="mb-6 p-3 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-lg border border-gold border-opacity-20">
                  <div className="text-xs text-gold font-semibold mb-1">Your Impact:</div>
                  <div className="text-sm text-gray-300">{seva.impact}</div>
                </div>

                {/* Donate Button */}
                <motion.button
                  className={`w-full font-bold py-3 rounded-lg transition-all duration-300 ${
                    seva.popular
                      ? 'bg-gradient-to-r from-saffron to-gold text-black hover:shadow-lg'
                      : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-saffron hover:to-gold hover:text-black'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Donate Now
                </motion.button>

                {/* Other Amount Option */}
                <div className="mt-3 text-center">
                  <button className="text-gray-400 hover:text-saffron text-sm transition-colors duration-300">
                    Or choose your own amount
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Amount Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-saffron/10 to-gold/10 rounded-2xl p-8 border border-saffron border-opacity-20 backdrop-blur-sm text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Can't find the right seva option?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Every contribution, no matter the size, is valuable and appreciated. You can also donate any amount for general temple operations.
          </p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-saffron to-gold text-black font-bold rounded-full hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Make Custom Donation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
