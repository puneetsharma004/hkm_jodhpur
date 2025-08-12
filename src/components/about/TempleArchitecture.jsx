import { motion } from 'framer-motion';

export default function TempleArchitecture() {
  const architecturalFeatures = [
    {
      title: 'Marwad Style Domes',
      description: 'Traditional Rajasthani architectural elements with intricate carvings',
      icon: '🏛️',
      image: 'https://images.unsplash.com/photo-1574401572222-9e4c2b6b5e4c?w=400&h=300&fit=crop'
    },
    {
      title: 'Blue City Aesthetics',
      description: 'Incorporating Jodhpur\'s famous blue color palette in temple design',
      icon: '🔵',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
    },
    {
      title: 'Sacred Sanctum',
      description: 'Inner sanctuary housing beautiful deities of Krishna and Radha',
      icon: '⛩️',
      image: 'https://images.unsplash.com/photo-1582555172866-f73bb12ba8c6?w=400&h=300&fit=crop'
    },
    {
      title: 'Community Halls',
      description: 'Spacious areas for gatherings, festivals, and spiritual programs',
      icon: '🏢',
      image: 'https://images.unsplash.com/photo-1571896848203-97f5ce0b9e9e?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-orange-600 rounded-full opacity-15 blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl animate-pulse delay-300"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-500">🏗️</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-1000">🎨</div>
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
            <span className="mx-4 text-4xl animate-pulse">🏛️</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            Temple Architecture
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A magnificent blend of traditional Marwad architecture and sacred temple design
          </p>
        </motion.div>

        {/* Main Description */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl shadow-2xl p-8 border border-purple-400 border-opacity-30 backdrop-blur-xl mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-saffron mb-6">Architectural Heritage</h3>
              <div className="space-y-4 text-gray-200 leading-relaxed">
                <p>
                  Our temple stands as a testament to the rich architectural heritage of Rajasthan, seamlessly blending traditional Marwad design principles with sacred Vedic temple architecture.
                </p>
                <p>
                  The structure incorporates the distinctive blue hues of Jodhpur, earning its place as a spiritual jewel in the Blue City. Intricate stone carvings, traditional jharokhas (overhanging enclosed balconies), and ornate domes create a visual symphony that reflects both devotion and cultural pride.
                </p>
                <p>
                  Recent renovations have preserved the original charm while incorporating modern amenities for the comfort of devotees, ensuring our temple remains a bridge between ancient wisdom and contemporary accessibility.
                </p>
              </div>
            </div>
            <div className="text-center">
              <motion.div
                className="text-8xl mb-4"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🏛️
              </motion.div>
              <p className="text-gray-300 italic">
                "Where ancient artistry meets divine inspiration"
              </p>
            </div>
          </div>
        </motion.div>

        {/* Architectural Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {architecturalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl shadow-2xl overflow-hidden border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-50 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-4 right-4 text-3xl">{feature.icon}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="font-bold text-white text-xl mb-3 group-hover:text-saffron transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-saffron/10 to-gold/10 rounded-2xl p-8 border border-saffron border-opacity-20 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Special Architectural Elements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🎨', title: 'Hand-Carved Details', desc: 'Intricate stone work by master craftsmen' },
              { icon: '💎', title: 'Sacred Geometry', desc: 'Vedic proportions for spiritual harmony' },
              { icon: '🌅', title: 'Natural Lighting', desc: 'Strategic placement for divine illumination' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
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
