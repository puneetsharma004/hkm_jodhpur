export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-jodhpur-blue text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Temple Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-orange-300 mb-4">
              🕉️ Hare Krishna Marwar Mandir
            </h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-start">
                <span className="mr-2">📍</span>
                123 Temple Road, Jodhpur, Rajasthan
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                +91 98765 43210
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>
                info@marwarmandir.org
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-300 mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <a href="/" className="block hover:text-orange-300 transition-colors">Home</a>
              <a href="/about" className="block hover:text-orange-300 transition-colors">About Us</a>
              <a href="/events" className="block hover:text-orange-300 transition-colors">Darshan & Events</a>
              <a href="/gallery" className="block hover:text-orange-300 transition-colors">Gallery</a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-300 mb-4">Services</h3>
            <div className="space-y-2 text-sm">
              <a href="/donations" className="block hover:text-orange-300 transition-colors">Donations</a>
              <a href="/visitor-info" className="block hover:text-orange-300 transition-colors">Visitor Information</a>
              <a href="/volunteer" className="block hover:text-orange-300 transition-colors">Volunteer</a>
              <a href="/blog" className="block hover:text-orange-300 transition-colors">Blog</a>
            </div>
          </div>

          {/* Temple Timings & Connect */}
          <div className="space-y-4" >
            <h3 className="text-lg font-semibold text-orange-300 mb-4">Temple Timings</h3>
            <div className="space-y-2 text-sm">
              <p>🌅 Morning Aarti: 5:00 AM</p>
              <p>🌇 Evening Aarti: 7:00 PM</p>
              <p>🚪 Open Daily: 5:00 AM - 9:00 PM</p>
            </div>
            
            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-orange-300 mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="hover:text-orange-300 transition-colors">📘</a>
                <a href="#" className="hover:text-orange-300 transition-colors">📷</a>
                <a href="#" className="hover:text-orange-300 transition-colors">🐦</a>
                <a href="#" className="hover:text-orange-300 transition-colors">📺</a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400 my-8 opacity-30"></div>

        {/* Spiritual Quote */}
        <div className="text-center mb-6">
          <p className="text-orange-200 italic text-sm">
            "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज" - भगवद्गीता
          </p>
          <p className="text-xs text-blue-200 mt-1">
            "Abandon all varieties of religion and just surrender unto Me" - Bhagavad Gita
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-blue-900 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="mb-2 md:mb-0">
              <p>© {currentYear} Hare Krishna Marwar Mandir. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-1">
              <span>Made with</span>
              <span className="text-red-400 animate-pulse">❤️</span>
              <span>and devotion for Lord Krishna</span>
            </div>
          </div>
          
          {/* Additional Links */}
          <div className="text-center mt-3 pt-3 border-t border-blue-700 border-opacity-50">
            <div className="flex justify-center space-x-4 text-xs">
              <a href="/contact" className="hover:text-orange-300 transition-colors">Contact Us</a>
              <span>•</span>
              <a href="#" className="hover:text-orange-300 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-orange-300 transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-orange-300 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
