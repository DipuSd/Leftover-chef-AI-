import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import RecipeContainer from "./RecipeContainer";
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
    },
    {
      id: 2,
      title: "Overnight Oats",
      description: "Perfect make-ahead breakfast with endless variations...",
      hasImage: false,
    },
  ];
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main
            className={`flex-1 p-6 transition-all duration-300 ${
              sidebarOpen ? "ml-64" : "ml-20"
            }`}
          >
            <RecipeContainer recipes={recipes} />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
