
import React from "react";

const RuralDevelopment = () => {
  return (
    <section className="py-16 bg-green-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1553408226-9a787e575ae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Rural development" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-6">Rural <span className="underline">Development</span></h2>
            <p className="mb-4">
              Rural communities often face unique challenges, including limited access to essential services, infrastructure, and economic opportunities. Our rural development programs work to address these challenges and improve quality of life in remote areas.
            </p>
            <p className="mb-4">
              We help develop community infrastructure like roads, bridges, and community centers that enhance connectivity and provide spaces for gatherings and service delivery. Our economic development initiatives support local entrepreneurship, cooperatives, and market access for rural products.
            </p>
            <p>
              By strengthening governance and leadership at the community level, we also empower rural populations to advocate for their needs and participate in decision-making processes that affect their lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RuralDevelopment;
