import { motion } from 'framer-motion';

export default function HowToJoin() {
  const steps = [
    {
      step: 1,
      title: 'Fill Registration Form',
      description: 'Complete our simple volunteer application with your interests and availability',
      icon: '📝',
      color: 'from-blue-500 to-cyan-600',
      details: ['Basic personal information', 'Service area preferences', 'Availability schedule', 'Skills and experience'],
      duration: '5-10 minutes'
    },
    {
      step: 2,
      title: 'Attend Orientation',
      description: 'Join our friendly orientation session to learn about temple values and volunteer guidelines',
      icon: '👥',
      color: 'from-green-500 to-teal-600',
      details: ['Temple philosophy introduction', 'Volunteer code of conduct', 'Safety guidelines', 'Q&A session'],
      duration: '1.5 hours'
    },
    {
      step: 3,
      title: 'Get Your Assignment',
      description: 'Receive your seva assignment based on your interests, skills, and our current needs',
      icon: '🎯',
      color: 'from-purple-500 to-indigo-600',
      details: ['Matched to suitable role', 'Meet your team leader', 'Receive training materials', 'Set your schedule'],
      duration: '30 minutes'
    },
    {
      step: 4,
      title: 'Begin Sacred Service',
      description: 'Start your spiritual journey through seva and become part of our temple family',
      icon: '🙏',
      color: 'from-orange-500 to-red-600',
      details: ['Start with guided practice', 'Regular check-ins', 'Ongoing support', 'Spiritual growth'],
      duration: 'Ongoing'
    }
  ];

  const requirements = [
    {
      category: 'Age Requirements',
      icon: '👶',
      details: [
        '16+ for most volunteer roles',
        '18+ for leadership positions',
        '14-15 with parent/guardian consent',
        'Special youth programs available'
      ]
    },
    {
      category: 'Commitment Level',
      icon: '⏰',
      details: [
        'Minimum 2 hours per week preferred',
        'Flexible scheduling available',
        'Seasonal volunteers welcome',
        'Short-term project opportunities'
      ]
    },
    {
      category: 'Basic Requirements',
      icon: '✅',
      details: [
        'Respectful and positive attitude',
        'Willingness to learn and serve',
        'Follow temple guidelines',
        'Basic health and safety awareness'
      ]
    }
  ];

  const orientationSchedule = [
    { date: 'Every Sunday', time: '2:00 PM - 3:30 PM', type: 'Regular Session', capacity: '20 people' },
    { date: 'First Saturday', time: '10:00 AM - 11:30 AM', type: 'Weekend Session', capacity: '15 people' },
    { date: 'Festival Days', time: 'Special timing', type: 'Festival Orientation', capacity: 'Unlimited' }
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-600 rounded-full opacity-15 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-200">🚶</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-800">📋</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-1200">🎯</div>
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
            <span className="mx-4 text-4xl animate-pulse">🚶</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            How to Join Our Volunteer Family
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Simple steps to begin your journey of seva and spiritual growth with us
          </p>
        </motion.div>

        {/* Steps Process */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-saffron to-gold opacity-30 z-0"></div>
                )}
                
                <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-50 transition-all duration-300 group h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6 w-8 h-8 bg-gradient-to-r from-saffron to-gold rounded-full flex items-center justify-center text-black font-bold text-sm z-10">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-saffron transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2">
                        <span className="text-saffron text-xs">•</span>
                        <span className="text-gray-400 text-xs">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Duration */}
                  <div className="text-center">
                    <span className="bg-purple-900/30 text-purple-200 px-3 py-1 rounded-full text-xs font-semibold">
                      ⏱️ {step.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Volunteer Requirements</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-xl p-6 border border-gold border-opacity-30 backdrop-blur-sm hover:border-opacity-50 transition-all duration-300 group"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {req.icon}
                  </div>
                  <h4 className="font-bold text-white group-hover:text-saffron transition-colors duration-300">
                    {req.category}
                  </h4>
                </div>
                
                <ul className="space-y-2">
                  {req.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <span className="text-gold text-sm mt-1">✓</span>
                      <span className="text-gray-300 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Orientation Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-saffron/10 to-gold/10 rounded-2xl p-8 border border-saffron border-opacity-20 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Orientation Schedule</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {orientationSchedule.map((session, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-900/50 rounded-xl border border-saffron border-opacity-20"
              >
                <div className="text-3xl mb-3">📅</div>
                <h4 className="font-bold text-white mb-2">{session.type}</h4>
                <div className="space-y-1 text-sm">
                  <div className="text-saffron font-semibold">{session.date}</div>
                  <div className="text-gold">{session.time}</div>
                  <div className="text-gray-400">Capacity: {session.capacity}</div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-saffron to-gold text-black font-bold rounded-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reserve Your Orientation Spot
            </motion.button>
            <p className="text-gray-400 text-sm mt-3">
              Walk-ins welcome, but registration recommended for guaranteed spot
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
