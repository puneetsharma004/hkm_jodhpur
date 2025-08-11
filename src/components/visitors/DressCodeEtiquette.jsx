import { motion } from 'framer-motion';

export default function DressCodeEtiquette() {
  const dressCodeGuidelines = [
    {
      category: 'Recommended Attire',
      icon: '👘',
      color: 'from-green-500 to-emerald-600',
      guidelines: [
        'Traditional Indian clothing (dhoti, kurta, saree, salwar kameez)',
        'Modest Western clothing with covered shoulders and knees',
        'Comfortable clothing suitable for sitting on floor',
        'Light-colored or white clothing preferred'
      ]
    },
    {
      category: 'What to Avoid',
      icon: '🚫',
      color: 'from-red-500 to-orange-600',
      guidelines: [
        'Shorts, mini skirts, or revealing clothing',
        'Sleeveless tops or low necklines',
        'Tight-fitting or transparent clothing',
        'Clothing with inappropriate graphics or text'
      ]
    }
  ];

  const etiquetteRules = [
    {
      rule: 'Remove Footwear',
      description: 'All shoes and sandals must be removed before entering temple premises',
      icon: '👟',
      tip: 'Use the designated shoe storage area'
    },
    {
      rule: 'Maintain Silence',
      description: 'Keep your voice low and maintain peaceful atmosphere in prayer areas',
      icon: '🤫',
      tip: 'Mobile phones should be on silent mode'
    },
    {
      rule: 'No Smoking/Alcohol',
      description: 'Smoking, alcohol, and non-vegetarian food are strictly prohibited',
      icon: '🚭',
      tip: 'Please consume only vegetarian food in temple'
    },
    {
      rule: 'Photography Rules',
      description: 'Photography allowed in designated areas only, no flash during aarti',
      icon: '📷',
      tip: 'Ask permission before photographing people'
    },
    {
      rule: 'Respect Sacred Space',
      description: 'Do not touch deities or sacred objects without permission',
      icon: '🙏',
      tip: 'Follow instructions from temple staff'
    },
    {
      rule: 'Personal Hygiene',
      description: 'Maintain cleanliness and wash hands before entering prayer halls',
      icon: '🧼',
      tip: 'Hand washing facilities available at entrance'
    }
  ];

  const specialInstructions = [
    {
      title: 'During Aarti',
      instructions: [
        'Stand or sit respectfully during ceremonies',
        'Join in chanting if you know the mantras',
        'Do not walk in front of devotees during prayers',
        'Wait for prasadam distribution to complete'
      ]
    },
    {
      title: 'For Photography',
      instructions: [
        'No flash photography during religious ceremonies',
        'Avoid photographing people without permission',
        'Commercial photography requires prior approval',
        'Share photos respectfully on social media'
      ]
    },
    {
      title: 'For First-Time Visitors',
      instructions: [
        'Feel free to ask temple volunteers for guidance',
        'Observe others if unsure about customs',
        'Participate as much as you feel comfortable',
        'Take your time to absorb the spiritual atmosphere'
      ]
    }
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-500">👘</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-1000">🙏</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-1500">📜</div>
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
            <span className="mx-4 text-4xl animate-pulse">👘</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            Dress Code & Temple Etiquette
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Help us maintain the sacred atmosphere by following these simple guidelines
          </p>
        </motion.div>

        {/* Dress Code Guidelines */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {dressCodeGuidelines.map((guideline, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-8 border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-50 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${guideline.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {guideline.icon}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-saffron transition-colors duration-300">
                  {guideline.category}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {guideline.guidelines.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <span className="text-saffron text-lg mt-1">•</span>
                    <span className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Etiquette Rules */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Temple Etiquette</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {etiquetteRules.map((rule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-xl p-6 border border-gold border-opacity-30 backdrop-blur-sm hover:border-opacity-50 transition-all duration-300 group"
              >
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">{rule.icon}</div>
                  <h4 className="font-bold text-white group-hover:text-saffron transition-colors duration-300">
                    {rule.rule}
                  </h4>
                </div>
                
                <p className="text-gray-300 text-sm mb-3 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                  {rule.description}
                </p>
                
                <div className="bg-saffron/10 rounded-lg p-2">
                  <p className="text-saffron text-xs font-semibold">
                    💡 {rule.tip}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Special Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {specialInstructions.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-saffron/10 to-gold/10 rounded-xl p-6 border border-saffron border-opacity-20"
            >
              <h4 className="font-bold text-saffron mb-4 text-center">{section.title}</h4>
              <ul className="space-y-2">
                {section.instructions.map((instruction, instIndex) => (
                  <li key={instIndex} className="flex items-start space-x-2">
                    <span className="text-gold text-sm mt-1">•</span>
                    <span className="text-gray-300 text-sm">{instruction}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Final Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl p-6 border border-purple-500 border-opacity-30"
        >
          <div className="text-4xl mb-4">🙏</div>
          <p className="text-gray-300 italic">
            "These guidelines help maintain the sacred atmosphere of our temple. 
            When in doubt, observe others or ask our friendly volunteers for assistance."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
