import RecipeCard from "./RecipeCard";

function RecipeContainer({ recipes }) {
  return (
    <div className="grid grid-cols-1 gap-6">
      {recipes.map((recipe) => (
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
        />
      ))}
    </div>
  );
}
export default RecipeContainer;
