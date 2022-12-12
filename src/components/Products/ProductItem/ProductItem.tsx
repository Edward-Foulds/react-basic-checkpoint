import Card from "../../UI/Card";
import Product from "../../../models/product";
import classes from "./ProductItem.module.css";
import ProductItemForm from "./ProductItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import WishlistContext from "../../../store/wishlist-context";

const ProductItem: React.FC<{ product: Product }> = (props) => {
  const cartCtx = useContext(CartContext);
  const wishlistCtx = useContext(WishlistContext);

  const addToCartHandler = (amount: number) => {
    cartCtx.addItem({
      id: props.product.id,
      title: props.product.title,
      image: props.product.image,
      price: props.product.price,
      amount: amount,
    });
  };

  const addToWishlistHandler = () => {
    wishlistCtx.addItem({
      id: props.product.id,
      title: props.product.title,
      image: props.product.image,
      price: props.product.price,
      amount: 1,
    });
  };

  return (
    <Card>
      <div className={classes.product}>
        <h3>{props.product.title}</h3>
        <img src={props.product.image} alt={props.product.title} />
        <div>
          <button onClick={addToWishlistHandler}>
            <svg>
              <use xlinkHref="./img/sprite.svg#icon-heart-outlined"></use>
            </svg>
          </button>
        </div>
        <p>£{props.product.price}</p>
        <ProductItemForm onAddToCart={addToCartHandler} />
      </div>
    </Card>
  );
};

export default ProductItem;
