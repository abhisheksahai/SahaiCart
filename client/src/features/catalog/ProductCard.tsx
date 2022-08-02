import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { iproduct } from "../../app/models/iproduct";

interface Props {
  product: iproduct;
}

export function ProductCard({ product }: Props) {
  return (
    <>
      <Card>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/images/products/sb-core1.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}
