
import React from "react";

const GetInvolved = () => {
  return (
    <section className="py-16 bg-orange-500 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get <span className="underline">Involved</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-orange-500 text-3xl">💰</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Donate</h3>
            <p>Support our work with a one-time or monthly donation</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-orange-500 text-3xl">🤝</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Volunteer</h3>
            <p>Join our team in the field or provide virtual support</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-orange-500 text-3xl">🏢</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Partner</h3>
            <p>Collaborate with us through corporate partnerships</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-orange-500 text-3xl">📣</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Advocate</h3>
            <p>Help spread awareness about our cause and mission</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
