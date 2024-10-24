// src/App.tsx
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home"; // Importing Home component from pages folder
import About from "./pages/About"; // If you have an About.tsx in pages
import NotFound from "./pages/NotFound"; // Optional: If you have a NotFound component

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> Optional: for 404 pages
      </Routes>
    </div>
  );
}

export default App;
