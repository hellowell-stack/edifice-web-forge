
import React from 'react';
import { Link } from 'react-router-dom';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "BuildForge transformed our concept into an impressive commercial space that exceeded our expectations. Their attention to detail and commitment to quality was evident at every stage of the project.",
      author: "Michael Reynolds",
      position: "CEO, Apex Developments",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
      quote: "Working with the BuildForge team was a seamless experience. Their engineering expertise and innovative approach to problem-solving resulted in a facility that optimizes our operations.",
      author: "Sarah Johnson",
      position: "Operations Director, NexGen Manufacturing",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
      quote: "The integrity and professionalism of BuildForge is unmatched. They delivered our infrastructure project on time and within budget, while maintaining the highest standards of quality.",
      author: "David Chen",
      position: "City Planning Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100"
    }
  ];

  return (
    <section className="section-padding bg-construction-blue text-white" id="testimonials">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-xl font-semibold text-gray-200 mb-6">What Our Clients Say About Us</p>
          <p className="text-gray-200">
            We take pride in our work and the relationships we build with our clients. Here's what some of them have to say about their experience working with BuildForge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-construction-yellow">
                  <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                </div>
              </div>
              
              <p className="text-gray-100 mb-6 italic">"{testimonial.quote}"</p>
              
              <div className="text-center">
                <p className="font-bold text-construction-yellow">{testimonial.author}</p>
                <p className="text-sm text-gray-300">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/testimonials" className="bg-white text-construction-blue hover:bg-construction-yellow hover:text-black font-semibold py-3 px-6 rounded-md transition-all duration-300 inline-block">
            View More Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
