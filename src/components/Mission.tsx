
import React from "react";

const Mission = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-orange-500">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Mission" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Mission & <span className="text-orange-500">Vision</span></h2>
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Our Mission:</span> To empower vulnerable communities through sustainable development initiatives that address their fundamental needs while building capacity for long-term self-reliance.
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Our Vision:</span> A world where all communities have equal access to resources, opportunities, and a healthy environment, enabling them to thrive and reach their full potential.
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Our Values:</span> Integrity, Compassion, Sustainability, Collaboration, and Innovation guide our work as we strive to create positive, lasting change in partnership with the communities we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
