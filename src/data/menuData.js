// src/data/menuData.js
import pizza from "../components/img/pizza.png";
import burger from "../components/img/burger.png";
import hotdog from "../components/img/hotdog.png";
import fries from "../components/img/fries.png";
import drink from "../components/img/drinks.png";
import dessert from "../components/img/desserts.png";
import salad from "../components/img/salads.png";   
import pasta from "../components/img/pasta.png";
import soup from "../components/img/soups.png";

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

export default menuData;
