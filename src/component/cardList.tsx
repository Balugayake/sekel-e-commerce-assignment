import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { productTypeData } from "../features/slices/type";
import { Alert, Button, Snackbar } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../features/slices/products.slice";
import { RootState } from "../store";

interface CardListProps {
  product: productTypeData[];
}

export default function CardList({ product }: CardListProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [addedProduct, setAddedProduct] = useState<string>("");

  const handleAddToCart = (item: any) => {
    dispatch(addCart(item));
    setAddedProduct(item.title);
    setOpen(true); 
  };

  const handleClose = () => {
    setOpen(false); 
  };

  return (
    <div
      className="card-list"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {product.map((item) => {
        // const cleanImageUrl = item.images[0].replace(/[\[\]"]/g, '');

        return (
          <Card
            className="card-item"
            sx={{ maxWidth: 345 }}
            key={item.id}
            style={{ flexBasis: "30%", margin: "20px" }}
          >
            <CardActionArea onClick={() => navigate(`/product/${item.id}`)}>
              <CardMedia
                component="img"
                height="400"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <b>Price: ${item.price}</b>
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    WebkitLineClamp: 3,
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Button onClick={() => handleAddToCart(item)}>Add To Cart</Button>
          </Card>
        );
      })}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {addedProduct} has been added to the cart!
        </Alert>
      </Snackbar>
    </div>
  );
}
