import React, { useState } from "react";
import { FiX, FiPlus, FiClock, FiImage } from "react-icons/fi";

function RecipeCreationPopup({ isOpen, onClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("vegetarian");
  const [origin, setOrigin] = useState("");
  const [step, setStep] = useState("");
  const [steps, setSteps] = useState([]);
  const [cookingTime, setCookingTime] = useState(30);
  const [image, setImage] = useState(null);

  const categories = ["vegan", "vegetarian", "non-vegetarian"];
  const countries = [
    "Italian",
    "Indian",
    "Mexican",
    "Thai",
    "Mediterranean",
    "Bangladeshi",
  ];

  const addStep = () => {
    if (step.trim() && !steps.includes(step)) {
      setSteps([...steps, step.trim()]);
      setStep("");
    }
  };

  const removeStep = (stepToRemove) => {
    setSteps(steps.filter((s) => s !== stepToRemove));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      description,
      category,
      origin,
      steps,
      cookingTime,
      image,
    });
    onClose();
  };
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Create New Recipe</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <FiX size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Recipe Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Origin/Cuisine
            </label>
            <select
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select origin</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="3"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cooking Steps
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={step}
                onChange={(e) => setStep(e.target.value)}
                placeholder="Add a step"
                className="flex-1 p-2 border border-gray-300 rounded-md"
              />
              <button
                type="button"
                onClick={addStep}
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer"
              >
                <FiPlus size={18} />
              </button>
            </div>
            <div className="space-y-2">
              {steps.map((s, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="font-medium">{index + 1}.</span>
                  <span className="flex-1">{s}</span>
                  <button
                    type="button"
                    onClick={() => removeStep(s)}
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                  >
                    <FiX size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cooking Time: {cookingTime} minutes
              </label>
              <div className="flex items-center gap-2">
                <FiClock className="text-gray-500" />
                <input
                  type="range"
                  min="10"
                  max="120"
                  step="5"
                  value={cookingTime}
                  onChange={(e) => setCookingTime(e.target.value)}
                  className="w-full cursor-pointer bg-gray-100 accent-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Recipe Image
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <span className="bg-gray-100 p-2 rounded-md hover:bg-gray-200">
                  <FiImage size={18} />
                </span>
                <span>{image ? "Change Image" : "Upload Image"}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
              {image && (
                <div className="mt-2">
                  <img src={image} alt="Preview" className="h-20 rounded-md" />
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
            >
              Create Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default RecipeCreationPopup;
