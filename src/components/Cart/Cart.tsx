import { useContext } from "react";
import Item from "../../models/item";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart: React.FC<{ onClose: () => void }> = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemAddHandler = (item: Item) => {
    // Item spread into addItem function to ensure that amount is plus 1, not the previous amount
    cartCtx.addItem({ ...item, amount: 1 });
  };

  return (
    <Modal onClose={props.onClose}>
      <h3>Cart</h3>
      <div>
        <ul>
          {cartCtx.items.map((item) => (
            <CartItem
              key={item.id}
              title={item.title}
              image={item.image}
              amount={item.amount}
              price={item.price}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default Cart;
