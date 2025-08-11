import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BlogSidebar() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const upcomingEvents = [
    {
      title: 'Sunday Bhagavad Gita Class',
      date: '2024-08-25',
      time: '10:00 AM',
      type: 'Weekly'
    },
    {
      title: 'Janmashtami Celebration',
      date: '2024-08-30',
      time: '6:00 PM',
      type: 'Festival'
    },
    {
      title: 'Community Kitchen Volunteer Day',
      date: '2024-09-05',
      time: '9:00 AM',
      type: 'Service'
    }
  ];

  const popularPosts = [
    {
      title: 'The Power of Daily Meditation',
      views: '2.5K',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68e71?w=100&h=80&fit=crop'
    },
    {
      title: 'Understanding Krishna Consciousness',
      views: '1.8K',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=80&fit=crop'
    },
    {
      title: 'Temple Architecture and Symbolism',
      views: '1.4K',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=80&fit=crop'
    },
    {
      title: 'Community Service in Spirituality',
      views: '1.2K',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=100&h=80&fit=crop'
    }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const tags = [
    'Bhagavad Gita', 'Krishna', 'Meditation', 'Festivals', 'Community',
    'Philosophy', 'Spirituality', 'Temple', 'Service', 'Yoga',
    'Kirtan', 'Prasadam', 'Devotion', 'Wisdom', 'Peace'
  ];

  return (
    <div className="space-y-8">
      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-saffron/20 to-gold/20 rounded-2xl p-6 border border-saffron border-opacity-50 backdrop-blur-xl"
      >
        <h3 className="text-xl font-bold text-white mb-4 text-center">
          📧 Stay Spiritually Connected
        </h3>
        <p className="text-gray-300 text-sm mb-4 text-center">
          Get weekly spiritual insights and temple updates delivered to your inbox
        </p>
        
        {subscribed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-4 bg-green-900/50 rounded-lg border border-green-500 border-opacity-50"
          >
            <div className="text-3xl mb-2">🙏</div>
            <p className="text-green-300 font-semibold">Thank you for subscribing!</p>
            <p className="text-gray-300 text-xs">Check your email for confirmation</p>
          </motion.div>
        ) : (
          <form onSubmit={handleNewsletterSubmit} className="space-y-3">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all duration-300"
              required
            />
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-saffron to-gold text-black font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe Now
            </motion.button>
          </form>
        )}
      </motion.div>

      {/* Upcoming Events */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-purple-400 border-opacity-30 backdrop-blur-xl"
      >
        <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
          <span>📅</span>
          <span>Upcoming Events</span>
        </h3>
        
        <div className="space-y-4">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-l-2 border-saffron pl-4 hover:border-gold transition-colors duration-300 group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-white text-sm group-hover:text-saffron transition-colors duration-300">
                    {event.title}
                  </h4>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-gray-400 text-xs">
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400 text-xs">{event.time}</span>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  event.type === 'Festival' ? 'bg-orange-900/50 text-orange-200' :
                  event.type === 'Service' ? 'bg-green-900/50 text-green-200' :
                  'bg-blue-900/50 text-blue-200'
                }`}>
                  {event.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.button
          className="w-full mt-4 px-4 py-2 border border-saffron text-saffron rounded-lg hover:bg-saffron hover:text-black transition-all duration-300 text-sm font-semibold"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          View All Events →
        </motion.button>
      </motion.div>

      {/* Popular Posts */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-purple-400 border-opacity-30 backdrop-blur-xl"
      >
        <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
          <span>🔥</span>
          <span>Popular Articles</span>
        </h3>
        
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-16 h-12 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-white text-sm leading-tight group-hover:text-saffron transition-colors duration-300">
                  {post.title}
                </h4>
                <div className="flex items-center space-x-1 mt-1">
                  <span className="text-xs text-gray-400">👁️</span>
                  <span className="text-xs text-gold">{post.views} views</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tags Cloud */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-purple-400 border-opacity-30 backdrop-blur-xl"
      >
        <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
          <span>🏷️</span>
          <span>Popular Tags</span>
        </h3>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-900/30 text-purple-200 px-3 py-1 rounded-full text-xs hover:bg-saffron hover:text-black transition-all duration-300"
            >
              #{tag}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Donation CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-6 border border-green-500 border-opacity-30 backdrop-blur-xl text-center"
      >
        <div className="text-4xl mb-4">🙏</div>
        <h3 className="text-lg font-bold text-white mb-3">Support Our Mission</h3>
        <p className="text-gray-300 text-sm mb-4">
          Help us continue sharing spiritual wisdom and serving the community
        </p>
        <motion.button
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Donate Now 💝
        </motion.button>
      </motion.div>

      {/* Quick Links */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-purple-400 border-opacity-30 backdrop-blur-xl"
      >
        <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
        <div className="space-y-3">
          {[
            { name: 'Visitor Information', icon: '🚪', link: '/visitor-info' },
            { name: 'Events & Programs', icon: '🎭', link: '/events' },
            { name: 'Photo Gallery', icon: '📸', link: '/gallery' },
            { name: 'Contact Us', icon: '📞', link: '/contact' }
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.link}
              className="flex items-center space-x-3 text-gray-300 hover:text-saffron transition-colors duration-300 group"
              whileHover={{ x: 5 }}
            >
              <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                {link.icon}
              </span>
              <span>{link.name}</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
