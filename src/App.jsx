import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import RecipeContainer from "./RecipeContainer";
import FeaturedContainer from "./FeaturedContainer";
import React, { useState } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const recipes = [
    {
      id: 1,
      title: "Vegetable Stir Fry",
      description: "Quick and healthy vegetable dish ready in 15 minutes...",
      hasImage: true,
      imgUrl: "src/assets/sample-food.jpg",
      category: "Vegetarian",
      origin: "Italian",
      instructions: [
        "Chop all vegetables",
        "Heat oil in pan",
        "Stir-fry vegetables",
        "Add sauce and serve",
      ],
      cookingTime: "20 mins",
      initialLikes: 45,
    },
    {
      id: 2,
      title: "Overnight Oats",
      description: "Perfect make-ahead breakfast with endless variations...",
      hasImage: false,
      category: "Vegan",
      origin: "Mexican",
      instructions: [
        "Chop all vegetables",
        "Heat oil in pan",
        "Stir-fry vegetables",
        "Add sauce and serve",
      ],
      cookingTime: "30 mins",
      initialLikes: 30,
    },
  ];
  const featuredItems = [
    { title: "5-Minute Breakfast Ideas", likes: 4200 },
    { title: "Vegetarian Meal Prep", likes: 3800 },
    { title: "One-Pot Pasta Recipes", likes: 3500 },
  ];
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="flex-1 flex justify-center lg:ml-80">
            <main
              className={`w-full max-w-4xl p-6 transition-all duration-300 ${
                sidebarOpen ? "md:ml-64 lg:ml-0" : "md:ml-20 lg:ml-0"
              }`}
            >
              <RecipeContainer recipes={recipes} />
            </main>
          </div>
          <div
            className={`lg:block w-72 pl-6 pr-4 transition-all duration-300 ease-in-out ${
              sidebarOpen
                ? " md:-mr-72 lg:mr-0"
                : "opacity-100 h-auto md:mr-0 lg:mr-0"
            }`}
          >
            <div className="sticky top-20">
              <FeaturedContainer featuredList={featuredItems} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
