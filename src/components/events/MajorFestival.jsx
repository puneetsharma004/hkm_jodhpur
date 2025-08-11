import { motion } from 'framer-motion';

export default function MajorFestivals() {
  const majorFestivals = [
    {
      name: 'Janmashtami',
      date: 'August/September',
      description: 'The grand celebration of Lord Krishna\'s birth with midnight festivities, devotional singing, and special darshan.',
      significance: 'The most important festival celebrating Krishna\'s divine appearance on Earth',
      specialPrograms: ['Midnight Aarti', 'Krishna Jhanki', 'Devotional Drama', 'Special Bhog'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop',
      color: 'from-blue-600 to-purple-600',
      icon: '👶',
      duration: '2 Days'
    },
    {
      name: 'Radhashtami',
      date: 'August/September',
      description: 'Celebrating the appearance of Srimati Radharani, Krishna\'s eternal consort and the embodiment of divine love.',
      significance: 'Honoring the divine feminine energy and devotion',
      specialPrograms: ['Radha Abhishek', 'Flower Decorations', 'Special Kirtans', 'Radha Katha'],
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=500&h=300&fit=crop',
      color: 'from-pink-500 to-rose-600',
      icon: '🌹',
      duration: '1 Day'
    },
    {
      name: 'Holi Festival',
      date: 'March',
      description: 'The festival of colors celebrating Krishna\'s playful nature with organic colors, music, and community celebration.',
      significance: 'Celebrating the victory of good over evil and divine play',
      specialPrograms: ['Color Celebrations', 'Holika Dahan', 'Community Feast', 'Cultural Programs'],
      image: 'https://images.unsplash.com/photo-1583211892916-5e38c6ee3297?w=500&h=300&fit=crop',
      color: 'from-yellow-500 to-red-500',
      icon: '🎨',
      duration: '2 Days'
    },
    {
      name: 'Rath Yatra',
      date: 'June/July',
      description: 'The grand chariot festival where Lord Krishna travels through the streets blessing all devotees.',
      significance: 'Commemorating Krishna\'s journey and his accessibility to all',
      specialPrograms: ['Grand Procession', 'Chariot Pulling', 'Street Kirtans', 'Public Darshan'],
      image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?w=500&h=300&fit=crop',
      color: 'from-orange-500 to-amber-600',
      icon: '🏛️',
      duration: '1 Day'
    },
    {
      name: 'Diwali',
      date: 'October/November',
      description: 'Festival of lights celebrating Krishna\'s victory over darkness with lamp decorations and special prayers.',
      significance: 'The triumph of light over darkness and good over evil',
      specialPrograms: ['Lamp Lighting', 'Fireworks Display', 'Special Aarti', 'Community Dinner'],
      image: 'https://images.unsplash.com/photo-1605538883669-825200433431?w=500&h=300&fit=crop',
      color: 'from-amber-500 to-yellow-600',
      icon: '🪔',
      duration: '3 Days'
    },
    {
      name: 'Govardhan Puja',
      date: 'October/November',
      description: 'Commemorating Krishna lifting Mount Govardhan with elaborate food offerings and mountain replica.',
      significance: 'Celebrating Krishna\'s protection of devotees and nature worship',
      specialPrograms: ['Mountain Replica', 'Anna Koot', '108 Food Items', 'Parikrama'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      color: 'from-green-500 to-teal-600',
      icon: '⛰️',
      duration: '1 Day'
    }
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-600 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-500">🎉</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-1000">🎊</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-1500">🏛️</div>
        <div className="absolute bottom-16 right-16 text-4xl text-gold animate-pulse delay-200">✨</div>
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
            <span className="mx-4 text-4xl animate-pulse">🎉</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            Major Festivals & Celebrations
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Join us in celebrating the divine festivals that fill our hearts with joy and bring our community together
          </p>
        </motion.div>

        {/* Festivals Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {majorFestivals.map((festival, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl shadow-2xl overflow-hidden border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-50 transition-all duration-300 group"
            >
              {/* Festival Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={festival.image} 
                  alt={festival.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent`}></div>
                
                {/* Festival Icon */}
                <div className="absolute top-4 right-4 text-4xl bg-black/50 rounded-full p-2 backdrop-blur-sm">
                  {festival.icon}
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 left-4 bg-saffron text-black text-xs font-bold px-3 py-1 rounded-full">
                  {festival.duration}
                </div>
              </div>

              {/* Festival Content */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-saffron transition-colors duration-300">
                      {festival.name}
                    </h3>
                    <span className="text-gold text-sm font-semibold">{festival.date}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-100 transition-colors duration-300">
                    {festival.description}
                  </p>
                </div>

                {/* Significance */}
                <div className="mb-4 p-3 bg-gradient-to-r from-saffron/10 to-gold/10 rounded-lg border border-saffron border-opacity-20">
                  <h4 className="text-sm font-semibold text-saffron mb-1">Spiritual Significance</h4>
                  <p className="text-xs text-gray-300">{festival.significance}</p>
                </div>

                {/* Special Programs */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gold mb-2">Special Programs</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {festival.specialPrograms.map((program, idx) => (
                      <div 
                        key={idx} 
                        className="bg-purple-900/30 px-2 py-1 rounded text-xs text-gray-300 text-center"
                      >
                        {program}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.button
                    className="flex-1 bg-gradient-to-r from-saffron to-gold text-black font-semibold py-2 px-4 rounded-lg text-sm hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.button>
                  <motion.button
                    className="flex-1 border border-saffron text-saffron font-semibold py-2 px-4 rounded-lg text-sm hover:bg-saffron hover:text-black transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Notified
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Festival Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-saffron/10 to-gold/10 rounded-2xl p-8 border border-saffron border-opacity-20 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Why Join Our Festivals?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🤝', title: 'Community Unity', desc: 'Connect with fellow devotees' },
              { icon: '🎭', title: 'Cultural Heritage', desc: 'Experience authentic traditions' },
              { icon: '🙏', title: 'Spiritual Growth', desc: 'Deepen your devotion' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="font-bold text-saffron mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
