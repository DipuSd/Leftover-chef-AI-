import React, { useState } from "react";
import { FiBookmark, FiHeart } from "react-icons/fi";

function RecipeCard({ id, title, description, hasImage, imgUrl }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
      {hasImage && (
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-48 object-cover cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        />
      )}
      <div className="p-4">
        <h3
          className="text-lg font-semibold mb-2 cursor-pointer hover:text-blue-600"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {title}
        </h3>
        {isExpanded && (
          <div className="mt-2 text-gray-600">
            <p>{description}</p>
          </div>
        )}
        <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`flex items-center space-x-1 ${
              isLiked ? "text-red-500" : "text-gray-500 hover:text-red-500"
            }`}
          >
            <FiHeart className={isLiked ? "fill-current" : ""} />
            <span>{isLiked ? "Liked" : "Like"}</span>
          </button>
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`flex items-center space-x-1 ${
              isBookmarked
                ? "text-yellow-500"
                : "text-gray-500 hover:text-yellow-500"
            }`}
          >
            <FiBookmark className={isBookmarked ? "fill-current" : " "} />
            <span>{isBookmarked ? "Bookmarked" : "Bookmark"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default RecipeCard;
