import { motion } from 'framer-motion';

export default function DonationsCallToAction() {
  const urgentNeeds = [
    {
      title: 'Emergency Gau Seva',
      description: 'Winter shelter needed for 20 cows',
      amount: '₹75,000',
      deadline: '15 days',
      urgent: true
    },
    {
      title: 'Festival Kitchen Upgrade',
      description: 'Equipment for 1000+ devotee meals',
      amount: '₹2,50,000',
      deadline: '30 days',
      urgent: false
    }
  ];

  const quickDonations = [
    { amount: '₹500', impact: 'Feeds 20 devotees' },
    { amount: '₹1,500', impact: 'One day aarti sponsorship' },
    { amount: '₹5,000', impact: 'Cow food for a month' },
    { amount: '₹10,000', impact: 'Festival decoration' }
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
        <div className="absolute top-16 left-16 text-6xl text-saffron animate-pulse delay-500">🙏</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-1000">💝</div>
        <div className="absolute bottom-32 left-20 text-5xl text-saffron animate-pulse delay-1500">✨</div>
        <div className="absolute bottom-16 right-16 text-4xl text-gold animate-pulse delay-200">💰</div>
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
            <span className="mx-6 text-5xl animate-pulse">🙏</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-32"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-saffron-gold mb-6">
            Your Support Makes a Difference
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            Every contribution, big or small, helps us serve Krishna and the community. 
            Join thousands of devotees in this sacred seva.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            {/* Primary Donate Button */}
            <motion.button
              className="group relative overflow-hidden px-12 py-4 bg-gradient-to-r from-saffron via-orange-500 to-gold text-black font-bold rounded-full shadow-2xl hover:shadow-saffron/50 transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center space-x-3">
                <span>💝</span>
                <span>Donate Now</span>
                <motion.span
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  →
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gold to-saffron opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.button>

            {/* Recurring Donation */}
            <motion.button
              className="group border-2 border-saffron text-saffron font-bold px-8 py-4 rounded-full hover:bg-saffron hover:text-black transition-all duration-300 flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">🔄</span>
              <span>Monthly Donation</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Quick Donation Options */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Quick Donation Options</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickDonations.map((option, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-60 transition-all duration-300 group text-center"
              >
                <div className="text-3xl font-bold text-saffron mb-2 group-hover:text-gold transition-colors duration-300">
                  {option.amount}
                </div>
                <div className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                  {option.impact}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Urgent Needs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Urgent Needs</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {urgentNeeds.map((need, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-6 border backdrop-blur-xl transition-all duration-300 group ${
                  need.urgent 
                    ? 'bg-gradient-to-br from-red-900/20 to-orange-900/20 border-red-500 border-opacity-50' 
                    : 'bg-gradient-to-br from-gray-900/80 to-black/80 border-purple-400 border-opacity-30 hover:border-saffron hover:border-opacity-50'
                }`}
              >
                {need.urgent && (
                  <motion.div
                    className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🚨 URGENT
                  </motion.div>
                )}
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-saffron transition-colors duration-300">
                  {need.title}
                </h4>
                
                <p className="text-gray-300 mb-4 group-hover:text-gray-100 transition-colors duration-300">
                  {need.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm text-gray-400">Target Amount</div>
                    <div className="text-2xl font-bold text-saffron">{need.amount}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Deadline</div>
                    <div className={`text-lg font-bold ${need.urgent ? 'text-red-400' : 'text-gold'}`}>
                      {need.deadline}
                    </div>
                  </div>
                </div>
                
                <motion.button
                  className={`w-full font-bold py-3 rounded-lg transition-all duration-300 ${
                    need.urgent
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:shadow-lg'
                      : 'bg-gradient-to-r from-saffron to-gold text-black hover:shadow-lg'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contribute Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact & Support */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <div className="text-center">
            <div className="text-4xl mb-3">💬</div>
            <h4 className="font-bold text-saffron mb-2">Need Help?</h4>
            <p className="text-gray-300 text-sm mb-4">
              Our donation team is here to assist you with any questions about contributing to our temple.
            </p>
            <button className="text-saffron hover:text-gold transition-colors duration-300 font-semibold">
              Chat with Us →
            </button>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-3">📞</div>
            <h4 className="font-bold text-saffron mb-2">Call Us</h4>
            <p className="text-gray-300 text-sm mb-4">
              Speak directly with our donation coordinators for personalized assistance.
            </p>
            <button className="text-saffron hover:text-gold transition-colors duration-300 font-semibold">
              +91 98765 43210
            </button>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-3">📧</div>
            <h4 className="font-bold text-saffron mb-2">Email Us</h4>
            <p className="text-gray-300 text-sm mb-4">
              Send us your questions and we'll get back to you within 24 hours.
            </p>
            <button className="text-saffron hover:text-gold transition-colors duration-300 font-semibold">
              donations@Marwadmandir.org
            </button>
          </div>
        </motion.div>

        {/* Final Blessing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-6xl mb-6">🕉️</div>
          <p className="text-gray-300 italic text-lg mb-4 max-w-2xl mx-auto">
            "न हि कल्याणकृत्कश्चिद्दुर्गतिं तात गच्छति"<br/>
            "One who performs virtuous deeds never meets with misfortune"
          </p>
          <p className="text-saffron font-semibold text-xl">
            May Krishna bless you abundantly for your generous heart 🙏
          </p>
        </motion.div>
      </div>
    </section>
  );
}
