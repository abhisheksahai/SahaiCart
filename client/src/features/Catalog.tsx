import { iproduct } from "../app/models/iproduct";

interface Props {
  products: iproduct[];
  addProduct: () => void;
}

export function Catalog({ products, addProduct }: Props) {
  return (
    <>
      <button onClick={addProduct}>Add product</button>
      <ul>
        {products.map((product) => (
          <li key={product.name}>
            {product.name} {product.price}
          </li>
        ))}
      </ul>
    </>
  );
}
