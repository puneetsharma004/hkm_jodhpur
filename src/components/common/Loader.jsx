// Loader.js
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const INACTIVITY_TIME = 10 * 60 * 1000; // 10 minutes
    
    // Check conditions
    const hasVisited = sessionStorage.getItem('hasVisited');
    const lastActivity = localStorage.getItem('lastActivity');
    const now = Date.now();
    
    // Show loader if first visit OR inactive for 10+ minutes
    if (!hasVisited || (lastActivity && (now - parseInt(lastActivity)) > INACTIVITY_TIME)) {
      setIsLoading(true);
      sessionStorage.setItem('hasVisited', 'true');
      
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    }

    // Track activity
    const updateActivity = () => {
      localStorage.setItem('lastActivity', Date.now().toString());
    };

    const activities = ['click', 'scroll', 'keypress', 'mousemove'];
    activities.forEach(event => {
      document.addEventListener(event, updateActivity, { passive: true });
    });

    // Set initial activity
    updateActivity();

    return () => {
      activities.forEach(event => {
        document.removeEventListener(event, updateActivity);
      });
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          className="fixed inset-0 flex items-center justify-center bg-jodhpur-blue z-50"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="text-8xl text-saffron mb-4"
            >
              🕉️
            </motion.div>
            <h2 className="text-gold text-xl font-bold">
              Welcome! 🙏
            </h2>
            <p className="text-white text-small">Hare Krishna Marwar Mandir</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
