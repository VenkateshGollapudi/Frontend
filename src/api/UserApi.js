import axios from "axios";
import { useEffect, useState } from "react";

export const UserApi = (token) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(storedCart);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.get("/user/infor", {
            headers: { Authorization: token },
          });

          setIsLogged(true);
          setIsAdmin(res.data.role === 1);
        } catch (err) {
          alert(err.response?.data?.msg || "Failed to fetch user info");
        }
      };
      getUser();
    }
  }, [token]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // src/api/UserApi.js
  const addCart = (product) => {
    if (!isLogged) return alert("Please login to add to cart");

    const updated = [...cart];
    const idx = updated.findIndex((item) => item._id === product._id);

    if (idx !== -1) {
      updated[idx].quantity += 1;
    } else {
      updated.push({ ...product, quantity: 1 });
    }

    setCart(updated);
  };

  return {
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin, setIsAdmin],
    cart: [cart, setCart],
    addCart,
  };
};
