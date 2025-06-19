import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Users, Briefcase, Palette, ExternalLink, ArrowRight, Sparkles, Globe, Zap, Shield } from 'lucide-react';

const Portlify = () => {
  const sampleSites = [
    {
      title: "For Profeessionals",
      description: "Perfect for researchers and educators, working professionals & students",
      url: "https://albert-francis.vercel.app/",
      category: "Academic"
    },
    {
      title: "Customizable Portfolio",
      description: "For creative professionals to showcase their work",
      url: "https://sebastian-jose.vercel.app/",
      category: "Creative"
    },
    {
      title: "Academic Portfolio",
      description: "For Students and academics to showcase their works and achievements",
      url: "https://expressive-ai.vercel.app/",
      category: "Business"
    }
  ];
  const plans = [
    {
      name: "Student",
      originalPrice: 1000,
      discountedPrice: 250,
      discount: "75% OFF",
      icon: <Users className="h-8 w-8" />,
      features: [
        {
          title: "CV to Portfolio Conversion",
          description: "AI-powered transformation of your CV into a stunning portfolio"
        },
        {
          title: "Professional Templates",
          description: "Access to 5+ clean, modern templates designed for students"
        },
        {
          title: "Basic SEO Optimization",
          description: "Essential SEO features to help recruiters find you online"
        },
        {
          title: "Personal Domain Setup",
          description: "yourname.portlify.com subdomain included"
        },
        {
          title: "Mobile Responsive Design",
          description: "Your portfolio looks perfect on all devices"
        },
        {
          title: "Basic Analytics",
          description: "Track visitor views and engagement metrics"
        },
        {
          title: "Email Support",
          description: "Get help within 48 hours via email"
        }
      ],
      popular: false,
      cta: "Perfect for Students",
      bestFor: "Students & Recent Graduates"
    },
    {
      name: "Professional",
      originalPrice: 2000,
      discountedPrice: 500,
      discount: "75% OFF",
      icon: <Briefcase className="h-8 w-8" />,
      features: [
        {
          title: "Everything in Student",
          description: "All student features plus advanced capabilities"
        },
        {
          title: "Premium Templates",
          description: "15+ sophisticated templates with industry-specific designs"
        },
        {
          title: "Advanced SEO & Analytics",
          description: "Google Analytics, Search Console integration & keyword optimization"
        },
        {
          title: "Custom Domain Integration",
          description: "Connect your own domain (yourname.com) - domain registration extra*"
        },
        {
          title: "Social Media Integration",
          description: "Seamless LinkedIn, GitHub, Twitter profile connections"
        },
        {
          title: "Contact Form Builder",
          description: "Professional contact forms with email notifications"
        },
        {
          title: "Priority Support",
          description: "24-hour response time with chat support"
        },
        {
          title: "Portfolio Export Options",
          description: "Download as PDF or share via custom links"
        }
      ],
      popular: true,
      cta: "🔥 MOST POPULAR",
      bestFor: "Working Professionals & Job Seekers",
      note: "*Custom domain registration costs extra (₹800-2000/year depending on domain)"
    },
    {
      name: "Custom Build",
      originalPrice: 3000,
      discountedPrice: 750,
      discount: "75% OFF",
      icon: <Palette className="h-8 w-8" />,
      features: [
        {
          title: "Everything in Professional",
          description: "All professional features plus unlimited customization"
        },
        {
          title: "Unlimited Custom Templates",
          description: "Bespoke designs created specifically for your industry"
        },
        {
          title: "Personal Design Consultation",
          description: "1-on-1 sessions with our design experts"
        },
        {
          title: "Advanced Customization",
          description: "Custom CSS, animations, and interactive elements"
        },
        {
          title: "Multi-language Support",
          description: "Portfolio available in multiple languages"
        },
        {
          title: "E-commerce Integration",
          description: "Sell services/products directly from your portfolio"
        },
        {
          title: "Dedicated Account Manager",
          description: "Personal support representative for your account"
        },
        {
          title: "White-label Options",
          description: "Remove Portlify branding for complete customization"
        }
      ],
      popular: false,
      cta: "Ultimate Customization",
      bestFor: "Agencies & Enterprise Users"
    }
  ];

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "AI-Powered Conversion",
      description: "Transform your CV into a stunning portfolio in minutes with our advanced AI"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Professional Templates",
      description: "Professionally themed templates to build your resume"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "SEO Optimized",
      description: "Built-in SEO optimization to help you get discovered online"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Reliable",
      description: "Your data is protected with enterprise-grade security"
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-950/20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl dark:shadow-2xl p-8 max-w-4xl mx-auto">
            <Sparkles className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portlify</span> - AI Portfolio Builder
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Transform your CV into a stunning digital portfolio that showcases your achievements, research, and professional experience with the power of AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.google.com/your-registration-form-id"
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-sm bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl px-6 py-3 font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25 flex items-center justify-center"
              >
                Get Started Free
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
              <button className="backdrop-blur-sm border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl px-6 py-3 font-medium transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose Portlify?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg dark:shadow-xl p-6 text-center hover:shadow-2xl dark:hover:shadow-3xl hover:-translate-y-2 transition-all duration-300">
                <div className="h-12 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Sites Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Portfolio Examples
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sampleSites.map((site, index) => (
              <div key={index} className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg dark:shadow-xl overflow-hidden hover:shadow-2xl dark:hover:shadow-3xl hover:-translate-y-2 transition-all duration-300">
                <div className="relative">
                  <iframe
                    src={site.url}
                    title={site.title}
                    className="w-full h-64 border-0"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="backdrop-blur-sm bg-blue-100/80 dark:bg-blue-900/80 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                      {site.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {site.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {site.description}
                  </p>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="backdrop-blur-sm bg-gray-600 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-xl px-4 py-2 font-medium flex items-center justify-center transition-all duration-300"
                  >
                    View Live Site
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
            Limited time offer - 75% off all plans! Transform your career today.
          </p>          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`group relative ${plan.popular ? 'pt-6' : ''}`}>                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-30">
                    <div className="relative">
                      <span className="backdrop-blur-sm bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl animate-pulse border-2 border-blue-300/30 ring-2 ring-blue-400/50">
                        🔥 MOST POPULAR
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full blur-sm opacity-60 animate-ping"></div>
                    </div>
                  </div>
                )}
                
                <div className={`backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg dark:shadow-xl hover:shadow-2xl dark:hover:shadow-3xl hover:-translate-y-3 transition-all duration-500 relative ${plan.popular ? 'ring-4 ring-blue-600 dark:ring-blue-500 ring-opacity-70 scale-105 transform pt-4' : ''}`}>
                  <div className="p-8">
                  <div className="text-center mb-6">
                    <div className={`h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white transition-all duration-300 group-hover:scale-110 ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg shadow-blue-500/30' : 'bg-gradient-to-r from-blue-600 to-purple-600'}`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {plan.bestFor}
                    </p>
                    <div className="mb-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                        ₹{plan.originalPrice}
                      </span>
                      <span className={`ml-2 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold ${plan.popular ? 'bg-blue-100/90 dark:bg-blue-900/90 text-blue-800 dark:text-blue-200 border border-blue-300 dark:border-blue-600 shadow-md' : 'bg-green-100/80 dark:bg-green-900/80 text-green-700 dark:text-green-300 border border-green-300 dark:border-green-600'}`}>
                        {plan.discount}
                      </span>
                    </div>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                      ₹{plan.discountedPrice}
                    </div>
                    <p className={`text-sm font-semibold ${plan.popular ? 'text-blue-700 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'}`}>
                      {plan.cta}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="group/item">
                        <div className="flex items-start hover:bg-gray-50/50 dark:hover:bg-gray-700/50 rounded-lg p-2 -m-2 transition-all duration-200">
                          <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <span className="text-sm font-medium text-gray-900 dark:text-white block">
                              {feature.title}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block opacity-0 group-hover/item:opacity-100 transition-opacity duration-200">
                              {feature.description}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {plan.note && (
                    <div className="mb-6 p-3 bg-amber-50/80 dark:bg-amber-900/20 border border-amber-200/50 dark:border-amber-700/50 rounded-lg">
                      <p className="text-xs text-amber-700 dark:text-amber-300">
                        <strong>Note:</strong> {plan.note}
                      </p>
                    </div>
                  )}

                  <a
                    href="https://forms.google.com/your-registration-form-id"
                    target="_blank"
                    rel="noopener noreferrer"                    className={`w-full rounded-xl px-4 py-3 font-medium flex items-center justify-center transition-all duration-300 group-hover:shadow-lg transform hover:scale-105 ${
                      plan.popular
                        ? 'backdrop-blur-sm bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white hover:shadow-blue-500/30 dark:hover:shadow-blue-400/30 shadow-lg'
                        : 'backdrop-blur-sm bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25'
                    }`}
                  >                    {plan.popular ? '🚀 Choose Most Popular' : 'Get Started'}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="backdrop-blur-xl bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-pink-600/90 dark:from-blue-500/90 dark:via-purple-500/90 dark:to-pink-500/90 rounded-3xl border border-white/20 dark:border-gray-700/50 shadow-2xl dark:shadow-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-white/5 dark:from-white/20 dark:to-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-white/10 to-white/5 dark:from-white/20 dark:to-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Ready to Build Your Portfolio?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of professionals who have already transformed their careers with Portlify.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://forms.google.com/your-registration-form-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="backdrop-blur-sm bg-white/20 hover:bg-white/30 text-white rounded-xl px-6 py-3 font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center"
                >
                  Start Building Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
                <Link
                  to="/contact"
                  className="backdrop-blur-sm border-2 border-white/50 hover:bg-white/20 text-white rounded-xl px-6 py-3 font-medium transition-all duration-300"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portlify;