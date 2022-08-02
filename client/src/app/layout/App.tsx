import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { Catalog } from "../../features/Catalog";
import { iproduct } from "../models/iproduct";
import { Header } from "./Header";

function App() {
  const [products, setProducts] = useState<iproduct[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/Products/GetProducts")
      .then((respose) => respose.json())
      .then((data) => setProducts(data));
  }, []);

  function addProduct() {
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
      <CssBaseline />
      <Header />
      <Container>
        <Catalog products={products} addProduct={addProduct} />
      </Container>
    </div>
  );
}

export default App;
