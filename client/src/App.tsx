import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { name: "Hardware", price: 1000 },
    { name: "Software", price: 2000 },
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/api/Products/GetProducts")
      .then((respose) => respose.json())
      .then((data) => setProducts(data));
  }, []);

  function AddProduct() {
    setProducts((previousState) => [
      ...previousState,
      {
        name: "Product" + (previousState.length + 1),
        price: (previousState.length + 1) * 1000,
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
