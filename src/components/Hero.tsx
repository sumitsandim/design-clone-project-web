
import React from "react";

const Hero = () => {
  return (
    <section id="home" className="relative h-[80vh] bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 z-0"></div>
      
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')` 
        }}
      ></div>

      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-[url('/smoke.png')] bg-cover bg-center"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          A Life to <span className="text-orange-500">Share</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mt-2 md:mt-4">
          <span className="bg-orange-500 px-4 py-1">ALTS</span>
        </h2>
        <p className="mt-4 md:mt-6 max-w-2xl text-lg md:text-xl">
          Empowering communities through sustainable development initiatives
        </p>
        <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
          Join Our Mission
        </button>
      </div>
    </section>
  );
};

export default Hero;
