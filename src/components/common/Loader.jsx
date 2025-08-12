// Alternative Loader.js
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { AnimatedText, FlipText, WaveText } from 'react-bits';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const INACTIVITY_TIME = 10 * 60 * 1000;
    
    const hasVisited = sessionStorage.getItem('hasVisited');
    const lastActivity = localStorage.getItem('lastActivity');
    const now = Date.now();
    
    if (!hasVisited || (lastActivity && (now - parseInt(lastActivity)) > INACTIVITY_TIME)) {
      setIsLoading(true);
      sessionStorage.setItem('hasVisited', 'true');
      
      // Progressive text animation steps
      const steps = [
        () => setCurrentStep(1), // Welcome
        () => setCurrentStep(2), // Temple name
        () => setCurrentStep(3), // Complete
      ];
      
      steps.forEach((step, index) => {
        setTimeout(step, (index + 1) * 1000);
      });
      
      setTimeout(() => setIsLoading(false), 4500);
    }

    // Activity tracking code remains the same...
    const updateActivity = () => {
      localStorage.setItem('lastActivity', Date.now().toString());
    };

    const activities = ['click', 'scroll', 'keypress', 'mousemove'];
    activities.forEach(event => {
      document.addEventListener(event, updateActivity, { passive: true });
    });

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
          exit={{ opacity: 0, transition: { duration: 1.8, ease: "easeInOut" } }}
          className="fixed inset-0 flex items-center justify-center bg-black z-50"
        >
          <div className="text-center relative z-10 max-w-3xl mx-auto px-8">
            
            {/* Step 1: Welcome */}
            {currentStep >= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <WaveText
                  text="Welcome to"
                  className="text-5xl font-light text-amber-200 tracking-widest"
                  delay={100}
                />
              </motion.div>
            )}

            {/* Step 2: Temple Name */}
            {currentStep >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-8"
              >
                <FlipText
                  text="Hare Krishna Marwad Mandir"
                  className="text-4xl font-bold text-gradient bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent tracking-wide"
                  duration={800}
                />
              </motion.div>
            )}

            {/* Step 3: Location */}
            {currentStep >= 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mb-12"
              >
                <AnimatedText
                  text="Jodhpur • Blue City Heritage"
                  className="text-xl text-slate-400 font-medium tracking-wider"
                  animation="fadeInUp"
                  staggerDelay={50}
                />
              </motion.div>
            )}

            {/* Minimalist loading bar */}
            {currentStep >= 3 && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
