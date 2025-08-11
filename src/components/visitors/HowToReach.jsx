import { motion } from 'framer-motion';

export default function HowToReach() {
  const transportOptions = [
    {
      mode: 'By Road',
      icon: '🚗',
      color: 'from-blue-500 to-cyan-600',
      details: [
        { label: 'From Jodhpur Bus Stand', distance: '5 km', fare: '₹50-80', time: '12 mins' },
        { label: 'From Railway Station', distance: '5 km', fare: '₹60-100', time: '15 mins' },
        { label: 'From Airport', distance: '8 km', fare: '₹150-200', time: '20 mins' }
      ],
      description: 'Well-connected by road with regular auto-rickshaws, taxis, and city buses',
      tips: ['Auto-rickshaws are most convenient', 'Ola/Uber available', 'Free parking at temple']
    },
    {
      mode: 'By Rail',
      icon: '🚂',
      color: 'from-green-500 to-teal-600',
      details: [
        { label: 'Jodhpur Junction', distance: '5 km', fare: '₹60-100', time: '15 mins' },
        { label: 'Auto from Station', distance: '5 km', fare: '₹80-120', time: '12 mins' },
        { label: 'Taxi from Station', distance: '5 km', fare: '₹150-250', time: '10 mins' }
      ],
      description: 'Jodhpur Junction is well-connected to major cities across India',
      tips: ['Pre-paid taxi counter available', 'Temple pickup service on request', 'Station has good facilities']
    },
    {
      mode: 'By Air',
      icon: '✈️',
      color: 'from-purple-500 to-pink-600',
      details: [
        { label: 'Jodhpur Airport', distance: '8 km', fare: '₹200-300', time: '20 mins' },
        { label: 'Airport Taxi', distance: '8 km', fare: '₹250-400', time: '18 mins' },
        { label: 'Rental Car', distance: '8 km', fare: '₹300-500', time: '15 mins' }
      ],
      description: 'Jodhpur Airport connects to Delhi, Mumbai, Bangalore and other major cities',
      tips: ['Book taxi in advance', 'Car rentals available', 'Airport shuttle on request']
    }
  ];

  const publicTransport = [
    { route: 'City Bus Route 12', stops: 'Main Station → Clock Tower → Temple', fare: '₹15-25' },
    { route: 'City Bus Route 7', stops: 'Airport → Umaid Bhawan → Temple', fare: '₹20-30' },
    { route: 'Auto Stand', location: 'Outside Railway Station & Bus Stand', fare: '₹50-150' }
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-orange-600 rounded-full opacity-15 blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1500"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-400">🚗</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-900">🚂</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-1300">✈️</div>
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
            <span className="mx-4 text-4xl animate-pulse">🛣️</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            How to Reach
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Multiple convenient ways to reach our temple from anywhere in Jodhpur and beyond
          </p>
        </motion.div>

        {/* Transport Options */}
        <div className="space-y-12 mb-16">
          {transportOptions.map((transport, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-8 border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-50 transition-all duration-300 group"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left: Transport Mode */}
                <div className="lg:col-span-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${transport.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {transport.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-saffron transition-colors duration-300">
                        {transport.mode}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                    {transport.description}
                  </p>

                  {/* Tips */}
                  <div>
                    <h4 className="font-semibold text-gold mb-3">💡 Travel Tips:</h4>
                    <ul className="space-y-2">
                      {transport.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-center space-x-2">
                          <span className="text-saffron">•</span>
                          <span className="text-gray-300 text-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Details */}
                <div className="lg:col-span-2">
                  <h4 className="font-bold text-white mb-4">Route Details & Fares</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {transport.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: detailIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-purple-900/30 rounded-xl p-4 border border-gold border-opacity-20 hover:border-opacity-40 transition-all duration-300"
                      >
                        <div className="text-center">
                          <h5 className="font-semibold text-white mb-2">{detail.label}</h5>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-400">Distance:</span>
                              <span className="text-saffron font-semibold">{detail.distance}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Fare:</span>
                              <span className="text-gold font-semibold">{detail.fare}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Time:</span>
                              <span className="text-green-400 font-semibold">{detail.time}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Public Transport Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-saffron/10 to-gold/10 rounded-2xl p-8 border border-saffron border-opacity-20 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Public Transport Options</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {publicTransport.map((transport, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-900/50 rounded-xl border border-purple-400 border-opacity-20"
              >
                <div className="text-3xl mb-3">🚌</div>
                <h4 className="font-semibold text-white mb-2">{transport.route}</h4>
                <p className="text-gray-300 text-sm mb-3">{transport.stops}</p>
                <div className="text-saffron font-bold">{transport.fare}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-saffron to-gold text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Transport Guide 📱
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
