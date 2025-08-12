import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaOm,
  FaLocationDot,
  FaPhone, 
  FaEnvelope, 
  FaFacebookF, 
  FaInstagram, 
  FaXTwitter,
  FaYoutube,
  FaHeart,
  FaHandHoldingHeart,
  FaUsers,
  FaBlog,
  FaCircleInfo
} from 'react-icons/fa6';

import { 
  GiLotus,
  GiGreekTemple,
  GiIncense, 
  GiSunrise,
  GiSunset,
  GiDoor
} from 'react-icons/gi';

import { MdSchedule, MdVolunteerActivism } from 'react-icons/md';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    hover: {
      x: 5,
      color: "#a855f7",
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  const socialIconVariants = {
    hover: { 
      scale: 1.2,
      y: -3,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    },
    tap: { scale: 0.9 }
  };

  const omVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.9, 1, 0.9],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.footer 
      className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 text-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Floating Particles Background */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          y: [-8, 8, -8],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(124, 58, 237, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)
          `
        }}
      />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          
          {/* Temple Info */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.h3 
              className="text-xl font-bold mb-4 flex items-center gap-3"
              variants={itemVariants}
            >
              <motion.div
                variants={omVariants}
                animate="animate"
                className="text-purple-300"
              >
                <FaOm className="text-2xl" />
              </motion.div>
              <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Hare Krishna Marwad Mandir
              </span>
            </motion.h3>
            
            <motion.div 
              className="space-y-3 text-sm"
              variants={containerVariants}
            >
              {[
                { icon: FaLocationDot, text: "123 Temple Road, Jodhpur, Rajasthan" },
                { icon: FaPhone, text: "+91 98765 43210" },
                { icon: FaEnvelope, text: "info@Marwadmandir.org" }
              ].map((item, index) => (
                <motion.p 
                  key={index}
                  className="flex items-start gap-3 group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <motion.span 
                    className="text-purple-300 mt-0.5 group-hover:text-purple-200 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <item.icon />
                  </motion.span>
                  <span className="group-hover:text-purple-200 transition-colors">
                    {item.text}
                  </span>
                </motion.p>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.h3 
              className="text-lg font-semibold text-purple-300 mb-4"
              variants={itemVariants}
            >
              Quick Links
            </motion.h3>
            <motion.div 
              className="space-y-2 text-sm"
              variants={containerVariants}
            >
              {[
                { href: "/", text: "Home", icon: GiGreekTemple },
                { href: "/about", text: "About Us", icon: FaCircleInfo },
                { href: "/events", text: "Darshan & Events", icon: GiLotus },
                { href: "/gallery", text: "Gallery", icon: FaBlog }
              ].map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.href} 
                  className="flex items-center gap-2 py-1 px-2 rounded-md transition-all hover:bg-purple-800/30"
                  variants={itemVariants}
                  whileHover="hover"
                  linkVariants={linkVariants}
                >
                  <motion.span
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="text-purple-300"
                  >
                    <link.icon />
                  </motion.span>
                  {link.text}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Services */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.h3 
              className="text-lg font-semibold text-purple-300 mb-4"
              variants={itemVariants}
            >
              Services
            </motion.h3>
            <motion.div 
              className="space-y-2 text-sm"
              variants={containerVariants}
            >
              {[
                { href: "/donations", text: "Donations", icon: FaHandHoldingHeart },
                { href: "/visitor-info", text: "Visitor Information", icon: FaCircleInfo },
                { href: "/volunteer", text: "Volunteer", icon: MdVolunteerActivism },
                { href: "/blog", text: "Blog", icon: FaBlog }
              ].map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.href} 
                  className="flex items-center gap-2 py-1 px-2 rounded-md transition-all hover:bg-purple-800/30"
                  variants={itemVariants}
                  whileHover="hover"
                  linkVariants={linkVariants}
                >
                  <motion.span
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="text-purple-300"
                  >
                    <link.icon />
                  </motion.span>
                  {link.text}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Temple Timings & Connect */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.h3 
              className="text-lg font-semibold text-purple-300 mb-4"
              variants={itemVariants}
            >
              Temple Timings
            </motion.h3>
            <motion.div 
              className="space-y-3 text-sm"
              variants={containerVariants}
            >
              {[
                { icon: GiSunrise, text: "Morning Aarti: 5:00 AM" },
                { icon: GiSunset, text: "Evening Aarti: 7:00 PM" },
                { icon: GiDoor, text: "Open Daily: 5:00 AM - 9:00 PM" }
              ].map((timing, index) => (
                <motion.p 
                  key={index}
                  className="flex items-center gap-2"
                  variants={itemVariants}
                  whileHover={{ x: 3 }}
                >
                  <motion.span 
                    className="text-purple-300"
                    whileHover={{ rotate: 15, scale: 1.2 }}
                  >
                    <timing.icon />
                  </motion.span>
                  {timing.text}
                </motion.p>
              ))}
            </motion.div>
            
            {/* Social Links */}
            <motion.div className="mt-6" variants={itemVariants}>
              <motion.h4 
                className="text-sm font-medium text-purple-300 mb-3"
                variants={itemVariants}
              >
                Follow Us
              </motion.h4>
              <motion.div 
                className="flex space-x-3"
                variants={containerVariants}
              >
                {[
                  { icon: FaFacebookF, className: "hover:text-blue-400" },
                  { icon: FaInstagram, className: "hover:text-pink-400" },
                  { icon: FaXTwitter, className: "hover:text-gray-300" },
                  { icon: FaYoutube, className: "hover:text-red-400" }
                ].map((social, index) => (
                  <motion.a 
                    key={index}
                    href="#" 
                    className={`w-10 h-10 rounded-lg bg-purple-800/30 flex items-center justify-center border border-purple-600/30 transition-all ${social.className}`}
                    variants={itemVariants}
                    whileHover="hover"
                    whileTap="tap"
                    linkVariants={socialIconVariants}
                  >
                    <social.icon className="text-sm" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="border-t border-purple-600/30 my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* Spiritual Quote */}
        <motion.div 
          className="text-center mb-6"
          variants={itemVariants}
        >
          <motion.p 
            className="text-purple-200 italic text-sm"
            variants={itemVariants}
          >
            "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज" - भगवद्गीता
          </motion.p>
          <motion.p 
            className="text-xs text-purple-300 mt-1"
            variants={itemVariants}
          >
            "Abandon all varieties of religion and just surrender unto Me" - Bhagavad Gita
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <motion.div 
        className="bg-purple-950/50 backdrop-blur-sm py-4 border-t border-purple-600/20"
        variants={itemVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center text-sm"
            variants={containerVariants}
          >
            <motion.div className="mb-2 md:mb-0" variants={itemVariants}>
              <p>© {currentYear} Hare Krishna Marwad Mandir. All rights reserved.</p>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-1"
              variants={itemVariants}
            >
              <span>Made with</span>
              <motion.span 
                className="text-red-400"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaHeart />
              </motion.span>
              <span>and devotion for Lord Krishna</span>
            </motion.div>
          </motion.div>
          
          {/* Additional Links */}
          <motion.div 
            className="text-center mt-3 pt-3 border-t border-purple-700/30"
            variants={itemVariants}
          >
            <motion.div 
              className="flex justify-center space-x-4 text-xs"
              variants={containerVariants}
            >
              {["Contact Us", "Privacy Policy", "Terms of Service", "Sitemap"].map((link, index) => (
                <React.Fragment key={index}>
                  <motion.a 
                    href="#" 
                    className="hover:text-purple-300 transition-colors"
                    variants={itemVariants}
                    whileHover={{ y: -1 }}
                  >
                    {link}
                  </motion.a>
                  {index < 3 && <span className="text-purple-400">•</span>}
                </React.Fragment>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.footer>
  );
}
