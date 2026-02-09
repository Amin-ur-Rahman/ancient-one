import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#1c1917] via-dark-light to-[#1c1917] px-4 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* left side */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Welcome to <span className="text-primary">TechHub</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-muted">
            Your gateway to cutting-edge technology and innovation. Join a community of forward-thinkers shaping the future.
          </p>
  
          <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-all duration-300 hover:scale-105 active:scale-95">
            Join Us
          </button>
        </div>
        {/* right side */}
        <div className="grid grid-cols-2 gap-4">
          <div className="row-span-2">
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Tech Innovation"
              className="w-full h-full object-cover rounded-xl shadow-2xl"
            />
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="AI Technology"
              className="w-full h-48 object-cover rounded-xl shadow-lg"
            />
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Programming"
              className="w-full h-48 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;