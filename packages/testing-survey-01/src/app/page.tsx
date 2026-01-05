export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
          Hello World
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto">
          Welcome to your new landing page. This is where great things begin.
        </p>
        
        {/* Call to Action */}
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
          Get Started
        </button>
      </div>
    </div>
  );
}

