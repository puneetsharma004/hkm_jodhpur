import { motion } from 'framer-motion';

export default function SpiritualLineage() {
  const spiritualTeachers = [
    {
      name: 'A.C. Bhaktivedanta Swami Prabhupada',
      title: 'Founder-Acharya of ISKCON',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      description: 'The visionary who brought Krishna consciousness to the Western world and established ISKCON globally.'
    },
    {
      name: 'His Holiness Radhanath Swami',
      title: 'Senior Spiritual Guide',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      description: 'Renowned spiritual teacher and author who has guided countless souls on the path of devotion.'
    },
    {
      name: 'Local Temple President',
      title: 'Temple Administrator',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
      description: 'Dedicated leader overseeing daily temple operations and community spiritual programs.'
    }
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-600 rounded-full opacity-15 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-300">🌐</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-800">👥</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-1200">🕉️</div>
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
            <span className="mx-4 text-4xl animate-pulse">🌐</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            Spiritual Lineage
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Connected to a global family of devotees through the International Society for Krishna Consciousness
          </p>
        </motion.div>

        {/* ISKCON Connection */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl shadow-2xl p-8 border border-purple-400 border-opacity-30 backdrop-blur-xl mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-saffron mb-4">ISKCON Global Network</h3>
              <div className="space-y-4 text-gray-200 leading-relaxed">
                <p>
                  Our temple is an integral part of the International Society for Krishna Consciousness (ISKCON), founded in 1966 by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada.
                </p>
                <p>
                  With over 800 centers worldwide, ISKCON represents the largest Krishna consciousness movement on Earth, dedicated to spreading the ancient Vedic wisdom and culture.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gold">800+</div>
                    <div className="text-sm text-gray-400">Global Centers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gold">50+</div>
                    <div className="text-sm text-gray-400">Countries</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4">🌍</div>
              <p className="text-gray-300 italic">
                "The whole world is one family under Krishna's love"
              </p>
            </div>
          </div>
        </motion.div>

        {/* Spiritual Teachers */}
        <div className="grid md:grid-cols-3 gap-8">
          {spiritualTeachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl shadow-2xl p-6 border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-50 transition-all duration-300 group text-center"
            >
              <div className="relative mb-6">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-24 h-24 rounded-full mx-auto border-4 border-saffron border-opacity-50 group-hover:border-opacity-80 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full shadow-lg group-hover:shadow-saffron/30 transition-shadow duration-300"></div>
              </div>
              
              <h4 className="font-bold text-white text-lg mb-2 group-hover:text-saffron transition-colors duration-300">
                {teacher.name}
              </h4>
              <p className="text-gold text-sm font-medium mb-3">{teacher.title}</p>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                {teacher.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
