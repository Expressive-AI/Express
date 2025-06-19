import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ArrowLeft, 
  Coffee,
  Sparkles,
  MapPin,
  Code,
  Bug,
  Zap,
  Smile,
  RefreshCw,
  Terminal,
  GitBranch,
  Heart
} from 'lucide-react';

const NotFound = () => {
  const [randomJoke, setRandomJoke] = useState(0);
  const [isShaking, setIsShaking] = useState(false);
  const developerJokes = [
    "Page went to grab some coffee ☕",
    "This page is out getting pizza 🍕",
    "Currently on a creative break 🎨",
    "Page is upgrading itself �",
    "Gone fishing for inspiration 🎣",
    "Taking a well-deserved coffee break",
    "Busy refactoring the universe ✨",
    "Page is having a spa day 🧘‍♂️"
  ];
  const funFacts = [
    "🚀 Did you know? Our developers drink an average of 4.2 cups of coffee daily!",
    "💡 Fun fact: This page has better animations than some entire websites!",
    "🎯 Pro tip: Sometimes the best discoveries happen when you're lost!",
    "🌟 Easter egg: You've found our secret developer appreciation corner!"
  ];

  const quickLinks = [
    {
      title: "Home",
      description: "Back to the mothership 🚀",
      path: "/",
      icon: <Home className="h-5 w-5" />,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Products",
      description: "Cool stuff we built ⚡",
      path: "/products",
      icon: <Zap className="h-5 w-5" />,
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Services",
      description: "What we're awesome at 💪",
      path: "/services",
      icon: <Sparkles className="h-5 w-5" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Contact",
      description: "Let's chat! 💬",
      path: "/contact",
      icon: <Heart className="h-5 w-5" />,
      color: "from-pink-500 to-red-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomJoke(Math.floor(Math.random() * developerJokes.length));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const shakeIt = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-950/20 flex items-center justify-center py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main 404 Section */}
        <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl dark:shadow-2xl p-12 mb-12 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative z-10">
            {/* Fun ASCII Art Style 404 */}
            <div className="mb-8">
              <div className={`relative mx-auto w-48 h-32 transition-transform duration-500 ${isShaking ? 'animate-bounce' : ''}`}>
                <div className="font-mono text-6xl md:text-8xl font-bold text-gray-400 dark:text-gray-600 select-none">
                  <div className="flex justify-center items-center space-x-2">
                    <span className="hover:text-blue-500 transition-colors cursor-pointer" onClick={shakeIt}>4</span>
                    <Coffee className="h-12 w-12 md:h-16 md:w-16 text-amber-500 animate-bounce" />
                    <span className="hover:text-purple-500 transition-colors cursor-pointer" onClick={shakeIt}>4</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Joke */}
            <div className="mb-8">
              <div className="backdrop-blur-sm bg-gradient-to-r from-blue-100/80 to-purple-100/80 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl p-4 border border-blue-200/50 dark:border-blue-700/50">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 animate-fade-in">
                  {developerJokes[randomJoke]}
                </h2>
              </div>
            </div>            {/* Funny Message */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Oops! Looks like this page is on an adventure! 🗺️
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
                Don't worry, our code is usually more reliable than our sense of direction. 
                While this page is busy exploring new territories, let's get you back on track! 
              </p>
              
              {/* Fun Status Code */}
              <div className="inline-flex items-center space-x-2 backdrop-blur-sm bg-gray-100/80 dark:bg-gray-700/50 rounded-lg px-4 py-2 border border-gray-200/50 dark:border-gray-600/50">
                <Terminal className="h-5 w-5 text-green-500" />
                <span className="font-mono text-sm text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500">Page</span> 
                  <span className="text-gray-500 mx-1">status:</span> 
                  <span className="text-purple-500">Coming Soon!</span>
                  <span className="text-gray-500 mx-1">|</span>
                  <span className="text-green-500">vibes:</span> 
                  <span className="text-yellow-500">Excellent</span>
                </span>
              </div>
            </div>

            {/* Interactive Elements */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/"
                className="backdrop-blur-sm bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl px-8 py-3 font-medium flex items-center justify-center group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25 transform hover:-translate-y-1"
              >
                <Home className="mr-2 h-5 w-5" />
                Take Me Home
                <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="backdrop-blur-sm border-2 border-blue-500/50 dark:border-blue-400/50 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10 dark:hover:bg-blue-400/10 rounded-xl px-8 py-3 font-medium flex items-center justify-center group transition-all duration-300 transform hover:-translate-y-1"
              >
                <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                Undo Last Move
              </button>

              <button
                onClick={() => window.location.reload()}
                className="backdrop-blur-sm border-2 border-green-500/50 dark:border-green-400/50 text-green-600 dark:text-green-400 hover:bg-green-500/10 dark:hover:bg-green-400/10 rounded-xl px-8 py-3 font-medium flex items-center justify-center group transition-all duration-300 transform hover:-translate-y-1"
              >
                <RefreshCw className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                Try Again
              </button>
            </div>

            {/* Random Fun Fact */}
            <div className="backdrop-blur-sm bg-yellow-100/80 dark:bg-yellow-900/30 rounded-2xl p-4 border border-yellow-200/50 dark:border-yellow-700/50 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2 text-yellow-700 dark:text-yellow-300">
                <Bug className="h-5 w-5" />
                <span className="font-medium">{funFacts[Math.floor(Math.random() * funFacts.length)]}</span>
              </div>
            </div>
          </div>
        </div>        {/* Developer-Style Navigation */}
        <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl dark:shadow-2xl p-8 mb-8">
          <div className="mb-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <GitBranch className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              🚀 Quick Navigation Menu
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Choose your adventure! Where would you like to explore next?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="backdrop-blur-sm bg-white/50 dark:bg-gray-700/50 border border-gray-200/50 dark:border-gray-600/50 rounded-2xl p-6 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 group text-left transform hover:-translate-y-2 hover:rotate-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`bg-gradient-to-br ${link.color} p-3 rounded-full text-white mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {link.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {link.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {link.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>        {/* Developer Support Section */}
        <div className="text-center">
          <div className="backdrop-blur-xl bg-gradient-to-br from-green-100/80 via-blue-100/60 to-purple-100/80 dark:from-green-900/30 dark:via-blue-900/20 dark:to-purple-900/30 rounded-3xl border border-green-200/50 dark:border-green-700/50 shadow-xl dark:shadow-2xl p-8 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-2xl animate-pulse"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Smile className="h-8 w-8 text-green-500 animate-bounce" />
                <Code className="h-6 w-6 text-blue-500" />
                <Heart className="h-6 w-6 text-red-500 animate-pulse" />
              </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🤖 Need Human Support?
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our friendly developers (who definitely don't live on coffee alone) are here to help! 
                We promise we're more helpful than this sneaky page. 😄
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/contact"
                  className="backdrop-blur-sm bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-xl px-6 py-3 font-medium flex items-center justify-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Chat with Humans
                  <Coffee className="ml-2 h-5 w-5 animate-bounce" />
                </Link>
                
                <Link
                  to="/products"
                  className="backdrop-blur-sm border-2 border-purple-500/50 text-purple-600 dark:text-purple-400 hover:bg-purple-500/10 rounded-xl px-6 py-3 font-medium flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Explore Cool Stuff
                </Link>
              </div>
              
              {/* Fun Footer */}
              <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center justify-center space-x-1">
                  <span>Made with</span>
                  <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                  <span>and lots of</span>
                  <Coffee className="h-4 w-4 text-amber-500" />
                  <span>by awesome developers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;