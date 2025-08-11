import { motion } from 'framer-motion';

export default function TaxBenefits() {
  const taxBenefits = [
    {
      section: '80G',
      deduction: '50%',
      description: 'Deduction under Section 80G of Income Tax Act',
      eligibility: 'All donations to registered temples',
      icon: '📋'
    },
    {
      section: '35(1)(ii)',
      deduction: '100%',
      description: 'For specific charitable activities and research',
      eligibility: 'Educational and research programs',
      icon: '📚'
    }
  ];

  const receiptProcess = [
    {
      step: 1,
      title: 'Donate Online',
      description: 'Complete your donation through our secure payment gateway',
      icon: '💳'
    },
    {
      step: 2,
      title: 'Instant Confirmation',
      description: 'Receive immediate confirmation via email and SMS',
      icon: '📧'
    },
    {
      step: 3,
      title: 'Tax Receipt',
      description: 'Digital receipt with 80G certificate sent within 24 hours',
      icon: '📜'
    },
    {
      step: 4,
      title: 'File Your Returns',
      description: 'Use the receipt to claim tax deductions in your ITR',
      icon: '📊'
    }
  ];

  const documents = [
    { name: '80G Registration Certificate', status: 'valid', validity: '2025' },
    { name: 'Trust Registration', status: 'valid', validity: 'Permanent' },
    { name: 'Income Tax Exemption', status: 'valid', validity: '2026' },
    { name: 'FCRA Registration', status: 'valid', validity: '2027' }
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-600 rounded-full opacity-15 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-200">📋</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-800">💰</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-1200">📊</div>
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
            <span className="mx-4 text-4xl animate-pulse">📋</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            Tax Benefits & Receipts
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Your donations are eligible for tax deductions under Indian Income Tax Act. Save tax while serving Krishna.
          </p>
        </motion.div>

        {/* Tax Benefits Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Tax Sections */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Available Tax Deductions</h3>
            
            {taxBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-purple-400 border-opacity-30 backdrop-blur-xl hover:border-saffron hover:border-opacity-50 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-white group-hover:text-saffron transition-colors duration-300">
                        Section {benefit.section}
                      </h4>
                      <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                        {benefit.deduction} Off
                      </span>
                    </div>
                    <p className="text-gray-300 mb-3 group-hover:text-gray-100 transition-colors duration-300">
                      {benefit.description}
                    </p>
                    <div className="text-sm text-gold">
                      <strong>Eligibility:</strong> {benefit.eligibility}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Tax Calculation Example */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-500 border-opacity-30"
            >
              <h4 className="font-bold text-green-400 mb-4">💡 Tax Savings Example</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Donation Amount:</span>
                  <span className="text-white font-semibold">₹10,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Tax Deduction (50%):</span>
                  <span className="text-white font-semibold">₹5,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Your Tax Bracket:</span>
                  <span className="text-white font-semibold">30%</span>
                </div>
                <div className="border-t border-green-500 border-opacity-30 pt-2 mt-2">
                  <div className="flex justify-between">
                    <span className="text-green-400 font-semibold">Tax Saved:</span>
                    <span className="text-green-400 font-bold">₹1,500</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Receipt Process */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">How to Get Your Receipt</h3>
            
            {receiptProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-saffron to-gold rounded-full flex items-center justify-center text-black font-bold text-lg">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
                <div className="text-2xl">{step.icon}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Legal Documents */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl p-8 border border-blue-500 border-opacity-30 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Legal Documentation & Compliance</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-gray-900/50 rounded-xl border border-blue-400 border-opacity-20"
              >
                <div className="text-3xl mb-3">📄</div>
                <h4 className="font-semibold text-white text-sm mb-2">{doc.name}</h4>
                <div className="flex items-center justify-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-green-400 text-xs">Valid till {doc.validity}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <motion.button
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download All Certificates
            </motion.button>
          </div>
        </motion.div>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-xl p-6 border border-yellow-500 border-opacity-30"
        >
          <div className="flex items-start space-x-4">
            <div className="text-3xl">⚠️</div>
            <div>
              <h4 className="font-bold text-yellow-300 mb-2">Important Tax Information</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>• Tax benefits are subject to applicable Income Tax Act provisions</p>
                <p>• Please consult your tax advisor for specific advice on your situation</p>
                <p>• Receipts are issued only for donations above ₹500</p>
                <p>• Keep your receipt safe for ITR filing - digital copies are legally valid</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
