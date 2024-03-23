// src/components/CustomerCard/CustomerCard.jsx
import React from "react";
import "./customerCard.css";

const CustomerCard = ({ name, email, status }) => {
  return (
    <div className="customerCard">
      <h3>{name}</h3>
      <p>{email}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default CustomerCard;
