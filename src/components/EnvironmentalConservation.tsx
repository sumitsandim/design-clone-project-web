
import React from "react";

const EnvironmentalConservation = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Environmental <span className="text-orange-500">Conservation</span></h2>
        
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="md:w-2/3">
            <p className="text-gray-700 mb-4">
              The health of our planet directly impacts the well-being of communities worldwide. Our environmental conservation initiatives aim to protect natural resources, promote sustainable practices, and build resilience to climate change.
            </p>
            <p className="text-gray-700 mb-4">
              We engage in reforestation projects, helping communities plant native trees to combat deforestation and soil erosion. Our sustainable agriculture programs teach eco-friendly farming methods that conserve water, maintain soil health, and reduce the use of harmful chemicals.
            </p>
            <p className="text-gray-700">
              Through environmental education, we raise awareness about conservation issues and empower communities to become stewards of their local ecosystems. We also work on renewable energy initiatives, helping communities adopt clean energy technologies that reduce their environmental footprint.
            </p>
          </div>
          
          <div className="md:w-1/3">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586247270652-dadcbcdce234?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Environmental conservation" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
                <div className="w-24 h-24 rounded-full bg-green-600 flex items-center justify-center border-4 border-white">
                  <span className="text-white text-4xl">♻️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalConservation;
