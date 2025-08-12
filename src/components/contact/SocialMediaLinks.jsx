import { motion } from 'framer-motion';

export default function SocialMediaLinks() {
  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: '📘',
      color: 'from-blue-600 to-blue-700',
      followers: '25K',
      description: 'Daily updates, events, and community posts',
      url: 'https://facebook.com/Marwadmandir',
      posts: 'Daily'
    },
    {
      name: 'Instagram',
      icon: '📷',
      color: 'from-pink-500 to-purple-600',
      followers: '18K',
      description: 'Beautiful temple photos and devotional moments',
      url: 'https://instagram.com/Marwadmandir',
      posts: 'Multiple daily'
    },
    {
      name: 'YouTube',
      icon: '📺',
      color: 'from-red-500 to-red-600',
      followers: '12K',
      description: 'Live aarti, lectures, and spiritual videos',
      url: 'https://youtube.com/@Marwadmandir',
      posts: 'Weekly'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      color: 'from-sky-400 to-sky-500',
      followers: '8K',
      description: 'Quick updates, thoughts, and announcements',
      url: 'https://twitter.com/Marwadmandir',
      posts: 'Regular'
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      color: 'from-green-500 to-green-600',
      followers: '5K',
      description: 'Direct updates and community broadcasts',
      url: 'https://wa.me/919876543210',
      posts: 'Announcements'
    },
    {
      name: 'Telegram',
      icon: '✈️',
      color: 'from-blue-400 to-blue-500',
      followers: '3K',
      description: 'Spiritual quotes and daily inspiration',
      url: 'https://t.me/Marwadmandir',
      posts: 'Daily quotes'
    }
  ];

  const recentPosts = [
    {
      platform: 'Instagram',
      content: 'Beautiful morning aarti at our temple today 🌅',
      time: '2 hours ago',
      likes: '234',
      image: 'https://images.unsplash.com/photo-1582555172866-f73bb12ba8c6?w=100&h=100&fit=crop'
    },
    {
      platform: 'Facebook',
      content: 'Join us this Sunday for special Bhagavad Gita class',
      time: '6 hours ago',
      likes: '156',
      image: null
    },
    {
      platform: 'YouTube',
      content: 'New video: Evening Sandhya Aarti - Live Recording',
      time: '1 day ago',
      likes: '89',
      image: 'https://images.unsplash.com/photo-1571896848203-97f5ce0b9e9e?w=100&h=100&fit=crop'
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
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-400">📱</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-900">💬</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-1300">📲</div>
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
            <span className="mx-4 text-4xl animate-pulse">📱</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            Connect With Us Online
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Follow us on social media for daily inspiration, live updates, and community connection
          </p>
        </motion.div>

        {/* Social Platforms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {socialPlatforms.map((platform, index) => (
            <motion.a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-50 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {platform.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-saffron transition-colors duration-300">
                    {platform.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-gold font-semibold">{platform.followers}</span>
                    <span className="text-gray-400 text-sm">followers</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                {platform.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-saffron text-sm font-semibold">{platform.posts}</span>
                <div className="flex items-center space-x-2 text-gray-400 group-hover:text-saffron transition-colors duration-300">
                  <span>Follow</span>
                  <span>→</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Recent Posts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Recent Posts</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-xl p-6 border border-gold border-opacity-30 backdrop-blur-sm hover:border-opacity-50 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-3 mb-4">
                  {post.image && (
                    <img
                      src={post.image}
                      alt="Post thumbnail"
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-saffron font-semibold text-sm">{post.platform}</span>
                      <span className="text-gray-400 text-xs">{post.time}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                      {post.content}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gold">❤️ {post.likes} likes</span>
                  <span className="text-gray-400 group-hover:text-saffron transition-colors duration-300">View Post →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Media CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-saffron/10 to-gold/10 rounded-2xl p-8 border border-saffron border-opacity-20 backdrop-blur-sm text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Join Our Digital Sangha</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Be part of our online spiritual community. Get daily inspiration, live darshan updates, 
            and connect with fellow devotees from around the world.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['📘 Facebook', '📷 Instagram', '📺 YouTube', '💬 WhatsApp'].map((platform, index) => (
              <motion.button
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-saffron to-gold text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {platform}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
