import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendar, FaUser, FaTags } from 'react-icons/fa';

// Example blog data (replace with real data or fetch from API)
const blogData = [
  {
    id: '1',
    title: 'The Future of Digital Marketing in 2024',
    excerpt: 'Discover the latest trends and technologies that will shape the digital marketing landscape in 2024.',
    content: `
      <p>The digital marketing landscape is constantly evolving, and 2024 brings exciting new opportunities for brands to connect with their audiences. From AI-powered personalization to immersive AR experiences, the future of marketing is more dynamic than ever.</p>
      
      <h2>AI and Machine Learning</h2>
      <p>Artificial intelligence is revolutionizing how we approach digital marketing. From predictive analytics to automated content creation, AI tools are helping marketers deliver more personalized and effective campaigns.</p>
      
      <h2>Voice Search Optimization</h2>
      <p>With the rise of smart speakers and voice assistants, optimizing for voice search has become crucial. Brands need to adapt their SEO strategies to capture voice-based queries effectively.</p>
      
      <h2>Video Marketing Dominance</h2>
      <p>Video content continues to dominate social media platforms. Short-form videos, live streaming, and interactive video experiences are becoming essential for brand engagement.</p>
      
      <p>As we move forward, staying ahead of these trends will be key to maintaining a competitive edge in the digital marketplace.</p>
    `,
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'SEO Strategies That Actually Work in 2024',
    excerpt: 'Learn the most effective SEO techniques that will help your website rank higher in search results.',
    content: `
      <p>Search Engine Optimization has evolved significantly over the years. In 2024, it's not just about keywords anymore - it's about providing value and creating exceptional user experiences.</p>
      
      <h2>Core Web Vitals</h2>
      <p>Google's Core Web Vitals are now more important than ever. Ensuring your website loads quickly and provides a smooth user experience is crucial for ranking well.</p>
      
      <h2>Content Quality Over Quantity</h2>
      <p>Creating high-quality, comprehensive content that answers user queries is more valuable than churning out numerous low-quality articles.</p>
      
      <h2>Mobile-First Indexing</h2>
      <p>With mobile-first indexing, your mobile site's performance directly impacts your search rankings. Optimizing for mobile is no longer optional.</p>
      
      <p>Focus on these fundamentals, and you'll see sustainable improvements in your search rankings.</p>
    `,
    author: 'Michael Chen',
    date: '2024-01-10',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '4 min read'
  },
  {
    id: '3',
    title: 'Building a Strong Brand Identity in the Digital Age',
    excerpt: 'Explore how to create a compelling brand identity that resonates with your target audience.',
    content: `
      <p>In today's digital world, building a strong brand identity is more challenging yet more important than ever. With countless brands competing for attention, standing out requires strategic thinking and consistent execution.</p>
      
      <h2>Define Your Brand Values</h2>
      <p>Start by clearly defining what your brand stands for. Your values should guide every decision you make, from visual design to customer service.</p>
      
      <h2>Consistent Visual Identity</h2>
      <p>Your visual identity should be consistent across all platforms. This includes your logo, color palette, typography, and overall design aesthetic.</p>
      
      <h2>Authentic Storytelling</h2>
      <p>Share your brand's story authentically. People connect with real stories, not marketing messages. Be transparent about your journey and values.</p>
      
      <p>Remember, building a strong brand takes time and consistency. Stay true to your values and keep your audience at the center of everything you do.</p>
    `,
    author: 'Emily Rodriguez',
    date: '2024-01-05',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '6 min read'
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogData.find((item) => item.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div>
          <h2 className="text-3xl font-bold mb-4">Blog Post Not Found</h2>
          <Link to="/blog" className="btn-gradient inline-flex items-center">
            <FaArrowLeft className="mr-2" /> Back to Blog
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
        <Link to="/blog" className="btn-outline inline-flex items-center mb-8">
          <FaArrowLeft className="mr-2" /> Back to Blog
        </Link>
        
        <article>
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-gray-300 mb-6">{post.excerpt}</p>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <FaUser />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendar />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaTags />
                <span>{post.category}</span>
              </div>
              <span>{post.readTime}</span>
            </div>
          </header>

          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8" 
          />

          <div 
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-2xl font-bold mb-4">Share this post</h3>
          <div className="flex gap-4">
            <button className="btn-outline">Twitter</button>
            <button className="btn-outline">LinkedIn</button>
            <button className="btn-outline">Facebook</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogDetail; 