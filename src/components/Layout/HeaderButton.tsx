import classes from "./HeaderButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import WishlistContext from "../../store/wishlist-context";

const HeaderButton: React.FC<{
  text: string;
  onShowModal: () => void;
}> = (props) => {
  const cartCtx = useContext(CartContext);
  const wishlistCtx = useContext(WishlistContext);

  const numberOfCartItems = () =>
    cartCtx.items.reduce((curTotal, item) => curTotal + item.amount, 0);

  const numberOfItems =
    props.text === "Cart" ? numberOfCartItems() : wishlistCtx.items.length;

  return (
    <button className={classes.button} onClick={props.onShowModal}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>{props.text}</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderButton;
