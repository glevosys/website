import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import CareerDetail from "./pages/CareerDetail";
import GlevoTrace from "./pages/GlevoTrace";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:slug" element={<CareerDetail />} />
        <Route path="/glevotrace" element={<GlevoTrace />} />
      </Routes>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
