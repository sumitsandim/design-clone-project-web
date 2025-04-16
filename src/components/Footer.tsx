
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About ALTS</h3>
            <p className="text-gray-400">
              A Life to Share (ALTS) is a non-profit organization dedicated to empowering communities through sustainable development initiatives.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#initiatives" className="text-gray-400 hover:text-orange-500 transition-colors">Our Initiatives</a></li>
              <li><a href="#highlights" className="text-gray-400 hover:text-orange-500 transition-colors">Highlights</a></li>
              <li><a href="#news" className="text-gray-400 hover:text-orange-500 transition-colors">News</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Support Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Donate</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Volunteer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Partnerships</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Corporate Giving</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Fundraise</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates on our work and impact.</p>
            <form>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l flex-1 text-gray-900 focus:outline-none"
                />
                <button 
                  type="submit" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2023 ALTS Organization. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
