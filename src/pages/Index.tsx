
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import OurInitiatives from "@/components/OurInitiatives";
import FeaturedHighlights from "@/components/FeaturedHighlights";
import Mission from "@/components/Mission";
import WaterInfo from "@/components/WaterInfo";
import ChildRights from "@/components/ChildRights";
import FoodAndNutrition from "@/components/FoodAndNutrition";
import Education from "@/components/Education";
import EnvironmentalConservation from "@/components/EnvironmentalConservation";
import RuralDevelopment from "@/components/RuralDevelopment";
import GetInvolved from "@/components/GetInvolved";
import NewsSection from "@/components/NewsSection";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <OurInitiatives />
        <FeaturedHighlights />
        <Mission />
        <WaterInfo />
        <ChildRights />
        <FoodAndNutrition />
        <Education />
        <EnvironmentalConservation />
        <RuralDevelopment />
        <GetInvolved />
        <NewsSection />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
