// src/App.js
import React, { useState } from "react";
import Menu from "./components/Menu";             // Asıl Menü (Orijinal Tasarım)
import MenuModern from "./components/MenuModern";   // Modern Tasarım
import MenuMinimal from "./components/MenuMinimal"; // Minimal Tasarım
import "./App.css"; // Genel stiller

const designs = [
  { component: Menu, name: "Asıl Menü" },
  { component: MenuModern, name: "Modern Tasarım" },
  { component: MenuMinimal, name: "Minimal Tasarım" },
];

function App() {
  const [currentDesignIndex, setCurrentDesignIndex] = useState(0);
  const CurrentDesign = designs[currentDesignIndex].component;

  const handleNextDesign = () => {
    setCurrentDesignIndex((prevIndex) => (prevIndex + 1) % designs.length);
  };

  return (
    <div className="app-container">
      <div className="design-switcher" onClick={handleNextDesign}>
        Sıradaki tasarım
      </div>
      <CurrentDesign />
    </div>
  );
}

export default App;
