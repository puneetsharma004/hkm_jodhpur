import { motion } from 'framer-motion';

export default function VolunteerOpportunities() {
  const opportunities = [
    {
      id: 1,
      title: 'Temple Maintenance',
      description: 'Keep our sacred space clean and beautiful through daily cleaning, flower arrangements, and temple decoration',
      icon: '🏛️',
      color: 'from-blue-500 to-cyan-600',
      timeCommitment: '2-4 hours/week',
      skills: ['Attention to detail', 'Physical stamina', 'Reverent attitude'],
      schedule: 'Flexible timing',
      volunteers: 45,
      urgent: false
    },
    {
      id: 2,
      title: 'Festival Coordination',
      description: 'Help organize magnificent celebrations during Janmashtami, Holi, Rath Yatra and other festivals',
      icon: '🎉',
      color: 'from-orange-500 to-red-600',
      timeCommitment: 'Seasonal',
      skills: ['Event planning', 'Teamwork', 'Creative thinking'],
      schedule: 'Festival periods',
      volunteers: 78,
      urgent: true
    },
    {
      id: 3,
      title: 'Prasadam Service',
      description: 'Prepare, cook, and serve blessed food with love. Experience the joy of feeding Krishna\'s devotees',
      icon: '🍽️',
      color: 'from-green-500 to-teal-600',
      timeCommitment: '3-6 hours/week',
      skills: ['Cooking experience helpful', 'Hygiene consciousness', 'Service attitude'],
      schedule: 'Daily shifts available',
      volunteers: 92,
      urgent: false
    },
    {
      id: 4,
      title: 'Cultural Programs',
      description: 'Support bhajans, classical dance, drama performances, and music programs that inspire devotion',
      icon: '🎭',
      color: 'from-purple-500 to-pink-600',
      timeCommitment: '4-8 hours/month',
      skills: ['Musical/artistic ability', 'Stage management', 'Audio/visual support'],
      schedule: 'Program schedules',
      volunteers: 34,
      urgent: false
    },
    {
      id: 5,
      title: 'Educational Support',
      description: 'Teach Sunday school, assist with Bhagavad Gita classes, and help spread spiritual knowledge',
      icon: '📚',
      color: 'from-indigo-500 to-purple-600',
      timeCommitment: '2-3 hours/week',
      skills: ['Teaching ability', 'Scripture knowledge', 'Patience with children'],
      schedule: 'Weekends mainly',
      volunteers: 28,
      urgent: true
    },
    {
      id: 6,
      title: 'Media & Outreach',
      description: 'Create content, manage social media, photography, videography to share Krishna consciousness',
      icon: '📱',
      color: 'from-cyan-500 to-blue-600',
      timeCommitment: '5-10 hours/week',
      skills: ['Digital media', 'Photography', 'Content creation', 'Social media'],
      schedule: 'Flexible',
      volunteers: 19,
      urgent: true
    },
    {
      id: 7,
      title: 'Administrative Support',
      description: 'Help with records, donation processing, visitor reception, and general office assistance',
      icon: '📋',
      color: 'from-gray-500 to-slate-600',
      timeCommitment: '4-6 hours/week',
      skills: ['Computer literacy', 'Organization', 'Communication', 'Attention to detail'],
      schedule: 'Office hours',
      volunteers: 22,
      urgent: false
    },
    {
      id: 8,
      title: 'Youth Programs',
      description: 'Mentor young devotees, organize youth camps, spiritual activities for children and teenagers',
      icon: '👥',
      color: 'from-yellow-500 to-orange-600',
      timeCommitment: '3-5 hours/week',
      skills: ['Youth mentoring', 'Activity planning', 'Leadership', 'Spiritual guidance'],
      schedule: 'Evenings & weekends',
      volunteers: 31,
      urgent: false
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
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-900">🤝</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-1300">✨</div>
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
            Volunteer Opportunities
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Choose your path of service - every role is sacred and contributes to our spiritual mission
          </p>
        </motion.div>

        {/* Opportunities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl shadow-2xl overflow-hidden border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-50 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="relative p-6 pb-4">
                {opportunity.urgent && (
                  <div className="absolute top-3 right-3">
                    <motion.span
                      className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      URGENT
                    </motion.span>
                  </div>
                )}

                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${opportunity.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {opportunity.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-saffron transition-colors duration-300">
                      {opportunity.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="text-gray-400">👥</span>
                      <span className="text-gold">{opportunity.volunteers} volunteers</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 pb-6">
                <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-100 transition-colors duration-300">
                  {opportunity.description}
                </p>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">⏰ Time:</span>
                    <span className="text-white font-semibold">{opportunity.timeCommitment}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">📅 Schedule:</span>
                    <span className="text-white font-semibold">{opportunity.schedule}</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-saffron mb-2">Skills Helpful:</h4>
                  <div className="flex flex-wrap gap-1">
                    {opportunity.skills.slice(0, 2).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-purple-900/30 text-purple-200 px-2 py-1 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                    {opportunity.skills.length > 2 && (
                      <span className="text-gray-400 text-xs">+{opportunity.skills.length - 2} more</span>
                    )}
                  </div>
                </div>

                {/* Apply Button */}
                <motion.button
                  className="w-full bg-gradient-to-r from-saffron to-gold text-black font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply for This Role
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-gradient-to-br from-saffron/10 to-gold/10 rounded-xl border border-saffron border-opacity-20">
            <div className="text-4xl mb-3">🆕</div>
            <h3 className="font-bold text-saffron mb-2">New to Volunteering?</h3>
            <p className="text-gray-300 text-sm">
              No worries! We provide orientation and training. Your enthusiasm to serve is all we need.
            </p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl border border-green-500 border-opacity-20">
            <div className="text-4xl mb-3">⏰</div>
            <h3 className="font-bold text-green-300 mb-2">Flexible Timing</h3>
            <p className="text-gray-300 text-sm">
              Most volunteer roles offer flexible schedules to accommodate your personal commitments.
            </p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-xl border border-purple-500 border-opacity-20">
            <div className="text-4xl mb-3">🎓</div>
            <h3 className="font-bold text-purple-300 mb-2">Learn & Grow</h3>
            <p className="text-gray-300 text-sm">
              Gain valuable life skills, leadership experience, and deepen your spiritual understanding.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
