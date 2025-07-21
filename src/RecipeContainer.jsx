import RecipeCard from "./RecipeCard";
import React, { useState } from "react";

function RecipeContainer({ recipes }) {
  const [cookingTime, setCookingTime] = useState(20);
  const [filters, setFilters] = useState({
    category: "",
    origin: "",
    cookingTime: 120,
    minLikes: 0,
  });

  const handleFilterChange = (e) => {
    const { id, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [id]: id == "cookingTime" || id === "minLikes" ? parseInt(value) : value,
    }));
  };

  const filteredRecipes = recipes.filter((recipe) => {
    return (
      (filters.category === "" ||
        recipe.category.toLowerCase() === filters.category) &&
      (filters.origin === "" || recipe.origin === filters.origin) &&
      parseInt(recipe.cookingTime) <= filters.cookingTime &&
      recipe.initialLikes >= filters.minLikes
    );
  });

  const resetFilters = () => {
    setFilters({
      category: "",
      origin: "",
      cookingTime: 120,
      minLikes: 0,
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Filter Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              value={filters.category}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Categories</option>
              <option value="vegetarian">Vagetarian</option>
              <option value="vegan">Vegan</option>
              <option value="non-vegetarian">Non-vegetarian</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Origin
            </label>
            <select
              id="origin"
              value={filters.origin}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Country</option>
              <option value="Italian">Italian</option>
              <option value="Indian">Indian</option>
              <option value="Mexican">Mexican</option>
              <option value="Thai">Thai</option>
              <option value="Mediterranean">Mediterranean</option>
              <option value="Bangladeshi">Bangladeshi</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Max Cooking Time: {filters.cookingTime} min
            </label>
            <input
              type="range"
              id="cookingTime"
              min="10"
              max="120"
              step="5"
              value={filters.cookingTime}
              onChange={handleFilterChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-800"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>10 min</span>
              <span>120 min</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Minimum Likes
            </label>
            <select
              id="minLikes"
              value={filters.minLikes}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="0">Any</option>
              <option value="10">10+ Likes</option>
              <option value="50">50+ Likes</option>
              <option value="100">100+ Likes</option>
              <option value="500">500+ Likes</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <button
            onClick={resetFilters}
            className=" md:w-full lg:w-80 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white focus:outline-none cursor-pointer mt-5"
          >
            Reset Filters
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            description={recipe.description}
            hasImage={recipe.hasImage}
            imgUrl={recipe.imgUrl}
            category={recipe.category}
            origin={recipe.origin}
            instructions={recipe.instructions}
            cookingTime={recipe.cookingTime}
            initialLikes={recipe.initialLikes}
            userProfilePic={recipe.userProfilePic}
            userName={recipe.userName}
          />
        ))}
      </div>
    </div>
  );
}
export default RecipeContainer;
