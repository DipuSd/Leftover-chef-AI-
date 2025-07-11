import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import React, { use, useState } from "react";
function QuickTipsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const foodTips = [
    {
      category: "Storage Tips",
      tips: [
        "Cool food completely before refrigerating to prevent condensation",
        "Use airtight containers to maintain freshness",
        "Label containers with dates to track freshness",
        "Store leftovers in shallow containers for faster cooling",
        "Freeze portions you won't use within 3-4 days",
      ],
    },
    {
      category: "Reheating",
      tips: [
        "Reheat only what you'll eat to maintain quality",
        "Add a splash of water when reheating to prevent drying",
        "Use oven or stovetop for best texture (microwave can make food soggy)",
        "Stir foods halfway through reheating for even heating",
        "Ensure foods reach 165°F (74°C) when reheating",
      ],
    },
    {
      category: "Creative Uses",
      tips: [
        "Transform roasted veggies into frittatas or omelets",
        "Blend cooked vegetables into soups or sauces",
        "Make fried rice with leftover proteins and veggies",
        "Use stale bread for croutons or bread pudding",
        "Turn leftover meats into tacos, sandwiches, or salads",
      ],
    },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <div
          className={`${
            sidebarOpen ? "md:w-64 lg:w-64" : "md:w-20 lg:w-20"
          } transition-all duration-300`}
        >
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
        <main
          className={`flex-1 p-6 overflow-y-auto transition-all duration-300 ${
            sidebarOpen ? "md:ml-5 lg:ml-0" : " "
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Leftover Foods Tips</h1>
            {foodTips.map((section, index) => (
              <div className="mb-8" key={index}>
                <h2 className="text-2xl font-semibold mb-4 text-green-700">
                  {section.category}
                </h2>
                <ul className="space-y-3">
                  {section.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h2 className="text-xl font-semibold mb-3 text-blue-800">
                Food Safety Reminders
              </h2>
              <p className="text-gray-700 mb-4">
                Remember these key food safety guidelines for leftovers:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Refrigerate within 2 hours of cooking (1 hour if above
                  90°F/32°C)
                </li>
                <li>
                  Most leftovers last 3-4 days in fridge, 3-4 months in freezer
                </li>
                <li>When in doubt, throw it out - don't risk food poisoning</li>
                <li>Reheat sauces, soups and gravies to a rolling boil</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
export default QuickTipsPage;
