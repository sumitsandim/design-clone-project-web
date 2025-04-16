
import React from "react";

const FeaturedHighlights = () => {
  return (
    <section id="highlights" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured <span className="text-orange-500">Highlights</span> [2023]</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Reached over 15,000+</span> individuals with our clean water initiatives, establishing sustainable water systems in 23 villages across rural communities.
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Provided education support</span> to more than 2,500 children, building 4 new schools and renovating 6 existing structures to create better learning environments.
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Implemented sustainable farming practices</span> in 18 communities, helping over 1,200 families improve their food security and increase their income through agricultural training.
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Led environmental conservation efforts</span> that resulted in the planting of 25,000 trees and the protection of 400 hectares of critical habitat, working with local communities to preserve biodiversity.
            </p>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-orange-500">
                <img 
                  src="https://images.unsplash.com/photo-1541438263801-48d52f79f3f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Clean water initiative" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHighlights;
