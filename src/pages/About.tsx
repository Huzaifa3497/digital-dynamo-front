
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const team = [
    {
      name: 'Alex Morgan',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: '10+ years in digital marketing with expertise in scaling startups to multi-million dollar companies.'
    },
    {
      name: 'Sarah Chen',
      position: 'Head of Strategy',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Former Google executive with deep expertise in paid advertising and conversion optimization.'
    },
    {
      name: 'Marcus Johnson',
      position: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Award-winning designer specializing in brand identity and digital experiences that convert.'
    },
    {
      name: 'Emma Rodriguez',
      position: 'Head of Analytics',
      image: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Data scientist turned marketer, passionate about turning insights into actionable strategies.'
    }
  ];

  const values = [
    {
      title: 'Results-Driven',
      description: 'Every strategy we develop is focused on delivering measurable results that impact your bottom line.',
      icon: '🎯'
    },
    {
      title: 'Transparent',
      description: 'We believe in complete transparency with detailed reporting and regular communication.',
      icon: '🔍'
    },
    {
      title: 'Innovative',
      description: 'We stay ahead of industry trends and leverage cutting-edge tools and strategies.',
      icon: '💡'
    },
    {
      title: 'Partnership',
      description: 'We work as an extension of your team, fully invested in your long-term success.',
      icon: '🤝'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About <span className="text-gradient">DigitalPulse</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We're a team of digital marketing experts passionate about helping brands 
                achieve extraordinary growth through innovative strategies and data-driven results.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-gradient mb-2">8+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient mb-2">500+</div>
                  <div className="text-gray-400">Projects Delivered</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Team collaboration"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-gradient">Mission</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              To empower businesses of all sizes to achieve their full potential through 
              strategic digital marketing that drives real, measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-dark-card p-8 rounded-3xl text-center card-hover group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-dark-card">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience 
              in digital marketing, design, and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-dark-bg rounded-3xl overflow-hidden card-hover"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gradient font-medium mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-gradient">DigitalPulse</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {[
                  {
                    title: 'Proven Track Record',
                    description: 'Over 500 successful projects with an average of 300% growth for our clients.'
                  },
                  {
                    title: 'Full-Service Agency',
                    description: 'From strategy to execution, we handle all aspects of your digital marketing needs.'
                  },
                  {
                    title: 'Data-Driven Approach',
                    description: 'Every decision is backed by data and analytics to ensure optimal performance.'
                  },
                  {
                    title: 'Dedicated Support',
                    description: 'You\'ll have a dedicated account manager and direct access to our team of experts.'
                  }
                ].map((point, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {point.title}
                      </h3>
                      <p className="text-gray-400">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Digital marketing strategy"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-card">
        <div className="container-custom">
          <div className="bg-gradient-primary rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our team can help you achieve your digital marketing goals 
              and scale your brand beyond limits.
            </p>
            <Link to="/contact" className="btn-outline bg-white text-dark-bg hover:bg-gray-100">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
