import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HowToDonate() {
  const [selectedMethod, setSelectedMethod] = useState('online');

  const paymentMethods = [
    {
      id: 'online',
      title: 'Online Payment',
      description: 'Quick and secure payment through our integrated gateway',
      icon: '💳',
      methods: ['Credit/Debit Cards', 'UPI (GPay, PhonePe, Paytm)', 'Net Banking', 'Digital Wallets'],
      benefits: ['Instant Receipt', 'Secure SSL', 'Multiple Options', '24/7 Available']
    },
    {
      id: 'bank',
      title: 'Bank Transfer',
      description: 'Direct transfer to our temple bank account',
      icon: '🏦',
      methods: ['NEFT/RTGS', 'IMPS', 'Cheque/DD', 'Cash Deposit'],
      benefits: ['No Processing Fee', 'Large Amounts', 'Traditional Method', 'Bank Records']
    },
    {
      id: 'international',
      title: 'International',
      description: 'For devotees contributing from outside India',
      icon: '🌍',
      methods: ['PayPal', 'Wire Transfer', 'Western Union', 'Wise Transfer'],
      benefits: ['Multi-Currency', 'Global Access', 'Secure Transfer', 'Tax Receipt']
    }
  ];

  const bankDetails = {
    accountName: 'Hare Krishna Marwad Mandir Trust',
    accountNumber: '123456789012',
    ifscCode: 'SBIN0001234',
    bankName: 'State Bank of India',
    branch: 'Jodhpur Main Branch',
    swiftCode: 'SBININBB123' // For international transfers
  };

  const securityFeatures = [
    { icon: '🔒', title: 'SSL Encryption', description: 'Bank-grade security' },
    { icon: '🛡️', title: 'PCI Compliance', description: 'Industry standards' },
    { icon: '✅', title: 'Verified Gateway', description: 'Trusted payment partners' },
    { icon: '🔐', title: 'No Data Storage', description: 'Your info stays safe' }
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-orange-600 rounded-full opacity-15 blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1500"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-400">💳</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-900">🏦</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-1300">🌍</div>
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
            <span className="mx-4 text-4xl animate-pulse">💳</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            How to Donate
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Choose your preferred method to contribute to our temple. All options are secure and provide instant confirmation
          </p>
        </motion.div>

        {/* Payment Method Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-4 bg-gradient-to-r from-gray-900/50 to-black/50 p-2 rounded-2xl border border-purple-400 border-opacity-30 backdrop-blur-xl">
            {paymentMethods.map((method) => (
              <motion.button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  selectedMethod === method.id
                    ? 'bg-gradient-to-r from-saffron to-gold text-black'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl">{method.icon}</span>
                <span>{method.title}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Selected Method Details */}
        <motion.div
          key={selectedMethod}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Left: Method Details */}
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-8 border border-purple-400 border-opacity-30 backdrop-blur-xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-4xl">{paymentMethods.find(m => m.id === selectedMethod)?.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {paymentMethods.find(m => m.id === selectedMethod)?.title}
                </h3>
                <p className="text-gray-300">
                  {paymentMethods.find(m => m.id === selectedMethod)?.description}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-saffron mb-3">Available Methods:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {paymentMethods.find(m => m.id === selectedMethod)?.methods.map((method, index) => (
                    <div key={index} className="bg-purple-900/30 px-3 py-2 rounded-lg text-sm text-gray-300">
                      {method}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-saffron mb-3">Benefits:</h4>
                <div className="space-y-2">
                  {paymentMethods.find(m => m.id === selectedMethod)?.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-gold">✓</span>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bank Details or Additional Info */}
          <div className="space-y-6">
            {selectedMethod === 'bank' && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-2xl p-6 border border-gold border-opacity-30 backdrop-blur-sm"
              >
                <h4 className="font-bold text-gold mb-4">Bank Account Details</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Account Name:</span>
                    <span className="text-white font-semibold">{bankDetails.accountName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Account Number:</span>
                    <span className="text-white font-mono">{bankDetails.accountNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">IFSC Code:</span>
                    <span className="text-white font-mono">{bankDetails.ifscCode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Bank:</span>
                    <span className="text-white">{bankDetails.bankName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Branch:</span>
                    <span className="text-white">{bankDetails.branch}</span>
                  </div>
                </div>
                
                <motion.button
                  className="w-full mt-4 bg-gradient-to-r from-saffron to-gold text-black font-semibold py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Copy Bank Details
                </motion.button>
              </motion.div>
            )}

            {selectedMethod === 'international' && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-2xl p-6 border border-gold border-opacity-30 backdrop-blur-sm"
              >
                <h4 className="font-bold text-gold mb-4">International Transfer Details</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">SWIFT Code:</span>
                    <span className="text-white font-mono">{bankDetails.swiftCode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Beneficiary:</span>
                    <span className="text-white">{bankDetails.accountName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Country:</span>
                    <span className="text-white">India</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-yellow-900/30 rounded-lg border border-yellow-500 border-opacity-30">
                  <p className="text-yellow-300 text-xs">
                    ⚠️ International transfers may take 3-5 business days and incur additional fees from your bank.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Security Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl p-6 border border-green-500 border-opacity-30 backdrop-blur-sm"
            >
              <h4 className="font-bold text-green-400 mb-4">🔒 Security & Trust</h4>
              <div className="grid grid-cols-2 gap-4">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl mb-2">{feature.icon}</div>
                    <div className="text-sm font-semibold text-white">{feature.title}</div>
                    <div className="text-xs text-gray-400">{feature.description}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Quick Donate Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            className="px-12 py-4 bg-gradient-to-r from-saffron via-orange-500 to-gold text-black font-bold rounded-full shadow-2xl hover:shadow-saffron/50 transition-all duration-300 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Donation Process →
          </motion.button>
          <p className="text-gray-400 text-sm mt-3">Secure • Fast • Trusted by 1000+ devotees</p>
        </motion.div>
      </div>
    </section>
  );
}
