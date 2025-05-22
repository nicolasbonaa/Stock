// src/routes.jsx
import { Routes, Route } from "react-router-dom";
import ChecklistRooms from "./pages/ChecklistRooms";
import NumbersAssets from "./pages/NumbersAssets";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/numbers-assets" element={<NumbersAssets />} />
      <Route path="/checklist" element={<ChecklistRooms />} />
    </Routes>
  );
}

export default AppRoutes;
