import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCalendarDays,  // was FaCalendarAlt
  FaOm, 
  FaUtensils, 
  FaPlaceOfWorship,  // instead of FaTempleHindu
  FaChevronLeft, 
  FaChevronRight, 
  FaXmark  // was FaTimes
} from 'react-icons/fa6';  // Note: fa6 for newer versions

import { 
  GiLotus,  // was GiLotusFlower
  GiIncense, 
  GiByzantinTemple   // choose specific temple type
} from 'react-icons/gi';

import { MdSchedule } from 'react-icons/md';

export default function Announcements() {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const announcements = [
    {
      text: "Janmashtami celebrations start from 6th September!",
      link: "/events",
      linkText: "View Details",
      icon: FaCalendarDays,
      priority: "high",
      color: "from-amber-500 to-orange-600"
    },
    {
      text: "Daily Aarti timings: 5AM, 7:30AM, 12PM, 7PM, 9:30PM",
      link: "/visitor-info",
      linkText: "Aarti Schedule",
      icon: FaOm,
      priority: "medium",
      color: "from-saffron to-orange-500"
    },
    {
      text: "Free Prasadam distribution every Sunday at 1PM",
      link: "/events",
      linkText: "Learn More",
      icon: FaUtensils,
      priority: "medium",
      color: "from-gold to-yellow-500"
    },
    {
      text: "Temple darshan available from 5:00 AM to 9:00 PM daily",
      link: "/visitor-info",
      linkText: "Visit Now",
      icon: GiByzantinTemple,
      priority: "low",
      color: "from-amber-600 to-orange-600"
    }
  ];

  // Auto-rotate announcements
  useEffect(() => {
    if (announcements.length > 1 && !isPaused) {
      const timer = setInterval(() => {
        setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [announcements.length, isPaused]);

  const goToPrevious = () => {
    setCurrentAnnouncement((prev) => 
      prev === 0 ? announcements.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
  };

  if (!isVisible) return null;

  const currentItem = announcements[currentAnnouncement];
  const IconComponent = currentItem.icon;

  return (
    <motion.section
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-30 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Premium Dark Background with Glass Morphism */}
      <div className="relative bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white">
        
        {/* Glass Morphism Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-saffron/10 via-gold/5 to-orange-500/10 backdrop-blur-sm" />

        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-between py-2 px-4 sm:px-6 lg:px-8">
            
            {/* Left Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              <motion.button
                onClick={goToPrevious}
                className="p-2 rounded-full text-gold/70 hover:text-saffron hover:bg-saffron/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous announcement"
              >
                <FaChevronLeft className="w-3 h-3" />
              </motion.button>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center min-h-[60px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentAnnouncement}
                  initial={{ opacity: 0, y: 30, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -30, rotateX: 90 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 text-center"
                >
                  {/* Icon with Premium Animation */}
                  <motion.div 
                    className="flex items-center justify-center"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-saffron to-gold rounded-full blur-md opacity-50"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <div className="hidden md:block relative bg-gradient-to-br from-gold to-saffron p-3 rounded-full shadow-2xl">
                        <IconComponent className="w-6 h-6 text-white " />
                      </div>
                    </div>
                  </motion.div>

                  {/* Text Content */}
                  <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <motion.span 
                      className="font-bold text-white text-base sm:text-lg lg:text-xl leading-tight tracking-wide"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {currentItem.text}
                    </motion.span>
                    
                    <motion.a
                      href={currentItem.link}
                      className="hidden group relative md:inline-flex items-center font-bold text-sm text-white bg-gradient-to-r from-saffron to-gold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {/* Button Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      />
                      
                      <span className="relative z-10 mr-2">{currentItem.linkText}</span>
                      <motion.span
                        className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Section */}
            <div className="hidden md:flex items-center space-x-2">
              {/* Mobile Navigation */}
              <div className="md:hidden flex items-center space-x-2">
                <motion.button
                  onClick={goToPrevious}
                  className="p-1.5 rounded-full text-gold/70 hover:text-saffron hover:bg-saffron/10 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaChevronLeft className="w-3 h-3" />
                </motion.button>
                <motion.button
                  onClick={goToNext}
                  className="p-1.5 rounded-full text-gold/70 hover:text-saffron hover:bg-saffron/10 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaChevronRight className="w-3 h-3" />
                </motion.button>
              </div>

              {/* Desktop Next Button */}
              <motion.button
                onClick={goToNext}
                className="hidden sm:block p-2 rounded-full text-gold/70 hover:text-saffron hover:bg-saffron/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next announcement"
              >
                <FaChevronRight className="w-3 h-3" />
              </motion.button>

              {/* Premium Close Button */}
              <motion.button
                onClick={() => setIsVisible(false)}
                className="p-2 rounded-full text-gold/70 hover:text-red-400 hover:bg-red-500/10 transition-all duration-300 group"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close announcements"
              >
                <FaXmark className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Premium Bottom Accent */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-saffron to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        
        {/* Glowing Edge Effect */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-saffron blur-sm opacity-60" />
      </div>
    </motion.section>
  );
}
