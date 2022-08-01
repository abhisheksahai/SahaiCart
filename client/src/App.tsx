function App() {
  const products = [
    { name: "hardware", price: 1000 },
    { name: "software", price: 2000 },
  ];
  return (
    <div>
      <h1>SahaiCart</h1>
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
