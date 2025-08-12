import { motion } from 'framer-motion';

export default function ContactCallToAction() {
  const quickActions = [
    {
      title: 'Plan Your Visit',
      description: 'Get all the information you need for a perfect temple visit',
      icon: '🗓️',
      color: 'from-blue-500 to-cyan-600',
      action: 'Plan Visit',
      link: '/visitor-info'
    },
    {
      title: 'Join Our Events',
      description: 'Participate in festivals, workshops, and spiritual programs',
      icon: '🎭',
      color: 'from-purple-500 to-pink-600',
      action: 'View Events',
      link: '/events'
    },
    {
      title: 'Support Our Mission',
      description: 'Contribute to temple activities and community service',
      icon: '🙏',
      color: 'from-green-500 to-teal-600',
      action: 'Donate Now',
      link: '/donations'
    }
  ];

  const contactMethods = [
    {
      method: 'Call Us Directly',
      detail: '+91 98765 43210',
      description: 'Speak with our team for immediate assistance',
      icon: '📞',
      action: 'Call Now'
    },
    {
      method: 'Send an Email',
      detail: 'info@Marwadmandir.org',
      description: 'Detailed inquiries and official communication',
      icon: '📧',
      action: 'Email Us'
    },
    {
      method: 'WhatsApp Chat',
      detail: '+91 98765 43211',
      description: 'Quick messages and instant responses',
      icon: '💬',
      action: 'Chat Now'
    },
    {
      method: 'Visit in Person',
      detail: 'Sector 12, Jodhpur',
      description: 'Come to our temple office for personal assistance',
      icon: '🏪',
      action: 'Get Directions'
    }
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
        <div className="absolute top-16 left-16 text-6xl text-saffron animate-pulse delay-500">💬</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-1000">✨</div>
        <div className="absolute bottom-32 left-20 text-5xl text-saffron animate-pulse delay-1500">🙏</div>
        <div className="absolute bottom-16 right-16 text-4xl text-gold animate-pulse delay-200">📞</div>
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
            <span className="mx-6 text-5xl animate-pulse">💬</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-32"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-saffron-gold mb-6">
            Let's Connect & Serve Together
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            Have questions about visiting, donating, or joining our programs? 
            We are here to help and guide you on your spiritual journey.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-saffron/20 to-gold/20 rounded-2xl p-6 max-w-3xl mx-auto border border-saffron border-opacity-30 mb-12"
          >
            <p className="text-white text-lg">
              🙏 "Your questions are important to us. Every inquiry brings us closer to serving you better 
              and spreading Krishna's love throughout our community."
            </p>
          </motion.div>
        </motion.div>

        {/* Quick Action Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {quickActions.map((action, index) => (
            <motion.a
              key={index}
              href={action.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              viewport={{ once: true }}
              whileHover={{ y: -15, scale: 1.05 }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-8 border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-60 transition-all duration-300 group text-center"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${action.color} rounded-2xl flex items-center justify-center text-white text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {action.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-saffron transition-colors duration-300">
                {action.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                {action.description}
              </p>
              
              <motion.div
                className="inline-flex items-center space-x-2 text-saffron font-semibold group-hover:text-gold transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <span>{action.action}</span>
                <span>→</span>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Choose Your Preferred Contact Method</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-xl p-6 border border-gold border-opacity-30 backdrop-blur-sm hover:border-opacity-50 transition-all duration-300 group text-center"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h4 className="font-bold text-white mb-2 group-hover:text-saffron transition-colors duration-300">
                  {method.method}
                </h4>
                <p className="text-gold font-semibold mb-2">{method.detail}</p>
                <p className="text-gray-400 text-sm mb-4">{method.description}</p>
                <span className="text-saffron text-sm font-semibold group-hover:text-gold transition-colors duration-300">
                  {method.action}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Response Promise */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-saffron/10 to-gold/10 rounded-2xl p-8 border border-saffron border-opacity-20 backdrop-blur-sm mb-12"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-6">Our Response Promise</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { time: '< 2 mins', method: 'Phone Calls', icon: '📞' },
              { time: '< 24 hrs', method: 'Email Replies', icon: '📧' },
              { time: '< 1 hr', method: 'WhatsApp Messages', icon: '💬' },
              { time: 'Immediate', method: 'In-Person Visits', icon: '🏪' }
            ].map((promise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl mb-2">{promise.icon}</div>
                <div className="text-2xl font-bold text-saffron mb-1">{promise.time}</div>
                <div className="text-gray-300 text-sm">{promise.method}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Message & CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-6xl mb-6">🕉️</div>
          <p className="text-gray-300 italic text-lg mb-6 max-w-2xl mx-auto">
            "Every question is an opportunity to serve. Every conversation is a step towards 
            building our spiritual community together."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-saffron via-orange-500 to-gold text-black font-bold rounded-full shadow-2xl hover:shadow-saffron/50 transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Conversation Today 💬
            </motion.button>
            
            <motion.button
              className="px-8 py-4 border-2 border-saffron text-saffron font-bold rounded-full hover:bg-saffron hover:text-black transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Visit 🗓️
            </motion.button>
          </div>
          
          <p className="text-saffron font-semibold text-xl">
            Hare Krishna! We're excited to hear from you 🙏
          </p>
        </motion.div>
      </div>
    </section>
  );
}
