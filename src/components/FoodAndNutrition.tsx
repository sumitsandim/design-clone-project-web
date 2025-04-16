
import React from "react";

const FoodAndNutrition = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Food & <span className="text-orange-500">Nutrition</span></h2>
        
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="md:w-2/3">
            <p className="text-gray-700 mb-4">
              Proper nutrition is essential for health, development, and survival. Our food and nutrition programs aim to combat hunger and malnutrition through a holistic approach that addresses immediate needs while building long-term food security.
            </p>
            <p className="text-gray-700 mb-4">
              We support communities in establishing sustainable agricultural practices, including organic farming, permaculture, and crop diversification. This helps increase food production, improve nutritional diversity, and enhance resilience to climate change.
            </p>
            <p className="text-gray-700">
              Additionally, we conduct nutrition education and cooking demonstrations to promote balanced diets and proper food preparation methods. For the most vulnerable populations, we provide direct food assistance and nutrition supplements to prevent malnutrition.
            </p>
          </div>
          
          <div className="md:w-1/3">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Food and nutrition" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodAndNutrition;
