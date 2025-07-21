import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import DashBoardContent from "./DashBoardContent";
import React, { useState } from "react";

function DashBoardPage() {
  const ProfilePic = "/robot_chef.png";
  const CoverImage = "/sample-food.jpg";
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [createdRecipes, setCreatedRecipes] = useState([
    {
      id: 1,
      title: "Home made pizza",
      description: "Delicious homemade pizza with fresh ingredients",
      hasImage: true,
      imgUrl: CoverImage,
      category: "Vegetarian",
      origin: "Italian",
      instructions: ["Make dough", "Add toppings", "Bake at 400°F"],
      cookingTime: "45 min",
      initialLikes: 25,
      userProfilePic: ProfilePic,
      userName: "John doe",
      needTrashIcon: true,
    },
    {
      id: 2,
      title: "Home made pizza",
      description: "Delicious homemade pizza with fresh ingredients",
      hasImage: false,
      imgUrl: CoverImage,
      category: "Vegetarian",
      origin: "Italian",
      instructions: ["Make dough", "Add toppings", "Bake at 400°F"],
      cookingTime: "45 min",
      initialLikes: 13,
      userProfilePic: ProfilePic,
      userName: "Jane doe",
      needTrashIcon: true,
    },
    {
      id: 3,
      title: "Home made pizza",
      description: "Delicious homemade pizza with fresh ingredients",
      hasImage: true,
      imgUrl: CoverImage,
      category: "Vegetarian",
      origin: "Italian",
      instructions: ["Make dough", "Add toppings", "Bake at 400°F"],
      cookingTime: "45 min",
      initialLikes: 12,
      userProfilePic: ProfilePic,
      userName: "Jane doe",
      needTrashIcon: true,
    },
  ]);

  const [savedRecipes, setSavedRecipes] = useState([
    {
      id: 1,
      title: "AI-generated Pasta",
      category: "Vegetarian",
      origin: "Italian",
      description: "AI-created pasta recipe with perfect flavor balance",
      instructions: ["Boil water", "Cook pasta", "Prepare sauce"],
      cookingTime: "45 min",
      isAiGenerated: true,
      isBookMarked: true,
    },
    {
      id: 2,
      title: "Home made pizza",
      description: "Delicious homemade pizza with fresh ingredients",
      hasImage: true,
      imgUrl: CoverImage,
      category: "Vegetarian",
      origin: "Italian",
      instructions: ["Make dough", "Add toppings", "Bake at 400°F"],
      cookingTime: "45 min",
      initialLikes: 25,
      userProfilePic: ProfilePic,
      userName: "John doe",
      isAiGenerated: false,
      isBookMarked: true,
    },
    {
      id: 3,
      title: "AI-generated Pasta",
      category: "Vegetarian",
      origin: "Italian",
      description: "AI-created pasta recipe with perfect flavor balance",
      instructions: ["Boil water", "Cook pasta", "Prepare sauce"],
      cookingTime: "45 min",
      isAiGenerated: true,
      isBookMarked: true,
    },
    {
      id: 4,
      title: "Home made pizza",
      description: "Delicious homemade pizza with fresh ingredients",
      hasImage: true,
      imgUrl: CoverImage,
      category: "Vegetarian",
      origin: "Italian",
      instructions: ["Make dough", "Add toppings", "Bake at 400°F"],
      cookingTime: "45 min",
      initialLikes: 25,
      userProfilePic: ProfilePic,
      userName: "John doe",
      isAiGenerated: false,
      isBookMarked: true,
    },
  ]);

  const handleDeleteRecipe = (recipeId) => {
    setCreatedRecipes((prevRecipe) =>
      prevRecipe.filter((recipe) => recipe.id !== recipeId)
    );
  };

  const handleRemoveSavedRecipe = (recipeId) => {
    setSavedRecipes((prevRecipe) =>
      prevRecipe.filter((recipe) => recipe.id !== recipeId)
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <div
          className={`${
            sidebarOpen ? "md:w-64 lg:w-64" : "md:w-20 lg:w-20"
          } transition-all duration-300`}
        >
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
        <main
          className={`flex-1 p-6 overflow-y-auto transition-all duration-300 ${
            sidebarOpen ? "md:ml-5 lg:ml-0" : " "
          }`}
        >
          <DashBoardContent
            createdRecipes={createdRecipes}
            savedRecipes={savedRecipes}
            sidebarOpen={sidebarOpen}
            onDeleteRecipe={handleDeleteRecipe}
            onRemoveSavedRecipe={handleRemoveSavedRecipe}
          />
        </main>
      </div>
    </div>
  );
}
export default DashBoardPage;
