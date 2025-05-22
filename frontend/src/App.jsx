import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./routes";

function App() {
  return (
    <div>
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
