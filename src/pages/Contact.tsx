
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { MapPin, Phone, Mail, Calendar } from 'lucide-react';
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { toast } = useToast();

  const onSubmit = (data) => {
    console.log(data);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    reset();
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-construction-blue py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <Breadcrumb className="text-white/70">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Contact</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <h3 className="text-xl font-bold mb-6 text-construction-darkBlue">Our Contact Details</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-construction-blue p-3 rounded-full text-white flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-construction-blue">Address</h4>
                      <p className="text-construction-gray">
                        Soyami<br />
                        Lalitpur, Nepal
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-construction-blue p-3 rounded-full text-white flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-construction-blue">Phone</h4>
                      <p className="text-construction-gray">
                        +977 98-XXXX-XXXX<br />
                        Mon-Sat, 9am-5pm
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-construction-blue p-3 rounded-full text-white flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-construction-blue">Email</h4>
                      <p className="text-construction-gray">
                        info@soyami.com<br />
                        projects@soyami.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-construction-blue p-3 rounded-full text-white flex-shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-construction-blue">Business Hours</h4>
                      <p className="text-construction-gray">
                        Monday - Saturday: 9:00 AM - 5:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-construction-darkBlue">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-construction-gray mb-1">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        {...register("name", { required: "Name is required" })}
                        placeholder="John Doe"
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && (
                        <span className="text-red-500 text-sm">{errors.name.message as string}</span>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-construction-gray mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: { 
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address" 
                          }
                        })}
                        placeholder="john@example.com"
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <span className="text-red-500 text-sm">{errors.email.message as string}</span>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-construction-gray mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      {...register("phone", { required: "Phone number is required" })}
                      placeholder="+977 98-XXXX-XXXX"
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-sm">{errors.phone.message as string}</span>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-construction-gray mb-1">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      {...register("message", { required: "Message is required" })}
                      rows={5}
                      placeholder="Tell us about your project needs..."
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                      <span className="text-red-500 text-sm">{errors.message.message as string}</span>
                    )}
                  </div>
                  
                  <div>
                    <Button 
                      type="submit" 
                      className="bg-construction-yellow hover:bg-construction-orange text-black font-semibold py-2 px-6 rounded-md transition-all duration-300"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="mt-16">
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px] bg-gray-200">
              {/* This is where you would embed a Google Map */}
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <p className="text-construction-gray font-medium">Google Maps Embed Would Go Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
