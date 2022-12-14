import { useContext } from "react";
import Item from "../../models/item";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart: React.FC<{ onClose: () => void }> = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemAddHandler = (item: Item) => {
    // Item spread into addItem function to ensure that amount is plus 1, not the previous amount
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id: number) => {
    cartCtx.removeItem(id);
  };

  const hasItems = cartCtx.items.length > 0;

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      title={item.title}
      image={item.image}
      amount={item.amount}
      price={item.price}
      onAdd={cartItemAddHandler.bind(null, item)}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
    />
  ));

  return (
    <Modal onClose={props.onClose}>
      <div className={classes["cart-header"]}>
        <h3 className={classes["cart-title"]}>Cart</h3>
        <button onClick={props.onClose}>Close</button>
      </div>

      <div>
        <ul className={classes["cart-items"]}>
          {hasItems ? (
            cartItems
          ) : (
            <p style={{ textAlign: "center", color: "red" }}>
              No items currently in your cart.
            </p>
          )}
        </ul>

        <div className={classes.total}>
          <span>Total Amount</span>
          <span>£{cartCtx.totalAmount.toFixed(2)}</span>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
