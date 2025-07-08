import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import RecipeGenerationCard from "./RecipeGenerationCard";
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
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="flex-1 flex justify-center">
            <main>
              <RecipeGenerationCard
                title={demoGeneratedRecipe[0].title}
                category={demoGeneratedRecipe[0].category}
                origin={demoGeneratedRecipe[0].origin}
                description={demoGeneratedRecipe[0].description}
                cookingTime={demoGeneratedRecipe[0].cookingTime}
                instructions={demoGeneratedRecipe[0].instructions}
              />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
export default GenerateRecipePage;
