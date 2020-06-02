import React from "react";
import ProductItem from "./ProductItem/productItem";
import Products from "./Products";
import "./productList.style.css";

function ProductList() {
  const backgroundColor = [
    "linear-gradient(to right, #8e2de2, #4a00e0)",
    " linear-gradient(to right, #7f00ff, #e100ff)",
    "linear-gradient(to right, #00c9ff, #92fe9d)",
    "linear-gradient(to right, #ff512f, #dd2476)",
  ];
  return (
    <div className="products">
      {Products.map((product, index) => (
        <div
          key={index}
          style={{
            background: backgroundColor[index],
            borderRadius: "4px",
            boxShadow:
              "0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05)",
          }}
        >
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
