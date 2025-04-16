
import React from "react";

const Education = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80" 
                alt="Education" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
                <img 
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" 
                  alt="Student" 
                  className="w-24 h-24 rounded-full border-4 border-white"
                />
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-6">Mission & <span className="text-orange-500">Education</span></h2>
            <p className="text-gray-700 mb-4">
              Education is a powerful tool for breaking the cycle of poverty and creating opportunities for a better future. Our education programs focus on increasing access to quality education for all children, especially girls and those from marginalized communities.
            </p>
            <p className="text-gray-700 mb-4">
              We build and renovate schools, provide educational materials, and train teachers to improve the quality of instruction. Our scholarship programs help remove financial barriers to education, while our adult literacy classes give those who missed formal education a second chance.
            </p>
            <p className="text-gray-700">
              Beyond traditional academics, we also provide vocational training and life skills education to prepare youth for employment and entrepreneurship opportunities in their communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
