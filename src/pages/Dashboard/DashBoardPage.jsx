import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import DashBoardContent from "./DashBoardContent";
import React, { useState } from "react";

function DashBoardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const createRecipes = [
    {
      id: 1,
      title: "Home made pizza",
      description: "Delicious homemade pizza with fresh ingredients",
      hasImage: true,
      imgUrl: "src/assets/sample-food.jpg",
      category: "Vegetarian",
      origin: "Italian",
      instructions: ["Make dough", "Add toppings", "Bake at 400°F"],
      cookingTime: "45 min",
      initialLikes: 25,
      userProfilePic: "src/assets/robot_chef.png",
      userName: "John doe",
    },
    {
      id: 2,
      title: "Home made pizza",
      description: "Delicious homemade pizza with fresh ingredients",
      hasImage: false,
      imgUrl: "src/assets/sample-food.jpg",
      category: "Vegetarian",
      origin: "Italian",
      instructions: ["Make dough", "Add toppings", "Bake at 400°F"],
      cookingTime: "45 min",
      initialLikes: 13,
      userProfilePic: "src/assets/robot_chef.png",
      userName: "Jane doe",
    },
    {
      id: 3,
      title: "Home made pizza",
      description: "Delicious homemade pizza with fresh ingredients",
      hasImage: true,
      imgUrl: "src/assets/sample-food.jpg",
      category: "Vegetarian",
      origin: "Italian",
      instructions: ["Make dough", "Add toppings", "Bake at 400°F"],
      cookingTime: "45 min",
      initialLikes: 12,
      userProfilePic: "src/assets/robot_chef.png",
      userName: "Jane doe",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <div
          className={`${
            sidebarOpen ? "md:w-64 lg:w-auto" : "md:w-20 lg:w-auto"
          } transition-all duration-300`}
        >
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
        <main>
          <DashBoardContent createdRecipes={createRecipes} />
        </main>
      </div>
    </div>
  );
}
export default DashBoardPage;
