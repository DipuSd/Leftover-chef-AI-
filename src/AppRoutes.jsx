import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import DashBoardPage from "./pages/Dashboard/DashBoardPage";
import GenerateRecipePage from "./pages/recipeGeneration/GenerateRecipePage";
import QuickTipsPage from "./pages/quickTips/QuickTipsPage";
import React, { useEffect } from "react";

function TitleUpdater({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return null;
}

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <TitleUpdater title="Leftover Chef (AI)" />
              <App />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <TitleUpdater title="Dashboard" />
              <DashBoardPage />
            </>
          }
        />
        <Route
          path="/generate-recipe"
          element={
            <>
              <TitleUpdater title="Generate Recipe" />
              <GenerateRecipePage />
            </>
          }
        />
        <Route
          path="/quick-tips"
          element={
            <>
              <TitleUpdater title="Quick Tips" />
              <QuickTipsPage />
            </>
          }
        />
      </Routes>
    </Router>
  );
}
export default AppRoutes;
