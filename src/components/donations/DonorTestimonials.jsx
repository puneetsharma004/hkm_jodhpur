import { motion } from 'framer-motion';

export default function DonorTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar Agarwal',
      location: 'Mumbai, Maharashtra',
      donorSince: '2019',
      contribution: 'Monthly Prasadam Sponsor',
      quote: 'Donating to the temple has brought immense peace to my life. Knowing that my contribution helps feed hundreds of devotees daily fills my heart with joy. The transparency in operations and regular updates make me trust the temple completely.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      amount: '₹5,000/month',
      impact: 'Feeds 200+ devotees monthly'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Delhi, India',
      donorSince: '2020',
      contribution: 'Festival Sponsor',
      quote: 'Being part of temple festivals through sponsorship has been the most rewarding experience. Seeing thousands of devotees celebrate with pure joy during Janmashtami, knowing I contributed to that happiness, is indescribable. Hare Krishna!',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b002?w=80&h=80&fit=crop&crop=face',
      amount: '₹25,000/year',
      impact: 'Sponsors 2 major festivals annually'
    },
    {
      id: 3,
      name: 'Dr. Suresh Patel',
      location: 'Ahmedabad, Gujarat',
      donorSince: '2018',
      contribution: 'Gau Seva Supporter',
      quote: 'Supporting cow protection through the temple has been my way of following dharma. The regular photos and updates of the cows, their health reports, and seeing them well-cared for brings me immense satisfaction. This is true seva.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      amount: '₹10,000/year',
      impact: 'Supports 4 cows annually'
    },
    {
      id: 4,
      name: 'Meera Krishnan',
      location: 'Bangalore, Karnataka',
      donorSince: '2021',
      contribution: 'Education Program Donor',
      quote: 'As a teacher myself, I believe in the power of spiritual education. Contributing to the temple\'s Bhagavad Gita classes and book distribution programs feels like I\'m helping spread timeless wisdom. The impact reports show real transformation in people\'s lives.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
      amount: '₹15,000/year',
      impact: 'Educates 50+ students monthly'
    }
  ];

  const donorStats = [
    { icon: '👥', number: '2,500+', label: 'Happy Donors' },
    { icon: '🏆', number: '₹2.5Cr+', label: 'Total Raised' },
    { icon: '⭐', number: '4.9/5', label: 'Donor Satisfaction' },
    { icon: '🔄', number: '75%', label: 'Recurring Donors' }
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-orange-600 rounded-full opacity-15 blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1500"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-400">💬</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-900">⭐</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-1300">❤️</div>
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
            <span className="mx-4 text-4xl animate-pulse">💬</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            What Our Donors Say
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Hear from our beloved donor community about their experience contributing to our spiritual mission
          </p>
        </motion.div>

        {/* Donor Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {donorStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-xl border border-gold border-opacity-20 backdrop-blur-sm"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold text-saffron glow mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-8 border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-50 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-3 border-saffron border-opacity-50 group-hover:border-opacity-80 transition-all duration-300"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-saffron transition-colors duration-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                  <div className="flex items-center space-x-4 mt-2 text-xs">
                    <span className="text-gold">👤 Donor since {testimonial.donorSince}</span>
                    <span className="text-green-400">💝 {testimonial.contribution}</span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="mb-6">
                <div className="text-4xl text-saffron opacity-30 mb-2">"</div>
                <p className="text-gray-200 leading-relaxed italic group-hover:text-white transition-colors duration-300">
                  {testimonial.quote}
                </p>
                <div className="text-4xl text-saffron opacity-30 text-right">"</div>
              </div>

              {/* Impact Summary */}
              <div className="bg-gradient-to-r from-saffron/10 to-gold/10 rounded-lg p-4 border border-saffron border-opacity-20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-400">Monthly Contribution</div>
                    <div className="text-lg font-bold text-saffron">{testimonial.amount}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Impact</div>
                    <div className="text-sm font-semibold text-gold">{testimonial.impact}</div>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center mt-4 space-x-1">
                {[...Array(5)].map((_, starIndex) => (
                  <motion.span
                    key={starIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (starIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="text-gold text-lg"
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Share Experience */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-saffron/10 to-gold/10 rounded-2xl p-8 border border-saffron border-opacity-20 backdrop-blur-sm text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Share Your Donation Experience</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Your story can inspire others to join our mission. Share how donating to the temple has impacted your life and helped our community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-saffron to-gold text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Share Your Story 📝
            </motion.button>
            <motion.button
              className="px-6 py-3 border border-saffron text-saffron rounded-lg hover:bg-saffron hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Donor Community 👥
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
