import { useEffect, useState } from "react";
import { iproduct } from "../models/iproduct";

function App() {
  const [products, setProducts] = useState<iproduct[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/Products/GetProducts")
      .then((respose) => respose.json())
      .then((data) => setProducts(data));
  }, []);

  function AddProduct() {
    setProducts((previousState) => [
      ...previousState,
      {
        id: previousState.length + 1,
        name: "Product" + (previousState.length + 1),
        description: "",
        price: (previousState.length + 1) * 1000,
        pictureUrl: "",
        type: "",
        brand: "",
        quantityInStock: 0,
      },
    ]);
  }

  return (
    <div>
      <h1>SahaiCart</h1>
      <button onClick={AddProduct}>Add product</button>
      <ul>
        {products.map((product) => (
          <li key={product.name}>
            {product.name} {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
