import { motion } from 'framer-motion';

export default function PrasadamAndSeva() {
  const prasadamSchedule = [
    {
      name: 'Morning Prasadam',
      time: '8:00 AM - 10:00 AM',
      description: 'Light breakfast prasadam after morning aarti',
      items: ['Kheer', 'Fruits', 'Tea/Milk'],
      location: 'Temple Courtyard',
      type: 'daily',
      icon: '🌅'
    },
    {
      name: 'Raj Bhog Prasadam',
      time: '1:00 PM - 2:30 PM',
      description: 'Complete lunch prasadam with traditional dishes',
      items: ['Rice', 'Dal', 'Sabzi', 'Roti', 'Sweet'],
      location: 'Community Hall',
      type: 'daily',
      icon: '🍽️'
    },
    {
      name: 'Evening Prasadam',
      time: '8:00 PM - 9:00 PM',
      description: 'Light dinner prasadam after evening aarti',
      items: ['Khichdi', 'Vegetables', 'Sweets'],
      location: 'Temple Courtyard',
      type: 'daily',
      icon: '🌇'
    },
    {
      name: 'Sunday Special Feast',
      time: '1:00 PM - 3:00 PM',
      description: 'Grand community feast with special preparations',
      items: ['15+ Dishes', 'Special Sweets', 'Festive Menu'],
      location: 'Main Hall',
      type: 'weekly',
      icon: '🎉'
    }
  ];

  const sevaOpportunities = [
    {
      title: 'Cooking Seva',
      description: 'Help prepare prasadam in our sacred kitchen',
      commitment: '2-4 hours weekly',
      requirements: 'Basic cooking skills, devotional attitude',
      benefits: 'Learn sacred cooking, serve Krishna directly',
      icon: '👩‍🍳',
      color: 'from-orange-500 to-red-600',
      participants: '25+'
    },
    {
      title: 'Distribution Seva',
      description: 'Serve prasadam to devotees and community',
      commitment: '2-3 hours per session',
      requirements: 'Friendly nature, punctuality',
      benefits: 'Connect with devotees, spread joy',
      icon: '🤝',
      color: 'from-green-500 to-teal-600',
      participants: '40+'
    },
    {
      title: 'Kitchen Cleaning',
      description: 'Maintain cleanliness of sacred kitchen',
      commitment: '1-2 hours daily',
      requirements: 'Attention to detail, reliability',
      benefits: 'Purify consciousness through seva',
      icon: '🧽',
      color: 'from-blue-500 to-indigo-600',
      participants: '15+'
    },
    {
      title: 'Grocery Procurement',
      description: 'Source fresh ingredients for temple kitchen',
      commitment: 'Flexible timing',
      requirements: 'Vehicle, knowledge of quality ingredients',
      benefits: 'Ensure best offerings to Krishna',
      icon: '🛒',
      color: 'from-purple-500 to-pink-600',
      participants: '10+'
    }
  ];

  const sponsorshipTiers = [
    {
      name: 'Daily Prasadam',
      amount: '₹2,500',
      serves: '100 people',
      includes: ['Complete meal', 'Your name in announcement', 'Special prayers'],
      popular: false
    },
    {
      name: 'Sunday Feast',
      amount: '₹10,000',
      serves: '300 people',
      includes: ['Grand feast', 'Special decoration', 'Name display', 'Photo with deity'],
      popular: true
    },
    {
      name: 'Festival Prasadam',
      amount: '₹25,000',
      serves: '500+ people',
      includes: ['Festival feast', 'Special programs', 'Family recognition', 'Blessed offerings'],
      popular: false
    }
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-600">🍽️</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-1100">🤝</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-400">🙏</div>
        <div className="absolute bottom-16 right-16 text-4xl text-gold animate-pulse delay-900">✨</div>
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
            <span className="mx-4 text-4xl animate-pulse">🍽️</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            Prasadam Distribution & Seva Opportunities
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Experience the joy of sharing Krishna's mercy through prasadam and join our community service
          </p>
        </motion.div>

        {/* Prasadam Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Daily Prasadam Schedule</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {prasadamSchedule.map((prasadam, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{prasadam.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-saffron transition-colors duration-300">
                        {prasadam.name}
                      </h4>
                      <p className="text-gold text-sm font-semibold">{prasadam.time}</p>
                    </div>
                  </div>
                  {prasadam.type === 'weekly' && (
                    <span className="bg-saffron text-black text-xs font-bold px-2 py-1 rounded-full">
                      SPECIAL
                    </span>
                  )}
                </div>

                <p className="text-gray-300 mb-4 group-hover:text-gray-100 transition-colors duration-300">
                  {prasadam.description}
                </p>

                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-saffron mb-2">Items Served:</h5>
                  <div className="flex flex-wrap gap-2">
                    {prasadam.items.map((item, idx) => (
                      <span 
                        key={idx} 
                        className="bg-purple-900/30 px-2 py-1 rounded text-xs text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <span>📍</span>
                    <span>{prasadam.location}</span>
                  </div>
                  <span className="text-gold font-semibold">Free for All</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Seva Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Seva Opportunities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {sevaOpportunities.map((seva, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-50 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${seva.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {seva.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white group-hover:text-saffron transition-colors duration-300 mb-2">
                      {seva.title}
                    </h4>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <span>👥</span>
                      <span>{seva.participants} volunteers</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                  {seva.description}
                </p>

                <div className="space-y-3 mb-6 text-sm">
                  <div>
                    <span className="text-saffron font-semibold">Commitment: </span>
                    <span className="text-gray-300">{seva.commitment}</span>
                  </div>
                  <div>
                    <span className="text-saffron font-semibold">Requirements: </span>
                    <span className="text-gray-300">{seva.requirements}</span>
                  </div>
                  <div>
                    <span className="text-saffron font-semibold">Benefits: </span>
                    <span className="text-gray-300">{seva.benefits}</span>
                  </div>
                </div>

                <motion.button
                  className="w-full bg-gradient-to-r from-saffron to-gold text-black font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join This Seva
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sponsorship Options */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Sponsor Prasadam Distribution</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {sponsorshipTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className={`rounded-2xl p-6 border backdrop-blur-xl transition-all duration-300 group relative ${
                  tier.popular 
                    ? 'bg-gradient-to-br from-saffron/20 to-gold/20 border-saffron border-opacity-60' 
                    : 'bg-gradient-to-br from-gray-900/80 to-black/80 border-purple-400 border-opacity-30 hover:border-saffron hover:border-opacity-50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-saffron text-black text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-white mb-2">{tier.name}</h4>
                  <div className="text-3xl font-bold text-saffron mb-1">{tier.amount}</div>
                  <div className="text-sm text-gray-400">Serves {tier.serves}</div>
                </div>

                <div className="space-y-3 mb-6">
                  {tier.includes.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-gold">✓</span>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  className={`w-full font-semibold py-3 rounded-lg transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-saffron to-gold text-black hover:shadow-lg'
                      : 'border border-saffron text-saffron hover:bg-saffron hover:text-black'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Sponsor Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Impact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-saffron/10 to-gold/10 rounded-2xl p-8 border border-saffron border-opacity-20 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Our Prasadam Impact</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '50,000+', label: 'Meals Served Monthly', icon: '🍽️' },
              { number: '200+', label: 'Daily Beneficiaries', icon: '👥' },
              { number: '15+', label: 'Years of Service', icon: '⏰' },
              { number: '100%', label: 'Spiritual Satisfaction', icon: '❤️' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-saffron glow mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
