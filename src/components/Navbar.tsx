
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/lovable-uploads/6d4280b6-f361-4a9f-8cb0-6091c6df7719.png" alt="ALTS Logo" className="h-12 w-12" />
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-orange-500">Home</a>
            <a href="#about" className="text-gray-700 hover:text-orange-500">About Us</a>
            <a href="#initiatives" className="text-gray-700 hover:text-orange-500">Initiatives</a>
            <a href="#highlights" className="text-gray-700 hover:text-orange-500">Highlights</a>
            <a href="#news" className="text-gray-700 hover:text-orange-500">News</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500">Contact</a>
          </nav>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-2 py-2 space-y-2">
            <a href="#home" className="block text-gray-700 hover:text-orange-500">Home</a>
            <a href="#about" className="block text-gray-700 hover:text-orange-500">About Us</a>
            <a href="#initiatives" className="block text-gray-700 hover:text-orange-500">Initiatives</a>
            <a href="#highlights" className="block text-gray-700 hover:text-orange-500">Highlights</a>
            <a href="#news" className="block text-gray-700 hover:text-orange-500">News</a>
            <a href="#contact" className="block text-gray-700 hover:text-orange-500">Contact</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
