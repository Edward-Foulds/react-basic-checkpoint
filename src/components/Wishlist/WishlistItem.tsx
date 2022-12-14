import classes from "./WishlistItem.module.css";

const WishlistItem = (props: {
  title: string;
  price: number;
  image: string;
  onAddToCart: () => void;
  onRemoveFromWishlist: () => void;
}) => {
  return (
    <li className={classes["wishlist-item"]}>
      <div className={classes.details}>
        <h2>{props.title}</h2>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
      </div>
      <div className={classes.actions}>
        <span className={classes.price}>£{props.price.toFixed(2)}</span>
        <button onClick={props.onRemoveFromWishlist}>
          Remove from Wishlist
        </button>
        <button onClick={props.onAddToCart}>Add to Cart</button>
      </div>
    </li>
  );
};

export default WishlistItem;
