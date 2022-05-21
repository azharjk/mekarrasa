import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

import ProductList from "./components/ProductList";

import type { Product } from "../src/db";

const Showcase = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/v1/showcase-products");
      const data = await res.json();

      setProducts(data);
    };

    fetchProducts();
  }, []);

  return <ProductList products={products} />;
}

const container = document.getElementById("react-app")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Showcase />
  </React.StrictMode>
);
