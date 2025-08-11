import { motion } from 'framer-motion';
import { useState } from 'react';

export default function DonationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    customAmount: '',
    purpose: '',
    paymentMethod: 'online',
    anonymous: false,
    receipt: true,
    recurring: false
  });

  const [step, setStep] = useState(1);

  const donationPurposes = [
    { id: 'general', name: 'General Temple Operations', icon: '🏛️' },
    { id: 'gau-seva', name: 'Gau Seva (Cow Protection)', icon: '🐄' },
    { id: 'anna-daan', name: 'Anna Daan (Food Distribution)', icon: '🍽️' },
    { id: 'festival', name: 'Festival Sponsorship', icon: '🎉' },
    { id: 'construction', name: 'Temple Construction', icon: '🏗️' },
    { id: 'education', name: 'Education & Outreach', icon: '📚' }
  ];

  const suggestedAmounts = [500, 1000, 2500, 5000, 10000, 25000];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Donation form submitted:', formData);
  };

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-indigo-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 text-5xl text-saffron animate-pulse delay-500">📝</div>
        <div className="absolute top-32 right-20 text-4xl text-gold animate-pulse delay-1000">💳</div>
        <div className="absolute bottom-32 left-20 text-6xl text-saffron animate-pulse delay-1500">✨</div>
      </div>

      <div className="relative max-w-4xl mx-auto z-10">
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
            <span className="mx-4 text-4xl animate-pulse">📝</span>
            <div className="h-px bg-gradient-to-r from-transparent via-saffron to-transparent w-24"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-saffron-gold mb-4">
            Make Your Donation
          </h2>
          <p className="text-gray-300 text-lg">
            Complete this simple form to contribute to our spiritual mission
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                  step >= stepNumber 
                    ? 'bg-saffron text-black' 
                    : 'bg-gray-700 text-gray-400'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-16 h-1 mx-2 transition-all duration-300 ${
                    step > stepNumber ? 'bg-saffron' : 'bg-gray-700'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2 space-x-16 text-sm text-gray-400">
            <span className={step >= 1 ? 'text-saffron' : ''}>Details</span>
            <span className={step >= 2 ? 'text-saffron' : ''}>Amount</span>
            <span className={step >= 3 ? 'text-saffron' : ''}>Payment</span>
          </div>
        </motion.div>

        {/* Donation Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-8 border border-purple-400 border-opacity-30 backdrop-blur-xl"
        >
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Details */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-white mb-6">Personal Information</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all duration-300"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all duration-300"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all duration-300"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="anonymous"
                      checked={formData.anonymous}
                      onChange={handleInputChange}
                      className="mr-2 text-saffron focus:ring-saffron"
                    />
                    <span className="text-gray-300">Make this an anonymous donation</span>
                  </label>
                </div>
              </motion.div>
            )}

            {/* Step 2: Amount and Purpose */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-white mb-6">Donation Details</h3>
                
                {/* Suggested Amounts */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-4">
                    Select Amount
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                    {suggestedAmounts.map((amount) => (
                      <motion.button
                        key={amount}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, amount: amount.toString() }))}
                        className={`py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                          formData.amount === amount.toString()
                            ? 'bg-saffron text-black'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        ₹{amount.toLocaleString()}
                      </motion.button>
                    ))}
                  </div>
                  
                  {/* Custom Amount */}
                  <input
                    type="number"
                    name="customAmount"
                    value={formData.customAmount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all duration-300"
                    placeholder="Or enter custom amount (₹)"
                  />
                </div>

                {/* Purpose Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-4">
                    Donation Purpose
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {donationPurposes.map((purpose) => (
                      <motion.label
                        key={purpose.id}
                        className={`flex items-center p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                          formData.purpose === purpose.id
                            ? 'bg-saffron/20 border-2 border-saffron'
                            : 'bg-gray-800/50 border border-gray-600 hover:border-gray-500'
                        }`}
                        whileHover={{ scale: 1.02 }}
                      >
                        <input
                          type="radio"
                          name="purpose"
                          value={purpose.id}
                          checked={formData.purpose === purpose.id}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <span className="text-2xl mr-3">{purpose.icon}</span>
                        <span className="text-white font-medium">{purpose.name}</span>
                      </motion.label>
                    ))}
                  </div>
                </div>

                {/* Recurring Donation */}
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="recurring"
                      checked={formData.recurring}
                      onChange={handleInputChange}
                      className="mr-2 text-saffron focus:ring-saffron"
                    />
                    <span className="text-gray-300">Make this a monthly recurring donation</span>
                  </label>
                </div>
              </motion.div>
            )}

            {/* Step 3: Payment Method */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-white mb-6">Payment Method</h3>
                
                {/* Payment Options */}
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { id: 'online', name: 'Online Payment', icon: '💳', desc: 'Cards, UPI, Net Banking' },
                    { id: 'bank', name: 'Bank Transfer', icon: '🏦', desc: 'NEFT, RTGS, IMPS' },
                    { id: 'international', name: 'International', icon: '🌍', desc: 'PayPal, Wire Transfer' }
                  ].map((method) => (
                    <motion.label
                      key={method.id}
                      className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                        formData.paymentMethod === method.id
                          ? 'bg-saffron/20 border-2 border-saffron'
                          : 'bg-gray-800/50 border border-gray-600 hover:border-gray-500'
                      }`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={formData.paymentMethod === method.id}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <div className="text-3xl mb-2">{method.icon}</div>
                        <div className="font-semibold text-white mb-1">{method.name}</div>
                        <div className="text-sm text-gray-400">{method.desc}</div>
                      </div>
                    </motion.label>
                  ))}
                </div>

                {/* Receipt Option */}
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="receipt"
                      checked={formData.receipt}
                      onChange={handleInputChange}
                      className="mr-2 text-saffron focus:ring-saffron"
                    />
                    <span className="text-gray-300">Email me the donation receipt (for tax benefits)</span>
                  </label>
                </div>

                {/* Summary */}
                <div className="bg-gradient-to-r from-saffron/10 to-gold/10 rounded-lg p-6 border border-saffron border-opacity-20">
                  <h4 className="font-bold text-white mb-4">Donation Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Name:</span>
                      <span className="text-white">{formData.name || 'Anonymous'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Amount:</span>
                      <span className="text-white font-bold">₹{formData.amount || formData.customAmount || '0'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Purpose:</span>
                      <span className="text-white">{donationPurposes.find(p => p.id === formData.purpose)?.name || 'Not selected'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Recurring:</span>
                      <span className="text-white">{formData.recurring ? 'Monthly' : 'One-time'}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <motion.button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Previous
                </motion.button>
              )}
              
              <div className="ml-auto">
                {step < 3 ? (
                  <motion.button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="px-8 py-3 bg-gradient-to-r from-saffron to-gold text-black font-bold rounded-lg hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Continue
                  </motion.button>
                ) : (
                  <motion.button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Proceed to Donate 🙏
                  </motion.button>
                )}
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
