import RecipeCard from "../../RecipeCard";
import RecipeGenerationCard from "../recipeGeneration/RecipeGenerationCard";
import { FiEdit3 } from "react-icons/fi";

function DashBoardContent({ createdRecipes, savedRecipes, sidebarOpen }) {
  return (
    <div className="flex-1 p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src="src/assets/robot_chef.png"
                alt="profile placeholder"
                className={`${
                  sidebarOpen ? "md:w-12 md:h-12 lg:w-20 lg:h-20" : "w-20 h-20"
                } rounded-full object-cover transition-all duration-300`}
              />
              <div>
                <h1 className="text-2xl font-bold">John Doe</h1>
                <p className="text-gray-600">JohnDoe@Example.com</p>
              </div>
              <button
                onClick="#"
                className={`bg-blue-600 rounded-md text-white px-4 py-2 hover:bg-blue-700 ml-auto ${
                  sidebarOpen
                    ? "md:invisible md:cursor-not-allowed md:pointer-events-none lg:visible lg:cursor-pointer lg:pointer-events-auto"
                    : ""
                }`}
              >
                <FiEdit3 size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-gray-600 text-sm">Saved Recipes</h3>
                <p className="text-2xl font-bold">5</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-gray-600 text-sm">Created Recipes</h3>
                <p className="text-2xl font-bold">3</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="text-gray-600 text-sm">Total Likes Received</h3>
                <p className="text-2xl font-bold">50</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Your Created Recipes</h2>
            <div className="space-y-4">
              {createdRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} {...recipe} />
              ))}
            </div>
          </div>
        </div>

        <div className="md:w-1/2 lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)] lg:overflow-y-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Your Saved Recipes</h2>
            <div className="space-y-4">
              {savedRecipes.map((recipe) =>
                recipe.isAiGenerated ? (
                  <RecipeGenerationCard key={recipe.id} {...recipe} />
                ) : (
                  <RecipeCard key={recipe.id} {...recipe} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardContent;
