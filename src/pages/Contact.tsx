
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's Scale Your Brand <span className="text-gradient">Together</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to take your digital marketing to the next level? 
            Get in touch with our team for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-dark-card rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8">
                Send Us a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple transition-colors"
                    placeholder="Your Company Name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Services Interested In
                  </label>
                  <select className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg text-white focus:outline-none focus:border-neon-purple transition-colors">
                    <option>Select a service</option>
                    <option>SEO Optimization</option>
                    <option>Paid Advertising</option>
                    <option>Brand Strategy</option>
                    <option>Social Media Marketing</option>
                    <option>Content Marketing</option>
                    <option>Web Development</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Project Budget
                  </label>
                  <select className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg text-white focus:outline-none focus:border-neon-purple transition-colors">
                    <option>Select budget range</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000 - $25,000</option>
                    <option>$25,000 - $50,000</option>
                    <option>$50,000+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple transition-colors resize-none"
                    placeholder="Describe your project goals, challenges, and what you'd like to achieve..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-gradient"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">
                  Get In Touch
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  Ready to transform your digital presence? Our team is here to help you 
                  achieve your marketing goals with strategies that deliver real results.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-400">hello@digitalpulse.agency</p>
                    <p className="text-gray-400">support@digitalpulse.agency</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-400">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Visit Us</h3>
                    <p className="text-gray-400">123 Marketing Street</p>
                    <p className="text-gray-400">New York, NY 10001</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-dark-card rounded-3xl p-8">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Why Choose DigitalPulse?
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'Average Client Growth', value: '300%' },
                    { label: 'Projects Completed', value: '500+' },
                    { label: 'Client Satisfaction', value: '99%' },
                    { label: 'Response Time', value: '<24h' }
                  ].map((stat, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-400">{stat.label}</span>
                      <span className="text-gradient font-bold">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-dark-card">
        <div className="container-custom">
          <div className="bg-dark-bg rounded-3xl p-8">
            <div className="h-96 bg-gradient-dark rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🗺️</span>
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  Interactive Map
                </h3>
                <p className="text-gray-400">
                  Find us in the heart of New York City
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'How long does it take to see results?',
                answer: 'While some improvements can be seen within 30-60 days, significant results typically occur within 3-6 months depending on your industry and competition.'
              },
              {
                question: 'Do you work with small businesses?',
                answer: 'Absolutely! We work with businesses of all sizes, from startups to enterprise companies. Our strategies are tailored to fit your budget and goals.'
              },
              {
                question: 'What makes you different from other agencies?',
                answer: 'Our data-driven approach, transparent reporting, and proven track record of 300% average growth set us apart. We focus on long-term partnerships, not just campaigns.'
              },
              {
                question: 'Can you help with international markets?',
                answer: 'Yes, we have experience with global campaigns and can help you expand into international markets with localized strategies.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-dark-card rounded-2xl p-6">
                <h3 className="text-white font-semibold text-lg mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
