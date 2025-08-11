import { motion } from 'framer-motion';

export default function Facilities() {
  const facilities = [
    {
      name: 'Shoe Storage',
      description: 'Secure and organized shoe storage facility at the entrance',
      icon: '👟',
      details: ['Free of charge', 'Numbered tokens provided', 'Attended storage', 'Open during temple hours'],
      available: true
    },
    {
      name: 'Drinking Water',
      description: 'Clean and filtered drinking water stations throughout the premises',
      icon: '💧',
      details: ['RO filtered water', 'Multiple stations', 'Bottles for sale', 'Free water dispensers'],
      available: true
    },
    {
      name: 'Free Prasadam Counter',
      description: 'Distribution of blessed food offerings after aarti ceremonies',
      icon: '🍽️',
      details: ['After each aarti', 'Vegetarian only', 'Served with love', 'Special feast on Sundays'],
      available: true
    },
    {
      name: 'Parking Facilities',
      description: 'Ample parking space for cars, motorcycles, and bicycles',
      icon: '🚗',
      details: ['Free parking', 'Security available', 'Separate areas for different vehicles', '24/7 access'],
      available: true
    },
    {
      name: 'Restrooms',
      description: 'Clean and well-maintained washroom facilities for visitors',
      icon: '🚻',
      details: ['Separate for men/women', 'Wheelchair accessible', 'Baby changing area', 'Regular cleaning'],
      available: true
    },
    {
      name: 'Book Store',
      description: 'Spiritual books, audio CDs, and religious items available',
      icon: '📚',
      details: ['Bhagavad Gita in multiple languages', 'Audio lectures', 'Prayer beads', 'Spiritual accessories'],
      available: true
    },
    {
      name: 'First Aid',
      description: 'Basic medical assistance and emergency care available',
      icon: '🏥',
      details: ['Trained volunteers', 'Basic medicines', 'Emergency contact numbers', 'Doctor on call'],
      available: true
    },
    {
      name: 'WiFi Access',
      description: 'Free wireless internet access in common areas',
      icon: '📶',
      details: ['Temple_WiFi network', 'Password available at reception', 'Good coverage', 'Fair usage policy'],
      available: true
    }
  ];

  const accessibilityFeatures = [
    {
      feature: 'Wheelchair Access',
      description: 'Ramps and wide pathways for wheelchair users',
      icon: '♿',
      locations: ['Main entrance', 'Prayer halls', 'Restrooms', 'Dining area']
    },
    {
      feature: 'Senior Citizen Support',
      description: 'Special seating and assistance for elderly visitors',
      icon: '👴',
      locations: ['Reserved seating in prayer hall', 'Walking support available', 'Priority prasadam service']
    },
    {
      feature: 'Baby Care',
      description: 'Facilities for families with young children',
      icon: '👶',
      locations: ['Baby changing stations', 'High chairs available', 'Quiet feeding area']
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
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-400">🏢</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-900">🛠️</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-1300">⚙️</div>
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
            <span className="mx-4 text-4xl animate-pulse">🏢</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            Temple Facilities
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Modern amenities and traditional hospitality for a comfortable temple experience
          </p>
        </motion.div>

        {/* Main Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-50 transition-all duration-300 group"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {facility.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-saffron transition-colors duration-300">
                  {facility.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                  {facility.description}
                </p>
              </div>

              <div className="space-y-2">
                {facility.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center space-x-2">
                    <span className="text-gold text-xs">•</span>
                    <span className="text-gray-400 text-xs">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-center">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                  facility.available 
                    ? 'bg-green-900/50 text-green-300' 
                    : 'bg-red-900/50 text-red-300'
                }`}>
                  {facility.available ? '✅ Available' : '❌ Unavailable'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Accessibility Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Accessibility & Special Care</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {accessibilityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-saffron/10 to-gold/10 rounded-xl p-6 border border-saffron border-opacity-20 text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="font-bold text-white mb-3">{feature.feature}</h4>
                <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                
                <div className="space-y-1">
                  {feature.locations.map((location, locationIndex) => (
                    <div key={locationIndex} className="text-xs text-saffron bg-saffron/10 px-2 py-1 rounded">
                      {location}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-2xl p-8 border border-purple-500 border-opacity-30 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Additional Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { service: 'Guided Tours', availability: 'On request', icon: '🗣️' },
              { service: 'Group Bookings', availability: 'Advance notice', icon: '👥' },
              { service: 'Photography Permission', availability: 'Prior approval', icon: '📷' },
              { service: 'Event Hosting', availability: 'Based on calendar', icon: '🎪' }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-gray-900/50 rounded-xl"
              >
                <div className="text-3xl mb-2">{service.icon}</div>
                <h4 className="font-semibold text-white mb-1">{service.service}</h4>
                <p className="text-gray-400 text-xs">{service.availability}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-saffron to-gold text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact for Special Services 📞
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
