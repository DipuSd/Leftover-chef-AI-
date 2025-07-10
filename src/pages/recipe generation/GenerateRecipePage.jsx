import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import RecipeGenerationCard from "./RecipeGenerationCard";
import UserInputSection from "./UserInpuSection";
import React, { useState } from "react";

function GenerateRecipePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const demoGeneratedRecipe = [
    {
      title: "Vegetable Stir Fry",
      category: "Vegetarian",
      origin: "Asian",
      description:
        "A quick and healthy vegetable dish packed with colorful veggies and savory sauce.",
      cookingTime: "20 mins",
      instructions: [
        "Chop all vegetables into even pieces",
        "Heat oil in a wok or large pan",
        "Stir-fry vegetables starting with the firmest ones",
        "Add sauce and toss to coat",
        "Serve immediately over rice",
      ],
    },
  ];
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-1">
          {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
          <main className="flex-1 p-6 overflow-y-auto">
            <UserInputSection />
          </main>
        </div>
      </div>
    </>
  );
}
export default GenerateRecipePage;
