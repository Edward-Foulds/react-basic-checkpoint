import Modal from "../UI/Modal";
import WishlistContext from "../../store/wishlist-context";
import { useContext } from "react";
import WishlistItem from "./WishlistItem";
import Item from "../../models/item";
import CartContext from "../../store/cart-context";

import classes from "./Wishlist.module.css";

const Wishlist = (props: { onClose: () => void }) => {
  const wishlistCtx = useContext(WishlistContext);
  const cartCtx = useContext(CartContext);

  const wishlistItemRemoveHandler = (id: number) => {
    wishlistCtx.removeItem(id);
  };

  const cartItemAddHandler = (item: Item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const wishlistHasItems = wishlistCtx.items.length > 0;

  const wishlistItems = wishlistCtx.items.map((item) => (
    <WishlistItem
      key={item.id}
      title={item.title}
      price={item.price}
      image={item.image}
      onAddToCart={cartItemAddHandler.bind(null, item)}
      onRemoveFromWishlist={wishlistItemRemoveHandler.bind(null, item.id)}
    />
  ));

  return (
    <Modal onClose={props.onClose}>
      <div className={classes["wishlist-header"]}>
        <h3 className={classes["wishlist-title"]}>Wishlist</h3>
        <button onClick={props.onClose}>Close</button>
      </div>
      <ul className={classes["wishlist-items"]}>
        {wishlistHasItems ? (
          wishlistItems
        ) : (
          <p style={{ textAlign: "center", color: "red" }}>
            No items currently in your wishlist.
          </p>
        )}
      </ul>
    </Modal>
  );
};

export default Wishlist;
