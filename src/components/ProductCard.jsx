// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, image, price, rating, onAddToCart }) => {
  return (
    <div className="card h-100 text-center shadow-sm">
      <img
        src={image}
        className="card-img-top p-3"
        alt={title}
        style={{ height: "250px", objectFit: "contain" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title.length > 20 ? title.substring(0, 20) + "..." : title}</h5>
        <p className="lead fw-bold">${price}</p>
        <p className="mb-2">
          {rating} <i className="fa fa-star text-warning"></i>
        </p>
        <div className="d-flex justify-content-center gap-2">
          <Link to={`/product/${id}`} className="btn btn-dark btn-sm">
            View
          </Link>
          <button className="btn btn-outline-dark btn-sm" onClick={onAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
