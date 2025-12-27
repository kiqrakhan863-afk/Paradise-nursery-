// ProductList.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import "./ProductList.css";

const products = [
  { id: 1, name: "Aloe Vera", price: 20, image: "./images/aloe.jpg" },
  { id: 2, name: "Snake Plant", price: 25, image: "./images/snake.jpg" },
  { id: 3, name: "Peace Lily", price: 30, image: "./images/peace_lily.jpg" },
  { id: 4, name: "Fiddle Leaf Fig", price: 50, image: "./images/fig.jpg" },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-list-container">
      <h2>Our Plants</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product