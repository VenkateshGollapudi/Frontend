// import { useLocation, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import "./MyCart.css";

// export const MyCart = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [cart, setCart] = useState(
//     location.state?.cart || JSON.parse(localStorage.getItem("cart")) || []
//   );

//   useEffect(() => {
//     if (cart.length > 0) {
//       localStorage.setItem("cart", JSON.stringify(cart));
//     }
//   }, [cart]);

//   // 🧮 Calculate total
//   const totalAmount = cart.reduce(
//     (acc, item) => acc + item.price * (item.quantity || 1),
//     0
//   );

//   // 🧭 Go to payment
//   const goToPayments = () => {
//     navigate("/payments", { state: { total: totalAmount } });
//   };

//   return (
//     <div className="cart-container">
//       <h2>Your Cart</h2>
//       {cart.length > 0 ? (
//         <>
//           {cart.map((product) => (
//             <div key={product.id} className="cart-item">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="cart-item-image"
//               />
//               <div>
//                 <h3>{product.name}</h3>
//                 <p>Price: ₹{product.price}</p>
//                 <p>Quantity: {product.quantity || 1}</p>
//               </div>
//             </div>
//           ))}
//           <div className="cart-total">
//             <h3>Total: ₹{totalAmount}</h3>
//             <button onClick={goToPayments} className="go-to-payment-btn">
//               Proceed to Payment
//             </button>
//           </div>
//         </>
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//     </div>
//   );
// };
