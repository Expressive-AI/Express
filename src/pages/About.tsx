import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Target, Users, Award, Sparkles, Brain, BookOpen, Lightbulb, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Human-Centered Design",
      description: "We believe AI should amplify human creativity and intelligence, not replace it. Our tools are designed to enhance the uniquely human aspects of thought and creation."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Ethical AI Development",
      description: "We're committed to building AI that is transparent, fair, and aligned with human values. We prioritize ethical considerations in every product decision."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Academic Rigor",
      description: "Our approach is grounded in academic research and peer review. We bring scholarly standards to commercial AI development."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence in Execution",
      description: "We strive for the highest quality in everything we build, from user experience to technical architecture to customer service."
    }
  ];

  const expertiseAreas = [
    {
      icon: <Brain className="h-12 w-12" />,
      title: "Artificial Intelligence & Machine Learning",
      description: "Deep expertise in natural language processing, computer vision, and human-AI interaction with 15+ years of combined research experience.",
      highlights: ["PhD-level AI Research", "Published Academic Papers", "Industry Experience at Top Tech Companies"]
    },
    {
      icon: <BookOpen className="h-12 w-12" />,
      title: "Educational Technology & Pedagogy",
      description: "Understanding of learning sciences, educational psychology, and instructional design from leading academic institutions.",
      highlights: ["Educational Psychology Research", "Curriculum Development", "Learning Assessment Methods"]
    },
    {
      icon: <Lightbulb className="h-12 w-12" />,
      title: "Creative & Strategic Thinking",
      description: "Expertise in design thinking, creative processes, and strategic business analysis across multiple industries.",
      highlights: ["Human-Computer Interaction", "Design Methodology", "Business Strategy Frameworks"]
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Product Development & Innovation",
      description: "Proven track record of building and scaling technology products with a focus on user experience and market fit.",
      highlights: ["Product Strategy", "User Experience Design", "Agile Development"]
    }
  ];

  return (
    <div className="py-20 gradient-bg animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <Sparkles className="h-12 w-12 text-accent-blue-600 dark:text-accent-blue-400 mx-auto mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold text-cool-slate-900 dark:text-white mb-6">
              AI for the Minds That <span className="gradient-text">Move Society</span>
            </h1>
            <p className="text-xl text-cool-slate-600 dark:text-cool-slate-300">
              We're building Expressive AI because we believe that the most important applications of artificial intelligence are in the domains that shape human culture, understanding, and progress.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="glass-card p-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-cool-slate-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-lg text-cool-slate-600 dark:text-cool-slate-300 mb-6">
                To democratize access to sophisticated AI tools for professionals in business, humanities, arts, and education. We're committed to building technology that respects human creativity and enhances rather than replaces human intelligence.
              </p>
              <p className="text-lg text-cool-slate-600 dark:text-cool-slate-300">
                Our vision is a future where AI empowers the minds that shape culture, strategy, and meaning—helping teachers teach better, researchers discover more, artists create deeper, and leaders think clearer.
              </p>
            </div>
            <div className="relative">
              <div className="glass p-4 rounded-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg" 
                  alt="Mission" 
                  className="rounded-xl w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue-600/20 to-soft-coral-500/20 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="glass-card p-6 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-cool-slate-900 dark:text-white">
                Our Core Values
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-8 hover-lift">
                <div className="text-accent-blue-600 dark:text-accent-blue-400 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-cool-slate-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-cool-slate-600 dark:text-cool-slate-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why We're Building This */}
        <div className="glass-card p-12 mb-20 bg-gradient-to-br from-accent-blue-50/50 to-soft-coral-50/50 dark:from-accent-blue-900/20 dark:to-soft-coral-900/20">
          <h2 className="text-3xl font-bold text-cool-slate-900 dark:text-white text-center mb-8">
            Why We're Building Expressive AI
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="glass p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-cool-slate-900 dark:text-white mb-2">The Gap We Saw</h3>
                  <p className="text-cool-slate-600 dark:text-cool-slate-300">
                    Most AI tools are built by engineers for engineers. We saw a massive gap in AI solutions designed specifically for professionals in humanities, business strategy, creative fields, and education.
                  </p>
                </div>
                <div className="glass p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-cool-slate-900 dark:text-white mb-2">Our Unique Perspective</h3>
                  <p className="text-cool-slate-600 dark:text-cool-slate-300">
                    As academics and researchers ourselves, we understand the nuanced needs of knowledge workers. We know what it takes to create AI that enhances rather than diminishes human expertise.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="glass p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-cool-slate-900 dark:text-white mb-2">Our Commitment</h3>
                  <p className="text-cool-slate-600 dark:text-cool-slate-300">
                    We're committed to building AI that is ethical, transparent, and designed to augment human capabilities. We believe the future of AI is collaborative, not competitive with human intelligence.
                  </p>
                </div>
                <div className="glass p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-cool-slate-900 dark:text-white mb-2">The Impact We Seek</h3>
                  <p className="text-cool-slate-600 dark:text-cool-slate-300">
                    We want to empower the people who shape our understanding of the world—educators, researchers, artists, strategists—with AI tools that respect and enhance their unique human capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Expertise Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="glass-card p-6 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-cool-slate-900 dark:text-white">
                Our Expertise
              </h2>
              <p className="text-cool-slate-600 dark:text-cool-slate-300 mt-3">
                Built by a team with deep expertise across AI research, education, and product development
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="glass-card p-8 hover-lift">
                <div className="text-accent-blue-600 dark:text-accent-blue-400 mb-6 flex justify-center">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-cool-slate-900 dark:text-white mb-4 text-center">
                  {area.title}
                </h3>
                <p className="text-cool-slate-600 dark:text-cool-slate-300 mb-6 text-center">
                  {area.description}
                </p>
                <div className="space-y-2">
                  {area.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-accent-blue-500 to-soft-coral-500 rounded-full"></div>
                      <span className="text-sm text-cool-slate-600 dark:text-cool-slate-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glass-card p-12 bg-gradient-to-br from-cool-slate-900/90 to-accent-blue-900/90 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-white/10 to-white/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">
                Join Us in Shaping the Future of AI
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Whether you're an educator, researcher, creative professional, or business strategist, we invite you to be part of our mission to make AI more human-centered and expressive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="glass-button bg-soft-coral-500/80 text-white hover:bg-soft-coral-600"
                >
                  Join Our Community
                </Link>
                <Link
                  to="/contact"
                  className="glass-button border-2 border-white/50 text-white hover:bg-white/20"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;