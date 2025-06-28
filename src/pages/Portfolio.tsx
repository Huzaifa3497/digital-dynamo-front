
import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'E-commerce', 'Tech', 'Healthcare', 'Real Estate', 'Fashion'];

  const projects = [
    {
      title: 'TechStart Inc.',
      category: 'Tech',
      results: '+300% Revenue Growth',
      description: 'Complete digital transformation for a B2B SaaS company, including SEO, paid ads, and content marketing.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      metrics: ['300% Revenue Increase', '250% Lead Growth', '180% Conversion Rate']
    },
    {
      title: 'Fashion Forward',
      category: 'Fashion',
      results: '+250% Brand Awareness',
      description: 'Social media marketing and influencer campaigns that elevated this fashion brand to new heights.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      metrics: ['250% Brand Awareness', '400% Social Engagement', '150% Sales Growth']
    },
    {
      title: 'HealthTech Pro',
      category: 'Healthcare',
      results: '+400% Lead Generation',
      description: 'Comprehensive digital strategy for a healthcare technology startup, focusing on trust and authority.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      metrics: ['400% Lead Increase', '200% Organic Traffic', '300% Brand Recognition']
    },
    {
      title: 'Urban Properties',
      category: 'Real Estate',
      results: '+200% Property Sales',
      description: 'Local SEO and targeted advertising campaign that dominated the competitive real estate market.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      metrics: ['200% Sales Increase', '150% Website Traffic', '250% Lead Quality']
    },
    {
      title: 'EcoMarket',
      category: 'E-commerce',
      results: '+350% Online Sales',
      description: 'E-commerce optimization and multi-channel marketing strategy for sustainable products retailer.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      metrics: ['350% Sales Growth', '280% Customer Retention', '200% AOV Increase']
    },
    {
      title: 'FinanceFirst',
      category: 'Tech',
      results: '+180% User Acquisition',
      description: 'Digital marketing strategy for fintech startup, focusing on trust-building and user education.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      metrics: ['180% User Growth', '220% App Downloads', '160% Retention Rate']
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our successful projects and the measurable results we've achieved 
            for brands across various industries.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-dark-card">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-primary text-white'
                    : 'bg-dark-bg text-gray-400 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-dark-card rounded-3xl overflow-hidden card-hover"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gradient font-semibold mb-4">
                    {project.results}
                  </p>
                  <p className="text-gray-400 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-gradient-primary rounded-full mr-3"></span>
                        <span className="text-gray-300">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-dark-card">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Results That <span className="text-gradient">Matter</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '300%', label: 'Average Growth' },
              { number: '150+', label: 'Happy Clients' },
              { number: '99%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
