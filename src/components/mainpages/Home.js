// src/components/mainpages/home/Home.js
import React, { useContext } from "react";
import "./home.css";
import { Footer } from "./Footer";
import { GlobalState } from "../../GlobalState";
import { Link } from "react-router-dom";

export const Home = () => {
  const state = useContext(GlobalState);
  const products = state.ProductApi.products[0];

  const getRandomProducts = (arr, count) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const categories = getRandomProducts(products, 3);
  const featured = products.slice(0, 5);
  const newArrivals = products.slice(5, 10);
  const bestsellers = getRandomProducts(products, 5);

  return (
    <div className="home-container">
      {/* Banner Section */}
      <div className="banner-section">
        <div className="banner-content">
          <p className="banner-subtitle">Monsoon Specials 2025</p>
          <h2 className="banner-title">Get up to 10% off on Fresh Arrivals</h2>
        </div>
        <div className="banner-image">
          <img
            src="https://www.google.com/imgres?q=groceries&imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod%2Fimages%2Fhealthy-groceries-bag-66eaef810acf6.jpg%3Fcrop%3D1xw%3A0.9998556581986143xh%3Bcenter%2Ctop%26resize%3D1200%3A*&imgrefurl=https%3A%2F%2Fwww.goodhousekeeping.com%2Fhealth%2Fdiet-nutrition%2Fa40365021%2Fhealthy-grocery-list%2F&docid=wf0Zu-RNMoIPiM&tbnid=D8xlvpGquhpAwM&vet=12ahUKEwjL9JGFqMyOAxXP3TgGHc_CHZQQM3oECAwQAA..i&w=1200&h=675&hcb=2&ved=2ahUKEwjL9JGFqMyOAxXP3TgGHc_CHZQQM3oECAwQAA"
            alt="Groceries"
          />
        </div>
      </div>

      {/* Categories Section - Now Dynamic */}
      <div className="categories-section">
        {categories.map((product) => (
          <div className="category" key={product._id}>
            <Link to={`/detail/${product._id}`}>
              <img src={product.images.url} alt={product.product_title} />
              <div className="category-overlay">{product.category}</div>
            </Link>
          </div>
        ))}
      </div>

      {/* Featured Products */}
      <div className="featured-section">
        <h3 className="section-title">Featured Products</h3>
        <div className="featured-products">
          {featured.map((product) => (
            <div className="product-card" key={product._id}>
              <Link to={`/detail/${product._id}`}>
                <img src={product.images.url} alt={product.product_title} />
              </Link>
              <p className="product-name">{product.product_title}</p>
              <p className="product-price">₹{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* New Arrivals */}
      <div className="new-arrivals-section">
        <h3 className="section-title">New Arrivals</h3>
        <div className="new-arrivals">
          {newArrivals.map((product) => (
            <div className="product-card" key={product._id}>
              <Link to={`/detail/${product._id}`}>
                <img src={product.images.url} alt={product.product_title} />
              </Link>
              <p className="product-name">{product.product_title}</p>
              <p className="product-price">₹{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Best Sellers */}
      <div className="bestsellers-section">
        <h3 className="section-title">Best Sellers</h3>
        <div className="bestsellers">
          {bestsellers.map((product) => (
            <div className="product-card" key={product._id}>
              <Link to={`/detail/${product._id}`}>
                <img src={product.images.url} alt={product.product_title} />
              </Link>
              <p className="product-name">{product.product_title}</p>
              <p className="product-price">₹{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h3 className="section-title">What Our Customers Say</h3>
        <div className="testimonials">
          <div className="testimonial">
            <p>
              "Great quality and fast shipping! Will definitely order again."
            </p>
            <p>- Jane Doe</p>
          </div>
          <div className="testimonial">
            <p>
              "Amazing customer service and beautiful products. Highly
              recommended!"
            </p>
            <p>- John Smith</p>
          </div>
          <div className="testimonial">
            <p>"Loved everything about my purchase. Perfect for the season!"</p>
            <p>- Alice Johnson</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};
