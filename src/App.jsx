import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import RecipeContainer from "./RecipeContainer";
import FeaturedContainer from "./FeaturedContainer";
import React, { useState } from "react";

function App() {
  const sampleFood = "/sample-food.jpg";
  const sampleProfile = "/robot_chef.png";
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Vegetable Stir Fry",
      description: "Quick and healthy vegetable dish ready in 15 minutes...",
      hasImage: true,
      imgUrl: sampleFood,
      category: "Vegetarian",
      origin: "Italian",
      instructions: [
        "Chop all vegetables",
        "Heat oil in pan",
        "Stir-fry vegetables",
        "Add sauce and serve",
      ],
      cookingTime: "20 mins",
      initialLikes: 55,
      userProfilePic: sampleProfile,
      userName: "Jane Doe",
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
      userProfilePic: sampleProfile,
      userName: "John Doe",
    },
    {
      id: 3,
      title: "Vegetable Stir Fry",
      description: "Quick and healthy vegetable dish ready in 15 minutes...",
      hasImage: true,
      imgUrl: sampleFood,
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
      userProfilePic: sampleProfile,
      userName: "Jane Doe",
    },
    {
      id: 4,
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
      userProfilePic: sampleProfile,
      userName: "John Doe",
    },
  ]);

  const featuredItems = [
    { title: "5-Minute Breakfast Ideas", likes: 4200 },
    { title: "Vegetarian Meal Prep", likes: 3800 },
    { title: "One-Pot Pasta Recipes", likes: 3500 },
  ];

  function addNewRecipe(newRecipe) {
    const newId = Math.max(...recipes.map((recipe) => recipe.id), 0) + 1;
    setRecipes((prevRecipes) => [
      ...prevRecipes,
      {
        id: newId,
        title: newRecipe.title,
        description: newRecipe.description,
        hasImage: Boolean(newRecipe.image),
        imgUrl: newRecipe.image || " ",
        category: newRecipe.category,
        origin: newRecipe.origin,
        instructions: newRecipe.steps,
        cookingTime: `${newRecipe.cookingTime} mins`,
        initialLikes: 0,
        userProfilePic: sampleProfile,
        userName: "DemoUser",
      },
    ]);
  }

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar onSubmit={addNewRecipe} />
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
