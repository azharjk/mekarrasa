import React, { useEffect, useState } from "react";

import type { Product } from "../../src/db";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/v1/products");
      const data = await res.json();

      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <ul className="mkr-product-list list-inline d-lg-flex flex-wrap">
      {products &&
        products.map((product: Product) => (
          <li key={product.id}>
            <div className="mkr-product-card card">
              <img
                src={product.image}
                className="card-img-top"
                alt="Product Card Image Alt"
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default ProductList;
