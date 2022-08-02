import { List } from "@mui/material";
import { iproduct } from "../../app/models/iproduct";
import { ProductCard } from "./ProductCard";

interface Props {
  products: iproduct[];
}

export function ProductList({ products }: Props) {
  return (
    <>
      <List>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </List>
    </>
  );
}
