import { Routes, Route } from "react-router-dom";
import React from 'react'
import Header from './components/Header'
import NumbersAssets from './pages/NumbersAssets';
import ChecklistRooms from './pages/ChecklistRooms';
import cardList from "./components/CardList";
function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route path="/numbers-assets" element={<NumbersAssets />} />
      <Route path="/checklist" element={<ChecklistRooms />} />
      </Routes>
      <cardList />
    </div>
  );
}

export default App
