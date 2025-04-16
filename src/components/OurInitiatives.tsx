
import React from "react";

const initiativeData = [
  {
    id: 1,
    title: "Water Access",
    image: "https://images.unsplash.com/photo-1541438263801-48d52f79f3f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Providing clean water solutions",
  },
  {
    id: 2,
    title: "Child Rights",
    image: "https://images.unsplash.com/photo-1602356902387-8cc62a27e084?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Protecting children's rights",
  },
  {
    id: 3,
    title: "Food & Nutrition",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Fighting hunger and malnutrition",
  },
  {
    id: 4,
    title: "Education",
    image: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
    description: "Promoting quality education",
  },
  {
    id: 5,
    title: "Environment",
    image: "https://images.unsplash.com/photo-1586247270652-dadcbcdce234?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Conservation and sustainability",
  },
  {
    id: 6,
    title: "Rural Development",
    image: "https://images.unsplash.com/photo-1553408226-9a787e575ae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Empowering rural communities",
  },
  {
    id: 7,
    title: "Healthcare",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    description: "Accessible healthcare services",
  },
  {
    id: 8,
    title: "Women Empowerment",
    image: "https://images.unsplash.com/photo-1637419450536-378d5457abb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Supporting women's rights",
  },
  {
    id: 9,
    title: "Disaster Relief",
    image: "https://images.unsplash.com/photo-1469571486292-b5681efb6a9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Emergency response and relief",
  },
];

const OurInitiatives = () => {
  return (
    <section id="initiatives" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our <span className="text-orange-500">Initiatives</span></h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We work across multiple areas to create sustainable impact and empower communities
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {initiativeData.map((initiative) => (
            <div 
              key={initiative.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={initiative.image} 
                  alt={initiative.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{initiative.title}</h3>
                <p className="text-gray-600">{initiative.description}</p>
                <a href="#" className="inline-block mt-3 text-orange-500 hover:text-orange-600 font-medium">Learn More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurInitiatives;
