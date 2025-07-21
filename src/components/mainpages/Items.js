import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import "./items.css";

const products = [
  {
    id: 1,
    name: "Mens Cotton Shirts",
    price: 599,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmzQJAnjvktUh969Mq2WW1FPCdX_W4TnVb5A&s",
    subCategory: "Men",
    rating: 4,
  },
  {
    id: 2,
    name: "Leriya Fashion Womens Regular Fit Top",
    price: 459,
    image: "https://m.media-amazon.com/images/I/71okzUWbXOL._SX679_.jpg",
    subCategory: "Women",
    rating: 3,
  },
  {
    id: 3,
    name: "Mens Gym Hoodies - Gym & Fitness Clothing",
    price: 1200,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrgQF-DuImqBSlcMxo6ewGOVBotM7l_wI35A&s",
    subCategory: "Men",
    rating: 5,
  },
  {
    id: 4,
    name: "Googo Gaaga Boys T-Shirt",
    price: 399,
    image: "https://m.media-amazon.com/images/I/514ftDnqfvL._SX679_.jpg",
    subCategory: "Kids",
    rating: 2,
  },
  {
    id: 5,
    name: "LED 43 inch TV Covers",
    price: 215,
    image: "https://images.meesho.com/images/products/77031766/kignk_512.webp",
    subCategory: "Other Clothes",
    rating: 4,
  },
  {
    id: 6,
    name: "TJAII Silk blend Sarees for Women | Elegant Sarees for Women",
    price: 1599,
    image: "https://m.media-amazon.com/images/I/91l-XpeCBAL._SX679_.jpg",
    subCategory: "Women",
    rating: 4,
  },
  {
    id: 7,
    name: "Kids Clothing Set Baba Suit Boy Clothing Set",
    price: 1400,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUpWX1wnH2sF96bOngrNSCSC_ZnUxpsKwxQ&s",
    subCategory: "Kids",
    rating: 3,
  },
  {
    id: 8,
    name: "VJ Fashion Women Woven Soft Silk Saree With Blouse",
    price: 474,
    image: "https://m.media-amazon.com/images/I/91nVi6Q-CEL._SX679_.jpg",
    subCategory: "Women",
    rating: 5,
  },
  {
    id: 9,
    name: "Basic Hoodies for Men",
    price: 599,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQplq9i5fx8SUUxECReEvLN0mWozcOf2MyQdA&s",
    subCategory: "Men",
    rating: 2,
  },
  {
    id: 10,
    name: "32 inch dustproof Cover TV",
    price: 550,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1TERGELz7ZmC5v3Y6JBIi_e_i5HjCW1BPFQ&s",
    subCategory: "Other Clothes",
    rating: 4,
  },

  {
    id: 11,
    name: "Buy boffi Brand Mens Cotton Shorts | Shorts for Mens(Pack of 3)",
    price: 499,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1voE7ORKirlv2kPhqn6VKcM1_LD251UVclg&s",
    subCategory: "Men",
    rating: 4,
  },
  {
    id: 12,
    name: "Womens Crepe Printed Unstitched Salwar Suit Dress Material",
    price: 329,
    image: "https://m.media-amazon.com/images/I/81YivNC2MKL._SX679_.jpg",
    subCategory: "Women",
    rating: 3,
  },
  {
    id: 13,
    name: "Casual Men Plain Shirts, Men Shirt, Full Sleeves",
    price: 249,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-1CkLzugrFZa2iWLznHdUqEfZIOty8C23cA&s",
    subCategory: "Men",
    rating: 5,
  },
  {
    id: 14,
    name: "Niren Enterprise Multiprinted Satin Baby Girl Frocks for Kid Girls (Flamingo Frock, 1-2 Y)",
    price: 523,
    image: "https://m.media-amazon.com/images/I/51ccHH+EuSL._SX679_.jpg",
    subCategory: "Kids",
    rating: 2,
  },
  {
    id: 15,
    name: "Cushion Bedsheets : Buy Cushion Bedsheet Set Of 5",
    price: 970,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiiPPCUsZeBfHnYPaJULJVSPPxtl-ZzMD9ng&s",
    subCategory: "Other Clothes",
    rating: 4,
  },
  {
    id: 16,
    name: "KEDAR FAB Women Embroidered Gown Dress",
    price: 1029,
    image:
      "https://imgmedia.lbb.in/media/2023/08/64e74bb7657e506338faa8c9_1692879799068.jpg",
    subCategory: "Women",
    rating: 4,
  },
  {
    id: 17,
    name: "Boys Berry White Band Shirt",
    price: 1400,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRutLEqA0XfaYjucxX_e9xbkVx-mJtc-YYgTA&s",
    subCategory: "Kids",
    rating: 3,
  },
  {
    id: 18,
    name: "WISHLAND Jute Fridge Top Cover (Size 46X22 Inches)",
    price: 206,
    image:
      "https://cdn-cmimgopt.citymall.live/cmimgopt-83d83668-398f-4957-a01a-773797c15ccc.jpeg",
    subCategory: "Other Clothes",
    rating: 5,
  },
  {
    id: 19,
    name: "winterwear Mens Woolen Striped Cardigan Sweaters",
    price: 657,
    image:
      "https://assets.gqindia.com/photos/656d5fee9b55ff13702d0eb5/4:3/w_1440,h_1080,c_limit/Best-sweaters-for-men-to-cosy-up-in.jpg",
    subCategory: "Men",
    rating: 2,
  },
  {
    id: 20,
    name: "Status Multi-Purpose Braided Place Mat for Indoor Kitchen, Hall, and Room",
    price: 189,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTb0g-MNdDvq-FSfXze30MaQndWusA6iQiiA&s",
    subCategory: "Other Clothes",
    rating: 4,
  },
];

