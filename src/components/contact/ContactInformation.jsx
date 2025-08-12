import { motion } from 'framer-motion';

export default function ContactInformation() {
  const contactDetails = [
    {
      category: 'Temple Address',
      icon: '📍',
      color: 'from-blue-500 to-cyan-600',
      details: [
        { label: 'Full Address', value: 'Hare Krishna Marwad Mandir, Sector 12, Near Blue City Mall, Jodhpur, Rajasthan - 342001, India' },
        { label: 'Nearest Landmark', value: 'Blue City Mall, Opposite City Hospital' },
        { label: 'Pin Code', value: '342001' },
        { label: 'GPS Coordinates', value: '26.2863° N, 73.0392° E' }
      ]
    },
    {
      category: 'Phone Numbers',
      icon: '📞',
      color: 'from-green-500 to-teal-600',
      details: [
        { label: 'General Inquiries', value: '+91 291 2612345' },
        { label: 'Visitor Assistance', value: '+91 98765 43210' },
        { label: 'Donations & Seva', value: '+91 98765 43211' },
        { label: 'Emergency Contact', value: '+91 98765 43212' }
      ]
    },
    {
      category: 'Email Addresses',
      icon: '📧',
      color: 'from-purple-500 to-pink-600',
      details: [
        { label: 'General Information', value: 'info@Marwadmandir.org' },
        { label: 'Donations & Seva', value: 'donations@Marwadmandir.org' },
        { label: 'Volunteer Opportunities', value: 'volunteer@Marwadmandir.org' },
        { label: 'Media & Press', value: 'media@Marwadmandir.org' }
      ]
    }
  ];

  const quickActions = [
    { action: 'Call Now', icon: '📞', color: 'bg-green-600', number: '+91 98765 43210' },
    { action: 'Send Email', icon: '📧', color: 'bg-blue-600', email: 'info@Marwadmandir.org' },
    { action: 'WhatsApp', icon: '💬', color: 'bg-green-500', number: '+91 98765 43211' },
    { action: 'Get Directions', icon: '🗺️', color: 'bg-purple-600', link: '#map' }
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-600 rounded-full opacity-15 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-200">📋</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-800">📞</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-1200">📧</div>
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
            <span className="mx-4 text-4xl animate-pulse">📋</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            Contact Information
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Multiple ways to reach us for all your spiritual and temple-related needs
          </p>
        </motion.div>

        {/* Contact Details Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactDetails.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-8 border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-50 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {section.icon}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-saffron transition-colors duration-300">
                  {section.category}
                </h3>
              </div>

              <div className="space-y-4">
                {section.details.map((detail, detailIndex) => (
                  <motion.div
                    key={detailIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: detailIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-2 border-saffron border-opacity-30 pl-4 hover:border-opacity-60 transition-all duration-300"
                  >
                    <div className="text-sm text-gray-400 mb-1">{detail.label}</div>
                    <div className="text-white font-semibold leading-relaxed">
                      {detail.value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-saffron/10 to-gold/10 rounded-2xl p-8 border border-saffron border-opacity-20 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Quick Contact Actions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`${action.color} text-white font-semibold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex flex-col items-center space-y-2`}
              >
                <span className="text-2xl">{action.icon}</span>
                <span>{action.action}</span>
                {action.number && <span className="text-xs opacity-80">{action.number}</span>}
                {action.email && <span className="text-xs opacity-80">{action.email}</span>}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
