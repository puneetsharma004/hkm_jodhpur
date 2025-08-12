import { motion } from 'framer-motion';

export default function VisitorContact() {
  const contactMethods = [
    {
      title: 'Visitor Helpline',
      description: 'Dedicated support for visitor queries and assistance',
      contact: '+91 98765 43210',
      hours: '24/7 Available',
      icon: '📞',
      color: 'from-green-500 to-emerald-600',
      type: 'phone'
    },
    {
      title: 'WhatsApp Support',
      description: 'Quick responses to your questions via WhatsApp',
      contact: '+91 98765 43211',
      hours: '9 AM - 9 PM',
      icon: '💬',
      color: 'from-green-400 to-green-600',
      type: 'whatsapp'
    },
    {
      title: 'Email Assistance',
      description: 'Detailed information and booking support',
      contact: 'visitors@Marwadmandir.org',
      hours: 'Response within 24 hours',
      icon: '📧',
      color: 'from-blue-500 to-cyan-600',
      type: 'email'
    },
    {
      title: 'Reception Desk',
      description: 'In-person assistance at temple entrance',
      contact: 'Temple Reception',
      hours: 'Temple Hours: 5 AM - 9 PM',
      icon: '🏪',
      color: 'from-purple-500 to-indigo-600',
      type: 'reception'
    }
  ];

  const frequentlyAsked = [
    {
      question: 'What are the temple timings?',
      answer: 'Temple is open daily from 5:00 AM to 9:00 PM with a break from 12:00 PM to 4:00 PM.'
    },
    {
      question: 'Is there any entry fee?',
      answer: 'No, temple entry is completely free for all visitors. Donations are voluntary.'
    },
    {
      question: 'Can I book accommodation in advance?',
      answer: 'Yes, temple guest rooms can be booked 15 days in advance by calling our booking desk.'
    },
    {
      question: 'Are photography and videography allowed?',
      answer: 'Yes, in designated areas. No flash during aarti. Commercial shoots require permission.'
    },
    {
      question: 'Is prasadam available for all?',
      answer: 'Yes, free prasadam is distributed after every aarti. Special feast on Sundays at 1 PM.'
    },
    {
      question: 'How can I participate in temple activities?',
      answer: 'Join our morning aarti, Sunday programs, or contact volunteers for more opportunities.'
    }
  ];

  const emergencyContacts = [
    { service: 'Temple Security', number: '+91 98765 43212', available: '24/7' },
    { service: 'Medical Emergency', number: '+91 98765 43213', available: '24/7' },
    { service: 'Lost & Found', number: '+91 98765 43214', available: 'Temple Hours' },
    { service: 'Group Bookings', number: '+91 98765 43215', available: '9 AM - 6 PM' }
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-600 rounded-full opacity-15 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-200">📞</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-800">💬</div>
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
            <span className="mx-4 text-4xl animate-pulse">📞</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            Visitor Assistance
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Our dedicated team is here to help make your temple visit smooth and memorable
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-50 transition-all duration-300 group text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {method.icon}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-saffron transition-colors duration-300">
                {method.title}
              </h3>
              
              <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                {method.description}
              </p>
              
              <div className="space-y-2">
                <div className="font-semibold text-gold">{method.contact}</div>
                <div className="text-gray-400 text-xs">{method.hours}</div>
              </div>

              <motion.button
                className={`mt-4 w-full py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  method.type === 'phone' || method.type === 'whatsapp' 
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg'
                    : 'border border-saffron text-saffron hover:bg-saffron hover:text-black'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {method.type === 'phone' && 'Call Now'}
                {method.type === 'whatsapp' && 'Chat on WhatsApp'}
                {method.type === 'email' && 'Send Email'}
                {method.type === 'reception' && 'Visit Reception'}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {frequentlyAsked.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-xl p-6 border border-gold border-opacity-30 backdrop-blur-sm hover:border-opacity-50 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-saffron rounded-full flex items-center justify-center text-black font-bold text-sm">
                    Q
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-2 group-hover:text-saffron transition-colors duration-300">
                      {faq.question}
                    </h4>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <motion.button
              className="px-6 py-3 border border-saffron text-saffron rounded-lg hover:bg-saffron hover:text-black transition-all duration-300 font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All FAQs →
            </motion.button>
          </div>
        </motion.div>

        {/* Emergency Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl p-8 border border-red-500 border-opacity-30 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Emergency & Special Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyContacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-gray-900/50 rounded-xl border border-red-400 border-opacity-20"
              >
                <div className="text-2xl mb-2">🚨</div>
                <h4 className="font-semibold text-white mb-2">{contact.service}</h4>
                <p className="text-red-300 font-mono text-sm mb-2">{contact.number}</p>
                <p className="text-gray-400 text-xs">{contact.available}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-red-200 text-sm">
              ⚠️ For medical emergencies, dial 108 (National Emergency Number) or contact our on-site medical team
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
