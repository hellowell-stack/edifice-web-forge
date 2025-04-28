
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative py-20 bg-construction-blue">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80"
          alt="Engineering team meeting"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Soyami Engineering</h1>
          <p className="text-xl mb-4 text-gray-100">
            Building a legacy of excellence in construction and engineering.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
