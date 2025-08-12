import { motion } from 'framer-motion';

export default function VolunteerCallToAction() {
  const urgentNeeds = [
    {
      role: 'Festival Coordinators',
      needed: '10 volunteers',
      deadline: 'Next 2 weeks',
      description: 'Help organize upcoming Diwali celebration',
      urgency: 'high'
    },
    {
      role: 'Youth Mentors',
      needed: '5 volunteers',
      deadline: 'Next month',
      description: 'Guide and teach children in weekend programs',
      urgency: 'medium'
    }
  ];

  const additionalResources = [
    {
      title: 'Volunteer Handbook',
      description: 'Complete guide to temple volunteer policies and procedures',
      icon: '📖',
      action: 'Download PDF'
    },
    {
      title: 'Seva Stories',
      description: 'Read inspiring stories from our volunteer community',
      icon: '📚',
      action: 'Read Stories'
    },
    {
      title: 'Training Videos',
      description: 'Watch orientation videos and training materials',
      icon: '🎥',
      action: 'Watch Videos'
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
        <div className="absolute top-16 left-16 text-6xl text-saffron animate-pulse delay-500">🤝</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-1000">✨</div>
        <div className="absolute bottom-32 left-20 text-5xl text-saffron animate-pulse delay-1500">🙏</div>
        <div className="absolute bottom-16 right-16 text-4xl text-gold animate-pulse delay-200">💝</div>
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
            <span className="mx-6 text-5xl animate-pulse">🤝</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-32"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-saffron-gold mb-6">
            Your Time & Skills Are a Sacred Gift
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            Offer them in the service of the Lord and experience the joy of spiritual transformation through seva
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-saffron/20 to-gold/20 rounded-2xl p-6 max-w-3xl mx-auto border border-saffron border-opacity-30 mb-12"
          >
            <p className="text-white text-lg italic">
              "यत्करोषि यदश्नासि यज्जुहोषि ददासि यत्।<br/>
              यत्तपस्यसि कौन्तेय तत्कुरुष्व मदर्पणम्॥"
            </p>
            <p className="text-gray-300 mt-3">
              "Whatever you do, whatever you eat, whatever you offer in sacrifice, 
              whatever you give away, whatever austerities you practice - do that as an offering to Krishna"
            </p>
            <p className="text-saffron font-semibold mt-2">- Bhagavad Gita 9.27</p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              className="group relative overflow-hidden px-12 py-4 bg-gradient-to-r from-saffron via-orange-500 to-gold text-black font-bold rounded-full shadow-2xl hover:shadow-saffron/50 transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center space-x-3">
                <span>📝</span>
                <span>Fill Out Volunteer Form</span>
                <motion.span
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  →
                </motion.span>
              </span>
            </motion.button>

            <motion.button
              className="group border-2 border-saffron text-saffron font-bold px-8 py-4 rounded-full hover:bg-saffron hover:text-black transition-all duration-300 flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">📚</span>
              <span>Learn More About Seva</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Urgent Volunteer Needs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Urgent Volunteer Needs</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {urgentNeeds.map((need, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-6 border backdrop-blur-xl transition-all duration-300 group ${
                  need.urgency === 'high' 
                    ? 'bg-gradient-to-br from-red-900/20 to-orange-900/20 border-red-500 border-opacity-50' 
                    : 'bg-gradient-to-br from-yellow-900/20 to-amber-900/20 border-yellow-500 border-opacity-50'
                }`}
              >
                {need.urgency === 'high' && (
                  <motion.div
                    className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🚨 URGENT
                  </motion.div>
                )}
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-saffron transition-colors duration-300">
                  {need.role}
                </h4>
                
                <p className="text-gray-300 mb-4 group-hover:text-gray-100 transition-colors duration-300">
                  {need.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm text-gray-400">Volunteers Needed</div>
                    <div className="text-saffron font-bold">{need.needed}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Deadline</div>
                    <div className={`font-bold ${need.urgency === 'high' ? 'text-red-400' : 'text-yellow-400'}`}>
                      {need.deadline}
                    </div>
                  </div>
                </div>
                
                <motion.button
                  className={`w-full font-bold py-3 rounded-lg transition-all duration-300 ${
                    need.urgency === 'high'
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:shadow-lg'
                      : 'bg-gradient-to-r from-yellow-500 to-amber-500 text-black hover:shadow-lg'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply for This Role
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Volunteer Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl p-6 border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-50 transition-all duration-300 group text-center"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {resource.icon}
                </div>
                <h4 className="font-bold text-white mb-3 group-hover:text-saffron transition-colors duration-300">
                  {resource.title}
                </h4>
                <p className="text-gray-300 mb-4 group-hover:text-gray-100 transition-colors duration-300">
                  {resource.description}
                </p>
                <motion.button
                  className="px-6 py-2 border border-saffron text-saffron rounded-lg hover:bg-saffron hover:text-black transition-all duration-300 font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {resource.action}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <div className="text-center">
            <div className="text-4xl mb-3">📞</div>
            <h4 className="font-bold text-saffron mb-2">Call Volunteer Coordinator</h4>
            <p className="text-gray-300 text-sm">
              Speak directly with our volunteer team<br/>
              +91 98765 43210<br/>
              Available: Mon-Sat, 9 AM - 6 PM
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-3">📧</div>
            <h4 className="font-bold text-saffron mb-2">Email Us</h4>
            <p className="text-gray-300 text-sm">
              Send your questions and we'll respond quickly<br/>
              volunteer@Marwadmandir.org<br/>
              Response within 24 hours
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-3">🏛️</div>
            <h4 className="font-bold text-saffron mb-2">Visit Us</h4>
            <p className="text-gray-300 text-sm">
              Drop by our volunteer desk at the temple<br/>
              Daily: 9 AM - 6 PM<br/>
              Sector 12, Jodhpur
            </p>
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
            "The highest form of worship is to serve others with pure love. 
            In serving Krishna's devotees, we serve Krishna directly."
          </p>
          <p className="text-saffron font-semibold text-xl">
            Hare Krishna! Your seva journey begins now 🙏
          </p>
        </motion.div>
      </div>
    </section>
  );
}
