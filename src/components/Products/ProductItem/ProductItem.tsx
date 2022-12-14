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

  const onWishList = wishlistCtx.items.find(
    (item) => item.id === props.product.id
  );

  const handleHeartClick = () => {
    onWishList
      ? wishlistCtx.removeItem(props.product.id)
      : addToWishlistHandler();
  };

  return (
    <Card>
      <div className={classes.card}>
        <div className={classes.title}>
          <h3>{props.product.title}</h3>
        </div>

        <div className={classes.product}>
          <svg onClick={handleHeartClick}>
            <use
              xlinkHref={`./img/sprite.svg#icon-heart${
                onWishList ? "" : "-outlined"
              }`}
            ></use>
          </svg>
          <div className={classes.image}>
            <img src={props.product.image} alt={props.product.title} />
          </div>
        </div>
        <div className={classes.action}>
          <span>Price: £{props.product.price.toFixed(2)}</span>
          <ProductItemForm onAddToCart={addToCartHandler} />
        </div>
      </div>
    </Card>
  );
};

export default ProductItem;
