
import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Search Engine Optimization',
      description: 'Boost your organic visibility with comprehensive SEO strategies that drive qualified traffic and increase conversions.',
      features: ['Keyword Research', 'On-Page Optimization', 'Technical SEO', 'Link Building', 'Content Strategy'],
      icon: '🔍',
      color: 'from-purple-500 to-blue-500'
    },
    {
      title: 'Paid Advertising',
      description: 'Maximize ROI with targeted campaigns across Google Ads, Facebook, Instagram, and other major platforms.',
      features: ['Google Ads', 'Facebook Advertising', 'Instagram Campaigns', 'LinkedIn Ads', 'Retargeting'],
      icon: '📊',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Brand Strategy & Design',
      description: 'Build a powerful brand identity that resonates with your audience and stands out in the market.',
      features: ['Brand Identity', 'Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Positioning'],
      icon: '🎯',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Social Media Marketing',
      description: 'Engage your community and build lasting relationships with customers across all social platforms.',
      features: ['Content Creation', 'Community Management', 'Social Strategy', 'Influencer Marketing', 'Analytics'],
      icon: '📱',
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Content Marketing',
      description: 'Create compelling content that educates, entertains, and converts your target audience.',
      features: ['Blog Writing', 'Video Production', 'Infographics', 'Email Campaigns', 'Content Strategy'],
      icon: '📝',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Web Development',
      description: 'Build fast, responsive, and conversion-optimized websites that deliver exceptional user experiences.',
      features: ['Responsive Design', 'E-commerce', 'CMS Development', 'Performance Optimization', 'UI/UX Design'],
      icon: '💻',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to scale your brand 
            and drive measurable results across every channel.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-dark-card rounded-3xl p-8 card-hover group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-gradient-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-dark-card">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We follow a proven methodology to ensure your success at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We analyze your business, market, and competitors to understand your unique challenges.' },
              { step: '02', title: 'Strategy', description: 'We develop a comprehensive digital marketing strategy tailored to your goals.' },
              { step: '03', title: 'Execution', description: 'Our expert team implements the strategy with precision and attention to detail.' },
              { step: '04', title: 'Optimization', description: 'We continuously monitor and optimize campaigns for maximum performance.' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{process.title}</h3>
                <p className="text-gray-400">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-primary rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss which services are right for your business and create a custom strategy for success.
            </p>
            <Link to="/contact" className="btn-outline bg-white text-dark-bg hover:bg-gray-100">
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
