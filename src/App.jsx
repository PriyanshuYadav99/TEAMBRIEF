import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Features from "./pages/Features";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/features" element={<Features />} />
    </Routes>
  );
}
