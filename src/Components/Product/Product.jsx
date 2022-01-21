import React from "react";
import "./Product.css";

function Product({ id, title, image, price }) {
    return (
        <div className="product">
            <div className="productInfo">
            </div>
            <img src={image} alt="" />
            <p>{title}</p>
            <p className="productPrice">
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <button >Add to basket</button>
        </div>
    );
}

export default Product;