const RatingStars = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= rating ? "filled" : "empty"}>
        ★
      </span>
    );
  }
  return <div className="rating-stars">{stars}</div>;
};

export const Items = () => {
  const state = useContext(GlobalState);
  const [cart, setCart] = state.UserApi.cart;

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const navigate = useNavigate();
  const location = useLocation();

  const getSearchQuery = () => {
    const params = new URLSearchParams(location.search);
    return params.get("q") || "";
  };

  const [searchQuery, setSearchQuery] = useState(getSearchQuery());

  useEffect(() => {
    const q = getSearchQuery();
    setSearchQuery(q);
  }, [location.search]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesSubCategory = selectedSubCategory
      ? product.subCategory === selectedSubCategory
      : true;
    return matchesSearch && matchesSubCategory;
  });

  const sortedProducts = filteredProducts.sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  const handleProductClick = (product) => setSelectedProduct(product);
  const closeProductDetail = () => setSelectedProduct(null);

  const handleBuyNowClick = () => navigate("/payments");

  const handleAddToCart = (product) => {
    const alreadyInCart = cart.find((item) => item.id === product.id);
    if (alreadyInCart) {
      alert("Product already in cart");
      return;
    }
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="items-container">
      {/* Filters and Sorting */}
      <div className="filters-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              navigate(`/search?q=${e.target.value}`);
            }}
            className="search-bar"
          />
        </div>

        <div className="filter-container">
          <label htmlFor="subCategory-filter">Filter by Subcategory: </label>
          <select
            id="subCategory-filter"
            value={selectedSubCategory}
            onChange={(e) => setSelectedSubCategory(e.target.value)}
            className="filter-select"
          >
            <option value="">All</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
            <option value="Other Clothes">Other Clothes</option>
          </select>
        </div>

        <div className="sort-container">
          <label htmlFor="sort-order">Sort by Price: </label>
          <select
            id="sort-order"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="sort-select"
          >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>

      {/* Product List */}
      <div className="products-list-container">
        <div className="products-list">
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
              <div
                key={product.id}
                className="product-card"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <h3>{product.name}</h3>
                <p>Price: ₹{product.price}</p>
                <RatingStars rating={product.rating} />
                <div className="product-card-buttons">
                  <button
                    className="add-to-cart-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                  >
                    Add to Cart
                  </button>
                  <button className="buy-now-btn" onClick={handleBuyNowClick}>
                    Buy Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>

      {/* Modal for product detail */}
      {selectedProduct && (
        <div className="product-detail-modal">
          <div className="product-detail-content">
            <button className="close-btn" onClick={closeProductDetail}>
              X
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="product-detail-image"
            />
            <h2>{selectedProduct.name}</h2>
            <p>Price: ₹{selectedProduct.price}</p>
            <RatingStars rating={selectedProduct.rating} />
            <p>Only Limited Items</p>
            <div className="product-detail-buttons">
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(selectedProduct)}
              >
                Add to Cart
              </button>
              <button className="buy-now-btn" onClick={handleBuyNowClick}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
