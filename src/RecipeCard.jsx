import React, { useState } from "react";
import { FiBookmark, FiHeart } from "react-icons/fi";

function RecipeCard({
  id,
  title,
  description,
  hasImage,
  imgUrl,
  category,
  origin,
  instructions,
  cookingTime,
  initialLikes,
  userProfilePic,
  userName,
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setIsLiked(!isLiked);
  };

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
        <div className="flex items-center mb-3">
          <img
            src={userProfilePic}
            alt={userName}
            className="w-8 h-8 rounded-full object-cover mr-2"
          />
          <span className="text-sm font-medium text-gray-700">{userName}</span>
        </div>
        <div className="flex justify-between items-start">
          <div>
            <h3
              className="text-ls font-semibold mb-2 cursor-pointer hover:text-blue-600"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {title}
            </h3>
            <p className="text-gray-500 text-sm line-clamp-2">{description}</p>
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
              className={isBookmarked ? "fill-current" : " "}
              size={18}
            />
          </button>
        </div>
        <div className="mt-4 space-y-3">
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
              {category}
            </span>
            <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
              {origin}
            </span>
            <span className="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-full">
              {cookingTime}
            </span>
          </div>
          {isExpanded && (
            <div className="mt-3 pt-3 border-t border-gray-100">
              <h4 className="font-medium mb-2">Cooking Instructions</h4>
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                {instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          )}
          <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
            <div className="flex items-center space-x-2">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-1 cursor-pointer ${
                  isLiked ? "text-red-500" : "text-gray-500 hover:text-red-500"
                }`}
              >
                <FiHeart className={isLiked ? "fill-current" : ""} />
                <span>{likeCount}</span>
              </button>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-500 hover:text-blue-700 text-sm font-medium cursor-pointer"
            >
              {isExpanded ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RecipeCard;
