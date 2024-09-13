import { Button } from "@mui/material";
import "../styles/cartItem.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";

const CartItemList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.products.cart);

  // const handleAddToCart = (item: any) => {
  //   dispatch(addToCart(item));
  // };

  // const handleRemoveFromCart = (id: number) => {
  //   dispatch(removeFromCart(id));
  // };

  const totalPrice = cartItems.reduce(
    (acc: number, item: any) => (acc += item.price),
    0
  );
  return (
    <>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item: any) => (
          <div className="CartItem" key={item.id}>
            <div>
              <h3>{item.title}</h3>
              <div className="information">
                <p>Price: ${item.price}</p>
                <p>
                  Total: $
                  {item.amount
                    ? (item.amount * item.price).toFixed(2)
                    : item.price}
                </p>
              </div>
              <div className="buttons">
                <Button
                  size="small"
                  disableElevation
                  variant="contained"

                  // onClick={() => handleRemoveFromCart(item.id)}
                >
                  - Remove from cart
                </Button>
                <p style={{ margin: "0.8rem" }}>
                  {item.amount ? item.amount : 1}{" "}
                </p>
                <Button
                  size="small"
                  disableElevation
                  variant="contained"
                  // onClick={() => handleAddToCart(item)}
                >
                  + Add to cart
                </Button>
              </div>
            </div>
            <img src={item.image} alt={item.title} />
          </div>
        ))
      )}
      <div className="total-price">Total Price: ${totalPrice.toFixed(2)}</div>
    </>
  );
};

export default CartItemList;
