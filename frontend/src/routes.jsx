// src/routes.jsx
import { Routes, Route } from "react-router-dom";
import ChecklistRooms from "./pages/ChecklistRooms";
import NumbersAssets from "./pages/NumbersAssets";
import DaysOfAcident from "./pages/DaysOfAcidents";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/numbers-assets" element={<NumbersAssets />} />
      <Route path="/checklist" element={<ChecklistRooms />} />
      <Route path="/days-of-acident" element={<DaysOfAcident />} />
    </Routes>
  );
}

export default AppRoutes;
