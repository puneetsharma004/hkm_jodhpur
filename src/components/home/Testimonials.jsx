import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    { 
      name: 'Ramesh Kumar', 
      location: 'Jodhpur, Rajasthan',
      quote: 'A divine place where I find peace every time. The morning aarti fills my heart with joy and devotion.', 
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      role: 'Regular Devotee'
    },
    { 
      name: 'Meera Sharma', 
      location: 'Mumbai, Maharashtra',
      quote: 'The celebrations here are vibrant and soulful. Every festival becomes a divine experience that touches the soul.', 
      img: 'https://images.unsplash.com/photo-1494790108755-2616b612b002?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      role: 'Visiting Devotee'
    },
    { 
      name: 'Arjun Patel', 
      location: 'Ahmedabad, Gujarat',
      quote: 'The spiritual atmosphere and the beautiful darshan of Lord Krishna brings immense peace to my mind and heart.', 
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      role: 'Temple Volunteer'
    },
    { 
      name: 'Priya Agarwal', 
      location: 'Delhi, India',
      quote: 'This temple has become my spiritual home. The community here is so welcoming and the seva opportunities are endless.', 
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      role: 'Temple Patron'
    }
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      {/* Animated Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-32 w-96 h-96 bg-orange-600 rounded-full opacity-10 blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-purple-600 rounded-full opacity-15 blur-3xl animate-pulse delay-300"></div>
      </div>

      {/* Spiritual Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-16 text-5xl text-saffron animate-pulse delay-500">💭</div>
        <div className="absolute top-40 right-20 text-4xl text-gold animate-pulse delay-1000">⭐</div>
        <div className="absolute bottom-40 left-20 text-6xl text-saffron animate-pulse delay-1500">🙏</div>
        <div className="absolute bottom-20 right-16 text-4xl text-gold animate-pulse delay-200">❤️</div>
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
            <span className="mx-4 text-4xl animate-pulse">💭</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            What Devotees Say
          </h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Hear from our beloved devotees about their spiritual journey with us
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-2xl shadow-2xl border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-50 transition-all duration-300 group"
            >
              {/* Quote */}
              <div className="relative mb-6">
                <div className="absolute -top-2 -left-2 text-4xl text-saffron opacity-30">"</div>
                <div className="absolute -bottom-4 -right-2 text-4xl text-saffron opacity-30">"</div>
                <p className="text-gray-100 text-lg italic leading-relaxed relative z-10 group-hover:text-white transition-colors duration-300">
                  {testimonial.quote}
                </p>
              </div>

              {/* Rating Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <motion.span
                    key={starIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (i * 0.2) + (starIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="text-gold text-xl mr-1 glow"
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>

              {/* Devotee Info */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img 
                    src={testimonial.img} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-3 border-saffron border-opacity-50 group-hover:border-opacity-80 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full shadow-lg group-hover:shadow-saffron/30 transition-shadow duration-300"></div>
                </div>
                
                <div className="flex-1">
                  <h4 className="font-bold text-white text-lg group-hover:text-saffron transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-gold text-sm font-medium">{testimonial.role}</p>
                  <p className="text-gray-400 text-xs">{testimonial.location}</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <span className="text-2xl text-saffron">🕉️</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-saffron/10 to-gold/10 p-8 rounded-2xl border border-saffron border-opacity-20 backdrop-blur-sm max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-4">Share Your Experience</h4>
            <p className="text-gray-300 mb-6">
              We'd love to hear about your spiritual journey with us. Your words inspire others to join our divine family.
            </p>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(255, 153, 51, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-saffron via-orange-500 to-amber-400 text-black font-bold px-6 py-3 rounded-full shadow-xl hover:shadow-saffron/50 transition-all duration-300 glow-button"
            >
              Submit Your Testimonial 📝
            </motion.button>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto"
        >
          {[
            { number: '1000+', label: 'Happy Devotees', icon: '😊' },
            { number: '15+', label: 'Years of Service', icon: '🏛️' },
            { number: '50+', label: 'Community Events', icon: '🎉' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 + (i * 0.1) }}
              viewport={{ once: true }}
              className="text-center p-4 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-xl border border-gold border-opacity-20 backdrop-blur-sm"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-saffron glow">{stat.number}</div>
              <div className="text-gray-300 text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-3 text-2xl filter drop-shadow-2xl">
            <span className="text-saffron glow animate-pulse">🙏</span>
            <span className="text-gold glow animate-pulse delay-300">❤️</span>
            <span className="text-saffron glow animate-pulse delay-600">⭐</span>
            <span className="text-gold glow animate-pulse delay-900">❤️</span>
            <span className="text-saffron glow animate-pulse delay-1200">🙏</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
