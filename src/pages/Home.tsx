
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingAnimation from '../components/LoadingAnimation';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-dark"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3
          }}
        />
        <div className="absolute inset-0 bg-gradient-dark opacity-80" />
        
        <div className="relative z-10 text-center container-custom px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in">
            We Scale Brands
            <br />
            <span className="text-gradient">Beyond Limits</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">
            Transform your digital presence with cutting-edge marketing strategies 
            that drive real results and meaningful growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Link to="/contact" className="btn-gradient">
              Let's Talk
            </Link>
            <Link to="/portfolio" className="btn-outline">
              View Portfolio
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-dark-card">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We offer comprehensive digital marketing solutions tailored to your brand's unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'SEO Optimization',
                description: 'Boost your organic visibility and drive qualified traffic to your website.',
                icon: '🔍'
              },
              {
                title: 'Paid Advertising',
                description: 'Maximize ROI with targeted campaigns across all major platforms.',
                icon: '📊'
              },
              {
                title: 'Brand Strategy',
                description: 'Build a powerful brand identity that resonates with your audience.',
                icon: '🎯'
              },
              {
                title: 'Social Media',
                description: 'Engage your community and build lasting relationships with customers.',
                icon: '📱'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-dark-bg p-8 rounded-2xl card-hover group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Recent <span className="text-gradient">Work</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Take a look at some of our latest projects and the results we've achieved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'TechStart Inc.',
                category: 'E-commerce',
                result: '+300% Revenue Growth',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
              },
              {
                title: 'Fashion Forward',
                category: 'Retail',
                result: '+250% Brand Awareness',
                image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
              },
              {
                title: 'HealthTech Pro',
                category: 'Healthcare',
                result: '+400% Lead Generation',
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
              }
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl card-hover"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-neon-purple text-sm font-medium">{project.category}</span>
                  <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gradient font-semibold">{project.result}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-gradient">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-dark-card">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                company: 'TechStart Inc.',
                testimonial: 'DigitalPulse transformed our online presence completely. The results exceeded all our expectations.',
                rating: 5
              },
              {
                name: 'Michael Chen',
                company: 'Fashion Forward',
                testimonial: 'Their strategic approach to brand building helped us reach new heights in our industry.',
                rating: 5
              },
              {
                name: 'Emily Rodriguez',
                company: 'HealthTech Pro',
                testimonial: 'The team\'s expertise in digital marketing is unmatched. Highly recommend their services.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-dark-bg p-8 rounded-2xl card-hover"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.testimonial}"
                </p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
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
              Ready to Scale Your Brand?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital marketing goals 
              and take your business to the next level.
            </p>
            <Link to="/contact" className="btn-outline bg-white text-dark-bg hover:bg-gray-100">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
