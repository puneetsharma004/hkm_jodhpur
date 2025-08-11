import { motion } from 'framer-motion';

export default function CurrentCampaigns() {
  const campaigns = [
    {
      id: 1,
      title: 'New Goshala Construction',
      description: 'Building a modern facility to house and care for 50 more sacred cows with proper medical facilities and spacious living areas.',
      image: 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=500&h=300&fit=crop',
      target: 2500000,
      raised: 1750000,
      deadline: '2024-12-31',
      daysLeft: 45,
      donors: 234,
      urgent: true,
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 2,
      title: 'Festival Kitchen Upgrade',
      description: 'Modernizing our community kitchen to serve 1000+ devotees during major festivals with improved hygiene and efficiency.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop',
      target: 800000,
      raised: 520000,
      deadline: '2024-11-15',
      daysLeft: 20,
      donors: 156,
      urgent: false,
      video: null
    },
    {
      id: 3,
      title: 'Spiritual Library Development',
      description: 'Creating a comprehensive library with rare spiritual books, digital resources, and comfortable reading spaces for devotees.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop',
      target: 1200000,
      raised: 350000,
      deadline: '2025-03-31',
      daysLeft: 120,
      donors: 89,
      urgent: false,
      video: null
    }
  ];

  const getProgressPercentage = (raised, target) => {
    return Math.min((raised / target) * 100, 100);
  };

  const formatAmount = (amount) => {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    }
    return `₹${(amount / 1000).toFixed(0)}K`;
  };

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-600 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-600">🎯</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-1100">📈</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-400">🏗️</div>
        <div className="absolute bottom-16 right-16 text-4xl text-gold animate-pulse delay-900">⚡</div>
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
            <span className="mx-4 text-4xl animate-pulse">🎯</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            Current Campaigns
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Join our active fundraising campaigns and help us achieve these important spiritual and community goals
          </p>
        </motion.div>

        {/* Campaigns Grid */}
        <div className="space-y-8">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 group ${
                campaign.urgent 
                  ? 'bg-gradient-to-br from-red-900/20 to-orange-900/20 border-2 border-red-500 border-opacity-50' 
                  : 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-purple-400 border-opacity-30 hover:border-saffron hover:border-opacity-50'
              } backdrop-blur-xl`}
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left: Image/Video */}
                <div className="relative">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  
                  {/* Urgent Badge */}
                  {campaign.urgent && (
                    <motion.div
                      className="absolute top-4 left-4 bg-red-500 text-white font-bold px-3 py-1 rounded-full text-sm"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      🚨 URGENT
                    </motion.div>
                  )}

                  {/* Video Play Button */}
                  {campaign.video && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.button
                        className="w-16 h-16 bg-saffron rounded-full flex items-center justify-center text-black text-2xl"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        ▶️
                      </motion.button>
                    </div>
                  )}

                  {/* Progress Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="text-white text-sm font-semibold mb-2">
                      {formatAmount(campaign.raised)} raised of {formatAmount(campaign.target)} goal
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-saffron to-gold h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${getProgressPercentage(campaign.raised, campaign.target)}%` }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-saffron transition-colors duration-300">
                      {campaign.title}
                    </h3>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Days left</div>
                      <div className={`text-2xl font-bold ${campaign.urgent ? 'text-red-400' : 'text-gold'}`}>
                        {campaign.daysLeft}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                    {campaign.description}
                  </p>

                  {/* Campaign Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-purple-900/30 rounded-lg">
                      <div className="text-2xl font-bold text-saffron">
                        {Math.round(getProgressPercentage(campaign.raised, campaign.target))}%
                      </div>
                      <div className="text-xs text-gray-400">Completed</div>
                    </div>
                    <div className="text-center p-3 bg-purple-900/30 rounded-lg">
                      <div className="text-2xl font-bold text-gold">{campaign.donors}</div>
                      <div className="text-xs text-gray-400">Donors</div>
                    </div>
                    <div className="text-center p-3 bg-purple-900/30 rounded-lg">
                      <div className="text-2xl font-bold text-green-400">
                        {formatAmount(campaign.target - campaign.raised)}
                      </div>
                      <div className="text-xs text-gray-400">Remaining</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <motion.button
                      className={`flex-1 font-bold py-3 rounded-lg transition-all duration-300 ${
                        campaign.urgent
                          ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:shadow-lg'
                          : 'bg-gradient-to-r from-saffron to-gold text-black hover:shadow-lg'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Contribute Now
                    </motion.button>
                    <motion.button
                      className="px-6 py-3 border border-saffron text-saffron rounded-lg hover:bg-saffron hover:text-black transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More
                    </motion.button>
                  </div>

                  {/* Share Options */}
                  <div className="mt-4 pt-4 border-t border-gray-600">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Help spread the word:</span>
                      <div className="flex space-x-2">
                        {['📘', '🐦', '💬', '📧'].map((icon, idx) => (
                          <button
                            key={idx}
                            className="text-gray-400 hover:text-saffron transition-colors duration-300"
                          >
                            {icon}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Campaigns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Active Campaigns
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
