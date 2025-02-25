// src/components/MenuMinimal.js
import React from "react";
import "./MenuMinimal.css";
import menuData from "../data/menuData";

const MenuMinimal = () => {
  return (
    <div className="menu-minimal-container">
      <h1>Dikey menu</h1>
      {menuData.map((category, index) => (
        <div key={index} className="menu-category-minimal">
          <div className="category-header-minimal">
            <img src={category.imageUrl} alt={category.title} className="category-icon" />
            <h2>{category.title}</h2>
          </div>
          <ul className="category-items-minimal">
            {category.items.map((item, idx) => (
              <li key={idx}>
                <span className="item-name">{item.name}</span>
                <span className="item-price">${item.price}</span>
                <p className="item-desc">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MenuMinimal;
