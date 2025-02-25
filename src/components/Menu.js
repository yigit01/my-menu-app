// src/components/Menu.js
import React from "react";
import MenuCategory from "./MenuCategory";
import "./Menu.css";
import menuData from "../data/menuData";

const Menu = () => {
  return (
    <div className="menu-container">
      <h1 className="menu-title">Our Menu</h1>
      <div className="menu-grid">
        {menuData.map((category, index) => (
          <MenuCategory key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
