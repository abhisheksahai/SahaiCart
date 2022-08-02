import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { iproduct } from "../app/models/iproduct";

interface Props {
  products: iproduct[];
  addProduct: () => void;
}

export function Catalog({ products, addProduct }: Props) {
  return (
    <>
      <Button variant="contained" onClick={addProduct}>
        Add product
      </Button>
      <List>
        {products.map((product) => (
          <ListItem key={product.id}>
            <ListItemAvatar>
              <Avatar src={product.pictureUrl} />
            </ListItemAvatar>
            <ListItemText>
              {product.name} - {product.price}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}
