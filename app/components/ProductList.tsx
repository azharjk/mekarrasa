import React, { useEffect, useState } from "react";

import type { Product } from "../../src/db";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FunctionComponent<ProductListProps> = ({
  products,
}) => (
  <ul className="mkr-product-list list-inline d-lg-flex flex-wrap">
    {products &&
      products.map(({ id, image, title, description }) => (
        <li key={id}>
          <div className="mkr-product-card card">
            <img
              src={image}
              className="card-img-top"
              alt="Product Card Image Alt"
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={`/products/${id}`} className="btn btn-primary">
                Details 
              </a>
            </div>
          </div>
        </li>
      ))}
  </ul>
);

export default ProductList;
