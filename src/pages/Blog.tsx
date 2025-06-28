import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: '1',
      title: 'The Future of Digital Marketing: Trends to Watch in 2024',
      excerpt: 'Discover the emerging trends that will shape digital marketing strategies in the coming year.',
      date: 'December 15, 2023',
      readTime: '8 min read',
      category: 'Trends',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: '2',
      title: 'How AI is Revolutionizing Content Marketing',
      excerpt: 'Learn how artificial intelligence is transforming the way brands create and distribute content.',
      date: 'December 10, 2023',
      readTime: '6 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '3',
      title: 'SEO Best Practices That Actually Drive Results',
      excerpt: 'A comprehensive guide to SEO strategies that have proven to increase organic traffic and rankings.',
      date: 'December 8, 2023',
      readTime: '10 min read',
      category: 'SEO',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '4',
      title: 'Social Commerce: The New Frontier of E-commerce',
      excerpt: 'Explore how social media platforms are becoming powerful sales channels for modern businesses.',
      date: 'December 5, 2023',
      readTime: '7 min read',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '5',
      title: 'Data-Driven Marketing: Making Decisions That Matter',
      excerpt: 'Understanding how to leverage data analytics for better marketing decisions and improved ROI.',
      date: 'December 1, 2023',
      readTime: '9 min read',
      category: 'Analytics',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '6',
      title: 'Building Brand Authority Through Thought Leadership',
      excerpt: 'Strategies for establishing your brand as an industry leader through valuable content and insights.',
      date: 'November 28, 2023',
      readTime: '5 min read',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const categories = ['All', 'Trends', 'Technology', 'SEO', 'Social Media', 'Analytics', 'Branding'];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Digital Marketing <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead of the curve with our latest thoughts on digital marketing trends, 
            strategies, and best practices that drive real results.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-dark-card rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover min-h-[400px]"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-neon-purple text-sm font-medium mb-4">
                  {blogPosts[0].category}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-400 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <span>{blogPosts[0].date}</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Link
                  to={`/blog/${blogPosts[0].id}`}
                  className="btn-gradient w-fit"
                >
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-dark-card">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full font-medium bg-dark-bg text-gray-400 hover:text-white hover:bg-gradient-primary transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article
                key={index}
                className="bg-dark-card rounded-3xl overflow-hidden card-hover group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gradient transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-neon-purple font-medium hover:text-white transition-colors inline-flex items-center"
                  >
                    Read More
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-dark-card">
        <div className="container-custom">
          <div className="bg-gradient-primary rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest digital marketing insights 
              delivered straight to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-dark-bg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-dark-bg font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
