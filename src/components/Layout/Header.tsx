import Title from "./Title";
import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const Header = (props: {
  onShowCart: () => void;
  onShowWishlist: () => void;
}): JSX.Element => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <HeaderButton
              text={"Wishlist"}
              onShowModal={props.onShowWishlist}
            />
          </li>
          <li>
            <Title />
          </li>
          <li>
            <HeaderButton text={"Cart"} onShowModal={props.onShowCart} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
