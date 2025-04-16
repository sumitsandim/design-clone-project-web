
import React from "react";

const newsData = [
  {
    id: 1,
    title: "New Clean Water Initiative Launched in Eastern Region",
    date: "May 15, 2023",
    image: "https://images.unsplash.com/photo-1541438263801-48d52f79f3f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Water"
  },
  {
    id: 2,
    title: "ALTS Partners with Local Schools to Improve Education Quality",
    date: "April 22, 2023",
    image: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
    category: "Education"
  },
  {
    id: 3,
    title: "Community-led Reforestation Project Exceeds Target Goals",
    date: "March 10, 2023",
    image: "https://images.unsplash.com/photo-1586247270652-dadcbcdce234?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Environment"
  }
];

const NewsSection = () => {
  return (
    <section id="news" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">News & <span className="text-orange-500">Updates</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <div key={news.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">{news.date}</span>
                  <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded">{news.category}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{news.title}</h3>
                <a href="#" className="inline-block mt-3 text-orange-500 hover:text-orange-600 font-medium">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
