import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./payment.css";

const Payments = () => {
  const location = useLocation();
  const total = location.state?.total || 0;

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    alert(`Payment of ₹${total} submitted successfully`);
    // You can clear localStorage or navigate to a success page
  };

  return (
    <div className="payment-page">
      <h1>Payment Page</h1>
      <h2>Total to Pay: ₹{total}</h2>
      <form onSubmit={handlePaymentSubmit} className="payment-form">
        <div className="form-group">
          <label htmlFor="nameOnCard">Name on Card</label>
          <input
            type="text"
            id="nameOnCard"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength="16"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date (MM/YY)</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            maxLength="5"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="password"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            maxLength="3"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default Payments;
