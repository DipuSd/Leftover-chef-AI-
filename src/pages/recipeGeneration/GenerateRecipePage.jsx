import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import UserInputSection from "./UserInputSection";
import React, { useState } from "react";

function GenerateRecipePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <div
          className={`${
            sidebarOpen ? "w-64" : "w-20"
          } fixed h-full transition-all duration-300 z-10`}
        >
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
        <main
          className={`flex-1 p-6 overflow-y-auto transition-all duration-300 ${
            sidebarOpen ? "md:ml-64 lg:ml-0" : "md:ml-20 lg:ml-0"
          }`}
        >
          <UserInputSection />
        </main>
      </div>
    </div>
  );
}

export default GenerateRecipePage;
