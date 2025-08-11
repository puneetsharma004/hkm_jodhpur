import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function TempleTimings() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      
      const currentHour = now.getHours();
      // Temple open: 5 AM - 12 PM and 4 PM - 9 PM
      const isCurrentlyOpen = (currentHour >= 5 && currentHour < 12) || (currentHour >= 16 && currentHour < 21);
      setIsOpen(isCurrentlyOpen);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dailySchedule = [
    {
      session: 'Morning Session',
      time: '5:00 AM - 12:00 PM',
      icon: '🌅',
      activities: ['Mangala Aarti', 'Guru Puja', 'Sringar Aarti', 'Raj Bhog'],
      highlight: true
    },
    {
      session: 'Afternoon Break',
      time: '12:00 PM - 4:00 PM',
      icon: '😴',
      activities: ['Temple Closed', 'Deity Rest Time'],
      highlight: false
    },
    {
      session: 'Evening Session',
      time: '4:00 PM - 9:00 PM',
      icon: '🌇',
      activities: ['Utthapan Aarti', 'Sandhya Aarti', 'Shayan Aarti'],
      highlight: true
    }
  ];

  const specialTimings = [
    { occasion: 'Festival Days', timing: 'Extended Hours (4 AM - 10 PM)', note: 'During major festivals' },
    { occasion: 'Ekadashi', timing: 'Special Schedule', note: '24-hour darshan available' },
    { occasion: 'Janmashtami', timing: 'All Night Open', note: 'Midnight celebration' },
    { occasion: 'Sunday', timing: 'Regular + Special Programs', note: 'Community feast at 1 PM' }
  ];

  const bestTimes = [
    { time: 'Early Morning (5-7 AM)', reason: 'Peaceful atmosphere, less crowded', crowd: 'Low' },
    { time: 'Evening Aarti (7-8 PM)', reason: 'Beautiful ceremony, vibrant energy', crowd: 'High' },
    { time: 'Weekday Afternoons (4-6 PM)', reason: 'Perfect for photography', crowd: 'Medium' },
    { time: 'Sunday Mornings (6-10 AM)', reason: 'Special programs, community feel', crowd: 'High' }
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-600 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-600">⏰</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-1100">🕐</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-400">⏱️</div>
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
            Temple Timings
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Plan your visit with our daily schedule and special occasion timings
          </p>
        </motion.div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`mb-12 rounded-2xl p-6 border backdrop-blur-xl ${
            isOpen 
              ? 'bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-green-500 border-opacity-50' 
              : 'bg-gradient-to-r from-red-900/30 to-orange-900/30 border-red-500 border-opacity-50'
          }`}
        >
          <div className="text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl mb-3"
            >
              {isOpen ? '🟢' : '🔴'}
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Temple is currently {isOpen ? 'OPEN' : 'CLOSED'}
            </h3>
            <p className="text-gray-300 text-lg">
              Current time: {currentTime.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' })}
            </p>
            {!isOpen && (
              <p className="text-yellow-300 mt-2">
                Next opening: {currentTime.getHours() < 5 ? '5:00 AM Today' : '5:00 AM Tomorrow'}
              </p>
            )}
          </div>
        </motion.div>

        {/* Daily Schedule */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {dailySchedule.map((schedule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-6 border backdrop-blur-xl transition-all duration-300 group ${
                schedule.highlight 
                  ? 'bg-gradient-to-br from-saffron/20 to-gold/20 border-saffron border-opacity-50 hover:border-opacity-70' 
                  : 'bg-gradient-to-br from-gray-900/80 to-black/80 border-gray-600 border-opacity-30'
              }`}
            >
              <div className="text-center">
                <div className="text-5xl mb-4">{schedule.icon}</div>
                <h3 className={`text-xl font-bold mb-2 ${schedule.highlight ? 'text-white' : 'text-gray-400'}`}>
                  {schedule.session}
                </h3>
                <div className={`text-2xl font-bold mb-4 ${schedule.highlight ? 'text-saffron' : 'text-gray-500'}`}>
                  {schedule.time}
                </div>
                
                <div className="space-y-2">
                  {schedule.activities.map((activity, actIndex) => (
                    <div 
                      key={actIndex} 
                      className={`text-sm px-3 py-1 rounded-full ${
                        schedule.highlight 
                          ? 'bg-purple-900/30 text-gray-200' 
                          : 'bg-gray-800/50 text-gray-400'
                      }`}
                    >
                      {activity}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Timings */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Special Occasion Timings</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {specialTimings.map((special, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-xl p-6 border border-gold border-opacity-30 backdrop-blur-sm hover:border-opacity-50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-2 group-hover:text-saffron transition-colors duration-300">
                      {special.occasion}
                    </h4>
                    <p className="text-gold font-semibold mb-2">{special.timing}</p>
                    <p className="text-gray-300 text-sm">{special.note}</p>
                  </div>
                  <div className="text-2xl ml-4">🎉</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Best Times to Visit */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-saffron/10 to-gold/10 rounded-2xl p-8 border border-saffron border-opacity-20 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Best Times to Visit</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {bestTimes.map((time, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-4 bg-gray-900/50 rounded-xl"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-saffron to-gold rounded-full flex items-center justify-center text-black font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white mb-1">{time.time}</h4>
                  <p className="text-gray-300 text-sm mb-2">{time.reason}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    time.crowd === 'Low' ? 'bg-green-900/50 text-green-300' :
                    time.crowd === 'Medium' ? 'bg-yellow-900/50 text-yellow-300' :
                    'bg-red-900/50 text-red-300'
                  }`}>
                    {time.crowd} Crowd
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
