import { useState, useEffect } from "react";
import { iproduct } from "../app/models/iproduct";
import { ProductList } from "./catalog/ProductList";

export function Catalog() {
  const [products, setProducts] = useState<iproduct[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/Products/GetProducts")
      .then((respose) => respose.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <ProductList products={products} />
    </>
  );
}
