import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function OfficeHours() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOfficeOpen, setIsOfficeOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      
      const currentHour = now.getHours();
      const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
      
      // Office hours: Mon-Sat 9 AM - 6 PM, Sunday 10 AM - 4 PM
      let isOpen = false;
      if (currentDay === 0) { // Sunday
        isOpen = currentHour >= 10 && currentHour < 16;
      } else { // Monday to Saturday
        isOpen = currentHour >= 9 && currentHour < 18;
      }
      setIsOfficeOpen(isOpen);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const officeSchedule = [
    {
      days: 'Monday - Saturday',
      hours: '9:00 AM - 6:00 PM',
      services: ['General Inquiries', 'Donations Processing', 'Event Registration', 'Volunteer Coordination'],
      icon: '🏢',
      isWeekend: false
    },
    {
      days: 'Sunday',
      hours: '10:00 AM - 4:00 PM',
      services: ['Limited Services', 'Emergency Assistance', 'Basic Inquiries', 'Community Programs'],
      icon: '🕐',
      isWeekend: true
    }
  ];

  const contactDepartments = [
    {
      department: 'Administration',
      hours: 'Mon-Sat: 9 AM - 6 PM',
      contact: '+91 291 2612345',
      services: ['General queries', 'Temple information', 'Official matters'],
      available: true
    },
    {
      department: 'Donations & Seva',
      hours: 'Mon-Sat: 9 AM - 6 PM',
      contact: '+91 98765 43211',
      services: ['Donation receipts', 'Seva opportunities', 'Sponsorships'],
      available: true
    },
    {
      department: 'Visitor Services',
      hours: 'Daily: 5 AM - 9 PM',
      contact: '+91 98765 43210',
      services: ['Accommodation booking', 'Visit planning', 'Guest assistance'],
      available: true
    },
    {
      department: 'Emergency Support',
      hours: '24/7 Available',
      contact: '+91 98765 43212',
      services: ['Medical emergency', 'Security', 'Urgent assistance'],
      available: true
    }
  ];

  const getDayName = (day) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[day];
  };

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-600 rounded-full opacity-15 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-200">🕐</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-800">⏰</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-1200">🏢</div>
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
            <span className="mx-4 text-4xl animate-pulse">🕐</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            Office Hours & Availability
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Our administrative team is available to assist you with inquiries, donations, and services
          </p>
        </motion.div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`mb-12 rounded-2xl p-6 border backdrop-blur-xl ${
            isOfficeOpen 
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
              {isOfficeOpen ? '🟢' : '🔴'}
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Office is currently {isOfficeOpen ? 'OPEN' : 'CLOSED'}
            </h3>
            <p className="text-gray-300 text-lg">
              {getDayName(currentTime.getDay())}, {currentTime.toLocaleTimeString('en-IN', { 
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
            {!isOfficeOpen && (
              <p className="text-yellow-300 mt-2">
                {currentTime.getDay() === 0 
                  ? 'Opens tomorrow at 9:00 AM' 
                  : currentTime.getHours() < 9 
                    ? `Opens today at ${currentTime.getDay() === 0 ? '10:00 AM' : '9:00 AM'}`
                    : 'Opens tomorrow at 9:00 AM'
                }
              </p>
            )}
          </div>
        </motion.div>

        {/* Office Schedule */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {officeSchedule.map((schedule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 border backdrop-blur-xl transition-all duration-300 group ${
                schedule.isWeekend 
                  ? 'bg-gradient-to-br from-orange-900/30 to-red-900/30 border-orange-500 border-opacity-30 hover:border-opacity-50' 
                  : 'bg-gradient-to-br from-saffron/20 to-gold/20 border-saffron border-opacity-50 hover:border-opacity-70'
              }`}
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{schedule.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{schedule.days}</h3>
                <div className="text-3xl font-bold text-saffron">{schedule.hours}</div>
              </div>

              <div>
                <h4 className="font-semibold text-gold mb-4">Available Services:</h4>
                <ul className="space-y-2">
                  {schedule.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center space-x-2">
                      <span className="text-saffron">•</span>
                      <span className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Department Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Department-wise Contact Hours</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {contactDepartments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl p-6 border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-saffron transition-colors duration-300">
                      {dept.department}
                    </h4>
                    <p className="text-gold text-sm font-semibold">{dept.hours}</p>
                    <p className="text-gray-400 text-sm mt-1">{dept.contact}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    dept.available 
                      ? 'bg-green-900/50 text-green-300' 
                      : 'bg-red-900/50 text-red-300'
                  }`}>
                    {dept.available ? '✅ Available' : '❌ Closed'}
                  </span>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-saffron mb-2">Services:</h5>
                  <ul className="space-y-1">
                    {dept.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center space-x-2">
                        <span className="text-gold text-xs">•</span>
                        <span className="text-gray-300 text-xs">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-saffron/10 to-gold/10 rounded-2xl p-8 border border-saffron border-opacity-20 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-6">Important Information</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-saffron mb-4">📞 For Immediate Assistance:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span>🚨</span>
                  <span>Emergency: +91 98765 43212 (24/7)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>🏥</span>
                  <span>Medical Help: Temple First Aid</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>🔒</span>
                  <span>Security: On-site security team</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-saffron mb-4">📧 Email Response Times:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span>⚡</span>
                  <span>General Inquiries: Within 24 hours</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>💰</span>
                  <span>Donations: Within 12 hours</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>🎪</span>
                  <span>Events: Within 48 hours</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
