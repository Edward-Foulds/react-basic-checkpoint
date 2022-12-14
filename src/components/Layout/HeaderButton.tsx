import classes from "./HeaderButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import { useContext, useState, useEffect } from "react";
import WishlistContext from "../../store/wishlist-context";
import WishlistIcon from "../Wishlist/WishlistIcon";

const HeaderButton = (props: {
  text: string;
  onShowModal: () => void;
}): JSX.Element => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);
  const wishlistCtx = useContext(WishlistContext);

  const numberOfCartItems = () =>
    cartCtx.items.reduce((curTotal, item) => curTotal + item.amount, 0);

  const numberOfItems =
    props.text === "Cart" ? numberOfCartItems() : wishlistCtx.items.length;

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  const items = props.text === "Cart" ? cartCtx.items : wishlistCtx.items;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onShowModal}>
      <span className={classes.icon}>
        {props.text === "Cart" ? <CartIcon /> : <WishlistIcon />}
      </span>
      <div className={classes.fullView}>
        <span>{props.text}</span>
        <span className={classes.badge}>{numberOfItems}</span>
      </div>
    </button>
  );
};

export default HeaderButton;
