import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import UserInputSection from "./UserInpuSection";
import React, { useState } from "react";

function GenerateRecipePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-1">
          <div
            className={`${
              sidebarOpen ? "md:w-64 lg:w-auto" : "md:w-20 lg:w-auto"
            } transition-all duration-300`}
          >
            <Sidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          </div>
          <main
            className={`flex-1 p-6 overflow-y-auto transition-all duration-300 ${
              sidebarOpen ? "md:ml-5 lg:ml-0" : " "
            }`}
          >
            <UserInputSection />
          </main>
        </div>
      </div>
    </>
  );
}
export default GenerateRecipePage;
