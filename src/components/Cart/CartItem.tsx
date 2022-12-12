import classes from "./CartItem.module.css";

const CartItem = (props: {
  title: string;
  price: number;
  amount: number;
  image: string;
  onAdd: () => void;
}) => {
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.title}</h2>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.summary}>
          <span className={classes.price}>£{props.price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
