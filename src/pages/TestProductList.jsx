// src/pages/TestProductList.jsx
import React from "react";
import ProductCard from "../components/ProductCard";

const testProducts = [
  {
    id: 1,
    title: "Men's Casual Premium Slim Fit T-Shirts",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879_.jpg",
    price: 22.3,
    rating: 4.1
  },
  {
    id: 2,
    title: "Solid Gold Petite Micropave",
    image: "https://fakestoreapi.com/img/71yaIMHOpUL._AC_UL640_QL65_ML3_.jpg",
    price: 168,
    rating: 4.6
  }
];

const TestProductList = () => {
  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <div className="container py-5">
      <div className="row g-4">
        {testProducts.map((p) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={p.id}>
            <ProductCard
              id={p.id}
              title={p.title}
              image={p.image}
              price={p.price}
              rating={p.rating}
              onAddToCart={() => handleAddToCart(p)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestProductList;
