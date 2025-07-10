import React, { useState } from "react";
import { FiBookmark, FiPlus, FiX, FiClock, FiTrash2 } from "react-icons/fi";
import RecipeGenerationCard from "./RecipeGenerationCard";

function UserInputSection() {
  const [category, setCategory] = useState("vegetarian");
  const [origin, setOrigin] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [timeRange, setTimeRange] = useState(30);
  const [generatedRecipes, setGeneratedRecipes] = useState([]);

  const categories = ["vegan", "vegetarian", "non-vegetarian"];
  const countries = [
    "Italian",
    "Indian",
    "Mexican",
    "Thai",
    "Mediterranean",
    "Bangladeshi",
  ];

  const addIngredient = () => {
    if (ingredient.trim() && !ingredients.includes(ingredient)) {
      setIngredients([...ingredients, ingredient.trim()]);
      setIngredient("");
    }
  };

  const removeIngredient = (itemToRemove) => {
    setIngredients(ingredients.filter((item) => item !== itemToRemove));
  };

  const generateRecipe = (e) => {
    e.preventDefault();
    const newRecipe = {
      title: `${category} ${origin} Recipe`,
      category: category.charAt(0).toUpperCase() + category.slice(1),
      origin: origin.charAt(0).toUpperCase() + origin.slice(1),
      description: `A delicious ${category} ${origin} dish made with ${ingredients.join(
        ", "
      )} ready in ${timeRange} minutes or less`,
      instructions: [
        `Prepare all ${ingredients.join(", ")}`,
        `Follow traditional ${origin} cooking methods`,
        `Cook for approximately ${timeRange} minutes`,
        `Season to taste`,
        `Serve hot and enjoy`,
      ],
      cookingTime: `${timeRange} mins`,
    };
    setGeneratedRecipes([newRecipe]);
  };

  const clearRecipes = () => {
    setGeneratedRecipes([]);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6">Generate New Recipe</h2>
        <form onSubmit={generateRecipe} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Dietary Category
            </label>
            <div className="grid grid-cols-3 gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                    category == cat
                      ? "bg-blue-500 text white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  } cursor-pointer`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country of Origin
            </label>
            <select
              id="origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select a cuisine</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Available Ingredients
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
                placeholder="Add and ingredient"
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                onClick={addIngredient}
                className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 flex items-center cursor-pointer"
              >
                <FiPlus size={18} />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {ingredients.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center bg-gray-100 text-gray-800 text-sm py-1 px-3 rounded-full"
                >
                  {item}
                  <button
                    type="button"
                    onClick={() => removeIngredient(item)}
                    className="ml-2 text-gray-500 hover:text-red-500 cursor-pointer"
                  >
                    <FiX size={14} />
                  </button>
                </span>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font medium text-gray-700 mb-2">
              Max Cooking Time: {timeRange} minutes
            </label>
            <div className="flex items-center gap-4">
              <FiClock className="text-gray" />
              <input
                type="range"
                min="10"
                max="120"
                step="5"
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-700"
              />
              <span className="text-sm font-medium text-gray-700 w-1">
                {timeRange} min
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium cursor-pointer"
            disabled={!origin || ingredients.length == 0}
          >
            Generate Recipe
          </button>
        </form>
      </div>
      <div className="space-y-6">
        {generatedRecipes.length > 0 && (
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Generated Recipes</h2>
            <button
              className="flex items-center gap-1 text-red-500 hover:text-red-700 transition-colors cursor-pointer"
              onClick={clearRecipes}
            >
              <FiTrash2 size={18} />
              <span>Clear All</span>
            </button>
          </div>
        )}
        {generatedRecipes.length > 0 ? (
          generatedRecipes.map((recipe, index) => (
            <RecipeGenerationCard
              key={index}
              title={recipe.title}
              category={recipe.category}
              origin={recipe.origin}
              description={recipe.description}
              instructions={recipe.instructions}
              cookingTime={recipe.cookingTime}
            />
          ))
        ) : (
          <div className="text-center py-12 text-gray-500">
            <p>No recipes generated yet, Please generate recipes!</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default UserInputSection;
