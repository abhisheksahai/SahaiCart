import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import { iproduct } from "../../app/models/iproduct";

interface Props {
  product: iproduct;
}

export function ProductCard({ product }: Props) {
  return (
    <>
      <ListItem key={product.id}>
        <ListItemAvatar>
          <Avatar src={product.pictureUrl} />
        </ListItemAvatar>
        <ListItemText>
          {product.name} - {product.price}
        </ListItemText>
      </ListItem>
    </>
  );
}
