// src/components/MenuModern.js
import React, { useState, useEffect, useRef } from "react";
import "./MenuModern.css";
import menuData from "../data/menuData";

const MenuModern = () => {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const scaleFactor = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
      setScale(scaleFactor);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="modern-wrapper">
      <div 
        className="menu-modern-container" 
        ref={containerRef}
        style={{ transform: `translate(-50%, -50%) scale(${scale})` }}
      >
        <h1>Tasarım 2</h1>
        <div className="menu-modern-grid">
          {menuData.map((category, index) => (
            <div className="menu-card" key={index}>
              <img src={category.imageUrl} alt={category.title} className="menu-card-image" />
              <div className="menu-card-content">
                <h2>{category.title}</h2>
                <ul>
                  {category.items.map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.name}</strong> - ${item.price}
                      <p>{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuModern;
