import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./routes";

function App() {
  const location = useLocation();

  return (
    <div>
      <Header isRed={location.pathname === "/days-of-acident" ? false : true} />
      <AppRoutes />
    </div>
  );
}

export default App;
