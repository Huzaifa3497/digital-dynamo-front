import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

// Example data (replace with real data or fetch from API)
const portfolioData = [
  {
    id: '1',
    title: 'TechStart Inc.',
    category: 'E-commerce',
    result: '+300% Revenue Growth',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A full-scale e-commerce solution for TechStart Inc. including SEO, paid ads, and branding. Resulted in a 300% increase in revenue.'
  },
  {
    id: '2',
    title: 'Fashion Forward',
    category: 'Retail',
    result: '+250% Brand Awareness',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Brand strategy and social media campaign for Fashion Forward, boosting brand awareness by 250%.'
  },
  {
    id: '3',
    title: 'HealthTech Pro',
    category: 'Healthcare',
    result: '+400% Lead Generation',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Lead generation and digital transformation for HealthTech Pro, resulting in 400% more leads.'
  }
];

const PortfolioDetail = () => {
  const { id } = useParams();
  const project = portfolioData.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div>
          <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
          <Link to="/portfolio" className="btn-gradient inline-flex items-center">
            <FaArrowLeft className="mr-2" /> Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-dark-bg text-white py-16 px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto">
        <Link to="/portfolio" className="btn-outline inline-flex items-center mb-8">
          <FaArrowLeft className="mr-2" /> Back to Portfolio
        </Link>
        <img src={project.image} alt={project.title} className="w-full h-80 object-cover rounded-2xl mb-8" />
        <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
        <span className="text-neon-purple font-semibold text-lg mb-2 inline-block">{project.category}</span>
        <p className="text-gradient font-semibold mb-4">{project.result}</p>
        <p className="text-lg text-gray-300 mb-8">{project.description}</p>
        <Link to="/contact" className="btn-gradient">Start Your Project</Link>
      </div>
    </motion.div>
  );
};

export default PortfolioDetail; 