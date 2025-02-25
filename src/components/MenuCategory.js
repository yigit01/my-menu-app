// src/components/MenuCategory.js
import React from "react";
import "./MenuCategory.css";

const MenuCategory = ({ category }) => {
  const { title, items, imageUrl } = category;

  return (
    <div className="menu-category">
      <div className="category-header">
        <img src={imageUrl} alt={title} className="category-image" />
        <h2>{title}</h2>
      </div>
      <ul className="category-items">
        {items.map((item, idx) => (
          <li key={idx} className="category-item">
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <div className="item-price">${item.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuCategory;
