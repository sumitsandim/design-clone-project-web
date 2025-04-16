
import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About <span className="text-orange-500">Us</span></h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/3">
            <p className="text-gray-700 mb-4">
              ALTS (A Life to Share) is a non-profit organization dedicated to improving the lives of underprivileged communities around the world. Founded in 2010, we have been working tirelessly to address critical issues such as water scarcity, child rights, food security, education, and environmental conservation.
            </p>
            <p className="text-gray-700 mb-4">
              Our approach is holistic and sustainable, focusing on empowering communities to become self-sufficient while preserving their cultural heritage and natural environment. We collaborate with local governments, other NGOs, and community leaders to implement programs that create lasting positive change.
            </p>
            <p className="text-gray-700">
              At ALTS, we believe that everyone deserves access to basic necessities, opportunities for growth, and a clean, safe environment. Join us in our mission to create a more equitable and sustainable world for all.
            </p>
          </div>
          
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-orange-500">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Children smiling" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">10+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
