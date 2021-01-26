import React from "react";
import "./product.css";
import StarIcon from "@material-ui/icons/Star";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product__rating">
          {Array(rating).fill().map((_ , i)=>(
                <StarIcon />
            ))}
        
      </div>

      <img src={image} />

      <div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default Product;
