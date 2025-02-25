// src/components/Menu.js
import React from "react";
import MenuCategory from "./MenuCategory";
import "./Menu.css";
import pizza from "./img/pizza.png";
import burger from "./img/burger.png";
import hotdog from "./img/hotdog.png";
import fries from "./img/fries.png";
import drink from "./img/drinks.png";
import dessert from "./img/desserts.png";
import salad from "./img/salads.png";   
import pasta from "./img/pasta.png";
import soup from "./img/soups.png";

const menuData = [
  {
    title: "PIZZA",
    items: [
      { name: "Pepperoni Pizza", description: "Lorem ipsum dolor sit amet", price: "7.25" },
      { name: "Margherita", description: "Lorem ipsum dolor sit amet", price: "8.50" },
    ],
    imageUrl: pizza 
  },
  {
    title: "BIG BURGER MENU",
    items: [
      { name: "Double Cheese Burger", description: "Lorem ipsum dolor sit amet", price: "7.25" },
      { name: "BBQ Burger", description: "Lorem ipsum dolor sit amet", price: "8.00" },
    ],
    imageUrl: burger
  },
  {
    title: "HOT DOGS",
    items: [
      { name: "Classic Hot Dog", description: "Lorem ipsum dolor sit amet", price: "5.25" },
      { name: "Chili Dog", description: "Lorem ipsum dolor sit amet", price: "6.00" },
    ],
    imageUrl: hotdog
  },
  {
    title: "FRIES",
    items: [
      { name: "French Fries", description: "Lorem ipsum dolor sit amet", price: "2.50" },
      { name: "XL French Fries", description: "Lorem ipsum dolor sit amet", price: "3.50" },
    ],
    imageUrl: fries
  },
  {
    title: "DRINKS",
    items: [
      { name: "Cola", description: "Lorem ipsum dolor sit amet", price: "1.75" },
      { name: "Orange Juice", description: "Lorem ipsum dolor sit amet", price: "2.00" },
    ],
    imageUrl: drink
  },
  {
    title: "DESSERTS",
    items: [
      { name: "Cheesecake", description: "Lorem ipsum dolor sit amet", price: "4.00" },
      { name: "Chocolate Cake", description: "Lorem ipsum dolor sit amet", price: "4.50" },
    ],
    imageUrl: dessert
  },
  // Yeni Eklenen Kategoriler
  {
    title: "SALADS",
    items: [
      { name: "Caesar Salad", description: "Fresh romaine with Caesar dressing", price: "5.50" },
      { name: "Greek Salad", description: "Feta, olives, and veggies", price: "6.00" },
    ],
    imageUrl: salad
  },
  {
    title: "PASTA",
    items: [
      { name: "Spaghetti Bolognese", description: "Classic Italian pasta", price: "9.50" },
      { name: "Penne Alfredo", description: "Creamy Alfredo sauce", price: "10.00" },
    ],
    imageUrl: pasta
  },
  {
    title: "SOUPS",
    items: [
      { name: "Tomato Soup", description: "Rich and creamy tomato soup", price: "4.75" },
      { name: "Chicken Noodle Soup", description: "Comforting and hearty", price: "5.25" },
    ],
    imageUrl: soup
  },
];

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
