import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Settings, Beaker, MapPin, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const Products = () => {
  const products = [
    {
      name: "Portlify",
      description: "Digital portfolio builder that transforms your CV into a professional online presence",
      status: "live",
      statusText: "Live & Ready",
      icon: <CheckCircle className="h-5 w-5" />,
      features: ["CV to Portfolio Conversion", "Professional Templates", "SEO Optimization", "Custom Domains", "Mobile Responsive", "Analytics Dashboard"],
      useCase: "Transform your CV into a stunning digital portfolio that showcases your academic achievements, research, and professional experience with modern design templates.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      link: "/portlify",
      isInternal: true,
      featured: true
    },
    {
      name: "Expressive Writer",
      description: "Advanced writing assistant for academic & research content",
      status: "development",
      statusText: "In Development",
      icon: <Clock className="h-5 w-5" />,
      features: ["Research Paper Assistance", "Citation Management", "Style Guide Compliance", "Peer Review Prep"],
      useCase: "Enhance your academic writing with intelligent assistance that understands scholarly conventions and helps craft compelling research papers.",
      image: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg",
      link: "#",
      isInternal: false,
      featured: false
    },
    {
      name: "BizIntellect",
      description: "Business analysis and strategy planning platform",
      status: "prototype",
      statusText: "Prototype Phase",
      icon: <Settings className="h-5 w-5" />,
      features: ["Market Analysis", "Strategic Planning", "Competitive Intelligence", "Financial Modeling"],
      useCase: "Make data-driven business decisions with comprehensive analysis tools that turn complex market data into actionable strategic insights.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      link: "#",
      isInternal: false,
      featured: false
    },
    {
      name: "EduPlan",
      description: "Comprehensive lesson planning and classroom content management",
      status: "prototype",
      statusText: "Prototype Phase",
      icon: <Beaker className="h-5 w-5" />,
      features: ["Curriculum Design", "Assessment Creation", "Learning Objectives", "Student Engagement"],
      useCase: "Create engaging lesson plans and educational content that adapts to different learning styles and meets academic standards.",
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg",
      link: "#",
      isInternal: false,
      featured: false
    },
    {
      name: "MarketMuse",
      description: "Content strategy and SEO optimization for creative professionals",
      status: "planning",
      statusText: "Planning Stage",
      icon: <MapPin className="h-5 w-5" />,
      features: ["Content Strategy", "SEO Optimization", "Creative Briefs", "Brand Voice"],
      useCase: "Build your creative brand online with strategic content that maintains your unique voice while optimizing for search and engagement.",
      image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg",
      link: "#",
      isInternal: false,
      featured: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': 
        return 'bg-green-100/80 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-600';
      case 'development': 
        return 'bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-600';
      case 'prototype': 
        return 'bg-orange-100/80 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-300 dark:border-orange-600';
      case 'planning': 
        return 'bg-gray-100/80 dark:bg-gray-700/30 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600';
      default: 
        return 'bg-gray-100/80 dark:bg-gray-700/30 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600';
    }
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-950/20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl dark:shadow-2xl p-6 max-w-4xl mx-auto">
            <Sparkles className="h-10 w-10 text-blue-600 dark:text-blue-400 mx-auto mb-4 animate-pulse" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Tools for <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Modern Work</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Innovative solutions designed specifically for professionals in business, academia, creative fields, and education.
            </p>
          </div>
        </div>

        {/* Featured Product - Portlify */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              🚀 Featured Product
            </h2>
            <p className="text-gray-600 dark:text-gray-300">Ready to use now</p>
          </div>
          
          <div className="backdrop-blur-xl bg-gradient-to-br from-blue-50/90 via-purple-50/80 to-pink-50/70 dark:from-blue-900/40 dark:via-purple-900/30 dark:to-pink-900/20 rounded-3xl border-2 border-blue-200/60 dark:border-blue-700/60 shadow-2xl dark:shadow-3xl overflow-hidden hover:shadow-3xl dark:hover:shadow-4xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer max-w-4xl mx-auto">
            <div className="md:flex">
              {/* Product Image */}
              <div className="relative md:w-1/2 h-64 md:h-80 overflow-hidden">
                <OptimizedImage 
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg" 
                  alt="Portlify"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-pink-600/30 dark:from-blue-400/30 dark:via-purple-400/20 dark:to-pink-400/30"></div>
                <div className="absolute top-4 right-4">
                  <span className="backdrop-blur-sm px-3 py-2 rounded-full text-sm font-medium border bg-green-100/80 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-600 flex items-center shadow-lg">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Live & Ready
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="md:w-1/2 p-8">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    Portlify
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                    Digital portfolio builder that transforms your CV into a professional online presence
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Transform your CV into a stunning digital portfolio that showcases your academic achievements, research, and professional experience with modern design templates.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {["CV to Portfolio Conversion", "Professional Templates", "SEO Optimization", "Custom Domains", "Mobile Responsive", "Analytics Dashboard"].map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/portlify"
                    className="backdrop-blur-sm bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl px-6 py-3 text-lg font-medium flex items-center justify-center group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25"
                  >
                    Explore Portlify
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/portlify"
                    className="backdrop-blur-sm border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-xl px-6 py-3 text-lg font-medium flex items-center justify-center transition-all duration-300"
                  >
                    View Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Products */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              🔧 Products in Development
            </h2>
            <p className="text-gray-600 dark:text-gray-300">Currently under prototyping and development</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 mb-16">
          {products.filter(product => !product.featured).map((product, index) => (
            <div key={index} className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg dark:shadow-xl overflow-hidden hover:shadow-2xl dark:hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <OptimizedImage 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-pink-600/20 dark:from-blue-400/20 dark:via-purple-400/10 dark:to-pink-400/20"></div>
                <div className="absolute top-4 right-4">
                  <span className={`backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(product.status)} flex items-center shadow-sm`}>
                    {product.icon}
                    <span className="ml-1">{product.statusText}</span>
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {product.description}
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features</h3>
                  <ul className="space-y-1">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                        <CheckCircle className="h-3 w-3 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {product.features.length > 3 && (
                      <li className="text-xs text-gray-500 dark:text-gray-400">
                        +{product.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex flex-col gap-2">
                  {product.status === 'live' ? (
                    product.isInternal ? (
                      <Link
                        to={product.link}
                        className="backdrop-blur-sm bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl px-4 py-2 text-sm font-medium flex items-center justify-center group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25"
                      >
                        Explore Product
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ) : (
                      <a
                        href={product.link}
                        className="backdrop-blur-sm bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl px-4 py-2 text-sm font-medium flex items-center justify-center group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25"
                      >
                        Try Now
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    )
                  ) : (
                    <div className="backdrop-blur-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl px-4 py-2 text-sm font-medium text-center cursor-not-allowed">
                      {product.status === 'development' && '🔧 In Development'}
                      {product.status === 'prototype' && '⚡ Prototype Phase'}
                      {product.status === 'planning' && '📋 Planning Stage'}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg dark:shadow-xl p-6 text-center hover:shadow-2xl dark:hover:shadow-3xl transition-all duration-300">
            <div className="h-12 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Intelligent Solutions</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Smart tools that understand your professional context and streamline your workflow
            </p>
          </div>
          
          <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg dark:shadow-xl p-6 text-center hover:shadow-2xl dark:hover:shadow-3xl transition-all duration-300">
            <div className="h-12 w-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Purpose-Built</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Designed specifically for professionals in creative, academic, and strategic fields
            </p>
          </div>
          
          <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg dark:shadow-xl p-6 text-center hover:shadow-2xl dark:hover:shadow-3xl transition-all duration-300">
            <div className="h-12 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Customizable</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Flexible tools that adapt to your unique workflow and professional style
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="backdrop-blur-xl bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-pink-600/90 dark:from-blue-500/90 dark:via-purple-500/90 dark:to-pink-500/90 rounded-3xl border border-white/20 dark:border-gray-700/50 shadow-2xl dark:shadow-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-white/5 dark:from-white/20 dark:to-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-white/10 to-white/5 dark:from-white/20 dark:to-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4">Ready to Build Your Digital Portfolio?</h2>
              <p className="text-lg mb-6 opacity-90">
                Start with Portlify today and transform your CV into a professional online presence that stands out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/portlify"
                  className="backdrop-blur-sm bg-white/20 hover:bg-white/30 text-white rounded-xl px-6 py-3 font-medium transition-all duration-300 hover:shadow-lg"
                >
                  Try Portlify Now
                </Link>
                <Link
                  to="/services"
                  className="backdrop-blur-sm border-2 border-white/50 hover:bg-white/20 text-white rounded-xl px-6 py-3 font-medium transition-all duration-300"
                >
                  Custom Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;