import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BlogCallToAction() {
  const [newsletterData, setNewsletterData] = useState({ name: '', email: '' });
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterData.name && newsletterData.email) {
      setIsSubscribed(true);
      setNewsletterData({ name: '', email: '' });
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  const socialPlatforms = [
    { name: 'Facebook', icon: '📘', followers: '25K', url: '#facebook' },
    { name: 'Instagram', icon: '📷', followers: '18K', url: '#instagram' },
    { name: 'YouTube', icon: '📺', followers: '12K', url: '#youtube' },
    { name: 'Twitter', icon: '🐦', followers: '8K', url: '#twitter' }
  ];

  const quickActions = [
    {
      title: 'Write for Us',
      description: 'Share your spiritual insights with our community',
      icon: '✍️',
      color: 'from-blue-500 to-cyan-600',
      action: 'Submit Article'
    },
    {
      title: 'Join Discussions',
      description: 'Engage with fellow seekers in our forums',
      icon: '💬',
      color: 'from-green-500 to-teal-600',
      action: 'Join Community'
    },
    {
      title: 'Attend Classes',
      description: 'Participate in our spiritual learning programs',
      icon: '📚',
      color: 'from-purple-500 to-indigo-600',
      action: 'View Schedule'
    }
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gold rounded-full opacity-10 blur-3xl animate-pulse delay-500 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-6xl text-saffron animate-pulse delay-500">📚</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-1000">✨</div>
        <div className="absolute bottom-32 left-20 text-5xl text-saffron animate-pulse delay-1500">💫</div>
        <div className="absolute bottom-16 right-16 text-4xl text-gold animate-pulse delay-200">📖</div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Main CTA Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-32"></div>
            <span className="mx-6 text-5xl animate-pulse">📚</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-32"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-saffron-gold mb-6">
            Stay Updated & Spiritually Connected
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            Receive spiritual insights, temple updates, and wisdom teachings directly in your inbox. 
            Join our community of seekers on the path of Krishna consciousness.
          </p>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-saffron/10 to-gold/10 rounded-2xl p-8 border border-saffron border-opacity-30 backdrop-blur-sm mb-16"
        >
          <div className="max-w-2xl mx-auto">
            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-8 bg-green-900/50 rounded-2xl border border-green-500 border-opacity-50"
              >
                <div className="text-6xl mb-4">🙏</div>
                <h3 className="text-2xl font-bold text-green-300 mb-2">Welcome to Our Spiritual Family!</h3>
                <p className="text-gray-300">
                  Thank you for subscribing. You'll receive weekly spiritual insights and temple updates.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    📧 Subscribe to Spiritual Insights
                  </h3>
                  <p className="text-gray-300">
                    Get weekly articles, teachings, and temple updates delivered to your inbox
                  </p>
                </div>
                
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={newsletterData.name}
                      onChange={(e) => setNewsletterData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Your Full Name"
                      className="px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all duration-300"
                      required
                    />
                    <input
                      type="email"
                      value={newsletterData.email}
                      onChange={(e) => setNewsletterData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your.email@example.com"
                      className="px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-saffron via-orange-500 to-gold text-black font-bold rounded-xl shadow-2xl hover:shadow-saffron/50 transition-all duration-300 text-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Subscribe to Spiritual Insights 📚
                  </motion.button>
                  
                  <p className="text-center text-gray-400 text-sm">
                    🔒 We respect your privacy. Unsubscribe anytime. No spam, only spiritual wisdom.
                  </p>
                </form>
              </>
            )}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Join Our Spiritual Community</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-60 transition-all duration-300 group text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${action.color} rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {action.icon}
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-saffron transition-colors duration-300">
                  {action.title}
                </h4>
                
                <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                  {action.description}
                </p>
                
                <motion.button
                  className="px-6 py-2 border border-saffron text-saffron rounded-lg hover:bg-saffron hover:text-black transition-all duration-300 font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {action.action}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Media Follow */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Follow Us for Daily Inspiration</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {socialPlatforms.map((platform, index) => (
              <motion.a
                key={index}
                href={platform.url}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-xl p-6 border border-gold border-opacity-30 backdrop-blur-sm hover:border-opacity-50 transition-all duration-300 group text-center"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {platform.icon}
                </div>
                <h4 className="font-bold text-white mb-1 group-hover:text-saffron transition-colors duration-300">
                  {platform.name}
                </h4>
                <p className="text-gold font-semibold">{platform.followers} followers</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Article Sharing */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-2xl p-8 border border-purple-500 border-opacity-30 backdrop-blur-sm mb-12 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Share the Wisdom</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Help spread spiritual knowledge by sharing our articles with friends and family. 
            Every share plants a seed of Krishna consciousness.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['📘 Share on Facebook', '🐦 Tweet Article', '💬 WhatsApp Share', '📧 Email Friend'].map((option, index) => (
              <motion.button
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-saffron to-gold text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {option}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Final Blessing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-6xl mb-6">🕉️</div>
          <p className="text-gray-300 italic text-lg mb-4 max-w-2xl mx-auto">
            "Through knowledge and wisdom, we illuminate the path to spiritual enlightenment. 
            May these teachings guide you closer to Krishna's divine love."
          </p>
          <p className="text-saffron font-semibold text-xl">
            Hare Krishna! Keep reading, keep growing 📚🙏
          </p>
        </motion.div>
      </div>
    </section>
  );
}
