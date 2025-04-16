
import React from "react";

const ChildRights = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Child Rights <span className="text-orange-500">Protection</span></h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Child rights" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <p className="mb-4">
              Every child deserves protection, care, and the opportunity to develop to their full potential. Our child rights programs work to safeguard children from exploitation, abuse, and neglect while promoting their rights to education, healthcare, and a safe environment.
            </p>
            <p className="mb-4">
              We collaborate with local authorities, schools, and communities to establish child protection systems, raise awareness about children's rights, and provide support services for vulnerable children, including those affected by poverty, conflict, or displacement.
            </p>
            <p>
              Through our advocacy efforts, we also work to influence policies and practices that affect children's lives, striving to create lasting change at both local and national levels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildRights;
