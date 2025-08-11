import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Announcements() {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const announcements = [
    {
      text: "Janmashtami celebrations start from 6th September!",
      link: "/events",
      linkText: "View Details",
      icon: "🎉",
      priority: "high"
    },
    {
      text: "Daily Aarti timings: 5AM, 7:30AM, 12PM, 7PM, 9:30PM",
      link: "/visitor-info",
      linkText: "Aarti Schedule",
      icon: "🕉️",
      priority: "medium"
    },
    {
      text: "Free Prasadam distribution every Sunday at 1PM",
      link: "/events",
      linkText: "Learn More",
      icon: "🍽️",
      priority: "medium"
    },
    {
      text: "Temple darshan available from 5:00 AM to 9:00 PM daily",
      link: "/visitor-info",
      linkText: "Visit Now",
      icon: "🏛️",
      priority: "low"
    }
  ];

  // Auto-rotate announcements
  useEffect(() => {
    if (announcements.length > 1 && !isPaused) {
      const timer = setInterval(() => {
        setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [announcements.length, isPaused]);

  if (!isVisible) return null;

  const currentItem = announcements[currentAnnouncement];

  return (
    <motion.section
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative z-50 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Gradient Background */}
      <div className="bg-gradient-to-r from-saffron via-orange-400 to-gold relative">
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #003366 2px, transparent 2px),
                               radial-gradient(circle at 75% 75%, #003366 2px, transparent 2px)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        {/* Subtle Wave Effect */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%'],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 75%, transparent 100%)',
              backgroundSize: '200% 100%'
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8">
            
            {/* Left Icon with Animation */}
            <motion.div 
              className="hidden sm:flex items-center"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span 
                className="text-2xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {currentItem.icon}
              </motion.span>
            </motion.div>

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center min-h-[50px]">
              <div className="flex items-center space-x-3 text-center">
                
                {/* Mobile Icon */}
                <motion.div 
                  className="sm:hidden"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <span className="text-xl">{currentItem.icon}</span>
                </motion.div>

                {/* Announcement Text with Animation */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentAnnouncement}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4"
                  >
                    <span className="font-bold text-jodhpur-blue text-sm sm:text-base lg:text-lg leading-tight">
                      {currentItem.text}
                    </span>
                    
                    <motion.a
                      href={currentItem.link}
                      className="inline-flex items-center font-bold text-xs sm:text-sm text-jodhpur-blue border-2 border-jodhpur-blue px-3 py-1 rounded-full hover:bg-jodhpur-blue hover:text-white transition-all duration-300 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {currentItem.linkText}
                      <motion.span
                        className="ml-1 group-hover:translate-x-1 transition-transform duration-300"
                      >
                        →
                      </motion.span>
                    </motion.a>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              
              {/* Progress Bar */}
              <div className="hidden lg:block">
                <div className="w-20 h-1 bg-jodhpur-blue bg-opacity-30 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-jodhpur-blue rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ 
                      duration: 5,
                      ease: "linear",
                      repeat: Infinity
                    }}
                    key={currentAnnouncement}
                  />
                </div>
              </div>

              {/* Dots Indicator */}
              {announcements.length > 1 && (
                <div className="hidden sm:flex items-center space-x-2">
                  {announcements.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentAnnouncement(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentAnnouncement 
                          ? 'bg-jodhpur-blue scale-125' 
                          : 'bg-jodhpur-blue bg-opacity-50 hover:bg-opacity-80'
                      }`}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Go to announcement ${index + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Pause/Play Button */}
              <motion.button
                onClick={() => setIsPaused(!isPaused)}
                className="p-2 rounded-full text-jodhpur-blue hover:bg-jodhpur-blue hover:bg-opacity-10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={isPaused ? "Resume announcements" : "Pause announcements"}
              >
                <span className="text-sm">
                  {isPaused ? '▶️' : '⏸️'}
                </span>
              </motion.button>

              {/* Close Button */}
              <motion.button
                onClick={() => setIsVisible(false)}
                className="p-2 rounded-full text-jodhpur-blue hover:bg-jodhpur-blue hover:bg-opacity-10 transition-all duration-300 group"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close announcements"
              >
                <svg className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Accent Border */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-jodhpur-blue"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </motion.section>
  );
}
