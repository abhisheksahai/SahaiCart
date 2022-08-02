import { Button } from "@mui/material";
import { iproduct } from "../app/models/iproduct";
import { ProductList } from "./catalog/ProductList";

interface Props {
  products: iproduct[];
  addProduct: () => void;
}

export function Catalog({ products, addProduct }: Props) {
  return (
    <>
      <ProductList products={products} />
      <Button variant="contained" onClick={addProduct}>
        Add product
      </Button>
    </>
  );
}
