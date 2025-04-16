
import React from "react";

const WaterInfo = () => {
  return (
    <section className="py-16 bg-orange-500 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-6">Clean <span className="underline">Water</span></h2>
            <p className="mb-4">
              Access to clean water is a fundamental human right, yet millions around the world still struggle to obtain this basic necessity. Our water initiatives focus on implementing sustainable solutions that provide communities with reliable access to safe drinking water.
            </p>
            <p className="mb-4">
              We work on drilling boreholes, constructing wells, installing water filtration systems, and rainwater harvesting technologies. Additionally, we train community members in water management and maintenance of water infrastructure to ensure long-term sustainability.
            </p>
            <p>
              Our integrated approach also includes sanitation education and hygiene promotion, as these are crucial components in preventing water-borne diseases and maintaining community health.
            </p>
          </div>
          
          <div className="md:w-1/3">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541438263801-48d52f79f3f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Clean water" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
                <img 
                  src="https://images.unsplash.com/photo-1625766763562-a1678fccc4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Child drinking water" 
                  className="w-24 h-24 rounded-full border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterInfo;
