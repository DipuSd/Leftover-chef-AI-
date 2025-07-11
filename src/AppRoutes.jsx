import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import DashBoardPage from "./pages/Dashboard/DashBoardPage";
import GenerateRecipePage from "./pages/recipeGeneration/GenerateRecipePage";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/generate-recipe" element={<GenerateRecipePage />} />
      </Routes>
    </Router>
  );
}
export default AppRoutes;
