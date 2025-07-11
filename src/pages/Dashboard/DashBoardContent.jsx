import RecipeCard from "../../RecipeCard";
import RecipeGenerationCard from "../recipe generation/RecipeGenerationCard";

function DashBoardContent({ createdRecipes, savedRecipes }) {
  return (
    <div className="flex-1 p-6">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src="src\assets\robot_chef.png"
            alt="profile placeholder"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-gray-600">JohnDoe@Example.com</p>
          </div>
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
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3">
          <h2 className="text-xl font-bold mb-4">Your Created Recipes</h2>
          <div className="space-y-4">
            {createdRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default DashBoardContent;
