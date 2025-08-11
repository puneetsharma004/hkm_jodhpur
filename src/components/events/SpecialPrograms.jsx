import { motion } from 'framer-motion';

export default function SpecialPrograms() {
  const programs = [
    {
      category: 'Spiritual Classes',
      icon: '📚',
      color: 'from-blue-500 to-indigo-600',
      programs: [
        {
          name: 'Bhagavad Gita Study',
          schedule: 'Every Sunday, 10:00 AM',
          duration: '2 hours',
          description: 'Deep dive into Krishna\'s teachings with experienced instructors',
          instructor: 'Pandit Raghunath Das',
          level: 'All Levels',
          registration: true
        },
        {
          name: 'Sanskrit Classes',
          schedule: 'Tuesdays & Thursdays, 6:00 PM',
          duration: '1.5 hours',
          description: 'Learn the sacred language of the scriptures',
          instructor: 'Dr. Sunita Sharma',
          level: 'Beginner to Advanced',
          registration: true
        }
      ]
    },
    {
      category: 'Meditation & Yoga',
      icon: '🧘',
      color: 'from-green-500 to-teal-600',
      programs: [
        {
          name: 'Morning Meditation',
          schedule: 'Daily, 6:30 AM',
          duration: '45 minutes',
          description: 'Start your day with peaceful meditation and mantras',
          instructor: 'Yoga Acharya Krishnan',
          level: 'All Levels',
          registration: false
        },
        {
          name: 'Hatha Yoga Sessions',
          schedule: 'Mon, Wed, Fri - 7:00 PM',
          duration: '1 hour',
          description: 'Traditional yoga practice for physical and spiritual wellness',
          instructor: 'Yogini Radha Devi',
          level: 'Beginner to Intermediate',
          registration: true
        }
      ]
    },
    {
      category: 'Cultural Workshops',
      icon: '🎭',
      color: 'from-purple-500 to-pink-600',
      programs: [
        {
          name: 'Classical Dance',
          schedule: 'Saturdays, 4:00 PM',
          duration: '2 hours',
          description: 'Learn Bharatanatyam and devotional dance forms',
          instructor: 'Guru Lakshmi Priya',
          level: 'All Levels',
          registration: true
        },
        {
          name: 'Kirtan & Music',
          schedule: 'Fridays, 7:30 PM',
          duration: '1.5 hours',
          description: 'Learn devotional singing and traditional instruments',
          instructor: 'Musician Govind Das',
          level: 'All Levels',
          registration: false
        }
      ]
    },
    {
      category: 'Youth Programs',
      icon: '👥',
      color: 'from-orange-500 to-red-600',
      programs: [
        {
          name: 'Krishna Kids Club',
          schedule: 'Sundays, 11:00 AM',
          duration: '2 hours',
          description: 'Fun activities and moral stories for children aged 5-12',
          instructor: 'Sister Priya & Team',
          level: 'Ages 5-12',
          registration: true
        },
        {
          name: 'Teen Spiritual Circle',
          schedule: 'Saturdays, 6:00 PM',
          duration: '1.5 hours',
          description: 'Interactive discussions and activities for teenagers',
          instructor: 'Brother Arjun',
          level: 'Ages 13-18',
          registration: true
        }
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Kavita Patel',
      program: 'Bhagavad Gita Study',
      quote: 'The classes have transformed my understanding of life and spirituality.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b002?w=60&h=60&fit=crop&crop=face'
    },
    {
      name: 'Rahul Sharma',
      program: 'Morning Meditation',
      quote: 'Starting my day with meditation has brought so much peace to my life.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face'
    }
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-600 rounded-full opacity-15 blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1500"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-400">📚</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-900">🧘</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-1300">🎭</div>
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
            <span className="mx-4 text-4xl animate-pulse">📚</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            Special Programs & Workshops
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Enhance your spiritual journey through our comprehensive learning programs and cultural workshops
          </p>
        </motion.div>

        {/* Programs by Category */}
        <div className="space-y-12">
          {programs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </div>

              {/* Programs Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {category.programs.map((program, programIndex) => (
                  <motion.div
                    key={programIndex}
                    initial={{ opacity: 0, x: programIndex % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: programIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-50 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold text-white group-hover:text-saffron transition-colors duration-300">
                        {program.name}
                      </h4>
                      {program.registration && (
                        <span className="bg-saffron text-black text-xs font-bold px-2 py-1 rounded-full">
                          REGISTER
                        </span>
                      )}
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-300">
                        <span>📅</span>
                        <span>{program.schedule}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-300">
                        <span>⏱️</span>
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-300">
                        <span>👨‍🏫</span>
                        <span>{program.instructor}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-300">
                        <span>📊</span>
                        <span>{program.level}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-6 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                      {program.description}
                    </p>

                    <div className="flex space-x-3">
                      {program.registration ? (
                        <>
                          <motion.button
                            className="flex-1 bg-gradient-to-r from-saffron to-gold text-black font-semibold py-2 px-4 rounded-lg text-sm hover:shadow-lg transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Register Now
                          </motion.button>
                          <motion.button
                            className="px-4 py-2 border border-saffron text-saffron rounded-lg text-sm hover:bg-saffron hover:text-black transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Info
                          </motion.button>
                        </>
                      ) : (
                        <motion.button
                          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-2 px-4 rounded-lg text-sm hover:shadow-lg transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Join Anytime
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">What Our Students Say</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-saffron/10 to-gold/10 rounded-xl p-6 border border-saffron border-opacity-20 backdrop-blur-sm"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-saffron"
                  />
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.program}</div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
