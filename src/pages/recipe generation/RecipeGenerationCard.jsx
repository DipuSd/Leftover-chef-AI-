import React, { useState } from "react";
import { FiBookmark } from "react-icons/fi";

function RecipeGenerationCard({
  title,
  category,
  origin,
  description,
  instructions,
  cookingTime,
}) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                {category}
              </span>
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                {origin}
              </span>
              <span className="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded full">
                {cookingTime}
              </span>
            </div>
          </div>
          <button
            className={`p-1 ${
              isBookmarked
                ? "text-yellow-500"
                : "text-gray-500 hover:text-yellow-500"
            } cursor-pointer`}
            onClick={() => setIsBookmarked(!isBookmarked)}
          >
            <FiBookmark
              className={isBookmarked ? "fill-current" : ""}
              size={18}
            />
          </button>
        </div>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <h4 className="font-medium mb-2 text-sm">Cooking Instruction</h4>
          <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
            {instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
export default RecipeGenerationCard;
