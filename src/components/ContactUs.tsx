
import React from "react";

const ContactUs = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact <span className="text-orange-500">Us</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Address</h3>
                  <p className="text-gray-700">123 Humanitarian Way, Global City, 10001</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📧</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-gray-700">info@alts-organization.org</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📞</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <p className="text-gray-700">+1 (123) 456-7890</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">f</a>
              <a href="#" className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white">t</a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white">i</a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white">y</a>
            </div>
          </div>
          
          <div>
            <form className="bg-gray-100 p-6 rounded-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded font-medium transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
