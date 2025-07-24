// src/components/mainpages/home/Home.js
import React, { useContext } from "react";
import "./home.css";
import { Footer } from "./Footer";
import { GlobalState } from "../../GlobalState";
import { Link } from "react-router-dom";

export const Home = () => {
  const state = useContext(GlobalState);
  const products = state.ProductApi.products; // ✅ Fixed: Remove [0]

  // ✅ Add safety checks
  if (!products || !Array.isArray(products) || products.length === 0) {
    return (
      <div className="home-container">
        <div className="banner-section">
          <div className="banner-content">
            <h2>Loading products...</h2>
          </div>
        </div>
      </div>
    );
  }

  const getRandomProducts = (arr, count) => {
    // ✅ Add safety check
    if (!arr || !Array.isArray(arr) || arr.length === 0) return [];
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
            src="https://hips.hearstapps.com/hmg-prod/images/healthy-groceries-bag-66eaef810acf6.jpg"
            alt="Groceries"
          />
        </div>
      </div>

      {/* Categories Section - Now Dynamic */}
      <div className="categories-section">
        {categories.map((product) => (
          <div className="category" key={product._id}>
            <Link to={`/detail/${product._id}`}>
              <img
                src={product.images?.url || "/placeholder-image.jpg"}
                alt={product.product_title}
              />
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
                <img
                  src={product.images?.url || "/placeholder-image.jpg"}
                  alt={product.product_title}
                />
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
                <img
                  src={product.images?.url || "/placeholder-image.jpg"}
                  alt={product.product_title}
                />
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
                <img
                  src={product.images?.url || "/placeholder-image.jpg"}
                  alt={product.product_title}
                />
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
