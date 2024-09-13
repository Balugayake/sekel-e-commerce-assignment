import React, { Fragment, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import "../styles/productDetails.css";
import {
  Alert,
  Button,
  Rating,
  Snackbar,
  Typography,
} from "@mui/material";
import { RootState } from "../store";
import { useParams } from "react-router-dom";
import { addCart } from "../features/slices/products.slice";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const ProductDatails = ({ match }: any) => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const productData = useSelector((state: RootState) => state.products.products);
  const filteredProducts = productData[0].filter((item: any) => item.id === parseInt(id as string));
  const product = filteredProducts.length > 0 ? filteredProducts[0] : null;

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
  console.log(product);
  return (
    <Fragment>
      <Typography title={`${product.title} `} />
      <div className="ProductDetails">
        <div className="CarouselImage">
          <img
            className="CarouselImage"
            src={product.image}
            alt={`${product.title} Slide`}
            style={{maxWidth:"500px"}}
          />
        </div>
        <div className="detailsBlock">
          <div className="detailsBlock-1" style={{margin:0}}>
            <h1>{product.title}</h1>
          </div>
          <div className="detailsBlock" style={{paddingTop:"10px"}}>
          Category:  <span> {product.category}</span>
          </div>
          <div className="detailsBlock-2" style={{paddingTop:"10px"}}>
            Price: <span>{product.price}</span>
          </div>
          <Rating 
                name={`rating-${product.id}`} 
                value={product?.rating.rate as any || 0} 
                precision={0.5} 
                readOnly 
              />
          <div className="detailsBlock-3" style={{paddingTop:"10px"}}>
            Description: <span>{product.description}</span>
          </div>
          <Button variant="contained" endIcon={<ShoppingCartCheckoutIcon />} onClick={() => handleAddToCart(product)}>
                  Add To Cart
            </Button>
        </div>
       
      </div>
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
    </Fragment>
  );
};

export default ProductDatails;
