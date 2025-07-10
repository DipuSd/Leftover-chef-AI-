import React, { useState } from "react";
import { FiBookmark, FiPlus, FiX, FiClock } from "react-icons/fi";
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

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6">Generate New Recipe</h2>
        <form onSubmit="#" className="space-y-6">
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
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
}
export default UserInputSection;
