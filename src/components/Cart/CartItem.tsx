import classes from "./CartItem.module.css";

const CartItem = (props: {
  title: string;
  price: number;
  amount: number;
  image: string;
  onAdd: () => void;
  onRemove: () => void;
}) => {
  return (
    <li className={classes["cart-item"]}>
      <div className={classes.details}>
        <h2>{props.title}</h2>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
      </div>
      <div className={classes.summary}>
        <div className={classes.values}>
          <span className={classes.amount}>x {props.amount}</span>
          <span className={classes.price}>£{props.price.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onRemove}>−</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
