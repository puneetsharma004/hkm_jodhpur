import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function DailyDarshanTimings() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [nextAarti, setNextAarti] = useState(null);

  const aartiSchedule = [
    {
      name: 'Mangala Aarti',
      time: '5:00 AM',
      timeValue: 5 * 60,
      description: 'Wake up the deity with devotional songs',
      significance: 'The first aarti awakens Lord Krishna and welcomes the new day with gratitude',
      icon: '🌅',
      duration: '30 mins'
    },
    {
      name: 'Sringar Aarti',
      time: '7:30 AM',
      timeValue: 7.5 * 60,
      description: 'Morning dress and decoration of deities',
      significance: 'Adorning the deities with beautiful clothes and ornaments',
      icon: '👑',
      duration: '45 mins'
    },
    {
      name: 'Raj Bhog Aarti',
      time: '12:00 PM',
      timeValue: 12 * 60,
      description: 'Midday offering and bhog',
      significance: 'The grand afternoon meal offering to the deities',
      icon: '☀️',
      duration: '1 hour'
    },
    {
      name: 'Utthapan Aarti',
      time: '4:00 PM',
      timeValue: 16 * 60,
      description: 'Afternoon awakening ceremony',
      significance: 'Waking the deities from their afternoon rest',
      icon: '🌤️',
      duration: '20 mins'
    },
    {
      name: 'Sandhya Aarti',
      time: '7:00 PM',
      timeValue: 19 * 60,
      description: 'Evening prayers and lamp ceremony',
      significance: 'The most popular evening aarti with beautiful lamp offerings',
      icon: '🌇',
      duration: '1 hour'
    },
    {
      name: 'Shayan Aarti',
      time: '9:30 PM',
      timeValue: 21.5 * 60,
      description: 'Night rest ceremony',
      significance: 'Putting the deities to peaceful rest for the night',
      icon: '🌙',
      duration: '30 mins'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      
      const currentMinutes = now.getHours() * 60 + now.getMinutes();
      const next = aartiSchedule.find(aarti => aarti.timeValue > currentMinutes);
      setNextAarti(next || aartiSchedule[0]); // If no aarti today, show tomorrow's first
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getTimeUntilNext = () => {
    if (!nextAarti) return '';
    
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    let timeUntil = nextAarti.timeValue - currentMinutes;
    
    if (timeUntil <= 0) {
      timeUntil = (24 * 60) + timeUntil; // Next day
    }
    
    const hours = Math.floor(timeUntil / 60);
    const minutes = timeUntil % 60;
    
    return `${hours}h ${minutes}m`;
  };

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-orange-600 rounded-full opacity-15 blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1500"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-400">⏰</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-900">🔔</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-1300">🕉️</div>
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
            <span className="mx-4 text-4xl animate-pulse">⏰</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            Daily Darshan & Aarti Timings
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Join us for divine darshan and experience the sacred aarti ceremonies throughout the day
          </p>
        </motion.div>

        {/* Next Aarti Highlight */}
        {nextAarti && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-saffron/20 to-gold/20 rounded-2xl p-6 mb-12 border border-saffron border-opacity-40 backdrop-blur-xl"
          >
            <div className="text-center">
              <div className="text-4xl mb-3">{nextAarti.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">Next Aarti</h3>
              <div className="text-3xl font-bold text-saffron mb-2">{nextAarti.name}</div>
              <div className="text-xl text-gold mb-2">{nextAarti.time}</div>
              <div className="text-lg text-gray-300">Starts in: <span className="font-bold text-white">{getTimeUntilNext()}</span></div>
            </div>
          </motion.div>
        )}

        {/* Aarti Schedule Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aartiSchedule.map((aarti, index) => {
            const isNext = nextAarti && aarti.name === nextAarti.name;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`rounded-2xl shadow-2xl p-6 border backdrop-blur-xl transition-all duration-300 group ${
                  isNext 
                    ? 'bg-gradient-to-br from-saffron/20 to-gold/20 border-saffron border-opacity-60' 
                    : 'bg-gradient-to-br from-gray-900/80 to-black/80 border-purple-400 border-opacity-30 hover:border-saffron hover:border-opacity-50'
                }`}
              >
                {/* Time and Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{aarti.icon}</div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${isNext ? 'text-saffron' : 'text-gold'}`}>
                      {aarti.time}
                    </div>
                    <div className="text-xs text-gray-400">{aarti.duration}</div>
                  </div>
                </div>

                {/* Aarti Name */}
                <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                  isNext ? 'text-white' : 'text-white group-hover:text-saffron'
                }`}>
                  {aarti.name}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                  {aarti.description}
                </p>

                {/* Significance */}
                <div className="border-t border-gray-600 pt-4">
                  <div className="text-xs text-gray-400 mb-1">Spiritual Significance:</div>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {aarti.significance}
                  </p>
                </div>

                {/* Next Indicator */}
                {isNext && (
                  <motion.div
                    className="absolute top-3 right-3 bg-saffron text-black text-xs font-bold px-2 py-1 rounded-full"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    NEXT
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Temple Timings */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-2xl p-8 border border-gold border-opacity-30 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-6">Temple Timings</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🌅</div>
              <h4 className="font-bold text-saffron mb-2">Morning Session</h4>
              <p className="text-gray-300">5:00 AM - 12:30 PM</p>
              <p className="text-sm text-gray-400 mt-1">Daily darshan and morning activities</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌇</div>
              <h4 className="font-bold text-saffron mb-2">Evening Session</h4>
              <p className="text-gray-300">4:00 PM - 9:30 PM</p>
              <p className="text-sm text-gray-400 mt-1">Evening darshan and night aarti</p>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-gray-600">
            <p className="text-gray-300 text-sm">
              🚪 Temple remains <span className="text-saffron font-semibold">closed</span> from 12:30 PM to 4:00 PM for deity rest
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
